import { PRE_INT_U1_U3 } from "./pre-int-u1-u3";
import { PRE_INT_U4_U6 } from "./pre-int-u4-u6";
import { PRE_INT_U7_U9 } from "./pre-int-u7-u9";
import { PRE_INT_U10_U12 } from "./pre-int-u10-u12";
import { HW, CE, annotated, compare, examples, fill, list, match, mc, ms, mist, order, passage, sa, structure, text, tf, tip, vocab, type SeedLesson } from "./dsl";

const SLEEP = "A. Some people love mornings. They get up at five, exercise and eat a big breakfast. Morning people say the quiet hours before work are the best time to think.\n\nB. Other people are night owls. They feel awake and creative late in the evening, and they often work best after nine o'clock. Being a night owl is not laziness: it is simply how their body clock works.\n\nC. Whatever your type, sleep is important. Adults need about seven or eight hours every night. Without enough sleep, everyone finds it hard to concentrate.";
const REMOTE = "The village is remote. There are no shops, and the nearest town is three hours away by car. Because it is so far from everything, few tourists visit, and the villagers rely on farming and fishing to earn money.";
const WALKING = "Walking is the easiest way to stay healthy. First of all, it is free: you do not need special clothes or a gym. Second, it is good for your heart, and even a thirty-minute walk each day helps. Finally, walking makes you feel calmer, so many people use it to relax after work. For these reasons, everyone should walk more.";

