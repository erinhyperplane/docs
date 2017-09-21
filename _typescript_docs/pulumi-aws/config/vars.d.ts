---
layout: typescript-reference
repo: pulumi-aws
subpath: config/vars.d.ts
---
import { Region } from "../region";
export declare let accessKey: string | undefined;
export declare let allowedAccountIds: string[] | undefined;
export declare let assumeRole: {
    externalId?: string;
    policy?: string;
    roleArn?: string;
    sessionName?: string;
}[] | undefined;
export declare let dynamodbEndpoint: string | undefined;
export declare let endpoints: {
    cloudformation?: string;
    cloudwatch?: string;
    cloudwatchevents?: string;
    cloudwatchlogs?: string;
    devicefarm?: string;
    dynamodb?: string;
    ec2?: string;
    elb?: string;
    iam?: string;
    kinesis?: string;
    kms?: string;
    rds?: string;
    s3?: string;
    sns?: string;
    sqs?: string;
}[] | undefined;
export declare let forbiddenAccountIds: string[] | undefined;
export declare let insecure: boolean | undefined;
export declare let kinesisEndpoint: string | undefined;
export declare let maxRetries: number | undefined;
export declare let profile: string | undefined;
export declare let region: Region;
export declare let s3ForcePathStyle: boolean | undefined;
export declare let secretKey: string | undefined;
export declare let sharedCredentialsFile: string | undefined;
export declare let skipCredentialsValidation: boolean | undefined;
export declare let skipGetEc2Platforms: boolean | undefined;
export declare let skipMetadataApiCheck: boolean | undefined;
export declare let skipRegionValidation: boolean | undefined;
export declare let skipRequestingAccountId: boolean | undefined;
export declare let token: string | undefined;
