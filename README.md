## Getting started

### Requirements

- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Installation

Add to a new or
existing [AWS CDK app in the language of your choice](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html):

#### Node.js

```sh
# npm 
npm install cdk-metaflow-openlineage
# Yarn
yarn add cdk-metaflow-openlineage
# pnpm
pnpm add cdk-metaflow-openlineage
```

#### Other languages

```sh
# Python
pip install cdk-metaflow-openlineage
```

### Full example

```ts

const app = new App();
const stack = new Stack(app, 'Stack');

new MetaflowOpenlineage(stack, 'metaflow-openlineage-snapshot-test', {
    vpcId: 'vpc-12ab3c4d',
    replicaConfig: {
        instanceEndpointAddress: 'test.pg.us-east-1.rds.amazonaws.com',
        port: 5432,
        instanceIdentifier: 'test-mf',
        securityGroupIds: ['sg-0abc12c3de4fgh567'],
        postgresVersion: PostgresEngineVersion.VER_14_7,
        instanceType: InstanceType.of(InstanceClass.BURSTABLE3, InstanceSize.SMALL),
        dbSecretArn: 'arn:aws:secretsmanager:us-east-1:123456789012:secret:test-secret',
    },
});


app.synth();
```

## Usage

## FAQ

