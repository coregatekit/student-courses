/*
  Warnings:

  - You are about to drop the column `point` on the `students_courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "point" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "students_courses" DROP COLUMN "point";
