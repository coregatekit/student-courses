/*
  Warnings:

  - You are about to drop the column `teacher_id` on the `students_courses` table. All the data in the column will be lost.
  - Added the required column `course_id` to the `students_courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "students_courses" DROP CONSTRAINT "students_courses_teacher_id_fkey";

-- DropIndex
DROP INDEX "students_courses_student_id_teacher_id_idx";

-- AlterTable
ALTER TABLE "students_courses" DROP COLUMN "teacher_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "students_courses_student_id_course_id_idx" ON "students_courses"("student_id", "course_id");

-- AddForeignKey
ALTER TABLE "students_courses" ADD CONSTRAINT "students_courses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
