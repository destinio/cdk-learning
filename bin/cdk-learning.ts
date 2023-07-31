#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PhotosStack } from '../lib/photos-stack'
import { PhotosHandlerStack } from '../lib/PhotosHandler'

const app = new cdk.App();

const photosStack = new PhotosStack(app, 'PhotosStack');

new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: photosStack.photosBucketArn
});