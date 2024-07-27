"use server";
import { auth } from "@clerk/nextjs/server";
import db from "@/lib/db";

export const findCurrentUser = async () => {
  const { userId } = auth();
  if (userId) {
    const user = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        id: true,
      },
    });
    return user;
  }
  return null;
};
