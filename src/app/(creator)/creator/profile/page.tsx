// "use client";
import CreaterDescription from "@/components/creater-description";
import ProfilePicture from "@/components/creater-profile-picture";
import "@uploadthing/react/styles.css";

export default function Page() {
  return (
    <div className='py-16 px-24'>
      <div className='flex gap-x-24 w-full'>
        <div className='h-80 w-80'>
          <ProfilePicture />
        </div>
        <div className=''>
          <CreaterDescription />
        </div>
      </div>
    </div>
  );
}
