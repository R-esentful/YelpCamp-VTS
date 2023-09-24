/**
 * This file contains all the configurations for AWS S3
 */
import { S3Client } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY, AWS_SECRET_KEY } from "@utils/variables";

const S3 = new S3Client({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
  region: "ap-southeast-1",
});

export default S3;
