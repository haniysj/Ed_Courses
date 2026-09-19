import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Beginner course, Teaching Weeks 9-10 (Units 13-14) and final revision. Topics follow the academy's syllabus; all text is ORIGINAL.

const NOT_USUAL = "Sara usually works in a bank. She gets up at six, and she goes to work by bus. But today is different. It is Friday, and she is on holiday. She is not at work. She is at the beach with her family. She is wearing a hat and sunglasses. Her children are swimming, and her husband is reading a book. Sara is sitting under an umbrella and drinking orange juice. She is very happy.";
const BIG_EVENTS = "LAYLA\nLayla was born in Sohar in 1998. She went to university in Muscat, and she studied medicine. Now she works in a hospital: she is a doctor. Next year, she is going to study in London.\n\nOMAR\nOmar was born in Salalah. He played football when he was a boy, and he went to a football school. Now he plays for a team, and he trains every day. In June, he is going to play in an important match.\n\nNASSER\nNasser was a bus driver for twenty years. Now he is a driving teacher, and he teaches young people. Next month, he is going to visit his brother in Dubai.";
const GARDEN = "PICTURE: a family in a garden\n🏡 a house  ·  🌳 a big tree next to the house  ·  🪑 a bench\n👨 the father: reading a newspaper on the bench (white shirt, grey trousers)\n👩 the mother: drinking tea (green dress)\n👦 the boy: playing football (red T-shirt, blue shorts)\n👧 the girl: sitting under the tree (yellow dress)\n🐈 the cat: sleeping next to the girl";

