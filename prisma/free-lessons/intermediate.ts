import { HW, CE, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const CARS = "Electric cars are becoming a common sight on our roads. Ten years ago they were rare, but today many drivers are choosing them instead of petrol cars.\n\nOne reason is cost. An electric car uses cheap electricity instead of expensive fuel, and it has fewer parts to repair. Another reason is the environment: electric cars produce no exhaust gases, so the air in cities is cleaner.\n\nNevertheless, there are still problems. Charging stations are not available everywhere, and a full charge can take several hours. Until charging becomes quicker and easier, some people will continue to buy petrol cars.";
const MUSEUM = "The city museum has introduced a new evening opening scheme. From next month, the museum will stay open until 9 pm on Thursdays, when tickets cost half price. The director says the aim is to attract people who work during the day. Last year, only 12 percent of visitors were under thirty, but the museum hopes the change will double that figure. Some staff have complained about the longer hours, though the director has promised extra pay.";
const PARKS_MIXED = "1. In my opinion, cities should have more parks.\n2. Firstly, parks give people a place to relax.\n3. For example, workers can walk under the trees after a long day.\n4. Therefore, cities need parks.\n5. Secondly, parks make cities cleaner because trees clean the air.";

export const INTERMEDIATE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "int-grammar-conditionals",
    level: "INTERMEDIATE", category: "GRAMMAR", title: "First and Second Conditionals", topic: "Conditionals",
    difficulty: "CORE", minutes: 15, prereq: ["pre-int-grammar-present-perfect"],
    objective: "Talk about real future possibilities (first conditional) and imaginary situations (second conditional).",
    tags: ["grammar", "conditionals", "tenses", "B1"],
    ref: { book: HW, level: "Intermediate", area: "Grammar", topic: "Conditionals 1 and 2" },
    sections: [
      text("A **conditional** sentence has two parts: an **if-clause** (the condition) and a **main clause** (the result). The tense we choose shows how real or likely the situation is.", "Explanation"),
      list("When do we use them?", ["**First conditional** — a real or likely situation in the future: If it rains tomorrow, we will stay at home.", "**Second conditional** — an unlikely, imaginary or impossible situation: If I had a million dollars, I would travel the world.", "The second conditional is also used for advice: If I were you, I would talk to him."]),
      structure("Structure", "First: If + present simple, will + base verb\nSecond: If + past simple, would + base verb", "Never use will / would in the if-clause. After if we use the present (first) or the past (second). In the second conditional we often say “If I were…” for all persons."),
      examples("Examples", {
        "First conditional": ["If you study hard, you will pass the exam.", "She'll be late if she misses the bus."],
        "Second conditional": ["If I lived by the sea, I would swim every day.", "What would you do if you won the lottery?"],
      }),
    ],
    exercises: [
      mc("If it rains tomorrow, we ___ at home.", ["stay", "will stay", "would stay"], 1, "A likely future situation needs the first conditional: if + present, will + base verb."),
      mc("If I ___ a million dollars, I would travel the world.", ["have", "had", "will have"], 1, "An imaginary situation needs the second conditional: if + past simple."),
      fill("If she ___ (study) harder, she would pass the exam.", ["studied"], "Second conditional: if + past simple (studied)."),
      mist("Find the mistake.", ["If I", "will see", "him,", "I will tell him."], 1, "see", "Do not use will in the if-clause: If I see him, I will tell him."),
      mc("Which sentence talks about an unlikely or imaginary situation?", ["If I win the lottery, I'll buy a house.", "If I won the lottery, I'd buy a house."], 1, "“Won … would” signals an imaginary or unlikely situation."),
      sa("Complete the advice: If I were you, I ___ take that job.", ["would", "'d"], "For advice we use the second conditional: would + base verb.", { hint: "modal verb" }),
    ],
  },
  {
    slug: "int-grammar-passive",
    level: "INTERMEDIATE", category: "GRAMMAR", title: "The Passive: Present and Past Simple", topic: "Passive voice",
    difficulty: "CORE", minutes: 15, prereq: ["int-grammar-conditionals"],
    objective: "Use the passive when the action matters more than who did it.",
    tags: ["grammar", "passive-voice", "tenses", "B1"],
    ref: { book: CE, level: "Intermediate", area: "Grammar", topic: "Passive" },
    sections: [
      text("In an **active** sentence the subject does the action (Workers built the bridge). In a **passive** sentence the object of the action becomes the subject (The bridge was built). We use the passive when the **doer is unknown, unimportant or obvious**, or when we want to focus on the result.", "Explanation"),
      list("When do we use it?", ["The doer is unknown: My car was stolen.", "The doer is unimportant or obvious: English is spoken in many countries.", "Formal writing and reports: The samples were tested in the laboratory."]),
      structure("Structure", "Present simple passive: subject + am / is / are + past participle\nPast simple passive: subject + was / were + past participle\n(by + doer, only if it is important)", "The verb “be” agrees with the new subject: The letter was sent. The letters were sent."),
      examples("Examples", { Present: ["Rice is grown in many countries.", "These cars are made in Japan."], Past: ["The bridge was built in 1990.", "The windows were cleaned yesterday."], "With by": ["The novel was written by a young Omani author."] }),
    ],
    exercises: [
      mc("English ___ in many countries.", ["speaks", "is spoken", "is speaking"], 1, "English is the object of the action “speak”, so we use the passive: is spoken."),
      fill("The bridge ___ (build) in 1990.", ["was built"], "Past simple passive: was / were + past participle. Bridge is singular, so was built."),
      sa("Rewrite in the passive: Someone stole my car.", ["My car was stolen.", "My car was stolen by someone."], "The object (my car) becomes the subject: My car was stolen.", { hint: "My car …" }),
      mist("Find the mistake.", ["The letters", "was sent", "yesterday."], 1, "were sent", "Letters is plural, so we need were: The letters were sent."),
      order("Put the words in order.", ["Rice", "is", "grown", "in", "many", "countries."], "word", "Passive: subject + is + past participle + place."),
      tf("In “The window was broken”, we know who broke it.", false, "The passive lets us leave out the doer; the sentence doesn't say who broke the window."),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "int-vocab-work-careers",
    level: "INTERMEDIATE", category: "VOCABULARY", title: "Work and Careers", topic: "Workplaces",
    difficulty: "CORE", minutes: 12,
    objective: "Use work-related vocabulary and collocations accurately in emails and interviews.",
    tags: ["vocabulary", "work", "workplaces", "collocations", "listening-support", "B1"],
    ref: { book: HW, level: "Intermediate", area: "Vocabulary", topic: "Work" },
    sections: [
      text("Work vocabulary appears in emails, meetings and interviews. As always, learn the **collocations**: the verb that naturally goes with each noun."),
      vocab([
        { word: "colleague", pos: "noun", meaning: "a person you work with", pron: "/ˈkɒliːɡ/", ex: "My colleagues organised a farewell lunch.", col: ["a close colleague", "a former colleague"], right: "She is my colleague.", wrong: "She is my coleague.", note: "Watch the spelling: col-league.", visual: "🧑‍💼" },
        { word: "deadline", pos: "noun", meaning: "the last time or date by which something must be done", pron: "/ˈdedlaɪn/", ex: "The deadline for the report is Friday.", col: ["meet a deadline", "miss a deadline", "a tight deadline"], right: "We must meet the deadline.", wrong: "We must catch the deadline.", note: "We meet or miss a deadline.", visual: "⏰" },
        { word: "salary", pos: "noun", meaning: "the money you receive every month for your job", pron: "/ˈsæləri/", ex: "She earns a good salary.", col: ["earn a salary", "a monthly salary", "a salary increase"], right: "He earns a high salary.", wrong: "He takes a high salary.", note: "The natural verb is earn.", visual: "💰" },
        { word: "promotion", pos: "noun", meaning: "a move to a more senior job in the same company", pron: "/prəˈməʊʃn/", ex: "He got a promotion after two years.", col: ["get a promotion", "be promoted", "a chance of promotion"], right: "She got a promotion.", wrong: "She took a promotion.", note: "We get a promotion.", visual: "📈" },
        { word: "apply", pos: "verb", meaning: "to make a formal request for something, such as a job", pron: "/əˈplaɪ/", ex: "I applied for a job at a bank.", col: ["apply for a job", "apply to a company"], right: "I want to apply for this job.", wrong: "I want to apply this job.", note: "apply + for + the job; apply + to + the company.", visual: "📨" },
        { word: "experience", pos: "noun (uncountable in this meaning)", meaning: "knowledge or skill from doing a job for a time", pron: "/ɪkˈspɪəriəns/", ex: "She has ten years of experience in sales.", col: ["work experience", "gain experience", "previous experience"], right: "I have a lot of experience.", wrong: "I have a lot of experiences in sales.", note: "For skill from work, experience is uncountable: no plural.", visual: "🎓" },
      ], "Work words"),
    ],
    exercises: [
      match("Match the verb with the noun it goes with.", [["meet", "a deadline"], ["apply for", "a job"], ["earn", "a salary"], ["get", "a promotion"]], "These are standard work collocations."),
      fill("She has ten years of work ___.", ["experience"], "Experience (uncountable) means skill from working."),
      mc("I'd like to ___ for the manager position.", ["apply", "request", "demand"], 0, "We apply for a position or a job."),
      mist("Find the mistake.", ["I want to", "apply", "a job", "at your company."], 1, "apply for", "Apply needs the preposition for: apply for a job."),
      mc("We must ___ the deadline: the report is due tomorrow.", ["meet", "catch", "make"], 0, "We meet a deadline."),
      tf("A promotion means moving to a more senior position.", true, "Yes. A promotion is a move up in the same company."),
    ],
  },
  {
    slug: "int-vocab-make-do-take-get",
    level: "INTERMEDIATE", category: "VOCABULARY", title: "Collocations with make, do, take and get", topic: "Collocations",
    difficulty: "CORE", minutes: 14, prereq: ["int-vocab-work-careers"],
    objective: "Choose between make, do, take and get to form natural phrases.",
    tags: ["vocabulary", "collocations", "communication", "listening-support", "B1"],
    ref: { book: CE, level: "Intermediate", area: "Vocabulary", topic: "Common verb collocations" },
    sections: [
      text("Four very common verbs — **make, do, take and get** — combine with many nouns. There is no perfect rule, but patterns help, and using the right verb makes your English sound natural."),
      list("Patterns", ["**make** = create or produce: make a decision, make a mistake, make an effort, make progress, make a suggestion.", "**do** = tasks and activities: do homework, do research, do the shopping, do a favour, do business.", "**take** = actions, choices and time: take a break, take a photo, take a risk, take a course, take advice.", "**get** = receive, obtain or become: get a job, get permission, get better, get a message."]),
      compare("Common mistakes", [["I did a mistake.", "I made a mistake.", "Mistakes are made, not done."], ["She made a favour for me.", "She did me a favour.", "A favour is done."], ["Let's make a break.", "Let's take a break.", "We take breaks."]]),
      tip("Learn the whole phrase, not the noun alone: “make a decision”, not “decision”."),
    ],
    exercises: [
      match("Which verb goes with each noun? Match them.", [["a decision", "make"], ["homework", "do"], ["a photo", "take"], ["a message", "get"]], "Make = create; do = task; take = action; get = receive."),
      mc("Please ___ me a favour.", ["make", "do", "take"], 1, "The natural phrase is do someone a favour."),
      mc("I need to ___ a decision by Friday.", ["make", "do", "take"], 0, "We make a decision."),
      mist("Find the mistake.", ["She", "did", "a mistake", "in the report."], 1, "made", "The natural collocation is make a mistake."),
      fill("Let's ___ a break.", ["take"], "We take a break."),
      ms("Select the TWO correct collocations.", ["make progress", "do progress", "take a risk", "make a risk"], [0, 2], "Natural: make progress and take a risk."),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "int-writing-hook-topic-support",
    level: "INTERMEDIATE", category: "WRITING", title: "Hook, Topic Sentence and Supporting Details", topic: "Paragraph development",
    difficulty: "CORE", minutes: 15, prereq: ["pre-int-writing-paragraph-structure"],
    objective: "Open a paragraph with a hook and develop it with reasons, details and examples.",
    tags: ["writing", "writing-paragraph", "topic-sentence", "supporting-sentences", "hook", "B1"],
    ref: { book: HW, level: "Intermediate", area: "Writing", topic: "Developing paragraphs" },
    sections: [
      text("A strong paragraph does more than list ideas. It starts with a **hook** to catch the reader's interest, states the **topic sentence** clearly, develops each reason with **details and examples**, and finishes with a **concluding sentence**.", "Explanation"),
      annotated("Model paragraph", [
        ["Hook", "Did you know that a single plastic bottle can stay in the sea for hundreds of years?"],
        ["Topic sentence", "Plastic pollution is one of the biggest threats to our oceans."],
        ["Supporting sentence 1", "Firstly, sea animals often mistake plastic for food and become ill."],
        ["Example / detail", "For example, turtles eat plastic bags because they look like jellyfish."],
        ["Supporting sentence 2", "Secondly, plastic breaks into tiny pieces that enter the food we eat."],
        ["Concluding sentence", "Therefore, we must reduce the plastic we use every day."],
      ]),
      list("Types of hook", ["A question: Did you know…?", "A surprising fact or number.", "A short scene or situation: Imagine waking up to…"]),
      tip("The hook should lead to the topic sentence. It is not the topic sentence itself.", "Remember"),
    ],
    exercises: [
      mc("Which sentence is the hook?", ["Did you know that a single plastic bottle can stay in the sea for hundreds of years?", "Plastic pollution is one of the biggest threats to our oceans.", "Therefore, we must reduce the plastic we use every day."], 0, "The hook is the opening question that catches the reader's interest.", "Did you know that a single plastic bottle can stay in the sea for hundreds of years? Plastic pollution is one of the biggest threats to our oceans. Firstly, sea animals often mistake plastic for food and become ill. Therefore, we must reduce the plastic we use every day."),
      mc("Choose the best hook for a paragraph about cycling to work.", ["I have a bicycle.", "What if your journey to work could make you healthier and save money?", "Bicycles have two wheels."], 1, "A question that involves the reader is an effective hook, and it leads to the topic."),
      ms("Select the TWO sentences that give supporting details for “Cycling is good for your health.”", ["It exercises your heart and legs every day.", "Many cities have new bus lines.", "Regular cyclists often sleep better at night.", "Petrol is sold at the station."], [0, 2], "Both sentences explain how cycling helps health."),
      order("Put the sentences in order to build the paragraph.", ["Imagine a city with no traffic noise.", "Electric buses can make this idea real.", "Firstly, they are much quieter than diesel buses.", "For example, passengers can talk without raising their voices.", "Therefore, cities should choose electric buses."], "paragraph", "Hook → topic sentence → supporting sentence → example → concluding sentence."),
      mc("Which sentence gives an example?", ["For example, turtles eat plastic bags because they look like jellyfish.", "Firstly, sea animals often mistake plastic for food.", "Therefore, we must reduce plastic."], 0, "“For example” introduces a specific example that illustrates the point."),
      tf("The hook and the topic sentence are the same thing.", false, "The hook attracts attention; the topic sentence states the main idea."),
    ],
  },
  {
    slug: "int-writing-opinion-paragraph",
    level: "INTERMEDIATE", category: "WRITING", title: "Build the Paragraph: An Opinion Paragraph", topic: "Opinion paragraph",
    difficulty: "CORE", minutes: 18, prereq: ["int-writing-hook-topic-support"],
    objective: "Organise and write an opinion paragraph with reasons, an example and a conclusion.",
    tags: ["writing", "writing-paragraph", "writing-organisation", "writing-connectors", "B1"],
    ref: { book: CE, level: "Intermediate", area: "Writing", topic: "Opinion writing" },
    sections: [
      text("In an **opinion paragraph** you say what you think and **prove** it with reasons. The reader should know your opinion in the first sentences, and every reason should be supported.", "Explanation"),
      structure("Structure", "1. Topic sentence with your opinion (In my opinion, …)\n2. Reason 1 (Firstly, …) + example\n3. Reason 2 (Secondly, …) + detail\n4. Concluding sentence (Therefore / For these reasons, …)"),
      annotated("Model", [
        ["Topic sentence", "In my opinion, cities should have more parks."],
        ["Reason 1", "Firstly, parks give people a place to relax."],
        ["Example", "For example, workers can walk under the trees after a long day."],
        ["Reason 2", "Secondly, parks make cities cleaner because trees clean the air."],
        ["Conclusion", "Therefore, every city needs more green spaces."],
      ]),
      list("Useful language", ["Giving an opinion: In my opinion, / I believe that / It seems to me that", "Adding reasons: Firstly, / Secondly, / In addition,", "Concluding: Therefore, / For these reasons, / In conclusion,"]),
    ],
    exercises: [
      order("Build the paragraph: put the sentences in the correct order.", ["In my opinion, cities should have more parks.", "Firstly, parks give people a place to relax.", "For example, workers can walk under the trees after a long day.", "Secondly, parks make cities cleaner because trees clean the air.", "Therefore, every city needs more green spaces."], "paragraph", "Topic sentence → reason → example → second reason → conclusion."),
      order("Build the paragraph: put the sentences in the correct order.", ["I strongly believe that everyone should learn a second language.", "Firstly, it opens more job opportunities.", "For instance, many international companies prefer employees who speak two languages.", "In addition, it helps you understand other cultures.", "For these reasons, learning a second language is worth the effort."], "paragraph", "Opinion → first reason → example → second reason → conclusion."),
      mc("Which is the best topic sentence for an opinion paragraph?", ["Many people live in cities.", "In my opinion, cities should have more parks.", "Parks are green."], 1, "It states a clear opinion that the paragraph can support."),
      mc("Which sentence is in the wrong place in the paragraph?", ["1. In my opinion, cities should have more parks.", "2. Firstly, parks give people a place to relax.", "4. Therefore, cities need parks.", "5. Secondly, parks make cities cleaner because trees clean the air."], 2, "“Therefore, cities need parks” is a concluding sentence: it belongs at the end, after the second reason.", PARKS_MIXED),
      mc("Choose the best example to support: “Parks give people a place to relax.”", ["For example, workers can walk under the trees after a long day.", "For example, cities have many cars.", "For example, trees are tall."], 0, "The example must illustrate the reason: relaxing in a park."),
      tf("An opinion paragraph should give the opinion only in the last sentence.", false, "State your opinion at the beginning, then support it; you can restate it in the conclusion."),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "int-reading-main-idea-details",
    level: "INTERMEDIATE", category: "READING", title: "Main Idea and Supporting Details", topic: "Main idea and details",
    difficulty: "CORE", minutes: 15, prereq: ["pre-int-reading-skimming-headings"],
    objective: "Identify the main idea of a multi-paragraph text and find details that support it.",
    tags: ["reading", "reading-main-idea", "reading-details", "reading-comprehension", "B1"],
    ref: { book: HW, level: "Intermediate", area: "Reading", topic: "Main idea and detail" },
    sections: [
      text("In a multi-paragraph text, each paragraph has its own idea, and together they support one **main idea** for the whole text. **Supporting details** are the reasons, examples and facts that develop those ideas. To find the main idea, read the first paragraph (introduction) and the last (conclusion), then check that it covers the middle.", "Reading strategy"),
      passage("Example text", "In the past, most people worked in an office from nine to five. Today, more and more employees work from home at least some of the week. Companies have discovered that remote work can save money and keep staff happy.\n\nThere are clear benefits. Workers save time because they do not travel, and many say they can concentrate better in a quiet home. Companies spend less on large offices.\n\nHowever, remote work is not perfect. Some employees feel lonely, and it can be hard to separate work from family life. Many firms now offer a mix of office days and home days.", "Remote working"),
      list("Guided practice", ["Main idea: Working from home has become common, with both benefits and drawbacks.", "Paragraph 2 detail: time saved, better concentration, cheaper offices.", "Paragraph 3 detail: loneliness, difficulty separating work and family life, mixed schedules."]),
      tip("The main idea must cover ALL paragraphs. A detail from one paragraph is too narrow."),
    ],
    exercises: [
      mc("What is the main idea of the text?", ["Electric cars are becoming more popular, but they still have some problems.", "Petrol is very expensive.", "Charging stations are open all night."], 0, "The text describes the growth of electric cars, their advantages, and the remaining problems.", CARS),
      mc("Which detail supports the idea that electric cars are cheap to run?", ["They use cheap electricity and need fewer repairs.", "They have quiet engines.", "They are new."], 0, "Paragraph 2: cheap electricity, fewer parts to repair.", CARS),
      ms("Select TWO details that support the idea that electric cars are cheaper to run.", ["They use cheap electricity.", "They have fewer parts to repair.", "They produce no exhaust gases.", "Charging can take several hours."], [0, 1], "Exhaust gases are an environmental point; charging time is a problem. Only the first two are about cost.", CARS),
      tf("The text says electric cars produce exhaust gases.", false, "It says they produce no exhaust gases.", CARS),
      mc("Which paragraph explains the problems with electric cars?", ["Paragraph 1", "Paragraph 2", "Paragraph 3"], 2, "Paragraph 3 starts with “Nevertheless, there are still problems.”", CARS),
      mc("Which sentence best summarises paragraph 3?", ["Charging is still too slow and not widely available, so many people keep petrol cars.", "Electric cars are cheap.", "Drivers love new technology."], 0, "The paragraph is about charging problems and their effect on buyers.", CARS),
    ],
  },
  {
    slug: "int-reading-multiple-choice",
    level: "INTERMEDIATE", category: "READING", title: "Multiple-Choice Questions: Keywords, Evidence and Elimination", topic: "Multiple choice",
    difficulty: "CORE", minutes: 15, prereq: ["int-reading-main-idea-details"],
    objective: "Answer multiple-choice reading questions by finding evidence and eliminating wrong options.",
    tags: ["reading", "reading-multiple-choice", "reading-scanning", "reading-details", "B1"],
    ref: { book: CE, level: "Intermediate", area: "Reading", topic: "Multiple-choice tasks" },
    sections: [
      text("Multiple-choice questions test whether you can find and understand **specific information**. Do not choose an answer because it looks familiar: check it against the text.", "Reading strategy"),
      list("Four steps", ["1. **Read the question** and underline the keywords (who, when, how much, why…).", "2. **Locate** the part of the text with the same idea (the words may be different).", "3. **Find the evidence**: read that part carefully.", "4. **Eliminate**: cross out options that are false or not mentioned, even if they use words from the text."]),
      passage("Guided example", "The library will open on Saturdays from next month. Membership stays free for students, but adults will pay 5 rials a year.", "Notice"),
      list("Guided practice: “How much will adults pay?”", ["Keywords: adults, pay → scan for adults / pay.", "Evidence: “adults will pay 5 rials a year”.", "Eliminate “free” — that is for students (a trap using text words)."]),
      tip("Distractors often use words from the text but change the meaning. Always check the evidence.", "Traps"),
    ],
    exercises: [
      mc("Why has the museum introduced evening opening?", ["To attract people who work during the day", "To save electricity", "To reduce the number of visitors"], 0, "Evidence: “the aim is to attract people who work during the day”.", MUSEUM),
      mc("What percentage of visitors were under thirty last year?", ["Half", "12 percent", "Double"], 1, "Evidence: “only 12 percent of visitors were under thirty”. “Double” is what the museum hopes for.", MUSEUM),
      mc("How much will tickets cost on Thursday evenings?", ["Free", "Half price", "Double price"], 1, "Evidence: “tickets cost half price”.", MUSEUM),
      mc("What has the director promised the staff?", ["Extra pay", "More holidays", "A new building"], 0, "Evidence: “the director has promised extra pay”.", MUSEUM),
      mc("What does the museum hope will happen?", ["The number of younger visitors will double.", "The number of staff will double.", "Tickets will cost less every day."], 0, "Evidence: “hopes the change will double that figure” (the 12 percent of young visitors).", MUSEUM),
    ],
  },
];

void HW; void compare; void examples; void passage; void sa; void tip; void vocab;
