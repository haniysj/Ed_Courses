import { HW, type Section, type SeedExercise, type SeedLesson } from "./dsl";

/** Compact constructor for Advanced lessons (all content in these files is ORIGINAL). */
export function A(
  slug: string,
  category: SeedLesson["category"],
  title: string,
  topic: string,
  difficulty: SeedLesson["difficulty"],
  minutes: number,
  prereq: string[],
  objective: string,
  tags: string[],
  refTopic: string,
  sections: Section[],
  exercises: SeedExercise[]
): SeedLesson {
  const area = { GRAMMAR: "Grammar", VOCABULARY: "Vocabulary", READING: "Reading", WRITING: "Writing" }[category];
  return {
    slug,
    level: "ADVANCED",
    category,
    title,
    topic,
    difficulty,
    minutes,
    prereq,
    objective,
    tags: [...tags, "C1"],
    ref: { book: HW, level: "Advanced", area, topic: refTopic },
    sections,
    exercises,
  };
}
