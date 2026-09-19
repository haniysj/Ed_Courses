import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Elementary course, Teaching Weeks 7-8 (Units 7-8). Topics follow the academy's weekly report; all text is ORIGINAL.

const THINKERS = "Fatima al-Fihri lived in the city of Fez, in Morocco, more than a thousand years ago. She used her family's money to build a place of learning, the University of al-Qarawiyyin, which opened in 859. Many students travelled to the city to study there. Today, people say it is one of the oldest universities in the world.\n\nIbn al-Haytham was a scientist who lived about a thousand years ago. He studied light and asked an important question: how do we see things? He did careful experiments, and he wrote a famous book about his ideas. Scientists read his work for many centuries.";
const COFFEE = "Coffee is one of the most popular drinks in the world, but people did not always drink it. Long ago, coffee plants grew wild in the mountains of Ethiopia. Farmers in Yemen began to grow the plants and to make a hot drink from the dark seeds.\n\nTraders carried the coffee across the sea to other countries, and soon there were coffee houses in busy cities. People met their friends there, talked and listened to stories. Hundreds of years ago, coffee reached Europe. Today, millions of people drink it every morning.";

export const ELEMENTARY_W7_W8: SeedLesson[] = [
  // ================================================================ WEEK 7 · GRAMMAR
  {
    slug: "elementary-grammar-past-questions-ago",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Past Simple Questions and ago", topic: "Past Simple",
    difficulty: "CORE", minutes: 12, prereq: ["elementary-grammar-past-simple"],
    objective: "Ask and answer Past Simple questions and say how long ago something happened with ago.",
    tags: ["grammar", "past-simple", "questions", "time-expressions", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Past Simple questions; ago (Unit 7)" },
    sections: [
      text("To ask about the past we use **did** + subject + **base verb**. To say **how long before now** something happened, we use **ago** after a time period: two years **ago**.", "Explanation"),
      list("When do we use it?", ["To ask about finished events: When did you arrive?", "To ask how long something lasted: How long did they live in Spain?", "To say how far back in time: I met him three days ago."]),
      table("Question patterns", ["Type", "Form", "Example"], [
        ["Yes / no", "Did + subject + base verb?", "Did you watch the match? — Yes, I did."],
        ["Wh-question", "Wh-word + did + subject + base verb?", "When did you last see him?"],
        ["Time with ago", "time period + ago", "two years ago, ten minutes ago, a month ago"],
      ]),
      structure("Structure", "Wh-word + did + subject + base verb?\ntime period + ago (always AFTER the time period)", "After did we always use the base verb: Did she go? (not Did she went?)"),
      examples("Examples", { Questions: ["Where did you go last summer?", "How long did they live in Spain?"], Answers: ["I went to Salalah.", "They returned two years ago."] }),
    ],
    exercises: [
      mc("When ___ you last see him?", ["do", "did", "were"], 1, "Past question: did + subject + base verb."),
      fill("I met her three years ___.", ["ago"], "Ago goes after the time period: three years ago."),
      mist("Find the mistake.", ["Where did", "you went", "last summer?"], 1, "you go", "After did we use the base verb: Where did you go?"),
      order("Put the words in order.", ["How", "long", "did", "they", "live", "in", "Spain?"], "word", "Wh-words + did + subject + base verb."),
      mc("Which sentence is correct?", ["I visited Cairo ago two years.", "I visited Cairo two years ago.", "I visited Cairo ago two years ago."], 1, "Two years ago: ago comes after the time period."),
      sa("Give a short answer: “Did you watch the film?” (No) — No, ___.", ["I didn't", "I did not"], "Negative short answer: No, I didn't.", { hint: "two words" }),
    ],
  },
  {
    slug: "elementary-grammar-prepositions-of-time",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Prepositions of Time: in, on, at", topic: "Prepositions of time",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-past-questions-ago"],
    objective: "Choose in, on or at correctly with months, days, dates and times.",
    tags: ["grammar", "prepositions", "time", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "in / on / at (Unit 7)" },
    sections: [
      text("We use **in, on and at** to say **when** something happens. Each one goes with a different kind of time. Think of them as three sizes: **in** = long periods, **on** = days, **at** = exact points.", "Explanation"),
      table("in, on or at?", ["Preposition", "Use with", "Examples"], [
        ["in", "months, years, centuries, seasons, parts of the day", "in July, in 2018, in the 20th century, in summer, in the morning"],
        ["on", "days and dates, special days", "on Saturday, on 10th October, on National Day"],
        ["at", "exact times, night, the weekend", "at 7 o'clock, at night, at the weekend"],
      ]),
      structure("Structure", "in + month / year / season / morning · on + day / date · at + time / night", "We say in the morning, in the afternoon, in the evening — but at night."),
      examples("Examples", { in: ["We arrived in 2019.", "It is very hot in summer."], on: ["The meeting is on Monday.", "My birthday is on the fifth of May."], at: ["The film starts at nine o'clock.", "He works at night."] }),
    ],
    exercises: [
      match("in, on or at?", [["July", "in"], ["Monday", "on"], ["7 o'clock", "at"], ["the morning", "in"], ["10th October", "on"], ["night", "at"]], "in = months and parts of the day; on = days and dates; at = times and night."),
      fill("We arrived in London ___ 2019, ___ a cold morning ___ January.", ["in", "on", "in"], "in 2019 (year); on a cold morning (a particular morning); in January (month)."),
      mc("He goes to bed ___ midnight.", ["in", "on", "at"], 2, "Exact time: at midnight."),
      mist("Find the mistake.", ["The class starts", "at Monday", "morning."], 1, "on Monday", "Days need on: on Monday."),
      mc("I love the sea ___ summer.", ["on", "in", "at"], 1, "Seasons take in: in summer."),
      fill("She works ___ night and sleeps in the morning.", ["at"], "At night."),
    ],
  },

  // ================================================================ WEEK 7 · VOCABULARY
  {
    slug: "elementary-vocab-manner-adverbs",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Manner Adverbs: slowly, well, hard, fast", topic: "Adverbs",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-ordinals-dates"],
    objective: "Make and use manner adverbs to say how something is done.",
    tags: ["vocabulary", "adverbs", "manner", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Manner adverbs (Unit 7)" },
    sections: [
      text("**Manner adverbs** say **how** something happens. Most are made by adding **-ly** to an adjective: quick → quick**ly**. A few are irregular."),
      table("Making adverbs", ["Rule", "Adjective → adverb"], [
        ["Most words: + -ly", "quick → quickly · slow → slowly · careful → carefully"],
        ["Ends in -y: y → -ily", "happy → happily · easy → easily"],
        ["Ends in -l: + -ly", "sad → sadly · final → finally"],
        ["Irregular", "good → WELL · fast → fast · hard → hard · early → early"],
      ]),
      vocab([
        { word: "slowly", pos: "adverb", meaning: "not fast", ar: "ببطء", pron: "/ˈsləʊli/", ex: "Please speak slowly.", col: ["walk slowly", "drive slowly"], visual: "🐢" },
        { word: "carefully", pos: "adverb", meaning: "with attention, to avoid mistakes or danger", ar: "بحذر", pron: "/ˈkeəfəli/", ex: "He drove carefully in the rain.", col: ["listen carefully"], visual: "🧐" },
        { word: "well", pos: "adverb", meaning: "in a good way (the adverb of good)", ar: "جيدًا", pron: "/wel/", ex: "She sings very well.", col: ["speak well", "play well"], right: "She plays well.", wrong: "She plays good.", note: "Good is an adjective. Well is the adverb.", visual: "👍" },
        { word: "hard", pos: "adverb / adjective", meaning: "with a lot of effort", ar: "بجد", pron: "/hɑːd/", ex: "They work hard every day.", col: ["work hard", "study hard"], right: "He works hard.", wrong: "He works hardly.", note: "Hardly means almost not. The adverb of hard is hard.", visual: "💪" },
      ], "Key adverbs"),
    ],
    exercises: [
      fill("Please speak ___. I can't understand you. (slow)", ["slowly"], "Slow + -ly = slowly."),
      mc("She plays the piano very ___.", ["good", "well", "goodly"], 1, "The adverb of good is well."),
      mist("Find the mistake.", ["He", "works hardly", "every day."], 1, "works hard", "The adverb of hard is hard."),
      match("Match the adjective with its adverb.", [["quick", "quickly"], ["happy", "happily"], ["good", "well"], ["fast", "fast"]], "Most add -ly; happy → happily; good → well; fast stays the same."),
      fill("He drove very ___ in the rain. (careful)", ["carefully"], "careful + ly = carefully."),
      mc("Which word is both an adjective and an adverb?", ["quickly", "fast", "happily"], 1, "Fast is the same in both forms: a fast car; he runs fast."),
    ],
  },

  // ================================================================ WEEK 7 · READING
  {
    slug: "elementary-reading-two-thinkers",
    level: "ELEMENTARY", category: "READING", title: "Reading: Two Great Thinkers", topic: "History",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-lost-phone"],
    objective: "Find facts, places and dates in a short factual text about people in the past.",
    tags: ["reading", "reading-details", "reading-scanning", "history", "past-simple", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "People from history (Unit 7)" },
    sections: [
      text("Factual texts about the past give **dates, places and names**. The verbs are in the **Past Simple**. Scan for **capital letters** (names and places) and **numbers** (dates) first, then read the sentence around them.", "Reading strategy"),
      passage("Example", "Marie lived in Paris. She studied science and worked with her husband. In 1903 she won an important prize.", "A short factual text"),
      list("Guided practice", ["Where did Marie live? → Paris (a place, capital letter).", "What did she study? → science.", "When did she win a prize? → 1903 (a date)."]),
    ],
    exercises: [
      mc("Where did Fatima al-Fihri live?", ["in Fez, Morocco", "in Cairo", "in Muscat"], 0, "“Fatima al-Fihri lived in the city of Fez, in Morocco.”", THINKERS),
      mc("What did Fatima build?", ["a school for children only", "a place of learning (a university)", "a hospital"], 1, "“She used her family's money to build a place of learning.”", THINKERS),
      sa("In which year did the university open? (write a number)", ["859"], "“…which opened in 859.”", { context: THINKERS }),
      mc("What did Ibn al-Haytham study?", ["light", "animals", "maps"], 0, "“He studied light.”", THINKERS),
      tf("Ibn al-Haytham did experiments.", true, "“He did careful experiments.”", THINKERS),
      tf("Scientists stopped reading his work after one year.", false, "“Scientists read his work for many centuries.”", THINKERS),
    ],
  },

  // ================================================================ WEEK 7 · WRITING
  {
    slug: "elementary-writing-story-past",
    level: "ELEMENTARY", category: "WRITING", title: "Telling a Story in the Past", topic: "Narrative",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-writing-biography"],
    objective: "Write a short past story with a beginning, a main event and an ending, using manner adverbs.",
    tags: ["writing", "writing-paragraph", "narrative", "past-simple", "adverbs", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Narrative: telling a story (Unit 7)" },
    sections: [
      text("A good story has **three parts**: the **background** (when and where), the **main event** (what happened), and the **ending** (how it finished). We write in the **Past Simple**. **Manner adverbs** (slowly, carefully) make the story more interesting.", "Explanation"),
      table("Story structure", ["Part", "Useful language", "Example"], [
        ["Background", "One sunny afternoon in 2015, …", "One sunny afternoon, I walked slowly along the beach."],
        ["Main event", "Suddenly, … / Then …", "Suddenly, I saw a small boat."],
        ["Ending", "In the end, … / Finally, …", "In the end, the fisherman took me home."],
      ]),
      annotated("Model story", [
        ["Background", "One quiet evening, Huda walked slowly along the beach near her house."],
        ["Main event", "Suddenly, she heard a small cry. She looked carefully and found a tiny cat under a boat."],
        ["Ending", "In the end, she took the cat home, and it lived happily with her family."],
      ]),
      tip("Use a comma after openers: Suddenly, … · In the end, …", "Punctuation"),
    ],
    exercises: [
      order("Put the story in the correct order.", ["One quiet evening, Salim walked slowly along the road.", "Suddenly, he saw a small light in the sky.", "He watched it carefully for a long time.", "In the end, he learned it was just a plane."], "paragraph", "Background, main event, details, ending."),
      mc("Which opener begins the MAIN EVENT?", ["One sunny afternoon in 2015,", "Suddenly,", "In the end,"], 1, "Suddenly introduces the main event."),
      fill("___, the rain stopped and we went home. (ending)", [["In the end", "Finally"]], "In the end / Finally introduce the ending."),
      mist("Find the mistake.", ["She", "walked slow", "along the beach."], 1, "walked slowly", "A manner adverb needs -ly: walked slowly."),
      mc("Which tense do we use for a story about the past?", ["Present Simple", "Past Simple", "Future"], 1, "Stories about the past use the Past Simple."),
      tf("The BACKGROUND tells us what happened at the end of the story.", false, "The background says when and where the story begins."),
    ],
  },

  // ================================================================ WEEK 8 · GRAMMAR
  {
    slug: "elementary-grammar-countable-uncountable",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Countable and Uncountable Nouns", topic: "Nouns",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-prepositions-of-time"],
    objective: "Tell countable and uncountable nouns apart and use the correct verb and article.",
    tags: ["grammar", "countable-uncountable", "nouns", "food", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Countable and uncountable nouns (Unit 8)" },
    sections: [
      text("**Countable nouns** can be counted: one apple, two apples. They have a **plural**. **Uncountable nouns** are substances or ideas that we don't count one by one: milk, rice, money. They have **no plural** and take a **singular verb**.", "Explanation"),
      list("When do we use it?", ["Countable: an egg, three eggs, a biscuit, some biscuits.", "Uncountable: bread, milk, cheese, coffee, pasta, money.", "Uncountable nouns take singular verbs: Milk is good for you. The rice is hot."]),
      table("Countable or uncountable?", ["Feature", "Countable", "Uncountable"], [
        ["Article", "a / an: an apple", "no a / an: some rice"],
        ["Plural", "apples, biscuits", "no plural: NOT breads"],
        ["Verb", "Apples are cheap.", "Rice is cheap."],
        ["To count", "two apples", "two glasses of milk / a piece of bread"],
      ]),
      structure("Structure", "a / an + countable singular · some + plural or uncountable\na glass of / a piece of / a bag of + uncountable noun", "To count an uncountable noun, use a container or a piece: a glass of milk, a bag of rice."),
      examples("Examples", { Countable: ["I bought some apples.", "There is an egg in the fridge."], Uncountable: ["I need some money.", "Milk is good for you.", "I'd like a glass of water."] }),
    ],
    exercises: [
      match("Countable or uncountable?", [["apple", "countable"], ["milk", "uncountable"], ["biscuit", "countable"], ["money", "uncountable"], ["rice", "uncountable"]], "Can you say one, two, three? If not, it is uncountable."),
      mc("Milk ___ good for you.", ["is", "are", "am"], 0, "Uncountable nouns take singular verbs."),
      mist("Find the mistake.", ["Rice", "are", "cheap in this shop."], 1, "is", "Rice is uncountable: rice is cheap."),
      mc("Which is correct?", ["two breads", "two pieces of bread", "two bread"], 1, "Count uncountable nouns with a piece of / a loaf of."),
      fill("I'd like a ___ of water, please.", [["glass", "bottle"]], "Containers for uncountable nouns: a glass / bottle of water."),
      tf("“Information” can have a plural: informations.", false, "It is uncountable: some information."),
    ],
  },
  {
    slug: "elementary-grammar-quantifiers",
    level: "ELEMENTARY", category: "GRAMMAR", title: "some, any, much, many and a lot of", topic: "Quantity",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-grammar-countable-uncountable"],
    objective: "Use some, any, much, many and a lot of with countable and uncountable nouns.",
    tags: ["grammar", "quantifiers", "countable-uncountable", "food", "shopping", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "some / any / much / many / a lot of (Unit 8)" },
    sections: [
      text("Quantifiers say **how much or how many**. Which one you choose depends on two things: is the noun **countable or uncountable**, and is the sentence **positive, negative or a question**?", "Explanation"),
      table("Choosing the quantifier", ["Word", "Countable (plural)", "Uncountable", "Sentence type"], [
        ["some", "some apples", "some cheese", "positive (and offers / requests)"],
        ["any", "any eggs", "any milk", "negative and questions"],
        ["a lot of", "a lot of books", "a lot of sugar", "positive"],
        ["many", "many biscuits", "—", "negative and questions"],
        ["much", "—", "much oil", "negative and questions"],
      ]),
      list("Special case: offers and requests", ["Use **some** in questions when you offer or ask for something: Would you like **some** coffee? Can I have **some** water?"]),
      structure("Structure", "How many + countable plural…?   How much + uncountable…?\nThere isn't much + uncountable.   There aren't many + plural.", "How many apples do you want? — How much rice is there?"),
      examples("Examples", { Positive: ["There is some cheese.", "I bought a lot of apples."], Negative: ["We don't have any eggs.", "There isn't much oil."], Questions: ["How much rice is there?", "How many biscuits are there?"] }),
    ],
    exercises: [
      fill("How ___ money do you need for lunch?", ["much"], "Money is uncountable: how much."),
      fill("There aren't ___ tomatoes left, so please buy ___ at the shop.", ["any", "some"], "Negative: any; positive request: some."),
      mc("How ___ eggs are there in the box?", ["much", "many", "some"], 1, "Eggs are countable: how many."),
      mist("Find the mistake.", ["Would you like", "any", "coffee?"], 1, "some", "In an offer we use some."),
      match("much or many?", [["water", "much"], ["oranges", "many"], ["sugar", "much"], ["books", "many"]], "Countable plural → many; uncountable → much."),
      mc("Which sentence is correct?", ["There aren't much biscuits.", "There aren't many biscuits.", "There aren't any biscuit."], 1, "Biscuits are countable, so many."),
    ],
  },
  {
    slug: "elementary-grammar-like-would-like",
    level: "ELEMENTARY", category: "GRAMMAR", title: "like and would like", topic: "Requests and preferences",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-quantifiers"],
    objective: "Use like for general preferences and would like for offers and requests.",
    tags: ["grammar", "would-like", "requests", "food", "shopping", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "like vs would like (Unit 8)" },
    sections: [
      text("**Like** and **would like** are different. **Like** talks about **things you enjoy in general**. **Would like** ('d like) is **polite** and is used for a **specific wish now**: in a café, in a shop or in an offer.", "Explanation"),
      table("like or would like?", ["Word", "Meaning", "Example"], [
        ["like", "general preference (always)", "I like Italian food. (I enjoy it in general.)"],
        ["would like / 'd like", "specific wish now (polite)", "I'd like a glass of water, please. (I want it now.)"],
      ]),
      list("Patterns", ["Offer: Would you like some tea?", "Request: I'd like a coffee, please.", "Answer: Yes, please. / No, thank you."]),
      structure("Structure", "I'd like + noun     I'd like to + verb\nWould you like + noun / to + verb?", "Don't say I like a coffee, please when you order: say I'd like a coffee, please."),
      examples("Examples", { like: ["I like pizza.", "Do you like fish?"], "would like": ["I'd like a pizza, please.", "Would you like to sit down?"] }),
    ],
    exercises: [
      fill("What would you like to drink? I ___ an orange juice, please.", [["'d like", "would like"]], "A polite request: I'd like."),
      mc("You are in a café. What do you say?", ["I like a coffee, please.", "I'd like a coffee, please.", "I am like a coffee."], 1, "For a request now: I'd like."),
      match("General or specific?", [["I like tea.", "general"], ["I'd like some tea, please.", "specific (now)"], ["Would you like some tea?", "specific (an offer)"], ["Do you like fish?", "general"]], "like = general; would like = specific / polite."),
      mist("Find the mistake.", ["Would you", "like to", "coffee?"], 1, "like some", "Would you like + noun: Would you like some coffee?"),
      order("Put the words in order.", ["Would", "you", "like", "some", "water?"], "word", "Would + you + like + noun?"),
      tf("“I like a glass of water, please” is the polite way to ask.", false, "Use would like: I'd like a glass of water, please."),
    ],
  },

  // ================================================================ WEEK 8 · VOCABULARY
  {
    slug: "elementary-vocab-food-categories",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Food Groups: Meat, Fish, Vegetables and Fruit", topic: "Food",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-manner-adverbs"],
    objective: "Name common foods and put them into groups: meat and fish, vegetables and fruit.",
    tags: ["vocabulary", "food", "shopping", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Food and drink categories (Unit 8)" },
    sections: [
      text("Grouping words by **category** helps you remember them and shop or order food. Remember: many of these words are **countable** (tomatoes, carrots) and some are **uncountable** (rice, fish)."),
      table("Food groups", ["Group", "Words"], [
        ["Meat and fish", "chicken, beef, ham, sausages, fish, tuna"],
        ["Vegetables", "tomatoes, onions, carrots, peas, potatoes, broccoli"],
        ["Fruit", "apples, bananas, strawberries, grapes, dates"],
      ]),
      vocab([
        { word: "chicken", pos: "noun (uncountable when it is food)", meaning: "the meat of a chicken", ar: "دجاج", pron: "/ˈtʃɪkɪn/", ex: "We have chicken and rice for lunch.", col: ["grilled chicken"], visual: "🍗" },
        { word: "tomatoes", pos: "noun (plural)", meaning: "round red vegetables (a fruit, technically) used in salads", ar: "طماطم", pron: "/təˈmɑːtəʊz/", ex: "Add two tomatoes to the salad.", col: ["fresh tomatoes"], note: "Plural: tomato → tomatoes (add -es).", visual: "🍅" },
        { word: "carrots", pos: "noun (plural)", meaning: "long orange vegetables", ar: "جزر", pron: "/ˈkærəts/", ex: "Rabbits like carrots.", col: ["boiled carrots"], visual: "🥕" },
        { word: "bananas", pos: "noun (plural)", meaning: "long yellow fruit", ar: "موز", pron: "/bəˈnɑːnəz/", ex: "I eat two bananas at breakfast.", col: ["a bunch of bananas"], visual: "🍌" },
        { word: "strawberries", pos: "noun (plural)", meaning: "small, sweet, red fruit", ar: "فراولة", pron: "/ˈstrɔːbəriz/", ex: "She likes strawberries with cream.", col: ["fresh strawberries"], note: "Plural: strawberry → strawberries (y → ies).", visual: "🍓" },
        { word: "potatoes", pos: "noun (plural)", meaning: "a hard, round vegetable that grows under the ground", ar: "بطاطس", pron: "/pəˈteɪtəʊz/", ex: "We eat potatoes with fish.", col: ["boiled potatoes"], visual: "🥔" },
      ], "Key words"),
    ],
    exercises: [
      match("Which group?", [["chicken", "meat"], ["carrots", "vegetable"], ["bananas", "fruit"], ["tuna", "fish"], ["onions", "vegetable"]], "Sort each word into its food group."),
      mc("Which word is a fruit?", ["potatoes", "strawberries", "onions"], 1, "Strawberries are fruit."),
      mc("Which word is NOT a vegetable?", ["carrots", "peas", "beef"], 2, "Beef is meat."),
      fill("One tomato, two ___.", ["tomatoes"], "Plural of tomato: tomatoes."),
      sa("Plural of strawberry: ___", ["strawberries"], "Consonant + y → -ies.", { hint: "strawberr…" }),
      mist("Find the mistake.", ["I ate", "two chickens", "for lunch (the food)."], 1, "some chicken", "Chicken as food is uncountable: some chicken."),
    ],
  },
  {
    slug: "elementary-vocab-daily-needs",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Things You Buy at the Pharmacy and High Street", topic: "Shopping",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-food-categories"],
    objective: "Name everyday products you buy at a pharmacy or supermarket and ask for them politely.",
    tags: ["vocabulary", "shopping", "health", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Everyday products (Unit 8)" },
    sections: [
      text("Pharmacies and big shops sell many small **everyday things**. You need these words to shop for yourself and to ask for help."),
      table("Everyday products", ["Word", "Use"], [
        ["aspirin", "a tablet for pain (headache)"], ["plasters", "small sticky bandages for cuts"], ["shampoo", "liquid for washing your hair"],
        ["toothpaste", "cream you put on a toothbrush"], ["suncream", "cream that protects your skin from the sun"], ["tissues", "soft paper for your nose"],
      ]),
      vocab([
        { word: "aspirin", pos: "noun (uncountable)", meaning: "a medicine for pain", ar: "أسبرين", pron: "/ˈæsprɪn/", ex: "I take aspirin for a headache.", col: ["a packet of aspirin"], visual: "💊" },
        { word: "plasters", pos: "noun (plural)", meaning: "small sticky bandages for a cut", ar: "لاصقات جروح", pron: "/ˈplɑːstəz/", ex: "I need some plasters for my finger.", col: ["a box of plasters"], visual: "🩹" },
        { word: "toothpaste", pos: "noun (uncountable)", meaning: "cream for cleaning your teeth", ar: "معجون أسنان", pron: "/ˈtuːθpeɪst/", ex: "Buy some toothpaste, please.", col: ["a tube of toothpaste"], right: "a tube of toothpaste", wrong: "a toothpaste", note: "Uncountable: use a tube of.", visual: "🪥" },
        { word: "suncream", pos: "noun (uncountable)", meaning: "cream that protects your skin from the sun", ar: "كريم واقي من الشمس", pron: "/ˈsʌnkriːm/", ex: "Put on suncream before you go to the beach.", col: ["put on suncream"], visual: "🧴" },
      ], "Key products"),
    ],
    exercises: [
      match("What is it for?", [["aspirin", "a headache"], ["plasters", "a cut on your finger"], ["toothpaste", "cleaning your teeth"], ["suncream", "protecting your skin from the sun"]], "Match the product with its use."),
      mc("You have a headache. You buy ___.", ["aspirin", "shampoo", "suncream"], 0, "Aspirin is a medicine for pain."),
      fill("Can I have a ___ of toothpaste, please?", ["tube"], "Countable container for toothpaste: a tube."),
      mist("Find the mistake.", ["I need", "a toothpaste", "and some plasters."], 1, "some toothpaste", "Toothpaste is uncountable."),
      mc("Which is the polite way to ask in a shop?", ["Give me plasters.", "I'd like some plasters, please.", "Plasters."], 1, "Use I'd like… please."),
      sa("You wash your hair with ___.", ["shampoo"], "Shampoo is for washing hair.", { hint: "s _ _ _ _ _ o" }),
    ],
  },

  // ================================================================ WEEK 8 · READING
  {
    slug: "elementary-reading-story-of-coffee",
    level: "ELEMENTARY", category: "READING", title: "Reading: The Story of Coffee", topic: "History of food",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-two-thinkers"],
    objective: "Follow the history of a food in a short text and answer detail questions.",
    tags: ["reading", "reading-details", "reading-comprehension", "food", "history", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "The history of a food (Unit 8)" },
    sections: [
      text("Texts about the **history of things** put events in order: **long ago, then, soon, today**. To answer, find the time word and read the sentence after it. Ask: **Who? Where? What?**", "Reading strategy"),
      passage("Example", "Long ago, people in the hills ate wild dates. Later, farmers planted date palms near their homes. Today, dates are a favourite snack in many countries.", "A short history"),
      list("Guided practice", ["What did people eat long ago? → wild dates.", "What did farmers do later? → planted date palms.", "What are dates today? → a favourite snack."]),
    ],
    exercises: [
      mc("Where did coffee plants grow wild long ago?", ["in Ethiopia", "in Europe", "in Yemen"], 0, "“coffee plants grew wild in the mountains of Ethiopia.”", COFFEE),
      mc("Who began to grow the plants and make a hot drink?", ["farmers in Yemen", "traders in Europe", "students in Fez"], 0, "“Farmers in Yemen began to grow the plants.”", COFFEE),
      mc("What did traders do?", ["They carried coffee across the sea.", "They built coffee houses in Ethiopia.", "They stopped drinking coffee."], 0, "“Traders carried the coffee across the sea to other countries.”", COFFEE),
      ms("Select TWO things people did in coffee houses.", ["met their friends", "grew coffee plants", "listened to stories", "sold cars"], [0, 2], "“People met their friends there, talked and listened to stories.”", COFFEE),
      tf("Coffee reached Europe only last year.", false, "“Hundreds of years ago, coffee reached Europe.”", COFFEE),
      mc("What is the best title for the text?", ["The Story of Coffee", "How to Make Tea", "A Trip to Europe"], 0, "The whole text is about how coffee spread around the world.", COFFEE),
    ],
  },

  // ================================================================ WEEK 8 · WRITING
  {
    slug: "elementary-writing-formal-informal",
    level: "ELEMENTARY", category: "WRITING", title: "Formal and Informal Writing", topic: "Register",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-writing-story-past"],
    objective: "Choose the right style (informal for friends, formal for customers or landlords) and adjust your greetings, requests and endings.",
    tags: ["writing", "register", "formal-writing", "email", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Formal and informal style (Unit 8)" },
    sections: [
      text("The **style** of your writing depends on **who reads it**. We write **informally** to friends and family, and **formally** to customers, teachers, managers or landlords.", "Explanation"),
      table("Informal and formal", ["Part", "Informal (a friend)", "Formal (a landlord)"], [
        ["Greeting", "Hi Sami,", "Dear Mr Nasser,"],
        ["Thanks", "Thanks a lot!", "Thank you very much for your message."],
        ["Request", "Can you send me the photos?", "I am writing to ask if you could send me the details."],
        ["Short forms", "I can't come. (fine)", "I cannot come. (no short forms)"],
        ["Ending", "See you soon! / Lots of love,", "Best wishes, / Yours sincerely,"],
      ]),
      annotated("Two short messages", [
        ["Informal", "Hi Sami, thanks for the invitation! I can't come on Friday, sorry. See you soon, Nora"],
        ["Formal", "Dear Mr Nasser, thank you very much for your message. I am writing to ask if the flat has a parking space. Best wishes, Nora Al Balushi"],
      ]),
      tip("If you are not sure, formal is the safer choice for someone you do not know.", "Remember"),
    ],
    exercises: [
      match("Formal or informal?", [["Hi Sami,", "informal"], ["Dear Mr Nasser,", "formal"], ["Lots of love,", "informal"], ["Yours sincerely,", "formal"], ["Thanks a lot!", "informal"]], "Friends: hi, thanks a lot, lots of love. Formal: Dear, Yours sincerely."),
      mc("You write to your landlord. Which greeting is best?", ["Hi Mr Nasser,", "Dear Mr Nasser,", "Hey,"], 1, "Dear + title + surname."),
      mist("Find the mistake (a formal email).", ["Dear Mr Nasser,", "I can't come on Friday.", "Best wishes."], 1, "I cannot come on Friday.", "Formal writing avoids short forms."),
      mc("Which ending is informal?", ["Yours sincerely,", "See you soon!", "Best wishes,"], 1, "See you soon is friendly and informal."),
      order("Put the formal email in order.", ["Dear Mr Nasser,", "I am writing to ask about the flat.", "Thank you very much for your message.", "Best wishes,"], "paragraph", "Greeting, reason, thanks, ending."),
      tf("You can use “Hey!” at the start of an email to your manager.", false, "Use Dear + name for a manager: a formal greeting."),
    ],
  },
];

void [compare, examples, tip, sa];