export const PRE_INTERMEDIATE_CORE: SeedLesson[] = [
  // ------------------------------------------------------------ GRAMMAR
  {
    slug: "pre-int-grammar-present-perfect",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Present Perfect: Experiences and Recent Events", topic: "Present Perfect",
    difficulty: "CORE", minutes: 15, prereq: ["elementary-grammar-past-simple"],
    objective: "Use have / has + past participle to talk about life experiences and past events connected to now.",
    tags: ["grammar", "present-perfect", "tenses", "past-participle", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Grammar", topic: "Present Perfect" },
    sections: [
      text("The **Present Perfect** connects the past with the present. We do not say exactly when something happened; the experience or result is what matters now. We form it with **have / has + past participle**.", "Explanation"),
      list("When do we use it?", ["Life experiences (no time given): I have visited Turkey.", "Recent events with a result now: She has lost her keys, so she can't get in.", "With ever, never, already, yet, just: Have you ever eaten sushi?", "NOT with a finished time word: yesterday, last year, in 2019 → use Past Simple."]),
      structure("Structure", "Affirmative: subject + have / has + past participle\nNegative: subject + haven't / hasn't + past participle\nQuestion: Have / Has + subject + (ever) + past participle?", "The past participle of regular verbs = verb + -ed (visited). Many common verbs are irregular: be → been, see → seen, write → written, eat → eaten."),
      examples("Examples", {
        Affirmative: ["I have visited Turkey twice.", "She has finished her report."],
        Negative: ["We haven't seen that film.", "He hasn't called yet."],
        Questions: ["Have you ever eaten sushi?", "Has she arrived?"],
        "Short answers": ["Yes, I have. / No, I haven't.", "Yes, she has. / No, she hasn't."],
      }),
      compare("Present Perfect or Past Simple?", [["I have seen him yesterday.", "I saw him yesterday.", "A finished time (yesterday) needs the Past Simple."], ["Did you ever try camel milk?", "Have you ever tried camel milk?", "For life experience with no time, use the Present Perfect."]]),
    ],
    exercises: [
      mc("She ___ to Paris three times.", ["have been", "has been", "was"], 1, "She is third person singular: has + been. No finished time is given, so we use the Present Perfect."),
      fill("Have you ever ___ (see) a whale?", ["seen"], "See is irregular: see – saw – seen."),
      match("Match the verb with its past participle.", [["be", "been"], ["see", "seen"], ["write", "written"], ["eat", "eaten"]], "These four verbs are irregular. Their past participle is different from the base form."),
      mist("Find the mistake.", ["I have", "saw", "that film."], 1, "seen", "After have we need the past participle (seen), not the Past Simple (saw)."),
      mc("I ___ my keys yesterday.", ["lost", "have lost"], 0, "“Yesterday” is a finished time, so we use the Past Simple."),
      sa("Complete: She has ___ her homework. (do)", ["done"], "Do – did – done.", { hint: "past participle of do" }),
    ],
  },
  {
    slug: "pre-int-grammar-comparatives-superlatives",
    level: "PRE_INTERMEDIATE", category: "GRAMMAR", title: "Comparatives and Superlatives", topic: "Comparatives and superlatives",
    difficulty: "CORE", minutes: 12,
    objective: "Compare two things with comparatives and say which is the most or least with superlatives.",
    tags: ["grammar", "comparatives", "superlatives", "adjectives", "A2", "B1"],
    ref: { book: CE, level: "Pre-Intermediate", area: "Grammar", topic: "Comparing" },
    sections: [
      text("We use a **comparative** to compare two people or things, and a **superlative** to say which one is the top (or bottom) of three or more.", "Explanation"),
      list("How to form them", ["Short adjectives: add -er / -est (tall → taller → the tallest).", "Adjectives ending in consonant + y: -ier / -iest (happy → happier → the happiest).", "Long adjectives (2+ syllables): more / the most (expensive → more expensive → the most expensive).", "Irregular: good → better → the best; bad → worse → the worst."]),
      structure("Structure", "Comparative: A + is + adjective-er / more + adjective + than + B\nSuperlative: A + is + the + adjective-est / the most + adjective (+ in / of …)", "Never use both -er and more together: not “more taller”."),
      examples("Examples", { "": ["Muscat is bigger than Nizwa.", "This phone is more expensive than that one.", "It is the tallest building in the city.", "That was the best meal of my life."] }),
    ],
    exercises: [
      mc("Muscat is ___ than Nizwa.", ["big", "bigger", "more big"], 1, "Big is a short adjective, so we add -er: bigger."),
      fill("This is the ___ (interesting) book I know.", ["most interesting"], "Interesting is a long adjective: the most interesting."),
      mist("Find the mistake.", ["She is", "more taller", "than me."], 1, "taller", "Do not use more and -er together: taller than me."),
      sa("Complete: Mount Everest is the ___ mountain in the world. (high)", ["highest"], "Short adjective in a superlative: the + adjective + -est.", { hint: "-est" }),
      match("Match each adjective with its comparative.", [["big", "bigger"], ["happy", "happier"], ["expensive", "more expensive"], ["good", "better"]], "Short adjectives take -er; consonant + y changes to -ier; long adjectives use more; good is irregular."),
      order("Put the words in order.", ["This", "phone", "is", "cheaper", "than", "that", "one."], "word", "A + is + comparative + than + B."),
    ],
  },

  // --------------------------------------------------------- VOCABULARY
  {
    slug: "pre-int-vocab-travel-transport",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Travel and Transport", topic: "Travel",
    difficulty: "CORE", minutes: 12,
    objective: "Use travel words and the verbs that go with them (take a bus, miss a flight, book a ticket).",
    tags: ["vocabulary", "travel", "collocations", "listening-support", "A2", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Vocabulary", topic: "Travel" },
    sections: [
      text("In travel English, the **verb + noun partnerships** matter as much as the words themselves. We **take** a bus, **catch** a train, **miss** a flight and **book** a ticket. Learn them together."),
      vocab([
        { word: "airport", pos: "noun", meaning: "a place where planes take off and land", ar: "مطار", pron: "/ˈeəpɔːt/", ex: "We arrived at the airport two hours early.", col: ["arrive at the airport", "check in at the airport", "an international airport"], right: "I go to the airport by taxi.", wrong: "I go to the airport by the taxi.", note: "After “by” we use the transport with no article: by taxi, by bus.", visual: "✈️" },
        { word: "luggage", pos: "noun (uncountable)", meaning: "the bags and cases you take when you travel", ar: "الأمتعة", pron: "/ˈlʌɡɪdʒ/", ex: "Your luggage is too heavy.", col: ["carry your luggage", "hand luggage", "a piece of luggage"], right: "My luggage is heavy.", wrong: "My luggages are heavy.", note: "Luggage has no plural. Use “pieces of luggage”.", visual: "🧳" },
        { word: "journey", pos: "noun", meaning: "the act of travelling from one place to another", ar: "رحلة", pron: "/ˈdʒɜːni/", ex: "The journey from Muscat to Salalah takes about ten hours.", col: ["a long journey", "have a good journey"], right: "I had a nice journey.", wrong: "I had a nice travel.", note: "“Travel” is uncountable. For one trip, use journey or trip.", visual: "🛣️" },
        { word: "delay", pos: "noun / verb", meaning: "when something happens later than planned", ar: "تأخير", pron: "/dɪˈleɪ/", ex: "There was a two-hour delay because of the weather.", col: ["a long delay", "the flight was delayed"], right: "The flight was delayed.", wrong: "The flight was delay.", note: "As an adjective-like form we say “delayed”.", visual: "⏳" },
        { word: "ticket", pos: "noun", meaning: "a paper or e-document that lets you travel", ar: "تذكرة", pron: "/ˈtɪkɪt/", ex: "I booked the tickets online.", col: ["book a ticket", "a return ticket", "a one-way ticket"], right: "I booked a ticket.", wrong: "I made a ticket.", note: "The verb with ticket is book (or buy).", visual: "🎫" },
        { word: "miss", pos: "verb", meaning: "to arrive too late for a bus, train or plane", ar: "يفوّت", pron: "/mɪs/", ex: "I missed the last bus and walked home.", col: ["miss the bus", "miss a flight"], right: "I missed my flight.", wrong: "I lost my flight.", note: "We miss a train; we lose a thing (a wallet).", visual: "🏃" },
      ], "Travel words"),
    ],
    exercises: [
      match("Match the verb with the noun it goes with.", [["take", "a bus"], ["catch", "a train"], ["miss", "a flight"], ["book", "a ticket"]], "These are natural travel collocations."),
      fill("We arrived early to ___ in at the airport.", ["check"], "We check in at the airport before a flight."),
      mist("Find the mistake.", ["I had", "a nice", "travel."], 2, "journey", "For one trip we say a journey (travel is uncountable)."),
      mc("Which sentence is correct?", ["My luggages are heavy.", "My luggage is heavy.", "My luggage are heavy."], 1, "Luggage is uncountable, so it takes a singular verb: is."),
      mc("I always ___ the bus to work.", ["make", "take", "do"], 1, "We take a bus (or a taxi, or a train)."),
      mc("The plane left two hours late. The flight was ___.", ["delayed", "delay", "delaying"], 0, "“Delayed” describes something that happens later than planned."),
    ],
  },
  {
    slug: "pre-int-vocab-health",
    level: "PRE_INTERMEDIATE", category: "VOCABULARY", title: "Health and the Doctor", topic: "Health",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-vocab-travel-transport"],
    objective: "Talk about illness and visiting the doctor using natural collocations.",
    tags: ["vocabulary", "health", "collocations", "listening-support", "A2", "B1"],
    ref: { book: CE, level: "Pre-Intermediate", area: "Vocabulary", topic: "Health" },
    sections: [
      text("When you are ill, you need words for **symptoms**, **doctors** and **treatment**. Again, the verb partner is important: we **make** an appointment, **have** a fever and **recover from** an illness."),
      vocab([
        { word: "appointment", pos: "noun", meaning: "a time you arrange to see someone, such as a doctor", ar: "موعد", pron: "/əˈpɔɪntmənt/", ex: "I have a doctor's appointment at ten.", col: ["make an appointment", "cancel an appointment"], right: "I made an appointment.", wrong: "I took an appointment.", note: "The verb is make, not take.", visual: "📅" },
        { word: "prescription", pos: "noun", meaning: "a paper from a doctor that lets you buy medicine", ar: "وصفة طبية", pron: "/prɪˈskrɪpʃn/", ex: "Take the prescription to the pharmacy.", col: ["get a prescription", "on prescription"], right: "The doctor wrote a prescription.", wrong: "The doctor wrote a recipe for me.", note: "A recipe is for cooking; a prescription is for medicine.", visual: "📝" },
        { word: "fever", pos: "noun", meaning: "a high body temperature when you are ill", ar: "حمّى", pron: "/ˈfiːvə/", ex: "The child has a high fever.", col: ["have a fever", "a high fever"], right: "She has a fever.", wrong: "She has fever a.", note: "Use “a fever”.", visual: "🌡️" },
        { word: "recover", pos: "verb", meaning: "to become well again after illness", ar: "يتعافى", pron: "/rɪˈkʌvə/", ex: "He recovered quickly after the operation.", col: ["recover from an illness", "make a full recovery"], right: "She is recovering from the flu.", wrong: "She is recovering of the flu.", note: "The preposition is from.", visual: "💪" },
        { word: "advice", pos: "noun (uncountable)", meaning: "an opinion about what someone should do", ar: "نصيحة", pron: "/ədˈvaɪs/", ex: "The doctor gave me some good advice.", col: ["give advice", "ask for advice", "a piece of advice"], right: "The doctor gave me some advice.", wrong: "The doctor gave me some advices.", note: "Advice has no plural. Use “a piece of advice”.", visual: "💬" },
        { word: "injury", pos: "noun", meaning: "damage to a part of the body", ar: "إصابة", pron: "/ˈɪndʒəri/", ex: "He missed the match because of a knee injury.", col: ["a serious injury", "suffer an injury"], right: "He got injured playing football.", wrong: "He made an injury playing football.", note: "We suffer or get an injury; we don't make one.", visual: "🩹" },
      ], "Health words"),
    ],
    exercises: [
      match("Match the word with its meaning.", [["fever", "a high temperature when you are ill"], ["prescription", "a paper that lets you buy medicine"], ["appointment", "a time to see the doctor"], ["recover", "to become well again"]], "Each word belongs to a different stage: symptom, treatment, visit, result."),
      fill("You should make an ___ with the doctor.", ["appointment"], "We make an appointment."),
      mc("The doctor gave me some good ___.", ["advice", "advices", "an advice"], 0, "Advice is uncountable: some good advice."),
      mist("Find the mistake.", ["She is", "recovering", "of her illness."], 2, "from", "We recover from an illness."),
      mc("I have a ___ — my temperature is 39 degrees.", ["fever", "injury", "prescription"], 0, "A high temperature is a fever."),
      tf("You take a prescription to the pharmacy to get medicine.", true, "Yes. The pharmacist gives you the medicine written on the prescription."),
    ],
  },

  // ------------------------------------------------------------ WRITING
  {
    slug: "pre-int-writing-paragraph-structure",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Paragraph Structure: Topic, Support, Conclusion", topic: "Paragraph structure",
    difficulty: "CORE", minutes: 15, prereq: ["elementary-writing-sequencing"],
    objective: "Recognise and write the three main parts of a paragraph.",
    tags: ["writing", "writing-paragraph", "topic-sentence", "supporting-sentences", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Writing", topic: "Paragraph writing" },
    sections: [
      text("A good paragraph is about **one** main idea. It has three parts: a **topic sentence** that states the idea, **supporting sentences** that explain or give examples, and a **concluding sentence** that finishes the paragraph.", "Explanation"),
      annotated("Model paragraph", [
        ["Topic sentence", "Walking is the easiest way to stay healthy."],
        ["Supporting sentence 1", "First of all, it is free: you do not need special clothes or a gym."],
        ["Supporting sentence 2", "Second, it is good for your heart, and even a thirty-minute walk each day helps."],
        ["Supporting sentence 3", "Finally, walking makes you feel calmer, so many people use it to relax after work."],
        ["Concluding sentence", "For these reasons, everyone should walk more."],
      ]),
      list("Checklist", ["The topic sentence is general and clear.", "Every supporting sentence helps the topic sentence (no new topics).", "The concluding sentence repeats the idea in different words."]),
      tip("A sentence that is about something else breaks the paragraph. Delete it or move it to a new paragraph.", "Unity"),
    ],
    exercises: [
      mc("Which sentence is the topic sentence?", ["Walking is the easiest way to stay healthy.", "Second, it is good for your heart.", "For these reasons, everyone should walk more."], 0, "The topic sentence introduces the main idea of the whole paragraph.", WALKING),
      order("Put the sentences in the correct order.", ["Learning English online has many advantages.", "First, you can study at any time that suits you.", "Second, you save money because you don't travel.", "For these reasons, online study is a smart choice."], "paragraph", "Topic sentence → supporting sentences (with First, Second) → concluding sentence."),
      mc("Choose the best topic sentence for a paragraph about the benefits of reading.", ["I have many books at home.", "Reading every day brings several benefits.", "Books are sold in shops."], 1, "The topic sentence must state the main idea: the benefits of reading. The others are too narrow or off-topic."),
      ms("Select the TWO sentences that support the topic sentence “Regular exercise is good for you.”", ["It makes your heart stronger.", "My cousin lives in Dubai.", "It helps you sleep better.", "Football was invented in England."], [0, 2], "Only sentences about the benefits of exercise support the topic. The others change the subject."),
      mc("Which sentence does NOT belong in a paragraph about the benefits of walking?", ["It is good for your heart.", "It is free.", "My brother's car is very fast."], 2, "The car sentence is about a different topic, so it breaks the paragraph."),
      tf("The concluding sentence should introduce a completely new idea.", false, "It should finish the paragraph by returning to the main idea."),
    ],
  },
  {
    slug: "pre-int-writing-connectors",
    level: "PRE_INTERMEDIATE", category: "WRITING", title: "Connectors: because, so, but, however", topic: "Connectors",
    difficulty: "CORE", minutes: 12, prereq: ["beginner-writing-and-but"],
    objective: "Link ideas of reason, result and contrast with the right connector and punctuation.",
    tags: ["writing", "writing-connectors", "connectors", "punctuation", "B1"],
    ref: { book: CE, level: "Pre-Intermediate", area: "Writing", topic: "Linking words" },
    sections: [
      text("Connectors show the **relationship** between ideas. The right connector makes your writing clear; the wrong one confuses the reader.", "Explanation"),
      list("What each connector does", ["**because** gives a reason: I stayed home because I was ill.", "**so** gives a result: I was ill, so I stayed home.", "**but** shows contrast inside a sentence: I like tea, but I don't like coffee.", "**however** shows contrast between sentences: I like tea. However, I don't like coffee.", "**also / for example** add information: I also like milk. For example, I drink it every day."]),
      structure("Punctuation", "Sentence 1. However, sentence 2.      Sentence 1, but sentence 2.", "However is followed by a comma and starts a new sentence. Do not join two sentences with a comma + however."),
      compare("Fix the connector", [["I like tea, however I don't like coffee.", "I like tea. However, I don't like coffee.", "However starts a new sentence."], ["I was tired, because I went to bed early.", "I was tired, so I went to bed early.", "So gives the result; because gives the reason."]]),
    ],
    exercises: [
      fill("I wanted to go out, ___ it was raining.", [["but", "however"]], "Wanting to go out and rain are opposite ideas, so we need a contrast connector: “but”."),
      mc("She was very tired, ___ she went to bed early.", ["so", "because", "however"], 0, "Going to bed is the result of being tired: so."),
      mc("I don't eat meat ___ I'm vegetarian.", ["because", "so"], 0, "Being vegetarian is the reason: because."),
      mist("Find the mistake.", ["I like tea,", "however", "I don't like coffee."], 1, "but", "However can't join two sentences with just a comma. Use “but”, or start a new sentence: … . However, …"),
      sa("Join the sentences with because: I stayed at home. I was ill.", ["I stayed at home because I was ill.", "I stayed at home because I was ill"], "Result first, then because + reason.", { hint: "I stayed at home because…" }),
      mc("Choose the best connector to add an example: “Many fruits are healthy. ___, apples and oranges.”", ["For example", "However", "So"], 0, "For example introduces an example."),
    ],
  },

  // ------------------------------------------------------------ READING
  {
    slug: "pre-int-reading-skimming-headings",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Skimming and Matching Headings", topic: "Skimming",
    difficulty: "CORE", minutes: 14, prereq: ["elementary-reading-main-idea"],
    objective: "Skim a text for its general idea and match headings to paragraphs.",
    tags: ["reading", "reading-skimming", "reading-main-idea", "reading-matching", "B1"],
    ref: { book: HW, level: "Pre-Intermediate", area: "Reading", topic: "Skimming and gist" },
    sections: [
      text("**Skimming** means reading quickly to get the general idea, without reading every word. Look at the title, the first sentence of each paragraph, and any words that repeat. To **match headings**, decide what each paragraph is mostly about, then choose the heading that covers the whole paragraph.", "Reading strategy"),
      passage("Example text", "Tea is drunk in almost every country. In Britain, people add milk and often drink it in the afternoon.\n\nIn Morocco, tea is made with fresh mint and a lot of sugar. It is served to guests as a sign of welcome.\n\nIn Japan, tea is more than a drink. The tea ceremony is a slow, quiet ritual that can last for hours.", "Tea around the world"),
      list("Guided practice", ["Paragraph 1 → first sentence: tea in Britain (milk, afternoon) → heading: “Tea with milk”.", "Paragraph 2 → tea with mint, offered to guests → heading: “A welcome drink”.", "Paragraph 3 → the Japanese ceremony → heading: “Tea as a ritual”."]),
      tip("Do not choose a heading only because it shares one word with the paragraph. It must cover the whole paragraph."),
    ],
    exercises: [
      { ...match("Match each paragraph with the best heading.", [["Paragraph A", "Early birds"], ["Paragraph B", "Night owls"], ["Paragraph C", "The importance of sleep"]], "A is about people who like mornings, B about people who prefer the evening, C about sleep for everyone."), context: SLEEP },
      mc("What is the main idea of the whole text?", ["People have different daily rhythms, but all adults need enough sleep.", "Everybody should get up at five.", "Night owls work best in the morning."], 0, "The text describes two types of people and then says both need sleep.", SLEEP),
      mc("Which paragraph is about people who are most active late in the day?", ["A", "B", "C"], 1, "Paragraph B: night owls feel awake and creative in the evening.", SLEEP),
      tf("The text says night owls are lazy.", false, "It says being a night owl “is not laziness”.", SLEEP),
      sa("How many hours of sleep do adults need? (write the numbers)", ["7 or 8", "seven or eight", "about seven or eight", "7-8", "7 to 8", "seven to eight", "about 7 or 8"], "Paragraph C says adults need about seven or eight hours.", { context: SLEEP }),
    ],
  },
  {
    slug: "pre-int-reading-vocabulary-context",
    level: "PRE_INTERMEDIATE", category: "READING", title: "Guessing Vocabulary from Context", topic: "Vocabulary in context",
    difficulty: "CORE", minutes: 12, prereq: ["pre-int-reading-skimming-headings"],
    objective: "Work out the meaning of unknown words from the words around them.",
    tags: ["reading", "reading-vocabulary-context", "reading-comprehension", "B1"],
    ref: { book: CE, level: "Pre-Intermediate", area: "Reading", topic: "Deducing meaning" },
    sections: [
      text("You will always meet words you do not know. You do not need a dictionary every time. Use the **context**: the sentence around the word often tells you its meaning.", "Reading strategy"),
      list("Four steps", ["1. Decide the word's job: noun, verb or adjective?", "2. Read the sentence before and after for clues (reasons, examples, opposites).", "3. Guess the meaning.", "4. Put your guess in the sentence. Does it make sense?"]),
      passage("Example", "The hotel room was tiny. There was only space for a bed and a small chair, so we felt cramped.", "Clue: tiny, only space for a bed → cramped"),
      text("“Cramped” follows the ideas tiny and only space for a bed. It means **too small and uncomfortable**."),
    ],
    exercises: [
      mc("What does “remote” mean in the text?", ["far away from other places", "very noisy", "very expensive"], 0, "Clues: no shops, the nearest town is three hours away, few tourists visit.", REMOTE),
      mc("“The villagers rely on farming and fishing.” “Rely on” means…", ["depend on", "dislike", "forget"], 0, "They earn money from farming and fishing, so they depend on it.", REMOTE),
      mc("In the text, “few tourists visit” means…", ["not many tourists visit", "many tourists visit", "no tourists visit"], 0, "Few = a small number. Because it is far away, not many come.", REMOTE),
      mc("“She is very generous. She always gives money to people in need.” “Generous” means…", ["happy to give to others", "angry with others", "tired of helping"], 0, "The clue: she always gives money to people in need.", "She is very generous. She always gives money to people in need and never expects anything back."),
      tf("In the text, “remote” is the opposite of “close”.", true, "A remote village is far from other places, the opposite of close.", REMOTE),
    ],
  },
];

void HW; void annotated; void examples; void structure; void compare; void passage;

// Teaching order (Units 1-12), per category. Lessons not listed here go last.
const PLAN = [
  // grammar
  "pre-int-grammar-tense-review", "pre-int-grammar-question-forms", "pre-int-grammar-present-simple-vs-continuous", "pre-int-grammar-state-verbs",
  "pre-int-grammar-have-have-got", "pre-int-grammar-past-simple-vs-continuous", "pre-int-grammar-past-forms-ed-irregular",
  "pre-int-grammar-quantifiers", "pre-int-grammar-articles", "pre-int-grammar-verb-patterns", "pre-int-grammar-future-forms",
  "pre-int-grammar-present-perfect", "pre-int-grammar-for-since-pp-vs-ps", "pre-int-grammar-comparatives-superlatives", "pre-int-grammar-as-as-what-like",
  "pre-int-grammar-have-to", "pre-int-grammar-should-must", "pre-int-grammar-past-perfect", "pre-int-grammar-narrative-tenses-conjunctions",
  "pre-int-grammar-passive-simple", "pre-int-grammar-passive-perfect-will", "pre-int-grammar-present-perfect-continuous", "pre-int-grammar-pp-simple-vs-continuous",
  "pre-int-grammar-first-conditional-might", "pre-int-grammar-second-conditional",
  // vocabulary
  "pre-int-vocab-verb-pairs", "pre-int-vocab-adjective-collocations", "pre-int-vocab-two-meanings", "pre-int-vocab-free-time-lifestyle",
  "pre-int-vocab-manner-adverbs", "pre-int-vocab-time-expressions", "pre-int-vocab-travel-transport", "pre-int-vocab-food-measures",
  "pre-int-vocab-high-street-shops", "pre-int-vocab-phrasal-verbs-literal-idiomatic", "pre-int-vocab-word-building-stress", "pre-int-vocab-synonyms-antonyms",
  "pre-int-vocab-body-protective-gear", "pre-int-vocab-health", "pre-int-vocab-feelings-adjectives", "pre-int-vocab-compound-nouns-collocations",
  "pre-int-vocab-life-milestones", "pre-int-vocab-bring-take-come-go", "pre-int-vocab-prepositional-combinations",
  // reading
  "pre-int-reading-skimming-headings", "pre-int-reading-first-meeting", "pre-int-reading-lifestyle-quiz", "pre-int-reading-missing-painting",
  "pre-int-reading-kitchen-accidents", "pre-int-reading-young-achievers", "pre-int-reading-family-history", "pre-int-reading-vocabulary-context",
  "pre-int-reading-favourite-pictures", "pre-int-reading-stunt-performer", "pre-int-reading-bus-story", "pre-int-reading-famous-names",
  "pre-int-reading-collectors", "pre-int-reading-risk-chance",
  // writing
  "pre-int-writing-word-order-forms", "pre-int-writing-paragraph-structure", "pre-int-writing-cohesion-100-words", "pre-int-writing-connectors",
  "pre-int-writing-narrative-paragraph", "pre-int-writing-style-synonyms", "pre-int-writing-plans-ambitions", "pre-int-writing-chronological-biography",
  "pre-int-writing-comparison-paragraph", "pre-int-writing-formal-informal-register", "pre-int-writing-book-film-review", "pre-int-writing-discursive-essay",
  "pre-int-writing-notes-summary", "pre-int-writing-editing-proofreading",
];
const rank = (slug: string) => (PLAN.indexOf(slug) === -1 ? 999 : PLAN.indexOf(slug));
export const PRE_INTERMEDIATE: SeedLesson[] = [...PRE_INT_U1_U3, ...PRE_INT_U4_U6, ...PRE_INT_U7_U9, ...PRE_INT_U10_U12, ...PRE_INTERMEDIATE_CORE].sort(
  (a, b) => rank(a.slug) - rank(b.slug)
);
