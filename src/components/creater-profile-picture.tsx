"use client";
import { getCreaterDataImageUrl } from "@/data/creater-data";
import {
  removeCreatorImageUrl,
  updateCreatorImageUrl,
} from "@/lib/creator-query";
import { UploadDropzone } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { deleteUploadthingFile } from "@/lib/delete-file";
import Spinner from "./spinner";

function ProfilePicture() {
  const router = useRouter();
  const { userId } = useAuth();
  const [url, setUrl] = useState<string | null>(null);
  const [isloading, setIsloading] = useState(true);
  const dialogOpen = false;

  if (!userId) {
    router.push("/sign-in");
    return null;
  }

  useEffect(() => {
    if (userId) {
      const fetchCreatorData = async () => {
        const imageUrl = await getCreaterDataImageUrl(userId);
        if (imageUrl) {
          setUrl(imageUrl);
        }
        setIsloading(false);
      };

      fetchCreatorData();
    }
  }, [url]);

  if (isloading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Spinner />
      </div>
    );
  }

  return url ? (
    <div className='relative h-full w-full'>
      <Image alt='profile picture' src={url} fill className='rounded-sm' />
      <Dialog>
        <DialogTrigger>
          <X className='absolute -right-2 -top-2 bg-rose-500 text-white p-1 rounded-full shadow-sm' />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You want to remove your profile picture?</DialogTitle>
          </DialogHeader>
          <DialogFooter className='flex justify-center gap-6'>
            <DialogClose asChild>
              <Button
                onClick={async () => {
                  await deleteUploadthingFile(url);
                  const creater = await removeCreatorImageUrl(userId);
                  if (creater) {
                    setUrl("");
                  }
                }}
              >
                Yes
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>No</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    <div className=''>
      <UploadDropzone
        appearance={{
          button:
            "ut-uploading:cursor-not-allowed rounded-r-none bg-orange-600 bg-none after:bg-orange-400",
          label: "text-orange-600 hover:text-orange-800",
          container: "bg-orange-100 cursor-pointer h-80 w-80",
        }}
        endpoint='imageUpload'
        onClientUploadComplete={async (res) => {
          const url = res[0].url;
          setUrl(url);
          await updateCreatorImageUrl(userId, url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
}

export default ProfilePicture;
