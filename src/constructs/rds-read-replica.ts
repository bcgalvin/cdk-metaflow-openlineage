import {
  InstanceType,
  ISecurityGroup,
  ISubnet,
  IVpc,
  Peer,
  Port,
  SecurityGroup,
  SubnetSelection,
} from 'aws-cdk-lib/aws-ec2';
import {
  DatabaseInstance,
  DatabaseInstanceEngine,
  DatabaseInstanceReadReplica,
  ParameterGroup,
  PostgresEngineVersion,
} from 'aws-cdk-lib/aws-rds';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';

export interface ReplicaConfig {
  readonly instanceIdentifier: string;
  readonly instanceEndpointAddress: string;
  readonly port: number;
  readonly securityGroupIds: string[];
  readonly postgresVersion: PostgresEngineVersion;
  readonly instanceType: InstanceType;
  readonly dbSecretArn: string;
}

export interface RDSReadReplicaProps {
  readonly vpc: IVpc;
  readonly vpcSubnets: SubnetSelection;
  readonly replicaConfig: ReplicaConfig;
}

export class RDSReadReplica extends Construct {
  public readonly readReplica: DatabaseInstanceReadReplica;
  public readonly readReplicaSecurityGroups: ISecurityGroup[];

  constructor(scope: Construct, id: string, props: RDSReadReplicaProps) {
    super(scope, id);

    const securityGroups = props.replicaConfig.securityGroupIds.map((secgroupId) =>
      SecurityGroup.fromSecurityGroupId(this, `${id}-${secgroupId}-sg`, secgroupId),
    );

    const dbSecret = Secret.fromSecretCompleteArn(this, `${id}-database-secret`, props.replicaConfig.dbSecretArn);

    const readReplicaSecurityGroup = new SecurityGroup(this, `${id}-read-replica-sg`, {
      allowAllOutbound: false,
      description: `${scope.node.path}/SG`,
      vpc: props.vpc,
    });

    // Allow all traffic within the security group on port 443
    readReplicaSecurityGroup.connections.allowInternally(Port.tcp(443), 'Traffic within this SecurityGroup');
    // Allow all traffic within cidr for private subnets
    props.vpc.privateSubnets.forEach((subnet: ISubnet) => {
      readReplicaSecurityGroup.addIngressRule(
        Peer.ipv4(subnet.ipv4CidrBlock),
        Port.tcp(5432),
        'Traffic from private subnets',
      );
    });

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
      vpcSubnets: props.vpcSubnets,
      securityGroups: [readReplicaSecurityGroup],
      parameterGroup: replicationParameterGroup,
      multiAz: false,
      publiclyAccessible: false,
    });
    dbSecret.attach(this.readReplica);

    this.readReplica.connections.allowDefaultPortInternally();
    this.readReplicaSecurityGroups = this.readReplica.connections.securityGroups;

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
