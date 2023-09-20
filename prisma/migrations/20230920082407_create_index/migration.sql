-- CreateIndex
CREATE INDEX "courses_code_name_idx" ON "courses"("code", "name");

-- CreateIndex
CREATE INDEX "students_code_first_name_idx" ON "students"("code", "first_name");

-- CreateIndex
CREATE INDEX "students_courses_student_id_teacher_id_idx" ON "students_courses"("student_id", "teacher_id");

-- CreateIndex
CREATE INDEX "teachers_code_first_name_idx" ON "teachers"("code", "first_name");
