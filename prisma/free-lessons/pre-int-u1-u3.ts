import { HW, annotated, compare, examples, fill, flow, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Pre-Intermediate course, Units 1-3. Topics follow the academy's teaching report; all text is ORIGINAL.

const PEN_FRIENDS = "Amal and Rashid have been online friends for two years, but yesterday they met for the first time at a café in Muscat.\n\nAmal, 21, is a design student. She is tall, with long dark hair, and she was wearing a yellow scarf. “I was very nervous,” she said. “I didn't know if he would look like his photos.” She loves painting, and in her free time she goes hiking with her sister.\n\nRashid, 23, works as a software engineer in Sohar. He is shy at first, but he makes people laugh. He arrived early because he hates being late, and he waited with a cup of tea. “When she walked in, I recognised her at once,” he said. “We talked for three hours!”\n\nThe two friends agree on one thing: the first meeting was much easier than they expected.";
const QUIZ = "HOW EARLY IS YOUR BODY CLOCK? Choose one answer for each question and add up your points.\n\n1. When your alarm rings, you…\n   (a) get up at once (3 points)\n   (b) stay in bed for ten minutes (2 points)\n   (c) press the snooze button again and again (1 point)\n\n2. At breakfast, you usually…\n   (a) have a big meal (3 points)\n   (b) have only a cup of tea (2 points)\n   (c) skip breakfast (1 point)\n\n3. You do your best work…\n   (a) before noon (3 points)\n   (b) in the afternoon (2 points)\n   (c) late at night (1 point)\n\nYOUR SCORE\n8–9 points: You are a real morning person.\n5–7 points: You are flexible: you can work at almost any time.\n3–4 points: You are a night owl.";
const PAINTING = "It was raining when Inspector Malik arrived at the small museum. Someone had stolen the museum's most famous painting during the night, but the alarm didn't ring. The guard, Mr Nasser, was sitting nervously in the office.\n\n“I was making tea when I heard a noise,” he said. “I went outside to look, but there was nobody there.”\n\nThe inspector looked carefully around the room. There was a glass of water on the desk and a wet footprint near the window. Suddenly he noticed something strange: the guard's shoes were completely dry, although it was raining hard outside.\n\n“Mr Nasser,” he said quietly, “you told me you went outside.” The guard's face went white. In the end, the painting was found in the boot of the guard's car, and the mystery was over.";

export const PRE_INT_U1_U3: SeedLesson[] = [
  // ============================================================ UNIT 1 · GRAMMAR
  {
    slug: "pre-int-grammar-tense-review",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Tense Review: Present Simple, Present Continuous, Past Simple and going to", topic: "Tense review",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-grammar-present-perfect-intro"],
    objective: "Choose and form the correct tense for routines, actions in progress, finished past events and future intentions.",
    tags: ["grammar", "tenses", "present-simple", "present-continuous", "past-simple", "going-to", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Tense review (Unit 1)" },
    sections: [
      text("Four tenses do most of the work in everyday English. The **time words** in a sentence and the **meaning** you want to express tell you which one to choose.", "Explanation"),
      table("Four tenses at a glance", ["Tense", "Form", "Use", "Example"], [
        ["Present Simple", "base verb (+ s)", "routines, facts", "I work in a bank. She starts at eight."],
        ["Present Continuous", "am / is / are + -ing", "happening now or temporary", "I'm waiting for a friend."],
        ["Past Simple", "verb + -ed / irregular", "finished actions", "We visited Nizwa last week."],
        ["going to", "am / is / are + going to + verb", "plans and intentions", "I'm going to study medicine."],
      ]),
      list("Clue words", ["**Present Simple**: every day, usually, often, on Sundays.", "**Present Continuous**: now, at the moment, this week, today.", "**Past Simple**: yesterday, last year, in 2019, two days ago.", "**going to**: tomorrow, next week, next year, soon."]),
      structure("Structure", "Present Simple: I work · She works\nPresent Continuous: I am working\nPast Simple: I worked\ngoing to: I am going to work", "Negatives: don't / doesn't · am not / isn't / aren't · didn't · am not / isn't / aren't going to."),
      examples("Examples", { Routine: ["My brother plays football every Friday."], "Right now": ["He is playing football in the garden at the moment."], Finished: ["He played football yesterday."], Plan: ["He is going to play in a tournament next month."] }),
    ],
    exercises: [
      mc("Look! It ___ outside.", ["snows", "is snowing", "snowed"], 1, "“Look!” shows something happening now: Present Continuous."),
      fill("We ___ (visit) my grandparents last weekend.", ["visited"], "Last weekend is finished time: Past Simple."),
      mist("Find the mistake.", ["Tomorrow", "I go", "to the dentist."], 1, "am going to go", "A plan for tomorrow: I am going to go (or I'm going to the dentist)."),
      match("Which tense is each sentence?", [["She works in a hospital.", "Present Simple"], ["She is working now.", "Present Continuous"], ["She worked yesterday.", "Past Simple"], ["She is going to work tomorrow.", "going to"]], "Use the clue words and the meaning."),
      order("Put the words in the correct order.", ["We", "are", "going", "to", "travel", "to", "Salalah", "next", "week."], "word", "Subject + be + going to + verb + place + time."),
      sa("Make it negative: He plays tennis on Mondays. → He ___ tennis on Mondays.", ["doesn't play", "does not play"], "Present Simple negative with he: doesn't + base verb.", { hint: "doesn't …" }),
    ],
  },
  {
    slug: "pre-int-grammar-question-forms",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Forming Questions: auxiliaries and question words", topic: "Questions",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-tense-review"],
    objective: "Form questions in different tenses with the right auxiliary and question word, including subject questions.",
    tags: ["grammar", "questions", "question-words", "word-order", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Question formation (Unit 1)" },
    sections: [
      text("In most English questions the **auxiliary verb** (do, does, did, am, is, are) comes **before the subject**. A **question word** goes at the start. The main verb stays in its base or -ing form.", "Explanation"),
      table("Question words", ["Word", "Asks about", "Example"], [
        ["Who", "a person", "Who is your teacher?"], ["Whose", "possession", "Whose phone is this?"], ["Where", "place", "Where do you live?"],
        ["When", "time", "When did you arrive?"], ["Why", "reason", "Why are you laughing?"], ["How many", "countable number", "How many brothers have you got?"], ["How much", "uncountable / price", "How much does it cost?"],
      ]),
      structure("Structure", "Question word + auxiliary + subject + main verb?\nWhere + do + you + live?   When + did + she + leave?", "**Subject questions** ask about the subject and have no auxiliary: Who lives here? (not Who does live here?)"),
      examples("Examples", { "Present Simple": ["What time does the film start?"], "Present Continuous": ["Why are you wearing a coat?"], "Past Simple": ["Where did you go on holiday?"], "Subject question": ["Who called you?", "Which bus goes to the airport?"] }),
      compare("Common mistakes", [["Where you live?", "Where do you live?", "You need the auxiliary do."], ["What time the film starts?", "What time does the film start?", "Auxiliary + subject."], ["Who did call you?", "Who called you?", "A subject question has no did."]]),
    ],
    exercises: [
      order("Put the words in the correct order.", ["Where", "did", "you", "go", "on", "holiday?"], "word", "Question word + did + subject + base verb."),
      order("Put the words in the correct order.", ["What", "time", "does", "the", "film", "start?"], "word", "What time + does + subject + base verb."),
      mist("Find the mistake.", ["Where", "you", "live?"], 1, "do you", "The auxiliary do is missing: Where do you live?"),
      mc("___ phone is this? It's mine.", ["Who", "Whose", "Which"], 1, "Whose asks about possession."),
      fill("How ___ money did you spend? (uncountable)", ["much"], "Money is uncountable: how much."),
      mc("Which is a correct subject question?", ["Who did call you?", "Who called you?", "Who you called?"], 1, "In a subject question there is no auxiliary: Who called you?"),
    ],
  },

  // ============================================================ UNIT 1 · VOCABULARY
  {
    slug: "pre-int-vocab-verb-pairs",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Verb Pairs: play / go, do / make, speak / say, borrow / lend", topic: "Collocations",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-vocab-take-get"],
    objective: "Choose between confusing verb pairs and use the natural partner words.",
    tags: ["vocabulary", "collocations", "verb-pairs", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Verb + noun collocations (Unit 1)" },
    sections: [
      text("Some verbs look similar in Arabic but need **different verbs in English**. The right choice depends on the **noun** that follows. Learn the verb and noun **together**."),
      table("Verb pairs", ["Verb", "Used with", "Examples"], [
        ["play", "sports with a ball, games, instruments", "play football, play chess, play the guitar"],
        ["go", "activities ending in -ing", "go swimming, go shopping, go hiking"],
        ["do", "activities, tasks, homework", "do homework, do exercise, do a puzzle, do the shopping"],
        ["make", "create / produce", "make a cake, make a mistake, make a decision, make money"],
        ["speak", "languages; talking to people", "speak English, speak to the manager"],
        ["say", "words, sentences", "say hello, say a few words, say that…"],
        ["borrow", "receive something for a short time", "borrow a book from a friend"],
        ["lend", "give something for a short time", "lend a book to a friend"],
      ]),
      compare("Common mistakes", [["I make my homework every evening.", "I do my homework every evening.", "Homework is done, not made."], ["He said English very well.", "He speaks English very well.", "Languages are spoken."], ["Can you borrow me your pen?", "Can you lend me your pen? / Can I borrow your pen?", "lend = give; borrow = take."]]),
      tip("Memory trick: you **lend** something to someone, but you **borrow** it from someone.", "borrow / lend"),
    ],
    exercises: [
      match("Match the verb with the noun.", [["do", "homework"], ["make", "a decision"], ["play", "chess"], ["go", "shopping"], ["speak", "Spanish"]], "These are natural verb + noun partners."),
      mc("Can I ___ your dictionary for a moment?", ["lend", "borrow", "give back"], 1, "You borrow something from someone."),
      mc("She ___ me a book, and I read it in one day.", ["lent", "borrowed", "made"], 0, "She gave it to me for a short time: lent."),
      mist("Find the mistake.", ["He", "said", "three languages."], 1, "speaks", "We speak a language."),
      fill("I made a ___ when I paid the bill twice. (a wrong action)", ["mistake"], "We make a mistake."),
      mc("Which sentence is correct?", ["I do a cake every Friday.", "I make a cake every Friday.", "I play a cake every Friday."], 1, "make + cake."),
    ],
  },
  {
    slug: "pre-int-vocab-adjective-collocations",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Adjective + Preposition and Adjective + Noun", topic: "Collocations",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-vocab-verb-pairs"],
    objective: "Use common adjective + preposition combinations and natural adjective + noun pairs.",
    tags: ["vocabulary", "collocations", "prepositions", "adjectives", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Adjective + preposition; adjective + noun (Unit 1)" },
    sections: [
      text("Many adjectives need a **fixed preposition** after them, and many nouns have a **natural adjective partner**. These combinations must be learned as chunks."),
      table("Adjective + preposition", ["Adjective", "+ preposition", "Example"], [
        ["excited", "about", "I'm excited about the trip."], ["interested", "in", "She is interested in photography."], ["good / bad", "at", "He is good at maths."],
        ["afraid", "of", "Are you afraid of flying?"], ["keen", "on", "They are keen on football."], ["worried", "about", "I'm worried about my exam."], ["different", "from", "This phone is different from mine."],
      ]),
      table("Adjective + noun", ["Adjective", "Noun", "Not natural"], [
        ["delicious", "meal", "a tasty meal is also OK; not a sweet meal"],
        ["heavy", "rain / traffic", "not strong rain"], ["strong", "coffee / wind", "not heavy coffee"], ["fast", "food", "not quick food"], ["deep", "sleep", "not big sleep"],
      ]),
      tip("Use the whole phrase when you learn a new adjective: “interested in”, not just “interested”.", "Learn in chunks"),
    ],
    exercises: [
      fill("She is very interested ___ art history.", ["in"], "interested in."),
      fill("I'm not very good ___ singing.", ["at"], "good at."),
      match("Match the adjective with the noun it usually goes with.", [["heavy", "rain"], ["strong", "coffee"], ["delicious", "meal"], ["fast", "food"]], "These adjective + noun pairs sound natural."),
      mist("Find the mistake.", ["We are", "excited for", "the holiday."], 1, "excited about", "The natural preposition is about."),
      mc("This phone is different ___ mine.", ["from", "of", "with"], 0, "different from."),
      mc("Which is the natural phrase?", ["heavy traffic", "big traffic", "large traffic"], 0, "Traffic is heavy."),
    ],
  },
  {
    slug: "pre-int-vocab-two-meanings",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Words with Two Meanings: train, kind, mean", topic: "Word meaning",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-vocab-adjective-collocations"],
    objective: "Recognise that some words have several meanings and use context to choose the right one.",
    tags: ["vocabulary", "word-meaning", "context", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Words with more than one meaning (Unit 1)" },
    sections: [
      text("Many common English words have **more than one meaning**, sometimes even as **different parts of speech**. The **sentence around the word** shows which meaning is used."),
      vocab([
        { word: "train", pos: "noun / verb", meaning: "noun: a long vehicle on rails · verb: to practise to improve a skill", ar: "قطار / يتدرّب", pron: "/treɪn/", ex: "I take the train to work. · She trains every day for the race.", col: ["catch a train", "train for a race"], visual: "🚆" },
        { word: "kind", pos: "adjective / noun", meaning: "adjective: friendly and generous · noun: a type", ar: "لطيف / نوع", pron: "/kaɪnd/", ex: "Thank you, that's very kind of you. · What kind of music do you like?", col: ["a kind person", "what kind of"], visual: "🤝" },
        { word: "mean", pos: "verb / adjective", meaning: "verb: to have a meaning · adjective: unkind, or not generous (British English)", ar: "يعني / بخيل", pron: "/miːn/", ex: "What does this word mean? · He is too mean to buy a gift.", col: ["mean to someone"], visual: "❓" },
        { word: "light", pos: "noun / adjective", meaning: "noun: brightness · adjective: not heavy", ar: "ضوء / خفيف", pron: "/laɪt/", ex: "Turn on the light. · My bag is very light.", col: ["a light bag", "switch on the light"], visual: "💡" },
      ], "Two meanings"),
    ],
    exercises: [
      mc("“I take the train to work.” Here train is a…", ["noun", "verb"], 0, "A train is a vehicle: a noun."),
      mc("“She trains every day for the marathon.” Here train means…", ["a vehicle", "to practise to improve"], 1, "Trains = practises. It is a verb."),
      mc("“What kind of films do you like?” Here kind means…", ["friendly", "type"], 1, "What kind of = what type of."),
      mc("“That's very kind of you.” Here kind means…", ["type", "friendly and generous"], 1, "It describes a person's behaviour."),
      mc("“What does this sign mean?” means…", ["What is the meaning of this sign?", "Is this sign unkind?"], 0, "Mean is a verb: to have a meaning."),
      mist("Find the mistake (the writer means heavy).", ["My suitcase", "is very light", "so I can't lift it."], 1, "is very heavy", "The context (can't lift) shows the meaning should be heavy."),
    ],
  },

  // ============================================================ UNIT 1 · READING
  {
    slug: "pre-int-reading-first-meeting",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: A First Meeting", topic: "Scanning for details",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-reading-skimming-headings"],
    objective: "Scan a magazine-style article for personal details and infer the meaning of words from context.",
    tags: ["reading", "reading-scanning", "reading-details", "reading-inference", "reading-vocabulary-context", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "Two people meet for the first time (Unit 1)" },
    sections: [
      text("Magazine articles about people give **many details** (age, job, hobbies, feelings). When you answer questions, **scan** for the facts, and use **context** to guess the meaning of adjectives that describe feelings.", "Reading strategy"),
      passage("Example", "Hamad, 30, is a chef. He is quiet and hard-working. “I never stop learning,” he says. In his free time he plays chess.", "A short profile"),
      list("Guided practice", ["Job? → chef (a noun near the age).", "Personality? → quiet and hard-working.", "Hobby? → chess (look for “in his free time”)."]),
      tip("A word you don't know is often explained by the words next to it: “He is shy at first, but he makes people laugh.”", "Vocabulary from context"),
    ],
    exercises: [
      mc("How long have Amal and Rashid been online friends?", ["two months", "two years", "two weeks"], 1, "“have been online friends for two years”.", PEN_FRIENDS),
      mc("What does Rashid do?", ["He is a design student.", "He is a software engineer.", "He is a chef."], 1, "“Rashid, 23, works as a software engineer in Sohar.”", PEN_FRIENDS),
      tf("Rashid arrived late.", false, "“He arrived early because he hates being late.”", PEN_FRIENDS),
      mc("What was Amal wearing?", ["a yellow scarf", "a green coat", "a white dress"], 0, "“she was wearing a yellow scarf.”", PEN_FRIENDS),
      mc("In the text, “nervous” means…", ["worried and a little afraid", "very angry", "very tired"], 0, "Amal wasn't sure if he would look like his photos: she felt worried.", PEN_FRIENDS),
      sa("How long did they talk? (two words)", ["three hours"], "“We talked for three hours!”", { context: PEN_FRIENDS }),
    ],
  },

  // ============================================================ UNIT 1 · WRITING
  {
    slug: "pre-int-writing-word-order-forms",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Sentence Word Order and Form Filling", topic: "Word order",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-writing-holiday-email"],
    objective: "Put words in the correct order in affirmative and question sentences and complete a form with full sentences.",
    tags: ["writing", "word-order", "sentence-structure", "forms", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Word order; personal statements (Unit 1)" },
    sections: [
      text("English has a **fixed word order**. If the order is wrong, the sentence is hard to understand. Learn the basic patterns and **check every sentence** you write.", "Explanation"),
      table("Word order patterns", ["Type", "Order", "Example"], [
        ["Statement", "Subject + verb + object + place + time", "I bought a book in Muscat yesterday."],
        ["Adverb of frequency", "Subject + adverb + verb (after be)", "She always drinks tea. He is often late."],
        ["Yes / no question", "Auxiliary + subject + verb", "Do you play chess?"],
        ["Wh- question", "Wh-word + auxiliary + subject + verb", "Where did you buy it?"],
      ]),
      structure("Word order", "Subject → Verb → Object → Place → Time", "Time words can also go at the start: Yesterday I bought a book."),
      annotated("A personal statement", [
        ["Who", "My name is Salma Al Balushi and I am nineteen years old."],
        ["Routine", "I usually get up at six and I go to college by bus."],
        ["Interests", "In my free time I play the piano, and I never miss my Friday football match."],
      ]),
      tip("When you unscramble a sentence, look for the subject and the verb first, then add the object, the place and the time.", "Sentence-unscrambling tip"),
    ],
    exercises: [
      order("Put the words in the correct order.", ["I", "bought", "a", "book", "in", "Muscat", "yesterday."], "word", "Subject + verb + object + place + time."),
      order("Put the words in the correct order.", ["She", "always", "drinks", "tea", "after", "lunch."], "word", "The adverb of frequency goes before the main verb."),
      order("Put the words in the correct order.", ["Where", "did", "you", "buy", "your", "phone?"], "word", "Wh-word + did + subject + verb + object."),
      order("Put the words in the correct order.", ["He", "is", "often", "late", "for", "class."], "word", "After the verb be: is often late."),
      mist("Find the mistake.", ["I", "yesterday", "bought", "a book."], 1, "(move it to the end)", "Time words normally go at the end: I bought a book yesterday."),
      order("Put the sentences in order to make a personal statement.", ["My name is Salma and I am nineteen.", "I usually get up at six.", "I go to college by bus.", "In my free time I play the piano."], "paragraph", "Who you are, routine, then interests."),
    ],
  },

  // ============================================================ UNIT 2 · GRAMMAR
  {
    slug: "pre-int-grammar-present-simple-vs-continuous",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Present Simple or Present Continuous?", topic: "Present tenses",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-question-forms"],
    objective: "Choose between the Present Simple (habits, permanent states) and the Present Continuous (now, temporary).",
    tags: ["grammar", "present-simple", "present-continuous", "tenses", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Present Simple and Present Continuous (Unit 2)" },
    sections: [
      text("We use the **Present Simple** for **habits and permanent situations** and the **Present Continuous** for **actions in progress now or temporary situations**.", "Explanation"),
      table("Simple or Continuous?", ["Feature", "Present Simple", "Present Continuous"], [
        ["Meaning", "habit, routine, permanent, general truth", "now, around now, temporary, changing"],
        ["Example", "I live in Sohar.", "I'm staying in Muscat this week."],
        ["Time words", "always, usually, every day, on Fridays", "now, at the moment, today, this week"],
        ["Question", "Where do you work?", "What are you doing?"],
      ]),
      structure("Structure", "Present Simple: I work · He works · Do you work?\nPresent Continuous: I am working · He is working · Are you working?"),
      examples("Examples", { Permanent: ["My sister works in a bank."], Temporary: ["My sister is working in Dubai this month."], Routine: ["We usually eat at seven."], "Now": ["We are eating right now."] }),
      tip("Some verbs (know, want, need) are not used in the continuous: see the State Verbs lesson.", "Next lesson"),
    ],
    exercises: [
      mc("I usually ___ to work by car, but today I ___ by bus.", ["go / am going", "am going / go", "go / go"], 0, "Usually = habit (simple); today = temporary (continuous)."),
      fill("Sara ___ (work) in a hospital, but this week she ___ (study) for an exam at home.", ["works", "is studying"], "Permanent: works. Temporary this week: is studying."),
      mist("Find the mistake.", ["Look! The bus", "comes", "now."], 1, "is coming", "Now: is coming."),
      match("Simple or continuous?", [["He plays football every Friday.", "Present Simple"], ["He is playing football now.", "Present Continuous"], ["I'm living with my aunt this year.", "Present Continuous"], ["Water boils at 100 degrees.", "Present Simple"]], "Habits and facts = simple; now and temporary = continuous."),
      order("Put the words in the correct order.", ["What", "are", "you", "doing", "at", "the", "moment?"], "word", "Wh-word + are + subject + verb-ing."),
      sa("Write the negative: They are watching TV. → They ___ TV.", ["aren't watching", "are not watching"], "Present Continuous negative: aren't + -ing.", { hint: "aren't …" }),
    ],
  },
  {
    slug: "pre-int-grammar-state-verbs",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "State Verbs: know, understand, need, belong, think, agree", topic: "State verbs",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-grammar-present-simple-vs-continuous"],
    objective: "Recognise state verbs and use them in the Present Simple, not the continuous form.",
    tags: ["grammar", "state-verbs", "present-simple", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "State verbs (Unit 2)" },
    sections: [
      text("**State verbs** describe **states** (thoughts, feelings, possession, senses), not actions. We do **not normally use them in the continuous**, even for something happening now.", "Explanation"),
      table("Common state verbs", ["Group", "Verbs"], [
        ["Thinking", "know, understand, believe, remember, agree, think (= have an opinion)"],
        ["Feeling", "like, love, hate, prefer, want, need"],
        ["Possession", "have (= own), belong, own"],
        ["Senses / others", "seem, mean, cost, taste"],
      ]),
      structure("Structure", "I understand. (not I am understanding.)\nThis book belongs to me. (not is belonging)", "A few verbs have two meanings: I think it's a good idea (opinion → simple). I'm thinking about my holiday (action → continuous)."),
      compare("Common mistakes", [["I'm knowing the answer.", "I know the answer.", "Know is a state verb."], ["I am wanting a coffee.", "I want a coffee.", "Want is a state verb."], ["She is having a car.", "She has a car.", "have = own: simple. (She is having lunch = OK: an action.)"]]),
    ],
    exercises: [
      mc("I ___ this exercise. Can you help me?", ["don't understand", "am not understanding", "not understand"], 0, "Understand is a state verb: simple tense."),
      mist("Find the mistake.", ["I", "am wanting", "a glass of water."], 1, "want", "Want is a state verb."),
      mc("This bag ___ to my sister.", ["belongs", "is belonging", "belong"], 0, "Belong is a state verb and it takes -s with this bag."),
      match("State verb or action?", [["know", "state"], ["run", "action"], ["need", "state"], ["swim", "action"], ["agree", "state"]], "State verbs describe thoughts, feelings and possession, not actions."),
      fill("I ___ (think) English is a fascinating language. (opinion)", ["think"], "Think as opinion is a state verb: I think…"),
      mc("Which sentence is correct?", ["I am liking pizza.", "I like pizza.", "I liking pizza."], 1, "Like is a state verb."),
    ],
  },
  {
    slug: "pre-int-grammar-have-have-got",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "have and have got", topic: "have / have got",
    difficulty: "BASIC", minutes: 10, prereq: ["pre-int-grammar-state-verbs"],
    objective: "Use have and have got for possession and use have (not have got) for actions.",
    tags: ["grammar", "have", "have-got", "possession", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "have / have got (Unit 2)" },
    sections: [
      text("**Have** and **have got** both express **possession** and relationships, and they mean the same thing. **Have got** is more informal and common in British English. For **actions** (have breakfast, have a shower) we use only **have**.", "Explanation"),
      table("Forms", ["Feature", "have", "have got"], [
        ["Positive", "I have a car.", "I've got a car."],
        ["Negative", "I don't have a car.", "I haven't got a car."],
        ["Question", "Do you have a car?", "Have you got a car?"],
        ["Short answer", "Yes, I do. / No, I don't.", "Yes, I have. / No, I haven't."],
      ]),
      list("Only have for actions", ["have breakfast / lunch / dinner", "have a shower, have a rest, have a party", "have a look, have a chat, have a good time"]),
      structure("Structure", "Possession: have / have got · Actions: have only", "We don't say I've got breakfast at eight. Say: I have breakfast at eight."),
    ],
    exercises: [
      fill("___ you got any brothers or sisters? Yes, I ___.", ["Have", "have"], "have got: Have you got…? Yes, I have."),
      mc("Which sentence is correct?", ["I've got a shower every morning.", "I have a shower every morning.", "I have got showered every morning."], 1, "For an action (a shower) use have."),
      mist("Find the mistake.", ["She", "don't have got", "a car."], 1, "hasn't got", "With have got, the negative is hasn't got (or doesn't have)."),
      sa("Rewrite with have got: She has a new laptop. → She ___ a new laptop.", ["has got", "'s got"], "has → has got.", { hint: "has …" }),
      order("Put the words in the correct order.", ["Do", "you", "have", "any", "brothers", "or", "sisters?"], "word", "Do + subject + have + object."),
      tf("“We've got lunch at one o'clock every day” is correct.", false, "Lunch is an action here: we have lunch at one o'clock."),
    ],
  },

  // ============================================================ UNIT 2 · VOCABULARY
  {
    slug: "pre-int-vocab-free-time-lifestyle",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Free-Time and Lifestyle Phrases", topic: "Free time",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-vocab-two-meanings"],
    objective: "Use natural phrases to talk about how people spend their free time and their lifestyle.",
    tags: ["vocabulary", "free-time", "lifestyle", "collocations", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Free-time activities (Unit 2)" },
    sections: [
      text("People talk about their free time with **fixed phrases**. Learn the **whole chunk** so that you can use it naturally in speaking and writing."),
      vocab([
        { word: "have a lie-in", pos: "phrase", meaning: "to stay in bed later than usual in the morning", ar: "ينام لوقت متأخر", pron: "/hæv ə ˈlaɪ ɪn/", ex: "On Fridays I have a lie-in.", col: ["have a lie-in on Saturday"], visual: "🛌" },
        { word: "do puzzles", pos: "phrase", meaning: "to solve games such as crosswords or jigsaws", ar: "يحل الألغاز", pron: "/duː ˈpʌzlz/", ex: "My grandfather does crosswords every morning.", col: ["do a crossword", "do a jigsaw"], right: "I do puzzles.", wrong: "I make puzzles.", visual: "🧩" },
        { word: "go out for a meal", pos: "phrase", meaning: "to eat in a restaurant instead of at home", ar: "يخرج لتناول الطعام", pron: "/ɡəʊ aʊt fər ə miːl/", ex: "We go out for a meal on special occasions.", col: ["go out for dinner"], visual: "🍽️" },
        { word: "chat on the phone", pos: "phrase", meaning: "to have a friendly, informal conversation by phone", ar: "يتحدث عبر الهاتف", pron: "/tʃæt ɒn ðə fəʊn/", ex: "She chats on the phone with her cousin for hours.", col: ["chat online", "chat with friends"], visual: "📞" },
        { word: "catch up with friends", pos: "phrase", meaning: "to meet friends you haven't seen for some time and share news", ar: "يلتقي بالأصدقاء ويتبادل الأخبار", pron: "/kætʃ ʌp wɪð frendz/", ex: "I catch up with my friends at the weekend.", col: ["catch up on the news"], visual: "☕" },
        { word: "stay in", pos: "phrase", meaning: "to stay at home rather than go out", ar: "يبقى في المنزل", pron: "/steɪ ɪn/", ex: "It's raining, so let's stay in and watch a film.", col: ["stay in tonight"], note: "Opposite: go out.", visual: "🏠" },
      ], "Free-time phrases"),
    ],
    exercises: [
      match("Match the phrase with its meaning.", [["have a lie-in", "stay in bed late"], ["go out for a meal", "eat in a restaurant"], ["stay in", "stay at home"], ["catch up with friends", "meet and share news"]], "Each phrase describes a different free-time activity."),
      fill("I love doing ___. Crosswords are my favourite.", ["puzzles"], "do puzzles."),
      mc("We ___ for a meal on my birthday.", ["go out", "make out", "take out"], 0, "go out for a meal."),
      mist("Find the mistake.", ["On Fridays I", "make", "a lie-in."], 1, "have", "The natural verb is have a lie-in."),
      mc("It's raining hard. Let's ___ and watch a film.", ["stay in", "go out", "catch up"], 0, "Stay in = stay at home."),
      sa("You talk to a friend on your mobile: you ___ on the phone.", ["chat"], "chat on the phone.", { hint: "c _ _ t" }),
    ],
  },

  // ============================================================ UNIT 2 · READING
  {
    slug: "pre-int-reading-lifestyle-quiz",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: A Lifestyle Quiz", topic: "Survey structure",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-reading-first-meeting"],
    objective: "Understand how a questionnaire is organised and work out a score and a result from the answer options.",
    tags: ["reading", "reading-details", "reading-multiple-choice", "quiz", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "A lifestyle questionnaire (Unit 2)" },
    sections: [
      text("A **quiz** has a clear structure: **numbered questions**, **lettered answers**, a **scoring system** and **results**. To read one well, look at how points are given and where each score band starts and ends.", "Reading strategy"),
      list("Steps", ["1. Read the instructions (what do you have to do?).", "2. Read every answer option before you choose.", "3. Add up the points.", "4. Match your total with the result key."]),
      passage("Example", "Q1. You lose your keys. You (a) look calmly for them (2 points) (b) call a friend at once (1 point). Result: 3 points = calm; 2 points = needs help.", "A tiny quiz"),
      tip("Check the number ranges carefully: 5–7 includes 5, 6 and 7.", "Score bands"),
    ],
    exercises: [
      mc("How many points do you get for skipping breakfast?", ["1", "2", "3"], 0, "“(c) skip breakfast (1 point)”.", QUIZ),
      mc("Someone chooses (a), (b) and (c) once each. What is the total?", ["5", "6", "7"], 1, "3 + 2 + 1 = 6.", QUIZ),
      mc("What result does a score of 6 give?", ["a real morning person", "flexible", "a night owl"], 1, "5–7 points = flexible.", QUIZ),
      mc("Which answer to question 3 gives 3 points?", ["before noon", "in the afternoon", "late at night"], 0, "“(a) before noon (3 points)”.", QUIZ),
      tf("Question 2 is about work.", false, "Question 2 is about breakfast.", QUIZ),
      mc("A person scores 9. What are they?", ["a night owl", "flexible", "a real morning person"], 2, "8–9 points = a real morning person.", QUIZ),
    ],
  },

  // ============================================================ UNIT 2 · WRITING
  {
    slug: "pre-int-writing-cohesion-100-words",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Joining Ideas: Writing a 100-Word Profile", topic: "Cohesion",
    difficulty: "CORE", minutes: 18, prereq: ["pre-int-writing-word-order-forms"],
    objective: "Join clauses with coordinating and subordinating conjunctions to write a smooth 100-word email or profile.",
    tags: ["writing", "writing-paragraph", "connectors", "conjunctions", "cohesion", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Paragraph cohesion; linking words (Unit 2)" },
    sections: [
      text("Good writing joins **short sentences** into longer, smoother ones. **Coordinating conjunctions** join two equal clauses (and, but, so). **Subordinating conjunctions** join a main clause to a supporting clause (because, although). **However** joins two separate sentences.", "Explanation"),
      table("Linking words", ["Word", "Type", "Job", "Example"], [
        ["and", "coordinating", "adds", "I like tennis and I play it every week."],
        ["but", "coordinating", "contrast", "I like tennis, but I'm not very good at it."],
        ["so", "coordinating", "result", "It was hot, so we went swimming."],
        ["because", "subordinating", "reason", "I stayed in because I was tired."],
        ["although", "subordinating", "contrast", "Although I was tired, I went out."],
        ["however", "adverb (new sentence)", "contrast", "I was tired. However, I went out."],
      ]),
      annotated("A 100-word profile", [
        ["Introduction", "My name is Layla and I am twenty. I study business at university, and I live with my parents in Muscat."],
        ["Interests", "I love reading, but I don't have much free time because I have a part-time job in a bookshop."],
        ["Personality", "Although I am quite shy, I enjoy meeting new people, so I am learning to be more confident."],
        ["Goal", "I would like to travel more. However, I need to save money first."],
      ]),
      tip("A comma goes before but and so (between two full clauses), and after a because or although clause only when it comes first.", "Punctuation"),
    ],
    exercises: [
      fill("It was very hot, ___ we went to the beach.", ["so"], "The beach trip is the result: so."),
      fill("___ I was tired, I finished my homework.", ["Although"], "Contrast in a subordinate clause: Although…"),
      mc("I stayed at home ___ I had a headache.", ["because", "although", "so"], 0, "Because gives a reason."),
      mist("Find the mistake.", ["Although it was late,", "but", "we kept working."], 1, "(remove but)", "Use although or but, not both."),
      order("Put the words in the correct order.", ["Although", "I", "was", "tired,", "I", "went", "out."], "word", "Although + clause, main clause."),
      order("Put the sentences in order to make a profile.", ["My name is Layla and I am twenty.", "I love reading, but I don't have much free time.", "Although I am quite shy, I enjoy meeting new people.", "I would like to travel more; however, I need to save money."], "paragraph", "Introduction, interests, personality, goal."),
    ],
  },

  // ============================================================ UNIT 3 · GRAMMAR
  {
    slug: "pre-int-grammar-past-simple-vs-continuous",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Past Simple and Past Continuous", topic: "Narrative tenses",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-grammar-have-have-got"],
    objective: "Tell a story using the Past Simple for main events and the Past Continuous for background and interrupted actions.",
    tags: ["grammar", "past-simple", "past-continuous", "narrative", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Past Simple vs Past Continuous (Unit 3)" },
    sections: [
      text("In a story we use **two past tenses**. The **Past Simple** tells the **main events**, one after another. The **Past Continuous** describes the **background** (what was happening) and actions that were **interrupted**.", "Explanation"),
      table("Past Simple and Past Continuous", ["Feature", "Past Simple", "Past Continuous"], [
        ["Form", "verb-ed / irregular", "was / were + verb-ing"],
        ["Use", "finished, single events", "action in progress at a past time; background"],
        ["Example", "The phone rang.", "I was cooking when the phone rang."],
      ]),
      list("when and while", ["**while** + Past Continuous: While I was cooking, the phone rang.", "**when** + Past Simple (the interruption): I was cooking when the phone rang.", "Two actions at the same time: While she was reading, he was watching TV."]),
      structure("Structure", "Past Continuous (background) + when + Past Simple (event)\nWhile + Past Continuous, Past Simple", "Long action = Past Continuous. Short action that interrupts = Past Simple."),
      examples("Examples", { Background: ["It was raining and people were hurrying home."], Interrupted: ["I was walking to work when I saw an accident."], "Main events": ["She opened the door, looked inside and screamed."] }),
    ],
    exercises: [
      mc("I ___ TV when the lights went out.", ["watched", "was watching", "watch"], 1, "Action in progress that was interrupted: Past Continuous."),
      fill("While we ___ (walk) home, it started to rain.", ["were walking"], "While + Past Continuous."),
      mist("Find the mistake.", ["I", "was breaking", "my phone while I was running."], 1, "broke", "A short single action: Past Simple broke."),
      match("Which tense?", [["She was reading a book.", "Past Continuous (background)"], ["The phone rang.", "Past Simple (event)"], ["He opened the door and walked in.", "Past Simple (events)"]], "Background = continuous; events = simple."),
      order("Put the words in the correct order.", ["I", "was", "sleeping", "when", "the", "phone", "rang."], "word", "Continuous + when + simple."),
      sa("Complete: While I was cooking, my sister ___ (arrive).", ["arrived"], "The interruption is a single event: arrived.", { hint: "Past Simple" }),
    ],
  },
  {
    slug: "pre-int-grammar-past-forms-ed-irregular",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Regular Past Endings and Irregular Verbs", topic: "Past forms",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-past-simple-vs-continuous"],
    objective: "Pronounce and spell regular -ed endings and remember common irregular verbs.",
    tags: ["grammar", "past-simple", "pronunciation", "irregular-verbs", "spelling", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "-ed endings; irregular verbs (Unit 3)" },
    sections: [
      text("Regular verbs end in **-ed**, but the ending has **three different sounds**: /t/, /d/ and /ɪd/. Many common verbs are **irregular**, and you must learn their forms.", "Explanation"),
      table("The three sounds of -ed", ["Sound", "After…", "Examples"], [
        ["/t/", "voiceless sounds (p, k, f, s, sh, ch)", "worked, stopped, watched, washed"],
        ["/d/", "voiced sounds and vowels", "played, lived, opened, cleaned"],
        ["/ɪd/", "t or d", "wanted, needed, started, decided"],
      ]),
      table("Spelling", ["Rule", "Example"], [
        ["+ -ed", "work → worked"], ["ends in -e: + -d", "live → lived"], ["consonant + y: y → -ied", "study → studied"], ["one vowel + one consonant: double", "stop → stopped"],
      ]),
      table("Irregular groups", ["Pattern", "Verbs"], [
        ["same form", "put → put · cut → cut · hit → hit"],
        ["-ought / -aught", "buy → bought · think → thought · catch → caught · teach → taught"],
        ["vowel change", "sit → sat · drink → drank · begin → began · swim → swam"],
        ["other", "go → went · see → saw · have → had · take → took"],
      ]),
    ],
    exercises: [
      match("Which sound is the -ed ending?", [["worked", "/t/"], ["played", "/d/"], ["wanted", "/ɪd/"], ["watched", "/t/"], ["opened", "/d/"]], "/ɪd/ after t or d; /t/ after voiceless sounds; /d/ after voiced sounds."),
      fill("Yesterday I ___ (buy) a new phone and ___ (put) it in my bag.", ["bought", "put"], "Buy → bought; put → put."),
      mc("Which is the past of “study”?", ["studyed", "studied", "studdied"], 1, "Consonant + y: y → -ied."),
      mist("Find the mistake.", ["We", "stoped", "at a café."], 1, "stopped", "Double the p: stopped."),
      mc("Which verb has the same form in the past?", ["cut", "swim", "go"], 0, "cut → cut."),
      sa("Past simple of “teach”: ___", ["taught"], "teach → taught.", { hint: "t _ _ _ _ t" }),
    ],
  },

  // ============================================================ UNIT 3 · VOCABULARY
  {
    slug: "pre-int-vocab-manner-adverbs",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Adverbs of Manner: Form and Position", topic: "Adverbs",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-vocab-free-time-lifestyle"],
    objective: "Form adverbs of manner and put them in the right position in a sentence.",
    tags: ["vocabulary", "adverbs", "manner", "word-order", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Adverbs of manner (Unit 3)" },
    sections: [
      text("**Adverbs of manner** say **how** something is done. They make descriptions and stories more **precise**: she spoke **quietly**, he drove **carefully**."),
      table("Forming adverbs", ["Rule", "Examples"], [
        ["+ -ly", "slow → slowly · quiet → quietly · careful → carefully · fluent → fluently"],
        ["-y → -ily", "happy → happily · easy → easily · noisy → noisily"],
        ["-le → -ly", "terrible → terribly · gentle → gently"],
        ["irregular", "good → well · fast → fast · hard → hard · late → late"],
      ]),
      structure("Position", "verb + object + adverb: She closed the door quietly.\nadverb + verb (for emphasis or in stories): She carefully opened the box.", "Never put the adverb between the verb and its object: not She closed quietly the door."),
      compare("Common mistakes", [["She speaks English good.", "She speaks English well.", "The adverb of good is well."], ["He works hardly.", "He works hard.", "Hardly = almost not."], ["I opened slowly the door.", "I opened the door slowly.", "Keep verb + object together."]]),
    ],
    exercises: [
      fill("Please speak more ___. (slow)", ["slowly"], "slow + ly."),
      fill("She sang ___ at the concert. (beautiful)", ["beautifully"], "beautiful → beautifully."),
      mc("He speaks English ___.", ["good", "well", "goodly"], 1, "The adverb of good is well."),
      mist("Find the mistake.", ["She opened", "quietly", "the door."], 1, "(move it after the door)", "Verb + object + adverb: She opened the door quietly."),
      order("Put the words in the correct order.", ["He", "closed", "the", "door", "very", "quietly."], "word", "Verb + object + adverb."),
      match("Adjective → adverb.", [["quiet", "quietly"], ["happy", "happily"], ["fluent", "fluently"], ["good", "well"], ["hard", "hard"]], "Most add -ly; y → -ily; good → well; hard stays the same."),
    ],
  },
  {
    slug: "pre-int-vocab-time-expressions",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Time Prepositions and Time Expressions", topic: "Time",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-vocab-manner-adverbs"],
    objective: "Use in, on, at correctly and common time expressions such as in time / on time and at the end / in the end.",
    tags: ["vocabulary", "time", "prepositions", "expressions", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Time prepositions (Unit 3)" },
    sections: [
      text("You already know **in, on and at** with time. At this level you also need **fixed time expressions**, especially pairs that look alike but have **different meanings**."),
      table("in, on, at", ["Preposition", "Use with", "Examples"], [
        ["in", "years, months, seasons, parts of the day", "in 1998, in July, in winter, in the evening"],
        ["on", "days and dates", "on Thursday, on 5th May, on my birthday"],
        ["at", "clock times, night, the weekend, holidays", "at 6 o'clock, at night, at the weekend, at Eid"],
      ]),
      table("Look-alike expressions", ["Expression", "Meaning", "Example"], [
        ["on time", "at the planned time (punctual)", "The train arrived on time."],
        ["in time", "early enough (before it is too late)", "We got to the station in time to catch the train."],
        ["at the end (of)", "at the last part of something", "At the end of the film, everyone clapped."],
        ["in the end", "finally, after a long time or difficulty", "In the end, we found the hotel."],
        ["at the moment", "now", "I'm busy at the moment."],
      ]),
    ],
    exercises: [
      fill("The film starts ___ 8 o'clock ___ Friday.", ["at", "on"], "at + clock time; on + day."),
      mc("The bus was late, but we arrived ___ for the lesson.", ["on time", "in time", "at time"], 1, "In time = early enough (we were not too late)."),
      mc("We looked everywhere, and ___ we found the keys.", ["at the end", "in the end", "on the end"], 1, "In the end = finally."),
      mist("Find the mistake.", ["I was born", "at", "1998."], 1, "in", "Years take in."),
      match("Match the expression with its meaning.", [["on time", "punctual"], ["in time", "early enough"], ["in the end", "finally"], ["at the end of", "the last part of"]], "Look-alike expressions have different meanings."),
      fill("I'm busy ___ the moment. Can I call you back?", ["at"], "at the moment."),
    ],
  },

  // ============================================================ UNIT 3 · READING
  {
    slug: "pre-int-reading-missing-painting",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: The Missing Painting (a mystery story)", topic: "Narrative reading",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-reading-lifestyle-quiz"],
    objective: "Follow the plot of a short story, identify the climax and use clues to predict the ending.",
    tags: ["reading", "reading-inference", "narrative", "reading-comprehension", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "A mystery story (Unit 3)" },
    sections: [
      text("A story usually has **a beginning** (who, where, when), **a problem**, **a climax** (the most exciting moment) and **an ending**. To **predict** the ending, notice **clues**: strange details that the writer wants you to see.", "Reading strategy"),
      passage("Example", "Nora put her bag on the seat and went to buy a ticket. When she came back, the bag was gone. A boy near the door was holding a red bag. It wasn't hers.", "Beginning of a story"),
      list("Guided practice", ["Who / where / when? → Nora, a station.", "The problem? → her bag is missing.", "Clue? → the boy holds a red bag that is not hers (he is probably not the thief).", "Prediction? → the real thief is somebody else."]),
    ],
    exercises: [
      order("Put the events in the correct order.", ["The inspector arrived at the museum.", "The guard said he went outside.", "The inspector noticed the guard's dry shoes.", "The painting was found in the guard's car."], "paragraph", "Follow the story from the arrival to the ending.", ),
      mc("What was the guard doing when he heard a noise?", ["watching TV", "making tea", "sleeping"], 1, "“I was making tea when I heard a noise.”", PAINTING),
      mc("What is the most important clue?", ["a glass of water on the desk", "the guard's dry shoes", "the rain"], 1, "He said he went outside in the rain, but his shoes were dry.", PAINTING),
      mc("Which is the climax of the story?", ["The inspector arrived.", "The inspector told the guard that his story did not agree with the clue.", "The painting was hung again."], 1, "It is the most exciting moment: “you told me you went outside”.", PAINTING),
      tf("There was a wet footprint near the window.", true, "“a wet footprint near the window”.", PAINTING),
      mc("Who probably stole the painting?", ["the inspector", "the guard, Mr Nasser", "a visitor"], 1, "The clue and the ending show it was the guard.", PAINTING),
    ],
  },

  // ============================================================ UNIT 3 · WRITING
  {
    slug: "pre-int-writing-narrative-paragraph",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Writing a Narrative Paragraph", topic: "Narrative writing",
    difficulty: "CORE", minutes: 18, prereq: ["pre-int-writing-cohesion-100-words", "pre-int-grammar-past-simple-vs-continuous"],
    objective: "Write a narrative paragraph about a past experience using narrative tenses, adverbs and adjectives.",
    tags: ["writing", "writing-paragraph", "narrative", "adverbs", "past-tenses", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Narrative paragraph (Unit 3)" },
    sections: [
      text("A **narrative paragraph** tells a story from your own experience. It has a **beginning** (when and where), a **middle** (what happened) and an **ending** (how it finished). **Adverbs** and **adjectives** make the story more vivid.", "Explanation"),
      table("Structure of a narrative paragraph", ["Part", "Tense", "Example"], [
        ["Beginning", "Past Continuous + Past Simple", "It was a sunny morning and I was walking on the beach."],
        ["Middle", "Past Simple", "Suddenly I saw a small, injured bird. I carefully picked it up."],
        ["Ending", "Past Simple", "In the end, the bird flew away happily."],
      ]),
      list("Improve your story", ["Add adjectives before nouns: a small, injured bird.", "Add adverbs after the verb and object: picked it up carefully.", "Use sequencing words: first, then, suddenly, in the end."]),
      annotated("Model paragraph", [
        ["Beginning", "It was a beautiful sunny morning and I was walking along the beach with my brother."],
        ["Middle", "Suddenly, we saw a small, injured bird on the sand. My brother carefully picked it up and we took it to the vet."],
        ["Ending", "In the end, the bird recovered, and we watched it fly happily into the blue sky."],
      ]),
    ],
    exercises: [
      order("Put the sentences in the correct order to make a story.", ["It was a sunny morning and I was walking on the beach.", "Suddenly, I saw a small bird on the sand.", "I carefully picked it up and took it to the vet.", "In the end, the bird flew away happily."], "paragraph", "Beginning, middle, ending."),
      mc("Which is the best opening sentence for a narrative paragraph?", ["It was a cold evening and I was waiting at the bus stop.", "Buses are useful.", "I like evenings."], 0, "It sets the time, place and the background action."),
      mist("Find the mistake.", ["I", "picked quietly", "up the bird."], 1, "picked up the bird quietly", "Keep verb + object together; put the adverb at the end."),
      order("Put the words in the correct order.", ["Suddenly", "I", "heard", "a", "loud", "noise."], "word", "Sequencing word + subject + verb + object."),
      fill("In the ___, we found the missing keys. (finally)", ["end"], "In the end = finally."),
      mc("Which words make the story more vivid?", ["adjectives and adverbs", "only nouns", "only verbs"], 0, "Adjectives and adverbs add detail."),
    ],
  },
];

void [compare, examples, flow, ms, tf, tip];
