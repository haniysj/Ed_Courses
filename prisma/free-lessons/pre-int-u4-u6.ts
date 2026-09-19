import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Pre-Intermediate course, Units 4-6. Topics follow the academy's teaching report; all text is ORIGINAL.

const ACCIDENTS = "Some famous inventions began by accident. According to a popular story, in 1905 an eleven-year-old boy in California mixed soda powder and water and left the drink outside with a stick in it. The night was very cold, and in the morning the drink was frozen on the stick. He had invented the ice lolly!\n\nAnother accident happened in the 1940s. An engineer, Percy Spencer, was working near a machine that produced radio waves. He put a chocolate bar in his pocket, and later it was melted. Spencer became curious, so he tried some popcorn, which popped. This experiment led to the microwave oven.\n\nBoth stories teach us the same lesson: an unexpected result can be the beginning of a great idea.";
const ACHIEVERS = "The profiles below are imaginary, but they show the kind of stories young people can tell.\n\nLina Al Habsi is sixteen and already a national chess champion. She learned to play at the age of six, and she now trains for three hours every evening. Her next goal is an international tournament in Dubai. “I'm going to win a medal,” she says.\n\nYusuf Al Kindi is fifteen. When he was thirteen, he taught himself to write computer code, and last year he made a phone app for his school. More than 5,000 students are using it now. “I'm meeting a company in June,” he says, “because they want to buy my idea.”\n\nNeither of them thinks their success is only luck: both say that hard work is the secret.";
const FAMILY = "THE BEGINNING\nLast summer, Huda decided to find out about her family's past. She has been researching for six months, and she has already learned a lot.\n\nTHE SEARCH\nFirst, she interviewed her grandmother, who has lived in the same village for eighty years. Then she visited the national archive, where she found her great-grandfather's name on a list from 1932. He was a boat builder in Sur.\n\nWHAT SHE FOUND\nSince then, Huda has met three cousins she never knew about. Together they have collected more than two hundred photographs, and they have started to write a book. “History isn't only about kings and battles,” she says. “It's about people like us.”";

