import type { Prisma } from "@prisma/client";

export type CourseWithRelations = Prisma.CourseGetPayload<{
  include: { instructor: true; category: true; schedules: true; modules: true };
}>;

export type CourseCardData = Prisma.CourseGetPayload<{
  include: { instructor: true; category: true; schedules: true };
}>;

export type BookingWithRelations = Prisma.BookingGetPayload<{
  include: { course: true; schedule: true; instructor: true };
}>;
