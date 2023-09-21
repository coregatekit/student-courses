/*
  Warnings:

  - You are about to drop the `student_runnumber` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "student_runnumber";

-- CreateTable
CREATE TABLE "runnumber" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "current_number" INTEGER NOT NULL,

    CONSTRAINT "runnumber_pkey" PRIMARY KEY ("id")
);
