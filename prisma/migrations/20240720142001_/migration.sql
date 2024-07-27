-- DropForeignKey
ALTER TABLE "Creator" DROP CONSTRAINT "Creator_userId_fkey";

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
