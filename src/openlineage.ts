import { Duration, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { IStream, Stream, StreamEncryption, StreamMode } from 'aws-cdk-lib/aws-kinesis';
import { ILogGroup, LogGroup, LogStream, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { RDSReadReplica, ReplicaConfig, SecureBucket } from './constructs';

export interface MetaflowOpenlineageProps {
  readonly vpcId: string;
  readonly replicaConfig: ReplicaConfig;
}

export class MetaflowOpenlineage extends Construct {
  public readonly dmsReplicationBucket: IBucket;
  public readonly stream: IStream;
  public readonly firehoseLogGroup: ILogGroup;

  constructor(scope: Construct, id: string, props: MetaflowOpenlineageProps) {
    super(scope, id);

    this.dmsReplicationBucket = new SecureBucket(this, `${id}-secure-bucket`);

    this.stream = new Stream(this, `${id}-target-stream`, {
      retentionPeriod: Duration.days(30),
      streamMode: StreamMode.ON_DEMAND,
      encryption: StreamEncryption.MANAGED,
    });

    this.firehoseLogGroup = new LogGroup(this, `${id}-firehose-lg`, {
      retention: RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new LogStream(this, `${id}-firehose-ls`, {
      logGroup: this.firehoseLogGroup,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const vpc = Vpc.fromLookup(this, `${id}-vpc`, {
      vpcId: props.vpcId,
      region: Stack.of(this).region,
    });

    const vpcSubnets = vpc.selectSubnets({
      subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      onePerAz: true,
    });

    new RDSReadReplica(this, `${id}-read-replica`, {
      vpc: vpc,
      vpcSubnets: vpcSubnets,
      replicaConfig: props.replicaConfig,
    });
  }
}
