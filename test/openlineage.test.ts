import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { PostgresEngineVersion } from 'aws-cdk-lib/aws-rds';
import { MetaflowOpenlineage } from '../src';

describe('snapshot', () => {
  it('Should match snapshot', () => {
    // Given
    const stack = new Stack(undefined, undefined, {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });

    // When
    new MetaflowOpenlineage(stack, 'metaflow-openlineage-snapshot-test', {
      vpcId: 'vpc-12ab3c4d',
      replicaConfig: {
        instanceEndpointAddress: 'test.pg.us-east-1.rds.amazonaws.com',
        port: 5432,
        instanceIdentifier: 'test-mf',
        securityGroupIds: ['sg-0abc12c3de4fgh567'],
        postgresVersion: PostgresEngineVersion.VER_14_7,
        instanceType: InstanceType.of(InstanceClass.BURSTABLE3, InstanceSize.SMALL),
      },
    });

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
