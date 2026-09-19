import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Elementary course, Teaching Weeks 5-6 (Units 5-6). Topics follow the academy's weekly report; all text is ORIGINAL.

const CHAMPIONS = "The Al Saadi family has five children, and they all love sport. Ahmed, the oldest, can swim very fast. He won a national medal when he was fifteen.\n\nHis sister Mona could ride a horse when she was six, and now she can jump very high. But she can't swim at all! The twins, Yara and Zaid, can play chess really well. When they were eight, they could beat their father. The youngest child, Nour, is only four, but she can already ride a bike.";
const LOST_PHONE = "One Friday afternoon, Amal went to the souq with her brother. She bought a silver bracelet, ate an ice cream and took some photos. Then she looked in her bag, and her phone wasn't there! She felt terrible.\n\nShe walked back through the market and asked the shopkeepers, but nobody saw it. At six o'clock she went to the police station. A young officer smiled and gave her a phone. “A boy found this near the ice-cream shop,” he said. Amal was so happy that she bought the boy a big box of sweets.";

export const ELEMENTARY_W5_W6: SeedLesson[] = [
  // ================================================================ WEEK 5 · GRAMMAR
  {
    slug: "elementary-grammar-can-cant",
    level: "ELEMENTARY", category: "GRAMMAR", title: "can / can't: Ability and Possibility", topic: "Modal verbs",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-demonstratives"],
    objective: "Use can and can't to talk about what you are able (or not able) to do.",
    tags: ["grammar", "modal-verbs", "can", "abilities", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "can / can't (Unit 5)" },
    sections: [
      text("**Can** is a **modal verb**. We use it to say what we **are able to do** (ability) or what **is possible**. Modal verbs are special: they never change their form and they are followed directly by the base verb.", "Explanation"),
      list("When do we use it?", ["Ability: I can swim. She can speak three languages.", "Possibility: You can buy stamps at the post office.", "Questions about ability: Can you drive?"]),
      table("Forms", ["Type", "Form", "Example"], [
        ["Positive", "subject + can + base verb", "I can speak English."],
        ["Negative", "subject + can't (cannot) + base verb", "He can't drive."],
        ["Question", "Can + subject + base verb?", "Can you swim?"],
        ["Short answers", "Yes, I can. / No, I can't.", "Can she cook? — Yes, she can."],
      ]),
      structure("Structure", "I / you / he / she / it / we / they + can + base verb", "No -s for he / she / it (not cans). No to after can (not can to swim)."),
      examples("Examples", { Positive: ["She can play the piano.", "We can see the sea from here."], Negative: ["I can't ride a horse.", "They can't come today."], Questions: ["Can he speak French?", "Can you help me?"] }),
    ],
    exercises: [
      mc("She ___ speak three languages.", ["can", "cans", "is can"], 0, "Modal verbs never take -s: she can speak."),
      mist("Find the mistake.", ["He", "can speaks", "French."], 1, "can speak", "After can we use the base verb (speak)."),
      fill("___ you swim? Yes, I ___.", ["Can", "can"], "Question: Can + subject + verb. Short answer: Yes, I can."),
      sa("Make it negative: I can drive. → I ___ drive.", ["can't", "cannot"], "Negative form of can: can't or cannot.", { hint: "one word" }),
      mist("Find the mistake.", ["I", "can to", "play the guitar."], 1, "can", "No to after can: I can play."),
      order("Put the words in order.", ["Can", "you", "help", "me", "with", "my", "homework?"], "word", "Can + subject + base verb + rest."),
    ],
  },
  {
    slug: "elementary-grammar-was-were-could",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Past of be and can: was / were, could / couldn't", topic: "Past tenses",
    difficulty: "BASIC", minutes: 14, prereq: ["elementary-grammar-can-cant"],
    objective: "Talk about the past with was / were and about past ability with could / couldn't.",
    tags: ["grammar", "past-of-be", "could", "abilities", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "was / were; could / couldn't (Unit 5)" },
    sections: [
      text("**Was and were** are the **past forms of am / is / are**. **Could and couldn't** are the past forms of **can and can't**. We use them for the past: yesterday, last year, when I was a child.", "Explanation"),
      list("When do we use it?", ["Where someone was: We were at the library yesterday.", "How things were: The film was long.", "What we could or couldn't do in the past: When I was six, I could read, but I couldn't drive."]),
      table("Present → past", ["Present", "Past", "Negative"], [
        ["I am / he, she, it is", "I / he / she / it was", "wasn't"],
        ["we, you, they are", "we / you / they were", "weren't"],
        ["can", "could", "couldn't"],
      ]),
      structure("Structure", "I / He / She / It + was      We / You / They + were\nWas / Were + subject + …?      Could + subject + base verb?", "Questions: Where were you yesterday? Could she swim when she was young? — Yes, she could."),
      examples("Examples", { "was / were": ["I was at home yesterday.", "They weren't in London last year.", "Where were you at three o'clock?"], "could / couldn't": ["When I was six, I could play the piano.", "I couldn't drive then.", "Could your sister speak French as a child?"] }),
    ],
    exercises: [
      fill("Where ___ you yesterday afternoon? I ___ at my grandmother's house.", ["were", "was"], "You takes were; I takes was."),
      mc("When I was a child, I ___ swim, but now I swim every day.", ["can't", "couldn't", "wasn't"], 1, "Past inability = couldn't."),
      mist("Find the mistake.", ["We", "was", "at home yesterday."], 1, "were", "We takes were."),
      mc("___ he play the guitar when he was ten?", ["Can", "Could", "Was"], 1, "Past ability question: Could he play…?"),
      sa("Make it negative: She was late. → She ___ late.", ["wasn't", "was not"], "Negative past of be: wasn't.", { hint: "one word" }),
      order("Put the words in order.", ["They", "weren't", "at", "school", "yesterday."], "word", "Subject + weren't + place + time."),
    ],
  },

  // ================================================================ WEEK 5 · VOCABULARY
  {
    slug: "elementary-vocab-compound-nouns",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Compound Nouns: bus stop, handbag, car park", topic: "Word building",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-prepositions-of-place"],
    objective: "Recognise and use compound nouns made from two words.",
    tags: ["vocabulary", "compound-nouns", "collocations", "town", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Words that go together: compound nouns (Unit 5)" },
    sections: [
      text("A **compound noun** is a noun made from **two nouns**. The first noun tells us what type the second one is: a **bus** stop is a stop for buses. Some compounds are written as **one word** (handbag), and some as **two words** (bus stop). Check a dictionary if you are not sure."),
      vocab([
        { word: "motorbike", pos: "noun", meaning: "a vehicle with two wheels and an engine", ar: "دراجة نارية", pron: "/ˈməʊtəbaɪk/", ex: "He rides a motorbike to work.", col: ["ride a motorbike"], visual: "🏍️" },
        { word: "traffic lights", pos: "noun (plural)", meaning: "red, yellow and green lights that tell cars to stop or go", ar: "إشارة المرور", pron: "/ˈtræfɪk laɪts/", ex: "Stop at the traffic lights.", col: ["at the traffic lights"], visual: "🚦" },
        { word: "bus stop", pos: "noun", meaning: "a place where buses stop for passengers", ar: "موقف الحافلة", pron: "/ˈbʌs stɒp/", ex: "I wait at the bus stop every morning.", col: ["at the bus stop"], visual: "🚏" },
        { word: "handbag", pos: "noun", meaning: "a small bag that you carry in your hand", ar: "حقيبة يد", pron: "/ˈhændbæɡ/", ex: "She keeps her keys in her handbag.", col: ["in my handbag"], right: "handbag", wrong: "hand bag", note: "Usually written as one word.", visual: "👜" },
        { word: "car park", pos: "noun", meaning: "a place where you leave your car", ar: "موقف سيارات", pron: "/ˈkɑː pɑːk/", ex: "The car park is behind the supermarket.", col: ["in the car park"], visual: "🅿️" },
        { word: "railway station", pos: "noun", meaning: "a place where trains stop", ar: "محطة قطار", pron: "/ˈreɪlweɪ ˌsteɪʃn/", ex: "The railway station is near the market.", col: ["at the railway station"], visual: "🚉" },
      ], "Compound nouns"),
    ],
    exercises: [
      match("Match the two parts of the compound noun.", [["traffic", "lights"], ["bus", "stop"], ["car", "park"], ["hand", "bag"], ["railway", "station"]], "Each first word is joined with a second word to make one noun."),
      mc("You wait for a bus at a ___.", ["bus stop", "car park", "motorbike"], 0, "A bus stop is where buses stop."),
      mc("You leave your car in a ___.", ["car park", "handbag", "traffic lights"], 0, "A car park is for cars."),
      mist("Find the mistake.", ["I put my phone in my", "bag hand", "."], 1, "handbag", "In English the parts come in this order: handbag."),
      fill("A vehicle with two wheels and an engine is a ___.", ["motorbike"], "A motorbike has two wheels and an engine."),
      sa("A place where trains stop: railway ___.", ["station"], "A railway station is where trains stop.", { hint: "s _ _ _ _ _ n" }),
    ],
  },
  {
    slug: "elementary-vocab-word-partners-ability",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Word Partners and How Well You Can Do Things", topic: "Collocations",
    difficulty: "CORE", minutes: 12, prereq: ["elementary-vocab-compound-nouns"],
    objective: "Use common verb + noun partners and adverbs that say how well you can do something.",
    tags: ["vocabulary", "collocations", "abilities", "adverbs", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Verb + noun; adverbs of ability (Unit 5)" },
    sections: [
      text("Some words always go together. These **word partners** (collocations) sound natural. We also use **adverbs** to say **how well** we can do something."),
      table("Verb + noun partners", ["Verb", "Noun", "Example"], [
        ["play", "the violin", "She plays the violin in an orchestra."],
        ["ride", "a motorbike / a horse", "He can ride a motorbike."],
        ["earn", "money", "She earns money as a teacher."],
        ["wear", "a tie / a uniform", "He wears a tie to work."],
        ["look after", "your health", "You must look after your health."],
      ]),
      table("How well? (best → not at all)", ["Adverb", "Meaning", "Example"], [
        ["brilliantly", "extremely well", "She plays the piano brilliantly."],
        ["really well", "very well", "He can cook really well."],
        ["quite well", "well, but not great", "I can swim quite well."],
        ["a little bit", "not much", "I can speak French a little bit."],
        ["at all", "in negatives: none", "I can't ride a horse at all."],
      ]),
      tip("Use at all only in negative sentences: I can't sing at all. (not I can sing at all)", "Watch out"),
    ],
    exercises: [
      match("Match the verb with the noun.", [["play", "the violin"], ["ride", "a motorbike"], ["earn", "money"], ["wear", "a tie"]], "These are natural verb + noun partners."),
      fill("I can't swim ___. I'm afraid of water. (not even a little)", ["at all"], "At all makes a negative stronger: I can't swim at all."),
      mc("She plays the piano ___. Everybody loves her music.", ["brilliantly", "a little bit", "at all"], 0, "Brilliantly = extremely well."),
      mist("Find the mistake.", ["She", "makes", "the violin in a band."], 1, "plays", "We play an instrument."),
      order("Put the ability adverbs in order from BEST to WORST.", ["brilliantly", "really well", "quite well", "a little bit"], "word", "The scale goes from extremely well to not much."),
      mc("You must look after your ___.", ["health", "tie", "violin"], 0, "The natural partner is health."),
    ],
  },

  // ================================================================ WEEK 5 · READING
  {
    slug: "elementary-reading-family-of-champions",
    level: "ELEMENTARY", category: "READING", title: "Reading: A Family of Champions", topic: "Abilities",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-heritage-house"],
    objective: "Find details about abilities (can, could) in a short text about a family.",
    tags: ["reading", "reading-details", "reading-comprehension", "abilities", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "A talented family (Unit 5)" },
    sections: [
      text("Texts about people's abilities use **can / can't** (now) and **could / couldn't** (in the past). To answer, check **who** the question is about and **when**: now or in the past.", "Reading strategy"),
      passage("Example", "Sami is ten. He can play chess really well, but he can't swim. When he was six, he could ride a bike.", "A short text"),
      list("Guided practice", ["What can Sami do really well? → play chess.", "Can Sami swim? → No, he can't.", "Could he ride a bike at six? → Yes, he could."]),
    ],
    exercises: [
      mc("What can Ahmed do very fast?", ["ride a horse", "swim", "play chess"], 1, "“Ahmed, the oldest, can swim very fast.”", CHAMPIONS),
      tf("Mona could ride a horse when she was six.", true, "“His sister Mona could ride a horse when she was six.”", CHAMPIONS),
      tf("Mona can swim well.", false, "“She can't swim at all!”", CHAMPIONS),
      mc("What can the twins play really well?", ["chess", "football", "the piano"], 0, "“The twins, Yara and Zaid, can play chess really well.”", CHAMPIONS),
      sa("How old is Nour? (write a number)", ["4", "four"], "“Nour, is only four.”", { context: CHAMPIONS }),
      mc("Who won a national medal?", ["Mona", "Ahmed", "Nour"], 1, "“He won a national medal when he was fifteen” (Ahmed).", CHAMPIONS),
    ],
  },

  // ================================================================ WEEK 5 · WRITING
  {
    slug: "elementary-writing-job-application-email",
    level: "ELEMENTARY", category: "WRITING", title: "Writing a Formal Job Application Email", topic: "Formal email",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-writing-describing-home"],
    objective: "Write a short, polite email to apply for a job, with the correct opening, body and ending.",
    tags: ["writing", "formal-writing", "email", "work", "abilities", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "A formal application email (Unit 5)" },
    sections: [
      text("A **formal email** uses polite, correct language. It is different from a message to a friend. A job application email follows a fixed structure.", "Explanation"),
      table("Key conventions", ["Part", "What to write", "Example"], [
        ["Greeting", "Dear Ms / Mr + surname (Dear Sir or Madam if you do not know the name)", "Dear Ms Harthi,"],
        ["Opening", "Say why you are writing", "I am writing to apply for the position of receptionist."],
        ["Body", "Skills, languages, experience", "I can speak Arabic and English fluently."],
        ["Ending", "Polite closing line", "I look forward to hearing from you."],
        ["Sign-off", "Yours sincerely + full name (when you know the person's name)", "Yours sincerely, Layla Al Balushi"],
      ]),
      annotated("Model email", [
        ["Greeting", "Dear Ms Harthi,"],
        ["Opening", "I am writing to apply for the position of receptionist at Sea View Hotel, which I saw on your website."],
        ["Body", "I am 22 years old, and I can speak Arabic and English fluently. I can also use a computer very well. Last summer I worked in a café for three months."],
        ["Ending", "I look forward to hearing from you."],
        ["Sign-off", "Yours sincerely, Layla Al Balushi"],
      ]),
      tip("Do not use short forms (I'm, can't) or “Hi” in a formal email.", "Style"),
    ],
    exercises: [
      order("Put the email parts in the correct order.", ["Dear Ms Harthi,", "I am writing to apply for the position of receptionist.", "I can speak Arabic and English fluently.", "I look forward to hearing from you.", "Yours sincerely, Layla Al Balushi"], "paragraph", "Greeting, opening, body, ending, sign-off."),
      mc("You do NOT know the manager's name. Which greeting is best?", ["Hi there,", "Dear Sir or Madam,", "Hey manager,"], 1, "Dear Sir or Madam is the formal greeting when the name is unknown."),
      fill("I look ___ to hearing from you.", ["forward"], "The fixed phrase is look forward to."),
      mist("Find the mistake.", ["Hi Ms Harthi,", "I am writing to apply", "for the job."], 0, "Dear Ms Harthi,", "A formal email starts with Dear + title + surname."),
      mc("Which sentence belongs in the BODY of the email?", ["I can speak Arabic and English fluently.", "Yours sincerely,", "Dear Sir or Madam,"], 0, "The body gives skills and experience."),
      tf("“I'm writing to ask for a job.” is the best formal opening.", false, "In a formal email avoid short forms: I am writing to apply for the position of…"),
    ],
  },

  // ================================================================ WEEK 6 · VOCABULARY
  {
    slug: "elementary-vocab-ed-ing-adjectives",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Feelings: -ed and -ing Adjectives", topic: "Feelings",
    difficulty: "CORE", minutes: 12, prereq: ["elementary-vocab-word-partners-ability"],
    objective: "Choose between -ed adjectives (how you feel) and -ing adjectives (what causes the feeling).",
    tags: ["vocabulary", "feelings", "adjectives", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "-ed and -ing adjectives (Unit 6)" },
    sections: [
      text("Many adjectives come in two forms. **-ed adjectives** describe **how a person feels**. **-ing adjectives** describe **the person, thing or situation that causes** the feeling."),
      table("-ed or -ing?", ["-ed (feeling)", "-ing (cause)", "Example"], [
        ["bored", "boring", "I am bored. The film is boring."],
        ["interested", "interesting", "I am interested in history. History is interesting."],
        ["excited", "exciting", "We are excited. The match is exciting."],
        ["tired", "tiring", "I am tired. The journey is tiring."],
        ["surprised", "surprising", "She is surprised. The news is surprising."],
      ]),
      vocab([
        { word: "bored / boring", pos: "adjective", meaning: "bored = not interested; boring = not interesting", ar: "ملول / ممل", pron: "/bɔːd/ · /ˈbɔːrɪŋ/", ex: "I am bored because the lesson is boring.", col: ["a boring film", "feel bored"], right: "I am bored.", wrong: "I am boring.", note: "“I am boring” means you are a boring person!", visual: "😑" },
        { word: "excited / exciting", pos: "adjective", meaning: "excited = full of happy energy; exciting = making you feel excited", ar: "متحمس / مثير", pron: "/ɪkˈsaɪtɪd/ · /ɪkˈsaɪtɪŋ/", ex: "I'm excited about the trip. It's an exciting plan.", col: ["an exciting match", "feel excited"], visual: "🤩" },
        { word: "tired / tiring", pos: "adjective", meaning: "tired = you need to rest; tiring = makes you tired", ar: "متعب / مُتعِب", pron: "/ˈtaɪəd/ · /ˈtaɪərɪŋ/", ex: "I'm tired after a tiring day.", col: ["a tiring journey"], visual: "😴" },
      ], "Key pairs"),
    ],
    exercises: [
      fill("The film is very ___ . I want to go home. (bore)", ["boring"], "The film causes the feeling: boring."),
      mc("I'm ___ in history.", ["interested", "interesting", "interest"], 0, "A person's feeling: interested."),
      mist("Find the mistake.", ["I am", "boring", "in the lesson today."], 1, "bored", "You feel bored; the lesson is boring."),
      fill("The match was very ___ and all the fans were ___. (excite)", ["exciting", "excited"], "The match causes excitement: exciting. The fans feel it: excited."),
      match("Feeling or cause?", [["I am tired.", "feeling"], ["The journey is tiring.", "cause"], ["She is surprised.", "feeling"], ["The news is surprising.", "cause"]], "-ed = feeling; -ing = cause."),
      tf("“I am boring.” means I feel bored.", false, "I am boring means you are a boring person. To say how you feel, use bored."),
    ],
  },
  {
    slug: "elementary-vocab-ordinals-dates",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Ordinal Numbers, Dates and Years", topic: "Numbers",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-ed-ing-adjectives"],
    objective: "Say and write ordinal numbers, dates and years correctly.",
    tags: ["vocabulary", "numbers", "dates", "time", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Ordinal numbers, dates and years (Unit 6)" },
    sections: [
      text("**Ordinal numbers** show order or position: first, second, third. We use them for **dates** and for floors, races and rankings."),
      table("Ordinal numbers", ["Number", "Word", "Note"], [
        ["1st", "first", "irregular"], ["2nd", "second", "irregular"], ["3rd", "third", "irregular"],
        ["4th", "fourth", "number + th"], ["12th", "twelfth", "irregular spelling"], ["20th", "twentieth", "y → ieth"], ["31st", "thirty-first", "last part is ordinal"],
      ]),
      list("Saying dates and years", ["Write: 5 March · Say: the fifth of March (or March the fifth).", "1900: nineteen hundred", "2005: two thousand and five", "2019: twenty nineteen"]),
      tip("In dates we say the ordinal (the fifth) but we do not write it as a word: 5th March.", "Remember"),
    ],
    exercises: [
      match("Match the number with the word.", [["1st", "first"], ["3rd", "third"], ["12th", "twelfth"], ["20th", "twentieth"], ["31st", "thirty-first"]], "Ordinals often end in -th, but 1st, 2nd and 3rd are irregular."),
      sa("Write in words: 2nd → ___", ["second"], "2nd = second.", { hint: "s _ _ _ _ d" }),
      mc("How do we say 2005?", ["two thousand and five", "twenty zero five", "twenty hundred five"], 0, "2005 = two thousand and five."),
      mc("How do we say 5 March?", ["the fifth of March", "the five of March", "five March the"], 0, "Use the ordinal: the fifth."),
      mist("Find the mistake.", ["My birthday is on", "the two of", "May."], 1, "the second of", "Use the ordinal number: the second of May."),
      sa("Write in words: 20th → ___", ["twentieth"], "20th = twentieth (y changes to ie).", { hint: "twenty → twent…" }),
    ],
  },

  // ================================================================ WEEK 6 · READING
  {
    slug: "elementary-reading-lost-phone",
    level: "ELEMENTARY", category: "READING", title: "Reading: The Lost Phone", topic: "Past narrative",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-family-of-champions"],
    objective: "Follow the events of a short story in the Past Simple and answer detail questions.",
    tags: ["reading", "reading-comprehension", "reading-details", "past-simple", "narrative", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "A short story in the past (Unit 6)" },
    sections: [
      text("A short story tells events **in order**. It uses the **Past Simple**. To follow the story, ask: **Who** is it about? **Where** does it happen? **What happens first, next and last**? Notice how the character **feels**.", "Reading strategy"),
      passage("Example", "Ali went to the market on Saturday. He bought some dates and drank a coffee. Then he saw his friend Saif, and they talked for an hour.", "A tiny story"),
      list("Guided practice", ["Where did Ali go? → to the market.", "What did he buy? → some dates.", "Who did he see? → his friend Saif."]),
    ],
    exercises: [
      mc("Where did Amal go on Friday afternoon?", ["to the beach", "to the souq", "to school"], 1, "“Amal went to the souq with her brother.”", LOST_PHONE),
      mc("What did she buy?", ["a silver bracelet", "a phone", "some sweets"], 0, "“She bought a silver bracelet.”", LOST_PHONE),
      tf("Amal found her phone in her bag.", false, "“Her phone wasn't there!”", LOST_PHONE),
      mc("Where did she go at six o'clock?", ["home", "the police station", "the ice-cream shop"], 1, "“At six o'clock she went to the police station.”", LOST_PHONE),
      mc("Where did a boy find the phone?", ["near the ice-cream shop", "in a car", "at the bus stop"], 0, "“A boy found this near the ice-cream shop.”", LOST_PHONE),
      mc("How did Amal feel at the end?", ["terrible", "very happy", "bored"], 1, "“Amal was so happy that she bought the boy a big box of sweets.”", LOST_PHONE),
    ],
  },

  // ================================================================ WEEK 6 · WRITING
  {
    slug: "elementary-writing-biography",
    level: "ELEMENTARY", category: "WRITING", title: "Writing a Biography: when, until, however", topic: "Biography",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-writing-job-application-email"],
    objective: "Write a short biography in the Past Simple using time linkers and however.",
    tags: ["writing", "writing-paragraph", "connectors", "past-simple", "biography", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "A biography: time expressions and linkers (Unit 6)" },
    sections: [
      text("A **biography** tells the story of a person's life. We write it in the **Past Simple** and in **time order**. Three linkers help the reader follow the events.", "Explanation"),
      table("Time and contrast linkers", ["Linker", "Job", "Example"], [
        ["when", "connects two times or events", "She was 18 when she left school."],
        ["until", "up to a certain time", "She lived in Sur until she was 18."],
        ["however", "shows a surprise or contrast", "He studied law. However, he became a famous writer."],
      ]),
      annotated("Model biography", [
        ["Birth", "Salma was born in Sur in 1980. She lived there until she was 18."],
        ["Education", "When she finished school, she studied medicine in Cairo."],
        ["Career", "She wanted to be a surgeon. However, she became a teacher of medicine, and she loved her job."],
      ]),
      tip("Put a comma after However at the start of a sentence: However, she became a teacher.", "Punctuation"),
    ],
    exercises: [
      fill("She lived in Sur ___ she was 18.", ["until"], "Until = up to that time."),
      fill("He was 18 ___ he left school.", ["when"], "When links two events at the same time."),
      mc("He studied law. ___, he became a famous writer.", ["Because", "However", "Until"], 1, "It's a surprise (he did something different): however."),
      order("Put the sentences in the correct order.", ["Karim was born in Nizwa in 1995.", "He went to school in Nizwa until he was 18.", "When he finished school, he studied engineering.", "Now he works for an oil company."], "paragraph", "Birth, school, university, work."),
      mist("Find the mistake.", ["She studied medicine.", "However she became a teacher.", "She loved it."], 1, "However, she became a teacher.", "Put a comma after However."),
      mc("Which verb form do we use in a biography?", ["Present Simple", "Past Simple", "Present Continuous"], 1, "Biographies use the Past Simple."),
    ],
  },
];

void [compare, examples, ms, tf, structure, list, text];
