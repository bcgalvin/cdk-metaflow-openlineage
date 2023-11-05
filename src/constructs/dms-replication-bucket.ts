import { AnyPrincipal, Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { BlockPublicAccess, Bucket, BucketAccessControl, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';

export class DmsReplicationBucket extends Bucket {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      accessControl: BucketAccessControl.LOG_DELIVERY_WRITE,
    });
    this.addToResourcePolicy(
      new PolicyStatement({
        principals: [new AnyPrincipal()],
        effect: Effect.DENY,
        actions: ['s3:*'],
        conditions: {
          Bool: { 'aws:SecureTransport': false },
        },
        resources: [this.bucketArn, this.bucketArn + '/*'],
      }),
    );

    NagSuppressions.addResourceSuppressions(this, [
      {
        id: 'AwsSolutions-S1',
        reason: 'This is a proof-of-concept so do not need access logs on this bucket.',
      },
    ]);
  }
}
