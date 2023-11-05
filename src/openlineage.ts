import { Stack } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { RDSReadReplica, ReplicaConfig } from './constructs';

export interface MetaflowOpenlineageProps {
  readonly vpcId: string;
  readonly replicaConfig: ReplicaConfig;
}

export class MetaflowOpenlineage extends Construct {
  constructor(scope: Construct, id: string, props: MetaflowOpenlineageProps) {
    super(scope, id);

    const vpc = Vpc.fromLookup(this, 'vpc-lookup', {
      vpcId: props.vpcId,
      region: Stack.of(this).region,
    });

    new RDSReadReplica(this, 'ol-read-replica', {
      vpc: vpc,
      replicaConfig: props.replicaConfig,
    });
  }
}
