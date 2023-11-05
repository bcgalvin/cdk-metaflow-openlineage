import { Aws } from 'aws-cdk-lib';
import {
  CfnEndpoint,
  CfnReplicationInstance,
  CfnReplicationSubnetGroup,
  CfnReplicationTask,
} from 'aws-cdk-lib/aws-dms';
import { IVpc, SecurityGroup, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IStream } from 'aws-cdk-lib/aws-kinesis';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { RDSReadReplica } from './rds-read-replica';

export interface TargetProps {
  readonly stream: IStream;
  readonly bucket: IBucket;
}

export interface SourceProps {
  readonly sourceDB: RDSReadReplica;
}

export interface DMSReplicatorProps {
  readonly vpc: IVpc;
  readonly source: SourceProps;
  readonly target: TargetProps;
}

export class DMSReplicator extends Construct {
  readonly task?: CfnReplicationTask;
  readonly replicatorInstance?: CfnReplicationInstance;

  constructor(scope: Construct, id: string, props: DMSReplicatorProps) {
    super(scope, id);

    const { readReplica, dbSecret } = { ...props.source.sourceDB };
    const { stream, bucket } = { ...props.target };

    const writerRole = new Role(this, 'writerRole', {
      assumedBy: new ServicePrincipal('dms.amazonaws.com'),
    });
    const targetRole = new Role(this, 'targetRole', {
      assumedBy: new ServicePrincipal('dms.amazonaws.com'),
    });

    const dmsSecretRole = new Role(this, `dms-secret-role`, {
      assumedBy: new ServicePrincipal(`dms.${Aws.REGION}.amazonaws.com`),
    });

    const dmsRole = new Role(this, `dms-role`, {
      roleName: `dms-vpc-role`, // need the name for this one
      assumedBy: new ServicePrincipal('dms.amazonaws.com'),
    });

    dmsRole.addManagedPolicy(
      ManagedPolicy.fromManagedPolicyArn(
        this,
        `AmazonDMSVPCManagementRole`,
        `arn:aws:iam::aws:policy/service-role/AmazonDMSVPCManagementRole`,
      ),
    );

    bucket.grantReadWrite(targetRole);

    const dmsSecurityGroup = new SecurityGroup(this, 'dms-sg', {
      vpc: props.vpc,
    });

    const subnetGroup = new CfnReplicationSubnetGroup(this, 'dms-subnet-group', {
      subnetIds: props.vpc.selectSubnets({
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
        onePerAz: true,
      }).subnetIds,
      replicationSubnetGroupDescription: 'Replication Subnet group',
    });

    subnetGroup.node.addDependency(dmsRole);
    stream.grantReadWrite(writerRole);
    readReplica.connections.allowDefaultPortFrom(dmsSecurityGroup);
    dbSecret.grantRead(dmsSecretRole);

    const source = new CfnEndpoint(this, 'Source', {
      endpointType: 'source',
      engineName: 'postgres',
      postgreSqlSettings: {
        secretsManagerAccessRoleArn: dmsSecretRole.roleArn,
        secretsManagerSecretId: dbSecret.secretName,
      },
      databaseName: 'metaflow',
    });

    const target = new CfnEndpoint(this, 'dms-target', {
      endpointType: 'target',
      engineName: 'kinesis',
      kinesisSettings: {
        messageFormat: 'JSON',
        streamArn: props.target.stream.streamArn,
        serviceAccessRoleArn: writerRole.roleArn,
      },
    });

    this.replicatorInstance = new CfnReplicationInstance(this, 'DmsInstance', {
      replicationInstanceClass: 'dms.r5.large',
      allocatedStorage: 10,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: false,
      multiAz: false,
      publiclyAccessible: false,
      replicationSubnetGroupIdentifier: subnetGroup.ref,
      vpcSecurityGroupIds: [dmsSecurityGroup.securityGroupId],
    });

    this.task = new CfnReplicationTask(this, 'KinesisReplicationTask', {
      replicationInstanceArn: this.replicatorInstance.ref,
      migrationType: 'full-load-and-cdc',
      sourceEndpointArn: source.ref,
      targetEndpointArn: target.ref,
      tableMappings: JSON.stringify(this.getMappingRule()),
      replicationTaskSettings: JSON.stringify(this.getTaskSettings()),
    });

    NagSuppressions.addResourceSuppressions(
      dmsRole,
      [
        {
          id: 'AwsSolutions-IAM4',
          reason: "It's ok for us to use managed policies",
        },
      ],
      true,
    );
    // kinesis: DescribeStream;
    NagSuppressions.addResourceSuppressions(
      targetRole,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason:
            'This is coming from the grant() methods on the s3 bucket construct, which is least-priv enough for me',
        },
      ],
      true,
    );
  }

  private getMappingRule(): Object {
    return {
      rules: [
        {
          'rule-type': 'selection',
          'rule-id': '1',
          'rule-name': '1',
          'object-locator': {
            'schema-name': 'public',
            'table-name': '%',
          },
          'rule-action': 'include',
          filters: [],
        },
      ],
    };
  }

  private getTaskSettings(): Object {
    return {
      TargetMetadata: {
        TargetSchema: '',
        SupportLobs: true,
        FullLobMode: false,
        LobChunkSize: 0,
        LimitedSizeLobMode: true,
        LobMaxSize: 32,
        InlineLobMaxSize: 0,
        LoadMaxFileSize: 0,
        ParallelLoadThreads: 0,
        ParallelLoadBufferSize: 0,
        BatchApplyEnabled: false,
        TaskRecoveryTableEnabled: false,
        ParallelLoadQueuesPerThread: 0,
        ParallelApplyThreads: 0,
        ParallelApplyBufferSize: 0,
        ParallelApplyQueuesPerThread: 0,
      },
      FullLoadSettings: {
        TargetTablePrepMode: 'DO_NOTHING',
        CreatePkAfterFullLoad: false,
        StopTaskCachedChangesApplied: false,
        StopTaskCachedChangesNotApplied: false,
        MaxFullLoadSubTasks: 8,
        TransactionConsistencyTimeout: 600,
        CommitRate: 10000,
      },
      Logging: {
        EnableLogging: true,
        LogComponents: [
          {
            Id: 'DATA_STRUCTURE',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'COMMUNICATION',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'IO',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'COMMON',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'FILE_FACTORY',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'FILE_TRANSFER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'REST_SERVER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'ADDONS',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'TARGET_LOAD',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'TARGET_APPLY',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'SOURCE_UNLOAD',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'SOURCE_CAPTURE',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'TRANSFORMATION',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'SORTER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'TASK_MANAGER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'TABLES_MANAGER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'METADATA_MANAGER',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'PERFORMANCE',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
          {
            Id: 'VALIDATOR_EXT',
            Severity: 'LOGGER_SEVERITY_DEFAULT',
          },
        ],
      },
      ControlTablesSettings: {
        historyTimeslotInMinutes: 5,
        ControlSchema: '',
        HistoryTimeslotInMinutes: 5,
        HistoryTableEnabled: false,
        SuspendedTablesTableEnabled: false,
        StatusTableEnabled: false,
      },
      StreamBufferSettings: {
        StreamBufferCount: 3,
        StreamBufferSizeInMB: 8,
        CtrlStreamBufferSizeInMB: 5,
      },
      ChangeProcessingDdlHandlingPolicy: {
        HandleSourceTableDropped: true,
        HandleSourceTableTruncated: true,
        HandleSourceTableAltered: true,
      },
      ErrorBehavior: {
        DataErrorPolicy: 'LOG_ERROR',
        DataTruncationErrorPolicy: 'LOG_ERROR',
        DataErrorEscalationPolicy: 'SUSPEND_TABLE',
        DataErrorEscalationCount: 0,
        TableErrorPolicy: 'SUSPEND_TABLE',
        TableErrorEscalationPolicy: 'STOP_TASK',
        TableErrorEscalationCount: 0,
        RecoverableErrorCount: -1,
        RecoverableErrorInterval: 5,
        RecoverableErrorThrottling: true,
        RecoverableErrorThrottlingMax: 1800,
        ApplyErrorDeletePolicy: 'IGNORE_RECORD',
        ApplyErrorInsertPolicy: 'LOG_ERROR',
        ApplyErrorUpdatePolicy: 'LOG_ERROR',
        ApplyErrorEscalationPolicy: 'LOG_ERROR',
        ApplyErrorEscalationCount: 0,
        ApplyErrorFailOnTruncationDdl: false,
        FullLoadIgnoreConflicts: true,
        FailOnTransactionConsistencyBreached: false,
        FailOnNoTablesCaptured: false,
      },
      ChangeProcessingTuning: {
        BatchApplyPreserveTransaction: true,
        BatchApplyTimeoutMin: 1,
        BatchApplyTimeoutMax: 30,
        BatchApplyMemoryLimit: 500,
        BatchSplitSize: 0,
        MinTransactionSize: 1000,
        CommitTimeout: 1,
        MemoryLimitTotal: 1024,
        MemoryKeepTime: 60,
        StatementCacheSize: 50,
      },
    };
  }
}
