import { HW, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";

// Elementary course, Teaching Weeks 9-10 (Units 9-12). Topics follow the academy's weekly report; all text is ORIGINAL.

const TOWERS = "Many people in big cities live in tall apartment buildings. The flats are often small, but the views are wonderful, and the air at the top is usually cooler and quieter than the street below.\n\nHowever, there are problems. The lifts are sometimes slow, and it is very expensive to buy a flat in a tall building. Window cleaners work at the top too. They hang from ropes, and on windy days their job is dangerous.";
const ADVENTURERS = "Long ago, explorers travelled by ship or on foot to find new lands. Today, almost every place on Earth is on a map, so modern adventurers look for new challenges. Some climb very high mountains. Some dive into deep caves under the sea, and others walk across deserts alone.\n\nThese adventures are dangerous, so people must train for years. A climber needs special boots and warm clothes, and a diver needs a mask and an air tank. Most importantly, adventurers need a strong mind: they must stay calm when things go wrong.";

export const ELEMENTARY_W9_W10: SeedLesson[] = [
  // ================================================================ WEEK 9 · GRAMMAR
  {
    slug: "elementary-grammar-comparatives",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Comparative Adjectives", topic: "Comparatives",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-like-would-like"],
    objective: "Compare two people, places or things with comparative adjectives and than.",
    tags: ["grammar", "comparatives", "adjectives", "city-life", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Comparative adjectives (Unit 9)" },
    sections: [
      text("We use a **comparative adjective** to compare **two** things: A is **bigger than** B. The form depends on the **length** of the adjective.", "Explanation"),
      list("When do we use it?", ["To compare places: Muscat is bigger than Nizwa.", "To compare things and prices: This bag is cheaper than that one.", "To say what is better or worse: The food here is better than at home."]),
      table("Making comparatives", ["Rule", "Adjective → comparative"], [
        ["1 syllable: + -er", "cheap → cheaper · old → older"],
        ["1 syllable, one vowel + one consonant: double the consonant", "big → bigger · hot → hotter"],
        ["ends in -y: y → -ier", "easy → easier · pretty → prettier"],
        ["2+ syllables: more + adjective", "expensive → more expensive · beautiful → more beautiful"],
        ["irregular", "good → better · bad → worse · far → further / farther"],
      ]),
      structure("Structure", "A + is / are + comparative + than + B", "Never use -er and more together: not more bigger."),
      examples("Examples", { Positive: ["Muscat is bigger than Sohar.", "Travelling by plane is faster than by car."], Longer: ["This hotel is more expensive than that one."], Irregular: ["The weather today is better than yesterday."] }),
    ],
    exercises: [
      fill("Muscat is much ___ (big) than Sohar.", ["bigger"], "big → bigger (double the g)."),
      fill("Diamonds are ___ (expensive) than gold.", ["more expensive"], "Long adjective: more expensive."),
      mist("Find the mistake.", ["This exam is", "more easier", "than the last one."], 1, "easier", "Don't use more and -er together: easier."),
      match("Match the adjective with its comparative.", [["cheap", "cheaper"], ["easy", "easier"], ["beautiful", "more beautiful"], ["good", "better"], ["bad", "worse"]], "Follow the rules: short = -er; -y = -ier; long = more; good and bad are irregular."),
      mc("A bus is ___ a taxi.", ["cheaper than", "more cheap than", "cheaper that"], 0, "cheap → cheaper + than."),
      order("Put the words in order.", ["My", "brother", "is", "older", "than", "me."], "word", "A + is + comparative + than + B."),
    ],
  },
  {
    slug: "elementary-grammar-superlatives",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Superlative Adjectives", topic: "Superlatives",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-grammar-comparatives"],
    objective: "Say which person, place or thing is the most or the least with superlative adjectives.",
    tags: ["grammar", "superlatives", "adjectives", "city-life", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Superlative adjectives (Unit 9)" },
    sections: [
      text("We use a **superlative adjective** to say which one is **number one** in a group of **three or more**: the **biggest**, the **most expensive**, the **best**.", "Explanation"),
      list("When do we use it?", ["To name the top of a group: Nizwa fort is the oldest building in the town.", "To say the best or worst: That is the best restaurant in my city.", "To describe records: Mount Everest is the highest mountain in the world."]),
      table("Comparative → superlative", ["Adjective", "Comparative", "Superlative"], [
        ["old", "older", "the oldest"], ["big", "bigger", "the biggest"], ["easy", "easier", "the easiest"],
        ["expensive", "more expensive", "the most expensive"], ["good", "better", "the best"], ["bad", "worse", "the worst"],
      ]),
      structure("Structure", "the + adjective-est   /   the most + long adjective\n… in + place  (the biggest city IN Oman)", "Always use the before a superlative. Use in with places and groups (in the class, in the world)."),
      examples("Examples", { Positive: ["This is the oldest house in the village.", "She is the tallest girl in the class."], Long: ["It's the most beautiful beach in Oman."], Irregular: ["This is the worst film I know."] }),
    ],
    exercises: [
      fill("What is ___ (good) restaurant in your city?", ["the best"], "good → the best."),
      fill("Mount Everest is ___ (high) mountain in the world.", ["the highest"], "high → the highest."),
      mist("Find the mistake.", ["It is", "most beautiful", "beach in Oman."], 1, "the most beautiful", "We need the before a superlative."),
      mc("She is the tallest girl ___ the class.", ["of", "in", "at"], 1, "Use in with a group or place: in the class."),
      match("Match the adjective with its superlative.", [["big", "the biggest"], ["expensive", "the most expensive"], ["bad", "the worst"], ["easy", "the easiest"]], "Use -est / the most; bad is irregular."),
      tf("“the most cheap” is correct.", false, "Cheap is short: the cheapest."),
    ],
  },
  {
    slug: "elementary-grammar-have-got",
    level: "ELEMENTARY", category: "GRAMMAR", title: "have got: Possession", topic: "have got",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-grammar-superlatives"],
    objective: "Use have got and haven't got to talk about what people own or have.",
    tags: ["grammar", "have-got", "possession", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "have got (Unit 9)" },
    sections: [
      text("In British English we often use **have got** instead of **have** to talk about possession, relationships and descriptions. The meaning is the same.", "Explanation"),
      list("When do we use it?", ["What we own: I've got a new laptop.", "Family and relationships: She's got two sisters.", "Descriptions: He's got brown eyes."]),
      table("Forms", ["Type", "Form", "Example"], [
        ["Positive", "have / has got ('ve / 's got)", "I've got a car. She's got a bicycle."],
        ["Negative", "haven't / hasn't got", "We haven't got a garden."],
        ["Question", "Have / Has + subject + got?", "Have you got a map?"],
        ["Short answers", "Yes, I have. / No, I haven't.", "Has he got a phone? — Yes, he has."],
      ]),
      structure("Structure", "I / you / we / they + have got      he / she / it + has got", "In short answers we don't repeat got: Yes, I have. (not Yes, I have got.)"),
      examples("Examples", { Positive: ["I've got a new phone.", "He's got a small flat."], Negative: ["She hasn't got a bicycle.", "We haven't got any milk."], Questions: ["Have you got a pen?", "Has she got a brother?"] }),
    ],
    exercises: [
      fill("___ you got a laptop? No, I ___.", ["Have", "haven't"], "Question: Have you got…? Short answer: No, I haven't."),
      mc("She ___ got two brothers.", ["have", "has", "is"], 1, "She takes has got."),
      mist("Find the mistake.", ["He", "haven't got", "a car."], 1, "hasn't got", "He takes hasn't got."),
      sa("Make it negative: We've got a garden. → We ___ got a garden.", ["haven't", "have not"], "Negative: haven't got.", { hint: "one word" }),
      order("Put the words in order.", ["Has", "she", "got", "a", "brother?"], "word", "Has + subject + got + noun?"),
      tf("“Yes, I have got.” is the normal short answer.", false, "The short answer is Yes, I have."),
    ],
  },

  // ================================================================ WEEK 9 · VOCABULARY
  {
    slug: "elementary-vocab-town-and-country",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Town and Country", topic: "Places",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-daily-needs"],
    objective: "Name features of a town and of the countryside and use them to compare places.",
    tags: ["vocabulary", "places", "city-life", "countryside", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Town and country (Unit 9)" },
    sections: [
      text("Towns and the countryside are very different. These words help you **describe and compare** places."),
      table("Town and country words", ["In a town", "In the country"], [
        ["museum", "field"], ["market", "river"], ["skyscraper", "lake"], ["shopping centre", "mountain"], ["traffic lights", "village"], ["square", "wood"],
      ]),
      vocab([
        { word: "museum", pos: "noun", meaning: "a building where you can see old or interesting things", ar: "متحف", pron: "/mjuˈziːəm/", ex: "The city museum is free on Saturdays.", col: ["visit a museum"], visual: "🏛️" },
        { word: "skyscraper", pos: "noun", meaning: "a very tall building in a city", ar: "ناطحة سحاب", pron: "/ˈskaɪskreɪpə/", ex: "There are many skyscrapers in Dubai.", col: ["a tall skyscraper"], visual: "🏙️" },
        { word: "market", pos: "noun", meaning: "a place where people buy and sell things, often outside", ar: "سوق", pron: "/ˈmɑːkɪt/", ex: "We buy fruit at the market.", col: ["go to the market"], visual: "🧺" },
        { word: "field", pos: "noun", meaning: "a large area of land where farmers grow crops", ar: "حقل", pron: "/fiːld/", ex: "The cows are in the field.", col: ["a field of wheat"], visual: "🌾" },
        { word: "mountain", pos: "noun", meaning: "a very high hill", ar: "جبل", pron: "/ˈmaʊntən/", ex: "We can see the mountains from our village.", col: ["climb a mountain"], visual: "⛰️" },
        { word: "village", pos: "noun", meaning: "a very small town in the countryside", ar: "قرية", pron: "/ˈvɪlɪdʒ/", ex: "My grandparents live in a small village.", col: ["a quiet village"], visual: "🏘️" },
      ], "Key words"),
    ],
    exercises: [
      match("Town or country?", [["skyscraper", "town"], ["mountain", "country"], ["shopping centre", "town"], ["field", "country"], ["museum", "town"], ["village", "country"]], "Skyscrapers, museums and shopping centres are in towns; fields, mountains and villages are in the country."),
      mc("A very tall building in a city is a ___.", ["skyscraper", "village", "field"], 0, "A skyscraper is very tall."),
      mc("Farmers grow crops in a ___.", ["museum", "field", "square"], 1, "Crops grow in fields."),
      fill("You can climb a ___.", ["mountain"], "You climb mountains."),
      mist("Find the mistake.", ["My grandparents live", "in a small museum", "in the country."], 1, "in a small village", "A village is a small place in the country; a museum is a building."),
      sa("A very small town in the countryside is a ___.", ["village"], "A village is a very small town.", { hint: "v _ _ _ _ _ e" }),
    ],
  },
  {
    slug: "elementary-vocab-prepositions-of-movement",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Prepositions of Movement and Directions", topic: "Directions",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-town-and-country"],
    objective: "Use prepositions of movement to give and follow simple directions.",
    tags: ["vocabulary", "prepositions", "directions", "town", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Prepositions of movement (Unit 9)" },
    sections: [
      text("**Prepositions of movement** say **where you go**. We use them to give **directions**, for example when a visitor asks the way."),
      table("Prepositions of movement", ["Preposition", "Meaning", "Example"], [
        ["along", "following a road or river", "Walk along the street."],
        ["through", "from one side to the other, inside", "Go through the tunnel."],
        ["over", "from one side to the other, above", "Go over the bridge."],
        ["past", "going by something", "Go past the bank."],
        ["up / down", "to a higher / lower place", "Go up the hill. Go down the stairs."],
      ]),
      list("Useful direction phrases", ["Turn left / Turn right", "Go straight on", "It's on your left / on your right", "Take the second turning on the left"]),
      examples("Giving directions", { "To the museum": ["Go along this street.", "Go past the bank.", "Go over the bridge.", "The museum is on your left."] }),
    ],
    exercises: [
      fill("Walk ___ the street and turn left at the bank.", ["along"], "Along = following the road."),
      mc("You cross a river by going ___ the bridge.", ["over", "through", "under"], 0, "Cross the bridge from one side to the other = over."),
      mc("The train goes ___ a long tunnel under the mountain.", ["past", "through", "over"], 1, "Inside from one side to the other = through."),
      match("Match the preposition with the meaning.", [["along", "following a road"], ["past", "going by something"], ["up", "to a higher place"], ["down", "to a lower place"]], "Each preposition describes a different movement."),
      order("Put the directions in order.", ["Go along this street.", "Go past the bank.", "Go over the bridge.", "The museum is on your left."], "paragraph", "Follow the route from the start to the museum."),
      mist("Find the mistake.", ["Go", "throw", "the tunnel."], 1, "through", "Through is the preposition (throw is a verb)."),
    ],
  },

  // ================================================================ WEEK 9 · READING
  {
    slug: "elementary-reading-tall-buildings",
    level: "ELEMENTARY", category: "READING", title: "Reading: Life in Tall Buildings", topic: "City life",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-story-of-coffee"],
    objective: "Find advantages and problems in a short text about city life.",
    tags: ["reading", "reading-main-idea", "reading-details", "city-life", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "Life at the top: skyscrapers (Unit 9)" },
    sections: [
      text("Some texts show **two sides** of a topic: the **good points** (advantages) and the **problems** (disadvantages). Words like **however** and **but** tell you that the writer is moving to the problems. Read for both sides.", "Reading strategy"),
      passage("Example", "Living near the sea is lovely: the air is fresh, and you can swim every day. However, the houses are expensive, and the summer is very hot.", "Two sides"),
      list("Guided practice", ["Advantages: fresh air, swimming.", "Signal word: However → the problems start here.", "Problems: expensive houses, hot summer."]),
    ],
    exercises: [
      ms("Select TWO advantages of living in a tall building.", ["wonderful views", "slow lifts", "cooler and quieter air", "expensive flats"], [0, 2], "“the views are wonderful, and the air at the top is usually cooler and quieter”.", TOWERS),
      mc("Which word shows the text is changing to problems?", ["However", "Also", "Because"], 0, "“However, there are problems.”", TOWERS),
      tf("The flats in tall buildings are usually big.", false, "“The flats are often small.”", TOWERS),
      mc("What is dangerous for window cleaners on windy days?", ["hanging from ropes", "using the lift", "cleaning the street"], 0, "“They hang from ropes, and on windy days their job is dangerous.”", TOWERS),
      mc("What is the main idea of the text?", ["Tall buildings have good points and problems.", "Window cleaners are rich.", "Everybody wants a big flat."], 0, "The text gives advantages and then problems of living in tall buildings.", TOWERS),
      mc("What is expensive?", ["buying a flat in a tall building", "using the lift", "cleaning windows"], 0, "“It is very expensive to buy a flat in a tall building.”", TOWERS),
    ],
  },

  // ================================================================ WEEK 9 · WRITING
  {
    slug: "elementary-writing-describing-place",
    level: "ELEMENTARY", category: "WRITING", title: "Describing a Place with who, which and where", topic: "Relative pronouns",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-writing-formal-informal"],
    objective: "Add extra information to a description with the relative pronouns who, which and where.",
    tags: ["writing", "writing-paragraph", "relative-clauses", "describing-places", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Describing a place: relative pronouns (Unit 9)" },
    sections: [
      text("**Relative pronouns** join two sentences and add information. They help you write **longer, smoother sentences**.", "Explanation"),
      table("who, which, where", ["Pronoun", "Use for", "Example"], [
        ["who", "people", "I met a guide who was very friendly."],
        ["which", "things", "We stayed in a hotel which had a lovely garden."],
        ["where", "places", "This is the market where I buy fresh fruit."],
      ]),
      annotated("Model paragraph", [
        ["Place", "Last month I visited Nizwa, a town which is famous for its old fort."],
        ["People", "I met a guide who told us many stories about the town."],
        ["Details", "We also went to the market where farmers sell dates and spices."],
      ]),
      tip("Do not repeat the person or thing: I met a man. He was kind. → I met a man who was kind.", "Remember"),
    ],
    exercises: [
      fill("I met a tour guide ___ was very friendly.", ["who"], "who for people."),
      fill("We stayed in a hotel ___ had a swimming pool.", ["which"], "which for things."),
      fill("This is the market ___ I buy fresh fruit.", ["where"], "where for places."),
      mist("Find the mistake.", ["I met a woman", "which", "speaks five languages."], 1, "who", "Use who for people."),
      order("Put the sentences in order to make a paragraph.", ["Last month I visited Sur, a town which is famous for its boats.", "I met a fisherman who showed us his boat.", "We ate lunch at a café where the fish was delicious."], "paragraph", "Place first, then people, then details."),
      sa("Join: I have a friend. She lives in Salalah. → I have a friend ___ lives in Salalah.", ["who"], "who joins the sentences (a person).", { hint: "who" }),
    ],
  },

  // ================================================================ WEEK 10 · GRAMMAR
  {
    slug: "elementary-grammar-present-continuous",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Present Continuous and Present Simple", topic: "Present tenses",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-grammar-have-got"],
    objective: "Use the Present Continuous for actions happening now or temporarily, and the Present Simple for routines and facts.",
    tags: ["grammar", "present-continuous", "present-simple", "tenses", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Present Continuous vs Present Simple (Unit 10)" },
    sections: [
      text("We use the **Present Continuous** for actions **happening now** or for **temporary** situations. We use the **Present Simple** for **routines and permanent facts**.", "Explanation"),
      list("When do we use each one?", ["Present Simple: routines and facts: I work in Muscat every day. It usually rains here in winter.", "Present Continuous: right now: Look! It's snowing. They aren't working now.", "Present Continuous: temporary: I'm working in Salalah this week."]),
      table("Forms", ["Type", "Form", "Example"], [
        ["Positive", "am / is / are + verb-ing", "I'm wearing a suit today."],
        ["Negative", "am / is / are + not + verb-ing", "They aren't working now."],
        ["Question", "Am / Is / Are + subject + verb-ing?", "What are you doing?"],
      ]),
      table("Spelling of -ing", ["Rule", "Example"], [
        ["Most verbs: + -ing", "work → working"], ["Ends in -e: drop e", "make → making"], ["One vowel + one consonant: double", "run → running · swim → swimming"],
      ]),
      structure("Structure", "subject + am / is / are + verb-ing\nClue words: now, at the moment, today, this week", "Present Simple clue words: every day, usually, always, on Mondays."),
    ],
    exercises: [
      fill("Look! It ___ (snow) outside. It usually ___ (rain) here in winter.", ["is snowing", "rains"], "Now: is snowing. Usually / winter facts: rains."),
      mc("I ___ in Muscat every day, but this week I ___ in Salalah.", ["work / work", "work / am working", "am working / work"], 1, "Routine: work. Temporary this week: am working."),
      mist("Find the mistake.", ["She", "is wearing", "a blue dress every day."], 1, "wears", "Every day = routine: the Present Simple."),
      match("Present Simple or Present Continuous?", [["He drives to work every day.", "Present Simple"], ["He is driving to work now.", "Present Continuous"], ["I'm studying for an exam this week.", "Present Continuous"], ["Water boils at 100°C.", "Present Simple"]], "Routines and facts = simple; now / temporary = continuous."),
      sa("Write the -ing form of run: ___", ["running"], "Run doubles the n: running.", { hint: "run + n + ing" }),
      order("Put the words in order.", ["What", "are", "you", "doing", "now?"], "word", "Question word + are + subject + verb-ing."),
    ],
  },
  {
    slug: "elementary-grammar-going-to",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Future Plans: going to and Infinitive of Purpose", topic: "Future",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-grammar-present-continuous"],
    objective: "Talk about plans and predictions with going to, and say why with the infinitive of purpose.",
    tags: ["grammar", "going-to", "future", "plans", "purpose", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "going to; infinitive of purpose (Unit 11)" },
    sections: [
      text("We use **going to** to talk about **plans** and **intentions** for the future, and for **predictions** when we can see evidence now. We use **to + verb** to say **why** we do something.", "Explanation"),
      list("When do we use it?", ["Plans: I'm going to study medicine next year.", "Predictions from evidence: Look at those clouds. It's going to rain.", "Purpose (why?): He went to university to become a doctor."]),
      table("going to", ["Type", "Form", "Example"], [
        ["Positive", "am / is / are + going to + base verb", "We're going to visit Rome."],
        ["Negative", "am / is / are + not + going to + verb", "She isn't going to come."],
        ["Question", "Am / Is / Are + subject + going to + verb?", "Are you going to travel this summer?"],
      ]),
      structure("Structure", "subject + be + going to + base verb\nWhy…? — to + base verb", "Don't say for to: I went to the market to buy fruit. (not for buy)"),
      examples("Examples", { Plans: ["I'm going to study medicine.", "They're going to fly to Rome next summer."], Purpose: ["She went to the bank to get some money.", "We are going to Rome to see the Colosseum."] }),
    ],
    exercises: [
      fill("Next summer, we ___ (going to / visit) Rome ___ (see) the Colosseum.", ["are going to visit", "to see"], "Plan: are going to visit. Purpose: to see."),
      mc("Look at the sky! It ___ rain.", ["is going to", "goes to", "going"], 0, "A prediction from evidence: is going to rain."),
      mist("Find the mistake.", ["I went to the shop", "for buy", "some bread."], 1, "to buy", "Purpose: to + verb."),
      sa("Make it negative: She is going to come. → She ___ going to come.", ["isn't", "is not"], "Negative: isn't going to.", { hint: "one word" }),
      order("Put the words in order.", ["Are", "you", "going", "to", "travel", "this", "summer?"], "word", "Are + subject + going to + verb."),
      match("Plan or purpose?", [["I'm going to study medicine.", "plan"], ["He went to university to become a doctor.", "purpose"], ["We're going to visit Rome.", "plan"], ["She went out to buy milk.", "purpose"]], "going to = plan; to + verb = reason."),
    ],
  },
  {
    slug: "elementary-grammar-present-perfect-intro",
    level: "ELEMENTARY", category: "GRAMMAR", title: "Present Perfect: ever, never, just, already, yet", topic: "Present Perfect",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-grammar-going-to"],
    objective: "Talk about life experiences and recent actions with have / has + past participle and ever, never, just, already and yet.",
    tags: ["grammar", "present-perfect", "past-participle", "experiences", "A2"],
    ref: { book: HW, level: "Elementary", area: "Grammar", topic: "Present Perfect (Unit 12)" },
    sections: [
      text("The **Present Perfect** connects the **past with now**. We use it for **life experiences** (without a finished time) and for **recent actions**. Form: **have / has + past participle**.", "Explanation"),
      list("When do we use it?", ["Life experiences: Have you ever visited Paris? — No, I have never been there.", "Recent action: I've just finished my exam.", "Earlier than expected: She's already packed her bag.", "Not yet: Have you checked in yet?"]),
      table("Time words", ["Word", "Meaning", "Position and example"], [
        ["ever", "at any time in your life (questions)", "Have you ever flown in a helicopter?"],
        ["never", "at no time in your life", "I have never eaten sushi."],
        ["just", "a very short time ago", "I've just finished my exam."],
        ["already", "earlier than expected", "She's already packed her bag."],
        ["yet", "until now (questions and negatives; at the end)", "Have you checked in yet? / I haven't finished yet."],
      ]),
      structure("Structure", "subject + have / has + past participle\nHave / Has + subject + (ever) + past participle?", "Irregular participles to learn: be → been · see → seen · fly → flown · eat → eaten · go → gone / been."),
      examples("Examples", { Positive: ["I've just finished my exam.", "She's already packed her bag."], Negative: ["We haven't checked in yet."], Questions: ["Have you ever flown in a helicopter?", "Has he called yet?"] }),
    ],
    exercises: [
      fill("___ you ever ___ (fly) in a helicopter?", ["Have", "flown"], "Present Perfect question: Have + subject + ever + past participle (flown)."),
      mc("I haven't finished my homework ___.", ["yet", "already", "ever"], 0, "In negatives, yet goes at the end."),
      mc("She has ___ packed her bag. It's ready!", ["yet", "already", "ever"], 1, "Already = earlier than expected."),
      mist("Find the mistake.", ["I have", "saw", "that film."], 1, "seen", "Present Perfect needs the past participle: seen."),
      match("Match the base form with its past participle.", [["be", "been"], ["see", "seen"], ["fly", "flown"], ["eat", "eaten"]], "These four verbs are irregular."),
      mc("Which sentence is about a life experience?", ["I visited Rome last year.", "I have never been to Rome.", "I'm going to visit Rome."], 1, "Life experience up to now, no finished time: Present Perfect."),
    ],
  },

  // ================================================================ WEEK 10 · VOCABULARY
  {
    slug: "elementary-vocab-clothes-appearance",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Clothes and Appearance", topic: "Clothes",
    difficulty: "BASIC", minutes: 12, prereq: ["elementary-vocab-prepositions-of-movement"],
    objective: "Name clothes and describe what people look like (hair, eyes) and what they are wearing.",
    tags: ["vocabulary", "clothes", "appearance", "describing-people", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Clothes and appearance (Unit 10)" },
    sections: [
      text("To describe a person you can talk about **what they look like** (hair, eyes) and **what they are wearing** (clothes). Use **have** for hair and eyes and **wear** for clothes."),
      table("Describing people", ["Topic", "Words", "Example"], [
        ["Hair", "long, short, straight, curly, fair, dark", "She has long dark hair."],
        ["Eyes", "blue, brown, green", "He has brown eyes."],
        ["Clothes", "suit, dress, tie, boots, jacket, T-shirt", "He's wearing a suit and a tie."],
      ]),
      vocab([
        { word: "suit", pos: "noun", meaning: "a jacket and trousers (or skirt) made from the same cloth", ar: "بدلة", pron: "/suːt/", ex: "He wears a dark suit to work.", col: ["wear a suit"], visual: "🤵" },
        { word: "dress", pos: "noun", meaning: "a piece of clothing for women that covers the body and legs", ar: "فستان", pron: "/dres/", ex: "She is wearing a long blue dress.", col: ["wear a dress"], visual: "👗" },
        { word: "tie", pos: "noun", meaning: "a long narrow piece of cloth worn round the neck with a shirt", ar: "ربطة عنق", pron: "/taɪ/", ex: "He wears a tie in the office.", col: ["wear a tie"], visual: "👔" },
        { word: "boots", pos: "noun (plural)", meaning: "strong shoes that cover the foot and ankle", ar: "حذاء طويل", pron: "/buːts/", ex: "She wears boots in the desert.", col: ["a pair of boots"], visual: "🥾" },
        { word: "fair / dark", pos: "adjective", meaning: "fair = light in colour (hair); dark = black or brown", ar: "فاتح / داكن", pron: "/feə/ · /dɑːk/", ex: "She has fair hair and blue eyes.", col: ["fair hair", "dark hair"], right: "She has dark hair.", wrong: "She is dark hair.", note: "We say has (hair / eyes) and is wearing (clothes).", visual: "👩" },
      ], "Key words"),
    ],
    exercises: [
      match("Describe it.", [["suit", "jacket and trousers"], ["tie", "worn round the neck"], ["boots", "strong shoes"], ["dress", "clothing for a woman"]], "Match each clothing word with its description."),
      fill("She ___ long dark hair and brown eyes.", ["has"], "Use has for hair and eyes."),
      fill("He ___ wearing a blue suit today.", ["is"], "Present Continuous: is wearing."),
      mist("Find the mistake.", ["He", "has", "wearing a grey jacket."], 1, "is", "We say is wearing (Present Continuous)."),
      mc("Which word describes hair colour?", ["fair", "tie", "boots"], 0, "Fair hair = light hair."),
      sa("You wear a ___ round your neck with a shirt.", ["tie"], "A tie goes round your neck.", { hint: "t _ e" }),
    ],
  },
  {
    slug: "elementary-vocab-weather",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Weather", topic: "Weather",
    difficulty: "BASIC", minutes: 10, prereq: ["elementary-vocab-clothes-appearance"],
    objective: "Describe the weather with adjectives (sunny, rainy) and the verbs it rains / it's raining.",
    tags: ["vocabulary", "weather", "seasons", "listening-support", "A1", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "Weather expressions (Unit 11)" },
    sections: [
      text("We describe the weather with **adjectives** made from nouns (sun → **sunny**) and with verbs (**It rains / It's raining**). We say **It is** + adjective: It's sunny today."),
      table("Weather words", ["Noun", "Adjective", "Example"], [
        ["sun", "sunny", "It's sunny and warm."], ["rain", "rainy", "It's a rainy day."], ["wind", "windy", "It's very windy today."],
        ["cloud", "cloudy", "It's cloudy this morning."], ["snow", "snowy", "It's snowy in the mountains."], ["fog", "foggy", "It's foggy on the road."],
        ["ice", "icy", "The roads are icy."], ["storm", "stormy", "It's stormy at sea."],
      ]),
      vocab([
        { word: "sunny", pos: "adjective", meaning: "with a lot of sun", ar: "مشمس", pron: "/ˈsʌni/", ex: "It's sunny in Muscat today.", col: ["a sunny day"], visual: "☀️" },
        { word: "cloudy", pos: "adjective", meaning: "with many clouds", ar: "غائم", pron: "/ˈklaʊdi/", ex: "It's cloudy, but it isn't raining.", col: ["cloudy sky"], visual: "☁️" },
        { word: "windy", pos: "adjective", meaning: "with a lot of wind", ar: "عاصف", pron: "/ˈwɪndi/", ex: "It's too windy to fly a kite.", col: ["a windy day"], visual: "💨" },
        { word: "stormy", pos: "adjective", meaning: "with strong wind, rain and thunder", ar: "عاصف / ماطر بشدة", pron: "/ˈstɔːmi/", ex: "The sea is stormy tonight.", col: ["stormy weather"], visual: "⛈️" },
        { word: "foggy", pos: "adjective", meaning: "with thick low cloud that makes it hard to see", ar: "ضبابي", pron: "/ˈfɒɡi/", ex: "It's foggy, so drive slowly.", col: ["a foggy morning"], visual: "🌫️" },
      ], "Key words"),
    ],
    exercises: [
      match("Noun → adjective.", [["sun", "sunny"], ["rain", "rainy"], ["wind", "windy"], ["fog", "foggy"], ["storm", "stormy"]], "Add -y (and sometimes double the last letter: fog → foggy)."),
      mc("There are a lot of clouds. It's ___.", ["sunny", "cloudy", "icy"], 1, "Many clouds = cloudy."),
      fill("It's too ___ to fly a kite. There's a lot of wind.", ["windy"], "A lot of wind = windy."),
      mist("Find the mistake.", ["Look! It", "rainy", "now."], 1, "is raining", "Now: It's raining (verb). It's rainy is used for a rainy day in general."),
      mc("Which sentence is correct?", ["It is fog today.", "It is foggy today.", "It fogs today is."], 1, "Adjective after it is: foggy."),
      sa("Write the adjective from snow: ___", ["snowy"], "snow + y = snowy.", { hint: "s _ _ _ y" }),
    ],
  },
  {
    slug: "elementary-vocab-take-get",
    level: "ELEMENTARY", category: "VOCABULARY", title: "Word Partners with take and get", topic: "Collocations",
    difficulty: "CORE", minutes: 12, prereq: ["elementary-vocab-weather"],
    objective: "Use common phrases with take and get correctly.",
    tags: ["vocabulary", "collocations", "take-get", "listening-support", "A2"],
    ref: { book: HW, level: "Elementary", area: "Vocabulary", topic: "take vs get collocations (Unit 12)" },
    sections: [
      text("**Take** and **get** are two of the most common English verbs. Each one goes with certain nouns and adjectives. Learn the whole phrase."),
      table("take or get?", ["take", "get"], [
        ["take photos", "get ready"], ["take a test", "get married"], ["take a taxi", "get to the airport"], ["take your time", "get tired"], ["take a shower", "get late (It's getting late.)"],
      ]),
      list("How to remember", ["**take** = do or use something: take a taxi, take a photo, take a test.", "**get** = arrive, receive or become: get to the airport, get tired, get married."]),
      compare("Common mistakes", [["I made a photo.", "I took a photo.", "The verb is take."], ["We did a taxi to the airport.", "We took a taxi to the airport.", "take a taxi."], ["I'm going to marry with Sara.", "I'm going to get married. / I'm going to marry Sara.", "get married (no with)."]]),
    ],
    exercises: [
      match("take or get?", [["a taxi", "take"], ["photos", "take"], ["ready", "get"], ["married", "get"], ["tired", "get"]], "take + things you do or use; get + becoming / arriving."),
      mc("We ___ a taxi to the airport.", ["did", "took", "made"], 1, "The natural verb is take a taxi."),
      fill("It's ___ late. Let's go home.", [["getting"]], "It's getting late = it is becoming late."),
      mist("Find the mistake.", ["I", "made", "a lot of photos."], 1, "took", "We take photos."),
      mc("How do you say you arrive at the airport?", ["get to the airport", "take the airport", "do the airport"], 0, "get to + place = arrive."),
      sa("Use your time, don't hurry: take your ___.", ["time"], "Take your time is a fixed phrase.", { hint: "t _ _ e" }),
    ],
  },

  // ================================================================ WEEK 10 · READING
  {
    slug: "elementary-reading-modern-adventurers",
    level: "ELEMENTARY", category: "READING", title: "Reading: Modern Adventurers", topic: "Adventure",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-tall-buildings"],
    objective: "Compare past and present in a short text and identify main ideas and supporting details.",
    tags: ["reading", "reading-main-idea", "reading-details", "comparison", "A2"],
    ref: { book: HW, level: "Elementary", area: "Reading", topic: "21st-century explorers (Unit 12)" },
    sections: [
      text("Some texts compare **the past and the present**. Look for words such as **long ago, today, now, but** that show the change. Then ask: **What is different?** and **why?**", "Reading strategy"),
      passage("Example", "Long ago, people wrote letters and waited weeks for an answer. Today, they send messages and get an answer in seconds.", "Past and present"),
      list("Guided practice", ["Past: letters, weeks of waiting.", "Present: messages, seconds.", "The main change: communication is much faster today."]),
    ],
    exercises: [
      mc("How did explorers travel long ago?", ["by ship or on foot", "by plane", "by motorbike"], 0, "“explorers travelled by ship or on foot”.", ADVENTURERS),
      mc("What do modern adventurers look for?", ["new lands", "new challenges", "new maps"], 1, "“modern adventurers look for new challenges”.", ADVENTURERS),
      tf("Almost every place on Earth is on a map today.", true, "“almost every place on Earth is on a map”.", ADVENTURERS),
      mc("What does a diver need?", ["a mask and an air tank", "warm boots", "a camel"], 0, "“a diver needs a mask and an air tank”.", ADVENTURERS),
      mc("Why must people train for years?", ["The adventures are dangerous.", "The adventures are cheap.", "They want to become famous."], 0, "“These adventures are dangerous, so people must train for years.”", ADVENTURERS),
      mc("What is the main idea of the text?", ["Modern adventurers look for new challenges and must prepare carefully.", "Explorers use ships today.", "Deserts are easy to cross."], 0, "The text compares old explorers with modern adventurers and explains their preparation.", ADVENTURERS),
    ],
  },

  // ================================================================ WEEK 10 · WRITING
  {
    slug: "elementary-writing-holiday-email",
    level: "ELEMENTARY", category: "WRITING", title: "A Holiday Email: but, however, although", topic: "Informal email",
    difficulty: "CORE", minutes: 16, prereq: ["elementary-writing-describing-place"],
    objective: "Write a three-paragraph holiday email using the right tense in each paragraph and contrast linkers.",
    tags: ["writing", "email", "writing-paragraph", "connectors", "tenses", "A2"],
    ref: { book: HW, level: "Elementary", area: "Writing", topic: "Holiday email; contrast linkers (Units 10-12)" },
    sections: [
      text("A holiday email to a friend is **informal** and has **three paragraphs**. Each paragraph uses a **different tense**. **Contrast linkers** show surprising or different ideas.", "Explanation"),
      table("Three paragraphs, three tenses", ["Paragraph", "Content", "Tense"], [
        ["1", "Where you are and the weather now", "Present Simple / Present Continuous"],
        ["2", "What you did", "Past Simple"],
        ["3", "Your plans", "going to / Present Continuous"],
      ]),
      table("Contrast linkers", ["Linker", "Pattern", "Example"], [
        ["but", "clause, but clause", "The weather was cold, but we enjoyed the holiday."],
        ["however", "Sentence. However, sentence.", "The weather was cold. However, we enjoyed the holiday."],
        ["although", "Although clause, clause", "Although the weather was cold, we enjoyed the holiday."],
      ]),
      annotated("Model email", [
        ["Paragraph 1: now", "Hi Amal! I'm writing from Salalah. The weather is hot, but there is a lovely breeze. I'm sitting on the beach now."],
        ["Paragraph 2: past", "Yesterday we visited the market and bought some frankincense. The food was expensive; however, it was delicious."],
        ["Paragraph 3: plans", "Tomorrow we're going to visit a waterfall. Next week I'm going to see my cousins in Muscat. See you soon! Nora"],
      ]),
      tip("Do not use but together with although: Although it was cold, we swam. (not Although it was cold, but we swam)", "Watch out"),
    ],
    exercises: [
      order("Put the email parts in order.", ["Hi Amal! I'm writing from Salalah.", "Yesterday we visited the market.", "Tomorrow we're going to visit a waterfall.", "See you soon! Nora"], "paragraph", "Now, past, future, ending."),
      match("Which tense?", [["We visited the market yesterday.", "Past Simple"], ["I'm sitting on the beach now.", "Present Continuous"], ["Tomorrow we're going to swim.", "going to"]], "Match each sentence with its tense."),
      mc("The weather was cold. ___, we enjoyed the holiday.", ["However", "Because", "So"], 0, "A contrast: however."),
      mist("Find the mistake.", ["Although the weather was cold,", "but", "we enjoyed it."], 1, "(remove but)", "Use although or but, not both."),
      fill("___ it was raining, we went for a walk.", ["Although"], "Although + clause shows contrast."),
      tf("Paragraph 3 of a holiday email talks about the past.", false, "Paragraph 3 is about your plans: going to."),
    ],
  },
];

void [compare, examples, ms, tf, tip, text, list];
