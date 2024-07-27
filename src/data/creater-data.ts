"use server";

import db from "@/lib/db";

export const getCreaterDataImageUrl = async (id: string) => {
  try {
    const creator = await db.creator.findUnique({
      where: {
        userId: id,
      },
      select: {
        imageUrl: true,
      },
    });

    return creator?.imageUrl ?? null;
  } catch (e) {
    if (e instanceof Error) {
      console.log("Unable to get imageUrl. Error - " + e.message);
    } else {
      console.log("Some error occured while getting imageUrl");
    }
    return null;
  }
};

export const getCreaterProfileDescription = async (id: string) => {
  try {
    const creater = await db.creator.findUnique({
      where: {
        userId: id,
      },

      select: {
        id: true,
        userId: true,
        name: true,
        linkedinUrl: true,
        bio: true,
      },
    });

    return creater ?? null;
  } catch (e) {
    if (e instanceof Error) {
      console.log("Unable to get CreaterDescription. Error - " + e.message);
    } else {
      console.log("Some error occured while getting CreaterDescription");
    }
    return null;
  }
};

export const getCreatorDataByUserId = async (id: string) => {
  const creator = await db.creator.findUnique({
    where: {
      userId: id,
    },
    select: {
      id: true,
      userId: true,
      name: true,
      bio: true,
      about: true,
      imageUrl: true,
      linkedinUrl: true,
    },
  });

  return creator;
};
