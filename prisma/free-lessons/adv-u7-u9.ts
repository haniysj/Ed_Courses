import { annotated, compare, fill, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, type SeedLesson } from "./dsl";
import { A } from "./adv-common";

// Advanced, Units 7-9. Topics follow the academy's syllabus; every text is ORIGINAL (people are fictional; scientific statements are widely accepted and hedged).

const HAPPINESS = "STRATEGIES FOR A HAPPIER LIFE\n\nThe pursuit of happiness has become a growth industry, yet research suggests that some of the most effective strategies are surprisingly modest. Psychologists who study well-being generally agree on a handful of habits that seem to make a measurable difference.\n\nThe first is gratitude. People who regularly note down things they are thankful for tend to report higher satisfaction, possibly because the practice trains attention to look for what is going well. The second is connection: close relationships are one of the most consistent predictors of a contented life, and it is the quality, not the quantity, of friendships that matters. The third is engagement with an activity that absorbs us completely, sometimes described as “flow”, during which time seems to disappear.\n\nOne popular strategy, however, is less reliable than it appears: trying to be happy. If you constantly check how you feel, the evidence indicates, you may make yourself less happy. Some researchers therefore recommend focusing on doing valued things rather than on the feeling itself. As one writer put it, happiness is a by-product, not a target.";
const JOBS = "JOBS FOR THE BOYS... OR GIRLS?\n\n(Two fictional profiles)\n\nA. Daniel Okoro, 38, gave up his career in finance when his partner was offered a promotion abroad. “People still ask when I'm going back to ‘real’ work,” he says. “I tell them I'm doing the hardest job I've ever had.” Daniel, who has been looking after two small children for three years, says that the biggest surprise was the isolation. Having spent his working life in busy offices, he found the weekday playground almost silent, and most of the other adults there were women. Now, he runs a weekly group for fathers, which has grown to thirty members.\n\nB. Captain Leila Haddad, 44, is an airline pilot who flies long-distance routes. Only a small percentage of commercial pilots are women, and Leila admits that she is still sometimes mistaken for a member of the cabin crew. “Passengers glance at me, then at the man behind me, and assume he must be in charge,” she says with a smile. Having trained for six years, she now mentors young women who want to join the profession. “I don't want to be the exception,” she says. “I want to be the beginning of a long list.”";
const GRIMAUD = "THE PIANIST AND THE WOLVES\n\n(A fictional profile)\n\nClara Voss is one of the most admired concert pianists of her generation, and, to the surprise of many admirers, one of the most committed wildlife campaigners. Quite honestly, it is a combination that puzzles her audience more than it does her.\n\n“There is no contradiction,” she says. “Mind you, it took me years to see it. Both music and wilderness demand that you listen, and that you accept that you are part of something larger.” Having discovered a wolf sanctuary while on tour, she was so moved that she founded a small conservation centre, where injured animals are treated and, wherever possible, returned to the wild.\n\nPredictably, the critics have not always been kind. Some feel that her attention has been divided; others, given that her recordings continue to win prizes, find the claim hard to sustain. Clara is unperturbed. “Besides,” she adds, “the wolves are far better listeners than most critics.”";

