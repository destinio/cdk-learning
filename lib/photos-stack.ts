import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3'

export class PhotosStack extends cdk.Stack {
  public readonly photosBucketArn: string

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const photosBucket = new Bucket(this, 'PhotosBucket')

    this.photosBucketArn = photosBucket.bucketArn
  }
} 