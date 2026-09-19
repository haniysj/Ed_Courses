import { annotated, compare, fill, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, type SeedLesson } from "./dsl";
import { U } from "./upper-common";

// Upper-Intermediate, Units 7-9. Topics follow the academy's syllabus; every text is ORIGINAL (people and places are fictional).

const LONG_DISTANCE = "FROM THE MOUNTAINS TO THE SEA\n\n(A fictional story)\n\nAmir had never left his village in the mountains until the day he decided to follow a letter. The letter had come from a woman he had met once, at a wedding, and it ended with the words: “If you ever pass through Gothenburg, you must visit.”\n\nHe had no passport, so he had to apply for one. He had no money, so he got a job in a workshop and saved for a year. He had been told that the journey would take three weeks, and that he ought to take warm clothes; he had not been told how to say anything in Swedish. Along the way he was allowed to sleep in a truck driver's cab, and he got through to his sister by phone only twice.\n\nWhen he finally reached the port city, it was snowing. He got lost, he got wet and he almost gave up. Then he saw a woman crossing the street with a bicycle. “You'd better come in,” Lena said, laughing. “It's cold, and I've been expecting you for three weeks.”";
const TREEHOUSE = "A FAIRY TALE IN THE TREETOPS\n\n(A fictional feature)\n\nOn a quiet street in a city known for its skyscrapers, there is a forest that most residents have never seen. It is hidden behind a courtyard wall, and it belongs to Jonas Reed, an architect who builds houses in the branches of trees.\n\nReed's treehouses, which are supported by steel cables rather than nails, hang between old oaks like enormous lanterns. Guests, who often expect something small and uncomfortable, find themselves in rooms with glass floors and fires burning in stone hearths. “The tree is the client,” says Reed, smiling. “Anything that harms it is not allowed.”\n\nCritics, hearing about the project for the first time, tend to call it eccentric. But guests, most of them city dwellers who have not slept outdoors for years, book months in advance. One of them, describing the experience, wrote simply: “Absolutely magical. I have never felt so small, or so calm.”";
const ICEMAN = "THE MAN WHO TRAINED IN THE COLD\n\n(A fictional profile)\n\nWhen the temperature fell to minus twenty, Kofi Danso put on a pair of shorts and went for a run. Neighbours, watching from behind steamed-up windows, assumed he was joking. He was not.\n\nRaised in a hot country where snow was something in films, Kofi became fascinated by winter sports as a teenager. Determined to compete, he moved north with little money and an old pair of borrowed skis. Living in a tiny attic room, he trained before dawn in temperatures that made his eyelashes freeze, and he failed to qualify for three years in a row.\n\nHis fourth attempt was different. Exhausted but focused, he finished among the top ten, a result that astonished commentators and delighted his supporters. “The cold was terrifying at first,” he says. “Now I find it absolutely exhilarating.” He has since founded a programme that gives free winter equipment to young athletes from warm countries.";
const PAST_LIVING = "LIVING IN THE PAST\n\n(A fictional account)\n\nFor one year, Peter and Joanne Hale lived exactly as a family would have lived in 1900. They gave up their car, their phone and their electric lights, and they moved into a house lit only by oil lamps.\n\nPeter, a computer engineer, would get up at six to light the stove, and Joanne, a teacher, used to spend hours every week washing clothes by hand. “I was always complaining at first,” she admits. “I'd think: why are we doing this?” Their children, who had never been without a screen, gradually got used to reading by lamplight and playing board games in the evenings.\n\nThey did not enjoy everything. “I'll never get used to the cold bath,” Peter laughs. But at the end of the year, they agreed that they had never talked to each other so much. “We used to eat in front of the television,” says Joanne. “Now we sit at the table every night, and we would not go back.”";

