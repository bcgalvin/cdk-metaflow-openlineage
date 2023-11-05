import { Stack } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { DmsReplicationBucket, RDSReadReplica, ReplicaConfig } from './constructs';

export interface MetaflowOpenlineageProps {
  readonly vpcId: string;
  readonly replicaConfig: ReplicaConfig;
}

export class MetaflowOpenlineage extends Construct {
  public readonly dmsReplicationBucket: IBucket;

  constructor(scope: Construct, id: string, props: MetaflowOpenlineageProps) {
    super(scope, id);

    this.dmsReplicationBucket = new DmsReplicationBucket(this, 'dms-replication-bucket');

    const vpc = Vpc.fromLookup(this, 'vpc-lookup', {
      vpcId: props.vpcId,
      region: Stack.of(this).region,
    });

    const vpcSubnets = vpc.selectSubnets({
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      onePerAz: true,
    });

    new RDSReadReplica(this, 'ol-read-replica', {
      vpc: vpc,
      vpcSubnets: vpcSubnets,
      replicaConfig: props.replicaConfig,
    });
  }
}
