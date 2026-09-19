import { annotated, compare, fill, flow, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";
import { U } from "./upper-common";

// Upper-Intermediate, Units 1-3. Topics follow the academy's syllabus; every text is ORIGINAL (fictional where a story or profile is involved).

const HOMECOMING = "THE ROAD BACK TO HARBOUR STREET\n\n(A fictional story)\n\nWhen Idris was six, he fell asleep on a night train and woke up in a city he had never seen. For weeks he lived at the station, sleeping in a corner of the waiting hall and fending for himself with the help of a kind tea-seller. A charity eventually found him a place in a children's home, and, after two years, a family adopted him and took him abroad.\n\nGrowing up, Idris had only fragments of memory: a blue door, a bakery that smelled of cardamom, a canal with a broken bridge. Nothing more. As an adult, he had been searching for his birthplace on and off for years, and he had been studying satellite maps for months when he noticed a familiar curve in a river.\n\nHe flew there in the spring. The bakery was gone, but the bridge was still broken, and an old woman was sitting outside a blue door. “You were always a sleepy child,” she said, and then she wept. It had taken him twenty-five years to come home.";
const PLASTIC = "A PLANET DROWNING IN PLASTIC\n\nPlastic has changed modern life. It is light, cheap and strong, and it has made medicine, food storage and transport safer. Yet the qualities that make plastic so useful also make it a serious problem: it does not rot, and much of it is thrown away after being used only once.\n\nIt is estimated that millions of tonnes of plastic reach the oceans every year. Bottles, bags and fishing nets are swept out to sea, where sunlight and waves break them into tiny fragments called microplastics. Marine animals swallow these fragments, and traces of plastic have been found in seafood, drinking water and even table salt.\n\nGovernments are beginning to respond. Several countries have banned single-use bags, and some cities now charge for plastic cups. However, experts warn that bans alone are not enough. Unless manufacturers redesign packaging and consumers change their habits, the amount of plastic waste will continue to grow. What is at stake is not only the beauty of our beaches, but the health of the entire food chain.";
const HONEY = "THE HONEY MAKER OF WILLOW LANE\n\n(A fictional account)\n\nWhen Amal arrived in the town, she had lost her job, her savings and most of her belongings. What she still had was a small box of beekeeping tools and a great deal of stubbornness.\n\nA retired schoolteacher, Mr Ward, had noticed her sitting alone outside the library, and he had invited her for tea. Over the following weeks, neighbours she had never met lent her a garden, a few tables and even a cart. A local shop agreed to sell her first jars of honey, which she had produced while sleeping in a borrowed shed.\n\nToday, Amal employs six people and supplies honey to cafés across the region. “I had been expecting to struggle alone,” she says. “Instead, strangers treated me as if I had always belonged.” Every year, she gives away a hundred jars, because, as she puts it, kindness that is not passed on is wasted.";
const CLINGING = "THE VISITOR AT NUMBER NINE\n\n(A fictional short story)\n\nMrs Farrow had never liked her neighbour, and she liked her even less on the night the electricity failed. She was lighting a candle when she heard the knock. Nobody had visited her in years.\n\nOn the doorstep stood a young woman, soaked from the rain and holding a small suitcase. “I'm so sorry,” she said. “I've locked myself out. May I wait inside?” Mrs Farrow hesitated, but she let her in.\n\nThe young woman sat quietly all evening. She had been smiling the whole time, Mrs Farrow realised, and she had not said a single word about herself. At midnight, when the lights came back on, Mrs Farrow saw that the suitcase had been opened and that the young woman was wearing her mother's ring. “It suits me, doesn't it?” the woman said softly, and she was still smiling.";

export const UPPER_U1_U3: SeedLesson[] = [
  // ============================================================ UNIT 1
  U("upper-grammar-tense-system-review", "GRAMMAR", "The Tense System: Active, Passive, Simple and Continuous", "Tense review", "CORE", 18, ["int-grammar-reported-questions-verbs"],
    "Review the whole tense system, contrasting simple and continuous, active and passive, and state and dynamic verbs across past, present and future time.",
    ["grammar", "tenses", "passive-voice", "state-verbs", "tense-review"], "Tense system review (Unit 1)",
    [
      text("At Upper-Intermediate level you should be able to **choose the exact tense and voice** for your meaning. Each verb form combines **time** (past, present, future), **aspect** (simple, continuous, perfect) and **voice** (active, passive).", "Explanation"),
      table("Tense and voice grid", ["Tense", "Active", "Passive"], [
        ["Present Simple", "The company employs 200 people.", "200 people are employed by the company."],
        ["Present Continuous", "They are building a bridge.", "A bridge is being built."],
        ["Past Simple", "Someone stole my bag.", "My bag was stolen."],
        ["Past Continuous", "They were repairing the road.", "The road was being repaired."],
        ["Present Perfect", "They have closed the shop.", "The shop has been closed."],
        ["Future (will)", "They will announce the results.", "The results will be announced."],
      ]),
      table("State and dynamic verbs", ["Verb", "State (simple)", "Dynamic (continuous)"], [
        ["be", "He is polite. (his character)", "He is being rude today. (temporary behaviour)"],
        ["come", "She comes from Salalah. (origin)", "She is coming tomorrow. (arrangement)"],
        ["think", "I think it's expensive. (opinion)", "I'm thinking about the price. (process)"],
        ["see", "I see what you mean.", "I'm seeing the doctor at five."],
      ]),
      list("Choosing the form", ["**Focus on the doer** → active. **Focus on the receiver or the action** → passive.", "**Temporary or in progress** → continuous. **Permanent, habitual, complete** → simple.", "**Unfinished time up to now** → Present Perfect. **Finished time** → Past Simple."]),
      tip("Notice ‘You're being silly’ (behaviour now) versus ‘You're silly’ (character). Only a few state verbs allow this continuous meaning.", "Special case"),
    ],
    [
      mc("This road ___ at the moment, so please use the other entrance.", ["is being repaired", "is repaired", "repairs"], 0, "In progress now + passive: is being repaired."),
      mc("He ___ very rude today. It's not like him.", ["is being", "is", "has"], 0, "Temporary behaviour: is being."),
      fill("The results ___ (announce) tomorrow morning.", ["will be announced"], "Future passive: will be + participle."),
      mist("Find the mistake.", ["I", "am thinking", "that the price is too high."], 1, "think", "Opinion: state meaning, so Present Simple."),
      match("Which meaning?", [["She comes from Salalah.", "origin"], ["She is coming tomorrow.", "arrangement"], ["He is polite.", "character"], ["He is being polite.", "behaviour now"]], "State and dynamic uses differ."),
      order("Put the words in the correct order.", ["My", "bag", "was", "stolen", "while", "I", "was", "waiting."], "word", "Past Simple passive + while + Past Continuous."),
    ]),

  U("upper-vocab-compound-nouns-adjectives", "VOCABULARY", "Compound Nouns and Adjectives: life, heart, house and home", "Compounds", "CORE", 14, ["upper-grammar-tense-system-review"],
    "Understand and use compound nouns and adjectives built on life, heart, house and home.",
    ["vocabulary", "compound-nouns", "compound-adjectives", "word-building", "listening-support"], "Compound nouns and adjectives (Unit 1)",
    [
      text("A **compound** joins two words to make a new meaning. Compound nouns may be **one word** (lifestyle), **two words** (life expectancy) or **hyphenated** (life-size). Compound adjectives are usually **hyphenated** (heart-warming)."),
      table("Life and heart", ["Compound", "Meaning", "Example"], [
        ["lifestyle", "the way someone lives", "A healthy lifestyle includes regular exercise."],
        ["life expectancy", "the number of years a person is expected to live", "Life expectancy has risen in many countries."],
        ["life-size", "as big as the real thing", "There is a life-size statue in the square."],
        ["heartbroken", "extremely sad", "She was heartbroken when the shop closed."],
        ["heart-warming", "making you feel happy and hopeful", "It was a heart-warming story of friendship."],
        ["heartbeat", "the regular movement of the heart", "You can measure your heartbeat with a watch."],
      ]),
      table("House and home", ["Compound", "Meaning", "Example"], [
        ["houseplant", "a plant grown indoors", "A houseplant can improve the air."],
        ["house-proud", "very careful about the appearance of your home", "She is so house-proud that she cleans daily."],
        ["homecoming", "the return to your home", "The soldiers' homecoming was emotional."],
        ["homesick", "sad because you miss home", "He felt homesick during his first year abroad."],
        ["home-grown", "grown in your own garden or country", "We serve home-grown vegetables."],
        ["housebound", "unable to leave your house", "Illness left her housebound for weeks."],
      ]),
      tip("If you are unsure whether a compound is one word, two words or hyphenated, check a learner's dictionary and copy the form.", "Spelling"),
    ],
    [
      match("Match the compound with its meaning.", [["lifestyle", "the way someone lives"], ["homesick", "sad because you miss home"], ["housebound", "unable to leave the house"], ["heart-warming", "making you feel happy"], ["house-proud", "careful about the home's appearance"]], "Learn compounds as whole units."),
      mc("After a year abroad, he felt ___ and wanted to go back.", ["homesick", "house-proud", "heart-warming"], 0, "Homesick = sad because you miss home."),
      fill("The ___ of the returning students was full of joy.", ["homecoming"], "homecoming = the return home."),
      mist("Find the mistake.", ["It was a", "heart warming", "story about friendship."], 1, "heart-warming", "Compound adjectives are hyphenated."),
      mc("Which word describes vegetables grown in your own country?", ["home-grown", "homesick", "life-size"], 0, "Home-grown."),
      sa("The number of years a person is expected to live is life ___", ["expectancy"], "life expectancy.", { hint: "e _ _ _ _ _ _ _ _ y" }),
    ]),

  U("upper-reading-road-back-harbour", "READING", "Reading: The Road Back to Harbour Street", "Timeline and context", "CORE", 18, ["int-reading-holiday-from-hell"],
    "Trace a narrative timeline, use context to work out unknown words, and notice how tenses show sequence.",
    ["reading", "narrative", "timeline", "vocabulary-in-context", "tenses"], "Human-interest narrative (Unit 1)",
    [
      text("In a human-interest story, first build a **timeline** (what happened when), then look at the **tenses**: Past Perfect and Past Perfect Continuous point to events **before** the main story. For unknown words, use **context clues**: nearby examples, contrasts and explanations.", "Reading strategy"),
      passage("Example", "By the time the ambulance arrived, the crowd had been waiting for almost an hour and had begun to lose hope.", "Earlier background"),
      list("Timeline practice", ["Earlier → the crowd had been waiting for almost an hour.", "Main event → the ambulance arrived.", "Result → they had begun to lose hope."]),
    ],
    [
      mc("Where did Idris wake up after the night train?", ["in a city he did not know", "at his home", "in a hospital"], 0, "“woke up in a city he had never seen”.", HOMECOMING),
      mc("Who helped him at the station?", ["a kind tea-seller", "a policeman", "a teacher"], 0, "“the help of a kind tea-seller”.", HOMECOMING),
      mc("What does “fending for himself” mean in this context?", ["looking after himself without help from his family", "playing games", "working for a charity"], 0, "He lived alone and managed by himself.", HOMECOMING),
      mc("Which memory fragment did Idris NOT have?", ["a lighthouse", "a blue door", "a broken bridge"], 0, "He remembered a blue door, a bakery and a canal with a broken bridge.", HOMECOMING),
      mc("How did he finally find the place?", ["He noticed a familiar curve of a river on a satellite map.", "A relative wrote to him.", "A newspaper printed a photograph."], 0, "He had been studying satellite maps for months.", HOMECOMING),
      tf("The bakery was still open when he returned.", false, "“The bakery was gone.”", HOMECOMING),
    ]),

  U("upper-writing-correction-codes", "WRITING", "Editing with Correction Codes: Gr, T, WW, WO, Sp, P", "Editing", "CORE", 16, ["int-writing-thesis-editing"],
    "Read and use standard correction symbols to identify, classify and correct your own errors.",
    ["writing", "editing", "error-correction", "correction-codes", "accuracy"], "Editing and correction codes (Unit 1)",
    [
      text("Teachers and examiners often mark errors with **codes**. Learning them lets you **find and fix your own mistakes** — an essential skill for exam writing. Edit in **rounds**, looking for one type of error each time.", "Explanation"),
      table("Correction codes", ["Code", "Meaning", "Example error → correction"], [
        ["Gr", "grammar", "She don't know → She doesn't know"],
        ["T", "tense", "I have seen him yesterday → I saw him yesterday"],
        ["WW", "wrong word", "She made a research → She did some research"],
        ["WO", "word order", "Always I am late → I am always late"],
        ["Sp", "spelling", "recieve → receive"],
        ["P", "punctuation", "however it rained → However, it rained."],
        ["^", "word missing", "I want ^ go home → I want to go home"],
        ["//", "new paragraph", "start a new paragraph here"],
      ]),
      annotated("Edit a paragraph", [
        ["Original", "Last year I have visited my grandparents. Always I enjoyed the visit and I recieve a lot of advice."],
        ["T", "Last year I visited (not have visited): finished time."],
        ["WO", "I always enjoyed (adverb before the main verb)."],
        ["Sp + T", "and received a lot of advice (spelling and tense)."],
        ["Corrected", "Last year I visited my grandparents. I always enjoyed the visit, and I received a lot of advice."],
      ]),
      tip("Keep an error log: write your three most frequent error types and check for them first every time you edit.", "Strategy"),
    ],
    [
      match("Match the code with its meaning.", [["Gr", "grammar"], ["T", "tense"], ["WW", "wrong word"], ["WO", "word order"], ["Sp", "spelling"]], "Learn the six main codes."),
      mist("Find the mistake (code: T).", ["I", "have seen", "him yesterday."], 1, "saw", "Definite past time: Past Simple."),
      mist("Find the mistake (code: WO).", ["Always", "I", "am late for class."], 0, "I am always late", "Frequency adverbs go before the main verb, after be."),
      mist("Find the mistake (code: WW).", ["She", "made", "some research last year."], 1, "did", "The collocation is do research."),
      mist("Find the mistake (code: Sp).", ["I will", "recieve", "the parcel tomorrow."], 1, "receive", "i before e except after c."),
      mc("What does the symbol ^ in a corrected text show?", ["a word is missing", "a wrong tense", "a new paragraph"], 0, "The caret marks a missing word."),
    ]),

  // ============================================================ UNIT 2
  U("upper-grammar-present-perfect-simple-continuous", "GRAMMAR", "Present Perfect Simple, Present Perfect Continuous and Past Simple", "Present Perfect", "CORE", 18, ["upper-grammar-tense-system-review"],
    "Contrast the Present Perfect Simple and Continuous with the Past Simple for finished and unfinished time, results and activities.",
    ["grammar", "present-perfect", "present-perfect-continuous", "past-simple", "unfinished-time"], "Present Perfect Simple vs Continuous (Unit 2)",
    [
      text("These three forms answer different questions: **When?** (Past Simple, finished time), **How many / what result?** (Present Perfect Simple) and **How long / what activity?** (Present Perfect Continuous).", "Explanation"),
      table("Which form?", ["Form", "Focus", "Example"], [
        ["Past Simple", "finished time; the past is over", "I lived in Muscat for five years. (I don't live there now.)"],
        ["Present Perfect Simple", "result, completion, number; unfinished time period", "I've written 3,000 words this week."],
        ["Present Perfect Continuous", "activity and duration; recent activity with evidence", "I've been writing since nine. My hand is tired."],
      ]),
      list("Rules of thumb", ["**this week / today / so far / recently / already / yet** (unfinished time) → Present Perfect.", "**yesterday / in 2019 / last night / ago** (finished time) → Past Simple.", "**How long?** → Continuous (for activities) or Simple (for state verbs).", "**How many / how much?** → Simple: I've read six chapters."]),
      compare("Errors", [["I've been knowing him for years.", "I've known him for years.", "State verb."], ["I have been reading three novels this month.", "I have read three novels this month.", "A number: Simple."], ["She has lived in Cairo in 2015.", "She lived in Cairo in 2015.", "Finished time."]]),
    ],
    [
      mc("I ___ on this report since eight o'clock, and I'm still not finished.", ["have been working", "worked", "have worked"], 0, "Activity + duration: Continuous."),
      mc("I ___ six chapters of the book so far.", ["have read", "have been reading", "read"], 0, "A number: Simple."),
      mist("Find the mistake.", ["She", "has lived", "in Cairo in 2015."], 1, "lived", "A finished time expression needs Past Simple."),
      fill("I'm exhausted; I ___ (run) for an hour.", [["have been running", "'ve been running"]], "Recent activity with evidence: continuous."),
      match("Simple or continuous?", [["I've broken my glasses.", "result"], ["I've been cleaning all day.", "activity"], ["She has known him for years.", "state verb"], ["He wrote it in 2019.", "finished time"]], "Match each use."),
      order("Put the words in the correct order.", ["How", "many", "emails", "have", "you", "written", "today?"], "word", "How many + have + subject + participle."),
    ]),

  U("upper-vocab-make-do", "VOCABULARY", "make and do: Collocations and Phrasal Verbs", "Make and do", "CORE", 14, ["upper-vocab-compound-nouns-adjectives"],
    "Use fixed collocations and phrasal verbs with make and do accurately.",
    ["vocabulary", "make", "do", "collocations", "phrasal-verbs", "listening-support"], "Make and do (Unit 2)",
    [
      text("**Make** often means to create or produce; **do** often means to perform an activity or task. But many uses are **fixed collocations**, so they must be learned as chunks."),
      table("Collocations", ["make", "do"], [
        ["make an impression, a suggestion, an effort, a decision, a mistake, progress, money, a difference", "do research, business, a favour, homework, damage, harm, your best, the shopping"],
      ]),
      table("Phrasal verbs", ["Phrasal verb", "Meaning", "Example"], [
        ["make off with", "steal and run away with", "Someone made off with my laptop."],
        ["make up for", "compensate for", "The good service made up for the long wait."],
        ["make up", "invent a story / become friends again", "He made up an excuse."],
        ["do away with", "abolish, get rid of", "The school did away with uniforms."],
        ["do without", "manage without", "I can't do without my phone."],
        ["could do with", "need or would benefit from", "I could do with a holiday."],
        ["do up", "fasten / renovate", "They are doing up an old house."],
      ]),
    ],
    [
      match("Which verb: make or do?", [["a suggestion", "make"], ["research", "do"], ["a difference", "make"], ["a favour", "do"], ["business", "do"]], "Learn the collocations as chunks."),
      mc("The friendly staff ___ the long wait.", ["made up for", "did away with", "made off with"], 0, "make up for = compensate for."),
      fill("I really ___ with a holiday. I'm so tired.", ["could do"], "could do with = need."),
      mist("Find the mistake.", ["She", "made", "research on marine life."], 1, "did", "The collocation is do research."),
      mc("A thief ___ my bike last night.", ["made off with", "did without", "made up"], 0, "make off with = steal and run."),
      sa("The government wants to ___ away with the old regulations. (abolish)", ["do"], "do away with = abolish.", { hint: "d _" }),
    ]),

  U("upper-reading-plastic-planet", "READING", "Reading: A Planet Drowning in Plastic", "Data and evidence", "CHALLENGING", 18, ["upper-reading-road-back-harbour"],
    "Extract data, technical terms and textual evidence from a persuasive environmental article, including dense sentences with hedging.",
    ["reading", "environment", "evidence", "hedging", "persuasive-text"], "Environmental journalism (Unit 2)",
    [
      text("Persuasive environmental journalism mixes **facts**, **estimates** and **calls to action**. Separate them: numbers and studies are evidence; words such as *is estimated*, *experts warn* and *must* show attitude. Also read **long sentences** slowly by finding the main verb first.", "Reading strategy"),
      passage("Example", "Unless factories reduce emissions, cities will continue to choke; what is at stake is the health of millions.", "Condition + consequence"),
      list("Guided practice", ["Main clause → cities will continue to choke.", "Condition → unless factories reduce emissions.", "Emphasis → what is at stake is …"]),
    ],
    [
      mc("What two qualities make plastic useful AND problematic?", ["It is cheap and does not rot.", "It is heavy and expensive.", "It is soft and colourful."], 0, "Cheap, strong and it does not rot.", PLASTIC),
      mc("What are microplastics?", ["tiny fragments formed when plastic breaks down", "small plastic toys", "recycled bottles"], 0, "“break them into tiny fragments called microplastics”.", PLASTIC),
      mc("Why does the writer use “It is estimated”?", ["The figure is not exact.", "The writer is angry.", "It is a legal term."], 0, "Hedging shows an estimate.", PLASTIC),
      mc("What do experts say about bans on plastic bags?", ["They are not enough on their own.", "They solve the problem completely.", "They are harmful."], 0, "“bans alone are not enough”.", PLASTIC),
      tf("The text says plastic has been found in drinking water.", true, "“traces of plastic have been found in seafood, drinking water…”", PLASTIC),
      mc("What does “what is at stake” refer to?", ["what could be lost", "what is for sale", "what is being built"], 0, "At stake = at risk.", PLASTIC),
    ]),

  U("upper-writing-cause-effect-problem-solution", "WRITING", "Cause, Effect and Problem–Solution Essays", "Essay structure", "CHALLENGING", 20, ["upper-writing-correction-codes", "upper-writing-contrast-result"],
    "Structure a formal essay that explains causes and effects and proposes solutions, using precise thesis statements and cause/effect markers.",
    ["writing", "essay", "cause-effect", "problem-solution", "thesis-statement", "formal-writing"], "Cause, effect and solution essays (Unit 2)",
    [
      text("A **problem–solution essay** describes a problem, explains its **causes and effects**, then proposes **realistic solutions**. Your **thesis** should name the problem and preview your solutions.", "Explanation"),
      table("Structure (about 200 words)", ["Paragraph", "Words", "Content"], [
        ["Introduction", "40", "background + thesis: problem and main solution"],
        ["Causes and effects", "60", "two causes, their effects, one example"],
        ["Solutions", "60", "two solutions with an explanation of how they work"],
        ["Conclusion", "40", "restate thesis + a final recommendation"],
      ]),
      table("Language of cause, effect and solution", ["Function", "Phrases"], [
        ["Cause", "is caused by · results from · owing to · because of · is responsible for"],
        ["Effect", "leads to · gives rise to · results in · consequently · as a result"],
        ["Solution", "One way to tackle this is to … · It is essential that … · A more effective approach would be to …"],
      ]),
      annotated("Model thesis and topic sentences", [
        ["Thesis", "Although single-use plastic is convenient, it is polluting oceans and harming wildlife; therefore, governments and consumers must reduce it."],
        ["Cause", "One major cause of this pollution is the enormous quantity of disposable packaging."],
        ["Solution", "One way to tackle this is to charge for plastic bags, which encourages shoppers to bring their own."],
      ]),
      tip("Use precise vocabulary: single-use, pristine, clogged, swamped, lethal, at stake. Avoid vague words like ‘thing’ or ‘bad’.", "Vocabulary"),
    ],
    [
      order("Put the parts of the essay in order.", ["Introduction with thesis", "Causes and effects", "Solutions", "Conclusion"], "paragraph", "Introduce, analyse, solve, conclude."),
      mc("Which is the strongest thesis?", ["Plastic pollution is a serious problem caused by disposable packaging, and it can be reduced by stricter laws and changes in consumer behaviour.", "Plastic is everywhere.", "This essay is about plastic."], 0, "Names the problem, cause and solutions."),
      mc("Which phrase introduces an EFFECT?", ["This gives rise to …", "This is caused by …", "One way to tackle this is …"], 0, "Gives rise to = leads to."),
      mist("Find the mistake (formal register).", ["Plastic is", "a big thing", "for the oceans."], 1, "a serious problem", "Avoid vague ‘thing’ in formal writing."),
      fill("Pollution is ___ (cause) by disposable packaging.", ["caused"], "Passive: is caused by."),
      match("Which function?", [["results in", "effect"], ["is responsible for", "cause"], ["A more effective approach would be to …", "solution"]], "Match the phrase to its function."),
    ]),

  U("upper-writing-in-class-1-preparation", "WRITING", "In-Class Writing 1: Planning a 200-Word Essay under Time Pressure", "Assessment preparation", "CHALLENGING", 22, ["upper-writing-cause-effect-problem-solution", "upper-writing-adverbs-narrative"],
    "Plan, write, and check a 200-word formal essay in class time using a repeatable routine.",
    ["writing", "essay", "assessment-practice", "time-management", "200-words"], "In-Class Writing 1 preparation (Weeks 1-3)",
    [
      text("Your first in-class essay is about **200 words** on an environmental or social issue. Success depends on a **routine**: plan, write, check. A model timing for a 40-minute task:", "Explanation"),
      table("Timing", ["Stage", "Minutes", "What to do"], [["Plan", "5", "read the question; choose your position; list 2 causes / solutions"], ["Write", "27", "four paragraphs; topic sentence in each"], ["Check", "8", "edit with correction codes: T, Gr, WW, Sp, P; count words"]]),
      annotated("Model essay: A Change I Want to Make (about 200 words)", [
        ["Introduction", "Every day, millions of plastic bottles are used once and thrown away. Although they are convenient, they pollute our oceans and harm marine life. I believe that the change we most need is to replace single-use plastic with reusable alternatives."],
        ["Causes and effects", "The main cause of the problem is the habit of buying drinks in disposable bottles. As a result, beaches are swamped with rubbish and animals swallow fragments of plastic. Consequently, the damage reaches every level of the food chain."],
        ["Solutions", "One way to tackle this is to install free water-refill points in public places. In addition, shops could charge a small fee for plastic bottles, which would encourage people to bring their own."],
        ["Conclusion", "In conclusion, plastic pollution is not inevitable. If individuals and governments act together, our oceans can recover, and future generations will inherit a cleaner planet."],
      ]),
      list("Checklist", ["Thesis in the introduction?", "One main idea per paragraph?", "Cause/effect and solution markers used?", "Formal register (no contractions, no slang)?", "200 words ± 10%?"]),
    ],
    [
      order("Put the stages of the timed routine in order.", ["Plan", "Write", "Check"], "sentence", "Plan first, write, then edit."),
      mc("How many minutes should you spend planning in a 40-minute task?", ["about 5", "about 25", "0"], 0, "A short plan saves time later."),
      mist("Find the mistake (register).", ["Plastic", "is really bad", "for the sea."], 1, "is extremely harmful", "Avoid informal phrasing."),
      mc("Which sentence would be best for a conclusion?", ["In conclusion, plastic pollution is not inevitable.", "There are many bottles.", "For example, water refill points."], 0, "It closes the essay with a thesis restatement."),
      fill("If individuals and governments ___ (act) together, oceans can recover.", ["act"], "First conditional: If + Present Simple."),
      mc("What is the target length for this essay?", ["about 200 words", "about 50 words", "about 500 words"], 0, "200 words, four paragraphs."),
    ]),

  // ============================================================ UNIT 3
  U("upper-grammar-narrative-tenses", "GRAMMAR", "Narrative Tenses: Past Simple, Continuous and Perfect (Active and Passive)", "Narrative tenses", "CORE", 18, ["upper-grammar-present-perfect-simple-continuous"],
    "Combine Past Simple, Past Continuous, Past Perfect Simple and Past Perfect Continuous in active and passive narratives.",
    ["grammar", "narrative-tenses", "past-perfect", "past-perfect-continuous", "passive-voice"], "Narrative tenses (Unit 3)",
    [
      text("Narrative texts use **background** (continuous), **events** (simple) and **earlier events** (perfect). The **Past Perfect Continuous** shows an **activity in progress before** another past event.", "Explanation"),
      table("Narrative tenses", ["Tense", "Form", "Job", "Example"], [
        ["Past Simple", "verb-ed", "events in order", "She opened the letter."],
        ["Past Continuous", "was / were + -ing", "background / interrupted", "It was raining when we left."],
        ["Past Perfect Simple", "had + participle", "earlier completed event", "I had already eaten."],
        ["Past Perfect Continuous", "had been + -ing", "earlier activity with duration or effect", "She was tired because she had been working all night."],
        ["Passive forms", "was / had been + participle", "focus on the receiver", "The window had been broken. The suspect was being questioned."],
      ]),
      flow("Which past tense?", [["Is it a completed event in the main story?", "Past Simple"], ["Was it in progress at that moment, or is it background?", "Past Continuous"], ["Did it happen before the main story and is it completed?", "Past Perfect Simple"]], "Past Perfect Continuous (earlier activity; duration or visible result)"),
    ],
    [
      mc("She was exhausted because she ___ all night.", ["had been working", "was working", "worked"], 0, "Earlier activity with duration/result: Past Perfect Continuous."),
      mc("When the police arrived, the window ___.", ["had been broken", "was breaking", "broke"], 0, "Earlier event, passive: had been broken."),
      fill("While the suspect ___ (question), the lights went out.", ["was being questioned"], "Past Continuous passive: was being + participle."),
      mist("Find the mistake.", ["When I arrived,", "she was already leaving", "because the meeting finished an hour earlier."], 2, "had finished", "An earlier past event needs the Past Perfect: had finished."),
      match("Which tense?", [["It was snowing.", "Past Continuous"], ["He had already left.", "Past Perfect Simple"], ["She had been crying.", "Past Perfect Continuous"], ["The thief was caught.", "Past Simple passive"]], "Match the narrative tense."),
      order("Put the words in the correct order.", ["By", "the", "time", "we", "arrived,", "they", "had", "been", "waiting", "for", "hours."], "word", "By the time + Past Simple, Past Perfect Continuous."),
    ]),

  U("upper-vocab-books-films", "VOCABULARY", "Books, Films and Literary Vocabulary", "Literature and cinema", "CORE", 14, ["upper-vocab-make-do"],
    "Use the vocabulary of books, films and reviews to describe plots, characters and opinions.",
    ["vocabulary", "literature", "film", "reviews", "academic-register", "listening-support"], "Literature and cinema (Unit 3)",
    [
      text("Talking and writing about **books and films** needs a specific vocabulary. Use these words to write reviews and to discuss narrative techniques."),
      table("Genres and formats", ["Word", "Meaning"], [["psychological thriller", "a suspenseful story about the mind and fears of the characters"], ["whodunnit", "a mystery story that asks who committed the crime"], ["autobiography", "the story of a person's life written by that person"], ["sequel", "a book or film that continues an earlier one"], ["hardback / paperback", "a book with a hard / soft cover"], ["trailer", "a short preview of a film"]]),
      table("Discussing a story", ["Word", "Meaning", "Example"], [
        ["plot", "the events of the story", "The plot is full of surprises."],
        ["character", "a person in a story", "The main character is complex."],
        ["narrator", "the voice telling the story", "The narrator is unreliable."],
        ["critic / review", "a person who evaluates / the evaluation", "Critics praised the film in their reviews."],
        ["suspense", "a feeling of excitement about what will happen", "The writer builds suspense slowly."],
        ["gripping", "so interesting that you cannot stop reading", "It's a gripping novel."],
      ]),
    ],
    [
      match("Match the term with its meaning.", [["plot", "the events of a story"], ["sequel", "a continuation of an earlier story"], ["autobiography", "a life story written by the person"], ["trailer", "a short film preview"], ["whodunnit", "a story that asks who committed a crime"]], "Learn each term with its meaning."),
      mc("The novel is so ___ that I read it in one night.", ["gripping", "hardback", "sequel"], 0, "Gripping = very interesting."),
      fill("The director's second film is a ___ to his first; the characters return.", ["sequel"], "sequel = continues an earlier film."),
      mist("Find the mistake.", ["The", "critic", "of the film wrote a positive plot."], 2, "review", "Critics write reviews, not plots."),
      mc("Which genre asks ‘Who committed the crime?’", ["whodunnit", "autobiography", "sequel"], 0, "A whodunnit."),
      sa("The voice that tells a story is the ___", ["narrator"], "the narrator.", { hint: "n _ _ _ _ _ _ r" }),
    ]),

  U("upper-reading-kindness-strangers", "READING", "Reading: The Honey Maker of Willow Lane", "Narrative and theme", "CORE", 18, ["upper-reading-plastic-planet"],
    "Follow a narrative told in several past tenses and infer a writer's theme from concrete details.",
    ["reading", "narrative", "theme", "narrative-tenses", "inference"], "The kindness of strangers (Unit 3)",
    [
      text("Profile stories about kindness often have a **clear arc**: problem → help → result. Notice the **perfect tenses** used to explain the background, and the **quotations** that state the theme.", "Reading strategy"),
      passage("Example", "Lina had been sleeping in her car for two weeks when a stranger knocked on the window and offered her a spare room.", "Background + turning point"),
      list("Guided practice", ["Background → had been sleeping in her car for two weeks.", "Turning point → a stranger offered a room.", "Theme → generosity changes lives."]),
    ],
    [
      mc("What did Amal have when she arrived?", ["a box of beekeeping tools", "a shop", "a house"], 0, "“a small box of beekeeping tools”.", HONEY),
      mc("Who invited her for tea?", ["a retired schoolteacher", "a shop owner", "a mayor"], 0, "“A retired schoolteacher, Mr Ward”.", HONEY),
      mc("What did the neighbours lend her?", ["a garden, tables and a cart", "money only", "a car"], 0, "They lent her a garden, tables and a cart.", HONEY),
      mc("Why does the writer use ‘had been expecting’ in Amal's quotation?", ["to show an expectation before the story's main event", "to show a future plan", "to show a habit today"], 0, "Past Perfect Continuous = earlier expectation.", HONEY),
      mc("Why does Amal give away a hundred jars every year?", ["She believes kindness should be passed on.", "She has too much honey.", "It is a tax."], 0, "“kindness that is not passed on is wasted”.", HONEY),
      tf("Amal was already wealthy when she arrived in the town.", false, "She had lost her job and savings.", HONEY),
    ]),

  U("upper-reading-suspense-story", "READING", "Reading: The Visitor at Number Nine", "Suspense and implication", "CHALLENGING", 18, ["upper-reading-kindness-strangers", "upper-reading-inference"],
    "Analyse suspense, character motivation and implied meaning in a short story.",
    ["reading", "short-story", "suspense", "implication", "literary-analysis"], "Short story analysis (Unit 3)",
    [
      text("In a suspense story, the writer creates tension by **withholding information**, using **short revealing details**, and ending with a **twist**. Ask: *What does the character know? What does the reader suspect? Which detail changes everything?*", "Reading strategy"),
      passage("Example", "The man thanked her for the lift. He got out. She noticed that he had left nothing behind, not even a footprint in the snow.", "Detail creates unease"),
      list("Guided practice", ["Surface → a polite passenger.", "Detail → no footprint.", "Implication → something unnatural about him."]),
    ],
    [
      mc("Why was Mrs Farrow lighting a candle?", ["The electricity had failed.", "It was her birthday.", "She was praying."], 0, "“the electricity failed”.", CLINGING),
      mc("What does the young woman ask?", ["to wait inside because she is locked out", "for money", "for directions"], 0, "“I've locked myself out. May I wait inside?”", CLINGING),
      mc("What detail should make the reader suspicious?", ["She smiled the whole time and said nothing about herself.", "She carried a suitcase.", "She was wet."], 0, "The silence and constant smile create unease.", CLINGING),
      mc("What is the twist at the end?", ["The young woman was wearing Mrs Farrow's mother's ring.", "The lights failed again.", "The neighbour returned."], 0, "She had opened the suitcase and taken the ring (a theft).", CLINGING),
      mc("What does “It suits me, doesn't it?” suggest?", ["She is calm and confident about taking the ring.", "She is afraid.", "She wants to return it."], 0, "It shows her lack of guilt.", CLINGING),
      mc("Which effect does the ending create?", ["chilling", "humorous", "sad"], 0, "The story ends on an unsettling image.", CLINGING),
    ]),

  U("upper-writing-adverbs-narrative", "WRITING", "Adverbs in Narrative: Position, Manner, Time and Degree", "Narrative style", "CORE", 16, ["upper-writing-correction-codes"],
    "Place adverbs of time, manner, place and degree in initial, mid and end positions to create rhythm and tension.",
    ["writing", "adverbs", "narrative", "word-order", "style"], "Adverbs in narratives (Unit 3)",
    [
      text("Adverbs change the **rhythm and emphasis** of a sentence. Their **position** matters: the same adverb can sound calm or dramatic depending on where you put it.", "Explanation"),
      table("Positions", ["Position", "Typical adverbs", "Example"], [
        ["Front (before the subject)", "time, attitude, linkers: Suddenly, Fortunately, Eventually", "Suddenly, the door opened."],
        ["Mid (before main verb, after be/auxiliary)", "frequency, degree: always, never, almost, really", "She had never seen him before. It was completely dark."],
        ["End (after verb/object)", "manner, place, time: slowly, outside, yesterday", "He walked slowly. She waited outside."],
      ]),
      list("Order at the end of a sentence", ["Usually: **manner → place → time**: She spoke quietly in the hall this morning.", "Long adverbials go last.", "Do not put an adverb between a verb and its direct object: *She opened carefully the door* → She opened the door carefully."]),
      annotated("Before and after", [["Before", "She walked into the room. She looked around. She saw a letter."], ["After", "Cautiously, she walked into the room. She looked around slowly and almost immediately saw a letter."]]),
    ],
    [
      mist("Find the mistake.", ["She opened", "carefully", "the door."], 1, "the door carefully", "Do not separate a verb and its direct object."),
      order("Put the words in the correct order.", ["Suddenly,", "the", "door", "opened", "very", "slowly."], "word", "Front adverb + subject + verb + manner."),
      mc("Which sentence has the correct order of manner, place and time?", ["She spoke quietly in the hall this morning.", "She spoke this morning in the hall quietly.", "She quietly spoke this morning in the hall."], 0, "manner → place → time."),
      mc("Where do frequency adverbs like never usually go?", ["before the main verb", "at the end", "after the object"], 0, "I have never seen it."),
      fill("She was ___ (complete) terrified. (write the adverb)", ["completely"], "Degree adverb before an adjective."),
      match("Which type?", [["completely", "degree"], ["slowly", "manner"], ["yesterday", "time"], ["outside", "place"]], "Classify the adverbs."),
    ]),
];

void [compare, structure, tip, vocab, text, list, flow, table, annotated, passage, match];