export const ADV_U7_U9: SeedLesson[] = [
  // ============================================================ UNIT 7
  A("adv-grammar-real-unreal-tenses", "GRAMMAR", "Real and Unreal Tenses: Conditionals and Mixed Conditionals", "Conditionals", "CHALLENGING", 22, ["adv-grammar-midterm-review-units-1-6"],
    "Use zero, first, second, third and mixed conditionals, as well as alternatives to if, to distinguish real and unreal situations.",
    ["grammar", "conditionals", "mixed-conditionals", "unreal-past", "hypothesis"], "Real and unreal tenses (Unit 7)",
    [
      text("Conditionals distinguish **real** possibilities (facts and likely events) from **unreal** ones (imagined or impossible). The **tense shifts one step back** for unreality.", "Explanation"),
      table("Conditionals", ["Type", "Form", "Example"], [
        ["Zero (general truth)", "If + Present, Present", "If you heat ice, it melts."],
        ["First (likely)", "If + Present, will", "If it rains, we'll cancel the picnic."],
        ["Second (unreal present/future)", "If + Past, would", "If I were you, I would accept."],
        ["Third (unreal past)", "If + Past Perfect, would have + participle", "If you had told me, I wouldn't be in this situation."],
        ["Mixed 1 (past → present)", "If + Past Perfect, would + base", "If I had taken the job, I would be living abroad now."],
        ["Mixed 2 (present → past)", "If + Past, would have + participle", "If she weren't so stubborn, she would have accepted help."],
      ]),
      table("Alternatives to if", ["Word", "Meaning", "Example"], [
        ["unless", "if … not", "Unless you hurry, you'll miss it."],
        ["provided / providing (that)", "only if", "I'll go provided that you come too."],
        ["as long as", "only if", "You can stay as long as you're quiet."],
        ["supposing / suppose", "imagine that", "Supposing it fails, what will you do?"],
        ["but for", "if it were not for", "But for your help, I would have failed."],
        ["Had / Were / Should (inversion)", "formal if", "Had I known, I would have called. · Should you need help, ask."],
      ]),
      compare("Errors", [["If I would have known, I would have called.", "If I had known, I would have called.", "No would in the if-clause."], ["Unless you don't hurry, you'll miss it.", "Unless you hurry, you'll miss it.", "Unless already means if not."]]),
    ],
    [
      mc("If I ___ the job last year, I would be living abroad now.", ["had taken", "took", "would take"], 0, "Mixed conditional 1."),
      mc("If she ___ so stubborn, she would have accepted our help.", ["weren't", "hadn't been", "wouldn't be"], 0, "Mixed conditional 2: present state, past result."),
      mist("Find the mistake.", ["Unless you", "don't hurry,", "you'll miss the train."], 1, "hurry,", "Unless = if not: no second negative."),
      fill("___ I known, I would have called. (formal)", ["Had"], "Had I known = If I had known."),
      match("Which type?", [["If you heat ice, it melts.", "zero"], ["If it rains, we'll stay in.", "first"], ["If I were you, I'd accept.", "second"], ["If you had told me, I'd have helped.", "third"]], "Match the conditional."),
      order("Put the words in the correct order.", ["But", "for", "your", "help,", "I", "would", "have", "failed."], "word", "But for = if it were not for."),
    ]),

  A("adv-grammar-wish-if-only-would", "GRAMMAR", "wish, if only and would: Regret, Preference and Irritation", "Unreal wishes", "CHALLENGING", 14, ["adv-grammar-real-unreal-tenses"],
    "Express regret, unreal wishes, irritation and preferences with wish, if only, would and I'd rather.",
    ["grammar", "wish", "if-only", "would", "preference"], "Wish, if only, would (Unit 7)",
    [
      text("**Wish** and **if only** describe **unreal** situations. **Would** appears in expressions of **irritation** and **preference**.", "Explanation"),
      table("Structures", ["Meaning", "Structure", "Example"], [
        ["regret about the present", "wish + Past Simple", "I wish I lived closer to the office."],
        ["regret about the past", "wish + Past Perfect", "I wish I had listened to her advice."],
        ["irritation with someone/thing", "wish + would", "I wish he would stop interrupting."],
        ["strong feeling", "If only + same structures", "If only I had known! · If only it would stop raining!"],
        ["preference about someone else", "I'd rather + subject + Past", "I'd rather you didn't smoke here."],
        ["preference about yourself", "I'd rather + base", "I'd rather stay in tonight."],
        ["suggestion that it's time", "It's (high) time + Past", "It's high time we left."],
      ]),
      list("Note", ["Wish + would is not used for your own behaviour or for a state: *I wish I would be taller* is wrong; use I wish I were taller.", "Formal English uses were for all persons: I wish I were more confident.", "Would in the past: habitual action: We would spend every summer at the coast."]),
    ],
    [
      mc("I wish he ___ interrupting me; it's really annoying.", ["would stop", "stopped", "had stopped"], 0, "Irritation: wish + would."),
      mc("I wish I ___ harder when I was at school.", ["had studied", "studied", "would study"], 0, "Past regret."),
      mist("Find the mistake.", ["I wish", "I would be", "more confident."], 1, "I were", "Wish + would is not used for your own state."),
      fill("It's high time we ___ (leave); the last bus goes at ten.", ["left"], "It's high time + Past Simple."),
      match("Meaning?", [["I wish he would stop.", "irritation"], ["I'd rather you didn't smoke.", "preference about others"], ["If only I had known!", "past regret"]], "Match the meaning."),
      order("Put the words in the correct order.", ["If", "only", "it", "would", "stop", "raining."], "word", "If only + would."),
    ]),

  A("adv-vocab-phrasal-on-off", "VOCABULARY", "Phrasal Verbs with on and off", "Phrasal verbs", "CORE", 14, ["adv-vocab-compound-nouns-phrasal"],
    "Use common phrasal verbs with on and off in formal and informal contexts.",
    ["vocabulary", "phrasal-verbs", "on", "off", "listening-support"], "Phrasal verbs with on and off (Unit 7)",
    [
      text("**On** often suggests **continuation** or **attachment**; **off** often suggests **separation, departure or end**. Many have **idiomatic meanings**."),
      table("On", ["Phrasal verb", "Meaning", "Example"], [
        ["drag on", "last too long", "The meeting dragged on for hours."],
        ["crack on", "continue working (informal)", "Let's crack on with the report."],
        ["hold on", "wait", "Hold on a moment."],
        ["carry on", "continue", "Carry on with your work."],
        ["catch on", "become popular / understand", "The idea never caught on."],
        ["take on", "accept (work), employ", "The firm took on ten new staff."],
      ]),
      table("Off", ["Phrasal verb", "Meaning", "Example"], [
        ["wear off", "gradually disappear", "The effect of the drug wore off."],
        ["call off", "cancel", "The match was called off because of rain."],
        ["lay off", "dismiss workers (from a job)", "The company laid off 200 staff."],
        ["go off", "explode / ring / go bad", "The alarm went off. The milk has gone off."],
        ["put off", "postpone / discourage", "The delay put me off."],
        ["show off", "display proudly", "He likes to show off his new car."],
      ]),
    ],
    [
      match("Match the phrasal verb with its meaning.", [["drag on", "last too long"], ["call off", "cancel"], ["wear off", "gradually disappear"], ["lay off", "dismiss workers"], ["crack on", "continue working"]], "Learn each phrasal verb."),
      mc("The concert was ___ because of the storm.", ["called off", "worn off", "dragged on"], 0, "call off = cancel."),
      fill("The effects of the medicine will ___ off in a few hours.", ["wear"], "wear off."),
      mist("Find the mistake.", ["The company", "laid on", "200 staff last year."], 1, "laid off", "Lay off = dismiss."),
      mc("“The meeting dragged on” means it was ___.", ["too long", "cancelled", "postponed"], 0, "Drag on = last too long."),
      sa("“Let's ___ on with the report.” (continue working, informal)", ["crack"], "crack on.", { hint: "c _ _ _ k" }),
    ]),

  A("adv-reading-strategies-for-happiness", "READING", "Reading: Strategies for a Happier Life", "Analytical text", "CHALLENGING", 20, ["adv-reading-when-good-comes-from-bad"],
    "Analyse an argumentative text: claims, evidence, hedging and counter-intuitive conclusions.",
    ["reading", "psychology", "argument", "hedging", "evidence"], "Strategies for achieving happiness (Unit 7)",
    [
      text("Analytical texts about well-being combine **claims**, **research evidence** and **reservations**. Note the **hedging verbs** (suggest, tend to, seem to, may) and the **surprising conclusion**.", "Reading strategy"),
      passage("Example", "Studies suggest that people who volunteer tend to feel more purposeful, although it is not clear whether volunteering causes this or whether purposeful people simply volunteer more.", "Correlation vs causation"),
      list("Guided practice", ["Claim → volunteers feel more purposeful.", "Hedge → suggest, tend to.", "Reservation → cause unclear."]),
    ],
    [
      mc("What is described as ‘a growth industry’?", ["the pursuit of happiness", "psychology", "gratitude"], 0, "First sentence.", HAPPINESS),
      mc("Why might noting down things you're thankful for help?", ["It trains attention to notice what goes well.", "It gives you money.", "It shortens the day."], 0, "“possibly because…”.", HAPPINESS),
      mc("What matters more in friendships, according to the text?", ["quality rather than quantity", "quantity", "age"], 0, "Paragraph 2.", HAPPINESS),
      mc("What is ‘flow’?", ["complete absorption in an activity", "sleep", "relaxation"], 0, "“absorbs us completely… time seems to disappear”.", HAPPINESS),
      mc("Why is ‘trying to be happy’ described as less reliable?", ["Constantly checking your feelings may reduce happiness.", "It is expensive.", "It is illegal."], 0, "Paragraph 3.", HAPPINESS),
      tf("The writer states that these strategies work for everyone.", false, "The text uses hedges: seem to, tend to, may.", HAPPINESS),
    ]),

  A("adv-writing-letter-to-younger-self", "WRITING", "Informal Writing: A Letter to My Younger Self", "Informal reflective writing", "CHALLENGING", 22, ["adv-grammar-wish-if-only-would", "adv-reading-strategies-for-happiness"],
    "Write a reflective informal letter using contrastive adverbials, idiomatic phrasing and a clear reflective structure.",
    ["writing", "informal-writing", "letter", "reflection", "adverbials", "idioms"], "A letter to my younger self (Unit 7, p. 118)",
    [
      text("An **informal reflective letter** has a **warm, direct voice** but still needs **structure**: **opening**, **looking back**, **advice**, **closing**. Informal does not mean careless.", "Explanation"),
      table("Structure", ["Part", "Content", "Language"], [
        ["Opening", "address yourself; set the tone", "Dear 17-year-old me, …"],
        ["Looking back", "what you know now; mistakes; surprises", "Looking back, … · Hard as it is to believe, … · I wish I had …"],
        ["Advice", "practical and emotional", "Don't … · If I were you, I'd … · Try to …"],
        ["Closing", "affectionate, forward-looking", "Take care of yourself. · With love, …"],
      ]),
      table("Contrastive adverbials and informal style", ["Feature", "Examples"], [["Concessive structures", "Hard as it is to believe, … · Strange as it may seem, … · Much as I'd like to …"], ["Discourse markers", "Mind you, … · Anyway, … · To be honest, … · Looking back, …"], ["Idioms", "life's no picnic · in the same boat · at the end of the day · learn the hard way"], ["Contractions and questions", "You'll be fine. Remember how nervous you were?"]]),
      annotated("Model extract", [["Opening", "Dear sixteen-year-old me,"], ["Looking back", "Hard as it is to believe, the exams that keep you awake at night won't matter in ten years' time."], ["Advice", "If I were you, I'd spend less time worrying and more time asking questions. Trust me: life's no picnic, but it's a lot less scary than you think."], ["Closing", "Be kind to yourself. You're doing better than you know."]]),
    ],
    [
      order("Put the parts of the letter in order.", ["Opening", "Looking back", "Advice", "Closing"], "paragraph", "A reflective letter's order."),
      mc("Which phrase begins a concessive structure?", ["Hard as it is to believe,", "As soon as", "By the time"], 0, "Concessive: Hard as it is…"),
      mist("Find the mistake (register mixed).", ["Dear me,", "I regret to inform you", "that life's no picnic."], 1, "I have to tell you", "Avoid stiff formal phrasing in an informal letter."),
      fill("If I ___ you, I'd spend less time worrying. (were)", ["were"], "If I were you."),
      match("Function?", [["Mind you,", "discourse marker"], ["life's no picnic", "idiom"], ["Looking back,", "reflective opener"]], "Match the feature."),
      mc("Which sentence is suitably informal but structured?", ["Trust me: it's a lot less scary than you think.", "It is with great regret that I write.", "Whereas the aforementioned."], 0, "Warm and direct."),
    ]),

  // ============================================================ UNIT 8
  A("adv-grammar-relatives-participles", "GRAMMAR", "Relative Clauses and Participle Clauses", "Relatives and participles", "CHALLENGING", 22, ["adv-grammar-wish-if-only-would"],
    "Use defining and non-defining relative clauses (including with prepositions), reduced relatives and participle clauses for time, reason and result.",
    ["grammar", "relative-clauses", "participle-clauses", "complex-sentences", "cohesion"], "Relatives and participles (Unit 8)",
    [
      text("Relative and participle clauses let you **pack information** into a single sentence. **Accuracy** depends on **punctuation**, the **choice of pronoun** and the **matching subject**.", "Explanation"),
      table("Relative clauses", ["Type", "Example", "Notes"], [
        ["Defining", "The man who lives next door is a pilot.", "no commas; that possible; object pronoun can be omitted"],
        ["Non-defining", "My neighbour, who is a pilot, is away.", "commas; which/who (not that); pronoun cannot be omitted"],
        ["With a preposition (formal)", "the person to whom I spoke · the house in which she lives", "whom/which after preposition"],
        ["Preposition at the end (informal)", "the person I spoke to · the house she lives in", "pronoun often omitted"],
        ["Sentence relative", "He passed, which surprised everyone.", "which refers to the whole clause"],
        ["Quantifier + of + pronoun", "several students, most of whom were late", "formal"],
      ]),
      table("Participle clauses", ["Meaning", "Form", "Example"], [
        ["Reduced defining relative", "-ing (active) / -ed (passive)", "The woman standing by the door is my aunt. The books written by him are famous."],
        ["Time", "-ing / Having + participle", "Standing on the hill, we watched the sunset. Having finished lunch, we left."],
        ["Reason", "-ing / -ed / Not knowing", "Not knowing the way, we asked for directions."],
        ["Result", ", -ing", "The bridge collapsed, causing traffic chaos."],
      ]),
      list("Key rule", ["The **subject of the participle clause = the subject of the main clause**: Standing on the hill, **we** watched … (not *Standing on the hill, the view was …*).", "Use **having + participle** for an **earlier** action.", "Use **-ed** for passive meaning: Built in 1900, the house needs repair."]),
      compare("Errors", [["Standing on the hill, the view was superb.", "Standing on the hill, we had a superb view.", "Dangling participle."], ["The film, that I saw, was long.", "The film, which I saw, was long.", "No that in non-defining clauses."]]),
    ],
    [
      mc("My brother, ___ lives in Dubai, is an engineer.", ["who", "that", "whose"], 0, "Non-defining: who."),
      mc("___ the report, she sent it to the manager.", ["Having finished", "Finishing", "Finished"], 0, "Earlier action: having + participle."),
      mist("Find the mistake.", ["Standing on the hill,", "the view", "was superb."], 1, "we had a superb view", "The participle's subject must match the main clause subject."),
      fill("The students, most of ___ were late, missed the announcement.", ["whom"], "quantifier + of whom."),
      match("Function?", [["Not knowing the way, we asked.", "reason"], ["Having eaten, we left.", "time (earlier action)"], ["The bridge collapsed, causing chaos.", "result"]], "Match the participle clause."),
      order("Put the words in the correct order.", ["The", "house,", "built", "in", "1900,", "needs", "repairs."], "word", "Passive participle clause."),
    ]),

  A("adv-vocab-homonyms-homographs", "VOCABULARY", "Homonyms, Homophones and Homographs", "Word ambiguity", "CORE", 14, ["adv-vocab-phrasal-on-off"],
    "Distinguish homonyms, homophones and homographs and use context to select the correct meaning or spelling.",
    ["vocabulary", "homonyms", "homophones", "homographs", "spelling", "listening-support"], "Homonyms, homophones, homographs (Unit 8)",
    [
      text("Three terms describe words that look or sound alike. **Homonyms**: same spelling and pronunciation, different meaning. **Homophones**: same pronunciation, different spelling. **Homographs**: same spelling, different pronunciation (and meaning)."),
      table("Types", ["Type", "Definition", "Examples"], [
        ["Homonyms", "same spelling and sound", "bar (a place to drink / a metal rod), deck (of a ship / of cards), bank (river / money)"],
        ["Homophones", "same sound, different spelling", "hoarse / horse · coarse / course · principal / principle · stationary / stationery · reign / rain"],
        ["Homographs", "same spelling, different sound", "row /rəʊ/ (a line) – row /raʊ/ (an argument) · tear /tɪə/ (from the eye) – tear /teə/ (to rip) · live /lɪv/ (verb) – live /laɪv/ (adjective)"],
      ]),
      tip("Homophones are a common source of errors in writing: proof-read for their/there/they're, principal/principle and stationary/stationery.", "Editing"),
    ],
    [
      match("Match the type.", [["horse / hoarse", "homophones"], ["bank (river / money)", "homonyms"], ["tear (rip) / tear (from the eye)", "homographs"], ["principal / principle", "homophones"]], "Recognise the type."),
      mc("She had a heated ___ with her neighbour about the noise. (argument, pronounced /raʊ/)", ["row", "raw", "roe"], 0, "Homograph: row (argument)."),
      fill("The school ___ (head) announced the new rules. (spelling: principal / principle)", ["principal"], "principal = head of a school."),
      mist("Find the mistake.", ["She bought", "some stationary", "for the office."], 1, "stationery", "Stationary = not moving; stationery = writing materials."),
      mc("Which pair are HOMOGRAPHS?", ["live (verb) / live (adjective)", "coarse / course", "bank / bank"], 0, "Same spelling, different sound."),
      sa("The voice was ___ from shouting. (a homophone of horse)", ["hoarse"], "hoarse.", { hint: "h _ _ _ _ e" }),
    ]),

  A("adv-reading-jobs-for-boys-or-girls", "READING", "Reading: Jobs for the Boys... or Girls?", "Sociological profiles", "CHALLENGING", 20, ["adv-reading-strategies-for-happiness"],
    "Compare two profiles of people in non-traditional roles and evaluate how the writer presents gender expectations.",
    ["reading", "gender", "profiles", "comparison", "jigsaw", "attitude"], "Gender and work (Unit 8)",
    [
      text("In **jigsaw reading**, each text gives a different perspective. Build a **comparison chart**: background, challenge, how others react, attitude, message. Notice **participle clauses** and **relative clauses** that carry the details.", "Reading strategy"),
      passage("Example", "Having spent a decade in the army, he found the school playground almost as unfamiliar as a battlefield.", "Participle clause"),
      list("Guided practice", ["Person → ex-soldier turned teacher.", "Challenge → unfamiliar environment.", "Tone → light humour."]),
    ],
    [
      mc("Why did Daniel leave his job?", ["His partner was offered a promotion abroad.", "He was dismissed.", "He wanted to travel."], 0, "First profile.", JOBS),
      mc("What was Daniel's biggest surprise?", ["isolation at the weekday playground", "the children's behaviour", "the cost of food"], 0, "“the biggest surprise was the isolation”.", JOBS),
      mc("What has Daniel created?", ["a weekly group for fathers", "a school", "a book"], 0, "He runs a group with thirty members.", JOBS),
      mc("What assumption do passengers sometimes make about Leila?", ["that the man behind her is in charge", "that she is a doctor", "that she is a passenger"], 0, "Second profile.", JOBS),
      mc("What is Leila's ambition?", ["to be the beginning of a long list of women pilots", "to be famous", "to leave flying"], 0, "Her final quotation.", JOBS),
      tf("Both profiles suggest that people still hold traditional expectations.", true, "Both mention others' assumptions.", JOBS),
    ]),

  A("adv-writing-folk-tale-style", "WRITING", "Adding Style and Cohesion: A Folk Tale", "Style and cohesion", "CHALLENGING", 22, ["adv-grammar-relatives-participles", "adv-writing-comparing-two-countries"],
    "Retell a folk tale with varied sentence length, participle clauses, descriptive vocabulary and cohesive devices.",
    ["writing", "folk-tale", "style", "cohesion", "participle-clauses", "sentence-variety"], "Folk tale: style and cohesion (Unit 8, p. 119)",
    [
      text("Folk tales have **simple structures** but reward **skilful style**: **rhythm**, **sound patterns**, **vivid detail** and **smooth links** between events.", "Explanation"),
      table("Techniques", ["Technique", "Example (before → after)"], [
        ["Shorten for tension", "The wolf, who had been waiting for hours, finally saw the girl. → The wolf waited. Then he saw her."],
        ["Lengthen for description", "There was a forest. It was dark. → Beyond the village lay a forest so dark that even the birds avoided it."],
        ["Participle clauses", "The girl was terrified. She ran home. → Terrified, the girl ran home."],
        ["Fronted adverbials", "Long ago, in a village by the sea, …"],
        ["Repetition and triads", "She walked and walked and walked. It was cold, dark and silent."],
      ]),
      table("Cohesive devices", ["Function", "Examples"], [["Time", "Long ago · One day · Meanwhile · By the time · At last"], ["Cause/result", "Because of this · As a result · So"], ["Contrast", "But · Yet · However"], ["Reference", "the old man → he → the stranger"]]),
      annotated("Model extract", [["Opening", "Long ago, in a village by the sea, there lived a fisherman who had never caught a fish."], ["Development", "Undeterred, he rose each morning before dawn and cast his net again."], ["Turning point", "One day, having caught nothing, he heard a voice from the water."]]),
    ],
    [
      mc("Which sentence uses a participle clause for style?", ["Terrified, the girl ran home.", "The girl was terrified and she ran home.", "The girl ran home because she was terrified."], 0, "Participle clause."),
      mc("Which sentence has a correct participle clause?", ["Having caught nothing, the fisherman went home.", "Having caught nothing, the boat went home.", "Having caught nothing, the sea was empty."], 0, "The fisherman is the one who caught nothing."),
      fill("Long ___, in a village by the sea, there lived a fisherman.", ["ago"], "Long ago."),
      order("Put the parts of the folk tale in order.", ["Opening", "Problem", "Turning point", "Resolution"], "paragraph", "The classic pattern."),
      match("Technique?", [["She walked and walked and walked.", "repetition"], ["Undeterred, he tried again.", "participle clause"], ["Long ago, …", "fronted adverbial"]], "Match the technique."),
      mc("Which sentence creates tension by being short?", ["The wolf waited.", "The wolf, who had been waiting for hours in the shadow of the trees, finally moved.", "There was a wolf who waited."], 0, "Short sentence, tension."),
    ]),

  A("adv-writing-in-class-2-preparation", "WRITING", "In-Class Writing 2: A 200-Word Comparative, Reflective or Cohesive Essay", "Assessment preparation", "CHALLENGING", 24, ["adv-writing-folk-tale-style", "adv-writing-formal-email-opinion", "adv-writing-letter-to-younger-self"],
    "Choose the appropriate text type and produce a well-organised 200-word text under time pressure.",
    ["writing", "assessment-practice", "200-words", "comparison", "reflection", "cohesion"], "In-Class Writing 2 preparation (Units 4-8)",
    [
      text("In Assessment 2, you will write about **200 words** in a text type from Weeks 4–8: a **comparative essay**, a **reflective/informal piece** or an **opinion or cohesive text**. Identify the type from the **task wording**.", "Explanation"),
      table("Task and text type", ["Task wording", "Text type", "Key features"], [["Compare two countries / places / periods", "Comparative essay", "point-by-point; contrast linkers; non-defining clauses"], ["Write to your younger self / describe a personal change", "Reflective letter", "informal voice; concessive adverbials; advice"], ["Give your opinion on … / Write to complain", "Opinion essay / formal email", "formal register; stance; polite requests"], ["Retell a story with style", "Folk tale / narrative", "participle clauses; varied sentences; cohesion"]]),
      table("Checklist", ["Area", "Check"], [["Task", "All parts answered?"], ["Organisation", "Clear paragraphs? Linkers?"], ["Language", "Range: emphasis, conditionals, relative/participle clauses"], ["Accuracy", "Tenses, articles, punctuation, spelling"], ["Length", "About 200 words"]]),
    ],
    [
      mc("‘Compare life in two countries you know’ requires ___.", ["a comparative essay", "a folk tale", "a formal email"], 0, "Comparison."),
      mc("‘Write a letter to yourself at 16’ requires ___.", ["an informal reflective letter", "a report", "a formal complaint"], 0, "Reflective letter."),
      mist("Find the mistake (contrast).", ["Whereas the north is cold,", "however", "the south is warm."], 1, "(delete however)", "Whereas already signals contrast."),
      fill("Having ___ (compare) the two options, I recommend the second.", ["compared"], "Perfect participle clause."),
      order("Put the stages in order.", ["Read the task", "Plan", "Write", "Check"], "sentence", "A four-step routine."),
      mc("What is the target length?", ["about 200 words", "about 60 words", "about 700 words"], 0, "About 200 words."),
    ]),

  // ============================================================ UNIT 9
  A("adv-grammar-discourse-markers", "GRAMMAR", "Discourse Markers: Attitude Adverbs and Connectors", "Discourse markers", "CHALLENGING", 18, ["adv-grammar-relatives-participles"],
    "Use attitude adverbs and connectors such as mind you, besides, given that and as a matter of fact to organise speech and informal writing.",
    ["grammar", "discourse-markers", "attitude-adverbs", "connectors", "informal-writing"], "Discourse markers (Unit 9)",
    [
      text("**Discourse markers** organise conversation and informal writing and show the **speaker's attitude**. Many are **not fully grammatical parts of a clause** but are essential for **natural** English.", "Explanation"),
      table("Attitude adverbs", ["Adverb", "Shows", "Example"], [
        ["quite honestly / frankly", "openness", "Quite honestly, I didn't enjoy it."],
        ["predictably / unsurprisingly", "something expected", "Predictably, the meeting ran late."],
        ["surprisingly / amazingly", "something unexpected", "Surprisingly, she agreed."],
        ["fortunately / regrettably", "a value judgement", "Regrettably, the offer has expired."],
        ["admittedly / arguably", "concession / qualified claim", "It is arguably the best film of the year."],
      ]),
      table("Connectors", ["Connector", "Function", "Example"], [
        ["mind you", "adds a contrasting point (informal)", "It was expensive. Mind you, the service was excellent."],
        ["besides", "adds an extra reason", "I can't go. Besides, I have no money."],
        ["given that", "because (formal)", "Given that prices are rising, we must act."],
        ["as a matter of fact", "adds something surprising / corrects", "As a matter of fact, I'd never met him."],
        ["anyway", "returns to the main topic / closes", "Anyway, as I was saying …"],
        ["by the way", "introduces a new topic", "By the way, did you hear the news?"],
        ["all the same / even so", "concession", "It's risky. All the same, I'll try."],
      ]),
      tip("Use discourse markers sparingly in formal writing; they belong mostly to speech, informal writing and blogs.", "Register"),
    ],
    [
      mc("It was expensive. ___, the service was excellent.", ["Mind you", "Given that", "Predictably"], 0, "Contrasting afterthought."),
      mc("___ prices are rising, we should act now. (formal reason)", ["Given that", "Mind you", "Anyway"], 0, "Given that = because."),
      mc("Which adverb signals something UNEXPECTED?", ["Surprisingly,", "Predictably,", "Unsurprisingly,"], 0, "Surprisingly = unexpected."),
      fill("I can't afford it; ___, I don't really need it. (an extra reason)", ["besides"], "Besides adds a reason."),
      match("Function?", [["by the way", "new topic"], ["anyway", "return to the point"], ["all the same", "concession"], ["quite honestly", "openness"]], "Match the marker."),
      order("Put the words in the correct order.", ["As", "a", "matter", "of", "fact,", "I", "had", "never", "met", "him."], "word", "Discourse marker + clause."),
    ]),

  A("adv-vocab-rhyme-rhythm", "VOCABULARY", "Rhyme, Rhythm and the Language of Music and Poetry", "Rhyme and rhythm", "CORE", 12, ["adv-vocab-homonyms-homographs"],
    "Identify rhyming and non-rhyming words, and use vocabulary for rhythm, poetry and music.",
    ["vocabulary", "rhyme", "rhythm", "poetry", "music", "listening-support"], "Rhyme and rhythm (Unit 9)",
    [
      text("**Rhyme** = words with matching final sounds (*fate/late*). **Rhythm** = the pattern of stressed and unstressed syllables. Both help writers create **memorable, musical** prose and verse."),
      table("Terms", ["Term", "Meaning", "Example"], [
        ["rhyme", "similar ending sounds", "sky / high, love / above"],
        ["eye rhyme", "similar spelling but different sound", "love / move"],
        ["alliteration", "repeated initial consonant sounds", "Peter picked a peck …"],
        ["assonance", "repeated vowel sounds", "the rain in Spain"],
        ["stanza", "a group of lines in a poem", "a four-line stanza"],
        ["metre", "the pattern of stresses in a line", "iambic metre"],
        ["cadence", "the rhythm of speech or writing", "the cadence of her voice"],
        ["refrain", "a repeated line in a song or poem", "The refrain is easy to remember."],
      ]),
      list("Rhythm in prose", ["Vary short and long sentences.", "Use **triads** (three items) for rhythm: quick, quiet, careful.", "Place the **key word at the end** of the sentence for emphasis.", "Read your writing aloud."]),
    ],
    [
      match("Match the term.", [["stanza", "a group of lines in a poem"], ["refrain", "a repeated line"], ["alliteration", "repeated initial consonant sounds"], ["cadence", "the rhythm of speech"], ["assonance", "repeated vowel sounds"]], "Learn the terms."),
      mc("Which word does NOT rhyme with the others?", ["move", "love", "prove"], 1, "Love /lʌv/ does not rhyme with move /muːv/ and prove /pruːv/."),
      fill("A group of lines in a poem is called a ___.", ["stanza"], "stanza."),
      mist("Find the mistake.", ["‘Move’ and ‘love’", "rhyme perfectly", "because they look similar."], 1, "are an eye rhyme only", "Same spelling pattern, but different sound: eye rhyme."),
      mc("Which technique repeats an initial consonant sound?", ["alliteration", "assonance", "refrain"], 0, "Alliteration."),
      sa("A repeated line in a song is a ___", ["refrain", "chorus"], "refrain.", { hint: "r _ _ _ _ _ n" }),
    ]),

  A("adv-reading-pianist-and-wolves", "READING", "Reading: The Pianist and the Wolves", "Biographical profile", "CHALLENGING", 18, ["adv-reading-jobs-for-boys-or-girls"],
    "Analyse a profile that presents two apparently opposed interests, and identify discourse markers and attitude.",
    ["reading", "biography", "profile", "discourse-markers", "attitude"], "Profile: pianist and conservationist (Unit 9)",
    [
      text("Profiles of people with **unexpected combinations** of interests usually **pose a puzzle**, then **resolve it** through the subject's own explanation. Note the **quotations** and the **discourse markers** that shape the tone.", "Reading strategy"),
      passage("Example", "Quite honestly, I never planned it. Mind you, once I had seen the mountain, I could hardly do anything else.", "Informal quotation with markers"),
      list("Guided practice", ["Puzzle → why combine two careers?", "Quotation → I never planned it.", "Tone → honest, warm."]),
    ],
    [
      mc("What surprises many admirers about Clara?", ["her career as a pianist combined with wildlife campaigning", "her age", "her nationality"], 0, "First paragraph.", GRIMAUD),
      mc("How does Clara explain the connection?", ["Both music and wilderness demand that you listen.", "Both are quiet.", "Both are famous."], 0, "Her quotation.", GRIMAUD),
      mc("What does ‘Mind you’ signal in her quotation?", ["a qualifying afterthought", "an order", "a question"], 0, "Discourse marker of contrast.", GRIMAUD),
      mc("How did she start the conservation centre?", ["after finding a wolf sanctuary on tour", "after retiring", "after a competition"], 0, "Paragraph 2.", GRIMAUD),
      mc("What is the effect of the final joke about critics?", ["It shows her humour and independence.", "It shows anger.", "It criticises wolves."], 0, "“the wolves are far better listeners”.", GRIMAUD),
      tf("All critics have supported her second career.", false, "“Predictably, the critics have not always been kind.”", GRIMAUD),
    ]),

  A("adv-writing-informal-opinion-post", "WRITING", "Giving an Informal Opinion: A Post on a Comment Thread", "Informal opinion", "CORE", 18, ["adv-grammar-discourse-markers"],
    "Write a lively, well-structured informal opinion post with emotive vocabulary and discourse markers.",
    ["writing", "informal-writing", "opinion", "blog", "discourse-markers", "emotive-language"], "Informal opinion post (Unit 9)",
    [
      text("An **informal opinion post** is short and direct, but it is still **organised**: **position**, **reasons**, **counterpoint**, **wrap-up**. Emotive vocabulary shows strength of feeling, but **too much weakens credibility**.", "Explanation"),
      table("Emotive language", ["Mild", "Strong"], [["annoying", "infuriating / exasperating"], ["a nuisance", "a pain / a menace"], ["rude", "obnoxious"], ["bad", "appalling / dreadful"], ["I disagree", "I couldn't disagree more"]]),
      annotated("Model post", [["Position", "Quite honestly, I think the new library rules are a step backwards."], ["Reason", "Closing at six is a pain for anyone with a day job. Besides, students need the quiet on weekday evenings."], ["Counterpoint", "Mind you, I understand the staffing problem."], ["Wrap-up", "Anyway, I'd love to hear what others think."]]),
      tip("Keep your tone respectful: attack the idea, not the person.", "Netiquette"),
    ],
    [
      order("Put the parts of the post in order.", ["Position", "Reasons", "Counterpoint", "Wrap-up"], "paragraph", "Position first."),
      mc("Which word is a STRONG version of ‘annoying’?", ["infuriating", "slightly irritating", "fine"], 0, "Strong emotive word."),
      mist("Find the mistake (tone).", ["Whoever wrote", "this is a complete idiot", "and has no business posting."], 1, "has made a serious mistake", "Attack the idea, not the person."),
      fill("Quite ___, I think the new rules are a step backwards. (openness)", ["honestly"], "Quite honestly."),
      match("Function?", [["Mind you,", "counterpoint"], ["Besides,", "extra reason"], ["Anyway,", "wrap-up"]], "Match the marker."),
      mc("What is a risk of too much emotive language?", ["It can weaken credibility.", "It is illegal.", "It is too formal."], 0, "Balance is important."),
    ]),
];

void [compare, list, sa, structure, tf, tip, text, passage, annotated, table];
