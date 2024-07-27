/*
  Warnings:

  - You are about to drop the column `description` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `bio` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "description",
ADD COLUMN     "bio" TEXT NOT NULL,
ALTER COLUMN "about" DROP NOT NULL;
