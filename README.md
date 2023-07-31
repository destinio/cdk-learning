## API Documentation
https://docs.aws.amazon.com/cdk/api/v2/

## Better Docs
- [Constructs]("./docs/CONSTRUCTS.md")

## Things to remember
- s3 (by default) are not deleted when the stack is deleted 
  - see [here](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_s3.Bucket.html#removalpolicy)

## IDs

**PhotosBucket2AC9D1F0**
-- logical or construct ID
-- used to reference the resource in the stack
-- name and a hash of the path

**https://us-east-2.console.aws.amazon.com/s3/home?region=us-east-2&bucket=photosstack-photosbucket2ac9d1f0-1bnsfdbc7esqy**
-- physical ID
-- used to reference the resource in the AWS console

## Links
- [s3 - docs](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_s3-readme.html)
## Steps

### Create a new project
```

**Create a new project**
```
cdk init app --language typescript
```

**Bootstrap the environment**
```
cdk bootstrap
```

**Deploy the stack**
```
cdk deploy
```

**Other commands**
```
// Diff the stack
cdk diff

// List the stacks
cdk list

// Doctor
cdk doctor
```

## Deploy

### Parameters
```
cdk deploy --parameters duration=4
```
