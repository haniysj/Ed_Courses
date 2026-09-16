import { z } from "zod";
import {
  BOOKING_STATUSES,
  CONTACT_METHODS,
  COURSE_FORMATS,
  COURSE_LEVELS,
  COURSE_STATUSES,
  PAYMENT_STATUSES,
  SCHEDULE_STATUSES,
} from "@/lib/enums";

export const courseInputSchema = z.object({
  title: z.string().trim().min(3, "Course title must be at least 3 characters"),
  code: z.string().trim().min(2, "Course code is required"),
  description: z.string().trim().min(10, "Description must be at least 10 characters"),
  objectives: z.array(z.string().trim().min(1)).min(1, "Add at least one learning objective"),
  imageUrl: z.string().trim().url().optional().or(z.literal("")),
  level: z.enum(COURSE_LEVELS),
  format: z.enum(COURSE_FORMATS),
  durationHours: z.coerce.number().positive("Duration must be greater than zero"),
  sessionsCount: z.coerce.number().int().positive("Sessions must be at least 1"),
  hourlyRate: z.coerce.number().positive("Hourly rate must be greater than zero"),
  maxLearners: z.coerce.number().int().positive("Capacity must be at least 1"),
  status: z.enum(COURSE_STATUSES),
  categoryId: z.string().min(1, "Category is required"),
  instructorId: z.string().min(1, "Instructor is required"),
  modules: z
    .array(
      z.object({
        title: z.string().trim().min(1),
        description: z.string().trim().min(1),
      })
    )
    .default([]),
});

export const instructorInputSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),
  photoUrl: z.string().trim().url().optional().or(z.literal("")),
  title: z.string().trim().min(2, "Professional title is required"),
  qualifications: z.string().trim().min(2, "Qualifications are required"),
  certifications: z.string().trim().optional().or(z.literal("")),
  experienceYears: z.coerce.number().int().min(0, "Experience cannot be negative"),
  bio: z.string().trim().min(10, "Biography must be at least 10 characters"),
  specialization: z.string().trim().min(2, "Specialization is required"),
  languages: z.string().trim().min(2, "Languages are required"),
  active: z.boolean().default(true),
});

export const scheduleInputSchema = z
  .object({
    courseId: z.string().min(1),
    date: z.string().refine((v) => !Number.isNaN(Date.parse(v)), "A valid date is required"),
    startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use HH:MM format"),
    endTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use HH:MM format"),
    capacity: z.coerce.number().int().positive("Capacity must be at least 1"),
    status: z.enum(SCHEDULE_STATUSES).default("OPEN"),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: "End time must be after start time",
    path: ["endTime"],
  })
  .refine((data) => new Date(data.date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0), {
    message: "Schedule date cannot be in the past",
    path: ["date"],
  });

export const bookingInputSchema = z.object({
  courseId: z.string().min(1, "Course is required"),
  scheduleId: z.string().min(1, "Please select an available date and time"),
  learnerName: z.string().trim().min(2, "Full name is required"),
  learnerEmail: z.string().trim().email("Enter a valid email address"),
  learnerPhone: z.string().trim().min(6, "Enter a valid phone number"),
  country: z.string().trim().min(2, "Country is required"),
  preferredContact: z.enum(CONTACT_METHODS).default("EMAIL"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const bookingUpdateSchema = z.object({
  status: z.enum(BOOKING_STATUSES).optional(),
  paymentStatus: z.enum(PAYMENT_STATUSES).optional(),
  scheduleId: z.string().optional(),
});

export const settingsInputSchema = z.object({
  platformName: z.string().trim().min(2),
  logoUrl: z.string().trim().url().optional().or(z.literal("")),
  contactEmail: z.string().trim().email(),
  contactPhone: z.string().trim().min(4),
  currency: z.string().trim().min(2).max(6),
  timezone: z.string().trim().min(2),
  cancellationPolicy: z.string().trim().min(5),
  minBookingNoticeHours: z.coerce.number().int().min(0),
  maxBookingPeriodDays: z.coerce.number().int().min(1),
});

export const registerInputSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().trim().optional().or(z.literal("")),
  country: z.string().trim().optional().or(z.literal("")),
});
