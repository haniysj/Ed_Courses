import { UPPER_U1_U3 } from "./upper-u1-u3";
import { UPPER_U4_U6 } from "./upper-u4-u6";
import { UPPER_U7_U9 } from "./upper-u7-u9";
import { UPPER_U10_U12 } from "./upper-u10-u12";
import { HW, CE, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const NADIA = "Nadia looked at the clock for the third time in ten minutes. Her fingers tapped the table, and she read the same line of her book again without understanding it. When the phone finally rang, she grabbed it before the first ring had ended.";
const CAFE = "The café, once packed at lunchtime, now has only three customers. The owner has started closing early, and a handwritten sign on the door says “Under new management — coming soon”.";
const TEXT_LIBRARY = "The city library has extended its opening hours. From March, it will open at 8 am and close at 10 pm on weekdays, and members can borrow up to ten books at a time.";
const TEXT_MEETING = "Nobody should have to sit through another pointless meeting. Send the summary by email instead: you'll save time, money and everyone's patience.";
const TEXT_CAT = "My grandmother's cat has never understood that the sofa is not a bed. Yesterday it slept on my exam notes, and this morning it sneezed on my toast, which I have to admit was its most helpful review so far.";

export const UPPER_INTERMEDIATE_CORE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "upper-grammar-reported-speech",
    level: "UPPER_INTERMEDIATE", category: "GRAMMAR", title: "Reported Speech", topic: "Reported speech",
    difficulty: "CORE", minutes: 16, prereq: ["upper-grammar-articles-determiners"],
    objective: "Report statements and questions accurately, changing tenses, pronouns and time words.",
    tags: ["grammar", "reported-speech", "tenses", "communication", "B2"],
    ref: { book: HW, level: "Upper-Intermediate", area: "Grammar", topic: "Reported speech" },
    sections: [
      text("We use **reported speech** to tell someone what another person said, without quoting the exact words. The reporting verb (said, told, asked) is usually in the past, so the tenses usually move **one step back** (“backshift”).", "Explanation"),
      list("When do we use it?", ["To tell a story about a conversation: She said that she was tired.", "In news, reports and emails: The manager told us that the meeting had been cancelled.", "To report questions: He asked me where I lived."]),
      structure("Structure", "Statements: said (that) + backshifted clause    told + person + (that) + clause\nQuestions: asked (+ person) + if / whether / wh-word + subject + verb (statement word order)", "present → past · will → would · past simple → past perfect · can → could. Pronouns and time words change too: today → that day · tomorrow → the next day · yesterday → the day before."),
      examples("Examples", {
        Statements: ["“I am tired.” → She said that she was tired.", "“I will call you tomorrow.” → He said he would call me the next day."],
        Questions: ["“Do you like coffee?” → She asked me if I liked coffee.", "“Where do you live?” → He asked me where I lived."],
      }),
      compare("Watch out", [["She told that she was busy.", "She said that she was busy.", "Tell needs a person: She told me that…"], ["He asked me where did I live.", "He asked me where I lived.", "Reported questions use statement word order."]]),
    ],
    exercises: [
      mc("“I am tired,” she said. → She said that she ___ tired.", ["is", "was", "had been"], 1, "Present simple backshifts to past simple: am → was."),
      fill("“I finished the report yesterday.” → He told me that he ___ the report the day before.", ["had finished"], "Past simple backshifts to past perfect: had finished."),
      sa("Report the question: “Where do you live?” he asked me. → He asked me ...", ["where I lived", "He asked me where I lived", "He asked me where I lived."], "Use statement word order and backshift: where I lived.", { hint: "no do / does" }),
      mist("Find the mistake.", ["She told", "that", "she was busy."], 0, "said", "Tell needs a person (told me). Without an object we use said."),
      mc("“I will call you tomorrow.” → He said he would call me ___.", ["tomorrow", "the next day", "yesterday"], 1, "Reported time words move back: tomorrow → the next day."),
      mc("“Do you like coffee?” → She asked me ___ I liked coffee.", ["that", "if", "what"], 1, "Yes/no questions are reported with if or whether."),
    ],
  },
  {
    slug: "upper-grammar-relative-clauses",
    level: "UPPER_INTERMEDIATE", category: "GRAMMAR", title: "Relative Clauses: Defining and Non-Defining", topic: "Relative clauses",
    difficulty: "CORE", minutes: 16, prereq: ["upper-grammar-modals-obligation-probability"],
    objective: "Add information to nouns with who, which, that, whose and where, and punctuate clauses correctly.",
    tags: ["grammar", "relative-clauses", "complex-sentences", "B2"],
    ref: { book: CE, level: "Upper-Intermediate", area: "Grammar", topic: "Relative clauses" },
    sections: [
      text("A **relative clause** gives more information about a noun. **Defining** clauses tell us which person or thing we mean, so they are essential. **Non-defining** clauses add extra information and are separated by **commas**.", "Explanation"),
      list("Pronouns", ["**who / that** — people: The woman who lives next door is a doctor.", "**which / that** — things: The book that I read was excellent.", "**whose** — possession: That is the man whose car was stolen.", "**where** — places: This is the town where I grew up."]),
      structure("Rules", "Defining: noun + who / which / that + clause   (no commas)\nNon-defining: noun, who / which + clause, (commas; NO “that”)", "You can leave out who / which / that when it is the OBJECT of the clause: The book (that) I read… but not when it is the subject: The woman who lives…"),
      examples("Examples", { Defining: ["The students who study regularly usually pass.", "The film (that) we watched was long."], "Non-defining": ["My sister, who lives in Cairo, is a nurse.", "The Nile, which flows north, is the longest river in Africa."] }),
    ],
    exercises: [
      mc("The woman ___ lives next door is a doctor.", ["who", "whose", "which"], 0, "Who refers to a person and is the subject of the clause."),
      fill("That is the man ___ car was stolen.", ["whose"], "Whose shows possession: the man's car."),
      mist("Find the mistake.", ["My brother,", "that", "lives in Dubai,", "is an engineer."], 1, "who", "Non-defining clauses cannot use that. Use who."),
      mc("Which sentence is punctuated correctly?", ["My sister, who lives in Cairo, is a nurse.", "My sister who lives in Cairo, is a nurse.", "My sister, who lives in Cairo is a nurse."], 0, "Non-defining clauses need a comma before and after."),
      ms("Select the TWO sentences where the relative pronoun can be omitted.", ["The film that I watched was long.", "The man who called you is here.", "The book which she wrote is famous.", "The girl who lives next door is kind."], [0, 2], "You can omit the pronoun only when it is the object of the clause (I watched THE FILM; she wrote THE BOOK)."),
      sa("Join the sentences with a relative clause: I met a woman. She speaks five languages.", ["I met a woman who speaks five languages.", "I met a woman that speaks five languages.", "I met a woman who speaks five languages", "I met a woman that speaks five languages"], "Who replaces she and joins the clause to “a woman”.", { hint: "I met a woman who…" }),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "upper-vocab-environment-society",
    level: "UPPER_INTERMEDIATE", category: "VOCABULARY", title: "Environment, Society and Word Families", topic: "Society",
    difficulty: "CORE", minutes: 15,
    objective: "Recognise and use different forms of a word (noun, verb, adjective) in discussions about society and the environment.",
    tags: ["vocabulary", "society", "environment", "word-families", "listening-support", "B2"],
    ref: { book: HW, level: "Upper-Intermediate", area: "Vocabulary", topic: "Word building" },
    sections: [
      text("At B2 you meet the same root in several forms. Knowing the **word family** lets you say the same idea flexibly, and choose the correct form for the sentence: noun, verb or adjective."),
      vocab([
        { word: "pollution", pos: "noun", meaning: "harmful substances in air, water or land", pron: "/pəˈluːʃn/", ex: "Air pollution is a serious problem in many cities.", col: ["air / water pollution", "reduce pollution"], right: "Pollution is increasing.", wrong: "The pollute is increasing.", note: "Family: pollute (v), polluted (adj), pollutant (n), pollution (n).", visual: "🏭" },
        { word: "sustainable", pos: "adjective", meaning: "able to continue without damaging the environment or using up resources", pron: "/səˈsteɪnəbl/", ex: "Solar power is a sustainable source of energy.", col: ["sustainable development", "a sustainable future"], right: "We need sustainable energy.", wrong: "We need sustain energy.", note: "Family: sustain (v), sustainable (adj), sustainability (n).", visual: "🌍" },
        { word: "consumption", pos: "noun", meaning: "the amount of something that people use", pron: "/kənˈsʌmpʃn/", ex: "Energy consumption has risen by ten percent.", col: ["energy consumption", "reduce consumption"], right: "Water consumption is rising.", wrong: "Water consume is rising.", note: "Family: consume (v), consumer (n), consumption (n).", visual: "⚡" },
        { word: "community", pos: "noun", meaning: "a group of people who live in the same place or share interests", pron: "/kəˈmjuːnəti/", ex: "The local community organised a clean-up day.", col: ["local community", "community centre", "community service"], right: "The community helped.", wrong: "The communal helped.", note: "Family: community (n), communal (adj: shared).", visual: "🏘️" },
        { word: "inequality", pos: "noun", meaning: "an unfair difference in wealth, chances or treatment", pron: "/ˌɪnɪˈkwɒləti/", ex: "Income inequality is growing in many countries.", col: ["social inequality", "reduce inequality"], right: "We must reduce inequality.", wrong: "We must reduce unequal.", note: "Family: equal (adj), unequal (adj), equality (n), inequality (n).", visual: "⚖️" },
        { word: "regulation", pos: "noun", meaning: "an official rule that controls how something is done", pron: "/ˌreɡjuˈleɪʃn/", ex: "New regulations protect the rivers from waste.", col: ["strict regulations", "introduce regulations"], right: "The government introduced new regulations.", wrong: "The government introduced new regulates.", note: "Family: regulate (v), regulation (n), regulatory (adj).", visual: "📜" },
      ], "Society and environment words"),
    ],
    exercises: [
      fill("The government introduced new ___ (regulate) to protect rivers.", ["regulations"], "Here we need a plural noun: regulations."),
      mc("Air ___ is a serious problem in big cities.", ["pollute", "pollution", "polluted"], 1, "We need a noun after “air”: pollution."),
      mist("Find the mistake.", ["We need", "sustain", "energy sources."], 1, "sustainable", "The adjective form is sustainable."),
      match("Match each verb or adjective with a related noun.", [["consume", "consumption"], ["pollute", "pollution"], ["equal", "equality"], ["regulate", "regulation"]], "Word families share a root. Note the noun endings -tion and -ity."),
      mc("Which word is an adjective?", ["sustainability", "sustainable", "sustain"], 1, "The ending -able usually forms an adjective."),
      mc("Choose the correct form: A new law will ___ the use of plastic bags. (regulate)", ["regulate", "regulation", "regulatory"], 0, "After will we need the base verb: regulate."),
    ],
  },
  {
    slug: "upper-vocab-phrasal-verbs",
    level: "UPPER_INTERMEDIATE", category: "VOCABULARY", title: "Phrasal Verbs for Work and Study", topic: "Phrasal verbs",
    difficulty: "CORE", minutes: 15, prereq: ["upper-vocab-environment-society"],
    objective: "Use common phrasal verbs correctly, including where the object goes.",
    tags: ["vocabulary", "phrasal-verbs", "work", "education", "listening-support", "B2"],
    ref: { book: CE, level: "Upper-Intermediate", area: "Vocabulary", topic: "Phrasal verbs" },
    sections: [
      text("A **phrasal verb** is a verb + a small word (a particle) with a special meaning. Many are **separable**: the object can go between the verb and the particle, and with a pronoun it MUST go in the middle."),
      structure("Word order", "put off the meeting  =  put the meeting off  =  put it off\nNOT: put off it", "Some phrasal verbs are inseparable: look into the problem, come up with an idea."),
      vocab([
        { word: "carry out", pos: "phrasal verb", meaning: "to do and complete a task, plan or piece of research", pron: "/ˈkæri aʊt/", ex: "Scientists carried out a survey.", col: ["carry out research", "carry out an experiment"], right: "They carried out the experiment.", wrong: "They carried the experiment.", note: "Without out it means something different (physically carried).", visual: "🔬" },
        { word: "look into", pos: "phrasal verb", meaning: "to investigate", pron: "/ˈlʊk ˈɪntuː/", ex: "The manager will look into the complaint.", col: ["look into a problem", "look into a complaint"], right: "We will look into the problem.", wrong: "We will look the problem into.", note: "Inseparable: keep look into together.", visual: "🔍" },
        { word: "put off", pos: "phrasal verb (separable)", meaning: "to move to a later time", pron: "/pʊt ɒf/", ex: "We put off the meeting until Monday.", col: ["put off a meeting", "put off a decision"], right: "We put it off.", wrong: "We put off it.", note: "With a pronoun, it goes in the middle.", visual: "📆" },
        { word: "come up with", pos: "phrasal verb", meaning: "to think of an idea or a plan", pron: "/kʌm ʌp wɪð/", ex: "She came up with a brilliant solution.", col: ["come up with an idea", "come up with a plan"], right: "He came up with an idea.", wrong: "He came up an idea.", note: "The full phrase has three words: come up with.", visual: "💡" },
        { word: "hand in", pos: "phrasal verb (separable)", meaning: "to give work to a teacher or manager", pron: "/hænd ɪn/", ex: "Please hand in your essays by Friday.", col: ["hand in homework", "hand in a report"], right: "Please hand it in on Friday.", wrong: "Please hand in it on Friday.", note: "Pronoun goes in the middle: hand it in.", visual: "📥" },
        { word: "turn down", pos: "phrasal verb (separable)", meaning: "to refuse an offer or invitation", pron: "/tɜːn daʊn/", ex: "She turned down the job offer.", col: ["turn down an offer", "turn down an invitation"], right: "She turned it down.", wrong: "She turned down it.", note: "With a pronoun: turn it down.", visual: "🚫" },
      ], "Phrasal verbs"),
    ],
    exercises: [
      match("Match each phrasal verb with its meaning.", [["carry out", "do and complete a task"], ["look into", "investigate"], ["put off", "move to a later time"], ["come up with", "think of an idea"], ["turn down", "refuse"]], "Phrasal verbs often mean something different from the verb alone."),
      fill("We had to ___ the meeting because the manager was ill. (postpone: two words)", ["put off"], "Put off means to postpone."),
      mist("Find the mistake.", ["Please", "hand in it", "before Friday."], 1, "hand it in", "With a pronoun, a separable phrasal verb splits: hand it in."),
      mc("She ___ a brilliant idea for the project.", ["came up with", "came up to", "came on"], 0, "Come up with means to think of."),
      mc("The company ___ her offer, so she is still looking for a job.", ["turned down", "looked into", "carried out"], 0, "Turned down = refused."),
      sa("Rewrite with a pronoun: We put off the trip.", ["We put it off.", "We put it off"], "With a pronoun, put goes before it and off after: put it off.", { hint: "We put … off." }),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "upper-writing-contrast-result",
    level: "UPPER_INTERMEDIATE", category: "WRITING", title: "Linking Ideas: Contrast and Result", topic: "Linking devices",
    difficulty: "CORE", minutes: 15, prereq: ["pre-int-writing-connectors"],
    objective: "Use although, despite, however, nevertheless and consequently accurately and with correct punctuation.",
    tags: ["writing", "writing-connectors", "connectors", "punctuation", "complex-sentences", "B2"],
    ref: { book: HW, level: "Upper-Intermediate", area: "Writing", topic: "Linking devices" },
    sections: [
      text("At B2 you need connectors that show **contrast** and **result** and that fit the grammar of the sentence. Some are followed by a **clause** (subject + verb), some by a **noun or -ing form**, and some join separate sentences.", "Explanation"),
      structure("Patterns", "Although / even though + clause, clause   → Although it was cold, we swam.\nDespite / in spite of + noun / -ing, clause → Despite the cold, we swam.\nSentence. However / Nevertheless, sentence. → It was cold. Nevertheless, we swam.\nSentence. Consequently / As a result, sentence. → Prices rose. Consequently, sales fell.", "Do not use “but” together with “although”, or a clause after “despite”."),
      compare("Common mistakes", [["Although it was cold, but we swam.", "Although it was cold, we swam.", "One connector is enough."], ["Despite it was raining, we went out.", "Despite the rain, we went out. (or Although it was raining, …)", "Despite needs a noun or -ing."]]),
    ],
    exercises: [
      mc("___ the heavy traffic, we arrived on time.", ["Although", "Despite", "However"], 1, "“The heavy traffic” is a noun phrase, so we need despite."),
      fill("It was raining; ___, we went for a walk.", [["however", "nevertheless"]], "A contrast between sentences: however / nevertheless (followed by a comma)."),
      mist("Find the mistake.", ["Although it was cold,", "but", "we swam."], 1, "(remove “but”)", "Use one connector only: Although it was cold, we swam."),
      mc("Prices rose sharply. ___, fewer people bought the product.", ["Consequently", "Nevertheless", "Although"], 0, "Fewer buyers is the result of higher prices: consequently."),
      sa("Combine using “despite”: He was tired. He finished the project.", ["Despite being tired, he finished the project.", "Despite his tiredness, he finished the project.", "Despite feeling tired, he finished the project."], "Despite + -ing or noun, then the main clause.", { hint: "Despite …" }),
      order("Put the words in order.", ["Although", "he", "was", "ill,", "he", "went", "to", "work."], "word", "Although + clause, main clause."),
    ],
  },
  {
    slug: "upper-writing-argument-counter",
    level: "UPPER_INTERMEDIATE", category: "WRITING", title: "The Argumentative Paragraph with a Counter-Argument", topic: "Argumentative writing",
    difficulty: "CHALLENGING", minutes: 18, prereq: ["int-writing-opinion-paragraph", "upper-writing-contrast-result"],
    objective: "Build a persuasive paragraph that acknowledges and answers an opposing view.",
    tags: ["writing", "writing-paragraph", "writing-organisation", "argument", "B2"],
    ref: { book: CE, level: "Upper-Intermediate", area: "Writing", topic: "Argument and counter-argument" },
    sections: [
      text("A convincing argument does not ignore the other side. It states the **claim**, gives **evidence**, mentions a **counter-argument** (what critics say), and then **refutes** it, showing why the claim is still stronger.", "Explanation"),
      annotated("Model", [
        ["Claim", "Cars should be banned from city centres."],
        ["Reason + evidence", "Firstly, they cause pollution that damages people's health, and studies show that air quality improves quickly when traffic is reduced."],
        ["Counter-argument", "Some people argue that shops will lose customers."],
        ["Refutation", "However, cities that have banned cars report that more people now visit the centre on foot."],
        ["Conclusion", "Therefore, banning cars is a sensible step towards healthier, busier city centres."],
      ]),
      list("Useful language", ["Counter-argument: Some people argue that… / Critics claim that… / It is often said that…", "Refutation: However, / Nevertheless, / This view ignores the fact that…", "Conclusion: Overall, / On balance, / For these reasons,"]),
    ],
    exercises: [
      order("Build the paragraph: put the sentences in the correct order.", ["Cars should be banned from city centres.", "Firstly, they cause pollution that damages people's health.", "Studies show that air quality improves quickly when traffic is reduced.", "Some people argue that shops will lose customers.", "However, cities that have banned cars, such as Oslo, report that more people now visit the centre on foot.", "Therefore, banning cars is a sensible step towards healthier, busier city centres."], "paragraph", "Claim → reason → evidence → counter-argument → refutation → conclusion."),
      order("Build the paragraph: put the sentences in the correct order.", ["Schools should teach financial skills.", "Firstly, many young adults leave education without knowing how to manage a budget.", "As a result, they often fall into debt in their first jobs.", "Critics claim that the curriculum is already too full.", "Nevertheless, one lesson a week would be enough to teach the basics, and the benefits would last a lifetime.", "For these reasons, financial education deserves a place in every school."], "paragraph", "Claim → reason → result → counter-argument → refutation → conclusion."),
      mc("Which sentence is the counter-argument?", ["Some people argue that shops will lose customers.", "Firstly, cars cause pollution.", "Therefore, banning cars is a sensible step."], 0, "It presents the opposing view: what critics say.", "Cars should be banned from city centres. Firstly, they cause pollution that damages people's health. Some people argue that shops will lose customers. However, cities that have banned cars report that more people now visit the centre on foot. Therefore, banning cars is a sensible step."),
      mc("Which sentence is the best refutation of “Some people argue that online lessons are less effective”?", ["However, studies show that students learn as much online as in class when lessons are well planned.", "Online lessons are held on computers.", "Some people like classrooms."], 0, "A refutation answers the counter-argument with evidence."),
      mc("Choose the best way to introduce a counter-argument.", ["Critics claim that…", "Firstly,", "In conclusion,"], 0, "“Critics claim that” introduces an opposing view."),
      tf("A good argumentative paragraph should ignore opposing views.", false, "It acknowledges them and then explains why the claim is still stronger."),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "upper-reading-inference",
    level: "UPPER_INTERMEDIATE", category: "READING", title: "Inference: Reading Between the Lines", topic: "Inference",
    difficulty: "CHALLENGING", minutes: 15, prereq: ["int-reading-multiple-choice"],
    objective: "Understand information that is suggested but not stated directly.",
    tags: ["reading", "reading-inference", "reading-comprehension", "B2"],
    ref: { book: HW, level: "Upper-Intermediate", area: "Reading", topic: "Inference" },
    sections: [
      text("Writers do not always state everything. An **inference** is a conclusion you reach from **evidence in the text** plus common sense. It is not a wild guess: you must be able to point to words in the text that support it.", "Reading strategy"),
      list("How to infer", ["1. Notice the facts and the details (actions, word choice, numbers).", "2. Ask: what do these details suggest?", "3. Choose the conclusion that the evidence supports best, and reject those it contradicts or does not support."]),
      passage("Guided example", "The teacher checked her watch again and sighed. Half the class was still missing, and the exam started in five minutes.", "Inference"),
      text("Evidence: checked her watch again, sighed, half the class missing, exam soon → the teacher is **worried or frustrated** (this is never stated directly)."),
      tip("If the text says something directly, it is a stated fact. If you must combine clues, it is an inference."),
    ],
    exercises: [
      mc("How does Nadia feel while she waits?", ["Anxious and impatient", "Calm and relaxed", "Bored with her book"], 0, "Evidence: she keeps checking the clock, taps her fingers, can't concentrate and grabs the phone quickly.", NADIA),
      mc("Which detail best supports your answer?", ["She grabbed the phone before the first ring had ended.", "She was reading a book.", "She sat at a table."], 0, "Answering so quickly shows how much she was waiting for the call.", NADIA),
      mc("What can we infer about the café?", ["It is losing business.", "It has won an award.", "It has just opened."], 0, "Evidence: once packed, now three customers; the owner closes early; new management is coming.", CAFE),
      tf("The text directly states that the café is failing.", false, "This is only suggested by details; nobody says “the café is failing”.", CAFE),
      mc("What does the sign “coming soon” most likely suggest?", ["The café may soon belong to someone else.", "The café is about to become more crowded.", "The café is moving to another country."], 0, "“Under new management” suggests a change of owner.", CAFE),
    ],
  },
  {
    slug: "upper-reading-writers-purpose",
    level: "UPPER_INTERMEDIATE", category: "READING", title: "The Writer's Purpose", topic: "Writer's purpose",
    difficulty: "CHALLENGING", minutes: 14, prereq: ["upper-reading-inference"],
    objective: "Decide why a writer wrote a text and identify the language that shows it.",
    tags: ["reading", "reading-writers-purpose", "reading-inference", "B2"],
    ref: { book: CE, level: "Upper-Intermediate", area: "Reading", topic: "Writer's purpose and attitude" },
    sections: [
      text("Every text has a **purpose**: to inform, to persuade, to entertain, to warn or to describe. Ask **Why did the writer write this?** Then look for clues in the language.", "Reading strategy"),
      list("Clues", ["**Inform**: facts, numbers, neutral language (from March, up to ten books).", "**Persuade**: opinions and commands (should, must, you'll save…), strong adjectives, direct address to “you”.", "**Entertain**: humour, exaggeration, a personal story.", "**Warn**: imperatives and consequences (Do not…, or you may…)."]),
      passage("Guided example", "Don't miss out! Join the club today and you'll make friends for life.", "Purpose: persuade — commands and promises"),
    ],
    exercises: [
      mc("What is the writer's main purpose?", ["To inform readers about new opening hours", "To persuade readers to change their behaviour", "To entertain readers with a story"], 0, "The text gives facts: times and numbers, in neutral language.", TEXT_LIBRARY),
      mc("What is the writer's main purpose?", ["To inform", "To persuade", "To warn"], 1, "“Nobody should…” and “you'll save time, money…” try to change the reader's behaviour.", TEXT_MEETING),
      mc("What is the writer's main purpose?", ["To warn", "To entertain", "To describe a place"], 1, "The humorous exaggeration about the cat is meant to amuse.", TEXT_CAT),
      ms("Select the TWO phrases that show the writer of the meeting text wants to persuade.", ["Nobody should have to sit through…", "Send the summary by email instead", "the meeting lasted an hour", "at 9 am"], [0, 1], "A strong opinion and a command are typical persuasive features.", TEXT_MEETING),
      mc("Which words in the cat text show a humorous tone?", ["“its most helpful review so far”", "“exam notes”", "“grandmother's cat”"], 0, "Calling the sneeze a “helpful review” is ironic humour.", TEXT_CAT),
    ],
  },
];


// Teaching order (syllabus Units 1-12); existing core lessons are slotted into the unit they best support.
const PLAN = [
  // grammar
  "upper-grammar-tense-system-review", "upper-grammar-present-perfect-simple-continuous", "upper-grammar-narrative-tenses", "upper-grammar-questions-negatives",
  "upper-grammar-future-forms-complete", "upper-grammar-quantifiers", "upper-grammar-modals-obligation-probability", "upper-grammar-midterm-review-units-1-7",
  "upper-grammar-relative-clauses", "upper-grammar-participle-clauses", "upper-grammar-habits-present-past", "upper-grammar-used-to-get-used-to",
  "upper-grammar-past-modals-deduction", "upper-grammar-should-have-needn-t-have", "upper-grammar-wish-if-only", "upper-grammar-conditionals-hypothesising",
  "upper-grammar-articles-determiners", "upper-grammar-final-review-units-1-12", "upper-grammar-reported-speech",
  // vocabulary
  "upper-vocab-compound-nouns-adjectives", "upper-vocab-make-do", "upper-vocab-environment-society", "upper-vocab-books-films", "upper-vocab-antonyms-prefixes",
  "upper-vocab-truth-deception", "upper-vocab-take-put", "upper-vocab-variable-stress", "upper-vocab-get", "upper-vocab-phrasal-verbs",
  "upper-vocab-extreme-adjectives", "upper-vocab-homonyms-homophones", "upper-vocab-body-idioms", "upper-vocab-word-pairs", "upper-vocab-life-time-expressions",
  // reading
  "upper-reading-road-back-harbour", "upper-reading-inference", "upper-reading-plastic-planet", "upper-reading-kindness-strangers", "upper-reading-suspense-story",
  "upper-reading-post-truth", "upper-reading-writers-purpose", "upper-reading-boomerang-generation", "upper-reading-two-success-stories", "upper-reading-relentless-engineer",
  "upper-reading-mountains-to-sea", "upper-reading-treetop-fairy-tale", "upper-reading-cold-runner", "upper-reading-living-in-the-past", "upper-reading-amazing-seafarers",
  "upper-reading-scholar-under-playground", "upper-reading-have-you-wondered", "upper-reading-someone-should-have-stopped", "upper-reading-body-clock",
  // writing
  "upper-writing-correction-codes", "upper-writing-contrast-result", "upper-writing-cause-effect-problem-solution", "upper-writing-adverbs-narrative",
  "upper-writing-in-class-1-preparation", "upper-writing-linking-conjunctions", "upper-writing-cv-cover-letter", "upper-writing-survey-report",
  "upper-writing-argument-counter", "upper-writing-for-against-essay", "upper-writing-describing-places", "upper-writing-early-memory",
  "upper-writing-in-class-2-preparation", "upper-writing-emphasis-cleft", "upper-writing-narrative-linkers", "upper-writing-improving-style-cohesion",
  "upper-writing-final-exam-essay",
];
const rank = (slug: string) => (PLAN.indexOf(slug) === -1 ? 999 : PLAN.indexOf(slug));
export const UPPER_INTERMEDIATE: SeedLesson[] = [...UPPER_U1_U3, ...UPPER_U4_U6, ...UPPER_U7_U9, ...UPPER_U10_U12, ...UPPER_INTERMEDIATE_CORE].sort(
  (a, b) => rank(a.slug) - rank(b.slug)
);

void HW; void CE; void compare; void examples; void passage; void sa; void tip;
