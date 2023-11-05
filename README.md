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

new MetaflowOpenlineage(stack, 'metaflow-openlineage-snapshot-test');

app.synth();
```

## Usage

## FAQ

