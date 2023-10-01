/**
 * This file contains all the utilities or functions for AWS.
 */
import {
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

// Configs
import S3 from "@configs/aws.configs";

// Utilities
import { AWS_FOLDER } from "./variables";

export const AWSDIRECTORY = async (id: string, type: string, command: string) => {
  if (command === "create") {
    switch (type) {
      case "users":
        const listUserCommand = new ListObjectsV2Command({
          Bucket: AWS_FOLDER,
          Prefix: `users/${id}`,
          MaxKeys: 1,
        });
        const responseUser = await S3.send(listUserCommand);
        const userFolderExists = responseUser.KeyCount && responseUser.KeyCount > 0;
        if (!userFolderExists) {
          const putCommand = new PutObjectCommand({
            Bucket: AWS_FOLDER,
            Key: `users/${id}/`,
            Body: "",
          });
          await S3.send(putCommand);
        }
        break;

      case "campgrounds":
        const listCampgroundCommand = new ListObjectsV2Command({
          Bucket: AWS_FOLDER,
          Prefix: `campgrounds/${id}`,
          MaxKeys: 1,
        });
        const responseCampground = await S3.send(listCampgroundCommand);
        const campgroundFolderExists =
          responseCampground.KeyCount && responseCampground.KeyCount > 0;
        if (!campgroundFolderExists) {
          const putCommand = new PutObjectCommand({
            Bucket: AWS_FOLDER,
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
          Bucket: AWS_FOLDER,
          Prefix: `users/${id}`,
          MaxKeys: 1,
        });
        const responseUser = await S3.send(listUserCommand);
        const userFolderExists = responseUser.KeyCount && responseUser.KeyCount > 0;
        if (userFolderExists) {
          const deleteCommand = new DeleteObjectCommand({
            Bucket: AWS_FOLDER,
            Key: `users/${id}/`,
          });
          await S3.send(deleteCommand);
        }
        break;

      case "campgrounds":
        const listCampgroundCommand = new ListObjectsV2Command({
          Bucket: AWS_FOLDER,
          Prefix: `campgrounds/${id}`,
          MaxKeys: 1,
        });
        const responseCampground = await S3.send(listCampgroundCommand);
        const campgroundFolderExists =
          responseCampground.KeyCount && responseCampground.KeyCount > 0;
        if (campgroundFolderExists) {
          const deleteCommand = new DeleteObjectCommand({
            Bucket: AWS_FOLDER,
            Key: `campgrounds/${id}/`,
          });
          await S3.send(deleteCommand);
        }
    }
  }
};

export async function deleteSpecificDirectory({ directory }: { directory: string }) {
  // Delete all directories in s3
  const list = new ListObjectsV2Command({
    Bucket: AWS_FOLDER,
    Prefix: `${directory}/`,
  });

  let contents = await S3.send(list);

  if (contents.KeyCount) {
    const deleteCommand = new DeleteObjectsCommand({
      Bucket: AWS_FOLDER,
      Delete: {
        Objects: contents.Contents?.map((item) => ({ Key: item.Key })),
        Quiet: false,
      },
    });
    let deleted = await S3.send(deleteCommand);
    if (deleted.Errors) {
      deleted.Errors.map((error) =>
        console.log(`${error.Key} could not be deleted - ${error.Code}`)
      );
    }
  }
  return `Successfully Emptied ${directory}`;
}
