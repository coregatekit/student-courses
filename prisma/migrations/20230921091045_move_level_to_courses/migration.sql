/*
  Warnings:

  - You are about to drop the column `level` on the `course_categories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course_categories" DROP COLUMN "level";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 0;
