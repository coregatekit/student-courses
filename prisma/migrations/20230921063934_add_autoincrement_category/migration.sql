-- AlterTable
CREATE SEQUENCE course_categories_id_seq;
ALTER TABLE "course_categories" ALTER COLUMN "id" SET DEFAULT nextval('course_categories_id_seq');
ALTER SEQUENCE course_categories_id_seq OWNED BY "course_categories"."id";
