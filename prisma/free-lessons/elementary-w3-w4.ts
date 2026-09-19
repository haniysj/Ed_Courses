import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Elementary course, Teaching Weeks 3-4 (Units 3-4). Topics follow the academy's weekly report; all text is ORIGINAL.

const SWIMMER = "Hind is 17 and she is a swimmer. She comes from Sur, but now she lives in Muscat with her aunt. She trains every day from Sunday to Thursday. She gets up at half past four in the morning, and her coach, Mr Khalid, always meets her at the pool at five.\n\nOn Friday she never trains. It is her free day! In the evening her cousins usually cook a big dinner: rice, fish and salad. Hind doesn't eat sweets before a race, but on Saturday she sometimes has a small cake. She often watches videos of famous swimmers on her phone, and she loves listening to music before bed.";
const HOUSE = "Beit Al Nakheel is a heritage house in an old village near Nizwa. It has twelve rooms and two courtyards. In the front courtyard there is a big date palm and a small well.\n\nInside, there is a guest room with a beautiful carpet and a lot of cushions. There isn't a modern kitchen, but there is a traditional kitchen with a large stone oven. Upstairs there are four bedrooms and a roof terrace. From the roof, you can see the mountains.\n\nThe house is a museum now. The guide, Mr Salim, lives in a small flat behind the house.";

