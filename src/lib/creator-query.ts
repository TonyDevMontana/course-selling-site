"use server";
import db from "@/lib/db";

export const updateCreatorImageUrl = async (id: string, url: string) => {
  try {
    await db.creator.update({
      where: {
        userId: id,
      },
      data: {
        imageUrl: url,
      },
    });
  } catch (e) {
    console.log("Failed to update creator's image " + e);
  }
};

export const removeCreatorImageUrl = async (id: string) => {
  try {
    const creator = await db.creator.update({
      where: {
        userId: id,
      },
      data: {
        imageUrl: null,
      },
    });
    return creator ?? null;
  } catch (e) {
    console.log("Failed to Delete creator's imageUrl " + e);
    return null;
  }
};
