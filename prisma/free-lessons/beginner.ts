import { BEGINNER_W1_W2 } from "./beginner-w1-w2";
import { BEGINNER_W3_W5 } from "./beginner-w3-w5";
import { BEGINNER_W6_W8 } from "./beginner-w6-w8";
import { BEGINNER_W9_W10 } from "./beginner-w9-w10";
import { HW, annotated, compare, examples, fill, list, match, mc, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const OMAR = "My name is Omar. I am twelve years old. I live in Salalah with my mother, my father and my sister, Huda. We have a small house near the sea. On Fridays, we eat lunch at my grandmother's house.";
const LIBRARY = "CITY LIBRARY. Open: Sunday to Thursday, 9:00 am – 5:00 pm. Closed on Friday and Saturday. Students can borrow three books for two weeks.";

export const BEGINNER_CORE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "beginner-grammar-verb-to-be",
    level: "BEGINNER", category: "GRAMMAR", title: "Verb to be: am, is, are", topic: "Verb to be",
    difficulty: "BASIC", minutes: 10,
    objective: "Use am, is and are to say who you are, where you are from and how things are.",
    tags: ["grammar", "grammar-foundation", "verb-to-be", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Verb to be" },
    sections: [
      text("The verb **to be** is the most common verb in English. We use it to give information about a person or thing: their name, job, age, nationality or feelings. The verb changes its form: **am**, **is** or **are**.", "Explanation"),
      list("When do we use it?", ["To say your name and job: I am a nurse.", "To say where you are from: We are from Oman.", "To describe people and things: The room is big.", "To talk about feelings and age: She is happy. He is ten."]),
      structure("Structure", "I + am   |   he / she / it + is   |   you / we / they + are", "In speaking, we usually shorten the verb: I'm, he's, she's, it's, you're, we're, they're."),
      examples("Examples", {
        Affirmative: ["I am a student.", "She is from Egypt.", "They are in the classroom."],
        Negative: ["I am not a doctor. | am + not", "He is not (isn't) tired.", "We are not (aren't) late."],
        Questions: ["Are you a teacher? | are + subject", "Is she your sister?", "Where are they from?"],
        "Short answers": ["Yes, I am. / No, I'm not.", "Yes, he is. / No, he isn't.", "Yes, we are. / No, we aren't."],
      }),
      tip("In short answers we never shorten the verb after Yes: say “Yes, I am.” not “Yes, I'm.”", "Watch out"),
    ],
    exercises: [
      mc("She ___ a teacher.", ["am", "is", "are"], 1, "“She” is third person singular, so we use “is”: She is a teacher."),
      fill("I ___ from Oman. My brothers ___ students.", ["am", "are"], "Use “am” with I, and “are” with plural subjects such as “my brothers”."),
      mist("Find the mistake.", ["They", "is", "in the classroom."], 1, "are", "“They” is plural, so we need “are”: They are in the classroom."),
      order("Put the words in the correct order.", ["Where", "are", "you", "from?"], "word", "In a question with be, the verb comes before the subject: Where are you from?"),
      tf("“He are my friend.” is a correct sentence.", false, "With “he” we use “is”: He is my friend."),
      sa("Write the short answer: “Are you a student?” — Yes, ___.", ["I am", "I am."], "In a positive short answer we use the full form: Yes, I am.", { hint: "Two words" }),
    ],
  },
  {
    slug: "beginner-grammar-present-simple",
    level: "BEGINNER", category: "GRAMMAR", title: "Present Simple: I, you, we, they and he, she, it", topic: "Present Simple",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-grammar-verb-to-be"],
    objective: "Talk about habits and routines with the Present Simple, adding -s / -es for he, she and it.",
    tags: ["grammar", "grammar-foundation", "present-simple", "daily-routines", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Present Simple" },
    sections: [
      text("We use the **Present Simple** to talk about things we do again and again, and about things that are always true. The verb has its base form (play, work, go) with I, you, we and they. With **he, she and it** we add **-s** or **-es**.", "Explanation"),
      list("When do we use it?", ["Habits and routines: I get up at six.", "Facts: The sun rises in the east.", "Likes and jobs: She works in a hospital."]),
      structure("Structure", "I / you / we / they + verb      he / she / it + verb + s"),
      examples("Spelling of he / she / it", {
        "Most verbs: + s": ["play → plays", "work → works"],
        "Verbs ending in ch, sh, s, x, o: + es": ["watch → watches", "go → goes"],
        "Consonant + y: y → ies": ["study → studies", "carry → carries"],
      }),
      examples("Examples", { "": ["I drink tea in the morning.", "My father works in a bank.", "She studies English every day.", "They play football on Fridays."] }),
    ],
    exercises: [
      mc("He ___ football on Fridays.", ["play", "plays", "playing"], 1, "With “he” the verb takes -s: plays."),
      fill("My sister ___ (work) in a hospital.", ["works"], "“My sister” = she, so we add -s: works."),
      mc("Which sentence is correct?", ["She go to school every day.", "She goes to school every day.", "She going to school every day."], 1, "“Go” ends in -o, so with she we add -es: goes."),
      mist("Find the mistake.", ["Every morning", "my father", "drink", "tea."], 2, "drinks", "“My father” = he, so the verb needs -s: drinks."),
      sa("Complete with the correct form of “watch”: He ___ TV in the evening.", ["watches"], "Verbs ending in -ch take -es: watches.", { hint: "Add -es" }),
      match("Match each verb with its he / she / it form.", [["play", "plays"], ["watch", "watches"], ["study", "studies"], ["go", "goes"]], "Add -s to most verbs; -es after ch, sh, o; and change consonant + y to -ies."),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "beginner-vocab-family-people",
    level: "BEGINNER", category: "VOCABULARY", title: "Family and People", topic: "Family",
    difficulty: "BASIC", minutes: 10,
    objective: "Name close family members and friends and use them correctly in short sentences.",
    tags: ["vocabulary", "family", "personal-information", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Family" },
    sections: [
      text("Family words are some of the first words we learn. Look at each word, say it aloud, and read the example. Notice the common mistake for each one: these are errors many learners make."),
      vocab([
        { word: "mother", pos: "noun", meaning: "your female parent", ar: "أم", pron: "/ˈmʌðə/", ex: "My mother is a nurse.", col: ["my mother and father", "a kind mother"], right: "My mother is kind.", wrong: "The mother of me is kind.", note: "Say “my mother”. We don't say “the mother of me”.", visual: "👩" },
        { word: "brother", pos: "noun", meaning: "a boy or man with the same parents as you", ar: "أخ", pron: "/ˈbrʌðə/", ex: "I have two brothers.", col: ["older brother", "younger brother"], right: "I have two brothers.", wrong: "I have two brother.", note: "Add -s for more than one.", visual: "👦" },
        { word: "parents", pos: "noun (plural)", meaning: "your mother and father", ar: "الوالدان", pron: "/ˈpeərənts/", ex: "My parents live in Sohar.", col: ["my parents", "live with your parents"], right: "My parents are at home.", wrong: "My parent are at home.", note: "“Parents” is always plural.", visual: "👨‍👩‍👧" },
        { word: "grandfather", pos: "noun", meaning: "the father of your mother or father", ar: "جد", pron: "/ˈɡrænfɑːðə/", ex: "My grandfather tells great stories.", col: ["visit your grandfather"], right: "I visit my grandfather on Fridays.", wrong: "I visit my grandfather in Fridays.", note: "Use “on” with days of the week.", visual: "👴" },
        { word: "cousin", pos: "noun", meaning: "the child of your aunt or uncle", ar: "ابن/ابنة العم أو الخال", pron: "/ˈkʌzn/", ex: "My cousin is the same age as me.", col: ["a close cousin"], right: "He is my cousin.", wrong: "He is my uncle son.", note: "One word covers all these relatives: cousin.", visual: "🧒" },
        { word: "friend", pos: "noun", meaning: "a person you like, who is not family", ar: "صديق", pron: "/frend/", ex: "She is my best friend.", col: ["best friend", "good friend", "make a friend"], right: "He is my friend.", wrong: "He is friend of me.", note: "Say “my friend”.", visual: "🤝" },
      ], "Family words"),
    ],
    exercises: [
      match("Match each word with its meaning.", [["parents", "your mother and father", "👨‍👩‍👧"], ["cousin", "the child of your aunt or uncle", "🧒"], ["grandfather", "the father of your mother or father", "👴"], ["brother", "a boy with the same parents as you", "👦"], ["friend", "a person you like, but not family", "🤝"]], "Each word names one relationship. Read the meanings again if you are not sure."),
      mc("My mother and father are my ___.", ["parents", "cousins", "friends"], 0, "“Parents” means mother and father together."),
      mist("Find the mistake.", ["I have", "two", "brother."], 2, "brothers", "Two or more things need a plural -s: two brothers."),
      mc("Which word is NOT a person?", ["mother", "friend", "house", "cousin"], 2, "Mother, friend and cousin are people. A house is a place."),
      tf("A cousin is a person in your family.", true, "Yes: your cousin is the child of your aunt or uncle, so they are family."),
      sa("Write the missing word: He is my ___. We are not family, but we like each other.", ["friend", "friend."], "A person you like who is not family is a friend.", { hint: "f _ _ _ _ _" }),
    ],
  },
  {
    slug: "beginner-vocab-food-drink",
    level: "BEGINNER", category: "VOCABULARY", title: "Food and Drink", topic: "Food",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-vocab-family-people"],
    objective: "Use everyday food and drink words with the correct verbs and a / an / some.",
    tags: ["vocabulary", "food", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Food and drink" },
    sections: [
      text("We **eat** food and we **drink** drinks. Some words are countable (an apple, two eggs). Some words are not countable (bread, rice, milk): we use **some** with them."),
      vocab([
        { word: "bread", pos: "noun (uncountable)", meaning: "a food made from flour, often eaten at breakfast", ar: "خبز", pron: "/bred/", ex: "I eat bread for breakfast.", col: ["fresh bread", "a slice of bread"], right: "I eat some bread.", wrong: "I eat a bread.", note: "Bread is uncountable: no “a” and no plural.", visual: "🍞" },
        { word: "rice", pos: "noun (uncountable)", meaning: "small white grains we cook and eat", ar: "أرز", pron: "/raɪs/", ex: "We eat rice and fish for lunch.", col: ["boiled rice", "a bowl of rice"], right: "Some rice, please.", wrong: "A rice, please.", note: "Use “some rice” or “a bowl of rice”.", visual: "🍚" },
        { word: "egg", pos: "noun", meaning: "an oval food from a hen", ar: "بيضة", pron: "/eɡ/", ex: "I eat an egg every morning.", col: ["boiled egg", "fried egg"], right: "I eat two eggs.", wrong: "I eat two egg.", note: "Countable: add -s for plural.", visual: "🥚" },
        { word: "apple", pos: "noun", meaning: "a round fruit, red or green", ar: "تفاحة", pron: "/ˈæpl/", ex: "She has an apple in her bag.", col: ["a red apple", "apple juice"], right: "an apple", wrong: "a apple", note: "Use “an” before a vowel sound.", visual: "🍎" },
        { word: "milk", pos: "noun (uncountable)", meaning: "a white drink from cows", ar: "حليب", pron: "/mɪlk/", ex: "The children drink milk.", col: ["a glass of milk", "hot milk"], right: "I want some milk, please.", wrong: "I want a milk, please.", note: "Say “some milk” or “a glass of milk”.", visual: "🥛" },
        { word: "tea", pos: "noun", meaning: "a hot drink made with leaves and water", ar: "شاي", pron: "/tiː/", ex: "My grandfather drinks tea after lunch.", col: ["a cup of tea", "drink tea"], right: "I drink tea.", wrong: "I eat tea.", note: "We drink tea; we don't eat it.", visual: "🍵" },
      ], "Food and drink words"),
    ],
    exercises: [
      match("Do we eat it or drink it? Match each word.", [["milk", "drink", "🥛"], ["tea", "drink", "🍵"], ["bread", "eat", "🍞"], ["rice", "eat", "🍚"], ["apple", "eat", "🍎"]], "Solid food: we eat it. Liquids: we drink them."),
      fill("I ___ tea in the morning.", [["drink", "have"]], "The verb that goes with tea is “drink” (or “have”)."),
      mc("Choose the correct sentence.", ["I eat a apple.", "I eat an apple.", "I eat apple an."], 1, "“Apple” starts with a vowel sound, so we use “an”."),
      mc("Which word is different?", ["bread", "milk", "rice", "egg"], 1, "Bread, rice and egg are foods we eat; milk is a drink."),
      mist("Find the mistake.", ["I want", "a milk,", "please."], 1, "some milk", "Milk is uncountable. Say “some milk” or “a glass of milk”."),
      sa("Write the plural: I eat two ___. (egg)", ["eggs", "eggs."], "Egg is countable; the plural adds -s.", { hint: "e _ _ s" }),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "beginner-writing-complete-sentence",
    level: "BEGINNER", category: "WRITING", title: "Writing a Complete Sentence", topic: "Sentence building",
    difficulty: "BASIC", minutes: 10,
    objective: "Write a complete sentence with a capital letter, a subject, a verb and a full stop.",
    tags: ["writing", "writing-sentence", "punctuation", "grammar-foundation", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Basic sentences" },
    sections: [
      text("A **sentence** is a group of words that gives a complete idea. Every English sentence needs a **subject** (who or what) and a **verb** (the action or state). It starts with a **capital letter** and ends with a **full stop** (.)", "Explanation"),
      structure("Structure", "Capital letter + subject + verb + (object / place) + full stop", "Example: My brother lives in Muscat."),
      compare("Complete or not?", [
        ["My brother.", "My brother lives in Muscat.", "The first has no verb."],
        ["Lives in Muscat.", "He lives in Muscat.", "The first has no subject."],
        ["i like tea", "I like tea.", "Start with a capital letter and end with a full stop."],
      ]),
      tip("The word “I” is always a capital letter, in the middle of a sentence too: Today I am happy."),
    ],
    exercises: [
      mc("Which is a complete sentence?", ["My brother.", "Lives in Muscat.", "My brother lives in Muscat."], 2, "Only the last one has both a subject (my brother) and a verb (lives)."),
      sa("Rewrite with a capital letter and a full stop: my name is omar", ["My name is Omar."], "Names and the first word start with a capital letter, and the sentence ends with a full stop.", { strict: true }),
      order("Put the words in order to make a sentence.", ["I", "have", "a", "brother."], "word", "The normal order is subject (I) + verb (have) + object (a brother)."),
      mist("Find the mistake.", ["she", "is my friend", "."], 0, "She", "A sentence starts with a capital letter: She is my friend."),
      tf("“Lives in Muscat.” is a complete sentence.", false, "It has a verb but no subject. Who lives in Muscat? “He lives in Muscat.” is complete."),
    ],
  },
  {
    slug: "beginner-writing-and-but",
    level: "BEGINNER", category: "WRITING", title: "Joining Ideas with and and but", topic: "Connectors",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-writing-complete-sentence"],
    objective: "Join two short ideas with and or but.",
    tags: ["writing", "writing-connectors", "connectors", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Linking with and / but" },
    sections: [
      text("Short sentences are good, but writing becomes more natural when we **join** ideas. Two of the easiest joining words are **and** and **but**.", "Explanation"),
      list("When do we use them?", ["**and** adds a similar idea: I like tea and I like milk.", "**but** shows a difference: I like tea but I don't like coffee."]),
      structure("Structure", "Sentence 1 + and / but + sentence 2", "When the subject is the same, you can shorten: I like tea and milk."),
      examples("Examples", { and: ["She has a cat and a dog.", "We eat rice and we drink water."], but: ["It is sunny, but it is cold.", "I am tired but I am happy."] }),
    ],
    exercises: [
      fill("I like tea ___ I don't like coffee.", ["but"], "The two ideas are different (like / don't like), so we use “but”."),
      mc("She has a cat ___ a dog.", ["and", "but"], 0, "Both are things she has, so the ideas are similar: “and”."),
      mc("It is sunny, ___ it is cold.", ["and", "but"], 1, "Sunny is usually warm, so “cold” is a surprise: “but”."),
      order("Put the words in order.", ["I", "like", "apples", "but", "I", "don't", "like", "oranges."], "word", "Sentence 1 + but + sentence 2: I like apples but I don't like oranges."),
      sa("Join with “and”: I play football. I play tennis. → I play football ___ tennis.", ["and"], "“And” joins two similar things.", { hint: "One word" }),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "beginner-reading-short-text",
    level: "BEGINNER", category: "READING", title: "Understanding a Short Text", topic: "Basic comprehension",
    difficulty: "BASIC", minutes: 10,
    objective: "Find who, where and what in a very short text.",
    tags: ["reading", "reading-comprehension", "reading-details", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "Personal information texts" },
    sections: [
      text("You do not need to understand every word. To understand a short text, ask three questions: **Who** is it about? **Where** does it happen? **What** do they do? Then look for the answer in the text.", "Reading strategy"),
      passage("Example text", "My name is Sara. I am eleven years old. I live in Nizwa with my mother and my father. I have a cat. Her name is Lulu. Lulu is white and she likes fish.", "Sara's text"),
      list("Guided practice", ["Who is the text about? → Sara (line 1).", "Where does she live? → Nizwa.", "What is Lulu? → Sara's cat: “I have a cat. Her name is Lulu.”"]),
      tip("Underline the question word (who, where, what) and find the same idea in the text.", "Try this"),
    ],
    exercises: [
      mc("Where does Omar live?", ["Muscat", "Salalah", "Sohar"], 1, "The text says: “I live in Salalah”.", OMAR),
      mc("Who is Huda?", ["Omar's mother", "Omar's sister", "Omar's friend"], 1, "“my sister, Huda”: Huda is Omar's sister.", OMAR),
      tf("Omar's house is big.", false, "The text says “a small house”, so the statement is false.", OMAR),
      mc("When does Omar eat lunch at his grandmother's house?", ["Every day", "On Fridays", "On Sundays"], 1, "“On Fridays, we eat lunch at my grandmother's house.”", OMAR),
      sa("How old is Omar? Write a number or a word.", ["12", "twelve", "twelve years old", "12 years old"], "The text says: “I am twelve years old.”", { context: OMAR }),
    ],
  },
  {
    slug: "beginner-reading-true-false",
    level: "BEGINNER", category: "READING", title: "True or False? Checking Information", topic: "True / False and scanning",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-reading-short-text"],
    objective: "Scan a notice for numbers, days and times, and decide if a statement is true or false.",
    tags: ["reading", "reading-true-false", "reading-scanning", "reading-details", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "Notices and information" },
    sections: [
      text("In a **True / False** question you compare a statement with the text. Do not use your own opinion: use only the text. **Scanning** means moving your eyes quickly to find a number, day, time or name.", "Reading strategy"),
      passage("Example notice", "SCHOOL CAFÉ. Open: Sunday to Thursday, 7:30 am – 2:00 pm. Closed on Friday and Saturday. A sandwich costs 500 baisa.", "A notice"),
      list("Guided practice: “The café is open on Sunday.”", ["1. Scan for the word Sunday.", "2. The notice says: Sunday to Thursday → open.", "3. The statement matches the text → TRUE."]),
      tip("Be careful with words like not, only and never, and with different numbers or days. They often make a statement false.", "Watch out"),
    ],
    exercises: [
      tf("The library is open on Friday.", false, "The notice says the library is closed on Fridays and Saturdays.", LIBRARY),
      tf("Students can borrow three books.", true, "The notice says: “Students can borrow three books”.", LIBRARY),
      mc("What time does the library close?", ["2:00 pm", "5:00 pm", "9:00 pm"], 1, "Scan for the closing time: 9:00 am – 5:00 pm, so it closes at 5:00 pm.", LIBRARY),
      tf("You can keep the books for one month.", false, "You can keep them for two weeks, not one month.", LIBRARY),
      mc("Which days is the library closed?", ["Sunday and Monday", "Friday and Saturday", "Thursday and Friday"], 1, "The notice says: “Closed on Friday and Saturday.”", LIBRARY),
    ],
  },
];

// silence unused-import warnings for helpers only some levels need
void annotated;

// Teaching order (Units 1-14 plus revision), per category. Lessons not listed here go last.
const PLAN = [
  // grammar
  "beginner-grammar-verb-to-be", "beginner-grammar-subject-pronouns", "beginner-grammar-possessive-adjectives", "beginner-grammar-be-negative",
  "beginner-grammar-be-questions", "beginner-grammar-possessive-s-our-their", "beginner-grammar-have-has", "beginner-grammar-present-simple",
  "beginner-grammar-present-simple-negative-questions", "beginner-grammar-adverbs-of-frequency", "beginner-grammar-does-doesnt",
  "beginner-grammar-question-words-why-how-many-much", "beginner-grammar-object-pronouns", "beginner-grammar-this-that", "beginner-grammar-there-is-are",
  "beginner-grammar-prepositions-of-place", "beginner-grammar-review-units-1-8", "beginner-grammar-was-were-born", "beginner-grammar-past-simple-regular",
  "beginner-grammar-past-simple-irregular", "beginner-grammar-past-simple-did-didnt", "beginner-grammar-can-cant", "beginner-grammar-adverbs-of-manner",
  "beginner-grammar-like-would-like", "beginner-grammar-some-any", "beginner-grammar-present-continuous", "beginner-grammar-present-simple-vs-continuous",
  "beginner-grammar-going-to-future", "beginner-grammar-three-tenses", "beginner-grammar-final-review-units-1-14",
  // vocabulary
  "beginner-vocab-everyday-objects", "beginner-vocab-plural-nouns", "beginner-vocab-numbers-1-30", "beginner-vocab-countries-cities", "beginner-vocab-adjective-noun-order",
  "beginner-vocab-jobs", "beginner-vocab-family-people", "beginner-vocab-family-more", "beginner-vocab-numbers-31-100-prices", "beginner-vocab-food-drink",
  "beginner-vocab-sports-free-time", "beginner-vocab-languages-nationalities", "beginner-vocab-daily-routine-verbs", "beginner-vocab-days-prepositions-of-time",
  "beginner-vocab-adjectives-opposites", "beginner-vocab-rooms-furniture", "beginner-vocab-places-in-town", "beginner-vocab-review-units-1-8",
  "beginner-vocab-years-months-dates", "beginner-vocab-collocations-have-do-go", "beginner-vocab-holiday-words", "beginner-vocab-verb-noun-collocations",
  "beginner-vocab-shops-cafe", "beginner-vocab-clothes-colours", "beginner-vocab-opposite-verbs", "beginner-vocab-transport", "beginner-vocab-rhymes-word-stress",
  "beginner-vocab-final-review-units-1-14",
  // reading
  "beginner-reading-short-text", "beginner-reading-true-false", "beginner-reading-postcard-cairo", "beginner-reading-family-salalah", "beginner-reading-e-pal",
  "beginner-reading-karims-life", "beginner-reading-bus-driver-day", "beginner-reading-email-salalah", "beginner-reading-favourite-city", "beginner-reading-mc-practice",
  "beginner-reading-bad-luck-day", "beginner-reading-weekend-sur", "beginner-reading-my-phone", "beginner-reading-meals-world", "beginner-reading-not-usual-day",
  "beginner-reading-life-big-events", "beginner-reading-final-review-strategies",
  // writing
  "beginner-writing-complete-sentence", "beginner-writing-and-but", "beginner-writing-capitals-forms", "beginner-writing-table-to-sentences",
  "beginner-writing-table-to-paragraph-1", "beginner-writing-timetable-to-paragraph", "beginner-writing-describing-room", "beginner-writing-editing-agreement-prepositions",
  "beginner-writing-past-event-paragraph", "beginner-writing-survey-to-paragraph", "beginner-writing-picture-1-setting-actions",
  "beginner-writing-picture-2-appearance-clothing", "beginner-writing-picture-3-full-description", "beginner-writing-synthesis-past-present-future", "beginner-writing-mock-test-final",
];
const rank = (slug: string) => (PLAN.indexOf(slug) === -1 ? 999 : PLAN.indexOf(slug));
export const BEGINNER: SeedLesson[] = [...BEGINNER_W1_W2, ...BEGINNER_W3_W5, ...BEGINNER_W6_W8, ...BEGINNER_W9_W10, ...BEGINNER_CORE].sort((a, b) => rank(a.slug) - rank(b.slug));