export const ELEMENTARY_W3_W4: SeedLesson[] = [
  // ================================================================ WEEK 3 · GRAMMAR
  {
    slug: "elementary-grammar-present-simple-plural",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Present Simple: I / You / We / They", topic: "Present Simple",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-third-person-s"],
    objective: "Talk about routines and hobbies with I, you, we and they: positive, negative, questions and short answers.",
    tags: ["grammar", "present-simple", "daily-routines", "hobbies", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Present Simple: I / you / we / they (Unit 3)" },
    sections: [
      text("With **I, you, we and they**, the Present Simple uses the **base form** of the verb, with no -s. We use it for habits, hobbies, routines and things that are generally true.", "Explanation"),
      list("When do we use it?", ["Routines: We finish work at four.", "Hobbies: They play cricket at the weekend.", "General truths: You need a ticket to enter the museum."]),
      table("The pattern", ["Type", "Form", "Example"], [
        ["Positive", "subject + base verb", "I live in Salalah."],
        ["Negative", "subject + don't + base verb", "We don't work on Fridays."],
        ["Question", "(question word) + do + subject + base verb?", "Where do you study?"],
        ["Short answers", "Yes, I do. / No, we don't.", "Do you play tennis? — Yes, I do."],
      ]),
      structure("Structure", "I / you / we / they + verb\nI / you / we / they + don't + verb\n(Wh-word) + do + I / you / we / they + verb?", "Useful question words: where, what, when, what time, how often."),
      examples("Examples", {
        Positive: ["I live in Sohar.", "They study English on Mondays."],
        Negative: ["I don't work on Sundays.", "We don't drink coffee at night."],
        Questions: ["Where do you live?", "What time do they start?", "Do you play football on Fridays?"],
      }),
    ],
    exercises: [
      fill("Where ___ you go on holiday in the summer?", ["do"], "Question with you: (Wh-word) + do + subject + base verb."),
      fill("I ___ (not / work) on Fridays.", [["don't work", "do not work"]], "Negative: don't + base verb."),
      mc("___ they play football on Saturdays?", ["Does", "Do", "Are"], 1, "They needs do: Do they play…?"),
      mist("Find the mistake.", ["We", "doesn't", "drink coffee at night."], 1, "don't", "We takes don't (not doesn't)."),
      sa("Answer with a short answer: “Do you live in Muscat?” — No, ___ .", ["I don't", "we don't"], "A negative short answer with do: No, I don't.", { hint: "two words" }),
      order("Put the words in order.", ["What", "time", "do", "you", "get", "up?"], "word", "Wh-words + do + subject + base verb."),
    ],
  },
  {
    slug: "elementary-grammar-adverbs-of-frequency",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Adverbs of Frequency: always, usually, often, sometimes, never", topic: "Adverbs of frequency",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-present-simple-plural"],
    objective: "Say how often something happens and put the adverb in the correct place in the sentence.",
    tags: ["grammar", "adverbs-of-frequency", "daily-routines", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Adverbs of frequency (Unit 3)" },
    sections: [
      text("**Adverbs of frequency** tell us **how often** something happens. They go together with the Present Simple and make routines more exact.", "Explanation"),
      table("The frequency scale", ["Adverb", "How often", "About"], [
        ["always", "every time", "100%"], ["usually", "most times", "80%"], ["often", "many times", "60%"],
        ["sometimes", "not every time", "40%"], ["never", "no times", "0%"],
      ]),
      list("Where do they go?", ["**Before the main verb**: I always walk to school. She never goes out on Monday.", "**After the verb to be**: He is often late. My cats are always hungry.", "**Sometimes** and **usually** can also go at the beginning or end: Sometimes I cook. I cook sometimes."]),
      structure("Structure", "subject + adverb + main verb\nsubject + am / is / are + adverb", "Never is already negative: say I never eat fish, not I don't never eat fish."),
      examples("Examples", { Positive: ["I always drink tea after lunch.", "They usually arrive at eight."], "With to be": ["She is often tired on Mondays.", "The buses are never late."] }),
    ],
    exercises: [
      order("Put the words in order.", ["I", "always", "walk", "to", "school."], "word", "Adverb of frequency goes before the main verb."),
      mc("He ___ late for school.", ["often is", "is often", "often"], 1, "After the verb to be: He is often late."),
      fill("She ___ eats meat. She's a vegetarian. (never)", ["never"], "Never = 0%, so it fits: She never eats meat."),
      mist("Find the mistake.", ["My dogs", "always are", "hungry."], 1, "are always", "After the verb to be we put the adverb: My dogs are always hungry."),
      match("Match the adverb with the percentage.", [["always", "100%"], ["often", "about 60%"], ["sometimes", "about 40%"], ["never", "0%"]], "The scale goes from always (100%) to never (0%)."),
      mc("Which sentence is correct?", ["I don't never drink coffee.", "I never drink coffee.", "I drink never coffee."], 1, "Never is already negative and goes before the verb."),
    ],
  },
  {
    slug: "elementary-grammar-like-ing",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Likes and Dislikes: like, love, enjoy, hate + -ing", topic: "Verb + -ing",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-adverbs-of-frequency"],
    objective: "Use like, love, enjoy and hate followed by the -ing form to talk about activities.",
    tags: ["grammar", "verb-ing", "hobbies", "likes-dislikes", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "like + -ing (Unit 3)" },
    sections: [
      text("When we talk about **what we like or dislike doing**, the verb after like, love, enjoy and hate takes the **-ing form**: I like **cooking**. She loves **listening** to music.", "Explanation"),
      list("When do we use it?", ["To say what we like: I like reading.", "To say what we don't like: He doesn't like swimming.", "To ask about hobbies: Do you enjoy cooking?"]),
      structure("Structure", "like / love / enjoy / hate + verb-ing\ndon't like / doesn't like + verb-ing", "Spelling: cook → cooking · swim → swimming (double m) · make → making (drop the e) · run → running."),
      examples("Examples", { Positive: ["I love cooking.", "We enjoy playing football."], Negative: ["He doesn't like swimming.", "I hate getting up early."], Questions: ["Do you like watching films?", "Does she enjoy running?"] }),
    ],
    exercises: [
      fill("I love ___ (cook) dinner at home.", ["cooking"], "love + verb-ing: cooking."),
      mc("She doesn't like ___ to the gym.", ["go", "going", "goes"], 1, "doesn't like + verb-ing: going."),
      mist("Find the mistake.", ["We", "enjoy", "to play football."], 2, "playing football", "After enjoy we use -ing: playing."),
      match("Match the verb with its -ing form.", [["swim", "swimming"], ["make", "making"], ["run", "running"], ["listen", "listening"]], "swim and run double the last letter; make drops the e."),
      sa("Rephrase: I prefer to cook dinner at home. (love) → I love ___ dinner at home.", ["cooking"], "love + verb-ing.", { hint: "cook…" }),
      tf("“He likes to swimming.” is correct.", false, "Use likes swimming (or likes to swim), not likes to swimming."),
    ],
  },

  // ================================================================ WEEK 3 · VOCABULARY
  {
    slug: "elementary-vocab-seasons-months",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Seasons and Months", topic: "Time",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-opposite-verbs"],
    objective: "Say the four seasons and twelve months correctly and use in with them.",
    tags: ["vocabulary", "time", "seasons", "months", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Seasons and months (Unit 3)" },
    sections: [
      text("There are **four seasons** and **twelve months** in a year. Months and seasons use **in**: in July, in summer. Month names always start with a **capital letter**."),
      table("Months", ["No.", "Month", "No.", "Month"], [
        ["1", "January", "7", "July"], ["2", "February", "8", "August"], ["3", "March", "9", "September"],
        ["4", "April", "10", "October"], ["5", "May", "11", "November"], ["6", "June", "12", "December"],
      ]),
      vocab([
        { word: "spring", pos: "noun", meaning: "the season after winter, when plants start to grow", ar: "الربيع", pron: "/sprɪŋ/", ex: "The flowers open in spring.", col: ["in spring"], visual: "🌸" },
        { word: "summer", pos: "noun", meaning: "the hottest season of the year", ar: "الصيف", pron: "/ˈsʌmə/", ex: "We go to the beach in summer.", col: ["in summer", "summer holiday"], visual: "☀️" },
        { word: "autumn", pos: "noun", meaning: "the season after summer, when leaves fall", ar: "الخريف", pron: "/ˈɔːtəm/", ex: "The weather is cooler in autumn.", col: ["in autumn"], note: "The last n is silent. American English also says fall.", visual: "🍂" },
        { word: "winter", pos: "noun", meaning: "the coldest season of the year", ar: "الشتاء", pron: "/ˈwɪntə/", ex: "It snows in winter in many countries.", col: ["in winter"], visual: "❄️" },
      ], "Seasons"),
    ],
    exercises: [
      match("Which season is it? (Northern Hemisphere)", [["December", "winter"], ["April", "spring"], ["July", "summer"], ["October", "autumn"]], "These months belong to the four seasons in the northern half of the world."),
      order("Put the months in the correct order.", ["January", "February", "March", "April"], "word", "The year starts with January."),
      fill("My birthday is ___ September.", ["in"], "Use in with months."),
      mc("Which season comes after summer?", ["spring", "autumn", "winter"], 1, "The order is spring, summer, autumn, winter."),
      sa("Write the season with a silent n: ___", ["autumn"], "Autumn has a silent n at the end.", { hint: "a _ _ _ _ n" }),
      mist("Find the mistake.", ["We go to the beach", "in", "july."], 2, "July", "Months start with a capital letter."),
    ],
  },
  {
    slug: "elementary-vocab-leisure-activities",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Free-Time Activities: go, play, watch, listen", topic: "Hobbies",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-seasons-months"],
    objective: "Choose the right verb (go, play, watch, listen to) for common free-time activities.",
    tags: ["vocabulary", "hobbies", "free-time", "collocations", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Leisure activities: play vs go (Unit 3)" },
    sections: [
      text("The verb we use depends on the activity. **go** is used for activities ending in **-ing** (swimming, running). **play** is used for **sports and games** with a ball or rules, and for **musical instruments**."),
      table("Which verb?", ["Verb", "Pattern", "Examples"], [
        ["go", "go + -ing", "go swimming, go cycling, go running, go fishing, go skiing"],
        ["play", "play + game / sport / instrument", "play tennis, play football, play computer games, play the guitar"],
        ["watch / listen to", "watch + TV / film; listen to + music", "watch TV, listen to music"],
      ]),
      vocab([
        { word: "go swimming", pos: "phrase", meaning: "to swim as a free-time activity", ar: "يذهب للسباحة", pron: "/ɡəʊ ˈswɪmɪŋ/", ex: "We go swimming on Fridays.", col: ["go cycling", "go running"], right: "I go swimming.", wrong: "I play swimming.", note: "Activities that end in -ing use go.", visual: "🏊" },
        { word: "play tennis", pos: "phrase", meaning: "to take part in the sport of tennis", ar: "يلعب التنس", pron: "/pleɪ ˈtenɪs/", ex: "She plays tennis every Saturday.", col: ["play football", "play golf"], right: "I play football.", wrong: "I play the football.", note: "No “the” before sports.", visual: "🎾" },
        { word: "play the guitar", pos: "phrase", meaning: "to make music with a guitar", ar: "يعزف على الجيتار", pron: "/pleɪ ðə ɡɪˈtɑː/", ex: "My brother plays the guitar.", col: ["play the piano", "play a musical instrument"], note: "With instruments we DO use the.", visual: "🎸" },
        { word: "watch TV", pos: "phrase", meaning: "to look at programmes on television", ar: "يشاهد التلفاز", pron: "/wɒtʃ ˌtiːˈviː/", ex: "We watch TV after dinner.", col: ["watch a film"], right: "I watch TV.", wrong: "I look TV.", visual: "📺" },
        { word: "listen to music", pos: "phrase", meaning: "to hear music carefully", ar: "يستمع إلى الموسيقى", pron: "/ˈlɪsn tə ˈmjuːzɪk/", ex: "She listens to music on the bus.", col: ["listen to the radio"], right: "I listen to music.", wrong: "I listen music.", note: "Listen needs to.", visual: "🎧" },
        { word: "cook", pos: "verb", meaning: "to prepare food with heat", ar: "يطبخ", pron: "/kʊk/", ex: "He cooks dinner on Fridays.", col: ["cook dinner", "cook rice"], visual: "🍳" },
      ], "Free-time phrases"),
    ],
    exercises: [
      match("Match the verb with the activity.", [["go", "swimming"], ["play", "tennis"], ["watch", "a film"], ["listen to", "music"]], "go + -ing; play + sport; watch + film; listen to + music."),
      mc("I ___ football on Fridays.", ["go", "play", "do"], 1, "Football is a game with a ball: play football."),
      mc("We ___ cycling in the evening.", ["go", "play", "watch"], 0, "Cycling is an -ing activity: go cycling."),
      mist("Find the mistake.", ["I", "listen", "music every night."], 1, "listen to", "Listen needs to: listen to music."),
      fill("My sister plays ___ guitar in a band.", ["the"], "With musical instruments we use the: the guitar."),
      mist("Find the mistake.", ["I", "play swimming", "on Fridays."], 1, "go swimming", "Swimming is an -ing activity: go swimming."),
    ],
  },

  // ================================================================ WEEK 3 · READING
  {
    slug: "elementary-reading-young-swimmer",
    level: "ELEMENTARY", category: "READING", title: "Reading: A Young Swimmer's Week", topic: "Routines",
    difficulty: "BASIC", minutes: 14, prereq: ["elementary-reading-two-jobs"],
    objective: "Find details about routines and frequency in a text about someone's week.",
    tags: ["reading", "reading-details", "reading-comprehension", "daily-routines", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "A sportsperson's week (Unit 3)" },
    sections: [
      text("Texts about routines use **adverbs of frequency** (always, usually, never, sometimes, often) and **time expressions** (every day, on Friday, at five). Look for these words to find the answer to **when** and **how often** questions.", "Reading strategy"),
      passage("Example", "Omar is a taxi driver. He usually starts work at six in the morning. He never works on Fridays, but he sometimes drives on Saturday night.", "A short routine"),
      list("Guided practice", ["When does Omar start work? → usually at six in the morning.", "Does Omar work on Fridays? → No, he never works on Fridays.", "How often does he drive on Saturday night? → sometimes."]),
    ],
    exercises: [
      mc("Where does Hind live now?", ["in Sur", "in Muscat", "at the pool"], 1, "“She comes from Sur, but now she lives in Muscat.”", SWIMMER),
      mc("What time does Hind get up?", ["half past four", "five o'clock", "half past five"], 0, "“She gets up at half past four in the morning.”", SWIMMER),
      tf("Hind trains on Fridays.", false, "“On Friday she never trains.”", SWIMMER),
      mc("Who meets Hind at the pool?", ["her cousins", "Mr Khalid", "her aunt"], 1, "Her coach, Mr Khalid, meets her.", SWIMMER),
      sa("What does Hind's family usually cook on Friday evening? Name one thing.", ["rice", "fish", "salad"], "“rice, fish and salad”.", { context: SWIMMER }),
      tf("Hind eats sweets before a race.", false, "“Hind doesn't eat sweets before a race.”", SWIMMER),
    ],
  },

  // ================================================================ WEEK 3 · WRITING
  {
    slug: "elementary-writing-form-filling",
    level: "ELEMENTARY", category: "WRITING", title: "Form Filling and Applications", topic: "Forms",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-writing-pronouns-cohesion"],
    objective: "Complete an application form correctly, using BLOCK CAPITALS and the right layout for dates and numbers.",
    tags: ["writing", "forms", "personal-information", "punctuation", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Filling in a form (Unit 3)" },
    sections: [
      text("Forms ask for **personal information**. Read each instruction carefully. Many forms ask you to write in **BLOCK CAPITALS** (all capital letters) so that the reader can read your name and address easily.", "Explanation"),
      table("Common form words", ["Form word", "What to write", "Example"], [
        ["Title", "Mr, Mrs, Ms or Miss", "Ms"],
        ["First name", "Your first name", "FATIMA"],
        ["Surname", "Your family name", "AL HARTHI"],
        ["DOB (date of birth)", "day / month / year (dd/mm/yy)", "14/03/06"],
        ["Postcode", "Your area code", "100"],
        ["Mobile number", "Your phone number", "9123 4567"],
        ["Occupation", "Your job or “student”", "STUDENT"],
      ]),
      list("Tips", ["Write clearly, one letter in each box.", "Use the same order for the date as the form shows (dd/mm/yy).", "Check your spelling before you sign.", "Answer every question, or write N/A if it does not apply."]),
      tip("Sign your name and write the date at the end of the form.", "Last step"),
    ],
    exercises: [
      match("Match the form word with the correct information.", [["Title", "Ms"], ["Surname", "AL HARTHI"], ["DOB", "14/03/06"], ["Occupation", "STUDENT"]], "Each field asks for one kind of information."),
      mc("Which title is for a married woman?", ["Mr", "Mrs", "Miss"], 1, "Mrs is used for a married woman (Ms can be used for any woman)."),
      mc("Which is written in BLOCK CAPITALS?", ["Fatima Al Harthi", "FATIMA AL HARTHI", "fatima al harthi"], 1, "Block capitals means all capital letters."),
      mist("Find the mistake. The form says DOB (dd/mm/yy).", ["Surname:", "Ahmed", "(this is the first name)"], 1, "Al Harthi", "The Surname box needs the family name, not the first name."),
      order("Put the steps in the correct order.", ["Read the instructions.", "Write in BLOCK CAPITALS.", "Check your spelling.", "Sign and date the form."], "paragraph", "First read, then write, then check, then sign."),
      tf("DOB means date of birth.", true, "DOB = date of birth."),
    ],
  },

  // ================================================================ WEEK 4 · GRAMMAR
  {
    slug: "elementary-grammar-there-is-are",
    level: "ELEMENTARY", category: "GRAMMAR", title: "There is / There are", topic: "there is / there are",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-like-ing"],
    objective: "Describe what exists in a place with there is and there are: positive, negative, questions and How many…?",
    tags: ["grammar", "there-is-are", "places", "home", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "there is / there are (Unit 4)" },
    sections: [
      text("We use **there is** and **there are** to say that something **exists** or **is present** in a place. Use **there is** for one thing and **there are** for two or more.", "Explanation"),
      list("When do we use it?", ["To describe a room or a house: There's a sofa in the living room.", "To say how many things there are: There are two bedrooms.", "To ask about facilities: Is there a shower?"]),
      table("Forms", ["Type", "Singular", "Plural"], [
        ["Positive", "There's a garden.", "There are two bedrooms."],
        ["Negative", "There isn't a lift.", "There aren't any chairs."],
        ["Question", "Is there a shower?", "Are there any carpets?"],
        ["Short answers", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."],
      ]),
      structure("Structure", "There is / There's + a / an + singular noun\nThere are + plural noun\nHow many + plural noun + are there?", "Answer to How many…?: There's one. / There are three."),
      examples("Examples", { Positive: ["There's a sofa in the living room.", "There are three windows."], Negative: ["There isn't a garden.", "There aren't any bookshelves."], Questions: ["Is there a fridge?", "How many bathrooms are there?"] }),
    ],
    exercises: [
      fill("___ a big table in the dining room.", ["There's"], "One table = singular: There's."),
      fill("There ___ two bedrooms in the flat.", ["are"], "Two bedrooms = plural: There are."),
      mc("___ a shower in the bathroom?", ["Are there", "Is there", "There is"], 1, "Singular question: Is there a shower?"),
      mist("Find the mistake.", ["There", "is", "three chairs in the kitchen."], 1, "are", "Three chairs is plural: There are three chairs."),
      sa("Give a short answer: “Is there a garden?” (No) — No, ___ .", ["there isn't", "there is not"], "Short negative answer: No, there isn't.", { hint: "there…" }),
      order("Put the words in order.", ["How", "many", "bathrooms", "are", "there?"], "word", "How many + plural noun + are there?"),
    ],
  },
  {
    slug: "elementary-grammar-some-any-a-lot-of",
    level: "ELEMENTARY", category: "GRAMMAR", title: "some, any and a lot of", topic: "Quantity",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-there-is-are"],
    objective: "Use some, any and a lot of with plural nouns in positive sentences, negatives and questions.",
    tags: ["grammar", "quantifiers", "home", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "some / any / a lot of (Unit 4)" },
    sections: [
      text("With **plural nouns** (pictures, chairs, books) we use **some**, **any** and **a lot of** to talk about quantity without giving an exact number.", "Explanation"),
      table("Which word?", ["Word", "Use in", "Example"], [
        ["some", "positive sentences", "There are some pictures on the wall."],
        ["any", "negatives and questions", "There aren't any towels. Are there any glasses?"],
        ["a lot of", "positive sentences (large quantity)", "She has a lot of books."],
      ]),
      structure("Structure", "There are some / a lot of + plural noun.\nThere aren't any + plural noun.\nAre there any + plural noun?", "In short answers we can say: Yes, there are some. / No, there aren't any."),
      examples("Examples", { Positive: ["We have some cushions.", "There are a lot of books in his room."], Negative: ["There aren't any chairs."], Questions: ["Are there any pictures? — Yes, there are some."] }),
    ],
    exercises: [
      fill("There are ___ pictures on the wall. (positive)", ["some"], "Positive sentence: some."),
      fill("There aren't ___ towels in the bathroom.", ["any"], "Negative: any."),
      mc("Are there ___ glasses on the table?", ["some", "any", "a lot"], 1, "Questions use any."),
      mist("Find the mistake.", ["There", "aren't some", "chairs in the room."], 1, "aren't any", "Negative sentences use any."),
      match("Which word fits?", [["We have ___ books. (a large number)", "a lot of"], ["I don't have ___ pens.", "any"], ["There are ___ flowers in the vase.", "some"]], "a lot of = many; any = negatives/questions; some = positives."),
      tf("“There isn't some milk.” is correct.", false, "Use any in negatives: There isn't any milk."),
    ],
  },
  {
    slug: "elementary-grammar-demonstratives",
    level: "ELEMENTARY", category: "GRAMMAR", title: "this, that, these, those", topic: "Demonstratives",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-some-any-a-lot-of"],
    objective: "Point to things that are near or far, singular or plural, with this, that, these and those.",
    tags: ["grammar", "demonstratives", "home", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "this / that / these / those (Unit 4)" },
    sections: [
      text("**Demonstratives** point to things. They show whether the thing is **near or far** and **singular or plural**.", "Explanation"),
      table("The four words", ["Number", "Near (here)", "Far (there)"], [["Singular", "this", "that"], ["Plural", "these", "those"]]),
      list("When do we use them?", ["**this / these**: things near you: This is my bag. These shoes are mine.", "**that / those**: things far from you: Look at that picture over there. Look at those people in the park."]),
      structure("Structure", "This / That + is + singular noun\nThese / Those + are + plural noun", "The verb agrees with the noun: this + is, these + are."),
      examples("Examples", { Near: ["This is my sofa.", "These cushions are new."], Far: ["That is my school over there.", "Those boys are my cousins."] }),
    ],
    exercises: [
      mc("(a book in your hand) ___ is my book.", ["This", "That", "Those"], 0, "Near + singular: this."),
      mc("(three cars far away) ___ cars are very old.", ["These", "Those", "That"], 1, "Far + plural: those."),
      fill("Look at ___ cushions over there on the sofa!", ["those"], "Far + plural: those."),
      mist("Find the mistake.", ["These", "is", "my shoes."], 1, "are", "These is plural, so use are (and the noun shoes)."),
      match("Near or far? Match the word.", [["this", "one thing, near"], ["these", "many things, near"], ["that", "one thing, far"], ["those", "many things, far"]], "Choose by number and distance."),
      tf("“Those” is used for plural things that are near you.", false, "Those is for plural things that are far. Near plural = these."),
    ],
  },

  // ================================================================ WEEK 4 · VOCABULARY
  {
    slug: "elementary-vocab-rooms-house-items",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Rooms and House Items", topic: "Home",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-leisure-activities"],
    objective: "Name the main rooms of a house and the furniture and objects in them.",
    tags: ["vocabulary", "home", "furniture", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Rooms and things in a house (Unit 4)" },
    sections: [
      text("Learn house words **by room**. It is easier to remember them when you imagine the room."),
      table("Words by room", ["Room", "Things"], [
        ["living room", "sofa, armchair, shelves, lamp, rug, picture"],
        ["kitchen", "cooker, fridge, kettle, plates, dishwasher, sink"],
        ["bathroom", "shower, towel, mirror, toilet, bath"],
      ]),
      vocab([
        { word: "sofa", pos: "noun", meaning: "a long, soft seat for two or three people", ar: "أريكة", pron: "/ˈsəʊfə/", ex: "There is a blue sofa in the living room.", col: ["a comfortable sofa"], visual: "🛋️" },
        { word: "fridge", pos: "noun", meaning: "a machine that keeps food cold", ar: "ثلاجة", pron: "/frɪdʒ/", ex: "The milk is in the fridge.", col: ["in the fridge"], note: "Short for refrigerator.", visual: "🧊" },
        { word: "cooker", pos: "noun", meaning: "the machine you use to cook food", ar: "طباخ", pron: "/ˈkʊkə/", ex: "There is a new cooker in the kitchen.", col: ["gas cooker"], visual: "🍳" },
        { word: "shower", pos: "noun", meaning: "a place where you wash under running water", ar: "دُش", pron: "/ˈʃaʊə/", ex: "The bathroom has a shower and a bath.", col: ["have a shower"], visual: "🚿" },
        { word: "mirror", pos: "noun", meaning: "a glass in which you can see yourself", ar: "مرآة", pron: "/ˈmɪrə/", ex: "There is a big mirror above the sink.", col: ["look in the mirror"], visual: "🪞" },
        { word: "lamp", pos: "noun", meaning: "a light on a table or on the floor", ar: "مصباح", pron: "/læmp/", ex: "She reads under a small lamp.", col: ["switch on the lamp"], visual: "💡" },
      ], "Key words"),
    ],
    exercises: [
      match("Which room is it usually in?", [["sofa", "living room"], ["cooker", "kitchen"], ["shower", "bathroom"], ["fridge", "kitchen"]], "Think about where you use each thing."),
      mc("You keep milk in the ___.", ["fridge", "lamp", "sofa"], 0, "A fridge keeps food cold."),
      mc("Which word is NOT in a bathroom?", ["towel", "shower", "cooker"], 2, "A cooker is a kitchen item."),
      fill("You sit on a ___ in the living room.", ["sofa"], "A sofa is a soft seat."),
      mist("Find the mistake.", ["There is", "a cooker", "in the bathroom."], 2, "in the kitchen", "A cooker is in the kitchen."),
      sa("You look at yourself in a ___.", ["mirror"], "A mirror shows your face.", { hint: "m _ _ _ _ r" }),
    ],
  },
  {
    slug: "elementary-vocab-prepositions-of-place",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Prepositions of Place", topic: "Places",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-rooms-house-items"],
    objective: "Say exactly where something is with in, on, under, next to, near, opposite, in front of, behind, between and more.",
    tags: ["vocabulary", "prepositions", "home", "places", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Prepositions of place (Unit 4)" },
    sections: [
      text("**Prepositions of place** tell us **where** something is. They are short words but very important when you describe a room or give directions."),
      table("Prepositions of place", ["Preposition", "Picture", "Example"], [
        ["in", "🥛 inside a box", "The milk is in the fridge."],
        ["on", "📘 touching the top", "The book is on the table."],
        ["under", "🐈 below", "The cat is under the chair."],
        ["next to", "beside", "The lamp is next to the sofa."],
        ["opposite", "face to face", "The bank is opposite the school."],
        ["in front of", "at the front", "The car is in front of the house."],
        ["behind", "at the back", "The garden is behind the house."],
        ["between", "in the middle of two", "The shop is between the bank and the pharmacy."],
      ]),
      list("Also useful", ["**near** = not far from: The school is near my house.", "**above / below**: The picture is above the sofa. The rug is below the table.", "**inside / outside**: The keys are inside the bag. The car is outside the house."]),
      compare("Common mistakes", [["The book is in the table.", "The book is on the table.", "Use on for a surface."], ["The shop is next the bank.", "The shop is next to the bank.", "next to needs to."]]),
    ],
    exercises: [
      fill("The cat is ___ the chair. (below it)", ["under"], "Below = under."),
      mc("The book is ___ the table. (on the surface)", ["in", "on", "between"], 1, "A surface = on."),
      mist("Find the mistake.", ["The shop is", "next", "the bank."], 1, "next to", "next needs to: next to the bank."),
      match("Match the meaning.", [["opposite", "face to face"], ["behind", "at the back of"], ["between", "in the middle of two things"], ["in front of", "at the front of"]], "Each preposition shows a different position."),
      mc("The pharmacy is ___ the bank and the school. (in the middle)", ["between", "behind", "under"], 0, "In the middle of two things = between."),
      order("Put the words in order.", ["The", "lamp", "is", "next", "to", "the", "sofa."], "word", "Subject + is + preposition + noun."),
    ],
  },

  // ================================================================ WEEK 4 · READING
  {
    slug: "elementary-reading-heritage-house",
    level: "ELEMENTARY", category: "READING", title: "Reading: A Heritage House", topic: "Describing places",
    difficulty: "BASIC", minutes: 14, prereq: ["elementary-reading-young-swimmer"],
    objective: "Find numbers and details about rooms and objects in a text that uses there is / there are.",
    tags: ["reading", "reading-details", "reading-scanning", "home", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "A famous building (Unit 4)" },
    sections: [
      text("Descriptions of buildings use **there is / there are**, numbers and **prepositions of place**. Read the question first, then scan for **numbers** and **place words** (in, upstairs, behind).", "Reading strategy"),
      passage("Example", "The library has two floors. On the ground floor, there is a big reading room. Upstairs there are ten computers and a small café.", "A short description"),
      list("Guided practice", ["How many floors? → two (a number).", "What is on the ground floor? → a big reading room.", "How many computers are there? → ten."]),
    ],
    exercises: [
      sa("How many rooms are there in Beit Al Nakheel? (write a number)", ["12", "twelve"], "“It has twelve rooms.”", { context: HOUSE }),
      mc("What is in the front courtyard?", ["a date palm and a small well", "a stone oven", "four bedrooms"], 0, "“In the front courtyard there is a big date palm and a small well.”", HOUSE),
      tf("There is a modern kitchen in the house.", false, "“There isn't a modern kitchen, but there is a traditional kitchen.”", HOUSE),
      mc("Where are the four bedrooms?", ["upstairs", "behind the house", "in the courtyard"], 0, "“Upstairs there are four bedrooms and a roof terrace.”", HOUSE),
      mc("What can you see from the roof?", ["the sea", "the mountains", "a big city"], 1, "“From the roof, you can see the mountains.”", HOUSE),
      mc("Where does Mr Salim live?", ["in a museum room", "in a small flat behind the house", "upstairs"], 1, "“Mr Salim lives in a small flat behind the house.”", HOUSE),
    ],
  },

  // ================================================================ WEEK 4 · WRITING
  {
    slug: "elementary-writing-describing-home",
    level: "ELEMENTARY", category: "WRITING", title: "Describing a Home: and, but, so, because", topic: "Linking words",
    difficulty: "BASIC", minutes: 14, prereq: ["elementary-writing-form-filling"],
    objective: "Write a short description of your home and join ideas with and, but, so and because.",
    tags: ["writing", "writing-paragraph", "connectors", "connectors-basic", "home", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Describing your home: linking words (Unit 4)" },
    sections: [
      text("A good description has **short, clear sentences** and uses **linking words** to join ideas. Four simple linkers do most of the work.", "Explanation"),
      table("Four useful linkers", ["Linker", "Job", "Example"], [
        ["and", "adds information", "I love my flat and I like your flat, too."],
        ["but", "shows a contrast", "My flat is small, but it is comfortable."],
        ["so", "gives a result", "It's near the centre, so I walk to work."],
        ["because", "gives a reason", "I like it because it's very quiet."],
      ]),
      annotated("Model paragraph", [
        ["Where it is", "I live in a small flat in Muscat. It is near the sea, so I often walk on the beach."],
        ["Inside", "There are two bedrooms and a living room. The flat isn't big, but it is very comfortable."],
        ["My opinion", "I like my flat because it is quiet and the neighbours are friendly."],
      ]),
      tip("Put a comma before but and so when they join two full sentences: It is small, but it is comfortable.", "Punctuation"),
    ],
    exercises: [
      fill("My flat is small, ___ it is comfortable.", ["but"], "Small and comfortable are a contrast: but."),
      fill("It's near the university, ___ I walk to class.", ["so"], "Walking is the result of being near: so."),
      fill("I like my house ___ it is quiet.", ["because"], "Because gives the reason."),
      mc("Which sentence uses and correctly?", ["I have a sofa and a lamp.", "I have a sofa but a lamp.", "I have a sofa so a lamp."], 0, "And adds two things."),
      order("Put the sentences in order to make a paragraph.", ["I live in a small flat.", "It has two bedrooms and a kitchen.", "It isn't big, but it is comfortable.", "I like it because it is quiet."], "paragraph", "Where → what is in it → contrast → opinion."),
      mist("Find the mistake.", ["My flat is old", "so", "it is beautiful."], 1, "but", "Old and beautiful are a contrast, so use but."),
    ],
  },
];

void [compare, examples, ms, tf, tip];
