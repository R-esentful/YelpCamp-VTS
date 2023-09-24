/**
 * This file contains all the utilities or functions for AWS.
 */
import { DeleteObjectCommand, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import S3 from "@configs/aws.configs";

export const AWSDIRECTORY = async (id: string, type: string, command: string) => {
  if (command === "create") {
    switch (type) {
      case "users":
        const listUserCommand = new ListObjectsV2Command({
          Bucket: "s3-yelpcamp-ph",
          Prefix: `users/${id}`,
          MaxKeys: 1,
        });
        const responseUser = await S3.send(listUserCommand);
        const userFolderExists = responseUser.KeyCount && responseUser.KeyCount > 0;
        if (!userFolderExists) {
          const putCommand = new PutObjectCommand({
            Bucket: "s3-yelpcamp-ph",
            Key: `users/${id}/`,
            Body: "",
          });
          await S3.send(putCommand);
        }
        break;

      case "campgrounds":
        const listCampgroundCommand = new ListObjectsV2Command({
          Bucket: "s3-yelpcamp-ph",
          Prefix: `campgrounds/${id}`,
          MaxKeys: 1,
        });
        const responseCampground = await S3.send(listCampgroundCommand);
        const campgroundFolderExists =
          responseCampground.KeyCount && responseCampground.KeyCount > 0;
        if (!campgroundFolderExists) {
          const putCommand = new PutObjectCommand({
            Bucket: "s3-yelpcamp-ph",
            Key: `campgrounds/${id}/`,
            Body: "",
          });
          await S3.send(putCommand);
        }
        break;
    }
  }

  if (command === "delete") {
    switch (type) {
      case "users":
        const listUserCommand = new ListObjectsV2Command({
          Bucket: "s3-yelpcamp-ph",
          Prefix: `users/${id}`,
          MaxKeys: 1,
        });
        const responseUser = await S3.send(listUserCommand);
        const userFolderExists = responseUser.KeyCount && responseUser.KeyCount > 0;
        if (userFolderExists) {
          const deleteCommand = new DeleteObjectCommand({
            Bucket: "s3-yelpcamp-ph",
            Key: `users/${id}/`,
          });
          await S3.send(deleteCommand);
        }
        break;

      case "campgrounds":
        const listCampgroundCommand = new ListObjectsV2Command({
          Bucket: "s3-yelpcamp-ph",
          Prefix: `campgrounds/${id}`,
          MaxKeys: 1,
        });
        const responseCampground = await S3.send(listCampgroundCommand);
        const campgroundFolderExists =
          responseCampground.KeyCount && responseCampground.KeyCount > 0;
        if (campgroundFolderExists) {
          const deleteCommand = new DeleteObjectCommand({
            Bucket: "s3-yelpcamp-ph",
            Key: `campgrounds/${id}/`,
          });
          await S3.send(deleteCommand);
        }
    }
  }
};
