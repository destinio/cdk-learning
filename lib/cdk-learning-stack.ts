import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expirationInDays: number = 1) {
    super(scope, id);

    // using L2 construct
    new Bucket(this, 'MyL3Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(expirationInDays)
      }]
    })
  }
}

export class CdkLearningStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // L1 Bucket
    // new CfnBucket(this, 'MyL1Bucket', {
    //   lifecycleConfiguration: {
    //     rules: [{
    //       expirationInDays: 1,
    //       status: 'Enabled'
    //     }]
    //   }
    // })

    const duration = new cdk.CfnParameter(this, "duration", {
      default: 1,
      minValue: 1,
      maxValue: 10,
      type: "Number",
    })

    // L2 Bucket
    const myLocalL2Bucket = new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(duration.valueAsNumber)
      }]
    })

    // L3 Bucket
    // new L3Bucket(this, 'MyL4Bucket', duration.valueAsNumber)

    new cdk.CfnOutput(this, 'MyL1BucketName', {
      value: myLocalL2Bucket.bucketName
    })
  }
}
