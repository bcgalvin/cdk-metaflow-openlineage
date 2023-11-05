# 3. use cdk-nag

Date: 2023-11-05

## Status

Accepted

## Context

We want to have automated checks for infra best-practices that integrates with aws cdk. There are of options to choose
from, including several managed services such as guard
duty and AWS config

## Decision

Use [cdk-nag](https://github.com/cdklabs/cdk-nag), a cdk version of [cfn-nag](https://github.com/stelligent/cfn_nag).
Cdk nag comes with a handful of conformance packs are a bunch of [aws config](https://aws.amazon.com/config/) rules for
different domains/certifications, including:

- [AWS Solutions](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#awssolutions)
- [HIPAA Security](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#hipaa-security)
- [NIST 800-53 rev 4 + 5](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#nist-800-53-rev-4)
- [PCI DSS 3.2.1](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#pci-dss-321)

## Consequences

There are a ton of rules that won't apply to this architecture, so it is a slight pain to ignore them:

```typescript
// rds-read-replica.ts
NagSuppressions.addResourceSuppressions(readReplica, [
    {
        id: 'AwsSolutions-RDS11',
        reason: 'Replica is in an isolated subnet so port obfuscation is not necessary',
    }
])
```

We will define these suppressions near where the code lives at first as shown in the above example.

There is some danger in alert-fatigue with using a project like this and default to adding suppressions rather than
implementing a fix for the error. To remedy this we should try to enforce developers to add specific reasons for each
suppressed rule rather than just generic catch-alls.