export const BEGINNER_W9_W10: SeedLesson[] = [
  // ============================================================ WEEK 9 · GRAMMAR
  {
    slug: "beginner-grammar-present-continuous",
    level: "BEGINNER", category: "GRAMMAR", title: "Present Continuous: am / is / are + -ing", topic: "Present Continuous",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-grammar-some-any"],
    objective: "Say what is happening now with the Present Continuous.",
    tags: ["grammar", "present-continuous", "actions-now", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Present Continuous (Unit 13)" },
    sections: [
      text("Use the **Present Continuous** for an action that is **happening now**. Use **am / is / are** + the **-ing form** of the verb.", "Explanation"),
      table("Forms", ["Type", "Form", "Example"], [
        ["Positive", "am / is / are + verb-ing", "I am reading. She is playing. They are swimming."],
        ["Negative", "am / is / are + not + verb-ing", "He isn't sleeping. We aren't working."],
        ["Question", "Am / Is / Are + subject + verb-ing?", "Are you watching TV? What is he doing?"],
        ["Short answers", "Yes, I am. / No, she isn't.", "Is she reading? — Yes, she is."],
      ]),
      table("Spelling of -ing", ["Rule", "Example"], [["+ -ing", "play → playing · read → reading"], ["ends in -e: drop e", "make → making · write → writing"], ["one vowel + one consonant: double", "run → running · swim → swimming · sit → sitting"]]),
      structure("Structure", "subject + am / is / are + verb-ing", "Time words: now, at the moment, today."),
    ],
    exercises: [
      fill("The boy ___ (play) football now.", ["is playing"], "is + playing."),
      fill("We ___ (swim) in the sea at the moment.", ["are swimming"], "are + swimming."),
      mist("Find the mistake.", ["She", "is sit", "under the tree."], 1, "is sitting", "sit → sitting (double t) + is."),
      mc("They ___ football now.", ["play", "are playing", "plays"], 1, "Now: are playing."),
      order("Put the words in the correct order.", ["What", "are", "you", "doing", "now?"], "word", "What + are + subject + verb-ing."),
      sa("Write the -ing form of “run”: ___", ["running"], "run → running.", { hint: "run + n + ing" }),
    ],
  },
  {
    slug: "beginner-grammar-present-simple-vs-continuous",
    level: "BEGINNER", category: "GRAMMAR", title: "Present Simple or Present Continuous?", topic: "Present tenses",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-grammar-present-continuous"],
    objective: "Choose between the Present Simple (routines) and the Present Continuous (now).",
    tags: ["grammar", "present-simple", "present-continuous", "contrast", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Present Simple vs Present Continuous (Unit 13)" },
    sections: [
      text("Use the **Present Simple** for **routines** and **facts**. Use the **Present Continuous** for **things happening now**.", "Explanation"),
      table("Simple or continuous?", ["Feature", "Present Simple", "Present Continuous"], [
        ["Meaning", "every day, always, usually", "now, at the moment, today"], ["Example", "I work in a bank.", "I'm working at home today."], ["Example", "She plays tennis on Fridays.", "She is playing tennis now."],
      ]),
      structure("Structure", "Present Simple: I work · she works\nPresent Continuous: I am working · she is working", "Look at the time words: every day → simple; now → continuous."),
    ],
    exercises: [
      mc("I usually ___ to work by bus, but today I ___ by car.", ["go / am going", "am going / go", "go / go"], 0, "Usually = routine; today = now."),
      fill("She ___ (work) in a bank. Today she ___ (stay) at home.", ["works", "is staying"], "Routine: works. Today: is staying."),
      mist("Find the mistake.", ["Look! The children", "play", "in the garden."], 1, "are playing", "Look! = now: are playing."),
      match("Simple or continuous?", [["He goes to school every day.", "Present Simple"], ["He is going to school now.", "Present Continuous"], ["They are eating lunch.", "Present Continuous"], ["We always drink tea.", "Present Simple"]], "Every day = simple; now = continuous."),
      order("Put the words in the correct order.", ["She", "usually", "goes", "to", "work", "by", "bus."], "word", "Adverb before the verb."),
      sa("Write the negative: They are watching TV. → They ___ TV.", ["aren't watching", "are not watching"], "aren't watching.", { hint: "aren't …" }),
    ],
  },

  // ============================================================ WEEK 9 · VOCABULARY
  {
    slug: "beginner-vocab-clothes-colours",
    level: "BEGINNER", category: "VOCABULARY", title: "Clothes and Colours", topic: "Clothes",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-vocab-adjectives-opposites"],
    objective: "Name clothes and colours and put the colour before the noun.",
    tags: ["vocabulary", "clothes", "colours", "describing-people", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Clothes and colours (Unit 13)" },
    sections: [
      text("The colour goes **before the noun**: a **red** T-shirt. Use **wear** for clothes: She is **wearing** a blue dress."),
      list("Colours", ["red, blue, green, yellow, white, black, grey, brown, pink, orange"]),
      vocab([
        { word: "T-shirt", pos: "noun", meaning: "a light shirt with short sleeves", ar: "تي شيرت", pron: "/ˈtiː ʃɜːt/", ex: "He is wearing a red T-shirt.", col: ["a white T-shirt"], visual: "👕" },
        { word: "dress", pos: "noun", meaning: "a piece of clothing for a woman or girl", ar: "فستان", pron: "/dres/", ex: "She is wearing a yellow dress.", col: ["a long dress"], visual: "👗" },
        { word: "trousers", pos: "noun (plural)", meaning: "clothes for your legs", ar: "بنطال", pron: "/ˈtraʊzəz/", ex: "He is wearing grey trousers.", col: ["a pair of trousers"], right: "grey trousers", wrong: "a trouser", note: "Trousers is always plural.", visual: "👖" },
        { word: "shoes", pos: "noun (plural)", meaning: "you wear them on your feet", ar: "حذاء", pron: "/ʃuːz/", ex: "She has new black shoes.", col: ["a pair of shoes"], visual: "👟" },
        { word: "hat", pos: "noun", meaning: "you wear it on your head", ar: "قبعة", pron: "/hæt/", ex: "He is wearing a blue hat.", col: ["wear a hat"], visual: "🧢" },
      ], "Clothes"),
    ],
    exercises: [
      order("Put the words in the correct order.", ["She", "is", "wearing", "a", "yellow", "dress."], "word", "a + colour + noun."),
      match("Which clothes?", [["hat", "on your head"], ["shoes", "on your feet"], ["trousers", "on your legs"], ["dress", "for a woman"]], "Match the clothes with where you wear them."),
      mist("Find the mistake.", ["He is wearing", "a trousers", "."], 1, "trousers", "Trousers is plural: no a."),
      mc("He is wearing a ___ T-shirt. (colour)", ["red", "hat", "shoes"], 0, "red is a colour."),
      fill("She ___ wearing a white dress.", ["is"], "She is wearing."),
      sa("You wear a ___ on your head.", ["hat"], "A hat.", { hint: "h _ t" }),
    ],
  },
  {
    slug: "beginner-vocab-opposite-verbs",
    level: "BEGINNER", category: "VOCABULARY", title: "Opposite Verbs: buy / sell, ask / answer, put on / take off", topic: "Verbs",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-clothes-colours"],
    objective: "Learn common verbs and their opposites.",
    tags: ["vocabulary", "verbs", "opposites", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Opposite verbs (Unit 13)" },
    sections: [
      text("Some verbs have an **opposite**. Learn them in **pairs**."),
      table("Opposite verbs", ["Verb", "Opposite", "Example"], [
        ["buy", "sell", "I buy fruit. The shop sells fruit."], ["ask", "answer", "The teacher asks. The students answer."], ["put on", "take off", "Put on your coat. Take off your shoes."],
        ["open", "close", "Open the window. Close the door."], ["come", "go", "Come here! Go home!"],
      ]),
    ],
    exercises: [
      match("Match the opposites.", [["buy", "sell"], ["ask", "answer"], ["put on", "take off"], ["open", "close"], ["come", "go"]], "Learn the pairs."),
      fill("It's cold. ___ your coat. (put)", ["Put on"], "put on your coat."),
      mc("The shop ___ fruit and vegetables.", ["sells", "buys", "asks"], 0, "A shop sells."),
      fill("The teacher asks a question. The student ___ it.", ["answers"], "ask ↔ answer."),
      mist("Find the mistake.", ["Please", "open", "the door. It's cold."], 1, "close", "It's cold: close the door."),
      sa("The opposite of “take off” is ___.", ["put on"], "put on.", { hint: "two words" }),
    ],
  },

  // ============================================================ WEEK 9 · READING
  {
    slug: "beginner-reading-not-usual-day",
    level: "BEGINNER", category: "READING", title: "Reading: Not the Usual Day", topic: "Routine vs now",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-reading-meals-world"],
    objective: "Tell the difference between a usual routine and an action happening now.",
    tags: ["reading", "reading-details", "present-continuous", "contrast", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "Today's different (Unit 13)" },
    sections: [
      text("Some texts compare a **usual day** (Present Simple) with a **different day** (Present Continuous). Look for **usually** and **today** or **now**.", "Reading strategy"),
      passage("Example", "Ali usually works in an office. Today he is on holiday. He is sitting on the beach.", "Usual vs today"),
      list("Guided practice", ["Usually → works in an office.", "Today → sitting on the beach."]),
    ],
    exercises: [
      mc("What does Sara usually do?", ["She works in a bank.", "She goes to the beach.", "She stays at home."], 0, "“Sara usually works in a bank.”", NOT_USUAL),
      mc("Where is Sara today?", ["at the beach", "at the bank", "at home"], 0, "“She is at the beach with her family.”", NOT_USUAL),
      mc("What is Sara wearing?", ["a hat and sunglasses", "a coat", "a uniform"], 0, "“She is wearing a hat and sunglasses.”", NOT_USUAL),
      mc("What are the children doing?", ["swimming", "reading", "sleeping"], 0, "“Her children are swimming”.", NOT_USUAL),
      mc("What is her husband doing?", ["reading a book", "swimming", "working"], 0, "“her husband is reading a book”.", NOT_USUAL),
      mc("How does Sara feel?", ["very happy", "tired", "angry"], 0, "“She is very happy.”", NOT_USUAL),
    ],
  },

  // ============================================================ WEEK 9 · WRITING (PICTURE DESCRIPTION)
  {
    slug: "beginner-writing-picture-1-setting-actions",
    level: "BEGINNER", category: "WRITING", title: "Picture Description (1): Setting the Scene and Actions", topic: "Picture description",
    difficulty: "BASIC", minutes: 14, prereq: ["beginner-grammar-present-continuous", "beginner-writing-describing-room"],
    objective: "Describe a scene: say where things are with there is / there are and say what people are doing.",
    tags: ["writing", "picture-description", "there-is-are", "present-continuous", "prepositions", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Picture description: setting and actions (Unit 13)" },
    sections: [
      text("In **Task B** of the writing exam you look at a **picture** and write **50–60 words**. Build your answer in **three steps**. In this lesson, learn steps **1** and **2**.", "Explanation"),
      table("Three steps", ["Step", "What to write", "Language", "Example"], [
        ["1 Setting", "Where it is and what there is", "There is / There are + in, on, next to, under", "There is a family in the garden. There is a big tree next to the house."],
        ["2 Actions", "What each person is doing", "is / are + verb-ing", "The boy is playing football. The cat is sleeping."],
        ["3 Appearance", "What people wear", "is wearing + colour + clothes", "She is wearing a yellow dress."],
      ]),
      passage("Picture (words)", GARDEN, "Study the picture information"),
      annotated("Steps 1 and 2", [
        ["1 Setting", "There is a family in the garden. There is a big tree next to the house, and there is a bench under the tree."],
        ["2 Actions", "The father is reading a newspaper. The mother is drinking tea. The boy is playing football, and the cat is sleeping next to the girl."],
      ]),
      tip("Use the Present Continuous (is / are + -ing) for actions in the picture. Use there is / there are for what you see.", "Grammar check"),
    ],
    exercises: [
      order("Put the words in the correct order.", ["There", "is", "a", "big", "tree", "next", "to", "the", "house."], "word", "There is + a + adjective + noun + place."),
      order("Put the words in the correct order.", ["The", "boy", "is", "playing", "football."], "word", "The + noun + is + verb-ing."),
      fill("The mother ___ (drink) tea.", ["is drinking"], "is + drinking."),
      fill("There ___ a cat next to the girl.", ["is"], "One cat: there is."),
      mist("Find the mistake.", ["The father", "reads", "a newspaper now."], 1, "is reading", "Now in a picture: Present Continuous."),
      mc("Which sentence sets the scene?", ["There is a family in the garden.", "The boy is happy.", "She likes tea."], 0, "There is … in … sets the scene."),
    ],
  },
  {
    slug: "beginner-writing-picture-2-appearance-clothing",
    level: "BEGINNER", category: "WRITING", title: "Picture Description (2): Appearance and Clothing", topic: "Picture description",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-writing-picture-1-setting-actions", "beginner-vocab-clothes-colours"],
    objective: "Describe what people in a picture are wearing with is / are wearing + colour + clothes.",
    tags: ["writing", "picture-description", "clothes", "colours", "adjectives", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Picture description: appearance and clothing (Unit 13)" },
    sections: [
      text("Step **3** of a picture description is **appearance and clothes**. Use **is wearing** (one person) or **are wearing** (more than one). The **colour** goes **before** the clothes: a **red** T-shirt, **blue** shorts.", "Explanation"),
      table("Clothes sentences", ["Person", "Sentence"], [
        ["the boy", "The boy is wearing a red T-shirt and blue shorts."],
        ["the girl", "The girl is wearing a yellow dress."],
        ["the father", "The father is wearing a white shirt and grey trousers."],
        ["the children", "The children are wearing hats."],
      ]),
      structure("Structure", "subject + is / are wearing + (a) + colour + clothes", "Do not use a with plural clothes: grey trousers (not a grey trousers)."),
      tip("Words with hair and eyes: She has long brown hair. He has short black hair.", "Optional"),
    ],
    exercises: [
      order("Put the words in the correct order.", ["The", "girl", "is", "wearing", "a", "yellow", "dress."], "word", "is wearing + a + colour + noun."),
      order("Put the words in the correct order.", ["The", "father", "is", "wearing", "grey", "trousers."], "word", "No a with trousers."),
      fill("The boy ___ wearing a red T-shirt.", ["is"], "Singular: is wearing."),
      fill("The children ___ wearing hats.", ["are"], "Plural: are wearing."),
      mist("Find the mistake.", ["The girl", "is wearing", "a dress yellow."], 2, "a yellow dress", "The colour goes before the noun."),
      match("Who is wearing what?", [["the boy", "a red T-shirt and blue shorts"], ["the girl", "a yellow dress"], ["the father", "a white shirt and grey trousers"]], "Use the picture information."),
    ],
  },
  {
    slug: "beginner-writing-picture-3-full-description",
    level: "BEGINNER", category: "WRITING", title: "Picture Description (3): A Full 50–60 Word Answer", topic: "Picture description",
    difficulty: "BASIC", minutes: 16, prereq: ["beginner-writing-picture-2-appearance-clothing"],
    objective: "Combine setting, actions and clothing into one complete 50–60 word picture description.",
    tags: ["writing", "picture-description", "exam-practice", "paragraph", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Picture description mastery, 50-60 words (Unit 13)" },
    sections: [
      text("Now put the **three steps** together: **setting**, **actions**, **appearance**. Write **50–60 words** in **one paragraph**.", "Explanation"),
      passage("The picture", GARDEN, "Look at the picture information"),
      annotated("A complete answer (about 60 words)", [
        ["1 Setting", "There is a family in the garden. There is a big tree next to the house."],
        ["2 Actions", "The father is reading a newspaper, and the mother is drinking tea. The boy is playing football. The girl is sitting under the tree, and the cat is sleeping next to her."],
        ["3 Appearance", "The boy is wearing a red T-shirt and blue shorts. The girl is wearing a yellow dress."],
      ]),
      list("Checklist", ["50–60 words.", "There is / There are for the setting.", "is / are + -ing for actions.", "is / are wearing + colour + clothes.", "Capital letters and full stops."]),
    ],
    exercises: [
      order("Put the sentences in the correct order to make a description.", ["There is a family in the garden.", "The father is reading a newspaper.", "The boy is playing football.", "The girl is wearing a yellow dress."], "paragraph", "Setting, actions, appearance."),
      mc("Which sentence is about APPEARANCE?", ["The boy is wearing a red T-shirt.", "There is a tree in the garden.", "The cat is sleeping."], 0, "wearing = appearance."),
      mc("Which sentence is about the SETTING?", ["There is a big tree next to the house.", "The boy is playing.", "She is wearing a hat."], 0, "There is … next to … = setting."),
      mist("Find the mistake.", ["The mother", "drink", "tea now."], 1, "is drinking", "Present Continuous."),
      order("Put the words in the correct order.", ["The", "cat", "is", "sleeping", "next", "to", "the", "girl."], "word", "The + noun + is + verb-ing + place."),
      mc("How many words should you write?", ["50–60", "5–10", "200"], 0, "The exam task asks for about 50–60 words."),
    ],
  },

  // ============================================================ WEEK 10 · GRAMMAR
  {
    slug: "beginner-grammar-going-to-future",
    level: "BEGINNER", category: "GRAMMAR", title: "Future Plans: going to and the Present Continuous", topic: "Future",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-grammar-present-simple-vs-continuous"],
    objective: "Talk about future plans with going to and the Present Continuous.",
    tags: ["grammar", "going-to", "future", "plans", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "going to; Present Continuous for future (Unit 14)" },
    sections: [
      text("Use **going to** for **plans** and **intentions**. You can also use the **Present Continuous** with a **future time** for a fixed plan.", "Explanation"),
      table("Future plans", ["Form", "Structure", "Example"], [
        ["going to", "am / is / are + going to + verb", "I'm going to visit my aunt. She is going to study in London."],
        ["Negative", "am / is / are + not + going to + verb", "He isn't going to come."],
        ["Question", "Am / Is / Are + subject + going to + verb?", "Are you going to travel?"],
        ["Present Continuous (future)", "am / is / are + verb-ing + future time", "I'm meeting my friend tomorrow."],
      ]),
      list("Future time words", ["tomorrow · next week · next month · next year · in June · this weekend"]),
      structure("Structure", "subject + be + going to + base verb", "After going to, use the base verb (not -ing): I'm going to play (not going to playing)."),
    ],
    exercises: [
      fill("She ___ (go) to study in London next year.", ["is going to"], "is going to + study."),
      fill("We ___ (visit) my aunt this weekend. (going to)", ["are going to visit"], "are going to visit."),
      mist("Find the mistake.", ["I'm going", "to playing", "football tomorrow."], 1, "to play", "After going to use the base verb."),
      order("Put the words in the correct order.", ["Are", "you", "going", "to", "travel", "next", "week?"], "word", "Are + subject + going to + verb."),
      mc("Which sentence is about the future?", ["I'm meeting my friend tomorrow.", "I met my friend yesterday.", "I meet my friend every day."], 0, "tomorrow = future."),
      sa("Make it negative: He is going to come. → He ___ going to come.", ["isn't", "is not"], "isn't.", { hint: "isn't" }),
    ],
  },
  {
    slug: "beginner-grammar-three-tenses",
    level: "BEGINNER", category: "GRAMMAR", title: "Three Tenses Together: Past, Present and Future", topic: "Tense integration",
    difficulty: "BASIC", minutes: 14, prereq: ["beginner-grammar-going-to-future"],
    objective: "Choose and form the Past Simple, Present Simple / Continuous and going to in one text.",
    tags: ["grammar", "tenses", "past-simple", "present-simple", "going-to", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Past, present and future integration (Unit 14)" },
    sections: [
      text("You can talk about **the past, the present and the future** about one person. Use **time words** to choose the tense.", "Explanation"),
      table("Which tense?", ["Time", "Tense", "Example"], [
        ["yesterday · last year · in 2015 · ago", "Past Simple", "She went to school in Sohar."],
        ["now · usually · every day · today", "Present Simple / Continuous", "She works in a hospital. She is working today."],
        ["tomorrow · next year · in June", "going to / Present Continuous", "She is going to study in London."],
      ]),
      annotated("One person, three times", [
        ["Past", "Layla was born in Sohar. She studied medicine in Muscat."],
        ["Present", "Now she works in a hospital."],
        ["Future", "Next year, she is going to study in London."],
      ]),
    ],
    exercises: [
      match("Which tense?", [["She went to school yesterday.", "Past Simple"], ["She works in a hospital now.", "Present Simple"], ["She is going to study next year.", "going to"]], "Use the time words."),
      fill("Last year, I ___ (go) to Dubai. Now I ___ (live) in Muscat.", ["went", "live"], "Last year: went. Now: live."),
      fill("Next month, we ___ (visit) my aunt. (going to)", ["are going to visit"], "are going to visit."),
      mist("Find the mistake.", ["Tomorrow, I", "went", "to the market."], 1, "am going to go", "Tomorrow = future."),
      mc("Yesterday she ___ a new bag.", ["buys", "bought", "is going to buy"], 1, "Yesterday = Past Simple: bought."),
      order("Put the words in the correct order.", ["Next", "year", "she", "is", "going", "to", "study", "in", "London."], "word", "Time + subject + is going to + verb + place."),
    ],
  },

  // ============================================================ WEEK 10 · VOCABULARY
  {
    slug: "beginner-vocab-transport",
    level: "BEGINNER", category: "VOCABULARY", title: "Transport", topic: "Transport",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-opposite-verbs"],
    objective: "Name forms of transport and say how you travel with by.",
    tags: ["vocabulary", "transport", "travel", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Forms of transport (Unit 14)" },
    sections: [
      text("To say **how** you travel, use **by** + transport: **by bus**, **by car**, **by plane**. Use **on foot** for walking."),
      vocab([
        { word: "bus", pos: "noun", meaning: "a big vehicle for many people", ar: "حافلة", pron: "/bʌs/", ex: "I go to school by bus.", col: ["by bus"], right: "by bus", wrong: "by the bus", note: "No article after by.", visual: "🚌" },
        { word: "taxi", pos: "noun", meaning: "a car you pay to use", ar: "سيارة أجرة", pron: "/ˈtæksi/", ex: "We go to the airport by taxi.", col: ["by taxi"], visual: "🚕" },
        { word: "plane", pos: "noun", meaning: "a vehicle that flies", ar: "طائرة", pron: "/pleɪn/", ex: "They travel by plane.", col: ["by plane"], visual: "✈️" },
        { word: "bicycle", pos: "noun", meaning: "a vehicle with two wheels", ar: "دراجة", pron: "/ˈbaɪsɪkl/", ex: "He goes to work by bicycle.", col: ["by bicycle"], visual: "🚲" },
        { word: "ship", pos: "noun", meaning: "a big boat", ar: "سفينة", pron: "/ʃɪp/", ex: "They travel by ship.", col: ["by ship"], visual: "🚢" },
      ], "Transport"),
    ],
    exercises: [
      match("Match the transport with its description.", [["plane", "flies"], ["ship", "a big boat"], ["bicycle", "two wheels"], ["bus", "a big vehicle for many people"]], "Each has its own description."),
      fill("I go to school ___ bus.", ["by"], "by + transport."),
      mist("Find the mistake.", ["We go to the airport", "by the taxi", "."], 1, "by taxi", "No article after by."),
      mc("Walking = ", ["on foot", "by foot", "by walk"], 0, "We say on foot."),
      sa("A vehicle that flies is a ___.", ["plane"], "A plane flies.", { hint: "p _ _ _ e" }),
      order("Put the words in the correct order.", ["She", "goes", "to", "work", "by", "bus."], "word", "Subject + goes + to work + by + transport."),
    ],
  },
  {
    slug: "beginner-vocab-rhymes-word-stress",
    level: "BEGINNER", category: "VOCABULARY", title: "Rhyming Words and Word Stress", topic: "Sounds",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-transport"],
    objective: "Find words that rhyme and mark the stressed syllable in common words.",
    tags: ["vocabulary", "pronunciation", "rhyme", "word-stress", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Rhyming words and stress patterns (Unit 14)" },
    sections: [
      text("Words **rhyme** when they end with the **same sound**: **bed – red**, **train – rain**. In words with two or more syllables, one syllable is **stressed** (louder and longer)."),
      table("Rhyming words", ["Rhyme", "Words"], [["/eɪ/", "day – say – play"], ["/iː/", "tea – see – key"], ["/æt/", "cat – hat – bat"], ["/ɜːn/", "learn – turn"]]),
      table("Word stress", ["Word", "Stress"], [["'teacher", "1st syllable"], ["ho'tel", "2nd syllable"], ["'sofa", "1st syllable"], ["a'bout", "2nd syllable"]]),
    ],
    exercises: [
      match("Match the rhyming words.", [["cat", "hat"], ["day", "play"], ["tea", "key"], ["bed", "red"]], "They end with the same sound."),
      mc("Which word rhymes with “see”?", ["tea", "sea-side", "seat"], 0, "tea and see have the same ending sound."),
      mc("Which syllable is stressed in “hotel”?", ["the first", "the second"], 1, "ho'tel: the second syllable."),
      mc("Which syllable is stressed in “teacher”?", ["the first", "the second"], 0, "'teacher: the first syllable."),
      mc("Which word does NOT rhyme with “cat”?", ["hat", "bat", "cup"], 2, "cup doesn't rhyme."),
      sa("Write a word that rhymes with “day”: ___", ["say", "play", "may", "stay", "way", "pay"], "Many words rhyme with day: say, play, may.", { hint: "s _ y" }),
    ],
  },

  // ============================================================ WEEK 10 · READING & WRITING
  {
    slug: "beginner-reading-life-big-events",
    level: "BEGINNER", category: "READING", title: "Reading: Life's Big Events", topic: "Past, present and future",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-reading-not-usual-day"],
    objective: "Combine the past, present and future of three people in one text.",
    tags: ["reading", "reading-details", "past-simple", "going-to", "synthesis", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "Life's big events (Unit 14)" },
    sections: [
      text("Some texts tell you about a person's **past** (was born, went), **present** (works, plays) and **future** (is going to). Find each **time** for each person.", "Reading strategy"),
      passage("Example", "Sami was born in Nizwa. He studied art. Now he is a teacher. Next year, he is going to open a school.", "Past, present, future"),
      list("Guided practice", ["Past → born in Nizwa; studied art.", "Present → a teacher.", "Future → open a school."]),
    ],
    exercises: [
      mc("Where was Layla born?", ["in Sohar", "in Salalah", "in London"], 0, "“Layla was born in Sohar in 1998.”", BIG_EVENTS),
      mc("What is Layla's job now?", ["a doctor", "a driver", "a teacher"], 0, "“she is a doctor”.", BIG_EVENTS),
      mc("What is Layla going to do next year?", ["study in London", "work in a school", "play football"], 0, "“Next year, she is going to study in London.”", BIG_EVENTS),
      mc("What does Omar do now?", ["He plays for a team.", "He is a doctor.", "He drives a bus."], 0, "“Now he plays for a team, and he trains every day.”", BIG_EVENTS),
      tf("Nasser is a bus driver now.", false, "He was a bus driver for twenty years. Now he is a driving teacher.", BIG_EVENTS),
      mc("Who is going to visit a brother in Dubai?", ["Layla", "Omar", "Nasser"], 2, "“Next month, he is going to visit his brother in Dubai.”", BIG_EVENTS),
    ],
  },
  {
    slug: "beginner-writing-synthesis-past-present-future",
    level: "BEGINNER", category: "WRITING", title: "Guided Writing Synthesis: Past, Present and Future", topic: "Comprehensive writing",
    difficulty: "BASIC", minutes: 16, prereq: ["beginner-writing-picture-3-full-description", "beginner-grammar-three-tenses"],
    objective: "Write a structured paragraph that combines past history, present routine and future plans.",
    tags: ["writing", "synthesis", "past-simple", "present-simple", "going-to", "paragraph", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Combining past, present and future (Unit 14)" },
    sections: [
      text("A complete answer can talk about **three times** about one person. Use one or two sentences for each: **past**, **present**, **future**.", "Explanation"),
      table("Notes: Omar", ["Time", "Notes"], [["Past", "born in Salalah · played football as a boy"], ["Present", "plays for a team · trains every day"], ["Future", "in June: play in an important match"]]),
      annotated("Notes → paragraph", [
        ["Past", "Omar was born in Salalah. He played football when he was a boy."],
        ["Present", "Now he plays for a team, and he trains every day."],
        ["Future", "In June, he is going to play in an important match."],
      ]),
      list("Checklist", ["Past Simple: was born, played.", "Present Simple: plays, trains.", "Future: is going to play.", "Use he (not Omar) after the first sentence."]),
    ],
    exercises: [
      order("Put the sentences in the correct order.", ["Omar was born in Salalah.", "He played football when he was a boy.", "Now he plays for a team.", "In June, he is going to play in an important match."], "paragraph", "Past, present, future."),
      fill("Omar ___ (be) born in Salalah. Now he ___ (play) for a team.", ["was", "plays"], "Past: was born. Present: plays."),
      fill("In June, he ___ (play) in an important match. (going to)", ["is going to play"], "is going to play."),
      mist("Find the mistake.", ["Omar was born in Salalah.", "Now he", "played for a team."], 2, "plays for a team", "Now = Present Simple."),
      order("Put the words in the correct order.", ["In", "June,", "he", "is", "going", "to", "play."], "word", "Time + subject + is going to + verb."),
      mc("Which time word goes with the Past Simple?", ["Yesterday", "Tomorrow", "Now"], 0, "Yesterday = past."),
    ],
  },

  // ============================================================ FINAL REVISION (Week 14)
  {
    slug: "beginner-grammar-final-review-units-1-14",
    level: "BEGINNER", category: "GRAMMAR", title: "Final Grammar Review: Units 1–14", topic: "Final review",
    difficulty: "BASIC", minutes: 16, prereq: ["beginner-grammar-three-tenses"],
    objective: "Revise the grammar of Units 1–14 before the final exam.",
    tags: ["grammar", "review", "final-exam", "tenses", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Final revision, Units 1-14" },
    sections: [
      text("This is a **revision lesson**: no new grammar. Use the table to check the forms, then practise.", "Explanation"),
      table("Grammar reference: Units 1–14", ["Unit(s)", "Point", "Example"], [
        ["1–4", "verb to be; possessives; have / has", "She is a nurse. Her name is Aisha. He has a car."],
        ["5–6", "Present Simple; adverbs of frequency", "I don't like tea. She always drinks coffee. Does he work?"],
        ["7–8", "question words; object pronouns; this / that; there is / are; prepositions of place", "How much is it? I like him. There are two chairs. It's on the table."],
        ["9–10", "Past Simple (was / were; regular; irregular; did / didn't)", "I was at home. She visited. He went. Did you see it?"],
        ["11–12", "can / can't; adverbs of manner; would like; some / any", "I can swim well. I'd like tea. I don't have any milk."],
        ["13–14", "Present Continuous; going to", "He is reading. I'm going to travel."],
      ]),
    ],
    exercises: [
      mc("She ___ in a bank.", ["work", "works", "working"], 1, "She → works."),
      mc("They ___ football now.", ["play", "are playing", "plays"], 1, "Now: are playing."),
      mc("Yesterday I ___ to the market.", ["go", "went", "am going"], 1, "Yesterday: went."),
      mc("___ you like some tea?", ["Would", "Do", "Are"], 0, "Would you like…?"),
      mc("Next week, we ___ visit my aunt.", ["are going to", "go", "went"], 0, "Future plan: are going to."),
      order("Put the words in the correct order.", ["Where", "did", "you", "go", "last", "weekend?"], "word", "Where + did + subject + verb."),
    ],
  },
  {
    slug: "beginner-vocab-final-review-units-1-14",
    level: "BEGINNER", category: "VOCABULARY", title: "Final Vocabulary Review: Units 1–14", topic: "Final review",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-vocab-rhymes-word-stress"],
    objective: "Revise the high-frequency vocabulary of Units 1–14 before the final exam.",
    tags: ["vocabulary", "review", "final-exam", "word-sets", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Final revision, Units 1-14" },
    sections: [
      text("Revise the **topic word sets** from the whole course. Try to remember them **without** looking."),
      table("Word sets, Units 9–14", ["Topic", "Words"], [
        ["Dates", "first, second, third; January … December"], ["Holidays", "hotel, beach, photo, museum, souvenir"], ["Ability", "play the guitar, ride a bike, speak English, cook dinner"],
        ["Café / shops", "coffee, cake, bill, bookshop, pharmacy"], ["Clothes", "T-shirt, dress, trousers, shoes, hat"], ["Transport", "bus, taxi, plane, bicycle, ship"],
      ]),
    ],
    exercises: [
      match("Which topic?", [["museum", "Holidays"], ["trousers", "Clothes"], ["bill", "Café"], ["taxi", "Transport"], ["guitar", "Ability"]], "Sort the words by topic."),
      match("Opposite verbs.", [["buy", "sell"], ["ask", "answer"], ["open", "close"], ["put on", "take off"]], "Learn the pairs."),
      fill("I go to school ___ bus.", ["by"], "by + transport."),
      mist("Find the mistake.", ["We", "made", "a lot of photos."], 1, "took", "We take photos."),
      mc("He is wearing ___.", ["a hat", "a hats", "hat"], 0, "A hat: singular."),
      sa("The opposite of “big” is ___.", ["small"], "small.", { hint: "s _ _ _ _" }),
    ],
  },
  {
    slug: "beginner-reading-final-review-strategies",
    level: "BEGINNER", category: "READING", title: "Final Reading Review: Strategies and Practice", topic: "Exam practice",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-reading-life-big-events"],
    objective: "Revise reading strategies for multiple-choice and true / false questions.",
    tags: ["reading", "reading-multiple-choice", "review", "final-exam", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "Final revision: reading strategies" },
    sections: [
      text("Use the same **strategies** in every reading task.", "Reading strategy"),
      list("Checklist", ["**Skim** the text: what is it about?", "**Read the question** and find the key words.", "**Scan** for the same words in the text.", "**Check** each option: is it true for the text?", "For **true / false**, look for a small change (a number, a day, not)."]),
      tip("If two answers seem right, choose the one that matches the text exactly.", "Exam tip"),
    ],
    exercises: [
      mc("What is Sara doing today?", ["She is at the beach.", "She is at the bank.", "She is at school."], 0, "“She is at the beach with her family.”", NOT_USUAL),
      tf("Sara is wearing a coat.", false, "“a hat and sunglasses”.", NOT_USUAL),
      mc("Where was Omar born?", ["Salalah", "Sohar", "Muscat"], 0, "“Omar was born in Salalah.”", BIG_EVENTS),
      tf("Nasser is going to visit his brother in Dubai.", true, "“Next month, he is going to visit his brother in Dubai.”", BIG_EVENTS),
      mc("Which strategy helps most with true / false?", ["Look for a small change in a number or a day.", "Guess quickly.", "Read only the title."], 0, "True / false statements often change one detail."),
      mc("What should you do first?", ["Skim the text.", "Answer at once.", "Skip the text."], 0, "Skim to understand the topic."),
    ],
  },
  {
    slug: "beginner-writing-mock-test-final",
    level: "BEGINNER", category: "WRITING", title: "Mock Writing Test: Table-to-Paragraph and Picture Description", topic: "Exam practice",
    difficulty: "BASIC", minutes: 16, prereq: ["beginner-writing-synthesis-past-present-future"],
    objective: "Practise both exam writing formats: a table-to-paragraph answer and a picture description.",
    tags: ["writing", "review", "final-exam", "table-to-paragraph", "picture-description", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Final revision: mock writing tests" },
    sections: [
      text("The final exam has **two writing tasks**. Practise both.", "Explanation"),
      table("Task A: Table-to-paragraph (about 50 words)", ["Name", "Country", "Job", "Languages", "Likes", "Can"], [["Diego", "Spain", "chef", "Spanish, English", "football", "cook, swim"]]),
      annotated("Task A model answer", [
        ["Answer", "Diego is from Spain. He is a chef. He speaks Spanish and English. He likes football, and he can cook and swim."],
      ]),
      table("Task B: Picture description (50–60 words)", ["Step", "Language"], [["1 Setting", "There is / There are + place"], ["2 Actions", "is / are + verb-ing"], ["3 Appearance", "is / are wearing + colour + clothes"]]),
      list("Final checklist", ["Right verb forms (he likes, they like).", "Right prepositions (in, on, at).", "Capital letters and full stops.", "Write the correct number of words."]),
    ],
    exercises: [
      order("Task A: put the sentences in the correct order.", ["Diego is from Spain.", "He is a chef.", "He speaks Spanish and English.", "He likes football, and he can cook and swim."], "paragraph", "Country, job, languages, likes and abilities."),
      order("Task B: put the sentences in the correct order.", ["There is a family in the garden.", "The boy is playing football.", "The girl is wearing a yellow dress."], "paragraph", "Setting, action, appearance."),
      mist("Find the mistake (Task A).", ["Diego is a chef.", "He speak", "Spanish and English."], 1, "speaks", "He → speaks."),
      mist("Find the mistake (Task B).", ["The girl", "wearing", "a yellow dress."], 1, "is wearing", "Present Continuous needs is."),
      order("Put the words in the correct order.", ["He", "can", "cook", "and", "swim."], "word", "Subject + can + verb + and + verb."),
      mc("Which pronoun replaces “Pam and Harry”?", ["They", "He", "She"], 0, "Two people: they."),
    ],
  },
];

void [compare, examples, ms, tip];
