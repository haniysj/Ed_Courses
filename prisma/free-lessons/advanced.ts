import { ADV_U1_U3 } from "./adv-u1-u3";
import { ADV_U4_U6 } from "./adv-u4-u6";
import { ADV_U7_U9 } from "./adv-u7-u9";
import { ADV_U10_U12 } from "./adv-u10-u12";
import { HW, CE, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const REVIEW = "The company's much-publicised “revolutionary” app turned out to be a calendar with a new logo. Users were, understandably, underwhelmed.";
const FINDINGS = "The findings are, quite frankly, remarkable. For the first time, researchers have shown that a simple change in daily habits can add years of healthy life, and the implications for public health are hard to overstate.";
const COMMITTEE = "The committee met on Tuesday and approved the budget by eight votes to three. The chair said that a detailed report would be published in June.";
const FOUR_DAY = "Proposals for a four-day working week are often dismissed as idealistic. Yet trials in several countries suggest that employees can maintain, and sometimes even increase, their productivity when the working week is shortened. The claim that shorter hours must mean lower output deserves closer examination.\n\nSupporters point to a simple mechanism: rested workers make fewer errors and waste less time. In one trial, companies reported that absence through illness fell by nearly a third, while staff turnover decreased.\n\nCritics, admittedly, raise a legitimate concern: some sectors, such as healthcare, cannot simply close for an extra day. But this objection applies to particular services, not to the principle itself, and several hospitals have already introduced flexible rotas that spread the benefits.";

export const ADVANCED_CORE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "adv-grammar-inversion",
    level: "ADVANCED", category: "GRAMMAR", title: "Inversion for Emphasis", topic: "Inversion",
    difficulty: "CHALLENGING", minutes: 16, prereq: ["adv-grammar-avoiding-repetition"],
    objective: "Use negative and restrictive adverbials followed by inverted word order to add emphasis in formal English.",
    tags: ["grammar", "inversion", "emphasis", "formal-english", "C1"],
    ref: { book: HW, level: "Advanced", area: "Grammar", topic: "Inversion and emphasis" },
    sections: [
      text("When a sentence begins with a **negative or restrictive adverbial** (never, rarely, not only, hardly…), the subject and auxiliary verb change places, as in a question. This **inversion** adds emphasis and is typical of formal, written or rhetorical English.", "Explanation"),
      list("When do we use it?", ["To emphasise something surprising or extreme: Never have I seen such a mess.", "In formal writing, speeches and literary texts.", "NOT in ordinary informal conversation, where it can sound very stiff."]),
      structure("Structure", "Negative adverbial + auxiliary + subject + main verb", "If there is no auxiliary, we add do / does / did: Rarely does he complain. Not only did she win, but she also broke the record."),
      examples("Examples", {
        "Frequency and degree": ["Never have I seen such a beautiful view.", "Rarely does he complain about his work."],
        "Time sequence": ["Hardly had we arrived when it started to rain.", "No sooner had she left than the phone rang."],
        "Restriction": ["Not only did she win, but she also broke the record.", "Only after the meeting did I realise my mistake.", "Under no circumstances should you open this door."],
      }),
    ],
    exercises: [
      mc("Rarely ___ such a beautiful sunset.", ["I have seen", "have I seen", "I saw"], 1, "After a negative adverbial at the start of a sentence, we invert: have I seen."),
      fill("Hardly ___ we arrived when it started to rain.", ["had"], "Hardly + had + subject + past participle + when…"),
      mist("Find the mistake.", ["Not only", "she won", "the race, but she also broke the record."], 1, "did she win", "After Not only at the start we invert: Not only did she win…"),
      sa("Rewrite beginning with “Never”: I have never seen such a mess.", ["Never have I seen such a mess.", "Never have I seen such a mess"], "Never + auxiliary (have) + subject + past participle.", { hint: "Never have I …" }),
      order("Put the words in order.", ["Under", "no", "circumstances", "should", "you", "open", "this", "door."], "word", "Under no circumstances + auxiliary + subject + main verb."),
      mc("Which sentence is grammatically correct?", ["Only after the exam did she relax.", "Only after the exam she relaxed.", "Only after the exam she did relax."], 0, "Only after + phrase triggers inversion: did she relax."),
    ],
  },
  {
    slug: "adv-grammar-cleft-sentences",
    level: "ADVANCED", category: "GRAMMAR", title: "Cleft Sentences: It-clefts and What-clefts", topic: "Cleft sentences",
    difficulty: "CHALLENGING", minutes: 16, prereq: ["adv-grammar-inversion"],
    objective: "Focus attention on the most important information with cleft sentences.",
    tags: ["grammar", "cleft-sentences", "emphasis", "complex-sentences", "C1"],
    ref: { book: CE, level: "Advanced", area: "Grammar", topic: "Focus and emphasis" },
    sections: [
      text("A **cleft sentence** splits one idea into two clauses so that the most important information gets extra attention. It is a flexible way to stress a person, a time, a place or a reason, in both speaking and writing.", "Explanation"),
      list("Two main types", ["**It-cleft** — It + be + focus + that / who + rest: It was Sara who called.", "**What-cleft** — What + clause + be + focus: What I need is a long holiday.", "Other patterns: All I want is peace and quiet. The reason why I left is that the pay was low."]),
      structure("Structure", "It + was / is + [focus] + that / who + clause\nWhat + subject + verb + is / was + [focus]", "The verb after What-clauses agrees with the focus: What I want is a new phone. / What I want are more choices."),
      examples("Examples", { "Plain sentence": ["I need a holiday.", "We first met in Paris."], "Cleft version": ["What I need is a holiday.", "It was in Paris that we first met."] }),
    ],
    exercises: [
      mc("___ I need is a long holiday.", ["What", "That", "It"], 0, "A what-cleft: What + clause + is + focus."),
      mc("It was in Paris ___ they first met.", ["that", "what", "which"], 0, "The it-cleft uses that (or who for people) after the focus."),
      fill("___ was my sister who called.", ["It"], "It-cleft: It + was + focus + who / that."),
      sa("Rewrite as a what-cleft: I need a holiday.", ["What I need is a holiday.", "What I need is a holiday"], "What + subject + verb + is + focus.", { hint: "What I need …" }),
      mist("Find the mistake.", ["What I want", "are", "a new phone."], 1, "is", "The verb agrees with the singular focus (a new phone): What I want is a new phone."),
      mc("Which sentence puts most emphasis on WHEN it happened?", ["It was last year that they moved.", "They moved last year.", "What they did was move."], 0, "The it-cleft places “last year” in the focus position."),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "adv-vocab-academic-register",
    level: "ADVANCED", category: "VOCABULARY", title: "Academic Vocabulary: Register and Formality", topic: "Academic topics",
    difficulty: "CHALLENGING", minutes: 16,
    objective: "Choose vocabulary and collocations that suit formal academic and professional writing.",
    tags: ["vocabulary", "academic-topics", "register", "collocations", "C1"],
    ref: { book: HW, level: "Advanced", area: "Vocabulary", topic: "Formal vocabulary" },
    sections: [
      text("**Register** is how formal or informal your language sounds. In academic and professional writing, we prefer precise, formal words over everyday ones (obtain rather than get, sufficient rather than enough), and we choose natural **collocations**."),
      vocab([
        { word: "assess", pos: "verb", meaning: "to judge the quality, size or value of something carefully", pron: "/əˈses/", ex: "The report assesses the impact of the new policy.", col: ["assess the impact", "assess the risk", "carefully assess"], right: "assess the risks", wrong: "check the risks (informal)", note: "Formal equivalent of “check” or “work out”.", visual: "📊" },
        { word: "significant", pos: "adjective", meaning: "large or important enough to have an effect", pron: "/sɪɡˈnɪfɪkənt/", ex: "There was a significant increase in sales.", col: ["a significant increase", "a significant difference", "statistically significant"], right: "a significant increase", wrong: "a big increase (informal)", note: "Prefer significant to big or important in academic writing.", visual: "📈" },
        { word: "contend", pos: "verb", meaning: "to argue that something is true", pron: "/kənˈtend/", ex: "Some scholars contend that language shapes thought.", col: ["contend that", "contend with (deal with)"], right: "Critics contend that the policy is unfair.", note: "A stronger, more formal alternative to say or claim.", visual: "🗣️" },
        { word: "undermine", pos: "verb", meaning: "to make something weaker or less effective, often gradually", pron: "/ˌʌndəˈmaɪn/", ex: "Constant criticism can undermine a student's confidence.", col: ["undermine confidence", "undermine authority", "undermine efforts"], right: "It undermines trust.", note: "Often used with abstract nouns: trust, confidence, authority.", visual: "⬇️" },
        { word: "implement", pos: "verb", meaning: "to put a plan or decision into action", pron: "/ˈɪmplɪment/", ex: "The government will implement the new law next year.", col: ["implement a policy", "implement changes", "fully implement"], right: "implement a strategy", wrong: "make a strategy work (informal)", note: "Formal equivalent of “carry out” or “put into practice”.", visual: "⚙️" },
        { word: "sufficient", pos: "adjective", meaning: "as much as is needed", pron: "/səˈfɪʃnt/", ex: "There is not sufficient evidence to support the claim.", col: ["sufficient evidence", "sufficient funds", "more than sufficient"], right: "sufficient evidence", wrong: "enough evidence (fine in speech, informal in formal writing)", note: "In an academic essay, sufficient sounds more formal than enough.", visual: "✅" },
      ], "Formal, academic words"),
    ],
    exercises: [
      match("Match the informal expression with its formal equivalent.", [["check carefully", "assess"], ["put into action", "implement"], ["big", "significant"], ["enough", "sufficient"]], "Formal registers prefer precise Latinate words."),
      mc("Which sentence is most suitable for an academic essay?", ["The results were really big.", "The results were significant.", "The results were awesome."], 1, "Significant is precise and formal."),
      fill("The council plans to ___ the new recycling policy next year. (put into action)", ["implement"], "Implement is the formal verb for putting a plan into action."),
      mc("Constant criticism can ___ a student's confidence.", ["undermine", "implement", "assess"], 0, "Undermine means to weaken gradually."),
      mist("Find the mistake.", ["There is not", "enough evidence", "to support this claim (formal essay)."], 1, "sufficient evidence", "In formal writing, sufficient sounds more appropriate than enough."),
      tf("“Contend” is a more formal alternative to “say” when someone argues a point.", true, "Yes. Contend that = argue that."),
    ],
  },
  {
    slug: "adv-vocab-nuance-connotation",
    level: "ADVANCED", category: "VOCABULARY", title: "Nuance: Synonyms and Connotation", topic: "Nuance",
    difficulty: "CHALLENGING", minutes: 16, prereq: ["adv-vocab-academic-register"],
    objective: "Distinguish between near-synonyms that differ in positive or negative feeling (connotation).",
    tags: ["vocabulary", "nuance", "synonyms", "connotation", "C1"],
    ref: { book: CE, level: "Advanced", area: "Vocabulary", topic: "Synonyms and connotation" },
    sections: [
      text("Words with similar **denotation** (dictionary meaning) can have very different **connotation** (feeling). Choosing between them shows precision and control of attitude: is the writer praising, criticising or simply describing?"),
      vocab([
        { word: "slim", pos: "adjective", meaning: "thin in an attractive, healthy way", pron: "/slɪm/", ex: "She has a slim figure.", col: ["slim and fit"], right: "a slim athlete (positive)", wrong: "a skinny athlete (can sound negative)", note: "Slim / slender: positive. Skinny: often negative, too thin. Thin: neutral.", visual: "🧍" },
        { word: "determined", pos: "adjective", meaning: "having made a firm decision and refusing to give up", pron: "/dɪˈtɜːmɪnd/", ex: "He was determined to finish the marathon.", col: ["determined to succeed"], right: "a determined student (positive)", wrong: "a stubborn student (negative)", note: "Determined: positive. Stubborn / obstinate: negative, refusing to listen.", visual: "🎯" },
        { word: "thrifty", pos: "adjective", meaning: "careful about spending money", pron: "/ˈθrɪfti/", ex: "My grandmother was thrifty and saved every coin.", col: ["thrifty shopper"], right: "a thrifty family (positive)", wrong: "a stingy family (negative)", note: "Thrifty / economical: positive. Stingy / mean: negative.", visual: "🐷" },
        { word: "inquisitive", pos: "adjective", meaning: "interested in learning many things", pron: "/ɪnˈkwɪzətɪv/", ex: "An inquisitive child asks a lot of questions.", col: ["an inquisitive mind"], right: "an inquisitive mind (positive)", wrong: "a nosy neighbour (negative)", note: "Curious / inquisitive: positive. Nosy: interested in other people's private business.", visual: "🔎" },
      ], "Positive and negative connotation"),
    ],
    exercises: [
      match("Is the connotation positive or negative?", [["slender", "positive"], ["skinny", "negative"], ["determined", "positive"], ["stubborn", "negative"], ["stingy", "negative"], ["thrifty", "positive"]], "Words in the same meaning group can praise or criticise."),
      mc("She refused to listen to anyone's advice. Which word describes her most negatively?", ["determined", "stubborn", "confident"], 1, "Stubborn suggests refusing to listen, a negative quality."),
      mc("Choose the most positive word: “My grandmother was very ___ and saved for years to buy a house.”", ["thrifty", "stingy", "mean"], 0, "Thrifty praises careful saving."),
      mc("A writer wants to praise a child's interest in learning. Which word fits best?", ["nosy", "inquisitive", "curious about other people's business"], 1, "Inquisitive is positive; nosy is negative."),
      mist("Find the mistake (the writer wants to be complimentary).", ["She is", "a skinny", "and elegant woman."], 1, "slender", "Skinny sounds negative. Slender / slim is complimentary."),
      tf("Two words can have the same dictionary meaning but different connotations.", true, "Yes. Connotation is the emotion or attitude a word suggests."),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "adv-writing-cohesion",
    level: "ADVANCED", category: "WRITING", title: "Cohesion and Discourse Markers", topic: "Cohesion",
    difficulty: "CHALLENGING", minutes: 16, prereq: ["upper-writing-argument-counter"],
    objective: "Make paragraphs flow with reference, substitution and precise discourse markers.",
    tags: ["writing", "writing-connectors", "cohesion", "discourse-markers", "C1"],
    ref: { book: HW, level: "Advanced", area: "Writing", topic: "Cohesion and coherence" },
    sections: [
      text("**Cohesion** is how ideas are linked at sentence level: reference words (this, these, such), substitution (one, do so), repeated key words and **discourse markers** that guide the reader. **Coherence** is when the whole text makes sense. Good writers use several cohesive devices, not only *and* and *but*.", "Explanation"),
      list("Discourse markers and their jobs", ["**Admittedly**, **That said** — concede a point before contrasting.", "**Moreover**, **What is more** — add a stronger point.", "**By contrast**, **Whereas** — compare two things.", "**In particular**, **Notably** — highlight a detail.", "**Ultimately**, **On balance** — conclude."]),
      compare("Improve the cohesion", [["Many students work part-time. Working part-time is stressful. Working part-time reduces study time.", "Many students work part-time. This can be stressful and reduces study time.", "Use “this” to refer back instead of repeating."], ["Prices rose. And fewer people bought the product. And the company lost money.", "Prices rose; consequently, fewer people bought the product, and the company lost money.", "Vary the linking words and show the logic."]]),
    ],
    exercises: [
      mc("Which marker introduces a concession? “___, the policy is expensive. That said, it has clear benefits.”", ["Admittedly", "Moreover", "Ultimately"], 0, "Admittedly concedes a point before the contrast."),
      mc("Choose the best discourse marker: “Coffee is popular in cities. ___, tea remains the national drink in rural areas.”", ["By contrast", "For example", "Consequently"], 0, "The two situations are being compared: by contrast."),
      order("Put the sentences in a cohesive order.", ["Online shopping has changed how we buy things.", "It is convenient, and delivery is often very fast.", "Admittedly, it can damage local shops.", "That said, many small businesses now sell online themselves.", "Ultimately, technology has widened the choices available to customers."], "paragraph", "Claim → benefit → concession → contrast → conclusion."),
      mc("Which version has the best cohesion?", ["Students use phones. Phones distract students. Students lose focus.", "Students use phones, and this can distract them and make them lose focus.", "Students use phones. Also phones. Also distraction."], 1, "“This” refers back to the whole idea and avoids repetition."),
      mist("Find the mistake.", ["The results were disappointing.", "Moreover,", "the team remained positive."], 1, "However / Nevertheless", "Moreover adds a similar point; here the second idea contrasts with the first."),
      tf("Cohesion means only using linking words such as and and but.", false, "Cohesion also uses reference, substitution, repetition and varied discourse markers."),
    ],
  },
  {
    slug: "adv-writing-balanced-paragraph",
    level: "ADVANCED", category: "WRITING", title: "Writing a Balanced Academic Paragraph", topic: "Academic paragraph",
    difficulty: "CHALLENGING", minutes: 18, prereq: ["adv-writing-cohesion"],
    objective: "Write a Point–Evidence–Explanation–Link paragraph in a cautious, academic style.",
    tags: ["writing", "writing-paragraph", "writing-organisation", "academic-topics", "hedging", "C1"],
    ref: { book: CE, level: "Advanced", area: "Writing", topic: "Academic writing" },
    sections: [
      text("An academic paragraph is built around one **point**, backed by **evidence**, with an **explanation** of why that evidence matters and a **link** to the argument. The tone is **cautious**: we avoid absolute claims and use **hedging** (may, tends to, suggests) when the evidence is not conclusive.", "Explanation"),
      annotated("PEEL model", [
        ["Point", "Remote working may improve productivity in some sectors."],
        ["Evidence", "A recent trial found that staff absence fell by nearly a third."],
        ["Explanation", "This suggests that employees who feel rested and trusted tend to work more effectively."],
        ["Link", "Consequently, employers should consider flexible schedules where the work allows."],
      ]),
      list("Hedging language", ["Modal verbs: may, might, could", "Verbs: suggest, indicate, tend to, appear to", "Adverbs: generally, often, in many cases, arguably", "Avoid: prove, always, never, everyone, obviously"]),
    ],
    exercises: [
      order("Build the paragraph: put the sentences in the correct order (PEEL).", ["Remote working may improve productivity in some sectors.", "A recent trial found that staff absence fell by nearly a third.", "This suggests that employees who feel rested and trusted tend to work more effectively.", "Consequently, employers should consider flexible schedules where the work allows."], "paragraph", "Point → Evidence → Explanation → Link."),
      mc("Which sentence is most appropriately cautious for an academic essay?", ["Social media destroys concentration.", "Social media may reduce concentration in some users.", "Everyone knows that social media ruins concentration."], 1, "May + in some users is hedged and avoids an absolute claim."),
      mist("Find the mistake (academic style).", ["Studies", "prove", "that homework always improves results."], 1, "suggest", "“Prove” and “always” are too strong. Academic writers usually say “suggest” and use hedged language."),
      mc("Which sentence is the EVIDENCE?", ["Absence through illness fell by nearly a third in one trial.", "Remote working may improve productivity.", "Employers should consider flexible schedules."], 0, "Evidence gives a specific fact or data point."),
      mc("Choose the best explanation sentence after: “Absence fell by nearly a third in one trial.”", ["This suggests that rested employees are more likely to attend work.", "Absence is a word.", "The trial was held in an office."], 0, "An explanation says why the evidence matters, and it is hedged (suggests)."),
      tf("An academic paragraph should state its point with the strongest possible language.", false, "Academic style is cautious and precise, not absolute."),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "adv-reading-tone-attitude",
    level: "ADVANCED", category: "READING", title: "Tone and Attitude", topic: "Tone",
    difficulty: "CHALLENGING", minutes: 15, prereq: ["upper-reading-writers-purpose"],
    objective: "Identify a writer's attitude from word choice and style.",
    tags: ["reading", "reading-tone", "reading-inference", "C1"],
    ref: { book: HW, level: "Advanced", area: "Reading", topic: "Writer's attitude" },
    sections: [
      text("**Tone** is the writer's attitude towards the subject, shown through word choice, punctuation, sentence style and evaluative words. At C1 you should notice whether a text is **neutral, enthusiastic, sceptical, ironic, critical, dismissive** or **admiring**.", "Reading strategy"),
      list("Clues", ["Evaluative adjectives and adverbs: remarkable, disappointing, frankly.", "Quotation marks used ironically: the “revolutionary” app.", "Understatement and irony: “understandably underwhelmed”.", "Neutral tone: facts, dates and numbers, no evaluation."]),
      passage("Guided example", "The minister described the plan as “ambitious”, although the costings have yet to be published.", "Clue: “although…” signals doubt → cautiously sceptical"),
    ],
    exercises: [
      mc("What is the writer's attitude towards the app?", ["Sceptical and mildly mocking", "Enthusiastic", "Neutral"], 0, "The ironic quotation marks around “revolutionary” and “understandably underwhelmed” signal mockery.", REVIEW),
      mc("What is the tone of this text?", ["Admiring and enthusiastic", "Bored", "Critical"], 0, "“Quite frankly, remarkable” and “hard to overstate” show admiration.", FINDINGS),
      mc("What is the tone of this text?", ["Neutral and objective", "Angry", "Humorous"], 0, "It reports facts (dates, votes) without evaluation.", COMMITTEE),
      ms("Select TWO phrases that show the writer's positive attitude.", ["quite frankly, remarkable", "hard to overstate", "the committee met on Tuesday", "a simple change"], [0, 1], "Evaluative phrases reveal attitude; facts do not.", FINDINGS),
      tf("The quotation marks around “revolutionary” show that the writer believes the app is revolutionary.", false, "They are ironic: the writer means the opposite.", REVIEW),
    ],
  },
  {
    slug: "adv-reading-argument-implicit",
    level: "ADVANCED", category: "READING", title: "Argument Structure and Implicit Meaning", topic: "Argument structure",
    difficulty: "CHALLENGING", minutes: 18, prereq: ["adv-reading-tone-attitude"],
    objective: "Follow the structure of an argument and understand what a writer implies about opposing views.",
    tags: ["reading", "reading-argument", "reading-inference", "reading-writers-purpose", "C1"],
    ref: { book: CE, level: "Advanced", area: "Reading", topic: "Argument and implication" },
    sections: [
      text("Complex texts often follow an **argument structure**: a **claim**, **evidence**, a **counter-argument** and a **response**. To read at C1, ask what each paragraph is **doing** (function), not only what it says, and notice what the writer **implies** about opposing views through word choice.", "Reading strategy"),
      list("Ask these questions", ["What is the central claim (often in the first paragraph)?", "What is the evidence, and how does it support the claim?", "Where does the writer mention an opposing view, and how does he or she respond (admittedly… but…)?", "Which words suggest the writer's opinion of the opposing view (e.g. “dismissed as idealistic”)?"]),
      tip("Words such as “admittedly” and “but” often show a concession followed by a rebuttal.", "Signposts"),
    ],
    exercises: [
      mc("Which sentence best states the writer's central claim?", ["Shorter working weeks may not reduce productivity and deserve serious consideration.", "Every company should close on Fridays.", "Hospitals cannot change their working hours."], 0, "The first paragraph says the claim that shorter hours mean lower output “deserves closer examination”, and the evidence supports it.", FOUR_DAY),
      mc("What is the main function of the third paragraph?", ["To acknowledge an objection and limit its importance", "To introduce a new topic", "To repeat the trial results"], 0, "It concedes the concern (“admittedly”) and then says it applies only to particular services.", FOUR_DAY),
      mc("What does “dismissed as idealistic” suggest about how critics see the proposals?", ["Unrealistic", "Too expensive", "Already successful"], 0, "Idealistic means having high ideals but ignoring practical reality, which is how critics see it.", FOUR_DAY),
      tf("The writer completely rejects the critics' concern about healthcare.", false, "The writer calls the concern “legitimate” but argues it does not weaken the principle.", FOUR_DAY),
      mc("Why does the writer mention the trial in paragraph 2?", ["To provide evidence for the claim", "To criticise the companies", "To describe healthcare"], 0, "The reported results (absence and turnover falling) support the argument.", FOUR_DAY),
    ],
  },
];


// Teaching order (syllabus Units 1-12); existing core lessons are slotted into the unit they best support.
const PLAN = [
  // grammar
  "adv-grammar-tense-review", "adv-grammar-reflexive-pronouns", "adv-grammar-adverbs-adjectives", "adv-grammar-adjective-order", "adv-grammar-verb-patterns",
  "adv-grammar-modals-speculation", "adv-grammar-modal-meanings", "adv-grammar-avoiding-repetition", "adv-grammar-inversion", "adv-grammar-cleft-sentences",
  "adv-grammar-emphatic-do", "adv-grammar-midterm-review-units-1-6", "adv-grammar-real-unreal-tenses", "adv-grammar-wish-if-only-would",
  "adv-grammar-relatives-participles", "adv-grammar-discourse-markers", "adv-grammar-distancing-the-facts", "adv-grammar-future-forms-review",
  "adv-grammar-complex-linking-devices", "adv-grammar-final-review-units-1-12",
  // vocabulary
  "adv-vocab-academic-register", "adv-vocab-synonyms-in-context", "adv-vocab-life-stages", "adv-vocab-informal-phrasal-verbs", "adv-vocab-word-idioms",
  "adv-vocab-describing-trends", "adv-vocab-phrasal-up-down", "adv-vocab-idiomatic-collocations", "adv-vocab-deception-synonyms", "adv-vocab-nationalities-culture",
  "adv-vocab-nuance-connotation", "adv-vocab-compound-nouns-phrasal", "adv-vocab-phrasal-on-off", "adv-vocab-homonyms-homographs", "adv-vocab-rhyme-rhythm",
  "adv-vocab-body-verbs", "adv-vocab-health-compounds", "adv-vocab-synonyms-antonyms", "adv-vocab-metaphor-euphemism",
  // reading
  "adv-reading-what-makes-us-human", "adv-reading-tone-attitude", "adv-reading-speech-and-class", "adv-reading-modern-novel-extract", "adv-reading-generous-millionaire",
  "adv-reading-limits-to-growth", "adv-reading-novelist-and-conjurer", "adv-reading-worlds-of-difference", "adv-reading-when-good-comes-from-bad",
  "adv-reading-strategies-for-happiness", "adv-reading-jobs-for-boys-or-girls", "adv-reading-pianist-and-wolves", "adv-reading-power-of-placebo",
  "adv-reading-too-much-science", "adv-reading-life-changing-experiences", "adv-reading-sideways-look-at-time", "adv-reading-argument-implicit",
  // writing
  "adv-writing-personal-profile", "adv-writing-narrative-genre-atmosphere", "adv-writing-report-graphs", "adv-writing-in-class-1-preparation",
  "adv-writing-formal-email-opinion", "adv-writing-comparing-two-countries", "adv-writing-talk-history", "adv-writing-letter-to-younger-self",
  "adv-writing-folk-tale-style", "adv-writing-in-class-2-preparation", "adv-writing-informal-opinion-post", "adv-writing-debating-an-issue",
  "adv-writing-product-review", "adv-writing-biography-connecting-ideas", "adv-writing-cohesion", "adv-writing-balanced-paragraph", "adv-writing-final-exam-essay",
];
const rank = (slug: string) => (PLAN.indexOf(slug) === -1 ? 999 : PLAN.indexOf(slug));
export const ADVANCED: SeedLesson[] = [...ADV_U1_U3, ...ADV_U4_U6, ...ADV_U7_U9, ...ADV_U10_U12, ...ADVANCED_CORE].sort(
  (x, y) => rank(x.slug) - rank(y.slug)
);

void HW; void CE; void examples; void passage; void sa; void tip; void structure; void annotated; void compare;
