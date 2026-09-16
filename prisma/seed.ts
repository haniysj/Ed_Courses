import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { calculateTotalPrice } from "../src/lib/pricing";
import { slugify } from "../src/lib/utils";
import { placementQuestions } from "./placement-questions";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.placementAttempt.deleteMany();
  await prisma.placementQuestion.deleteMany();
  await prisma.placementVersion.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.review.deleteMany();
  await prisma.courseSchedule.deleteMany();
  await prisma.courseModule.deleteMany();
  await prisma.course.deleteMany();
  await prisma.instructor.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.platformSettings.deleteMany();

  await prisma.platformSettings.create({
    data: {
      platformName: "EduSphere",
      contactEmail: "hello@edusphere.om",
      contactPhone: "+968 2400 1234",
      currency: "OMR",
      timezone: "Asia/Muscat",
      cancellationPolicy:
        "Cancellations made more than 48 hours before the session start are eligible for a full refund. Cancellations within 48 hours are non-refundable.",
      minBookingNoticeHours: 24,
      maxBookingPeriodDays: 180,
    },
  });

  const adminPassword = await bcrypt.hash("Admin@123", 10);
  await prisma.user.create({
    data: {
      name: "Platform Admin",
      email: "admin@edusphere.om",
      passwordHash: adminPassword,
      role: "ADMIN",
    },
  });

  const learnerPassword = await bcrypt.hash("Learner@123", 10);
  await prisma.user.create({
    data: {
      name: "Fatma Al Balushi",
      email: "learner@edusphere.om",
      passwordHash: learnerPassword,
      role: "LEARNER",
      phone: "+968 9123 4567",
      country: "Oman",
    },
  });

  const categories = await Promise.all(
    ["English & Communication", "Business & Test Prep", "Technology", "Leadership & Soft Skills"].map(
      (name) => prisma.category.create({ data: { name, slug: slugify(name) } })
    )
  );
  const [catEnglish, catBusiness, catTech, catLeadership] = categories;

  const instructors = await Promise.all([
    prisma.instructor.create({
      data: {
        fullName: "Ahmed Al Habsi",
        slug: "ahmed-al-habsi",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        title: "Senior English Language Trainer",
        qualifications: "MA in TESOL, University of Leeds",
        certifications: "CELTA, DELTA",
        experienceYears: 12,
        bio: "Ahmed has spent over a decade helping professionals and students across the Gulf region build confidence in spoken and written English. He blends structured grammar coaching with real-world communication practice.",
        specialization: "Business English, Communication Skills",
        languages: "Arabic, English",
      },
    }),
    prisma.instructor.create({
      data: {
        fullName: "Sara Al Farsi",
        slug: "sara-al-farsi",
        photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        title: "Academic Writing & IELTS Specialist",
        qualifications: "MA in Applied Linguistics, University of Melbourne",
        certifications: "IELTS Certified Trainer, TEFL",
        experienceYears: 9,
        bio: "Sara specializes in preparing learners for international academic standards. Her IELTS students consistently improve by a full band score within one course cycle.",
        specialization: "IELTS Preparation, Academic Writing",
        languages: "Arabic, English, French",
      },
    }),
    prisma.instructor.create({
      data: {
        fullName: "Yousuf Al Balushi",
        slug: "yousuf-al-balushi",
        photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
        title: "Corporate Skills & Excel Trainer",
        qualifications: "MBA, Sultan Qaboos University",
        certifications: "Microsoft Office Specialist (MOS) Master",
        experienceYears: 8,
        bio: "Yousuf trains corporate teams across Oman on productivity tools and data-driven decision-making, translating spreadsheet theory into everyday office workflows.",
        specialization: "Microsoft Excel, Data Analysis",
        languages: "Arabic, English",
      },
    }),
    prisma.instructor.create({
      data: {
        fullName: "Layla Al Riyami",
        slug: "layla-al-riyami",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
        title: "Leadership & People Development Coach",
        qualifications: "MSc Organizational Psychology, King's College London",
        certifications: "ICF Certified Coach (PCC)",
        experienceYears: 15,
        bio: "Layla has coached mid- to senior-level leaders across the region on team management, communication, and strategic decision-making, drawing on 15 years in organizational psychology.",
        specialization: "Leadership, Team Management",
        languages: "Arabic, English",
      },
    }),
  ]);
  const [ahmed, sara, yousuf, layla] = instructors;

  type CourseSeed = {
    title: string;
    code: string;
    description: string;
    objectives: string[];
    imageUrl: string;
    level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    format: "ONLINE_LIVE" | "SELF_PACED" | "HYBRID";
    durationHours: number;
    sessionsCount: number;
    hourlyRate: number;
    maxLearners: number;
    categoryId: string;
    instructorId: string;
    modules: { title: string; description: string }[];
  };

  const courseSeeds: CourseSeed[] = [
    {
      title: "English Communication Skills",
      code: "ENG-101",
      description:
        "A practical spoken-English course designed to build everyday communication confidence, from workplace conversations to social interactions. Learners practice through role-play, guided discussion, and real-time feedback.",
      objectives: [
        "Communicate confidently in everyday workplace situations",
        "Use correct grammar and vocabulary in spoken conversation",
        "Understand and respond to native-paced English",
        "Deliver short presentations with clear structure",
      ],
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      level: "BEGINNER",
      format: "ONLINE_LIVE",
      durationHours: 12,
      sessionsCount: 6,
      hourlyRate: 10,
      maxLearners: 15,
      categoryId: catEnglish.id,
      instructorId: ahmed.id,
      modules: [
        { title: "Module 1 – Introduction & Everyday Vocabulary", description: "Greetings, small talk, and building conversational confidence." },
        { title: "Module 2 – Core Grammar Concepts", description: "Tenses, sentence structure, and common mistakes to avoid." },
        { title: "Module 3 – Practical Application", description: "Role-play scenarios for workplace and social settings." },
        { title: "Module 4 – Assessment & Feedback", description: "Recorded speaking assessment with personalized feedback." },
      ],
    },
    {
      title: "Business English",
      code: "ENG-201",
      description:
        "Master the language of the modern workplace: emails, meetings, negotiations, and presentations. Ideal for professionals who use English daily in a business context.",
      objectives: [
        "Write clear, professional business emails and reports",
        "Participate confidently in meetings and conference calls",
        "Negotiate and present ideas persuasively in English",
        "Use business-specific vocabulary accurately",
      ],
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
      level: "INTERMEDIATE",
      format: "ONLINE_LIVE",
      durationHours: 16,
      sessionsCount: 8,
      hourlyRate: 12,
      maxLearners: 12,
      categoryId: catBusiness.id,
      instructorId: ahmed.id,
      modules: [
        { title: "Module 1 – Introduction to Business Communication", description: "Tone, formality, and business etiquette in English." },
        { title: "Module 2 – Core Concepts: Emails & Reports", description: "Structuring professional written communication." },
        { title: "Module 3 – Practical Application: Meetings & Negotiation", description: "Live simulation of meetings and negotiation scenarios." },
        { title: "Module 4 – Assessment: Presentation Delivery", description: "Final graded business presentation." },
      ],
    },
    {
      title: "Academic Writing",
      code: "ENG-301",
      description:
        "A structured course covering essay construction, academic tone, citation, and argument development for university-level writing.",
      objectives: [
        "Structure clear, well-argued academic essays",
        "Apply correct citation and referencing styles",
        "Develop a formal academic tone and vocabulary",
        "Critically analyze and synthesize source material",
      ],
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      level: "INTERMEDIATE",
      format: "SELF_PACED",
      durationHours: 10,
      sessionsCount: 5,
      hourlyRate: 11,
      maxLearners: 20,
      categoryId: catEnglish.id,
      instructorId: sara.id,
      modules: [
        { title: "Module 1 – Introduction to Academic Writing", description: "What distinguishes academic tone from everyday writing." },
        { title: "Module 2 – Core Concepts: Structure & Argument", description: "Thesis statements, paragraphing, and logical flow." },
        { title: "Module 3 – Practical Application: Citations", description: "APA and Harvard referencing in practice." },
        { title: "Module 4 – Assessment: Full Essay Submission", description: "Submit and receive feedback on a complete essay." },
      ],
    },
    {
      title: "IELTS Preparation",
      code: "IELTS-100",
      description:
        "An intensive preparation course covering all four IELTS components — Listening, Reading, Writing, and Speaking — with exam strategy and timed practice tests.",
      objectives: [
        "Apply proven strategies for each IELTS section",
        "Manage time effectively under exam conditions",
        "Improve band score through targeted practice tests",
        "Build exam-day confidence through mock interviews",
      ],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      level: "ADVANCED",
      format: "ONLINE_LIVE",
      durationHours: 20,
      sessionsCount: 10,
      hourlyRate: 15,
      maxLearners: 10,
      categoryId: catBusiness.id,
      instructorId: sara.id,
      modules: [
        { title: "Module 1 – Introduction to the IELTS Exam", description: "Exam format, scoring bands, and test strategy overview." },
        { title: "Module 2 – Core Concepts: Reading & Listening", description: "Skimming, scanning, and note-taking techniques." },
        { title: "Module 3 – Practical Application: Writing & Speaking", description: "Timed writing tasks and mock speaking interviews." },
        { title: "Module 4 – Assessment: Full Mock Exam", description: "Complete timed mock exam with detailed band feedback." },
      ],
    },
    {
      title: "Microsoft Excel",
      code: "TECH-110",
      description:
        "From spreadsheet fundamentals to advanced formulas, pivot tables, and dashboards — a hands-on course for turning raw data into business insight.",
      objectives: [
        "Build and format professional spreadsheets",
        "Use formulas, functions, and pivot tables confidently",
        "Create dynamic charts and dashboards",
        "Automate repetitive tasks with basic macros",
      ],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      level: "BEGINNER",
      format: "HYBRID",
      durationHours: 14,
      sessionsCount: 7,
      hourlyRate: 9,
      maxLearners: 18,
      categoryId: catTech.id,
      instructorId: yousuf.id,
      modules: [
        { title: "Module 1 – Introduction to Excel", description: "Interface, navigation, and basic formatting." },
        { title: "Module 2 – Core Concepts: Formulas & Functions", description: "VLOOKUP, IF statements, and formula auditing." },
        { title: "Module 3 – Practical Application: Pivot Tables & Dashboards", description: "Summarizing large datasets visually." },
        { title: "Module 4 – Assessment: Data Project", description: "Build a complete dashboard from a real dataset." },
      ],
    },
    {
      title: "Leadership Skills",
      code: "LEAD-100",
      description:
        "Develop the mindset and practical toolkit of an effective leader — from communication and delegation to conflict resolution and strategic thinking.",
      objectives: [
        "Apply core leadership and delegation frameworks",
        "Communicate vision clearly to diverse teams",
        "Resolve conflict and manage difficult conversations",
        "Build a personal leadership development plan",
      ],
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      level: "INTERMEDIATE",
      format: "ONLINE_LIVE",
      durationHours: 15,
      sessionsCount: 5,
      hourlyRate: 14,
      maxLearners: 16,
      categoryId: catLeadership.id,
      instructorId: layla.id,
      modules: [
        { title: "Module 1 – Introduction to Leadership Styles", description: "Understanding your own leadership tendencies." },
        { title: "Module 2 – Core Concepts: Communication & Delegation", description: "Frameworks for clear delegation and feedback." },
        { title: "Module 3 – Practical Application: Conflict Resolution", description: "Case studies and role-play on difficult conversations." },
        { title: "Module 4 – Assessment: Leadership Plan", description: "Present a personal 90-day leadership development plan." },
      ],
    },
  ];

  const now = new Date();
  function daysFromNow(days: number) {
    const d = new Date(now);
    d.setDate(d.getDate() + days);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  for (const seed of courseSeeds) {
    const course = await prisma.course.create({
      data: {
        title: seed.title,
        slug: slugify(seed.title),
        code: seed.code,
        description: seed.description,
        objectives: JSON.stringify(seed.objectives),
        imageUrl: seed.imageUrl,
        level: seed.level,
        format: seed.format,
        durationHours: seed.durationHours,
        sessionsCount: seed.sessionsCount,
        hourlyRate: seed.hourlyRate,
        maxLearners: seed.maxLearners,
        status: "PUBLISHED",
        currency: "OMR",
        categoryId: seed.categoryId,
        instructorId: seed.instructorId,
        modules: {
          create: seed.modules.map((m, i) => ({ order: i + 1, title: m.title, description: m.description })),
        },
        schedules: {
          create: [
            { date: daysFromNow(5), startTime: "17:00", endTime: "19:00", capacity: seed.maxLearners },
            { date: daysFromNow(8), startTime: "17:00", endTime: "19:00", capacity: seed.maxLearners },
            { date: daysFromNow(12), startTime: "10:00", endTime: "12:00", capacity: seed.maxLearners },
          ],
        },
      },
      include: { schedules: true },
    });

    console.log(
      `Created course: ${course.title} (${seed.hourlyRate} x ${seed.durationHours} = ${calculateTotalPrice(seed.hourlyRate, seed.durationHours)} OMR)`
    );
  }

  await prisma.placementQuestion.createMany({
    data: placementQuestions.map((q) => ({
      cefrLevel: q.cefrLevel,
      skill: q.skill,
      difficulty: q.difficulty,
      topic: q.topic,
      prompt: q.prompt,
      options: JSON.stringify(q.options),
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? null,
      audioText: q.audioText ?? null,
    })),
  });
  console.log(`Created ${placementQuestions.length} placement questions.`);

  await prisma.placementVersion.createMany({
    data: [
      { name: "A", timeLimitMinutes: 30, questionCount: 24 },
      { name: "B", timeLimitMinutes: 30, questionCount: 24 },
      { name: "C", timeLimitMinutes: 30, questionCount: 24 },
      { name: "D", timeLimitMinutes: 35, questionCount: 28 },
      { name: "E", timeLimitMinutes: 35, questionCount: 28 },
    ],
  });
  console.log("Created 5 placement test versions (A-E).");

  console.log("Seeding complete.");
  console.log("Admin login: admin@edusphere.om / Admin@123");
  console.log("Learner login: learner@edusphere.om / Learner@123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
