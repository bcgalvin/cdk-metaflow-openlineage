import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
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
    new MetaflowOpenlineage(stack, 'metaflow-openlineage-snapshot-test');

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
