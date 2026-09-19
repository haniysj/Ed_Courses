import { ELEMENTARY_UNITS } from "./elementary-units";
import { ELEMENTARY_W3_W4 } from "./elementary-w3-w4";
import { ELEMENTARY_W5_W6 } from "./elementary-w5-w6";
import { ELEMENTARY_W7_W8 } from "./elementary-w7-w8";
import { ELEMENTARY_W9_W10 } from "./elementary-w9-w10";
import { HW, table, annotated, compare, examples, fill, list, match, mc, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const BIKES = "Many people in our town ride bicycles. Bicycles are cheap and they don't need petrol. They are also good for your health. In the morning, you can see students, workers and even the postman on bicycles. Some streets now have special bicycle roads, so riding is safer.";
const BOOKSHOP = "Fatima works at a bookshop. She likes it because it is quiet. The customers are kind. They often ask her questions in English. This helps her practise.";

export const ELEMENTARY_CORE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "elementary-grammar-present-simple-questions",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Present Simple: Negatives and Questions", topic: "Present Simple",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-third-person-s"],
    objective: "Make Present Simple negatives and questions with do / does, and give short answers.",
    tags: ["grammar", "present-simple", "questions", "negatives", "daily-routines", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Present Simple questions and negatives" },
    sections: [
      text("In the Present Simple, we do not change the main verb to make a negative or a question. Instead we use the helper verb **do** or **does** (for he, she, it). The main verb stays in its **base form**.", "Explanation"),
      list("When do we use it?", ["To say what people don't do: I don't drink coffee.", "To ask about habits and routines: Do you walk to work?", "To ask for information: Where does she live?"]),
      structure("Structure", "Negative: subject + do / does + not + base verb\nQuestion: (Wh-word) + do / does + subject + base verb?", "does / doesn't is only for he, she and it, and then the main verb has NO -s."),
      examples("Examples", {
        Affirmative: ["They play tennis on Sundays.", "She works in a bank."],
        Negative: ["They don't play tennis on Sundays.", "She doesn't work in a bank. | not “works”"],
        Questions: ["Do they play tennis on Sundays?", "Does she work in a bank?", "Where does she work?"],
        "Short answers": ["Yes, they do. / No, they don't.", "Yes, she does. / No, she doesn't."],
        "Asking about jobs": ["What does she do? | = What is her job?", "Where does he work?", "He doesn't work in Scotland. | not “works”"],
      }),
      tip("Only one verb takes the -s: does. So: Does she work…? (not Does she works…?)", "Watch out"),
    ],
    exercises: [
      mc("She ___ like coffee.", ["don't", "doesn't", "isn't"], 1, "With she we use doesn't + base verb: She doesn't like coffee."),
      fill("___ your brother play football? Yes, he ___.", ["Does", "does"], "With he we use Does in the question and does in the short answer."),
      mist("Find the mistake.", ["Does she", "works", "here?"], 1, "work", "After does the main verb is in the base form: Does she work here?"),
      order("Put the words in order.", ["Where", "does", "he", "live?"], "word", "Wh-word + does + subject + base verb: Where does he live?"),
      sa("Make it negative: They play tennis on Sundays.", ["They don't play tennis on Sundays.", "They do not play tennis on Sundays."], "Use don't / do not before the base verb.", { hint: "They ___ play…" }),
      mc("“What does your father do?” means…", ["What is your father's job?", "Where does your father live?", "Does your father like his job?"], 0, "What does he do? is the natural way to ask about someone's job."),
      mc("“Do you like pizza?” “No, ___.”", ["I don't", "I doesn't", "I'm not"], 0, "The short answer repeats the helper verb: No, I don't."),
    ],
  },
  {
    slug: "elementary-grammar-past-simple",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Past Simple: Regular and Irregular Verbs", topic: "Past Simple",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-grammar-present-simple-questions"],
    objective: "Talk about finished actions in the past with regular and common irregular verbs.",
    tags: ["grammar", "past-simple", "past-tense", "irregular-verbs", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Past Simple" },
    sections: [
      text("We use the **Past Simple** for actions that started and finished in the past. Regular verbs add **-ed**. Irregular verbs have special forms you need to learn (go → went).", "Explanation"),
      list("When do we use it?", ["Finished actions with a time: I visited my aunt yesterday.", "A series of past actions: He got up, had breakfast and left.", "Past states: We were tired after the trip."]),
      structure("Structure", "Affirmative: subject + verb-ed / irregular form\nNegative: subject + did not (didn't) + base verb\nQuestion: (Wh-word) + did + subject + base verb?", "After did / didn't the main verb is in the base form: Did you go? (not Did you went?)"),
      examples("Spelling and forms", {
        Regular: ["play → played", "study → studied", "stop → stopped"],
        Irregular: ["go → went", "have → had", "buy → bought", "eat → ate"],
        "Negative / question": ["I didn't watch TV last night.", "Did you enjoy the film?", "What did you eat?"],
      }),
      table("Regular verbs: -ed spelling", ["Rule", "Examples"], [
        ["Most verbs: + -ed", "work → worked · start → started"],
        ["Verbs ending in -e: + -d", "live → lived · like → liked"],
        ["Consonant + y: y → -ied", "study → studied · carry → carried"],
        ["One vowel + one consonant: double it", "stop → stopped · plan → planned"],
      ]),
      table("Common irregular verbs", ["Base form", "Past form"], [
        ["go", "went"], ["see", "saw"], ["have", "had"], ["buy", "bought"], ["make", "made"], ["drive", "drove"], ["eat", "ate"], ["take", "took"],
      ]),
      tip("Time words that often go with the Past Simple: yesterday, last week, two days ago, in 2019."),
    ],
    exercises: [
      mc("Yesterday I ___ to the market.", ["go", "went", "goed"], 1, "Go is irregular: the past form is went."),
      fill("She ___ TV last night. (not watch)", [["didn't watch", "did not watch"]], "Negative past: didn't + base verb."),
      mist("Find the mistake.", ["Did you", "went", "to school?"], 1, "go", "After did we use the base form: Did you go to school?"),
      match("Match the base form with its past form.", [["go", "went"], ["buy", "bought"], ["study", "studied"], ["stop", "stopped"]], "Go and buy are irregular. Study changes y → ied, and stop doubles the p."),
      order("Put the words in order.", ["We", "visited", "my", "grandmother", "last", "week."], "word", "Subject + past verb + object + time: We visited my grandmother last week."),
      fill("He ___ (buy) a new car last month and ___ (drive) it to Salalah.", ["bought", "drove"], "Buy and drive are irregular: bought, drove."),
      fill("We ___ (not / enjoy) the film because it ___ (be) too long.", [["didn't enjoy", "did not enjoy"], "was"], "Negative: didn't + base verb. The past of be (it) is was."),
      mc("Which sentence is correct?", ["He didn't played football.", "He didn't play football.", "He not played football."], 1, "After didn't the verb is in the base form: didn't play."),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "elementary-vocab-places-in-town",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Places in Town", topic: "Places",
    difficulty: "BASIC", minutes: 10,
    objective: "Name common places in a town and say what people do there.",
    tags: ["vocabulary", "places", "travel", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Places in town" },
    sections: [
      text("We use places in town every day. Learn each word with the small words that go with it (the, at, to, in). These small words are where learners make most mistakes."),
      vocab([
        { word: "bank", pos: "noun", meaning: "a place where you keep or get money", ar: "بنك", pron: "/bæŋk/", ex: "I go to the bank on Sundays.", col: ["go to the bank", "open a bank account"], right: "I go to the bank.", wrong: "I go at the bank.", note: "With go we use “to”.", visual: "🏦" },
        { word: "pharmacy", pos: "noun", meaning: "a shop where you buy medicine", ar: "صيدلية", pron: "/ˈfɑːməsi/", ex: "You can buy medicine at the pharmacy.", col: ["at the pharmacy", "a local pharmacy"], right: "the pharmacy", wrong: "the farmacy", note: "“Ph” sounds like f but is spelled ph.", visual: "💊" },
        { word: "supermarket", pos: "noun", meaning: "a big shop that sells food and other things", ar: "سوبر ماركت", pron: "/ˈsuːpəmɑːkɪt/", ex: "We buy food at the supermarket.", col: ["go to the supermarket", "a big supermarket"], right: "We buy food at the supermarket.", wrong: "We buy food from supermarket.", note: "Don't forget “the”.", visual: "🛒" },
        { word: "post office", pos: "noun", meaning: "a place where you send letters and parcels", ar: "مكتب البريد", pron: "/ˈpəʊst ɒfɪs/", ex: "I sent a parcel at the post office.", col: ["send a parcel", "at the post office"], right: "I am at the post office.", wrong: "I am in post office.", note: "Use “at the”.", visual: "📮" },
        { word: "bus station", pos: "noun", meaning: "a place where buses start and stop", ar: "محطة الحافلات", pron: "/ˈbʌs ˌsteɪʃn/", ex: "The bus station is near my house.", col: ["at the bus station", "meet at the bus station"], right: "the bus station", wrong: "the station of bus", note: "In English the first noun describes the second: bus station.", visual: "🚌" },
        { word: "hospital", pos: "noun", meaning: "a place where doctors and nurses look after sick people", ar: "مستشفى", pron: "/ˈhɒspɪtl/", ex: "My aunt works in a hospital.", col: ["work in a hospital", "go to hospital"], right: "She works in a hospital.", wrong: "She works at hospital.", note: "Use “a hospital” for the job place.", visual: "🏥" },
      ], "Places in town"),
    ],
    exercises: [
      match("What do you do there? Match the place with its use.", [["bank", "You get money here.", "🏦"], ["pharmacy", "You buy medicine here.", "💊"], ["supermarket", "You buy food here.", "🛒"], ["post office", "You send a parcel here.", "📮"], ["bus station", "You take a bus here.", "🚌"]], "Think about what happens in each place."),
      fill("I buy medicine at the ___.", ["pharmacy"], "A pharmacy is the shop for medicine."),
      mc("Which sentence is correct?", ["She works at hospital.", "She works in a hospital.", "She works in hospital a."], 1, "We say “in a hospital” for the place where someone works."),
      mc("Which word is different?", ["bank", "pharmacy", "apple", "hospital"], 2, "Bank, pharmacy and hospital are places. An apple is a fruit."),
      mist("Find the mistake.", ["The station of bus", "is near", "my house."], 0, "The bus station", "English puts the describing noun first: bus station."),
      sa("Where do you send a parcel? At the ___ ___.", ["post office"], "You send letters and parcels at the post office."),
    ],
  },
  {
    slug: "elementary-vocab-shopping-money",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Shopping and Money", topic: "Shopping",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-places-in-town"],
    objective: "Use shopping words and natural collocations to ask about prices and pay.",
    tags: ["vocabulary", "shopping", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Shopping" },
    sections: [
      text("When you shop, you need to talk about **prices**, **paying** and **change**. Several of these words have natural partner words (collocations), and some are easy to use wrongly."),
      vocab([
        { word: "price", pos: "noun", meaning: "the amount of money you pay for something", ar: "سعر", pron: "/praɪs/", ex: "The price of this bag is 12 rials.", col: ["a high price", "a low price"], right: "The price is low.", wrong: "The price is cheap.", note: "Things are cheap; a price is high or low.", visual: "🏷️" },
        { word: "cheap", pos: "adjective", meaning: "not costing much money", ar: "رخيص", pron: "/tʃiːp/", ex: "This T-shirt is very cheap.", col: ["cheap and cheerful", "a cheap shirt"], right: "This shirt is cheap.", wrong: "This shirt has a cheap price.", note: "Use cheap for the thing.", visual: "💸" },
        { word: "expensive", pos: "adjective", meaning: "costing a lot of money", ar: "غالٍ", pron: "/ɪkˈspensɪv/", ex: "That watch is too expensive for me.", col: ["too expensive", "very expensive"], right: "That watch is expensive.", wrong: "That watch is very much expensive.", note: "Say “very expensive”.", visual: "💎" },
        { word: "receipt", pos: "noun", meaning: "a piece of paper that shows what you bought and paid", ar: "إيصال", pron: "/rɪˈsiːt/", ex: "Keep the receipt in case you need to return it.", col: ["keep the receipt", "ask for a receipt"], right: "the receipt (the p is silent)", wrong: "the recept", note: "The letter p is silent.", visual: "🧾" },
        { word: "discount", pos: "noun", meaning: "a lower price than usual", ar: "خصم", pron: "/ˈdɪskaʊnt/", ex: "We got a 10% discount.", col: ["get a discount", "give a discount"], right: "We get a discount in this shop.", wrong: "We take a discount in this shop.", note: "The natural verb is get (or give).", visual: "🎁" },
        { word: "change", pos: "noun (uncountable)", meaning: "the money you get back when you pay too much", ar: "الباقي", pron: "/tʃeɪndʒ/", ex: "Here is your change.", col: ["keep the change", "give change"], right: "Here is your change.", wrong: "Here is your rest.", note: "In English the money you get back is “change”, not “rest”.", visual: "🪙" },
      ], "Shopping words"),
    ],
    exercises: [
      match("Match the word with its meaning.", [["receipt", "paper that shows what you paid"], ["discount", "a lower price than usual"], ["change", "money you get back"], ["price", "how much something costs"]], "Each word describes a different part of buying something."),
      fill("How much does this bag ___?", ["cost"], "We ask “How much does it cost?” to find the price."),
      mc("The opposite of cheap is ___.", ["small", "expensive", "old"], 1, "Cheap = not costing much; expensive = costing a lot."),
      mc("You give the shopkeeper 10 rials for an 8-rial book. He says: “Here is your ___.”", ["rest", "change", "price"], 1, "The money you get back is called “change”."),
      mist("Find the mistake.", ["We take", "a discount", "in this shop."], 0, "get", "The natural collocation is get a discount."),
      tf("A receipt shows what you bought and how much you paid.", true, "Yes: a receipt is the paper you get after paying."),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "elementary-writing-punctuation",
    level: "ELEMENTARY", category: "WRITING", title: "Capital Letters and Punctuation", topic: "Punctuation",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-writing-complete-sentence"],
    objective: "Use capital letters, full stops, question marks and commas in lists correctly.",
    tags: ["writing", "writing-sentence", "punctuation", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Punctuation" },
    sections: [
      text("Good punctuation makes your writing easy to read. Three habits will improve almost every text you write: use **capital letters** correctly, end every sentence with the right mark, and use **commas** to separate items in a list.", "Explanation"),
      list("Capital letters are used for", ["The first word of a sentence: We live in Muscat.", "The word I: Today I am happy.", "Names of people and places: Omar, Oman, Muscat.", "Days, months, languages and nationalities: Monday, March, English, Omani."]),
      list("End marks and commas", ["Full stop (.) at the end of a statement.", "Question mark (?) at the end of a question.", "Commas (,) between items in a list: We eat rice, fish and salad. (no comma before and)"]),
      compare("Correct the mistakes", [["my birthday is in march.", "My birthday is in March.", "First word, and months, need capital letters."], ["Where do you live.", "Where do you live?", "A question ends with a question mark."], ["We eat rice fish and salad.", "We eat rice, fish and salad.", "Use commas between the items."]]),
    ],
    exercises: [
      sa("Add capital letters: on monday i visit omar in oman.", ["On Monday I visit Omar in Oman."], "Capital letters: On, Monday, I, Omar, Oman.", { strict: true }),
      mc("Which sentence is correct?", ["We eat rice, fish and salad.", "We eat rice fish, and salad.", "We eat, rice fish and salad."], 0, "Use commas between list items and no comma before “and”."),
      mist("Find the mistake.", ["Where do you live", "."], 1, "?", "This is a question, so it needs a question mark."),
      mc("Which is written correctly?", ["my birthday is in march.", "My birthday is in March.", "My Birthday is in march."], 1, "Start the sentence with a capital, and write March with a capital M."),
      tf("Days of the week start with a capital letter in English.", true, "Monday, Tuesday, … always start with a capital letter."),
      sa("Add the correct end mark: What is your name", ["What is your name?"], "A question ends with a question mark.", { strict: true }),
    ],
  },
  {
    slug: "elementary-writing-sequencing",
    level: "ELEMENTARY", category: "WRITING", title: "First, Next, Then, Finally: Writing About Your Day", topic: "Sequencing",
    difficulty: "CORE", minutes: 12, prereq: ["elementary-writing-punctuation"],
    objective: "Write a short, ordered text about a day using sequence words.",
    tags: ["writing", "writing-paragraph", "writing-connectors", "connectors", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Describing a day" },
    sections: [
      text("When we write about what we did, we put the events in **time order**. **Sequence words** show the reader the order: **first, next, then, after that, finally**. A short text also needs a sentence at the beginning that says what the text is about.", "Explanation"),
      annotated("A model paragraph", [
        ["Topic sentence", "My Friday is a relaxing day."],
        ["Step 1", "First, I wake up late and have breakfast with my family."],
        ["Step 2", "Next, we visit my grandparents."],
        ["Step 3", "Then we eat lunch together."],
        ["Conclusion", "Finally, I play football with my cousins, and I go to bed happy."],
      ]),
      list("How to use sequence words", ["Put a comma after First, Next and Finally.", "Use Then without a comma when it is followed by a subject: Then we eat lunch.", "Use each sequence word once, in order."]),
    ],
    exercises: [
      order("Put the sentences in the correct order to make a paragraph.", ["First, I wake up at seven.", "Next, I eat breakfast with my family.", "Then I go to school by bus.", "Finally, I do my homework and go to bed."], "paragraph", "First → Next → Then → Finally is the usual order for a sequence of actions."),
      fill("___ I wake up. ___ I have breakfast. ___ I go to school.", ["First", "Next", "Finally"], "Use First for the beginning and Finally for the last action.", ["Finally", "First", "Next"]),
      mc("Which word usually ends a list of steps?", ["First", "Then", "Finally"], 2, "Finally shows that the last step is coming."),
      mc("Choose the best topic sentence for a paragraph about your Friday.", ["I like the colour blue.", "My Friday is a relaxing day.", "The bus is late."], 1, "The topic sentence tells the reader what the paragraph is about: your Friday."),
      tf("“Finally” is a good word to start the first sentence of your day.", false, "Finally is for the last step. Use First for the beginning."),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "elementary-reading-main-idea",
    level: "ELEMENTARY", category: "READING", title: "Finding the Main Idea of a Short Text", topic: "Main idea",
    difficulty: "CORE", minutes: 12, prereq: ["beginner-reading-short-text"],
    objective: "Tell the difference between the main idea and a detail in a short text.",
    tags: ["reading", "reading-main-idea", "reading-comprehension", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "Gist reading" },
    sections: [
      text("The **main idea** is what the whole text is mostly about. A **detail** is one small piece of information. The main idea is bigger than any single detail: if you can cover the whole text with it, it is the main idea.", "Reading strategy"),
      passage("Example text", "My grandmother has a small garden behind her house. She grows tomatoes, mint and flowers. Every morning she waters the plants before it gets hot. In the evening, the family sits in the garden and drinks tea. Her garden is a happy place for all of us.", "Grandmother's garden"),
      list("Guided practice", ["1. Read the whole text once.", "2. Ask: what is it mostly about? → Grandmother's garden.", "3. Check: “She grows mint” is only one detail. “The garden is a happy place for the family” covers everything → main idea."]),
      tip("Wrong answers are often true details, but too small (or too big) to be the main idea.", "Watch out"),
    ],
    exercises: [
      mc("What is the main idea of the text?", ["Bicycles are popular and useful in the town.", "Petrol is expensive.", "The postman has a bicycle."], 0, "The whole text is about why bicycles are popular and useful. The other options are single details or not in the text.", BIKES),
      mc("Which is the best title for the text?", ["Riding Bicycles in Our Town", "A Postman's Day", "How to Repair a Bicycle"], 0, "A good title covers the whole text: riding bicycles in the town.", BIKES),
      mc("Which sentence is a detail, not the main idea?", ["Some streets now have special bicycle roads.", "Bicycles are popular and useful in the town."], 0, "The bicycle roads are one specific detail.", BIKES),
      tf("The text says bicycles are bad for your health.", false, "It says the opposite: they are good for your health.", BIKES),
      mc("Why are bicycles cheap to use?", ["They don't need petrol.", "They have special roads.", "The postman uses them."], 0, "The text says: “they don't need petrol”.", BIKES),
    ],
  },
  {
    slug: "elementary-reading-reference-words",
    level: "ELEMENTARY", category: "READING", title: "Reference Words: he, she, it, they, this", topic: "Reference words",
    difficulty: "CORE", minutes: 10, prereq: ["elementary-reading-main-idea"],
    objective: "Work out what small words such as it, they and this refer to.",
    tags: ["reading", "reading-reference", "reading-comprehension", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "Text cohesion" },
    sections: [
      text("Writers avoid repeating the same noun. They use **reference words** such as **he, she, it, they, them, this** instead. To understand a text, you must know **who or what** each word points to. Usually the answer is in the sentence before.", "Reading strategy"),
      passage("Example text", "Ahmed and Sara have a dog. It is very big. They walk it every day, and this makes them happy.", "Reference words"),
      list("Guided practice", ["It → the dog", "They → Ahmed and Sara", "this → walking the dog every day"]),
      tip("Look backwards. Find the last noun that matches: singular for it / he / she, plural for they / them."),
    ],
    exercises: [
      mc("In “She likes it because it is quiet”, the word “She” means…", ["Fatima", "the customers", "the bookshop"], 0, "The text begins with Fatima, and she is one woman.", BOOKSHOP),
      mc("The first “it” (“She likes it”) means…", ["Fatima", "the bookshop", "English"], 1, "Fatima works at the bookshop, and she likes the bookshop.", BOOKSHOP),
      mc("“They often ask her questions” — who is “They”?", ["The customers", "Fatima and her friends", "The books"], 0, "“They” is plural and refers to the customers in the sentence before.", BOOKSHOP),
      mc("“This helps her practise.” What does “This” mean?", ["The customers asking her questions in English", "The bookshop being quiet", "Fatima's work"], 0, "This refers to the whole idea before: customers ask her questions in English.", BOOKSHOP),
      tf("“Her” in “ask her questions” refers to Fatima.", true, "Her = Fatima, the woman in the first sentence.", BOOKSHOP),
    ],
  },
];

void annotated;

// Teaching order (Weeks 1-10), per category. Lessons not listed here go last.
const PLAN = [
  // grammar
  "elementary-grammar-be-contractions", "elementary-grammar-possessive-adjectives", "elementary-grammar-possessive-s",
  "elementary-grammar-high-frequency-verbs", "elementary-grammar-third-person-s", "elementary-grammar-present-simple-questions",
  "elementary-grammar-pronouns", "elementary-grammar-present-simple-plural", "elementary-grammar-adverbs-of-frequency",
  "elementary-grammar-like-ing", "elementary-grammar-there-is-are", "elementary-grammar-some-any-a-lot-of",
  "elementary-grammar-demonstratives", "elementary-grammar-can-cant", "elementary-grammar-was-were-could",
  "elementary-grammar-past-simple", "elementary-grammar-past-questions-ago", "elementary-grammar-prepositions-of-time",
  "elementary-grammar-countable-uncountable", "elementary-grammar-quantifiers", "elementary-grammar-like-would-like",
  "elementary-grammar-comparatives", "elementary-grammar-superlatives", "elementary-grammar-have-got",
  "elementary-grammar-present-continuous", "elementary-grammar-going-to", "elementary-grammar-present-perfect-intro",
  // vocabulary
  "elementary-vocab-family-members", "elementary-vocab-opposite-adjectives", "elementary-vocab-jobs", "elementary-vocab-opposite-verbs",
  "elementary-vocab-seasons-months", "elementary-vocab-leisure-activities", "elementary-vocab-rooms-house-items",
  "elementary-vocab-prepositions-of-place", "elementary-vocab-compound-nouns", "elementary-vocab-word-partners-ability",
  "elementary-vocab-ed-ing-adjectives", "elementary-vocab-ordinals-dates", "elementary-vocab-manner-adverbs",
  "elementary-vocab-food-categories", "elementary-vocab-daily-needs", "elementary-vocab-town-and-country",
  "elementary-vocab-prepositions-of-movement", "elementary-vocab-clothes-appearance", "elementary-vocab-weather", "elementary-vocab-take-get",
  // reading
  "elementary-reading-student-blog", "elementary-reading-two-jobs", "elementary-reading-young-swimmer", "elementary-reading-heritage-house",
  "elementary-reading-family-of-champions", "elementary-reading-lost-phone", "elementary-reading-two-thinkers",
  "elementary-reading-story-of-coffee", "elementary-reading-tall-buildings", "elementary-reading-modern-adventurers",
  // writing
  "elementary-writing-personal-profile", "elementary-writing-pronouns-cohesion", "elementary-writing-form-filling",
  "elementary-writing-describing-home", "elementary-writing-job-application-email", "elementary-writing-biography",
  "elementary-writing-story-past", "elementary-writing-formal-informal", "elementary-writing-describing-place", "elementary-writing-holiday-email",
];
const rank = (slug: string) => (PLAN.indexOf(slug) === -1 ? 999 : PLAN.indexOf(slug));
export const ELEMENTARY: SeedLesson[] = [
  ...ELEMENTARY_UNITS, ...ELEMENTARY_W3_W4, ...ELEMENTARY_W5_W6, ...ELEMENTARY_W7_W8, ...ELEMENTARY_W9_W10, ...ELEMENTARY_CORE,
].sort((a, b) => rank(a.slug) - rank(b.slug));
