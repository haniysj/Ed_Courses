import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Beginner course, Teaching Weeks 1-2 (Units 1-4). Topics follow the academy's syllabus; all text is ORIGINAL.

const CAIRO = "Hello from Cairo!\n\nI'm Sami, and I'm on holiday with my family. We're in a big hotel near the river. My mother and father are here, and my sister, Dina, is here too. She is twelve.\n\nThe weather is hot and sunny. The food is very good. Cairo is a big city, and it is very busy.\n\nSee you soon!\nSami";
const SALALAH_FAMILY = "This is the Harthi family. Mr Harthi is 45. He is a driver. Mrs Harthi is 42. She is a nurse. They have two children: a son, Ali, and a daughter, Mona. Ali is 14 and Mona is 10. They have a cat. Its name is Lulu.";
const E_PAL = "Hi! My name is Lucy. I'm 13 years old. I'm from Sydney, in Australia. I live with my mother, my father and my brother. My brother's name is Jack. He's 16. I like dogs and music. What about you?";

export const BEGINNER_W1_W2: SeedLesson[] = [
  // ============================================================ WEEK 1 · GRAMMAR
  {
    slug: "beginner-grammar-subject-pronouns",
    level: "BEGINNER", category: "GRAMMAR", title: "Subject Pronouns: I, you, he, she, it, we, they", topic: "Pronouns",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-grammar-verb-to-be"],
    objective: "Use subject pronouns instead of names, so you do not repeat the same word.",
    tags: ["grammar", "pronouns", "grammar-foundation", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Subject pronouns (Unit 1)" },
    sections: [
      text("A **pronoun** takes the place of a name or a noun. **Subject pronouns** come **before the verb**: **I** am a student. **She** is a nurse.", "Explanation"),
      list("When do we use them?", ["To avoid repeating a name: Diego is from Spain. **He** is a teacher.", "To talk about a group: Pam and Harry are married. **They** live in Leeds.", "To talk about things: The book is new. **It** is good."]),
      table("Subject pronouns", ["Pronoun", "Use for", "Example"], [
        ["I", "me", "I am Layla."], ["you", "one or more people you speak to", "You are my friend."], ["he", "a man or boy", "He is my brother."], ["she", "a woman or girl", "She is my sister."],
        ["it", "a thing or animal", "It is a big city."], ["we", "me and other people", "We are students."], ["they", "two or more people or things", "They are teachers."],
      ]),
      structure("Structure", "Pronoun + verb\nHe + is · They + are · I + am", "The name is replaced by a pronoun: Diego → he · Pam and Harry → they · Sara and I → we."),
    ],
    exercises: [
      match("Which pronoun replaces the name?", [["Diego", "he"], ["Maria", "she"], ["Pam and Harry", "they"], ["the book", "it"], ["Sara and I", "we"]], "Choose by gender and number: he, she, it (one) and we, they (more than one)."),
      fill("Amal is my sister. ___ is a nurse.", ["She"], "Amal is a woman: she."),
      fill("Ali and Omar are friends. ___ play football.", ["They"], "Two people: they."),
      mc("The house is big. ___ is very old.", ["He", "It", "They"], 1, "A house is a thing: it."),
      mist("Find the mistake.", ["Sara is a doctor.", "He", "works in a hospital."], 1, "She", "Sara is a woman: she."),
      order("Put the words in the correct order.", ["They", "are", "my", "friends."], "word", "Pronoun + verb + rest."),
    ],
  },
  {
    slug: "beginner-grammar-possessive-adjectives",
    level: "BEGINNER", category: "GRAMMAR", title: "my, your, his, her", topic: "Possessive adjectives",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-grammar-subject-pronouns"],
    objective: "Use my, your, his and her before a noun to say who something belongs to.",
    tags: ["grammar", "possessive-adjectives", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Possessive adjectives (Unit 1-2)" },
    sections: [
      text("A **possessive adjective** goes **before a noun**. It shows who the noun belongs to: **my** name, **your** book, **his** phone, **her** bag.", "Explanation"),
      table("Possessive adjectives", ["Pronoun", "Possessive adjective", "Example"], [
        ["I", "my", "My name is Huda."], ["you", "your", "What's your name?"], ["he", "his", "His name is Omar."], ["she", "her", "Her name is Aisha."],
      ]),
      structure("Structure", "my / your / his / her + noun", "Do not use the: say my book (not the my book)."),
      examples("Examples", { "": ["This is my bag.", "Is this your phone?", "His teacher is kind.", "Her school is big."] }),
    ],
    exercises: [
      fill("A: What's ___ name? B: ___ name is Huda.", ["your", "My"], "Ask about you: your name. Answer about me: My name."),
      mc("Omar is my brother. ___ phone is new.", ["His", "Her", "My"], 0, "Omar is a man: his."),
      mc("Aisha is my friend. ___ bag is red.", ["His", "Her", "Your"], 1, "Aisha is a woman: her."),
      mist("Find the mistake.", ["This is", "the my", "book."], 1, "my", "Do not use the before my."),
      match("Match the pronoun with the possessive adjective.", [["I", "my"], ["you", "your"], ["he", "his"], ["she", "her"]], "Each pronoun has one possessive adjective."),
      order("Put the words in the correct order.", ["Her", "name", "is", "Aisha."], "word", "Possessive adjective + noun + is + name."),
    ],
  },

  // ============================================================ WEEK 1 · VOCABULARY
  {
    slug: "beginner-vocab-everyday-objects",
    level: "BEGINNER", category: "VOCABULARY", title: "Everyday Objects", topic: "Objects",
    difficulty: "BASIC", minutes: 8,
    objective: "Name common objects and use a / an with them.",
    tags: ["vocabulary", "objects", "a-an", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Everyday objects (Unit 2)" },
    sections: [
      text("Learn the names of objects around you. Use **a** before a consonant sound (a book) and **an** before a vowel sound (an umbrella)."),
      vocab([
        { word: "book", pos: "noun", meaning: "pages with words that you read", ar: "كتاب", pron: "/bʊk/", ex: "This is a book.", col: ["read a book"], visual: "📘" },
        { word: "pen", pos: "noun", meaning: "you write with it", ar: "قلم", pron: "/pen/", ex: "I have a blue pen.", col: ["a blue pen"], visual: "🖊️" },
        { word: "bag", pos: "noun", meaning: "you carry things in it", ar: "حقيبة", pron: "/bæɡ/", ex: "My bag is black.", col: ["a school bag"], visual: "🎒" },
        { word: "phone", pos: "noun", meaning: "you call people with it", ar: "هاتف", pron: "/fəʊn/", ex: "Her phone is new.", col: ["a mobile phone"], visual: "📱" },
        { word: "key", pos: "noun", meaning: "you open a door with it", ar: "مفتاح", pron: "/kiː/", ex: "Where is my key?", col: ["a car key"], visual: "🔑" },
        { word: "umbrella", pos: "noun", meaning: "you use it when it rains", ar: "مظلة", pron: "/ʌmˈbrelə/", ex: "I have an umbrella.", col: ["an umbrella"], right: "an umbrella", wrong: "a umbrella", note: "Umbrella starts with a vowel sound: use an.", visual: "☂️" },
      ], "Objects"),
    ],
    exercises: [
      match("Match the object with its use.", [["pen", "you write with it"], ["key", "you open a door with it"], ["umbrella", "you use it when it rains"], ["phone", "you call people with it"]], "Each object has a use."),
      mc("This is ___ umbrella.", ["a", "an"], 1, "Umbrella starts with a vowel sound: an."),
      fill("You read a ___.", ["book"], "You read a book."),
      mc("You carry your books in a ___.", ["bag", "key", "pen"], 0, "A bag carries things."),
      mist("Find the mistake.", ["I have", "a umbrella", "in my bag."], 1, "an umbrella", "Use an before a vowel sound."),
      sa("You open a door with a ___.", ["key"], "You open a door with a key.", { hint: "k _ y" }),
    ],
  },
  {
    slug: "beginner-vocab-plural-nouns",
    level: "BEGINNER", category: "VOCABULARY", title: "Plural Nouns: -s and -es", topic: "Plurals",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-everyday-objects"],
    objective: "Make the plural of regular nouns with -s or -es.",
    tags: ["vocabulary", "plurals", "spelling", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Singular and plural nouns (Unit 2)" },
    sections: [
      text("**Singular** = one thing. **Plural** = two or more things. Most nouns add **-s**. Some nouns add **-es**."),
      table("Making plurals", ["Rule", "Singular → plural"], [
        ["Most nouns: + -s", "book → books · pen → pens · phone → phones"],
        ["Ends in -s, -x, -ch, -sh: + -es", "bus → buses · box → boxes · watch → watches · dish → dishes"],
        ["Consonant + y: y → -ies", "baby → babies · city → cities"],
      ]),
      structure("Structure", "one book → two books\none box → three boxes", "After a plural noun, use are: The books are on the table."),
    ],
    exercises: [
      match("Singular → plural.", [["book", "books"], ["box", "boxes"], ["watch", "watches"], ["baby", "babies"], ["bus", "buses"]], "Add -s, or -es after s, x, ch, sh. Consonant + y → -ies."),
      fill("One box, two ___.", ["boxes"], "box + es."),
      fill("One city, two ___.", ["cities"], "city → cities."),
      mist("Find the mistake.", ["I have", "two watchs", "in my bag."], 1, "two watches", "Add -es after -ch: watches."),
      mc("Which is correct?", ["two bus", "two buses", "two buss"], 1, "Bus + es = buses."),
      sa("Plural of “pen”: ___", ["pens"], "Add -s: pens.", { hint: "pen + s" }),
    ],
  },
  {
    slug: "beginner-vocab-numbers-1-30",
    level: "BEGINNER", category: "VOCABULARY", title: "Numbers 1–30", topic: "Numbers",
    difficulty: "BASIC", minutes: 8,
    objective: "Read, say and spell the numbers from 1 to 30.",
    tags: ["vocabulary", "numbers", "spelling", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Numbers 1-30 (Unit 2)" },
    sections: [
      text("You need numbers for your age, phone number, prices and time. Learn the words and the spelling."),
      table("Numbers", ["Numbers", "Words"], [
        ["1–5", "one, two, three, four, five"], ["6–10", "six, seven, eight, nine, ten"], ["11–15", "eleven, twelve, thirteen, fourteen, fifteen"],
        ["16–19", "sixteen, seventeen, eighteen, nineteen (teen = 13–19)"], ["20", "twenty"], ["21–29", "twenty-one, twenty-two, … twenty-nine"], ["30", "thirty"],
      ]),
      tip("Numbers 21–29 have a hyphen: twenty-one, twenty-five.", "Spelling"),
    ],
    exercises: [
      match("Match the number with the word.", [["7", "seven"], ["12", "twelve"], ["15", "fifteen"], ["20", "twenty"], ["30", "thirty"]], "Learn the spelling."),
      sa("Write the number in words: 13 → ___", ["thirteen"], "13 = thirteen.", { hint: "thir…" }),
      sa("Write the number in words: 25 → ___", ["twenty-five", "twenty five"], "25 = twenty-five.", { hint: "twenty-…" }),
      mc("Which number is “eighteen”?", ["8", "18", "80"], 1, "eighteen = 18."),
      order("Put the numbers in order.", ["three", "seven", "eleven", "nineteen"], "word", "From small to big."),
      mist("Find the mistake.", ["I am", "fourty", "years old."], 1, "forty", "Spell forty without u. (Fourteen has u, forty does not.)"),
    ],
  },
  {
    slug: "beginner-vocab-countries-cities",
    level: "BEGINNER", category: "VOCABULARY", title: "Countries and Cities", topic: "Countries",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-numbers-1-30"],
    objective: "Name common countries and their capital cities and say where you are from.",
    tags: ["vocabulary", "countries", "cities", "personal-information", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Countries and cities (Unit 1-2)" },
    sections: [
      text("Countries and cities always start with a **capital letter**. To say where you are from, use **from**: I am **from** Oman. She is **from** Cairo."),
      table("Countries and capitals", ["Country", "Capital"], [
        ["Oman", "Muscat"], ["Egypt", "Cairo"], ["Saudi Arabia", "Riyadh"], ["Jordan", "Amman"], ["Spain", "Madrid"], ["Japan", "Tokyo"], ["India", "New Delhi"],
      ]),
      structure("Structure", "I am from + country.   She lives in + city.", "We say from for origin and in for where we live: I am from Oman. I live in Muscat."),
    ],
    exercises: [
      match("Match the country with its capital.", [["Oman", "Muscat"], ["Egypt", "Cairo"], ["Spain", "Madrid"], ["Japan", "Tokyo"], ["Jordan", "Amman"]], "Learn the capitals."),
      fill("I am ___ Oman.", ["from"], "Origin: from."),
      fill("He lives ___ Cairo.", ["in"], "Where he lives: in."),
      mist("Find the mistake.", ["She is from", "egypt", "."], 1, "Egypt", "Countries start with a capital letter."),
      mc("Muscat is the capital of ___.", ["Oman", "Spain", "Japan"], 0, "Muscat is in Oman."),
      sa("The capital of Spain is ___.", ["Madrid"], "Madrid is the capital of Spain.", { hint: "M _ _ _ _ d" }),
    ],
  },
  {
    slug: "beginner-vocab-adjective-noun-order",
    level: "BEGINNER", category: "VOCABULARY", title: "Adjective + Noun: a big bag", topic: "Adjectives",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-countries-cities"],
    objective: "Put the adjective before the noun and use a / an correctly.",
    tags: ["vocabulary", "adjectives", "word-order", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Adjective + noun word order (Unit 2)" },
    sections: [
      text("An **adjective** describes a noun. In English the adjective goes **before the noun**: a **big** bag. The adjective does **not** change for plural."),
      table("Adjective + noun", ["Correct", "Not correct"], [
        ["a red bag", "a bag red"], ["two big houses", "two bigs houses"], ["a new phone", "a phone new"], ["an old car", "a old car"],
      ]),
      structure("Structure", "a / an + adjective + noun\nThe bag is red. (after the verb be, the adjective comes after)", "Choose a or an by the FIRST word: an old car, a big car."),
    ],
    exercises: [
      order("Put the words in the correct order.", ["It", "is", "a", "red", "bag."], "word", "a + adjective + noun."),
      order("Put the words in the correct order.", ["I", "have", "an", "old", "phone."], "word", "an + adjective + noun."),
      mc("Which is correct?", ["a bag big", "a big bag", "a bigs bag"], 1, "Adjective before the noun."),
      fill("It is ___ old car. (a or an)", ["an"], "Old starts with a vowel sound: an old car."),
      mist("Find the mistake.", ["I have", "two bigs", "bags."], 1, "two big", "Adjectives don't add -s."),
      match("Make a phrase.", [["a new", "phone"], ["a small", "house"], ["an old", "book"]], "Adjective + noun."),
    ],
  },

  // ============================================================ WEEK 1 · READING & WRITING
  {
    slug: "beginner-reading-postcard-cairo",
    level: "BEGINNER", category: "READING", title: "Reading: A Postcard from Cairo", topic: "Short informational text",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-reading-true-false"],
    objective: "Read a short postcard and find who, where and what.",
    tags: ["reading", "reading-details", "reading-comprehension", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "A holiday postcard (Unit 1-2)" },
    sections: [
      text("A **postcard** is a short message from a holiday. It says **who** you are, **where** you are, and **what** it is like. Read the questions first, then find the answers.", "Reading strategy"),
      passage("Example", "Hello from Salalah! I'm Nora. I'm with my aunt. The hotel is near the sea. The weather is warm.", "A short postcard"),
      list("Guided practice", ["Who writes? → Nora.", "Where is she? → in Salalah.", "What is the weather like? → warm."]),
    ],
    exercises: [
      mc("Who writes the postcard?", ["Sami", "Dina", "Cairo"], 0, "The writer is Sami.", CAIRO),
      mc("Where is Sami?", ["in Cairo", "in Muscat", "in London"], 0, "“Hello from Cairo!”", CAIRO),
      mc("Who is Dina?", ["his mother", "his sister", "his friend"], 1, "“my sister, Dina”.", CAIRO),
      sa("How old is Dina? (write a number)", ["12", "twelve"], "“She is twelve.”", { context: CAIRO }),
      tf("The hotel is near the sea.", false, "“near the river”.", CAIRO),
      mc("What is the weather like?", ["hot and sunny", "cold and rainy", "windy"], 0, "“hot and sunny”.", CAIRO),
    ],
  },
  {
    slug: "beginner-writing-capitals-forms",
    level: "BEGINNER", category: "WRITING", title: "Capital Letters, Full Stops and Personal Forms", topic: "Punctuation and forms",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-writing-complete-sentence"],
    objective: "Use capital letters for names and countries, end sentences correctly and complete a personal identity form.",
    tags: ["writing", "punctuation", "forms", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Punctuation; personal forms (Unit 1-2)" },
    sections: [
      text("Use a **capital letter** for: the word **I**, **names** (Huda), **countries** and **cities** (Oman, Muscat), **languages** and **days**. End a sentence with a **full stop** (.) or a **question mark** (?).", "Explanation"),
      table("A personal identity form", ["Form field", "What you write", "Example"], [
        ["First name", "your first name", "Huda"], ["Surname", "your family name", "Al Balushi"], ["Age", "a number", "19"], ["Country", "your country", "Oman"], ["Phone number", "your mobile number", "9123 4567"],
      ]),
      annotated("From form to sentences", [
        ["Form", "First name: Huda · Surname: Al Balushi · Age: 19 · Country: Oman"],
        ["Sentences", "My name is Huda Al Balushi. I am 19 years old. I am from Oman."],
      ]),
      tip("Check every sentence: capital letter at the start, full stop at the end.", "Checklist"),
    ],
    exercises: [
      sa("Add capital letters and a full stop: my name is huda and i am from oman", ["My name is Huda and I am from Oman."], "Capitals: My, Huda, I, Oman. Add a full stop.", { strict: true }),
      mist("Find the mistake.", ["She lives in", "muscat", "."], 1, "Muscat", "Cities start with a capital letter."),
      mc("Which needs a capital letter?", ["oman", "table", "book"], 0, "Country names start with a capital."),
      order("Put the words in the correct order.", ["I", "am", "from", "Egypt."], "word", "Subject + am + from + country."),
      order("Put the sentences in order.", ["My name is Huda.", "I am 19 years old.", "I am from Oman."], "paragraph", "Name, age, country."),
      match("Which field?", [["Huda", "First name"], ["Al Balushi", "Surname"], ["19", "Age"], ["Oman", "Country"]], "Match the answer with the form field."),
    ],
  },

  // ============================================================ WEEK 2 · GRAMMAR
  {
    slug: "beginner-grammar-be-negative",
    level: "BEGINNER", category: "GRAMMAR", title: "Verb to be: Negative (I'm not, isn't, aren't)", topic: "Verb to be",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-grammar-possessive-adjectives"],
    objective: "Make negative sentences with the verb to be.",
    tags: ["grammar", "verb-to-be", "negatives", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Verb to be: negative (Unit 3)" },
    sections: [
      text("To say **no**, add **not** after **am, is, are**. We often use short forms: **I'm not**, **he isn't**, **they aren't**.", "Explanation"),
      table("Negative forms", ["Subject", "Full form", "Short form"], [
        ["I", "I am not", "I'm not"], ["he / she / it", "is not", "isn't"], ["we / you / they", "are not", "aren't"],
      ]),
      structure("Structure", "subject + am / is / are + not", "There is no short form 'amn't'. Say I'm not."),
      examples("Examples", { "": ["I'm not a teacher.", "She isn't at home.", "They aren't from Spain."] }),
    ],
    exercises: [
      fill("She ___ a doctor. (negative)", [["isn't", "is not"]], "She isn't (is not)."),
      fill("They ___ from Egypt. (negative)", [["aren't", "are not"]], "They aren't (are not)."),
      mc("I ___ a student. I'm a teacher.", ["'m not", "isn't", "aren't"], 0, "I'm not."),
      mist("Find the mistake.", ["He", "aren't", "my brother."], 1, "isn't", "He takes isn't."),
      sa("Make it negative: We are late. → We ___ late.", ["aren't", "are not"], "We aren't late.", { hint: "aren't" }),
      order("Put the words in the correct order.", ["It", "isn't", "a", "big", "house."], "word", "Subject + isn't + a + adjective + noun."),
    ],
  },
  {
    slug: "beginner-grammar-be-questions",
    level: "BEGINNER", category: "GRAMMAR", title: "Questions with be: Yes / No and Wh- Questions", topic: "Questions",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-grammar-be-negative"],
    objective: "Ask and answer questions with be, including How old, Who and Where, with short answers.",
    tags: ["grammar", "verb-to-be", "questions", "short-answers", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Questions with be; Wh- questions (Unit 3)" },
    sections: [
      text("In a question with **be**, the verb goes **before the subject**: You are a student → **Are you** a student? Question words (**How old, Who, Where**) go at the **start**.", "Explanation"),
      table("Questions", ["Type", "Question", "Answer"], [
        ["Yes / No", "Are you from Oman?", "Yes, I am. / No, I'm not."],
        ["Yes / No", "Is he a doctor?", "Yes, he is. / No, he isn't."],
        ["How old", "How old are you?", "I'm 19."],
        ["Who", "Who is she?", "She's my sister."],
        ["Where", "Where are they from?", "They're from Spain."],
      ]),
      structure("Structure", "Am / Is / Are + subject …?\nQuestion word + am / is / are + subject …?", "In positive short answers we don't use a short form: Yes, I am. (not Yes, I'm.)"),
    ],
    exercises: [
      order("Put the words in the correct order.", ["How", "old", "are", "you?"], "word", "Question word + are + subject."),
      order("Put the words in the correct order.", ["Where", "is", "she", "from?"], "word", "Where + is + subject + from?"),
      fill("___ he a doctor? No, he ___.", ["Is", "isn't"], "Is he…? No, he isn't."),
      mc("“Are you a student?” “Yes, ___.”", ["I am", "I'm", "I is"], 0, "Positive short answer: Yes, I am."),
      mist("Find the mistake.", ["Where", "you are", "from?"], 1, "are you", "The verb goes before the subject."),
      match("Match the question with the answer.", [["How old are you?", "I'm 19."], ["Who is she?", "She's my sister."], ["Where is he from?", "He's from Cairo."]], "The question word tells you what to answer."),
    ],
  },
  {
    slug: "beginner-grammar-possessive-s-our-their",
    level: "BEGINNER", category: "GRAMMAR", title: "Possessive 's and our / their", topic: "Possession",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-grammar-be-questions"],
    objective: "Use 's to show who owns something and use our and their.",
    tags: ["grammar", "possessive-s", "possessive-adjectives", "family", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "Possessive 's; our, their (Unit 4)" },
    sections: [
      text("Add **'s** to a name or noun to show that something **belongs to** a person: **Omar's** book, my **father's** car. Use **our** for we and **their** for they.", "Explanation"),
      table("Possession", ["Use", "Example"], [
        ["name + 's + noun", "Omar's book · Huda's phone"], ["my father's / my sister's", "my father's car · my sister's name"], ["our (we)", "Our teacher is kind."], ["their (they)", "Their house is big."],
      ]),
      structure("Structure", "owner + 's + thing", "Compare: Omar's tall (is) and Omar's book (belongs to). The words after 's show the meaning."),
      examples("Examples", { "": ["This is Huda's bag.", "Where is your father's car?", "We love our school.", "They live in their new house."] }),
    ],
    exercises: [
      fill("This is my sister___ phone. (add 's)", ["'s"], "my sister's phone."),
      fill("We are students. ___ teacher is Mr Ali.", ["Our"], "We → our."),
      fill("Ali and Omar are brothers. ___ house is big.", ["Their"], "They → their."),
      mist("Find the mistake.", ["This is", "Huda bag", "."], 1, "Huda's bag", "Add 's to show possession."),
      match("Match the pronoun with the possessive adjective.", [["we", "our"], ["they", "their"], ["I", "my"], ["he", "his"]], "Each pronoun has its possessive adjective."),
      order("Put the words in the correct order.", ["This", "is", "my", "father's", "car."], "word", "This is + possessive + noun."),
    ],
  },
  {
    slug: "beginner-grammar-have-has",
    level: "BEGINNER", category: "GRAMMAR", title: "have and has", topic: "have / has",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-grammar-possessive-s-our-their"],
    objective: "Use have and has to talk about family, pets and things.",
    tags: ["grammar", "have-has", "possession", "family", "A1"],
    ref: { book: HW, level: "Beginner", area: "Grammar", topic: "have / has (Unit 4)" },
    sections: [
      text("Use **have** with **I, you, we, they** and **has** with **he, she, it**. We use it for **family, pets, things** and **descriptions**.", "Explanation"),
      table("have / has", ["Subject", "Verb", "Example"], [
        ["I / you / we / they", "have", "I have a brother. They have a cat."], ["he / she / it", "has", "She has two sisters. It has a big garden."],
      ]),
      structure("Structure", "I / you / we / they + have\nhe / she / it + has", "Negative: don't have / doesn't have. Question: Do you have…? Does she have…?"),
      examples("Examples", { "": ["I have a sister.", "He has a new phone.", "We have a big family."] }),
    ],
    exercises: [
      fill("I ___ two brothers.", ["have"], "I → have."),
      fill("She ___ a small cat.", ["has"], "She → has."),
      mc("They ___ a big house.", ["have", "has", "is"], 0, "They → have."),
      mist("Find the mistake.", ["My father", "have", "a new car."], 1, "has", "My father = he: has."),
      match("have or has?", [["He", "has"], ["We", "have"], ["It", "has"], ["You", "have"]], "he / she / it → has."),
      order("Put the words in the correct order.", ["My", "sister", "has", "two", "cats."], "word", "Subject + has + number + noun."),
    ],
  },

  // ============================================================ WEEK 2 · VOCABULARY
  {
    slug: "beginner-vocab-jobs",
    level: "BEGINNER", category: "VOCABULARY", title: "Common Jobs", topic: "Jobs",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-adjective-noun-order"],
    objective: "Name common jobs and say what people do.",
    tags: ["vocabulary", "jobs", "work", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Jobs (Unit 3)" },
    sections: [
      text("Use **a / an** with jobs: She is **a** teacher. He is **an** engineer. Ask: **What do you do?** or **What is your job?**"),
      vocab([
        { word: "teacher", pos: "noun", meaning: "works in a school", ar: "معلم", pron: "/ˈtiːtʃə/", ex: "My mother is a teacher.", col: ["a school teacher"], visual: "👩‍🏫" },
        { word: "doctor", pos: "noun", meaning: "helps sick people", ar: "طبيب", pron: "/ˈdɒktə/", ex: "He is a doctor.", col: ["a hospital doctor"], visual: "🧑‍⚕️" },
        { word: "driver", pos: "noun", meaning: "drives a car, taxi or bus", ar: "سائق", pron: "/ˈdraɪvə/", ex: "My uncle is a taxi driver.", col: ["a bus driver"], visual: "🚕" },
        { word: "engineer", pos: "noun", meaning: "designs and builds machines or roads", ar: "مهندس", pron: "/ˌendʒɪˈnɪə/", ex: "She is an engineer.", col: ["an engineer"], right: "an engineer", wrong: "a engineer", note: "Engineer starts with a vowel sound: an.", visual: "👷" },
        { word: "student", pos: "noun", meaning: "studies at a school or university", ar: "طالب", pron: "/ˈstjuːdnt/", ex: "I am a student.", col: ["a university student"], visual: "🎓" },
        { word: "cook", pos: "noun", meaning: "makes food in a restaurant", ar: "طباخ", pron: "/kʊk/", ex: "Her father is a cook.", col: ["a cook"], visual: "🧑‍🍳" },
      ], "Jobs"),
    ],
    exercises: [
      match("What does the person do?", [["teacher", "works in a school"], ["doctor", "helps sick people"], ["driver", "drives a bus or taxi"], ["cook", "makes food"]], "Match the job with its activity."),
      mc("She is ___ engineer.", ["a", "an"], 1, "Engineer starts with a vowel sound: an."),
      fill("A ___ helps sick people. (a job)", ["doctor"], "A doctor helps sick people."),
      mist("Find the mistake.", ["My brother is", "teacher", "in Muscat."], 1, "a teacher", "Use a / an with jobs."),
      order("Put the words in the correct order.", ["What", "do", "you", "do?"], "word", "What do you do? = What is your job?"),
      sa("A person who studies at university is a ___.", ["student"], "A student studies.", { hint: "s _ _ _ _ _ t" }),
    ],
  },
  {
    slug: "beginner-vocab-family-more",
    level: "BEGINNER", category: "VOCABULARY", title: "More Family Words", topic: "Family",
    difficulty: "BASIC", minutes: 8, prereq: ["beginner-vocab-jobs", "beginner-vocab-family-people"],
    objective: "Use family words in pairs: father / mother, son / daughter, husband / wife, uncle / aunt.",
    tags: ["vocabulary", "family", "pairs", "listening-support", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Family members (Unit 4)" },
    sections: [
      text("Many family words are **pairs**. One is for a man, one is for a woman."),
      table("Family pairs", ["Man", "Woman"], [
        ["father", "mother"], ["husband", "wife"], ["son", "daughter"], ["brother", "sister"], ["grandfather", "grandmother"], ["uncle", "aunt"],
      ]),
      list("Plural groups", ["**parents** = father + mother", "**children** = sons + daughters (child → children)", "**grandparents** = grandfather + grandmother"]),
    ],
    exercises: [
      match("Match the pairs.", [["father", "mother"], ["husband", "wife"], ["son", "daughter"], ["uncle", "aunt"], ["grandfather", "grandmother"]], "These words are pairs."),
      mc("My mother and father are my ___.", ["parents", "children", "cousins"], 0, "Parents = mother + father."),
      fill("My uncle's wife is my ___.", ["aunt"], "The wife of your uncle is your aunt."),
      mist("Find the mistake.", ["They have three", "childs", "."], 1, "children", "Child → children."),
      mc("My son and my daughter are my ___.", ["parents", "children", "friends"], 1, "Sons and daughters are children."),
      sa("Your mother's mother is your ___.", ["grandmother"], "grandmother.", { hint: "g _ _ _ _ _ _ _ _ r" }),
    ],
  },
  {
    slug: "beginner-vocab-numbers-31-100-prices",
    level: "BEGINNER", category: "VOCABULARY", title: "Numbers 31–100 and Prices", topic: "Numbers",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-vocab-numbers-1-30"],
    objective: "Say and write numbers from 31 to 100 and ask about prices.",
    tags: ["vocabulary", "numbers", "prices", "shopping", "A1"],
    ref: { book: HW, level: "Beginner", area: "Vocabulary", topic: "Numbers 31-100; prices (Unit 3-4)" },
    sections: [
      text("The tens are: **thirty, forty, fifty, sixty, seventy, eighty, ninety, a hundred**. Add the ones with a hyphen: **forty-five**, **sixty-two**."),
      table("Tens", ["Number", "Word"], [["30", "thirty"], ["40", "forty"], ["50", "fifty"], ["60", "sixty"], ["70", "seventy"], ["80", "eighty"], ["90", "ninety"], ["100", "a hundred"]]),
      list("Prices in Oman", ["1 rial = 1,000 baisa.", "Ask: How much is it? / How much are they?", "Answer: It's two rials. / They're five rials fifty baisa."]),
      tip("Do not confuse -teen and -ty: fourteen (14) and forty (40); fifteen (15) and fifty (50).", "Watch out"),
    ],
    exercises: [
      match("Match the number with the word.", [["40", "forty"], ["55", "fifty-five"], ["68", "sixty-eight"], ["90", "ninety"], ["100", "a hundred"]], "Tens + ones."),
      sa("Write in words: 45 → ___", ["forty-five", "forty five"], "40 + 5 = forty-five.", { hint: "forty-…" }),
      mc("Which is 15?", ["fifteen", "fifty"], 0, "Fifteen = 15; fifty = 50."),
      mc("How ___ is this bag? It's ten rials.", ["much", "many", "old"], 0, "Ask about price: How much?"),
      fill("How ___ are the books? They're five rials.", ["much"], "Prices: How much."),
      mist("Find the mistake.", ["I am", "fourty-two", "years old."], 1, "forty-two", "Spell forty without u."),
    ],
  },

  // ============================================================ WEEK 2 · READING
  {
    slug: "beginner-reading-family-salalah",
    level: "BEGINNER", category: "READING", title: "Reading: A Family in Salalah", topic: "Personal information",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-reading-postcard-cairo"],
    objective: "Read a short text about a family and find ages, jobs and names.",
    tags: ["reading", "reading-details", "family", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "A family (Unit 4)" },
    sections: [
      text("Texts about families give **names, ages and jobs**. Look for **numbers** (ages) and **job words**. Use **he / she / they** to know who the sentence is about.", "Reading strategy"),
      passage("Example", "Ahmed is 30. He is an engineer. His wife, Sara, is 28. She is a teacher.", "A short family text"),
      list("Guided practice", ["How old is Ahmed? → 30.", "What is Sara's job? → teacher.", "She = Sara (wife)."]),
    ],
    exercises: [
      mc("What is Mr Harthi's job?", ["driver", "nurse", "teacher"], 0, "“He is a driver.”", SALALAH_FAMILY),
      mc("What is Mrs Harthi's job?", ["driver", "nurse", "teacher"], 1, "“She is a nurse.”", SALALAH_FAMILY),
      sa("How old is Mona? (write a number)", ["10", "ten"], "“Mona is 10.”", { context: SALALAH_FAMILY }),
      tf("Ali is 10.", false, "Ali is 14.", SALALAH_FAMILY),
      mc("What is the cat's name?", ["Lulu", "Mona", "Ali"], 0, "“Its name is Lulu.”", SALALAH_FAMILY),
      mc("How many children do they have?", ["one", "two", "three"], 1, "A son and a daughter: two.", SALALAH_FAMILY),
    ],
  },
  {
    slug: "beginner-reading-e-pal",
    level: "BEGINNER", category: "READING", title: "Reading: My Online Friend", topic: "A personal profile",
    difficulty: "BASIC", minutes: 10, prereq: ["beginner-reading-family-salalah"],
    objective: "Read a short personal profile and find facts about a person.",
    tags: ["reading", "reading-details", "personal-information", "A1"],
    ref: { book: HW, level: "Beginner", area: "Reading", topic: "An e-pal profile (Unit 4)" },
    sections: [
      text("An **e-pal** (online friend) writes a short profile: **name, age, country, family, likes**. Read each sentence and find the fact.", "Reading strategy"),
      passage("Example", "Hi! I'm Ali. I'm 15. I'm from Egypt. I like football.", "A short profile"),
      list("Guided practice", ["Name? → Ali.", "Age? → 15.", "Country? → Egypt.", "Likes? → football."]),
    ],
    exercises: [
      mc("Where is Lucy from?", ["Sydney, Australia", "London, England", "Cairo, Egypt"], 0, "“I'm from Sydney, in Australia.”", E_PAL),
      sa("How old is Lucy? (write a number)", ["13", "thirteen"], "“I'm 13 years old.”", { context: E_PAL }),
      mc("What is her brother's name?", ["Jack", "Lucy", "Sam"], 0, "“My brother's name is Jack.”", E_PAL),
      tf("Jack is 13.", false, "Jack is 16.", E_PAL),
      mc("What does Lucy like?", ["dogs and music", "cats and sport", "food"], 0, "“I like dogs and music.”", E_PAL),
      mc("Who does Lucy live with?", ["her mother, father and brother", "her aunt", "her friends"], 0, "“I live with my mother, my father and my brother.”", E_PAL),
    ],
  },

  // ============================================================ WEEK 2 · WRITING
  {
    slug: "beginner-writing-table-to-sentences",
    level: "BEGINNER", category: "WRITING", title: "From a Table to Sentences: A Personal Profile", topic: "Table-to-sentence",
    difficulty: "BASIC", minutes: 12, prereq: ["beginner-writing-capitals-forms", "beginner-grammar-have-has"],
    objective: "Change the information in a profile table into correct sentences with he, she and they.",
    tags: ["writing", "table-to-paragraph", "personal-information", "pronouns", "A1"],
    ref: { book: HW, level: "Beginner", area: "Writing", topic: "Table-to-sentence conversion (Unit 3-4)" },
    sections: [
      text("In exams you often get a **table** with information about a person. You must write **sentences** from it. Follow three steps: **1.** Read one row. **2.** Write one sentence. **3.** Use **he / she / they** instead of the name after the first sentence.", "Explanation"),
      table("The table", ["Name", "Age", "Job", "Country", "Family"], [["Diego", "24", "student", "Spain", "one brother"]]),
      annotated("Table → sentences", [
        ["Sentence 1 (name + age)", "Diego is 24 years old."],
        ["Sentence 2 (job)", "He is a student."],
        ["Sentence 3 (country)", "He is from Spain."],
        ["Sentence 4 (family)", "He has one brother."],
      ]),
      list("Checklist", ["Capital letter at the start; full stop at the end.", "Verb agrees: He is · He has · They are.", "Use he / she after the first sentence (not the name again)."]),
    ],
    exercises: [
      order("Put the words in the correct order.", ["Diego", "is", "24", "years", "old."], "word", "Name + is + age + years old."),
      order("Put the sentences in the correct order.", ["Diego is 24 years old.", "He is a student.", "He is from Spain.", "He has one brother."], "paragraph", "Name, job, country, family."),
      fill("Layla is 19. ___ is a nurse. ___ is from Jordan. (use pronouns)", ["She", "She"], "Layla is a woman: she."),
      mc("Table: Name: Ali · Age: 30 · Country: Egypt. Which sentence is correct?", ["Ali is 30 years old.", "Ali are 30 years old.", "Ali have 30 years old."], 0, "Ali is 30 years old."),
      mist("Find the mistake.", ["Pam and Harry are married.", "He", "live in Leeds."], 1, "They", "Two people: they (and lives → live)."),
      mc("Table: Pam and Harry · teachers · London. Which is best?", ["They are teachers. They live in London.", "He is teachers. He lives in London.", "They is teacher. They live London."], 0, "They + are; live in London."),
    ],
  },
];

void [compare, examples, ms, tip];
