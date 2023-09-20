/*
  Warnings:

  - You are about to drop the column `flast_name` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `flast_name` on the `teachers` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "flast_name",
ADD COLUMN     "last_name" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "flast_name",
ADD COLUMN     "last_name" VARCHAR(100) NOT NULL;
