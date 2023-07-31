# AWS CDK Constructs Levels: L1-L3

Constructs are the basic building blocks used to define your cloud resources and infrastructure. They represent AWS resources or sets of resources in your AWS infrastructure.

The AWS CDK provides three levels of constructs, referred to as L1, L2, and L3, each offering a different level of abstraction for working with AWS resources.

## Level 1 (L1) Constructs:

Level 1 constructs are the lowest-level constructs in the AWS CDK and are directly mapped to the AWS CloudFormation resources. They are the most basic representations of AWS resources and provide a 1-to-1 mapping to the underlying CloudFormation resources. L1 constructs are useful for granular control over the resources, but they can be verbose and require a deep understanding of CloudFormation.

L1 constructs are automatically generated based on the AWS CloudFormation Resource Specification and expose all properties of the underlying resources, even those that are rarely changed.

## Level 2 (L2) Constructs:

Level 2 constructs are a higher-level abstraction built on top of the L1 constructs. They simplify the definition of AWS resources by providing more convenient and concise classes for working with common AWS resources and configurations. L2 constructs encapsulate AWS best practices and provide a more user-friendly experience compared to L1 constructs.

L2 constructs handle the complexity of resource creation and configuration, making it easier for developers to define their cloud infrastructure in a more abstract and declarative manner.

## Level 3 (L3) Constructs:

Level 3 constructs are the highest-level abstraction provided by the AWS CDK. They are opinionated, pattern-oriented constructs that are designed to simplify the creation of complex AWS architectures. L3 constructs are often domain-specific and provide ready-made solutions for common use cases or architectural patterns.

L3 constructs abstract away even more details than L2 constructs, enabling developers to define entire AWS architectures with a few lines of code. They are particularly useful for setting up common application patterns, such as load balancers, auto-scaling groups, or serverless applications.

In summary, each level of constructs in the AWS CDK provides different levels of abstraction and convenience. While L1 constructs offer the most direct control over AWS resources, L3 constructs provide the highest level of abstraction, allowing developers to define complex architectures with ease. Developers can choose the appropriate level of constructs based on their familiarity with AWS, the level of control they need, and the complexity of the infrastructure they are building.
