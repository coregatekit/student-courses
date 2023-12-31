import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const student = {
    id: 1,
    name: 'student_runnumber',
    current_number: 1,
  } as Prisma.runnumberCreateInput;
  const teacher = {
    id: 2,
    name: 'teacher_runnumber',
    current_number: 1,
  } as Prisma.runnumberCreateInput;
  const course = {
    id: 3,
    name: 'course_runnumber',
    current_number: 1,
  } as Prisma.runnumberCreateInput;

  const student_runnumber = await prisma.runnumber.create({
    data: student,
  });
  const teacher_runnumber = await prisma.runnumber.create({
    data: teacher,
  });
  const course_runnumber = await prisma.runnumber.create({
    data: course,
  });
  console.log({ student_runnumber, teacher_runnumber, course_runnumber });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
