/*
  Warnings:

  - You are about to drop the column `twitterUrl` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "twitterUrl",
ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "linkedinUrl" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL;
