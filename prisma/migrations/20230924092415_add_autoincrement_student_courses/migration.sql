-- AlterTable
CREATE SEQUENCE students_courses_id_seq;
ALTER TABLE "students_courses" ALTER COLUMN "id" SET DEFAULT nextval('students_courses_id_seq');
ALTER SEQUENCE students_courses_id_seq OWNED BY "students_courses"."id";
