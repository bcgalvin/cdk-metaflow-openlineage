import { Stack } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { DMSReplicator, KinesisPipeline, RDSReadReplica, ReplicaConfig } from './constructs';

export interface MetaflowOpenlineageProps {
  readonly vpcId: string;
  readonly replicaConfig: ReplicaConfig;
}

export class MetaflowOpenlineage extends Construct {
  constructor(scope: Construct, id: string, props: MetaflowOpenlineageProps) {
    super(scope, id);

    const vpc = Vpc.fromLookup(this, `vpc`, {
      vpcId: props.vpcId,
      region: Stack.of(this).region,
    });

    const vpcSubnets = vpc.selectSubnets({
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      onePerAz: true,
    });

    const readReplica = new RDSReadReplica(this, `read-replica`, {
      vpc: vpc,
      vpcSubnets: vpcSubnets,
      replicaConfig: props.replicaConfig,
    });

    const kinesisPipeline = new KinesisPipeline(this, `kinesis-pipeline`);

    new DMSReplicator(this, 'dms-replicator', {
      vpc: vpc,
      source: {
        sourceDB: readReplica,
      },
      target: {
        bucket: kinesisPipeline.bucket,
        stream: kinesisPipeline.stream,
      },
    });
  }
}
