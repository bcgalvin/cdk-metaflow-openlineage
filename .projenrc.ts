import { TextFile } from 'projen';
import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';
import { ArrowParens, NodePackageManager, TrailingComma } from 'projen/lib/javascript';

const cdkVersion = '2.104.0';
const commonIgnore = ['.idea', '.vscode', 'cdk.context.json', 'index.scip'];

const project = new AwsCdkConstructLibrary({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  name: 'cdk-metaflow-openlineage',
  repositoryUrl: 'https://github.com/bcgalvin/cdk-metaflow-openlineage.git',
  description: 'AWS CDK construct library to forward metadata database cdc events to dynamodb',
  packageManager: NodePackageManager.YARN_CLASSIC,
  license: 'MIT',
  // Dependencies
  jsiiVersion: '~5.0.0',
  deps: ['cdk-nag'],
  devDeps: [
    '@types/aws-lambda',
    `@aws-cdk/integ-runner@^${cdkVersion}-alpha.0`,
    `@aws-cdk/integ-tests-alpha@^${cdkVersion}-alpha.0`,
  ],
  // Config
  experimentalIntegRunner: true,
  eslintOptions: {
    dirs: ['src', 'test'],
    prettier: true,
  },
  projenrcTs: true,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.ALWAYS,
      singleQuote: true,
    },
  },
  tsconfig: {
    compilerOptions: {
      lib: ['es2018', 'dom'],
    },
  },
  pullRequestTemplate: false,
  githubOptions: {
    pullRequestLint: false,
    mergify: false,
  },
  jestOptions: {
    jestConfig: {
      globals: {
        'ts-jest': {
          isolatedModules: true,
        },
      },
    },
  },
  publishToPypi: {
    distName: 'cdk-metaflow-openlineage',
    module: 'cdk_metaflow_openlineage',
  },
  release: false,
  integrationTestAutoDiscover: true,
  gitignore: commonIgnore,
});

project.eslint?.addRules({
  '@typescript-eslint/member-ordering': 'off',
});

// jsii rosetta
const rosettaTask = project.addTask('rosetta:extract', {
  description: 'Test rosetta extract',
  exec: 'yarn --silent jsii-rosetta extract --strict',
});
project.postCompileTask.spawn(rosettaTask);
project.addGitIgnore('.jsii.tabl.json');
project.addPackageIgnore('.jsii.tabl.json');
project.addPackageIgnore('/rosetta/');

new TextFile(project, 'rosetta/default.ts-fixture', {
  lines: [
    '// Fixture with packages imported, but nothing else',
    "import { Construct } from 'constructs';",
    "import { PostgresEngineVersion } from 'aws-cdk-lib/aws-rds';",
    "import { InstanceClass, InstanceSize, InstanceType, SubnetType } from 'aws-cdk-lib/aws-ec2';",
    "import { MetaflowOpenlineage } from 'cdk-metaflow-openlineage';",
    'import {',
    '  Stack,',
    '  App,',
    "} from 'aws-cdk-lib';",
    '',
    'class Fixture extends Stack {',
    '  constructor(scope: Construct, id: string) {',
    '    super(scope, id);',
    '',
    '    /// here',
    '  }',
    '}',
  ],
  marker: false,
});

project.gitignore.exclude('bin');
project.gitignore.exclude('cdk.out');
project.gitignore.exclude('test/*.integ.ts');
project.gitignore.exclude('test/*.snapshot');
project.gitignore.exclude('test/cdk-integ.out*');
project.gitignore.exclude('test/integ/cdk-integ.out*');

project.synth();
