"use server";

import { utapi } from "@/server/uploadthing";

export const deleteUploadthingFile = async (url: string) => {
  try {
    const urlArray = url.split("/");
    const fileKey = urlArray[urlArray.length - 1];

    const res = await utapi.deleteFiles(fileKey);
  } catch (e) {
    console.error(e);
    console.log("Unable to delete file");
  }
};
