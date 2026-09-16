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

export const CEFR_LEVELS = ["PRE_A1", "A1", "A2", "B1", "B2", "C1"] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

export const PLACEMENT_SKILLS = ["GRAMMAR", "VOCABULARY", "READING", "LISTENING"] as const;
export type PlacementSkill = (typeof PLACEMENT_SKILLS)[number];

export const PLACEMENT_DIFFICULTIES = [
  "VERY_EASY",
  "EASY",
  "MEDIUM",
  "DIFFICULT",
  "VERY_DIFFICULT",
] as const;
export type PlacementDifficulty = (typeof PLACEMENT_DIFFICULTIES)[number];

export const ATTEMPT_STATUSES = ["IN_PROGRESS", "COMPLETED", "ABANDONED"] as const;
export type AttemptStatus = (typeof ATTEMPT_STATUSES)[number];

export const CEFR_ORDER: CefrLevel[] = ["PRE_A1", "A1", "A2", "B1", "B2", "C1"];

export const CEFR_LABELS: Record<CefrLevel, { en: string; ar: string }> = {
  PRE_A1: { en: "Pre-A1 – Starting Out", ar: "ما قبل A1 – مبتدئ جدًا" },
  A1: { en: "A1 – Beginner", ar: "A1 – مبتدئ" },
  A2: { en: "A2 – Elementary", ar: "A2 – أساسي" },
  B1: { en: "B1 – Intermediate", ar: "B1 – متوسط" },
  B2: { en: "B2 – Upper-Intermediate", ar: "B2 – فوق المتوسط" },
  C1: { en: "C1 – Advanced", ar: "C1 – متقدم" },
};

export const CEFR_DESCRIPTIONS: Record<CefrLevel, { en: string; ar: string }> = {
  PRE_A1: {
    en: "You are just starting to learn English and can recognize a few basic words and phrases.",
    ar: "أنت في بداية تعلّم اللغة الإنجليزية وتستطيع التعرّف على بعض الكلمات والعبارات الأساسية.",
  },
  A1: {
    en: "You can understand and use very basic expressions and simple sentences to meet everyday needs.",
    ar: "تستطيع فهم واستخدام عبارات بسيطة جدًا وجمل قصيرة لتلبية احتياجاتك اليومية.",
  },
  A2: {
    en: "You can understand frequently used expressions and communicate in simple, routine situations.",
    ar: "تستطيع فهم العبارات الشائعة والتواصل في مواقف بسيطة ومألوفة.",
  },
  B1: {
    en: "You can understand the main points of familiar topics and communicate independently in many everyday situations.",
    ar: "تستطيع فهم الأفكار الرئيسية للمواضيع المألوفة والتواصل بشكل مستقل في كثير من المواقف اليومية.",
  },
  B2: {
    en: "You can communicate with greater fluency and understand more complex texts and discussions.",
    ar: "تستطيع التواصل بطلاقة أكبر وفهم نصوص ومناقشات أكثر تعقيدًا.",
  },
  C1: {
    en: "You can communicate effectively and flexibly in academic, professional, and social contexts.",
    ar: "تستطيع التواصل بفعالية ومرونة في السياقات الأكاديمية والمهنية والاجتماعية.",
  },
};

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