export const PRE_INT_U4_U6: SeedLesson[] = [
  // ============================================================ UNIT 4 · GRAMMAR
  {
    slug: "pre-int-grammar-quantifiers",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Countable and Uncountable Nouns and Quantifiers", topic: "Quantifiers",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-past-forms-ed-irregular"],
    objective: "Use much, many, a lot of, a few, a little, some and any correctly with countable and uncountable nouns.",
    tags: ["grammar", "quantifiers", "countable-uncountable", "food", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Quantifiers (Unit 4)" },
    sections: [
      text("Nouns are **countable** (apple, egg, biscuit) or **uncountable** (rice, milk, information). The **quantifier** you choose depends on this, and on whether the sentence is **positive, negative or a question**.", "Explanation"),
      table("Quantifiers", ["Quantifier", "With", "Sentence type", "Example"], [
        ["a lot of / lots of", "both", "mostly positive", "We have a lot of eggs. I need lots of time."],
        ["much", "uncountable", "negative / question", "There isn't much milk. How much rice?"],
        ["many", "countable plural", "negative / question", "There aren't many apples. How many eggs?"],
        ["a few", "countable plural", "positive: some", "I have a few friends here."],
        ["a little", "uncountable", "positive: some", "There is a little cheese left."],
        ["some / any", "both", "positive / negative and question", "I bought some bread. Have you got any money?"],
      ]),
      list("Small difference, big meaning", ["**a few / a little** = some (positive): I have a few friends.", "**few / little** (no a) = almost none (negative): I have few friends. There is little time."]),
      structure("Structure", "many + plural noun · much + uncountable noun\na few + plural · a little + uncountable", "Use some in offers and requests: Would you like some tea?"),
    ],
    exercises: [
      fill("How ___ sugar do you take in your tea?", ["much"], "Sugar is uncountable: how much."),
      fill("There aren't ___ tomatoes in the fridge.", [["many", "any"]], "Negative + countable: many / any."),
      mc("I have ___ friends in this city, so I'm not lonely.", ["a few", "few", "a little"], 0, "A few = some (positive)."),
      mc("There is ___ time left, so hurry up!", ["a little", "little", "a few"], 1, "Little = almost none (a warning)."),
      match("much or many?", [["water", "much"], ["students", "many"], ["information", "much"], ["cars", "many"]], "Uncountable → much; countable plural → many."),
      mist("Find the mistake.", ["We haven't got", "many", "bread."], 1, "much", "Bread is uncountable: much bread."),
    ],
  },
  {
    slug: "pre-int-grammar-articles",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Articles: a / an, the and no article", topic: "Articles",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-quantifiers"],
    objective: "Choose a / an, the or no article for general statements and specific references.",
    tags: ["grammar", "articles", "determiners", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Articles (Unit 4)" },
    sections: [
      text("The **article** you choose shows whether you are talking about **something general or specific**, and whether the listener already **knows** which one you mean.", "Explanation"),
      table("Which article?", ["Article", "Use", "Example"], [
        ["a / an", "one of many; first mention; jobs", "I saw a film. She is an engineer."],
        ["the", "specific / known; second mention; unique things", "The film was long. The sun is hot."],
        ["no article (zero)", "general plural or uncountable nouns; meals, languages, most countries", "Coffee is popular. I like films. She speaks Arabic."],
      ]),
      list("Useful rules", ["**First mention → a; second mention → the**: I bought a book. The book is about space.", "**Unique things**: the sun, the moon, the government, the Internet.", "**General statements**: use no article: Children need sleep. (not The children…)", "**Jobs**: a teacher, an engineer.", "**Some names** need the: the United Kingdom, the Gulf, the Pacific."]),
      structure("Structure", "a / an + singular countable (new)\nthe + specific noun (known)\n— + general plural / uncountable"),
    ],
    exercises: [
      fill("I bought ___ new phone yesterday. ___ phone is very fast.", ["a", "The"], "First mention: a. Second mention: the."),
      mc("___ coffee is very popular in my country. (in general)", ["The", "A", "—"], 2, "General uncountable noun: no article."),
      mc("She works as ___ engineer.", ["a", "an", "the"], 1, "Jobs take a / an; engineer starts with a vowel sound."),
      mist("Find the mistake.", ["The", "children", "need a lot of sleep. (in general)"], 0, "—", "General plural noun: no article: Children need sleep."),
      mc("___ sun is a star.", ["A", "The", "—"], 1, "Unique things take the."),
      match("Which article?", [["Would you like ___ apple?", "an"], ["I read ___ book yesterday.", "a"], ["Please close ___ window. (we both see it)", "the"]], "an before a vowel sound; a for new; the for known."),
    ],
  },

  // ============================================================ UNIT 4 · VOCABULARY
  {
    slug: "pre-int-vocab-food-measures",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Food, Recipes, Weights and Measures", topic: "Food",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-vocab-time-expressions"],
    objective: "Use container and measure words and common cooking verbs to describe food and recipes.",
    tags: ["vocabulary", "food", "recipes", "measures", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Food, recipes, weights and measures (Unit 4)" },
    sections: [
      text("Uncountable foods need a **measure or container** word: a **slice of** bread, a **bottle of** water. In recipes you also need **cooking verbs**."),
      table("Measure words", ["Phrase", "Example"], [
        ["a slice of", "a slice of cake / bread / cheese"], ["a loaf of", "a loaf of bread"], ["a bottle of", "a bottle of water / oil"],
        ["a packet of", "a packet of rice / biscuits"], ["a can (tin) of", "a can of tuna / beans"], ["a kilo / 500 grams of", "a kilo of potatoes"], ["a litre of", "a litre of milk"],
      ]),
      vocab([
        { word: "chop", pos: "verb", meaning: "to cut into small pieces with a knife", ar: "يقطّع", pron: "/tʃɒp/", ex: "Chop the onions finely.", col: ["chop vegetables"], visual: "🔪" },
        { word: "boil", pos: "verb", meaning: "to cook in water at 100°C", ar: "يسلق", pron: "/bɔɪl/", ex: "Boil the rice for ten minutes.", col: ["boil water", "boil an egg"], visual: "♨️" },
        { word: "fry", pos: "verb", meaning: "to cook in hot oil", ar: "يقلي", pron: "/fraɪ/", ex: "Fry the fish on both sides.", col: ["fry an egg"], visual: "🍳" },
        { word: "bake", pos: "verb", meaning: "to cook in an oven", ar: "يخبز", pron: "/beɪk/", ex: "Bake the cake for forty minutes.", col: ["bake bread", "bake a cake"], visual: "🥧" },
        { word: "stir", pos: "verb", meaning: "to move food round and round with a spoon", ar: "يقلّب", pron: "/stɜː/", ex: "Stir the soup slowly.", col: ["stir the sauce"], visual: "🥄" },
      ], "Cooking verbs"),
    ],
    exercises: [
      match("Match the food with the correct measure.", [["bread", "a loaf of"], ["milk", "a litre of"], ["tuna", "a can of"], ["cake", "a slice of"], ["water", "a bottle of"]], "Uncountable foods need a container or measure word."),
      mc("You cook an egg in hot oil. You ___ it.", ["boil", "fry", "bake"], 1, "Fry = cook in hot oil."),
      mc("Put the cake in the oven for forty minutes: ___ it.", ["stir", "bake", "chop"], 1, "Bake = cook in an oven."),
      mist("Find the mistake.", ["I bought", "a bread", "and a litre of milk."], 1, "a loaf of bread", "Bread is uncountable: a loaf of bread."),
      fill("___ the onions into small pieces with a sharp knife.", ["Chop"], "Chop = cut into small pieces."),
      order("Put the recipe steps in order.", ["Chop the onions.", "Fry them in a little oil.", "Add the rice and stir.", "Boil for ten minutes."], "paragraph", "Prepare, fry, add and stir, then boil."),
    ],
  },
  {
    slug: "pre-int-vocab-high-street-shops",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Shops on the High Street", topic: "Shopping",
    difficulty: "BASIC", minutes: 10, prereq: ["pre-int-vocab-food-measures"],
    objective: "Name common shops and say what you buy in each.",
    tags: ["vocabulary", "shopping", "places", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "High-street shops (Unit 4)" },
    sections: [
      text("British English uses the **’s form** for many shops: **the baker's** (shop). We say **at the baker's** or **go to the baker's**."),
      table("Shops and what you buy", ["Shop", "You buy…"], [
        ["baker's", "bread and cakes"], ["butcher's", "meat"], ["greengrocer's", "fruit and vegetables"], ["chemist's (pharmacy)", "medicine and toiletries"],
        ["newsagent's", "newspapers, magazines, sweets"], ["jeweller's", "rings, necklaces, watches"], ["florist's", "flowers"], ["estate agent's", "houses and flats (to rent or buy)"],
      ]),
      list("Useful patterns", ["at the baker's = in the shop: I'm at the baker's.", "go to the chemist's: I need to go to the chemist's.", "Modern shops: a supermarket, a department store, a shopping centre, an online shop."]),
    ],
    exercises: [
      match("Where do you buy it?", [["bread", "baker's"], ["meat", "butcher's"], ["flowers", "florist's"], ["medicine", "chemist's"], ["a magazine", "newsagent's"]], "Learn the shop names."),
      mc("You want to buy a ring. You go to the ___.", ["jeweller's", "greengrocer's", "baker's"], 0, "A jeweller's sells jewellery."),
      mc("You want fresh fruit and vegetables. You go to the ___.", ["greengrocer's", "butcher's", "estate agent's"], 0, "A greengrocer's sells fruit and vegetables."),
      fill("I'm going to the ___ 's to get some aspirin. (a pharmacy)", ["chemist"], "chemist's = pharmacy."),
      mist("Find the mistake.", ["I bought", "a newspaper in the", "baker's."], 1, "at the newsagent's", "Newspapers are sold at a newsagent's."),
      sa("You look for a flat to rent. You go to an estate ___'s.", ["agent"], "An estate agent's helps you rent or buy property.", { hint: "a _ _ _ t" }),
    ],
  },

  // ============================================================ UNIT 4 · READING
  {
    slug: "pre-int-reading-kitchen-accidents",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: Happy Accidents in the Kitchen", topic: "Cause and effect",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-reading-missing-painting"],
    objective: "Follow a sequence of events and identify cause and effect in short factual stories.",
    tags: ["reading", "reading-details", "reading-comprehension", "cause-effect", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "Inventions by accident (Unit 4)" },
    sections: [
      text("Many texts explain **how something happened**. Look for **cause and effect**: what happened first (the cause) and what result it had (the effect). Linking words like **so, because, led to, as a result** point to these relationships.", "Reading strategy"),
      passage("Example", "The road was covered with ice, so the bus moved very slowly. As a result, many passengers were late for work.", "Cause and effect"),
      list("Guided practice", ["Cause: the road was icy.", "Effect 1: the bus moved slowly.", "Effect 2: passengers were late."]),
    ],
    exercises: [
      mc("According to the story, why was the boy's drink frozen in the morning?", ["The night was very cold.", "He put it in a fridge.", "He added ice."], 0, "“The night was very cold, and in the morning the drink was frozen.”", ACCIDENTS),
      mc("What did Percy Spencer find in his pocket?", ["a melted chocolate bar", "a frozen drink", "a popcorn machine"], 0, "“He put a chocolate bar in his pocket, and later it was melted.”", ACCIDENTS),
      mc("What happened because Spencer was curious?", ["He tried some popcorn.", "He went home.", "He stopped work."], 0, "“Spencer became curious, so he tried some popcorn.”", ACCIDENTS),
      tf("The text says the microwave oven was invented in the 1900s.", false, "The 1940s accident led to the microwave oven; 1905 is the ice-lolly story.", ACCIDENTS),
      mc("What did the experiment with popcorn lead to?", ["the microwave oven", "the ice lolly", "a new machine for radio"], 0, "“This experiment led to the microwave oven.”", ACCIDENTS),
      mc("What is the lesson of both stories?", ["Accidents are always dangerous.", "An unexpected result can start a great idea.", "Cold weather is useful."], 1, "The last paragraph states the lesson.", ACCIDENTS),
    ],
  },

  // ============================================================ UNIT 4 · WRITING
  {
    slug: "pre-int-writing-style-synonyms",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Text Style: Avoiding Repetition with Synonyms", topic: "Vocabulary in writing",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-writing-narrative-paragraph"],
    objective: "Replace over-used words such as nice, good, bad and big with more precise, expressive synonyms.",
    tags: ["writing", "synonyms", "style", "vocabulary", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Style and synonyms (Unit 4)" },
    sections: [
      text("Words like **nice, good, bad, big** and **said** are correct, but they are **too general** and they are often repeated. Using a **more precise word** makes your writing stronger and shows a wider vocabulary.", "Explanation"),
      table("Replacing over-used words", ["Weak word", "Stronger choices", "Example"], [
        ["nice", "pleasant, lovely, friendly, delightful", "We had a delightful evening."],
        ["good", "excellent, wonderful, delicious (food), skilful (person)", "It was a delicious meal."],
        ["bad", "terrible, awful, unpleasant, poor", "The weather was awful."],
        ["big", "huge, enormous, spacious (room)", "They live in a spacious flat."],
        ["said", "replied, explained, whispered, shouted", "“Come here,” she whispered."],
      ]),
      passage("Before", "We had a nice holiday. The hotel was nice, the food was good and the weather was good. We saw a nice beach.", "Repetitive"),
      passage("After", "We had a wonderful holiday. The hotel was comfortable, the food was delicious and the weather was perfect. We discovered a beautiful beach.", "Better style"),
      tip("Do not change a word if you are not sure of its exact meaning. Check in a dictionary and look at an example sentence.", "Be careful"),
    ],
    exercises: [
      mc("Choose a stronger word for “a nice evening”.", ["delightful", "big", "said"], 0, "Delightful is a more precise word for a very pleasant evening."),
      mc("The room was very big and had lots of space. It was ___.", ["spacious", "tiny", "noisy"], 0, "Spacious = large, with plenty of space."),
      mc("Replace “bad” in “The weather was bad”.", ["awful", "delicious", "spacious"], 0, "Awful is a stronger word for bad."),
      fill("“Come here,” she ___ quietly. (said very softly)", ["whispered"], "Whispered = said very softly."),
      match("Match the weak word with a stronger one.", [["good (food)", "delicious"], ["big (room)", "spacious"], ["said (loudly)", "shouted"], ["nice (friend)", "friendly"]], "Use the precise word that fits."),
      mist("Find the mistake. (avoid repetition)", ["The trip was nice,", "the hotel was nice", "and the people were nice."], 1, "the hotel was comfortable", "Repeating nice three times is weak. Change at least one."),
    ],
  },

  // ============================================================ UNIT 5 · GRAMMAR
  {
    slug: "pre-int-grammar-verb-patterns",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Verb Patterns: to-infinitive and -ing", topic: "Verb patterns",
    difficulty: "CORE", minutes: 14, prereq: ["pre-int-grammar-articles"],
    objective: "Use the correct pattern after common verbs: verb + to-infinitive, verb + -ing, and verb + preposition + -ing.",
    tags: ["grammar", "verb-patterns", "infinitive", "gerund", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Verb patterns (Unit 5)" },
    sections: [
      text("The verb that follows another verb takes a **special form**. The **first verb** decides which form to use: **to + verb**, **verb-ing**, or **preposition + verb-ing**.", "Explanation"),
      table("Three patterns", ["Pattern", "Verbs", "Example"], [
        ["verb + to-infinitive", "want, hope, plan, decide, need, would like, promise", "I want to travel. She decided to stay."],
        ["verb + -ing", "enjoy, hate, love, finish, mind, avoid, keep", "I enjoy cooking. Do you mind waiting?"],
        ["verb + preposition + -ing", "look forward to, think of, be interested in, be good at", "I'm looking forward to seeing you. She is thinking of moving."],
      ]),
      list("Tips", ["After a **preposition** we always use **-ing**: I'm good at swimming. (never good at swim)", "**like, love, hate** can take either: I like to swim / I like swimming.", "**to** in look forward to is a preposition: I look forward to hearing from you."]),
      structure("Structure", "want / hope / plan + to + verb\nenjoy / finish / mind + verb-ing\nlook forward to / think of + verb-ing"),
    ],
    exercises: [
      fill("I hope ___ (see) you soon.", ["to see"], "hope + to-infinitive."),
      fill("She enjoys ___ (read) in the evening.", ["reading"], "enjoy + -ing."),
      mist("Find the mistake.", ["I'm looking forward", "to see", "you next week."], 1, "to seeing", "Look forward to + -ing."),
      mc("We're thinking ___ a new car.", ["to buy", "of buying", "buy"], 1, "think of + -ing."),
      match("Which pattern?", [["want", "+ to-infinitive"], ["enjoy", "+ -ing"], ["look forward to", "+ -ing"], ["decide", "+ to-infinitive"]], "Learn the pattern with each verb."),
      order("Put the words in the correct order.", ["She", "decided", "to", "study", "medicine."], "word", "Subject + decided + to + verb + object."),
    ],
  },
  {
    slug: "pre-int-grammar-future-forms",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Future Forms: will, going to and Present Continuous", topic: "Future",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-grammar-verb-patterns"],
    objective: "Choose between will, going to and the Present Continuous to talk about the future.",
    tags: ["grammar", "future", "will", "going-to", "present-continuous", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Future forms (Unit 5)" },
    sections: [
      text("English has **three main ways** to talk about the future. The one you choose shows **how sure or how planned** the future action is.", "Explanation"),
      table("Which future form?", ["Form", "Use", "Example"], [
        ["will + verb", "spontaneous decisions, offers, promises, predictions (opinion)", "It's cold. I'll close the window. I think it will rain."],
        ["going to + verb", "plans made before speaking; predictions with evidence", "I'm going to study law. Look at the clouds: it's going to rain."],
        ["Present Continuous", "fixed arrangements (time and place)", "I'm meeting the doctor at ten tomorrow."],
      ]),
      structure("Structure", "will / won't + base verb\nam / is / are + going to + base verb\nam / is / are + verb-ing + future time", "Will doesn't change with the subject: I will, he will, they will."),
      examples("Examples", { will: ["I'll carry your bag. | offer", "I promise I won't be late. | promise"], "going to": ["We're going to move to Muscat next year. | plan", "Watch out! You're going to fall. | evidence"], "Present Continuous": ["I'm flying to Cairo on Friday morning. | arrangement"] }),
    ],
    exercises: [
      mc("“The phone is ringing.” “I ___ answer it.”", ["will", "am going to", "am answering"], 0, "A spontaneous decision at the moment of speaking: will."),
      mc("Look at those dark clouds! It ___ rain.", ["will", "is going to", "is raining"], 1, "Prediction from evidence: going to."),
      mc("I ___ my dentist at 4 o'clock tomorrow. It's in my diary.", ["will meet", "am meeting", "meet"], 1, "A fixed arrangement: Present Continuous."),
      mist("Find the mistake.", ["I've already decided:", "I will study", "medicine next year."], 1, "am going to study", "A plan made before speaking: going to."),
      match("Which form?", [["I promise I'll call you.", "will (promise)"], ["We're going to buy a house.", "going to (plan)"], ["I'm playing tennis at six.", "Present Continuous (arrangement)"]], "Match each meaning."),
      order("Put the words in the correct order.", ["We", "are", "going", "to", "visit", "Rome", "next", "summer."], "word", "Subject + be + going to + verb + object + time."),
    ],
  },

  // ============================================================ UNIT 5 · VOCABULARY
  {
    slug: "pre-int-vocab-phrasal-verbs-literal-idiomatic",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Phrasal Verbs: Literal and Idiomatic Meanings", topic: "Phrasal verbs",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-vocab-high-street-shops"],
    objective: "Understand and use common phrasal verbs that have a literal meaning and an idiomatic one.",
    tags: ["vocabulary", "phrasal-verbs", "idioms", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Phrasal verbs (Unit 5)" },
    sections: [
      text("A **phrasal verb** is a verb + particle (up, out, off, on). Some have a **literal** meaning (you can see the movement). Others are **idiomatic** (the meaning is different from the words)."),
      table("Literal and idiomatic", ["Phrasal verb", "Literal meaning", "Idiomatic meaning"], [
        ["pick up", "lift from the ground: pick up rubbish", "learn easily: pick up Spanish"],
        ["take off", "remove clothes: take off your coat", "leave the ground (plane): The plane took off."],
        ["give up", "—", "stop trying / stop a habit: give up smoking"],
        ["set off", "—", "start a journey: We set off at six."],
        ["find out", "—", "discover information: find out the answer"],
        ["look up", "raise your eyes", "search in a book: look up a word"],
      ]),
      list("Word order", ["**Separable**: pick up the rubbish / pick the rubbish up / pick it up.", "**Inseparable**: look after the children, get on with your work, look forward to it."]),
    ],
    exercises: [
      match("Match the phrasal verb with its meaning.", [["give up", "stop trying"], ["set off", "start a journey"], ["find out", "discover"], ["look up", "search in a dictionary"]], "Idiomatic phrasal verbs have a new meaning."),
      mc("I'm trying to ___ smoking, but it's difficult.", ["give up", "take off", "set off"], 0, "give up = stop."),
      mc("The plane ___ two hours late.", ["took off", "gave up", "picked up"], 0, "took off = left the ground."),
      mist("Find the mistake.", ["Please", "pick up it", "and put it in the bin."], 1, "pick it up", "With a pronoun, the object goes in the middle."),
      mc("She ___ Spanish quickly when she lived in Madrid.", ["picked up", "gave up", "looked up"], 0, "picked up = learned easily."),
      match("Literal or idiomatic?", [["pick up the rubbish", "literal"], ["pick up a language", "idiomatic"], ["take off your shoes", "literal"], ["the plane took off", "idiomatic"]], "Literal = you can see the movement."),
    ],
  },

  // ============================================================ UNIT 5 · READING
  {
    slug: "pre-int-reading-young-achievers",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: Two Young Achievers", topic: "Scanning for milestones",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-reading-kitchen-accidents"],
    objective: "Scan a profile for career milestones and evaluate the causes of success.",
    tags: ["reading", "reading-scanning", "reading-details", "cause-effect", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "Young people with early success (Unit 5)" },
    sections: [
      text("A profile of a successful person usually mentions **milestones**: important ages, dates, awards and goals. **Scan** for numbers and time expressions first, then read the sentences around them to understand **why** the person succeeded.", "Reading strategy"),
      passage("Example", "Mona is 14. She started painting at the age of five. Last year she won a national prize, and she is going to hold her first exhibition in May.", "A short profile"),
      list("Guided practice", ["Age started? → five.", "Achievement? → a national prize (last year).", "Future plan? → an exhibition in May."]),
    ],
    exercises: [
      mc("At what age did Lina learn to play chess?", ["six", "ten", "sixteen"], 0, "“She learned to play at the age of six.”", ACHIEVERS),
      mc("How many hours does Lina train every evening?", ["two", "three", "five"], 1, "“trains for three hours every evening”.", ACHIEVERS),
      sa("How old was Yusuf when he taught himself to write code? (write a number)", ["13", "thirteen"], "“When he was thirteen, he taught himself to write computer code.”", { context: ACHIEVERS }),
      mc("Why is Yusuf meeting a company in June?", ["They want to buy his idea.", "He needs a job.", "He wants to study."], 0, "“because they want to buy my idea.”", ACHIEVERS),
      tf("The profiles are about real people.", false, "The first sentence says the profiles are imaginary.", ACHIEVERS),
      mc("What do both young people say about success?", ["It is only luck.", "Hard work is the secret.", "Money is the secret."], 1, "“both say that hard work is the secret.”", ACHIEVERS),
    ],
  },

  // ============================================================ UNIT 5 · WRITING
  {
    slug: "pre-int-writing-plans-ambitions",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Writing About Your Plans and Ambitions", topic: "Structured text",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-writing-style-synonyms", "pre-int-grammar-future-forms"],
    objective: "Write a short, structured text about your plans, academic ambitions and long-term goals.",
    tags: ["writing", "writing-paragraph", "future", "plans", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Plans and ambitions (Unit 5)" },
    sections: [
      text("A text about your **future plans** needs a clear structure: **short-term plans**, **long-term ambitions** and **reasons**. You use **going to, would like to, hope to** and **want to**.", "Explanation"),
      table("Structure and language", ["Part", "Language", "Example"], [
        ["Short-term", "going to · Present Continuous", "Next month I'm starting a computer course."],
        ["Long-term", "would like to · hope to · want to", "One day I would like to open my own company."],
        ["Reason", "because · so that · in order to", "I want to study abroad because I would like to meet people from other countries."],
      ]),
      annotated("Model text", [
        ["Introduction", "After I finish school, I'm going to study engineering at Sultan Qaboos University."],
        ["Short-term", "Next year I'm starting an English course because I would like to study abroad."],
        ["Long-term", "In ten years I hope to work for an international company, and one day I would like to open my own business."],
        ["Conclusion", "I know it won't be easy, but I'm looking forward to the challenge."],
      ]),
      tip("Do not use will for a plan you already made. Use going to or the Present Continuous.", "Watch out"),
    ],
    exercises: [
      order("Put the sentences in order to make a paragraph.", ["After school, I'm going to study engineering.", "Next year I'm starting an English course.", "In ten years I hope to work for an international company.", "I'm looking forward to the challenge."], "paragraph", "Introduction, short-term, long-term, conclusion."),
      mc("Which sentence is a LONG-TERM ambition?", ["Next week I'm buying a book.", "One day I would like to open my own company.", "Tomorrow I'm meeting my teacher."], 1, "One day + would like to = a long-term ambition."),
      fill("I want to study abroad ___ I would like to meet people from other countries.", ["because"], "because gives a reason."),
      mist("Find the mistake.", ["I'm looking forward", "to start", "my new course."], 1, "to starting", "Look forward to + -ing."),
      order("Put the words in the correct order.", ["I", "hope", "to", "become", "a", "doctor."], "word", "Subject + hope + to + verb + noun."),
      mc("Which verb pattern is correct?", ["I would like study abroad.", "I would like to study abroad.", "I would like studying abroad."], 1, "would like + to-infinitive."),
    ],
  },

  // ============================================================ UNIT 6 · GRAMMAR
  {
    slug: "pre-int-grammar-for-since-pp-vs-ps",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "for, since and Present Perfect vs Past Simple", topic: "Present Perfect",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-grammar-present-perfect"],
    objective: "Use for and since with the Present Perfect and choose between the Present Perfect and the Past Simple.",
    tags: ["grammar", "present-perfect", "past-simple", "for-since", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Present Perfect; for and since (Unit 6)" },
    sections: [
      text("The **Present Perfect** connects the past with now: **unfinished actions** (I've lived here for ten years), **life experiences**, and **past actions with a present result**. **For** and **since** say how long.", "Explanation"),
      table("for and since", ["Word", "Meaning", "Example"], [
        ["for", "the length of time (duration)", "for two years · for ten minutes · for a long time"],
        ["since", "the starting point", "since 2019 · since Monday · since I was a child"],
      ]),
      table("Present Perfect or Past Simple?", ["Feature", "Present Perfect", "Past Simple"], [
        ["Time", "not finished / no time given", "finished, definite time (yesterday, in 2019)"],
        ["Example", "I have lived here since 2018.", "I lived in Cairo in 2015."],
        ["Question", "Have you ever been to Paris?", "When did you go to Paris?"],
      ]),
      structure("Structure", "have / has + past participle + for / since …\nPast Simple + finished time expression", "Never use a finished time word with the Present Perfect: not I have seen him yesterday."),
      examples("Examples", { "Unfinished": ["She has worked here for five years. (she still works here)"], "Finished": ["She worked there for five years. (she doesn't work there now)"], "Experience": ["I've visited Turkey twice."] }),
    ],
    exercises: [
      fill("I have lived in Sohar ___ 2018.", ["since"], "2018 is a starting point: since."),
      fill("She has been a teacher ___ ten years.", ["for"], "Ten years is a length of time: for."),
      mist("Find the mistake.", ["I", "have seen", "that film last night."], 1, "saw", "A finished time (last night): Past Simple."),
      match("for or since?", [["three weeks", "for"], ["Monday", "since"], ["a long time", "for"], ["I was a child", "since"]], "Length of time = for; starting point = since."),
      mc("“How long ___ you known him?” “Since 2015.”", ["did", "have", "do"], 1, "Present Perfect: How long have you known him?"),
      mc("Which sentence means she still lives in Muscat?", ["She lived in Muscat for ten years.", "She has lived in Muscat for ten years."], 1, "Present Perfect + for = unfinished."),
    ],
  },

  // ============================================================ UNIT 6 · VOCABULARY
  {
    slug: "pre-int-vocab-word-building-stress",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Word Building: Suffixes and Word Stress", topic: "Word formation",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-vocab-phrasal-verbs-literal-idiomatic"],
    objective: "Make nouns with common suffixes and notice how the stress can move in related words.",
    tags: ["vocabulary", "word-building", "suffixes", "pronunciation", "word-families", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Word building; word stress (Unit 6)" },
    sections: [
      text("Adding a **suffix** to a word makes a **new word**, often a **noun**. Knowing the common suffixes lets you build and recognise many words. Sometimes the **stress moves** in the new word."),
      table("Noun suffixes", ["Suffix", "Meaning", "Examples"], [
        ["-tion / -sion", "action or result", "invent → invention · decide → decision"],
        ["-ment", "action or result", "achieve → achievement · develop → development"],
        ["-ness", "quality", "happy → happiness · kind → kindness"],
        ["-er / -or", "person who does it", "teach → teacher · visit → visitor"],
        ["-ist", "person: job or belief", "art → artist · science → scientist"],
        ["-ian", "person: specialist", "music → musician · library → librarian"],
      ]),
      table("Word stress can move", ["Base word", "Related word", "Stressed syllable"], [
        ["'photograph", "pho'tographer", "1st → 2nd"], ["'music", "mu'sician", "1st → 2nd"], ["'politics", "poli'tician", "1st → 3rd"], ["e'conomy", "e'conomist", "stays on the 2nd"],
      ]),
      tip("Mark the stress in your notebook with a small line: pho'tographer.", "Study tip"),
    ],
    exercises: [
      fill("Her greatest ___ was winning the national prize. (achieve)", ["achievement"], "achieve + ment."),
      fill("Kindness is the quality of being ___. (adjective)", ["kind"], "kind → kindness."),
      match("Verb → noun.", [["invent", "invention"], ["decide", "decision"], ["develop", "development"], ["teach", "teacher"]], "Each suffix forms a noun."),
      mc("Which syllable is stressed in “photographer”?", ["the first", "the second", "the third"], 1, "pho'tographer: the second syllable."),
      mc("A person who plays music professionally is a ___.", ["musicist", "musician", "musical"], 1, "music + ian = musician."),
      sa("A person who studies science: a ___", ["scientist"], "science → scientist.", { hint: "s _ _ _ _ _ _ _ t" }),
    ],
  },

  // ============================================================ UNIT 6 · READING
  {
    slug: "pre-int-reading-family-history",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Reading: Tracing a Family History", topic: "Chronology and headings",
    difficulty: "CORE", minutes: 16, prereq: ["pre-int-reading-young-achievers"],
    objective: "Track a chronological text with sub-headings and combine information from different sections.",
    tags: ["reading", "reading-main-idea", "reading-details", "chronology", "present-perfect", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "History and family history (Unit 6)" },
    sections: [
      text("Longer texts often use **sub-headings**. Each heading tells you **what that section is about**. To answer questions, first use the headings to find the right section, then **track the order of events** with time words (first, then, since then).", "Reading strategy"),
      passage("Example", "THE PLAN\nOmar wants to trace his family tree.\nTHE RESULT\nSince January he has found records from five generations.", "Two sections"),
      list("Guided practice", ["Where do I find the reason he started? → THE PLAN.", "What did he find? → records from five generations (THE RESULT).", "Time clue: since January = the search is still going."]),
    ],
    exercises: [
      order("Put the events in the correct order.", ["Huda decided to research her family history.", "She interviewed her grandmother.", "She found her great-grandfather's name in the archive.", "She met three cousins."], "paragraph", "Follow the chronology of the text."),
      sa("How long has Huda been researching? (two words)", ["six months"], "“She has been researching for six months.”", { context: FAMILY }),
      mc("What was Huda's great-grandfather's job?", ["a boat builder", "a teacher", "a farmer"], 0, "“He was a boat builder in Sur.”", FAMILY),
      mc("Which heading tells you about the people Huda spoke to and the places she visited?", ["THE BEGINNING", "THE SEARCH", "WHAT SHE FOUND"], 1, "THE SEARCH describes her interviews and the archive visit.", FAMILY),
      mc("Why does the text use “has met” and “have collected”?", ["They show results connected with the present.", "They describe a finished past event.", "They describe the future."], 0, "The Present Perfect connects the past with now.", FAMILY),
      tf("Huda's grandmother has lived in the same village for eighty years.", true, "“who has lived in the same village for eighty years”.", FAMILY),
    ],
  },

  // ============================================================ UNIT 6 · WRITING
  {
    slug: "pre-int-writing-chronological-biography",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Writing a Chronological Biography", topic: "Chronological paragraph",
    difficulty: "CORE", minutes: 18, prereq: ["pre-int-writing-plans-ambitions", "pre-int-grammar-for-since-pp-vs-ps"],
    objective: "Organise a paragraph in time order, using time expressions and smooth transitions between paragraphs.",
    tags: ["writing", "writing-paragraph", "biography", "chronology", "transitions", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Biography; time expressions (Unit 6)" },
    sections: [
      text("A **biography** presents the events of a life in **time order**. Use **time expressions** to show life changes, and **transition phrases** to move smoothly from one paragraph to the next.", "Explanation"),
      table("Time expressions and transitions", ["Type", "Examples"], [
        ["Points in time", "in 1985 · at the age of ten · in the summer of 2001"],
        ["Order", "first · then · after that · later · eventually · finally"],
        ["Change of stage", "when she finished school · after he graduated · by the time he was thirty"],
        ["Paragraph transitions", "Some years later, … · Meanwhile, … · Since then, … · Today, …"],
      ]),
      annotated("Model biography", [
        ["Paragraph 1: early life", "Khalid was born in Nizwa in 1980. At the age of ten he became fascinated by the sea, and he spent every summer with his uncle, a fisherman."],
        ["Paragraph 2: career", "After he finished school, he studied marine biology in Cairo. Some years later he returned to Oman, and in 2010 he started working for a research institute."],
        ["Paragraph 3: present", "Since then, he has published twenty articles. Today he is teaching at a university and is planning a new project."],
      ]),
      tip("Use the Past Simple for finished events and the Present Perfect for things that continue up to now (Since then, he has published…).", "Tenses"),
    ],
    exercises: [
      order("Put the sentences in time order.", ["Khalid was born in Nizwa in 1980.", "At the age of ten he became fascinated by the sea.", "After school, he studied marine biology.", "In 2010 he started working for a research institute.", "Since then, he has published twenty articles."], "paragraph", "From birth to the present."),
      mc("Which phrase is best to start a new paragraph about the present?", ["Today,", "Yesterday,", "In 1980,"], 0, "Today, connects the biography to the present."),
      fill("___ he finished school, he studied medicine. (after that)", ["After"], "After + clause shows the next stage."),
      mist("Find the mistake.", ["He was born in 1980.", "Since then, he", "published twenty articles."], 2, "has published twenty articles", "With since then we use the Present Perfect."),
      order("Put the words in the correct order.", ["At", "the", "age", "of", "ten", "he", "started", "sailing."], "word", "Time expression + subject + verb + object."),
      mc("Which sentence uses the correct tense?", ["He has moved to Cairo in 2005.", "He moved to Cairo in 2005.", "He was moving to Cairo in 2005 finished."], 1, "A finished time (in 2005): Past Simple."),
    ],
  },
];

void [annotated, compare, examples, ms, tip, passage, sa];
