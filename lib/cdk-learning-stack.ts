import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expirationInDays: number = 1) {
    super(scope, id);

    new CfnBucket(this, 'MyL3Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays,
          status: 'Enabled'
        }]
      }
    })
  }
}

export class CdkLearningStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // L1 Bucket
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    })

    // L2 Bucket
    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(1)
      }]
    })

    // L3 Bucket
    new L3Bucket(this, 'MyL4Bucket', 1)
  }
}
