import { InstanceType, IVpc, SecurityGroup, SubnetSelection } from 'aws-cdk-lib/aws-ec2';
import {
  DatabaseInstance,
  DatabaseInstanceEngine,
  DatabaseInstanceReadReplica,
  ParameterGroup,
  PostgresEngineVersion,
} from 'aws-cdk-lib/aws-rds';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';

export interface ReplicaConfig {
  readonly instanceIdentifier: string;
  readonly instanceEndpointAddress: string;
  readonly port: number;
  readonly securityGroupIds: string[];
  readonly postgresVersion: PostgresEngineVersion;
  readonly instanceType: InstanceType;
  readonly subnetSelection: SubnetSelection;
}

export interface RDSReadReplicaProps {
  readonly vpc: IVpc;
  readonly replicaConfig: ReplicaConfig;
}

export class RDSReadReplica extends Construct {
  public readonly readReplica: DatabaseInstanceReadReplica;

  constructor(scope: Construct, id: string, props: RDSReadReplicaProps) {
    super(scope, id);

    const securityGroups = props.replicaConfig.securityGroupIds.map((secgroupId) =>
      SecurityGroup.fromSecurityGroupId(this, `${id}-${secgroupId}-sg`, secgroupId),
    );

    const postgresRDSInstance = DatabaseInstance.fromDatabaseInstanceAttributes(
      this,
      `${id}-${props.replicaConfig.instanceIdentifier}`,
      {
        instanceIdentifier: props.replicaConfig.instanceIdentifier,
        instanceEndpointAddress: props.replicaConfig.instanceEndpointAddress,
        port: props.replicaConfig.port,
        securityGroups: securityGroups,
      },
    );

    const replicationParameterGroup = new ParameterGroup(this, 'ParameterGroup', {
      engine: DatabaseInstanceEngine.postgres({ version: props.replicaConfig.postgresVersion }),
      parameters: {
        'rds.logical_replication': '1',
        wal_sender_timeout: '0',
      },
    });

    this.readReplica = new DatabaseInstanceReadReplica(this, `${id}-read-replica-instance`, {
      sourceDatabaseInstance: postgresRDSInstance,
      instanceType: props.replicaConfig.instanceType,
      vpc: props.vpc,
      vpcSubnets: props.replicaConfig.subnetSelection,
      securityGroups: securityGroups,
      parameterGroup: replicationParameterGroup,
      multiAz: false,
      publiclyAccessible: false,
    });

    NagSuppressions.addResourceSuppressions(this.readReplica, [
      {
        id: 'AwsSolutions-RDS11',
        reason: 'Replica uses default port',
      },
      {
        id: 'AwsSolutions-RDS10',
        reason: "Replica doesn't have deletion protection turned on",
      },
      {
        id: 'AwsSolutions-RDS3',
        reason: 'Replica is single AZ',
      },
      {
        id: 'AwsSolutions-RDS2',
        reason: 'Replica not encrypted',
      },
    ]);
  }
}
