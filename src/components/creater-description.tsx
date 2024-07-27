import { getCreaterProfileDescription } from "@/data/creater-data";
import { auth } from "@clerk/nextjs/server";

async function CreaterDescription() {
  const { userId } = auth();
  if (!userId) return null;

  const description = await getCreaterProfileDescription(userId);

  return (
    <div className='w-full'>
      <div className='text-4xl'>{description?.name}</div>
    </div>
  );
}

export default CreaterDescription;
