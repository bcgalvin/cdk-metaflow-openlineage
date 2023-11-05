# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetaflowOpenlineage <a name="MetaflowOpenlineage" id="cdk-metaflow-openlineage.MetaflowOpenlineage"></a>

#### Initializers <a name="Initializers" id="cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer"></a>

```typescript
import { MetaflowOpenlineage } from 'cdk-metaflow-openlineage'

new MetaflowOpenlineage(scope: Construct, id: string, props: MetaflowOpenlineageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineageProps">MetaflowOpenlineageProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-metaflow-openlineage.MetaflowOpenlineage.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-metaflow-openlineage.MetaflowOpenlineageProps">MetaflowOpenlineageProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-metaflow-openlineage.MetaflowOpenlineage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-metaflow-openlineage.MetaflowOpenlineage.isConstruct"></a>

```typescript
import { MetaflowOpenlineage } from 'cdk-metaflow-openlineage'

MetaflowOpenlineage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-metaflow-openlineage.MetaflowOpenlineage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.property.dmsReplicationBucket">dmsReplicationBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.property.firehoseLogGroup">firehoseLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineage.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-metaflow-openlineage.MetaflowOpenlineage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dmsReplicationBucket`<sup>Required</sup> <a name="dmsReplicationBucket" id="cdk-metaflow-openlineage.MetaflowOpenlineage.property.dmsReplicationBucket"></a>

```typescript
public readonly dmsReplicationBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `firehoseLogGroup`<sup>Required</sup> <a name="firehoseLogGroup" id="cdk-metaflow-openlineage.MetaflowOpenlineage.property.firehoseLogGroup"></a>

```typescript
public readonly firehoseLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `stream`<sup>Required</sup> <a name="stream" id="cdk-metaflow-openlineage.MetaflowOpenlineage.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---


### RDSReadReplica <a name="RDSReadReplica" id="cdk-metaflow-openlineage.RDSReadReplica"></a>

#### Initializers <a name="Initializers" id="cdk-metaflow-openlineage.RDSReadReplica.Initializer"></a>

```typescript
import { RDSReadReplica } from 'cdk-metaflow-openlineage'

