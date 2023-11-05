import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IStream, Stream, StreamEncryption, StreamMode } from 'aws-cdk-lib/aws-kinesis';
import { CfnDeliveryStream } from 'aws-cdk-lib/aws-kinesisfirehose';
import { ILogGroup, LogGroup, LogStream, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { SecureBucket } from './secure-bucket';

export class KinesisPipeline extends Construct {
  public readonly bucket: IBucket;
  public readonly stream: IStream;
  public readonly firehoseLogGroup: ILogGroup;
  public readonly writerRole: IRole;
  public readonly readerRole: IRole;
  public readonly deliveryStream: CfnDeliveryStream;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket = new SecureBucket(this, `secure-bucket`);

    this.stream = new Stream(this, `target-stream`, {
      retentionPeriod: Duration.days(30),
      streamMode: StreamMode.ON_DEMAND,
      encryption: StreamEncryption.MANAGED,
    });

    this.writerRole = new Role(this, `firehose-writer`, {
      assumedBy: new ServicePrincipal('firehose.amazonaws.com'),
    });

    this.readerRole = new Role(this, `firehose-reader`, {
      assumedBy: new ServicePrincipal('firehose.amazonaws.com'),
    });

    this.bucket.grantWrite(this.writerRole);
    this.stream.grantRead(this.readerRole);

    this.firehoseLogGroup = new LogGroup(this, `firehose-lg`, {
      retention: RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const firehoseLogStream = new LogStream(this, `firehose-ls`, {
      logGroup: this.firehoseLogGroup,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.deliveryStream = new CfnDeliveryStream(this, 'delivery-stream', {
      deliveryStreamType: 'KinesisStreamAsSource',
      kinesisStreamSourceConfiguration: {
        kinesisStreamArn: this.stream.streamArn,
        roleArn: this.readerRole.roleArn,
      },
      extendedS3DestinationConfiguration: {
        bucketArn: this.bucket.bucketArn,
        roleArn: this.writerRole.roleArn,
        bufferingHints: {
          intervalInSeconds: 60,
          sizeInMBs: 128,
        },
        compressionFormat: 'UNCOMPRESSED',
        cloudWatchLoggingOptions: {
          enabled: true,
          logGroupName: this.firehoseLogGroup.logGroupName,
          logStreamName: firehoseLogStream.logStreamName,
        },
        prefix: 'processed/',
        errorOutputPrefix: 'error/',
      },
    });

    NagSuppressions.addResourceSuppressions(
      this.writerRole,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason:
            'This is coming from the grant() methods on the s3 bucket construct, which is least-priv enough for me',
        },
      ],
      true,
    );

    NagSuppressions.addResourceSuppressions(this.deliveryStream, [
      {
        id: 'AwsSolutions-KDF1',
        reason: "If kmsEncryptionConfig isn't specified it will use the aws managed key and not no encryption",
      },
    ]);
  }
}