export const UPPER_U7_U9: SeedLesson[] = [
  // ============================================================ UNIT 7
  U("upper-grammar-modals-obligation-probability", "GRAMMAR", "Modals and Related Verbs: Obligation, Permission and Probability", "Modal verbs", "CORE", 18, ["upper-grammar-quantifiers"],
    "Use must, should, ought to, had better, have (got) to, be allowed to, be bound to and be likely to to express obligation, advice, permission and probability.",
    ["grammar", "modal-verbs", "obligation", "permission", "probability", "advice"], "Modals of obligation and probability (Unit 7)",
    [
      text("Modals and **related verbs** (had better, be allowed to, be bound to) express the speaker's **attitude**. The main contrasts are **strength of advice**, **source of obligation** and **degree of probability**.", "Explanation"),
      table("Obligation and advice", ["Meaning", "Form", "Example"], [
        ["strong obligation (speaker's view)", "must", "I must remember to call her."],
        ["obligation from outside", "have to / have got to", "Employees have to wear ID badges."],
        ["strong advice / warning", "had better + base (no ‘to’)", "You'd better leave now, or you'll miss the train."],
        ["advice", "should / ought to / if I were you, I'd …", "You should see a specialist."],
        ["permission", "may / can / be allowed to", "Visitors are allowed to take photos."],
        ["prohibition", "mustn't / can't / not be allowed to", "You aren't allowed to park here."],
        ["no obligation", "don't have to / needn't", "You needn't come if you're busy."],
      ]),
      table("Probability", ["Meaning", "Form", "Example"], [
        ["very probable", "be bound to / be sure to / must", "She's bound to pass; she's worked so hard."],
        ["probable", "be likely to / should", "It's likely to rain tomorrow."],
        ["possible", "may / might / could", "He might be late."],
        ["improbable", "be unlikely to", "The plan is unlikely to succeed."],
      ]),
      compare("Errors", [["You had better to leave.", "You had better leave.", "No to after had better."], ["I must to go.", "I must go.", "No to after must."], ["You mustn't come if you don't want to.", "You don't have to come if you don't want to.", "Mustn't = forbidden."]]),
    ],
    [
      mc("You ___ leave now, or you'll miss the train.", ["had better", "ought", "are allowed"], 0, "Strong advice: had better + base verb."),
      mc("She has worked so hard; she ___ pass the exam.", ["is bound to", "is allowed to", "must to"], 0, "Very probable: is bound to."),
      mist("Find the mistake.", ["You", "had better to", "call the doctor."], 1, "had better", "No to after had better."),
      fill("Visitors ___ (allow) to take photos in the main hall.", ["are allowed"], "be allowed to = permission."),
      match("Which meaning?", [["You needn't come.", "no obligation"], ["You mustn't smoke.", "prohibition"], ["You should apologise.", "advice"], ["It's likely to rain.", "probability"]], "Match each modal to its meaning."),
      order("Put the words in the correct order.", ["If", "I", "were", "you,", "I", "would", "apply", "immediately."], "word", "Advice with If I were you."),
    ]),

  U("upper-vocab-get", "VOCABULARY", "get: Multiple Meanings and Phrasal Verbs", "Get", "CORE", 14, ["upper-vocab-variable-stress"],
    "Understand the many meanings of get and use common phrasal verbs with get accurately.",
    ["vocabulary", "get", "phrasal-verbs", "multi-meaning-words", "listening-support"], "Get expressions (Unit 7)",
    [
      text("**Get** is one of the most flexible English verbs. Its meaning depends on what follows it, so learn it **in chunks**. In formal writing, replace it with a more precise verb."),
      table("Meanings of get", ["Meaning", "Example", "Formal alternative"], [
        ["receive", "I got a letter.", "received"],
        ["become", "It's getting dark. / He got angry.", "became"],
        ["fetch", "Could you get me a glass of water?", "bring"],
        ["arrive / reach", "When do we get there?", "arrive"],
        ["understand", "I don't get the joke.", "understand"],
        ["obtain / buy", "She got a new laptop.", "obtained / bought"],
      ]),
      table("Phrasal verbs with get", ["Phrasal verb", "Meaning", "Example"], [
        ["get on (well) with", "have a good relationship", "I get on well with my colleagues."],
        ["get together", "meet socially", "Let's get together on Friday."],
        ["get out of", "avoid a duty", "He got out of washing up."],
        ["get over", "recover from", "It took her weeks to get over the flu."],
        ["get through to", "make someone understand / reach by phone", "I can't get through to him."],
        ["get round to", "find time to do", "I haven't got round to replying yet."],
      ]),
    ],
    [
      match("Match the phrasal verb with its meaning.", [["get over", "recover from"], ["get round to", "find time to do"], ["get on with", "have a good relationship"], ["get out of", "avoid a duty"], ["get together", "meet socially"]], "Learn each phrasal verb as a chunk."),
      mc("It took her weeks to ___ the flu.", ["get over", "get out of", "get round to"], 0, "get over = recover."),
      fill("I still haven't ___ round to replying to his email.", [["got", "gotten"]], "get round to = find time to."),
      mist("Find the mistake (formal writing).", ["The company", "got", "a large profit last year."], 1, "made", "Use a more precise verb in formal writing."),
      mc("“I don't get the joke” means ___.", ["I don't understand it.", "I don't receive it.", "I don't fetch it."], 0, "get = understand."),
      sa("“I can't ___ through to him: his phone is always busy.” (reach by phone)", ["get"], "get through to.", { hint: "g _ _" }),
    ]),

  U("upper-reading-mountains-to-sea", "READING", "Reading: From the Mountains to the Sea", "Narrative and modals", "CORE", 18, ["upper-reading-relentless-engineer"],
    "Track a long journey narrative across settings and identify character motivation and obligations.",
    ["reading", "narrative", "journey", "motivation", "modal-verbs"], "Journey narrative (Unit 7)",
    [
      text("In a journey story, keep a **map of stages**: where the character is, what they need, and what changes. Modal verbs (had to, ought to, was allowed to) show **rules and expectations**.", "Reading strategy"),
      passage("Example", "She had to cross the border on foot, and she was not allowed to take any luggage.", "Rules and obligations"),
      list("Guided practice", ["Obligation → had to cross on foot.", "Prohibition → not allowed to take luggage.", "Effect → a difficult journey."]),
    ],
    [
      mc("What made Amir decide to travel?", ["a letter from a woman he had met once", "a job offer", "a school trip"], 0, "“a letter… If you ever pass through Gothenburg, you must visit.”", LONG_DISTANCE),
      mc("How did he earn money for the trip?", ["He worked in a workshop for a year.", "He sold his house.", "He won a prize."], 0, "“he got a job in a workshop and saved for a year”.", LONG_DISTANCE),
      mc("What advice had he been given?", ["to take warm clothes", "to learn Swedish", "to travel by air"], 0, "He ought to take warm clothes.", LONG_DISTANCE),
      mc("What does “get through to his sister” mean?", ["reach her by phone", "understand her", "recover from illness"], 0, "Phrasal verb: get through to = contact.", LONG_DISTANCE),
      mc("What does Lena's “You'd better come in” express?", ["strong friendly advice", "a prohibition", "a possibility"], 0, "had better = strong advice.", LONG_DISTANCE),
      tf("Lena was surprised when Amir arrived.", false, "“I've been expecting you for three weeks.”", LONG_DISTANCE),
    ]),

  U("upper-writing-for-against-essay", "WRITING", "Arguing Your Case: The For and Against Essay", "Discursive essay", "CHALLENGING", 22, ["upper-writing-survey-report", "upper-writing-argument-counter"],
    "Plan and write a balanced For and Against essay with a clear thesis, topic sentences and balanced linkers.",
    ["writing", "essay", "for-and-against", "discursive", "linkers", "thesis-statement"], "For and against essay (Unit 7)",
    [
      text("A **For and Against** essay considers **both sides** of an issue and ends with **your reasoned view**. Each body paragraph starts with a **topic sentence** and develops **one** idea.", "Explanation"),
      table("Structure (about 200 words)", ["Paragraph", "Words", "Content"], [
        ["Introduction", "40", "background + thesis (what the essay will discuss)"],
        ["For", "60", "two advantages with reasons/examples"],
        ["Against", "60", "two disadvantages with reasons/examples"],
        ["Conclusion", "40", "balanced summary + your view"],
      ]),
      table("Balanced linkers", ["Function", "Phrases"], [["Advantage", "On the plus side, … · One advantage is … · A further benefit is …"], ["Disadvantage", "On the minus side, … · A serious drawback is … · Conversely, …"], ["Order", "First of all, … · Secondly, … · Finally, …"], ["Conclusion", "Overall, … · On balance, … · To my mind, …"]]),
      annotated("Model", [["Thesis", "Many families now share their homes with adult children; this essay considers both the benefits and the drawbacks."], ["For", "On the plus side, living together reduces costs, since rent and bills are shared."], ["Against", "On the minus side, both generations may lose privacy, which can cause tension."], ["Conclusion", "On balance, the arrangement works well when clear rules are agreed in advance."]]),
      tip("Avoid ‘I think’ throughout. Save your opinion for the conclusion (‘To my mind…’), and use hedging: may, tend to, can.", "Style"),
    ],
    [
      order("Put the parts of the essay in order.", ["Introduction", "Arguments for", "Arguments against", "Conclusion with view"], "paragraph", "Introduce, for, against, conclude."),
      mc("Which phrase introduces a DISADVANTAGE?", ["On the minus side,", "On the plus side,", "First of all,"], 0, "Minus side = disadvantage."),
      mc("Which is the best topic sentence for the ‘for’ paragraph?", ["On the plus side, living together reduces costs.", "Costs are money.", "I like my family."], 0, "It states one clear idea."),
      mist("Find the mistake (hedging).", ["Sharing a home", "always causes", "arguments."], 1, "can cause", "Avoid absolute claims."),
      fill("___ balance, the arrangement works well when rules are agreed. (write the missing word)", ["On"], "On balance."),
      mc("Where should you state your own opinion?", ["in the conclusion", "in every paragraph", "nowhere"], 0, "A balanced essay saves opinion for the end."),
    ]),

  U("upper-grammar-midterm-review-units-1-7", "GRAMMAR", "Mid-Term Review: Grammar, Vocabulary and Reading for Units 1–7", "Assessment review", "CHALLENGING", 24, ["upper-grammar-modals-obligation-probability", "upper-vocab-get"],
    "Practise the multiple-choice format of the mid-term examination across Units 1–7.",
    ["grammar", "review", "assessment-practice", "multiple-choice", "mid-term"], "Mid-term review (Units 1-7)",
    [
      text("The mid-term examination is **100% multiple choice** and covers **grammar, vocabulary and reading** from Units 1–7. Use this lesson to practise the **format**: read the whole sentence, **eliminate** wrong options, then check the **time expression and context**.", "Explanation"),
      table("Checklist by unit", ["Unit", "Focus"], [["1", "tense system; state vs dynamic verbs; compounds"], ["2", "present perfect simple / continuous; make and do"], ["3", "narrative tenses; book and film vocabulary"], ["4", "questions and negatives; antonyms and prefixes"], ["5", "future forms; take and put"], ["6", "quantifiers; noun–verb stress"], ["7", "modals of obligation and probability; get"]]),
      tip("Multiple-choice strategy: (1) cover the options and predict the answer, (2) eliminate what is clearly wrong, (3) check the remaining options against the time expression, (4) never leave an answer blank.", "Strategy"),
    ],
    [
      mc("I ___ here since 2019, and I still enjoy the work.", ["have been working", "worked", "was working"], 0, "Unfinished time: Present Perfect."),
      mc("When I got to the cinema, the film ___.", ["had already started", "was already starting", "already starts"], 0, "Earlier completed action."),
      mc("___ you like something to drink? (offer)", ["Wouldn't", "Don't", "Aren't"], 0, "Negative question as an offer."),
      mc("By the end of the year, I ___ my degree.", ["will have finished", "will finish", "am finishing"], 0, "Future Perfect."),
      mc("There are ___ students in the library than usual today.", ["fewer", "less", "little"], 0, "Countable noun: fewer."),
      mc("You ___ smoke in the hospital. It's forbidden.", ["mustn't", "don't have to", "needn't"], 0, "Prohibition."),
      mc("It took her weeks to ___ the illness.", ["get over", "put up with", "take on"], 0, "get over = recover."),
      mc("Could you ___ me a favour and post this letter?", ["do", "make", "take"], 0, "The collocation is do someone a favour."),
      mc("Which is the opposite of “responsible”?", ["irresponsible", "unresponsible", "disresponsible"], 0, "ir- before r."),
      mc("“She is bound to win” means she ___ win.", ["will almost certainly", "may possibly", "is not allowed to"], 0, "be bound to = very probable."),
    ]),

  // ============================================================ UNIT 8
  U("upper-grammar-participle-clauses", "GRAMMAR", "Participle Clauses: -ing and -ed as Reduced Clauses", "Participles", "CHALLENGING", 18, ["upper-grammar-relative-clauses"],
    "Use present and past participles to reduce relative clauses and to express time, reason and result.",
    ["grammar", "participles", "reduced-relative-clauses", "complex-sentences", "formal-writing"], "Participle clauses (Unit 8)",
    [
      text("**Participle clauses** replace longer clauses to make writing **concise and formal**. The **-ing participle** has an **active** meaning; the **-ed participle** has a **passive** meaning.", "Explanation"),
      table("Reducing clauses", ["Full clause", "Participle clause"], [
        ["The man who is standing by the door is my uncle.", "The man standing by the door is my uncle."],
        ["The letter, which was written in 1920, is valuable.", "The letter, written in 1920, is valuable."],
        ["As she felt tired, she went to bed early.", "Feeling tired, she went to bed early."],
        ["After he had finished the report, he sent it.", "Having finished the report, he sent it."],
        ["Because it was built in 1900, the house needs repairs.", "Built in 1900, the house needs repairs."],
      ]),
      list("Rules", ["**The subject of the participle clause must be the same as the main clause subject**: Walking to work, I met my boss. (I was walking)", "**Having + participle** shows an earlier action.", "**Never** attach a participle to the wrong subject: *Walking down the street, the sun was hot* is wrong."]),
      compare("Errors", [["Walking down the street, the shops looked closed.", "Walking down the street, I noticed that the shops looked closed.", "Wrong subject (dangling participle)."], ["The books writing by him are famous.", "The books written by him are famous.", "Passive meaning: -ed."]]),
    ],
    [
      mc("The man ___ by the door is my uncle.", ["standing", "stood", "to stand"], 0, "Active meaning: -ing."),
      mc("The building, ___ in 1900, needs repairs.", ["built", "building", "having built"], 0, "Passive meaning: -ed."),
      mist("Find the mistake.", ["Walking down the street,", "the shops were closed", "when I arrived."], 1, "I saw that the shops were closed", "The participle clause needs the same subject as the main clause: the person walking must be the subject."),
      fill("___ (finish) the report, she sent it to the manager.", ["Having finished"], "Earlier action: having + participle."),
      match("Reduce the clause.", [["who is standing", "standing"], ["which was written", "written"], ["As she felt tired", "Feeling tired"], ["After he had left", "Having left"]], "Use -ing for active, -ed for passive."),
      order("Put the words in the correct order.", ["Feeling", "tired,", "she", "went", "to", "bed", "early."], "word", "Participle clause + main clause."),
    ]),

  U("upper-vocab-extreme-adjectives", "VOCABULARY", "Gradable and Extreme Adjectives, and Adverb Collocations", "Adjectives", "CORE", 14, ["upper-vocab-get"],
    "Use gradable and extreme adjectives with the correct intensifiers.",
    ["vocabulary", "adjectives", "extreme-adjectives", "intensifiers", "collocations", "listening-support"], "Extreme adjectives (Unit 8)",
    [
      text("**Gradable adjectives** can be modified by *very, rather, fairly*: very cold. **Extreme (ungradable) adjectives** already contain the idea of ‘very’: *freezing*. They use *absolutely, completely, utterly*: absolutely freezing. **Not** *very freezing*."),
      table("Gradable → extreme", ["Gradable", "Extreme"], [["cold", "freezing"], ["hot", "boiling"], ["good", "wonderful / superb"], ["bad", "awful / terrible"], ["hungry", "starving"], ["tired", "exhausted"], ["funny", "hilarious"], ["sad", "devastated"], ["beautiful", "stunning"]]),
      table("Intensifiers", ["With", "Use", "Example"], [["gradable adjectives", "very, extremely, rather, quite, fairly", "It was extremely cold."], ["extreme adjectives", "absolutely, completely, utterly, really", "It was absolutely freezing."], ["both", "really", "The view was really beautiful / really stunning."]]),
      tip("Quite means ‘fairly’ with gradable adjectives but ‘completely’ with extreme ones: quite good = fairly good; quite perfect = completely perfect.", "Careful"),
    ],
    [
      match("Gradable → extreme.", [["cold", "freezing"], ["tired", "exhausted"], ["hungry", "starving"], ["funny", "hilarious"], ["sad", "devastated"]], "Extreme adjectives are stronger."),
      mc("The film was ___ hilarious; we laughed all evening.", ["absolutely", "very", "fairly"], 0, "Extreme adjectives use absolutely."),
      mist("Find the mistake.", ["The soup was", "very boiling", "so I waited."], 1, "absolutely boiling", "Extreme adjectives cannot be used with very."),
      fill("The view from the top was absolutely ___ (stunning / beautiful). (extreme)", ["stunning"], "stunning = extreme form of beautiful."),
      mc("Which combination is correct?", ["extremely tired", "absolutely tired", "very exhausted"], 0, "Gradable + extremely."),
      sa("Extremely hungry = ___", ["starving"], "starving.", { hint: "s _ _ _ _ _ _ g" }),
    ]),

  U("upper-reading-treetop-fairy-tale", "READING", "Reading: A Fairy Tale in the Treetops", "Feature article", "CORE", 16, ["upper-reading-mountains-to-sea"],
    "Analyse descriptive imagery and participle clauses in a feature article.",
    ["reading", "feature-article", "description", "imagery", "participle-clauses"], "Feature article: treehouses (Unit 8)",
    [
      text("Feature articles use **imagery** (comparisons like ‘lanterns’) and **quotations** to bring a subject to life. Look for **sensory language** and **extreme adjectives**, and notice how **participle clauses** pack information into one sentence.", "Reading strategy"),
      passage("Example", "Hidden behind a courtyard wall, the garden, planted by hand, feels absolutely magical.", "Participle clauses + extreme adjective"),
      list("Guided practice", ["Participle → hidden behind a courtyard wall.", "Passive participle → planted by hand.", "Extreme adjective → magical (attitude)."]),
    ],
    [
      mc("What does Jonas Reed build?", ["houses in the branches of trees", "skyscrapers", "gardens"], 0, "“houses in the branches of trees”.", TREEHOUSE),
      mc("What supports the treehouses?", ["steel cables", "nails", "concrete"], 0, "“supported by steel cables rather than nails”.", TREEHOUSE),
      mc("What image does the writer use to describe the treehouses?", ["enormous lanterns", "giant nests", "boats"], 0, "“like enormous lanterns”.", TREEHOUSE),
      mc("What does Reed mean by ‘The tree is the client’?", ["The tree's well-being comes first.", "Trees pay for the houses.", "He plants trees only."], 0, "Anything that harms the tree is not allowed.", TREEHOUSE),
      mc("Which extreme adjective does the guest use?", ["magical", "tiny", "calm"], 0, "“Absolutely magical.”", TREEHOUSE),
      tf("All critics love the project.", false, "Critics tend to call it eccentric.", TREEHOUSE),
    ]),

  U("upper-reading-cold-runner", "READING", "Reading: The Man Who Trained in the Cold", "Profile and determination", "CORE", 16, ["upper-reading-treetop-fairy-tale"],
    "Identify determination, setbacks and results in a profile and recognise participle clauses and extreme adjectives.",
    ["reading", "profile", "determination", "extreme-adjectives", "participle-clauses"], "Profile: the African iceman (Unit 8)",
    [
      text("Sports and adventure profiles follow a pattern: **background, challenge, setback, success, impact**. Highlight each stage, and note the **emotion words** that show the person's attitude.", "Reading strategy"),
      passage("Example", "Injured in his first race, she trained for two more years and finally won gold.", "Setback + success"),
      list("Guided practice", ["Setback → injury.", "Perseverance → two more years.", "Success → gold."]),
    ],
    [
      mc("Where did Kofi grow up?", ["in a hot country", "in a cold country", "on a mountain"], 0, "“Raised in a hot country where snow was something in films”.", ICEMAN),
      mc("What happened during his first three attempts to qualify?", ["He failed each time.", "He won each time.", "He did not try."], 0, "“failed to qualify for three years in a row”.", ICEMAN),
      mc("How did he feel about the cold at the end?", ["absolutely exhilarating", "terrifying", "boring"], 0, "“Now I find it absolutely exhilarating.”", ICEMAN),
      mc("Which phrase is a participle clause?", ["Living in a tiny attic room,", "he finished among the top ten,", "which astonished commentators"], 0, "Living in … is an -ing participle clause.", ICEMAN),
      mc("What has Kofi founded?", ["a programme giving winter equipment to young athletes", "a ski school for tourists", "a shop"], 0, "The last sentence.", ICEMAN),
      tf("Kofi won a medal in the top three.", false, "He finished among the top ten.", ICEMAN),
    ]),

  U("upper-writing-describing-places", "WRITING", "Describing Places: My Favourite Part of Town", "Descriptive writing", "CORE", 20, ["upper-grammar-participle-clauses"],
    "Write a well-organised description of a place with paragraphs, facts, evaluation, and relative and participle clauses.",
    ["writing", "description", "places", "relative-clauses", "participle-clauses"], "Describing places (Unit 8)",
    [
      text("A good **place description** separates **facts** (what is there) from **evaluation** (what you think), and organises the description in a **logical order**. Use **relative clauses** and **participle clauses** to add detail without short repetitive sentences.", "Explanation"),
      table("Paragraph plan", ["Paragraph", "Content"], [["1 Overview", "Where it is; the general impression"], ["2 Main features", "buildings, streets, places to visit (spatial order)"], ["3 Atmosphere and activities", "what people do; sounds, smells"], ["4 Evaluation", "why it is special; a recommendation"]]),
      annotated("Model paragraph", [["Fact", "The old market, which lies at the foot of the fort, is divided into narrow alleys selling spices, perfume and silver."], ["Detail", "Shaded by wooden roofs, the alleys stay cool even at midday."], ["Evaluation", "It is, in my view, the most atmospheric place in the city."]]),
      tip("Do not begin every sentence with ‘There is…’. Combine facts with which, where, -ing and -ed clauses.", "Variety"),
    ],
    [
      order("Put the paragraph parts in order.", ["Overview of the place", "Main features", "Atmosphere and activities", "Evaluation and recommendation"], "paragraph", "Overview, features, atmosphere, evaluation."),
      mc("Which sentence is an EVALUATION?", ["It is, in my view, the most atmospheric place in the city.", "The market lies at the foot of the fort.", "The alleys sell silver."], 0, "In my view = personal evaluation."),
      mist("Find the mistake.", ["The market,", "who lies", "at the foot of the fort, is very old."], 1, "which lies", "Which for places."),
      fill("___ (shade) by wooden roofs, the alleys stay cool.", ["Shaded"], "Passive participle: shaded."),
      mc("Which is the best combination of ideas?", ["The alleys, shaded by wooden roofs, sell spices.", "The alleys are shaded. The alleys sell spices.", "There are alleys and there are roofs."], 0, "Combining with a participle clause."),
      match("Fact or evaluation?", [["The fort dates from the 17th century.", "fact"], ["It is the most beautiful building in the city.", "evaluation"], ["The market opens at eight.", "fact"], ["The atmosphere is unforgettable.", "evaluation"]], "Separate facts from opinions."),
    ]),

  // ============================================================ UNIT 9
  U("upper-grammar-habits-present-past", "GRAMMAR", "Expressing Habit: Present and Past", "Habits", "CORE", 16, ["upper-grammar-participle-clauses"],
    "Express present and past habits with the simple tenses, will, would, used to and always + -ing.",
    ["grammar", "habits", "used-to", "would", "always-ing"], "Expressing habit (Unit 9)",
    [
      text("English has several ways of describing **habits**. Each adds a shade of meaning: **routine**, **typical behaviour**, **criticism** or **nostalgia**.", "Explanation"),
      table("Present and past habits", ["Form", "Meaning", "Example"], [
        ["Present Simple", "routine or regular event", "He gets up at six every day."],
        ["is always + -ing", "repeated action, often annoying", "She's always losing her keys."],
        ["will + base", "typical behaviour (stressed = criticism)", "He will talk for hours if you let him."],
        ["Past Simple", "regular past events", "We went to the beach every Friday."],
        ["used to + base", "past habits and states (not now)", "I used to live in a village. She used to be shy."],
        ["would + base", "repeated past actions (not states)", "Every summer we would visit my grandparents."],
        ["was/were always + -ing", "repeated past action; often annoying", "He was always borrowing my pens."],
      ]),
      list("Rules", ["**would** is for repeated actions, not states: *I would live in a village* is wrong.", "**used to** can describe both actions and states.", "In negatives and questions use **use to**: Did you use to play chess? I didn't use to like fish."]),
    ],
    [
      mc("When I was a child, I ___ live in a small village. (state)", ["used to", "would", "was always"], 0, "A past state: used to."),
      mc("Every summer, we ___ visit our grandparents in the mountains. (repeated action)", ["would", "used to be", "have been"], 0, "Would describes repeated actions."),
      fill("My brother ___ (always / borrow) my things without asking! It's so annoying.", ["is always borrowing"], "always + continuous = annoying habit."),
      mist("Find the mistake.", ["Did you", "used to lived", "in Muscat?"], 1, "use to live", "After did: use to + base verb."),
      match("Which meaning?", [["He will talk for hours.", "typical behaviour"], ["She's always losing her keys.", "annoying habit"], ["We would swim every day.", "past repeated action"], ["I used to be shy.", "past state"]], "Match the shade of meaning."),
      order("Put the words in the correct order.", ["He", "was", "always", "forgetting", "his", "homework."], "word", "Was always + -ing = annoying past habit."),
    ]),

  U("upper-grammar-used-to-get-used-to", "GRAMMAR", "used to, be used to and get used to", "Habit and familiarity", "CORE", 12, ["upper-grammar-habits-present-past"],
    "Distinguish used to + infinitive from be used to and get used to + -ing.",
    ["grammar", "used-to", "get-used-to", "-ing-form", "habit"], "used to; be/get used to (Unit 9)",
    [
      text("Three similar patterns have **different meanings**: **used to** (past habit), **be used to** (familiar with) and **get used to** (become familiar with). The last two are followed by a **noun or -ing**.", "Explanation"),
      table("Three patterns", ["Pattern", "Meaning", "Example"], [
        ["used to + base", "past habit or state (finished)", "I used to work nights."],
        ["be used to + -ing / noun", "familiar with; not strange now", "I'm used to working nights."],
        ["get used to + -ing / noun", "become familiar", "I'm getting used to working nights."],
      ]),
      compare("Errors", [["I'm used to work at night.", "I'm used to working at night.", "be used to + -ing."], ["I didn't used to like tea.", "I didn't use to like tea.", "didn't + use to."], ["She used to working late.", "She used to work late. / She is used to working late.", "Choose the correct pattern."]]),
    ],
    [
      mc("I ___ nights, but now I work in the morning.", ["used to work", "am used to working", "get used to work"], 0, "A finished past habit."),
      mc("After a few months, she got ___ the cold weather.", ["used to", "use to", "used to be"], 0, "get used to + noun."),
      mist("Find the mistake.", ["I'm not", "used to drive", "on the left."], 1, "used to driving", "be used to + -ing."),
      fill("It's taking time to get used to ___ (live) alone.", ["living"], "get used to + -ing."),
      match("Meaning?", [["I used to smoke.", "past habit"], ["I'm used to the noise.", "familiar"], ["I'm getting used to the noise.", "becoming familiar"]], "Compare the patterns."),
      mc("Which sentence is correct?", ["Did you use to play football?", "Did you used to play football?", "Are you use to play football?"], 0, "Did + use to."),
    ]),

  U("upper-vocab-homonyms-homophones", "VOCABULARY", "Homonyms and Homophones", "Word confusion", "CORE", 12, ["upper-vocab-extreme-adjectives"],
    "Distinguish homonyms (same spelling, different meaning) from homophones (same sound, different spelling) and use them accurately.",
    ["vocabulary", "homonyms", "homophones", "spelling", "listening-support"], "Homonyms and homophones (Unit 9)",
    [
      text("**Homonyms** have the **same spelling** (and often sound) but **different meanings**. **Homophones** **sound the same** but are **spelled differently**. Homophones are a frequent source of **spelling errors** in writing."),
      table("Homonyms", ["Word", "Meanings"], [["fine", "very good · a penalty payment · thin"], ["mean", "unkind · to signify · average"], ["park", "a green space · to leave a vehicle"], ["type", "a kind · to write on a keyboard"], ["suit", "formal clothes · to be convenient for"], ["right", "correct · the opposite of left · a legal entitlement"]]),
      table("Homophones", ["Pair", "Meaning"], [["right / write", "correct / put words on paper"], ["fair / fare", "just / price of a journey"], ["peace / piece", "calm / a part"], ["sales / sails", "reductions in price / parts of a boat"], ["cell / sell", "a small room or unit / exchange for money"], ["where / wear", "which place / have on the body"], ["wood / would", "material from a tree / modal verb"], ["flour / flower", "used for baking / a blossom"]]),
      tip("In your error log, keep a list of homophones you confuse. Use the meaning of the whole sentence to choose the spelling.", "Editing"),
    ],
    [
      match("Match the homophone with its meaning.", [["fare", "price of a journey"], ["piece", "a part of something"], ["sails", "parts of a boat"], ["flour", "used for baking"], ["wear", "have on the body"]], "Learn each with its meaning."),
      mist("Find the mistake.", ["I want to", "sell", "this letter tomorrow."], 1, "send", "Sell ≠ send: check the word meaning."),
      fill("There were big ___ (reductions in price) in the shops last week.", ["sales"], "sales = reductions."),
      mc("Which sentence uses the correct homophone?", ["The bus fare is expensive.", "The bus fair is expensive.", "The bus fere is expensive."], 0, "Fare = price of a journey."),
      mc("“She received a fine for parking illegally” means she was ___.", ["given a penalty", "very good", "thin"], 0, "Fine = penalty."),
      sa("The opposite of war is ___ (a homophone of piece)", ["peace"], "peace.", { hint: "p _ _ _ e" }),
    ]),

  U("upper-reading-living-in-the-past", "READING", "Reading: Living in the Past", "Lifestyle contrasts", "CORE", 18, ["upper-reading-cold-runner"],
    "Compare past and present lifestyles and identify habit forms in a feature article.",
    ["reading", "lifestyle", "comparison", "habit", "nostalgia"], "Living in the past (Unit 9)",
    [
      text("Articles about lifestyle change use **contrast** (then/now) and **habit forms** (used to, would, was always -ing). Make a **then / now** table as you read.", "Reading strategy"),
      passage("Example", "We used to write letters; now we send messages. Waiting for a reply would take weeks.", "Then vs now"),
      list("Guided practice", ["Then → letters; weeks of waiting.", "Now → messages.", "Habit forms → used to; would."]),
    ],
    [
      mc("How long did the Hales live like a family of 1900?", ["one year", "one week", "ten years"], 0, "“For one year”.", PAST_LIVING),
      mc("What did they give up?", ["car, phone and electric lights", "their jobs", "their friends"], 0, "“gave up their car, their phone and their electric lights”.", PAST_LIVING),
      mc("How did Joanne use to spend time each week?", ["washing clothes by hand", "playing board games", "visiting friends"], 0, "“used to spend hours every week washing clothes by hand”.", PAST_LIVING),
      mc("Why does Peter say ‘I'll never get used to the cold bath’?", ["He finds it extremely uncomfortable.", "He loves it.", "It is short."], 0, "Get used to = become accustomed.", PAST_LIVING),
      mc("What was the main benefit for the family?", ["They talked to each other more.", "They saved money.", "They were healthier."], 0, "“never talked to each other so much”.", PAST_LIVING),
      tf("The family would like to return to their old habits.", false, "“we would not go back”.", PAST_LIVING),
    ]),

  U("upper-writing-early-memory", "WRITING", "Writing for Talking: An Early Memory", "Memory writing", "CORE", 18, ["upper-grammar-habits-present-past", "upper-writing-adverbs-narrative"],
    "Write a short spoken-style memory with a hook, vivid details and a clear chronological structure.",
    ["writing", "memory", "narrative", "speech", "hook", "chronology"], "Writing for talking: an early memory (Unit 9)",
    [
      text("A piece **written to be spoken** has **shorter sentences**, **rhetorical pacing**, a **hook** and a **clear time order**. Read it aloud to check that it sounds natural.", "Explanation"),
      table("Structure (about 200 words)", ["Part", "Purpose", "Language"], [["Hook", "catch attention", "a question, a sensory detail or a surprising statement"], ["Setting", "when, where, who", "used to, would, past continuous"], ["Events", "what happened, in order", "Past Simple, sequencing words, adverbs"], ["Reflection", "why it matters now", "Present Perfect, present simple"]]),
      annotated("Model", [["Hook", "Can you still smell your grandmother's kitchen?"], ["Setting", "Every Friday, we would walk to her house at the end of the lane, where the door was always open."], ["Events", "One evening, while she was baking, I quietly slipped a whole cake under the table. Suddenly the cat jumped, and the cake fell."], ["Reflection", "She never scolded me. That is why, forty years later, the smell of cardamom still means home."]]),
      tip("Use rhythm: short sentences for tension, a longer sentence to slow down. Read your text aloud.", "Pacing"),
    ],
    [
      order("Put the parts in order.", ["Hook", "Setting", "Events", "Reflection"], "paragraph", "Hook first, then setting, events, reflection."),
      mc("Which is the best hook?", ["Can you still smell your grandmother's kitchen?", "This is a memory.", "I will tell you a story."], 0, "A question with a sensory detail."),
      fill("Every Friday we ___ (walk) to her house at the end of the lane. (habit)", ["would walk"], "would for repeated actions."),
      mist("Find the mistake.", ["One evening,", "while she baked,", "I quietly slipped away."], 1, "while she was baking", "Background action: Past Continuous."),
      mc("Why should you read your text aloud?", ["to check that it sounds natural", "to count words", "to correct spelling only"], 0, "It is written for talking."),
      match("Which tense?", [["We would visit her every Friday.", "habit"], ["The cat jumped.", "event"], ["I have never forgotten.", "reflection"]], "Match the tense with its function."),
    ]),

  U("upper-writing-in-class-2-preparation", "WRITING", "In-Class Writing 2: A For and Against Essay or Formal Survey Report (200 Words)", "Assessment preparation", "CHALLENGING", 24, ["upper-writing-for-against-essay", "upper-writing-survey-report"],
    "Choose between a For and Against essay and a survey report and produce a well-structured 200-word text under time pressure.",
    ["writing", "essay", "report", "assessment-practice", "200-words"], "In-Class Writing 2 preparation (Units 6-9)",
    [
      text("In Writing 2 you will produce **either** a **For and Against essay** **or** a **formal survey report** of about **200 words**. The choice depends on the question: ‘Discuss the advantages and disadvantages…’ → essay; ‘Report on the results of a survey…’ → report.", "Explanation"),
      table("Which text type?", ["Question type", "Text", "Structure"], [["Discuss both sides of an issue", "For and Against essay", "Intro – For – Against – Conclusion"], ["Report on data / survey results", "Formal report", "Background – Method – Findings – Recommendations"]]),
      table("Checklist", ["Area", "Check"], [["Task", "Both sides / all four sections covered?"], ["Organisation", "Topic sentence in each paragraph? Headings if a report?"], ["Language", "Linkers, passive, relative and participle clauses?"], ["Accuracy", "Correction codes: T, Gr, WW, Sp, P"], ["Length", "200 words ± 10%"]]),
      annotated("Sample opening (report)", [["Objective", "The aim of this report is to find out how students feel about the new library opening hours."], ["Method", "A questionnaire was completed by 60 students."], ["Findings", "The majority (70%) were in favour of longer hours, while only a small minority preferred the old system."]]),
    ],
    [
      mc("‘Report on the results of a survey of student opinion’ requires ___.", ["a formal report", "a For and Against essay", "a narrative"], 0, "The question mentions a survey report."),
      mc("‘Discuss the advantages and disadvantages of online learning’ requires ___.", ["a For and Against essay", "a formal report", "a letter"], 0, "Both sides = essay."),
      mist("Find the mistake (register).", ["The majority", "was totally", "in favour."], 1, "were completely", "Formal register and plural agreement: majority of respondents were."),
      fill("A questionnaire ___ (complete) by sixty students.", ["was completed"], "Passive in a method section."),
      order("Put the sections of a report in order.", ["Background and objectives", "Methodology", "Findings", "Recommendations"], "paragraph", "The standard order."),
      mc("What length should the answer be?", ["about 200 words", "about 60 words", "about 600 words"], 0, "About 200 words."),
    ]),
];

void [compare, structure, tip, annotated, passage, tf, sa, text, list, table];