new RDSReadReplica(scope: Construct, id: string, props: RDSReadReplicaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-metaflow-openlineage.RDSReadReplicaProps">RDSReadReplicaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-metaflow-openlineage.RDSReadReplica.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-metaflow-openlineage.RDSReadReplicaProps">RDSReadReplicaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-metaflow-openlineage.RDSReadReplica.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-metaflow-openlineage.RDSReadReplica.isConstruct"></a>

```typescript
import { RDSReadReplica } from 'cdk-metaflow-openlineage'

RDSReadReplica.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-metaflow-openlineage.RDSReadReplica.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.property.dbSecret">dbSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.property.readReplica">readReplica</a></code> | <code>aws-cdk-lib.aws_rds.DatabaseInstanceReadReplica</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplica.property.readReplicaSecurityGroups">readReplicaSecurityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-metaflow-openlineage.RDSReadReplica.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dbSecret`<sup>Required</sup> <a name="dbSecret" id="cdk-metaflow-openlineage.RDSReadReplica.property.dbSecret"></a>

```typescript
public readonly dbSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `readReplica`<sup>Required</sup> <a name="readReplica" id="cdk-metaflow-openlineage.RDSReadReplica.property.readReplica"></a>

```typescript
public readonly readReplica: DatabaseInstanceReadReplica;
```

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstanceReadReplica

---

##### `readReplicaSecurityGroups`<sup>Required</sup> <a name="readReplicaSecurityGroups" id="cdk-metaflow-openlineage.RDSReadReplica.property.readReplicaSecurityGroups"></a>

```typescript
public readonly readReplicaSecurityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

---


### SecureBucket <a name="SecureBucket" id="cdk-metaflow-openlineage.SecureBucket"></a>

#### Initializers <a name="Initializers" id="cdk-metaflow-openlineage.SecureBucket.Initializer"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

new SecureBucket(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.SecureBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="cdk-metaflow-openlineage.SecureBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-metaflow-openlineage.SecureBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-metaflow-openlineage.SecureBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="cdk-metaflow-openlineage.SecureBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="cdk-metaflow-openlineage.SecureBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="cdk-metaflow-openlineage.SecureBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="cdk-metaflow-openlineage.SecureBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="cdk-metaflow-openlineage.SecureBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="cdk-metaflow-openlineage.SecureBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="cdk-metaflow-openlineage.SecureBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="cdk-metaflow-openlineage.SecureBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="cdk-metaflow-openlineage.SecureBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="cdk-metaflow-openlineage.SecureBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="cdk-metaflow-openlineage.SecureBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-metaflow-openlineage.SecureBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="cdk-metaflow-openlineage.SecureBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="cdk-metaflow-openlineage.SecureBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="cdk-metaflow-openlineage.SecureBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="cdk-metaflow-openlineage.SecureBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="cdk-metaflow-openlineage.SecureBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="cdk-metaflow-openlineage.SecureBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="cdk-metaflow-openlineage.SecureBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="cdk-metaflow-openlineage.SecureBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="cdk-metaflow-openlineage.SecureBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="cdk-metaflow-openlineage.SecureBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="cdk-metaflow-openlineage.SecureBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="cdk-metaflow-openlineage.SecureBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="cdk-metaflow-openlineage.SecureBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="cdk-metaflow-openlineage.SecureBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="cdk-metaflow-openlineage.SecureBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-metaflow-openlineage.SecureBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="cdk-metaflow-openlineage.SecureBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="cdk-metaflow-openlineage.SecureBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="cdk-metaflow-openlineage.SecureBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="cdk-metaflow-openlineage.SecureBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-metaflow-openlineage.SecureBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="cdk-metaflow-openlineage.SecureBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="cdk-metaflow-openlineage.SecureBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="cdk-metaflow-openlineage.SecureBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="cdk-metaflow-openlineage.SecureBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-metaflow-openlineage.SecureBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="cdk-metaflow-openlineage.SecureBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="cdk-metaflow-openlineage.SecureBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="cdk-metaflow-openlineage.SecureBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="cdk-metaflow-openlineage.SecureBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="cdk-metaflow-openlineage.SecureBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="cdk-metaflow-openlineage.SecureBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="cdk-metaflow-openlineage.SecureBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="cdk-metaflow-openlineage.SecureBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-metaflow-openlineage.SecureBucket.isConstruct"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-metaflow-openlineage.SecureBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-metaflow-openlineage.SecureBucket.isOwnedResource"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-metaflow-openlineage.SecureBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-metaflow-openlineage.SecureBucket.isResource"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-metaflow-openlineage.SecureBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="cdk-metaflow-openlineage.SecureBucket.fromBucketArn"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.SecureBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="cdk-metaflow-openlineage.SecureBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="cdk-metaflow-openlineage.SecureBucket.fromBucketAttributes"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.SecureBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-metaflow-openlineage.SecureBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="cdk-metaflow-openlineage.SecureBucket.fromBucketName"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-metaflow-openlineage.SecureBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-metaflow-openlineage.SecureBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdk-metaflow-openlineage.SecureBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="cdk-metaflow-openlineage.SecureBucket.fromCfnBucket"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="cdk-metaflow-openlineage.SecureBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="cdk-metaflow-openlineage.SecureBucket.validateBucketName"></a>

```typescript
import { SecureBucket } from 'cdk-metaflow-openlineage'

SecureBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="cdk-metaflow-openlineage.SecureBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#cdk-metaflow-openlineage.SecureBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-metaflow-openlineage.SecureBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-metaflow-openlineage.SecureBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-metaflow-openlineage.SecureBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="cdk-metaflow-openlineage.SecureBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="cdk-metaflow-openlineage.SecureBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="cdk-metaflow-openlineage.SecureBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdk-metaflow-openlineage.SecureBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="cdk-metaflow-openlineage.SecureBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="cdk-metaflow-openlineage.SecureBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="cdk-metaflow-openlineage.SecureBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-metaflow-openlineage.SecureBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="cdk-metaflow-openlineage.SecureBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="cdk-metaflow-openlineage.SecureBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


## Structs <a name="Structs" id="Structs"></a>

### MetaflowOpenlineageProps <a name="MetaflowOpenlineageProps" id="cdk-metaflow-openlineage.MetaflowOpenlineageProps"></a>

#### Initializer <a name="Initializer" id="cdk-metaflow-openlineage.MetaflowOpenlineageProps.Initializer"></a>

```typescript
import { MetaflowOpenlineageProps } from 'cdk-metaflow-openlineage'

const metaflowOpenlineageProps: MetaflowOpenlineageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineageProps.property.replicaConfig">replicaConfig</a></code> | <code><a href="#cdk-metaflow-openlineage.ReplicaConfig">ReplicaConfig</a></code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.MetaflowOpenlineageProps.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `replicaConfig`<sup>Required</sup> <a name="replicaConfig" id="cdk-metaflow-openlineage.MetaflowOpenlineageProps.property.replicaConfig"></a>

```typescript
public readonly replicaConfig: ReplicaConfig;
```

- *Type:* <a href="#cdk-metaflow-openlineage.ReplicaConfig">ReplicaConfig</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdk-metaflow-openlineage.MetaflowOpenlineageProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

### RDSReadReplicaProps <a name="RDSReadReplicaProps" id="cdk-metaflow-openlineage.RDSReadReplicaProps"></a>

#### Initializer <a name="Initializer" id="cdk-metaflow-openlineage.RDSReadReplicaProps.Initializer"></a>

```typescript
import { RDSReadReplicaProps } from 'cdk-metaflow-openlineage'

const rDSReadReplicaProps: RDSReadReplicaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplicaProps.property.replicaConfig">replicaConfig</a></code> | <code><a href="#cdk-metaflow-openlineage.ReplicaConfig">ReplicaConfig</a></code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplicaProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.RDSReadReplicaProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |

---

##### `replicaConfig`<sup>Required</sup> <a name="replicaConfig" id="cdk-metaflow-openlineage.RDSReadReplicaProps.property.replicaConfig"></a>

```typescript
public readonly replicaConfig: ReplicaConfig;
```

- *Type:* <a href="#cdk-metaflow-openlineage.ReplicaConfig">ReplicaConfig</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-metaflow-openlineage.RDSReadReplicaProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcSubnets`<sup>Required</sup> <a name="vpcSubnets" id="cdk-metaflow-openlineage.RDSReadReplicaProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

### ReplicaConfig <a name="ReplicaConfig" id="cdk-metaflow-openlineage.ReplicaConfig"></a>

#### Initializer <a name="Initializer" id="cdk-metaflow-openlineage.ReplicaConfig.Initializer"></a>

```typescript
import { ReplicaConfig } from 'cdk-metaflow-openlineage'

const replicaConfig: ReplicaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.dbSecretArn">dbSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.instanceEndpointAddress">instanceEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.postgresVersion">postgresVersion</a></code> | <code>aws-cdk-lib.aws_rds.PostgresEngineVersion</code> | *No description.* |
| <code><a href="#cdk-metaflow-openlineage.ReplicaConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `dbSecretArn`<sup>Required</sup> <a name="dbSecretArn" id="cdk-metaflow-openlineage.ReplicaConfig.property.dbSecretArn"></a>

```typescript
public readonly dbSecretArn: string;
```

- *Type:* string

---

##### `instanceEndpointAddress`<sup>Required</sup> <a name="instanceEndpointAddress" id="cdk-metaflow-openlineage.ReplicaConfig.property.instanceEndpointAddress"></a>

```typescript
public readonly instanceEndpointAddress: string;
```

- *Type:* string

---

##### `instanceIdentifier`<sup>Required</sup> <a name="instanceIdentifier" id="cdk-metaflow-openlineage.ReplicaConfig.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="cdk-metaflow-openlineage.ReplicaConfig.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-metaflow-openlineage.ReplicaConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="cdk-metaflow-openlineage.ReplicaConfig.property.postgresVersion"></a>

```typescript
public readonly postgresVersion: PostgresEngineVersion;
```

- *Type:* aws-cdk-lib.aws_rds.PostgresEngineVersion

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="cdk-metaflow-openlineage.ReplicaConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---



