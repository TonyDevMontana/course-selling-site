"use client";
import { getCreatorDataByUserId } from "@/data/creater-data";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface CreatorProfile {
  id: string;
  name: string;
  userId: string;
  bio: string | null;
  about: string | null;
  imageUrl: string | null;
  linkedinUrl: string | null;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<CreatorProfile | null>();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const fetchCreatorData = async () => {
        const creator = await getCreatorDataByUserId(userId);
        return creator;
      };

      // setProfile(fetchCreatorData());
    }
  }, [profile]);

  return { profile, setProfile };
};
