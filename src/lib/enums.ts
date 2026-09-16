export const ROLES = ["ADMIN", "LEARNER"] as const;
export type Role = (typeof ROLES)[number];

export const COURSE_LEVELS = ["BEGINNER", "INTERMEDIATE", "ADVANCED"] as const;
export type CourseLevel = (typeof COURSE_LEVELS)[number];

export const COURSE_FORMATS = ["ONLINE_LIVE", "SELF_PACED", "HYBRID"] as const;
export type CourseFormat = (typeof COURSE_FORMATS)[number];

export const COURSE_STATUSES = [
  "DRAFT",
  "PUBLISHED",
  "FULLY_BOOKED",
  "INACTIVE",
  "ARCHIVED",
] as const;
export type CourseStatus = (typeof COURSE_STATUSES)[number];

export const SCHEDULE_STATUSES = ["OPEN", "FULL", "CANCELLED"] as const;
export type ScheduleStatus = (typeof SCHEDULE_STATUSES)[number];

export const BOOKING_STATUSES = ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export const PAYMENT_STATUSES = ["UNPAID", "PENDING", "PAID", "REFUNDED", "FAILED"] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const CONTACT_METHODS = ["EMAIL", "PHONE", "WHATSAPP"] as const;
export type ContactMethod = (typeof CONTACT_METHODS)[number];

export const LEVEL_LABELS: Record<CourseLevel, string> = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
};

export const FORMAT_LABELS: Record<CourseFormat, string> = {
  ONLINE_LIVE: "Online (Live)",
  SELF_PACED: "Self-Paced",
  HYBRID: "Hybrid",
};

export const COURSE_STATUS_LABELS: Record<CourseStatus, string> = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  FULLY_BOOKED: "Fully Booked",
  INACTIVE: "Inactive",
  ARCHIVED: "Archived",
};

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
};

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  UNPAID: "Unpaid",
  PENDING: "Pending",
  PAID: "Paid",
  REFUNDED: "Refunded",
  FAILED: "Failed",
};
