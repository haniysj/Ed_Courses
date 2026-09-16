/**
 * English placement test question bank.
 *
 * Tagged by CEFR level, skill, difficulty, and topic so the adaptive
 * test-delivery engine (see src/lib/placement/adaptive.ts) can draw a
 * balanced, randomized set of questions for each attempt rather than
 * serving a single fixed test to everyone.
 */
import type { CefrLevel, PlacementDifficulty, PlacementSkill } from "../src/lib/enums";

export type PlacementQuestionSeed = {
  cefrLevel: CefrLevel;
  skill: PlacementSkill;
  difficulty: PlacementDifficulty;
  topic: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  audioText?: string;
};

export const placementQuestions: PlacementQuestionSeed[] = [
  // ------------------------------------------------------------------
  // PRE-A1
  // ------------------------------------------------------------------
  { cefrLevel: "PRE_A1", skill: "VOCABULARY", difficulty: "VERY_EASY", topic: "Personal information", prompt: "Choose the correct word: \"Hello, my name ___ Ali.\"", options: ["is", "are", "am", "be"], correctIndex: 0 },
  { cefrLevel: "PRE_A1", skill: "VOCABULARY", difficulty: "VERY_EASY", topic: "Family", prompt: "Which word means a male parent?", options: ["Mother", "Father", "Sister", "Brother"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "GRAMMAR", difficulty: "VERY_EASY", topic: "Personal information", prompt: "\"I ___ a student.\" Choose the correct word.", options: ["is", "am", "are", "be"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "GRAMMAR", difficulty: "VERY_EASY", topic: "Daily routines", prompt: "Choose the correct number word: 1, 2, 3, ___", options: ["four", "five", "six", "two"], correctIndex: 0 },
  { cefrLevel: "PRE_A1", skill: "READING", difficulty: "VERY_EASY", topic: "Personal information", prompt: "Read: \"My name is Sara. I am from Oman.\" Where is Sara from?", options: ["Egypt", "Oman", "UAE", "Qatar"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "READING", difficulty: "VERY_EASY", topic: "Food", prompt: "Read: \"I like apples and bananas.\" What does the writer like?", options: ["Vegetables", "Fruit", "Meat", "Bread"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "LISTENING", difficulty: "VERY_EASY", topic: "Personal information", audioText: "Hello. My name is Omar. I am ten years old.", prompt: "How old is Omar?", options: ["Ten", "Eleven", "Twelve", "Nine"], correctIndex: 0 },
  { cefrLevel: "PRE_A1", skill: "LISTENING", difficulty: "VERY_EASY", topic: "Daily routines", audioText: "I wake up at seven o'clock every morning.", prompt: "What time does the speaker wake up?", options: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"], correctIndex: 1 },

  // ------------------------------------------------------------------
  // A1
  // ------------------------------------------------------------------
  { cefrLevel: "A1", skill: "GRAMMAR", difficulty: "EASY", topic: "Daily routines", prompt: "\"She ___ to school every day.\"", options: ["go", "goes", "going", "gone"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "GRAMMAR", difficulty: "EASY", topic: "Family", prompt: "\"They ___ two children.\"", options: ["has", "have", "having", "had"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "GRAMMAR", difficulty: "EASY", topic: "Shopping", prompt: "Choose the correct question: \"___ is this shirt?\" (asking about price)", options: ["How much", "How many", "How long", "How far"], correctIndex: 0 },
  { cefrLevel: "A1", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Travel", prompt: "\"We ___ to Dubai last summer.\"", options: ["go", "goes", "went", "gone"], correctIndex: 2 },
  { cefrLevel: "A1", skill: "VOCABULARY", difficulty: "EASY", topic: "Food", prompt: "Which one is a vegetable?", options: ["Carrot", "Chicken", "Apple", "Milk"], correctIndex: 0 },
  { cefrLevel: "A1", skill: "VOCABULARY", difficulty: "EASY", topic: "Work", prompt: "A person who teaches students is called a ___.", options: ["Doctor", "Teacher", "Driver", "Farmer"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Daily routines", prompt: "What is the opposite of \"early\"?", options: ["Fast", "Late", "Soon", "Quick"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "READING", difficulty: "EASY", topic: "Shopping", prompt: "Read: \"The shop opens at 9am and closes at 6pm.\" What time does the shop close?", options: ["9am", "12pm", "6pm", "8pm"], correctIndex: 2 },
  { cefrLevel: "A1", skill: "READING", difficulty: "MEDIUM", topic: "Family", prompt: "Read: \"Layla has one brother and two sisters. Her brother is older than her.\" How many siblings does Layla have?", options: ["One", "Two", "Three", "Four"], correctIndex: 2 },
  { cefrLevel: "A1", skill: "LISTENING", difficulty: "EASY", topic: "Shopping", audioText: "The supermarket is open from eight in the morning until ten at night.", prompt: "When does the supermarket close?", options: ["Eight in the morning", "Ten at night", "Eight at night", "Ten in the morning"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "LISTENING", difficulty: "MEDIUM", topic: "Travel", audioText: "The train to Muscat leaves from platform three at half past nine.", prompt: "Which platform does the train leave from?", options: ["One", "Two", "Three", "Four"], correctIndex: 2 },

  // ------------------------------------------------------------------
  // A2
  // ------------------------------------------------------------------
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Daily routines", prompt: "\"I ___ TV when the phone rang.\"", options: ["watch", "watched", "was watching", "am watching"], correctIndex: 2 },
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Travel", prompt: "\"If it rains tomorrow, we ___ the picnic.\"", options: ["cancel", "will cancel", "cancelled", "canceling"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Work", prompt: "\"She has ___ working here for three years.\"", options: ["be", "being", "been", "was"], correctIndex: 2 },
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Education", prompt: "Choose the correct comparative: \"This course is ___ than the last one.\"", options: ["more difficult", "difficulter", "most difficult", "difficult"], correctIndex: 0 },
  { cefrLevel: "A2", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Health", prompt: "If you have a headache, you should ___.", options: ["go swimming", "take a rest", "eat spicy food", "run fast"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Technology", prompt: "The device you use to make phone calls and browse the internet is called a ___.", options: ["Fridge", "Smartphone", "Kettle", "Ladder"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "VOCABULARY", difficulty: "DIFFICULT", topic: "Communication", prompt: "Which word means \"to say sorry\"?", options: ["Apologize", "Appreciate", "Announce", "Argue"], correctIndex: 0 },
  { cefrLevel: "A2", skill: "READING", difficulty: "MEDIUM", topic: "Health", prompt: "Read: \"Drink plenty of water and rest if you have a cold. See a doctor if it doesn't improve in a week.\" When should you see a doctor?", options: ["Immediately", "If it doesn't improve in a week", "Only if you have a fever", "Never"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "READING", difficulty: "DIFFICULT", topic: "Workplaces", prompt: "Read: \"The meeting has been moved from Monday to Wednesday because the manager is traveling.\" Why was the meeting moved?", options: ["The room was booked", "The manager is traveling", "It was cancelled", "Wednesday is a holiday"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "LISTENING", difficulty: "MEDIUM", topic: "Work", audioText: "I usually start work at eight, but on Sundays I start at ten because the office opens later.", prompt: "What time does the speaker start work on Sundays?", options: ["Eight", "Nine", "Ten", "Eleven"], correctIndex: 2 },
  { cefrLevel: "A2", skill: "LISTENING", difficulty: "DIFFICULT", topic: "Technology", audioText: "You can reset your password by clicking the link we sent to your email, but the link only works for twenty-four hours.", prompt: "How long does the reset link work for?", options: ["One hour", "Twelve hours", "Twenty-four hours", "One week"], correctIndex: 2 },

  // ------------------------------------------------------------------
  // B1
  // ------------------------------------------------------------------
  { cefrLevel: "B1", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Education", prompt: "\"By the time she graduates, she ___ five years at the university.\"", options: ["will spend", "will have spent", "spends", "spent"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Society", prompt: "\"The report ___ by the committee before it is published.\"", options: ["reviews", "will review", "will be reviewed", "reviewed"], correctIndex: 2 },
  { cefrLevel: "B1", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Workplaces", prompt: "\"I wish I ___ more time to finish this project.\"", options: ["have", "had", "will have", "having"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "VOCABULARY", difficulty: "DIFFICULT", topic: "Academic topics", prompt: "Which word best completes: \"The professor gave a detailed ___ of the results.\"", options: ["analysis", "analyze", "analytical", "analyzing"], correctIndex: 0 },
  { cefrLevel: "B1", skill: "VOCABULARY", difficulty: "DIFFICULT", topic: "Society", prompt: "A rule made by a government is called a ___.", options: ["Habit", "Law", "Custom", "Opinion"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Workplaces", prompt: "If a company \"lays off\" workers, it means it ___.", options: ["promotes them", "trains them", "makes them redundant", "gives them a bonus"], correctIndex: 2 },
  { cefrLevel: "B1", skill: "READING", difficulty: "DIFFICULT", topic: "Academic topics", prompt: "Read: \"While the study found a correlation between the two variables, the researchers cautioned that this does not prove one causes the other.\" What did the researchers caution against?", options: ["Repeating the study", "Assuming causation from correlation", "Publishing the results", "Using a larger sample"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "READING", difficulty: "MEDIUM", topic: "Travel", prompt: "Read: \"Passengers with connecting flights should proceed directly to the transfer desk; there is no need to collect checked baggage.\" What should transfer passengers do with their checked baggage?", options: ["Collect it and recheck it", "Leave it — it transfers automatically", "Take it to customs", "Carry it onto the next flight"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "LISTENING", difficulty: "DIFFICULT", topic: "Academic topics", audioText: "The lecture originally scheduled for the main hall has been moved to room two-fourteen due to a scheduling conflict, and it will now start fifteen minutes later than planned.", prompt: "Why was the lecture moved?", options: ["The hall was too small", "A scheduling conflict", "The speaker was late", "It was cancelled"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "LISTENING", difficulty: "MEDIUM", topic: "Workplaces", audioText: "Please submit your expense reports by the end of the month; anything received after the first working day of the next month will be processed in the following cycle.", prompt: "What happens if a report is submitted late?", options: ["It is rejected", "It is processed in the next cycle", "It is processed immediately", "It requires manager approval"], correctIndex: 1 },

  // ------------------------------------------------------------------
  // B2
  // ------------------------------------------------------------------
  { cefrLevel: "B2", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Society", prompt: "\"___ the heavy traffic, we arrived on time.\"", options: ["Despite", "Although", "However", "Because"], correctIndex: 0 },
  { cefrLevel: "B2", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Academic topics", prompt: "\"Had I known about the deadline, I ___ earlier.\"", options: ["would start", "would have started", "started", "will start"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "GRAMMAR", difficulty: "VERY_DIFFICULT", topic: "Workplaces", prompt: "\"Not only ___ late, but he also forgot the documents.\"", options: ["he was", "was he", "he is", "is he"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "VOCABULARY", difficulty: "DIFFICULT", topic: "Society", prompt: "Which word means \"to make a problem less severe\"?", options: ["Mitigate", "Aggravate", "Instigate", "Escalate"], correctIndex: 0 },
  { cefrLevel: "B2", skill: "VOCABULARY", difficulty: "VERY_DIFFICULT", topic: "Academic topics", prompt: "A conclusion reached without complete evidence is best described as ___.", options: ["Conclusive", "Speculative", "Definitive", "Redundant"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "READING", difficulty: "DIFFICULT", topic: "Society", prompt: "Read: \"Critics argue the policy, though well-intentioned, fails to address the root causes of the problem and may inadvertently worsen it.\" What is the critics' main concern?", options: ["The policy is too expensive", "The policy might make the problem worse", "The policy was poorly announced", "The policy is illegal"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "READING", difficulty: "VERY_DIFFICULT", topic: "Academic topics", prompt: "Read: \"The author's argument, while compelling on the surface, rests on an assumption that has yet to be empirically tested.\" What is the author's argument missing?", options: ["Clear structure", "Empirical testing of its core assumption", "A conclusion", "Public interest"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "LISTENING", difficulty: "DIFFICULT", topic: "Society", audioText: "Although the new policy was designed to reduce traffic congestion, early data suggests it has simply shifted the problem to neighboring districts rather than solving it.", prompt: "According to the speaker, what has the new policy actually done?", options: ["Solved congestion completely", "Shifted the problem elsewhere", "Had no effect at all", "Increased congestion everywhere"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "LISTENING", difficulty: "VERY_DIFFICULT", topic: "Workplaces", audioText: "While the merger is expected to create efficiencies in the long run, analysts warn that the transition period could see significant disruption to both companies' operations.", prompt: "What do analysts warn about?", options: ["The merger will fail completely", "Disruption during the transition period", "Immediate efficiency gains", "A delay to the merger"], correctIndex: 1 },

  // ------------------------------------------------------------------
  // C1
  // ------------------------------------------------------------------
  { cefrLevel: "C1", skill: "GRAMMAR", difficulty: "VERY_DIFFICULT", topic: "Academic topics", prompt: "\"___ the committee's reservations, the proposal was approved unanimously.\"", options: ["Notwithstanding", "Provided that", "In case", "Unless"], correctIndex: 0 },
  { cefrLevel: "C1", skill: "GRAMMAR", difficulty: "VERY_DIFFICULT", topic: "Society", prompt: "\"Rarely ___ such widespread consensus on a controversial issue.\"", options: ["we have seen", "have we seen", "we saw", "did we saw"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "VOCABULARY", difficulty: "VERY_DIFFICULT", topic: "Academic topics", prompt: "Which word best describes an argument that is internally contradictory?", options: ["Incoherent", "Untenable", "Redundant", "Ambiguous"], correctIndex: 0 },
  { cefrLevel: "C1", skill: "VOCABULARY", difficulty: "VERY_DIFFICULT", topic: "Society", prompt: "A policy applied without exception to every case is described as ___.", options: ["Discretionary", "Blanket", "Provisional", "Nominal"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "READING", difficulty: "VERY_DIFFICULT", topic: "Academic topics", prompt: "Read: \"The paper's methodology, though rigorous, cannot fully account for confounding variables that may undermine the generalizability of its findings.\" What limits the study's findings?", options: ["Poor writing", "Unaccounted confounding variables", "Small sample size explicitly stated", "Lack of peer review"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "READING", difficulty: "VERY_DIFFICULT", topic: "Society", prompt: "Read: \"To characterize the reform as a panacea would be to ignore the structural inequalities that no single policy could realistically resolve.\" What is the writer cautioning against?", options: ["Ignoring the reform entirely", "Viewing the reform as a complete solution", "Implementing the reform too slowly", "Comparing it to other reforms"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "LISTENING", difficulty: "VERY_DIFFICULT", topic: "Academic topics", audioText: "Critics contend that the study's conclusions, however elegantly presented, overreach the limits of the data, particularly given the modest sample size and the absence of a control group.", prompt: "What is the main criticism of the study?", options: ["The presentation was unclear", "Its conclusions go beyond what the data supports", "It took too long to complete", "It was not published"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "LISTENING", difficulty: "VERY_DIFFICULT", topic: "Workplaces", audioText: "The board's decision, while ostensibly aimed at improving transparency, has been met with skepticism from shareholders who suspect it is more about deflecting recent criticism than enacting genuine reform.", prompt: "How have shareholders reacted to the board's decision?", options: ["With enthusiastic support", "With skepticism about its true motives", "With complete indifference", "By resigning"], correctIndex: 1 },

  // ------------------------------------------------------------------
  // Extra items for balance/variety across topics (mixed levels)
  // ------------------------------------------------------------------
  { cefrLevel: "A1", skill: "GRAMMAR", difficulty: "EASY", topic: "Communication", prompt: "\"Can you ___ me your phone number?\"", options: ["give", "gives", "giving", "gave"], correctIndex: 0 },
  { cefrLevel: "A1", skill: "VOCABULARY", difficulty: "EASY", topic: "Travel", prompt: "A place where you sleep when you are on holiday is a ___.", options: ["Hospital", "Hotel", "School", "Bank"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Health", prompt: "\"You ___ smoke here, it's not allowed.\"", options: ["should", "mustn't", "can", "could"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Shopping", prompt: "If an item is \"on sale\", it means it is ___.", options: ["Out of stock", "More expensive", "Cheaper than usual", "Not available"], correctIndex: 2 },
  { cefrLevel: "A2", skill: "READING", difficulty: "MEDIUM", topic: "Education", prompt: "Read: \"Students must submit assignments online before midnight on the due date; late submissions lose ten percent per day.\" What happens if you submit one day late?", options: ["Nothing", "You lose ten percent", "It is not accepted", "You get a warning only"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Daily routines", prompt: "\"I'm used to ___ up early now.\"", options: ["wake", "waking", "woke", "wakes"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "VOCABULARY", difficulty: "MEDIUM", topic: "Technology", prompt: "When software stops working suddenly, we say it has ___.", options: ["Upgraded", "Crashed", "Installed", "Downloaded"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "READING", difficulty: "MEDIUM", topic: "Communication", prompt: "Read: \"Please respond to this email only if you cannot attend; otherwise, we will assume you are coming.\" When should you reply?", options: ["Always", "Only if you cannot attend", "Only if you can attend", "Never"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "GRAMMAR", difficulty: "DIFFICULT", topic: "Communication", prompt: "\"She speaks so quickly ___ I can hardly understand her.\"", options: ["that", "so", "such", "as"], correctIndex: 0 },
  { cefrLevel: "B2", skill: "VOCABULARY", difficulty: "DIFFICULT", topic: "Workplaces", prompt: "To \"delegate\" a task means to ___.", options: ["Do it yourself", "Assign it to someone else", "Cancel it", "Postpone it"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "READING", difficulty: "DIFFICULT", topic: "Health", prompt: "Read: \"The trial showed promising results, but the sample size was too small to draw definitive conclusions.\" Why can't definitive conclusions be drawn?", options: ["The trial failed", "The sample size was too small", "The results were negative", "There was no control group mentioned"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "GRAMMAR", difficulty: "VERY_DIFFICULT", topic: "Workplaces", prompt: "\"Were it not for her intervention, the deal ___ collapsed.\"", options: ["would have", "will have", "had", "would"], correctIndex: 0 },
  { cefrLevel: "C1", skill: "VOCABULARY", difficulty: "VERY_DIFFICULT", topic: "Communication", prompt: "Language deliberately vague to avoid commitment is often called ___.", options: ["Explicit", "Ambiguous", "Concise", "Literal"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "VOCABULARY", difficulty: "VERY_EASY", topic: "Daily routines", prompt: "Which word is a color?", options: ["Table", "Blue", "Chair", "Book"], correctIndex: 1 },
  { cefrLevel: "PRE_A1", skill: "GRAMMAR", difficulty: "VERY_EASY", topic: "Family", prompt: "\"This is ___ mother.\"", options: ["I", "my", "me", "mine"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "READING", difficulty: "EASY", topic: "Work", prompt: "Read: \"Ahmed works in a hospital. He helps sick people.\" What is Ahmed's job most likely?", options: ["Teacher", "Doctor or nurse", "Driver", "Chef"], correctIndex: 1 },
  { cefrLevel: "A1", skill: "LISTENING", difficulty: "EASY", topic: "Food", audioText: "For breakfast, I usually have bread, cheese, and a cup of tea.", prompt: "What does the speaker have for breakfast?", options: ["Rice and chicken", "Bread, cheese, and tea", "Fruit and juice", "Eggs and coffee"], correctIndex: 1 },
  { cefrLevel: "A2", skill: "GRAMMAR", difficulty: "MEDIUM", topic: "Travel", prompt: "\"By next year, I ___ my studies.\"", options: ["will finish", "finish", "will have finished", "finished"], correctIndex: 2 },
  { cefrLevel: "A2", skill: "LISTENING", difficulty: "MEDIUM", topic: "Society", audioText: "The community center offers free classes every Saturday morning, but you need to register online at least two days in advance.", prompt: "When do you need to register by?", options: ["On Saturday", "At least two days in advance", "The same day", "One week in advance"], correctIndex: 1 },
  { cefrLevel: "B1", skill: "READING", difficulty: "DIFFICULT", topic: "Health", prompt: "Read: \"Regular exercise not only improves physical health but has also been linked to better mental well-being.\" According to the text, what else does exercise improve besides physical health?", options: ["Financial health", "Mental well-being", "Academic performance", "Social status"], correctIndex: 1 },
  { cefrLevel: "B2", skill: "LISTENING", difficulty: "DIFFICULT", topic: "Health", audioText: "The clinic has introduced an online booking system, though patients who prefer to call will still be able to do so, particularly for urgent appointments.", prompt: "Can patients still call the clinic?", options: ["No, only online booking is allowed", "Yes, especially for urgent appointments", "Only on weekends", "Only for the first visit"], correctIndex: 1 },
  { cefrLevel: "C1", skill: "READING", difficulty: "VERY_DIFFICULT", topic: "Health", prompt: "Read: \"The findings, while statistically significant, may not be clinically meaningful given the modest effect size observed.\" What does the writer suggest about the findings?", options: ["They are meaningless statistically", "They may lack real-world clinical importance despite being statistically valid", "They were fabricated", "They apply only to children"], correctIndex: 1 },
];
