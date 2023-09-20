-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "flast_name" VARCHAR(100) NOT NULL,
    "gender" "Gender" NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(10) NOT NULL,
    "bio" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "flast_name" VARCHAR(100) NOT NULL,
    "gender" "Gender" NOT NULL,
    "email" VARCHAR(100),
    "phone_number" VARCHAR(10),
    "bio" TEXT,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "teacher_id" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students_courses" (
    "id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "pass" BOOLEAN NOT NULL DEFAULT false,
    "point" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "students_courses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_code_key" ON "students"("code");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_code_key" ON "teachers"("code");

-- CreateIndex
CREATE UNIQUE INDEX "courses_code_key" ON "courses"("code");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_courses" ADD CONSTRAINT "students_courses_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_courses" ADD CONSTRAINT "students_courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
