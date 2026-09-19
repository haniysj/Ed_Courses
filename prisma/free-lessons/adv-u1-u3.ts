import { annotated, compare, fill, flow, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, vocab, type SeedLesson } from "./dsl";
import { A } from "./adv-common";

// Advanced, Units 1-3. Topics follow the academy's syllabus; every text is ORIGINAL (people, organisations and works are fictional).

const HUMAN = "WHAT MAKES US HUMAN?\n\nThe search for a single trait that separates humans from every other animal has occupied thinkers for centuries, and it has rarely ended well: each time a candidate is proposed, researchers discover an animal that appears to share it. Tool use, once considered uniquely human, has been observed in crows and chimpanzees. Even so, taken together, a handful of characteristics seem to set our species apart.\n\nFirst, language. Other species communicate, sometimes elaborately, but no other known communication system combines a large vocabulary with grammar that allows an unlimited number of new messages to be produced. Second, our upright posture, which freed the hands for carrying and making things, is thought to have shaped the evolution of the brain. Third, and perhaps most significant, is cumulative culture: each generation inherits the knowledge of the last and improves on it, so that no individual needs to reinvent the wheel.\n\nOne trait that is easily overlooked is cooperation with strangers. Our forebears lived in small groups, yet humans today trade, negotiate and collaborate with people they will never meet. Whether this is the result of a single evolutionary leap or of many small ones remains an open question, and scholars who dwell on the matter rarely agree.";
const PROFILE_WEAK = "I am a very hard-working and passionate person who is always motivated. I have always been a team player and I think outside the box. I am good at many things and I would be a great asset to your university.";
const SPEECH_CLASS = "THE PHONETICS EXAMINER\n\n(A fictional scene)\n\nProfessor Harcourt looked at the girl over the top of his notebook. She had been standing in the hall for ten minutes, twisting a ribbon between her fingers.\n\n“Say it again,” he ordered. “Slowly.”\n\n“I didn't say nothing,” she said. “I only asked was this the room for the elocution class.”\n\n“Nothing,” he corrected, not unkindly. “You didn't say anything. Every word you speak places you on a map of this city, my dear, down to the street. It is a remarkable thing, and a rather cruel one.”\n\n“Then teach me to sound like the other side of the map,” she said, lifting her chin. “I'll pay you what I've got.”\n\nHe considered her for a long moment. “Six months,” he said at last. “And on the day you can say ‘nothing’ without thinking about it, you may find that you have lost something you cannot buy back.”";
const MODERN_NOVEL = "THE SIZE-TEN DIARIES\n\n(A fictional novel extract)\n\nMonday. Day one of the new me. I woke at six, which is an hour I had previously believed to exist only on television, and I ate a breakfast the colour of wet cardboard while my flatmate watched me the way people watch a stranger defuse a bomb.\n\n“You're doing what?” Priya asked.\n\n“Getting fit,” I said, with as much dignity as one can muster in odd socks. “Properly. No more midnight biscuits, no more lifts. I've even jotted down a list.”\n\nShe took the list from my hand and read it aloud in the voice of a judge sentencing a criminal. “‘Walk to work.’ You live three miles away.”\n\n“It's called ambition.”\n\n“It's called a blister,” she said, kindly enough, and handed me a plaster for later.";
const FEENEY = "THE GENEROUS MILLIONAIRE NOBODY KNEW\n\n(A fictional biography)\n\nFor almost forty years, Marta Ellison lived in a rented flat, flew economy and wore a watch that cost less than a sandwich. Her neighbours assumed she was a retired clerk. In fact, she had built one of the largest retail companies in her country and, secretly, had given away nearly everything she owned.\n\nWhen she sold her business in her fifties, she set up a foundation with strict conditions: the donations must never be traced to her, and the money should be spent, not saved. Over the next four decades, it funded universities, hospitals and peace initiatives in more than twenty countries. Recipients often had no idea who their benefactor was.\n\nHer principle, she once explained to a rare interviewer, was simple: “I don't believe in giving away money after I'm dead. I'd rather see the good it does while I'm alive.” When journalists finally uncovered the story, she declined to discuss it. “Nobody,” she said, “needs to be thanked for doing what they ought to have done.”";
const LIMITS = "LIMITS TO GROWTH\n\nFor much of the twentieth century, economic growth was treated as an unqualified good. Rising output meant higher incomes, better healthcare and greater choice, and few questioned whether it could continue indefinitely. Since the 1970s, however, a growing number of economists and ecologists have argued that unlimited growth on a finite planet is a contradiction.\n\nThe argument is not that growth is bad in itself, but that its costs have been consistently underestimated. Resource extraction, waste and emissions all rise with output, and the environmental damage they cause is rarely reflected in the price of goods. Critics contend that if these costs were counted, some activities currently regarded as profitable would prove to be loss-making.\n\nDefenders of growth respond that innovation has repeatedly proved doom-mongers wrong, and that wealthier societies can afford to protect their environments. The debate, which shows little sign of ending, turns on a single empirical question: can economic activity be separated from resource use quickly enough?";
const GRAPH = "Figure 1 shows the number of monthly visitors to the Riverside Art Museum between 2015 and 2024.\n\nVisitors rose steadily from 42,000 in 2015 to a peak of 71,000 in 2019. In 2020, the figure plummeted to 9,000 as a result of temporary closures. Numbers then recovered gradually, and by 2024 they had climbed to 64,000, still 10 percent below the pre-closure peak.";

export const ADV_U1_U3: SeedLesson[] = [
  // ============================================================ UNIT 1
  A("adv-grammar-tense-review", "GRAMMAR", "Tense Review at Advanced Level: Aspect, Voice and Perfect vs Non-Perfect", "Tense system", "CHALLENGING", 20, ["upper-grammar-final-review-units-1-12"],
    "Choose tense, aspect and voice precisely, contrasting simple/continuous, perfect/non-perfect and active/passive across time frames.",
    ["grammar", "tenses", "aspect", "passive-voice", "tense-review"], "Tense review (Unit 1)",
    [
      text("Advanced accuracy means choosing the form that **conveys your exact meaning**, not merely a correct one. Each verb form is a choice of **time**, **aspect** (simple, continuous), **perfect / non-perfect** and **voice**.", "Explanation"),
      table("What each choice signals", ["Choice", "Signals", "Example"], [
        ["Simple", "complete, permanent, factual", "She wrote the report."],
        ["Continuous", "in progress, temporary, incomplete or emotionally coloured", "She was writing the report when I called."],
        ["Perfect", "relevance of an earlier time to a later reference point", "She has written the report. / She will have written it by noon."],
        ["Perfect continuous", "duration or visible effect", "She has been writing since dawn (she looks tired)."],
        ["Passive", "focus on the receiver, unknown or unimportant agent", "The report is being written by a specialist."],
      ]),
      table("Perfect vs non-perfect", ["Non-perfect", "Perfect", "Difference"], [
        ["He worked there for years.", "He has worked there for years.", "Finished period vs continues to now."],
        ["I hope that I finish by Friday.", "I hope that I will have finished by Friday.", "Completion before a deadline."],
        ["She said she lived in Rome.", "She said she had lived in Rome.", "Earlier than the reporting time."],
      ]),
      list("Beyond the basics", ["**Continuous with always** expresses irritation: He's always leaving doors open.", "**Present Simple for narrative or headlines**: The minister resigns after scandal.", "**Present Perfect Continuous** can suggest that an activity may not be complete: I've been reading the report (I haven't finished).", "**Passive with a perfect or continuous aspect**: The bridge has been being repaired for weeks (rare but possible), is being repaired (common)."]),
      tip("If your meaning could equally be expressed by two forms, ask: which one tells the reader exactly what I want to stress — completeness, duration, result or the person affected?", "Advanced habit"),
    ],
    [
      mc("I ___ the report since dawn, so it's not finished yet.", ["have been reading", "have read", "read"], 0, "Duration, possibly incomplete: perfect continuous."),
      mc("By the time the results are announced, we ___ for two months.", ["will have been waiting", "will wait", "have been waiting"], 0, "Duration up to a future point."),
      mist("Find the mistake.", ["The old bridge", "repairs", "at the moment."], 1, "is being repaired", "The bridge receives the action, and it is in progress: passive continuous."),
      fill("She said that she ___ (live) in Rome for ten years before moving here.", [["had lived", "had been living"]], "Earlier than the reporting time: past perfect."),
      match("Which meaning?", [["He's always leaving doors open.", "irritation"], ["The minister resigns after scandal.", "headline narrative"], ["I've been reading the report.", "possibly unfinished"], ["The report has been read.", "completed, passive"]], "Match each form with its effect."),
      order("Put the words in the correct order.", ["By", "next", "June", "the", "bridge", "will", "have", "been", "repaired."], "word", "Future perfect passive."),
    ]),

  A("adv-grammar-reflexive-pronouns", "GRAMMAR", "Reflexive Pronouns: Emphasis, Action and Idiom", "Reflexives", "CORE", 12, ["adv-grammar-tense-review"],
    "Use reflexive pronouns for emphasis, for actions done to oneself and in fixed expressions, and avoid unnecessary reflexives.",
    ["grammar", "reflexive-pronouns", "emphasis", "pronouns"], "Reflexive pronouns (Unit 1)",
    [
      text("**Reflexive pronouns** (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) have three main functions: to show that **subject and object are the same**, to give **emphasis**, and to appear in **fixed expressions**.", "Explanation"),
      table("Functions", ["Function", "Example"], [
        ["Same subject and object", "She taught herself Russian. He blamed himself."],
        ["Emphasis (after a noun or at the end)", "The director herself signed the letter. I did it myself."],
        ["By + reflexive = alone / without help", "They built the house by themselves."],
        ["Fixed expressions", "Help yourself. Behave yourself! Enjoy yourselves. Pull yourself together."],
      ]),
      list("Where reflexives are not used", ["After verbs of routine washing/dressing when meaning is obvious: He shaved. She got dressed.", "After prepositions of place or accompaniment: She put the bag behind her (not herself). He had his passport with him.", "For reciprocal actions use each other / one another: They congratulated each other."]),
      compare("Errors", [["She put the file next to herself.", "She put the file next to her.", "A preposition of place normally takes an object pronoun."], ["They didn't get on with themselves.", "They didn't get on with each other.", "Reciprocal meaning."]]),
    ],
    [
      mc("The director ___ signed the letter; nobody else was allowed to.", ["herself", "her", "she"], 0, "Emphatic reflexive."),
      mc("They built the whole house by ___.", ["themselves", "them", "each other"], 0, "by + reflexive = without help."),
      mist("Find the mistake.", ["She put", "the file next to herself", "on the desk."], 1, "next to her", "Place prepositions take an object pronoun."),
      fill("Please help ___ to coffee and sandwiches. (to a group)", ["yourselves"], "Fixed expression."),
      match("Reflexive or not?", [["She taught ___ Russian.", "herself"], ["They congratulated ___.", "each other"], ["He had his passport with ___.", "him"]], "Match the correct pronoun."),
      mc("Which sentence uses the reflexive correctly?", ["He blamed himself for the accident.", "He blamed him for himself.", "He blamed itself."], 0, "Subject and object are the same."),
    ]),

  A("adv-vocab-synonyms-in-context", "VOCABULARY", "Synonyms in Context: Nuance, Register and Collocation", "Synonyms", "CHALLENGING", 16, ["adv-vocab-academic-register"],
    "Choose between near-synonyms using meaning, register and collocation, with pairs such as trait/characteristic and forebears/ancestors.",
    ["vocabulary", "synonyms", "register", "collocation", "nuance"], "Synonyms in context (Unit 1)",
    [
      text("At C1 you should understand that near-synonyms are rarely fully interchangeable. Choose by **meaning**, **register** and **collocation**."),
      table("Synonym pairs", ["Pair", "Difference", "Example"], [
        ["characteristic / trait", "characteristic = typical feature (of anything); trait = a feature of personality or heredity", "Curiosity is her defining trait. A characteristic of the region is its dry climate."],
        ["forebears / ancestors", "forebears is more literary; ancestors is neutral and common", "Their forebears farmed this valley."],
        ["chief / main / principal", "chief and principal are formal; main is neutral; chief can also be a person (a tribal chief)", "The main reason … · The principal objection …"],
        ["dwell in / inhabit / live in", "dwell in and inhabit are formal; inhabit takes a direct object", "Many species inhabit the forest."],
        ["notion / idea / concept", "notion = vague or general idea; concept = an abstract, well-defined idea", "the concept of time; a vague notion of what to do"],
      ]),
      list("Strategy", ["Check a learner's dictionary for **example sentences**, not only definitions.", "Note **collocations** (a chief concern, a principal reason, but not a principal problem).", "Prefer **neutral** words in academic writing unless a formal one is exact."]),
    ],
    [
      match("Match the synonym pairs to the difference in use.", [["forebears", "literary word for ancestors"], ["trait", "feature of personality"], ["inhabit", "formal; takes a direct object"], ["notion", "a vague idea"]], "Learn the register and collocation."),
      mc("Their ___ farmed this valley for generations. (literary style)", ["forebears", "traits", "notions"], 0, "Forebears = ancestors, literary."),
      mc("Which sentence is correct?", ["Many species inhabit the forest.", "Many species inhabit in the forest.", "Many species inhabit to the forest."], 0, "Inhabit takes a direct object."),
      mist("Find the mistake.", ["Curiosity is", "her defining characteristic of personality", "and ambition."], 1, "trait", "For personality, trait is the natural word."),
      fill("The ___ objection to the plan is its cost. (formal for main)", [["principal", "chief"]], "chief / principal are formal."),
      mc("Which word is the most abstract and well defined?", ["concept", "notion", "hunch"], 0, "Concept."),
    ]),

  A("adv-vocab-life-stages", "VOCABULARY", "Stages of Life: Collocations, Informal Verbs and Idioms", "Life stages", "CORE", 14, ["adv-vocab-synonyms-in-context"],
    "Use vocabulary and collocations that describe the stages of life from childhood to old age.",
    ["vocabulary", "life-stages", "collocations", "idioms", "informal-register", "listening-support"], "Stages of life (Unit 1)",
    [
      text("The **stages of life** have a rich vocabulary, much of it informal or humorous. Notice the **register** and the **grammar** of each expression."),
      table("Stages and expressions", ["Stage", "Expressions", "Example"], [
        ["Childhood", "crawl, toddle, satchel, tantrum, grow out of", "He soon grew out of his tantrums."],
        ["School / study", "swot for an exam, cram, drop out, a mature student, graduate with honours", "She spent the week swotting for her finals."],
        ["Young adulthood", "teeter on high heels, fresh-faced, settle down, leave the nest", "They decided to settle down and start a family."],
        ["Mid-life", "midlife crisis, be in your prime, be set in your ways, climb the career ladder", "He bought a motorbike during his midlife crisis."],
        ["Later life", "retire, be over the hill, a golden age, pass away, be a bit forgetful", "She is still active at 80; she isn't over the hill."],
      ]),
      tip("Some expressions are humorous or slightly critical (be over the hill, be set in your ways). Use them in informal contexts; use retire, elderly or advanced in years in formal writing.", "Register"),
    ],
    [
      match("Match the expression with its meaning.", [["swot for an exam", "study hard before an exam"], ["settle down", "adopt a stable lifestyle"], ["grow out of", "stop doing as you mature"], ["be set in your ways", "unwilling to change habits"], ["leave the nest", "leave the family home"]], "Learn the collocations."),
      mc("She spent the whole weekend ___ for her finals.", ["swotting", "toddling", "retiring"], 0, "Swot for an exam."),
      fill("After years of travelling, they decided to ___ down and buy a house.", ["settle"], "settle down."),
      mc("Which is most appropriate in a formal report?", ["Many employees are approaching retirement.", "Many employees are over the hill.", "Many employees are past it."], 0, "Formal register avoids humorous idioms."),
      mc("Which expression is INFORMAL and humorous?", ["be over the hill", "retire", "advanced in years"], 0, "Over the hill = too old."),
      sa("A childish outburst of anger is a ___", ["tantrum"], "tantrum.", { hint: "t _ _ _ _ _ m" }),
    ]),

  A("adv-reading-what-makes-us-human", "READING", "Reading: What Makes Us Human?", "Popular science", "CHALLENGING", 20, ["upper-reading-body-clock"],
    "Analyse a popular-science article: identify the central question, the writer's evidence and the level of certainty.",
    ["reading", "popular-science", "argument", "hedging", "critical-reading"], "Popular science: human traits (Unit 1)",
    [
      text("Popular-science writing sets up a **question**, offers **candidate answers**, **tests** them against evidence and often ends with an **open conclusion**. Distinguish **claims** from **hedged suggestions** (*is thought to*, *appears to*, *remains an open question*).", "Reading strategy"),
      passage("Example", "The ability to lie convincingly, once thought uniquely human, appears to be shared by some primates, which complicates any simple answer.", "Claim challenged by evidence"),
      list("Guided practice", ["Candidate trait → convincing lies.", "Counter-evidence → some primates.", "Effect → no simple answer."]),
    ],
    [
      mc("Why has the search for a single unique human trait rarely ended well?", ["Researchers keep finding animals that seem to share the trait.", "Scientists disagree about the definition of human.", "Humans have too many traits."], 0, "Each candidate seems to be shared by another animal.", HUMAN),
      mc("What does the writer say about tool use?", ["It was once considered uniquely human but has been seen in other animals.", "Only humans use tools.", "Tool use is not important."], 0, "Crows and chimpanzees.", HUMAN),
      mc("What distinguishes human language from other communication systems?", ["a large vocabulary combined with grammar that generates unlimited messages", "loudness", "the use of gestures"], 0, "Paragraph 2.", HUMAN),
      mc("What is meant by ‘cumulative culture’?", ["each generation builds on the knowledge of the last", "sharing food", "moving between cultures"], 0, "“no individual needs to reinvent the wheel”.", HUMAN),
      mc("What is the writer's attitude to the final question?", ["It remains unresolved.", "It has been solved.", "It is unimportant."], 0, "“remains an open question”.", HUMAN),
      tf("The writer claims that upright posture definitely caused the evolution of the human brain.", false, "“is thought to have shaped”: a hedge, not a certainty.", HUMAN),
    ]),

  A("adv-writing-personal-profile", "WRITING", "Introducing Yourself: The Formal Personal Profile (200 Words)", "Personal statement", "CHALLENGING", 22, ["upper-writing-final-exam-essay", "adv-grammar-tense-review"],
    "Draft a 200-word personal statement in an appropriate register, avoiding clichés and using evidence rather than self-praise.",
    ["writing", "personal-statement", "profile", "register", "cliché", "200-words"], "Personal profile (Unit 1, p. 109)",
    [
      text("A **personal profile** or statement presents your **achievements, motivation and goals** in a concise, credible way. **Evidence** persuades; **self-praise** does not.", "Explanation"),
      passage("Weak draft (clichés and unsupported claims)", PROFILE_WEAK, "What is wrong?"),
      table("Diagnose and improve", ["Problem", "Improvement"], [
        ["Clichés (team player, think outside the box, hard-working)", "Give evidence: ‘I led a five-member team that reduced processing time by 30%.’"],
        ["Vague claims (good at many things)", "Name specific achievements, skills, experience"],
        ["Repetitive ‘I am… I have…’ openings", "Vary structures: participle clauses, fronting, relative clauses"],
        ["Generic ending (great asset)", "Link to the course or role: ‘I am keen to develop … which the programme offers.’"],
      ]),
      annotated("Model extract", [["Opening", "Having graduated with distinction in environmental science, I have spent the past two years coordinating water-quality projects across three regions."], ["Evidence", "Leading a team of five, I introduced a monitoring system that reduced reporting time by almost a third."], ["Goal", "What I now seek is the opportunity to develop the research skills that the programme is renowned for."]]),
      tip("Tone: formal but human. Avoid contractions and slang, but do not sound like a list of qualifications.", "Register"),
    ],
    [
      mc("Which sentence is the strongest for a personal statement?", ["Leading a team of five, I introduced a system that reduced reporting time by almost a third.", "I am a hard-working team player.", "I think outside the box."], 0, "Specific evidence."),
      mist("Find the mistake (cliché).", ["I am a", "passionate team player", "who is always motivated."], 1, "someone who has led projects", "Clichés should be replaced by evidence."),
      fill("___ (graduate) with distinction, I joined a research team.", [["Having graduated", "Graduating"]], "Participle clause."),
      order("Put the parts of the profile in order.", ["Opening with achievements", "Evidence of skills", "Motivation", "Link to the programme"], "paragraph", "A logical profile order."),
      mc("What is the target length?", ["about 200 words", "about 20 words", "about 800 words"], 0, "200 words."),
      match("Improve the expression.", [["hard-working", "led a team that met every deadline"], ["good at many things", "fluent in three languages"]], "Turn vague claims into evidence."),
    ]),

  // ============================================================ UNIT 2
  A("adv-grammar-adverbs-adjectives", "GRAMMAR", "Adverbs and Adjectives: Collocations, Dual Forms and Position", "Adverbs", "CHALLENGING", 18, ["adv-grammar-reflexive-pronouns"],
    "Use high-level adverb collocations and adverbs with two forms accurately, and place adverbs for emphasis and style.",
    ["grammar", "adverbs", "adjectives", "collocation", "dual-form-adverbs"], "Adverbs and adjectives (Unit 2)",
    [
      text("Advanced writers use **precise adverb–adjective collocations** and know the difference between **adverbs with two forms**.", "Explanation"),
      table("Collocations", ["Adverb + adjective/verb", "Example"], [
        ["deeply regret / deeply moved", "We deeply regret any inconvenience."],
        ["highly motivated / highly unlikely", "It is highly unlikely that prices will fall."],
        ["bitterly disappointed / bitterly cold", "He was bitterly disappointed by the result."],
        ["fully aware / entirely different", "They were fully aware of the risks."],
        ["strongly recommend / firmly believe", "I strongly recommend the second option."],
        ["painfully slow / blissfully happy", "The process was painfully slow."],
      ]),
      table("Adverbs with two forms", ["Word", "Flat adverb", "-ly adverb"], [
        ["hard", "She works hard. (with effort)", "I hardly know him. (almost not)"],
        ["late", "He arrived late.", "Lately, prices have risen. (recently)"],
        ["wide", "Open the door wide.", "The disease is widely known. (by many people)"],
        ["free", "Children travel free.", "She spoke freely. (without restriction)"],
        ["direct", "Fly direct to Cairo.", "I'll speak to him directly. (immediately/without intermediary)"],
      ]),
      compare("Errors", [["He was highly disappointed.", "He was bitterly disappointed.", "Collocation."], ["She hardly works; she is exhausted.", "She works hard; she is exhausted.", "Hardly = almost not."], ["I have been ill lately for a week.", "I have been ill for a week. / I have felt ill lately.", "Lately = recently."]]),
    ],
    [
      mc("We ___ regret any inconvenience caused.", ["deeply", "highly", "widely"], 0, "deeply regret."),
      mc("It is ___ unlikely that prices will fall this year.", ["highly", "deeply", "bitterly"], 0, "highly unlikely."),
      mist("Find the mistake.", ["She", "hardly works", "and is exhausted."], 1, "works hard", "Hardly = almost not."),
      fill("The disease is ___ (wide) known in the region.", ["widely"], "By many people: widely."),
      match("Which adverb?", [["bitterly", "disappointed"], ["fully", "aware"], ["painfully", "slow"], ["strongly", "recommend"]], "Match the collocating word."),
      order("Put the words in the correct order.", ["Lately,", "prices", "have", "risen", "sharply."], "word", "Lately = recently."),
    ]),

  A("adv-grammar-adjective-order", "GRAMMAR", "Adjective Order Before Nouns", "Adjective order", "CORE", 12, ["adv-grammar-adverbs-adjectives"],
    "Order multiple adjectives correctly and understand when commas and and are needed.",
    ["grammar", "adjectives", "adjective-order", "noun-phrases"], "Adjective order (Unit 2)",
    [
      text("When several adjectives come before a noun, English uses a **usual order**: **opinion → size → age → shape → colour → origin → material → purpose → noun**.", "Explanation"),
      table("Order", ["Opinion", "Size", "Age", "Colour", "Origin", "Material", "Noun"], [["a lovely", "small", "old", "brown", "Persian", "wool", "rug"], ["an impressive", "huge", "modern", "grey", "Nordic", "steel", "bridge"]]),
      list("Commas and and", ["Between adjectives of the **same type**, use commas or and: a dark, stormy night · a tall and elegant woman.", "Between **different types** no comma: a beautiful old church.", "After a linking verb, use and before the last adjective: The room was small, dark and cold."]),
      compare("Errors", [["a wooden old table", "an old wooden table", "age before material."], ["a Persian lovely rug", "a lovely Persian rug", "opinion before origin."]]),
    ],
    [
      mc("Which is correct?", ["a lovely small old Persian rug", "a Persian old small lovely rug", "an old lovely Persian small rug"], 0, "Opinion, size, age, origin."),
      order("Put the words in the correct order.", ["She", "bought", "a", "beautiful", "old", "wooden", "chest."], "word", "Opinion, age, material."),
      mist("Find the mistake.", ["He drove", "a red big", "Italian sports car."], 1, "a big red", "Size before colour."),
      fill("The room was small, dark ___ cold.", ["and"], "Add and before the last adjective after a linking verb."),
      match("Which type?", [["lovely", "opinion"], ["antique", "age"], ["Turkish", "origin"], ["silk", "material"]], "Classify the adjectives."),
      mc("Which noun phrase has the correct order?", ["an impressive huge grey steel bridge", "a steel grey huge impressive bridge", "a huge impressive steel grey bridge"], 0, "Opinion, size, colour, material."),
    ]),

  A("adv-vocab-informal-phrasal-verbs", "VOCABULARY", "Informal Phrasal Verbs: jot down, go over, do in, come to", "Phrasal verbs", "CORE", 14, ["adv-vocab-life-stages"],
    "Use informal phrasal verbs accurately and recognise when a formal alternative is required.",
    ["vocabulary", "phrasal-verbs", "informal-register", "listening-support"], "Informal phrasal verbs (Unit 2)",
    [
      text("Phrasal verbs are frequent in **speech and informal writing**. In formal writing, prefer a **single-word equivalent**."),
      table("Phrasal verbs", ["Phrasal verb", "Meaning", "Example", "Formal equivalent"], [
        ["jot down", "write quickly", "Let me jot down your number.", "note"],
        ["go over", "review, check carefully", "We need to go over the figures again.", "review"],
        ["do in", "exhaust / (slang) kill", "That long hike did me in.", "exhaust"],
        ["come to", "regain consciousness; total", "When she came to, she was in hospital. The bill came to £90.", "regain consciousness / total"],
        ["come up with", "think of an idea", "She came up with a brilliant plan.", "devise"],
        ["put off", "postpone / discourage", "The noise put me off the flat.", "postpone / deter"],
        ["turn down", "refuse", "He turned down the offer.", "decline"],
      ]),
      tip("Separable phrasal verbs: with a pronoun, the object goes in the middle (jot it down, not jot down it).", "Grammar"),
    ],
    [
      match("Match the phrasal verb with its formal equivalent.", [["jot down", "note"], ["go over", "review"], ["turn down", "decline"], ["come up with", "devise"], ["put off", "postpone"]], "Choose the formal alternative in essays."),
      mc("I've been on my feet all day. That long hike really ___ me ___.", ["did / in", "went / over", "came / to"], 0, "do in = exhaust."),
      fill("When she ___ to, she was in an ambulance.", ["came"], "come to = regain consciousness."),
      mist("Find the mistake.", ["Let me", "jot down it", "before I forget."], 1, "jot it down", "Pronoun object goes between the verb and the particle."),
      mc("Which is the most suitable for a formal report?", ["The committee declined the proposal.", "The committee turned down the proposal.", "The committee said no."], 0, "Formal equivalent."),
      sa("“He ___ up with a brilliant plan.” (thought of)", ["came"], "come up with.", { hint: "c _ _ _" }),
    ]),

  A("adv-vocab-word-idioms", "VOCABULARY", "Idioms and Expressions with word", "Word idioms", "CORE", 12, ["adv-vocab-informal-phrasal-verbs"],
    "Use idioms and fixed expressions containing the word word and read dictionary entries efficiently.",
    ["vocabulary", "idioms", "fixed-expressions", "dictionary-skills"], "Idioms with word (Unit 2)",
    [
      text("Fixed expressions with **word** are frequent in speech and journalism. Learn them **as whole phrases** and check the dictionary entry for register and pattern."),
      table("Expressions", ["Expression", "Meaning", "Example"], [
        ["by word of mouth", "through personal recommendation", "The restaurant became popular by word of mouth."],
        ["from the word go", "from the very beginning", "I knew from the word go that it would fail."],
        ["eat your words", "admit you were wrong", "He had to eat his words when the project succeeded."],
        ["have the last word", "make the final comment or decision", "She always has to have the last word."],
        ["give someone your word", "promise", "I gave him my word that I would help."],
        ["in other words", "to put it differently", "It's free; in other words, it costs nothing."],
        ["a word of warning", "a short caution", "A word of warning: the path is steep."],
        ["take someone at their word", "believe what they say", "I took her at her word and left."],
      ]),
      list("Dictionary skills", ["Find the **headword** and the **idiom section** (usually at the end of the entry).", "Notice **labels**: informal, formal, literary, old-fashioned.", "Copy the **example sentence** to learn the pattern."]),
    ],
    [
      match("Match the expression with its meaning.", [["by word of mouth", "through recommendation"], ["from the word go", "from the very beginning"], ["eat your words", "admit you were wrong"], ["have the last word", "make the final comment"], ["take at their word", "believe what they say"]], "Learn each as a phrase."),
      mc("The café became popular ___; it never advertised.", ["by word of mouth", "from the word go", "in other words"], 0, "By word of mouth."),
      fill("He had to eat his ___ when the project succeeded.", ["words"], "eat your words."),
      mist("Find the mistake.", ["I knew", "from the word start", "that it would fail."], 1, "from the word go", "The idiom is from the word go."),
      mc("“A word of warning” introduces ___.", ["a short caution", "a promise", "a compliment"], 0, "A brief warning."),
      sa("“I gave him my ___ that I would help.” (promise)", ["word"], "give someone your word.", { hint: "w _ _ d" }),
    ]),

  A("adv-reading-speech-and-class", "READING", "Reading: The Phonetics Examiner", "Literary analysis", "CHALLENGING", 20, ["adv-reading-what-makes-us-human"],
    "Analyse a dramatic scene: characterisation through dialect, subtext and irony.",
    ["reading", "literature", "drama", "dialogue", "subtext", "class"], "Literary extract: language and class (Unit 2)",
    [
      text("In drama and fiction, **dialogue** reveals **character, social position and hidden motives**. Ask: **How** does each character speak? What is **unsaid**? What is the **irony**?", "Reading strategy"),
      passage("Example", "“I'll not have you speak to my guests like that,” she said, in a voice that no guest would have dared to interrupt.", "Words vs manner"),
      list("Guided practice", ["Stated → she protects her guests.", "Shown → her voice is intimidating.", "Effect → authority disguised as politeness."]),
    ],
    [
      mc("How does the girl's speech reveal her background?", ["Her grammar (“didn't say nothing”) marks her social origin.", "She speaks very formally.", "She uses foreign words."], 0, "Double negative and non-standard grammar.", SPEECH_CLASS),
      mc("What does the professor mean by “a map of this city, down to the street”?", ["accent reveals where a person is from", "he is a geography teacher", "the city is large"], 0, "Speech shows origin.", SPEECH_CLASS),
      mc("How does the professor's tone change?", ["from stern to thoughtful", "from kind to angry", "from cheerful to bored"], 0, "“not unkindly… considered her for a long moment.”", SPEECH_CLASS),
      mc("What does she offer to pay with?", ["what she has", "nothing", "a house"], 0, "“I'll pay you what I've got.”", SPEECH_CLASS),
      mc("What is the irony in the professor's final warning?", ["Changing her speech may cost her her identity.", "The lessons are too expensive.", "She will never learn."], 0, "“lost something you cannot buy back”.", SPEECH_CLASS),
      tf("The professor is completely cruel to the girl.", false, "He corrects her ‘not unkindly’ and warns her.", SPEECH_CLASS),
    ]),

  A("adv-reading-modern-novel-extract", "READING", "Reading: The Size-Ten Diaries", "Contemporary fiction", "CORE", 16, ["adv-reading-speech-and-class"],
    "Read a light contemporary novel extract: recognise humour, voice and informal register.",
    ["reading", "fiction", "humour", "voice", "informal-register"], "Contemporary novel excerpt (Unit 2)",
    [
      text("Light contemporary fiction relies on **voice**: a chatty narrator, exaggeration, **understatement** and **short comic exchanges**. Notice the **informal vocabulary** and **how the humour is built**.", "Reading strategy"),
      passage("Example", "I resolved to go running every morning. By Wednesday I had resolved to go running on Thursday, which is progress of a sort.", "Self-mocking humour"),
      list("Guided practice", ["Resolution → running every morning.", "Reality → postponed.", "Effect → gentle self-mockery."]),
    ],
    [
      mc("What is the narrator's plan?", ["to get fit", "to move house", "to change jobs"], 0, "“Getting fit.”", MODERN_NOVEL),
      mc("How does the flatmate react?", ["with disbelief", "with enthusiasm", "with anger"], 0, "“You're doing what?”", MODERN_NOVEL),
      mc("What does ‘jotted down’ suggest about the list?", ["It was written quickly and informally.", "It was very long.", "It was typed."], 0, "Jot down = write quickly.", MODERN_NOVEL),
      mc("What is the joke in ‘It's called ambition.’ — ‘It's called a blister.’?", ["The flatmate answers the grand idea with a practical fact.", "The narrator has a blister.", "The flatmate wants to walk."], 0, "Idealism vs reality.", MODERN_NOVEL),
      mc("What effect does ‘the colour of wet cardboard’ create?", ["a humorous, unappetising image", "a serious tone", "a nostalgic tone"], 0, "Comic simile.", MODERN_NOVEL),
      tf("The narrator is a serious, disciplined athlete.", false, "She is a humorous beginner.", MODERN_NOVEL),
    ]),

  A("adv-writing-narrative-genre-atmosphere", "WRITING", "Narrative Writing: Genre, Atmosphere and Direct Speech", "Narrative writing", "CHALLENGING", 22, ["adv-grammar-adverbs-adjectives", "adv-writing-personal-profile"],
    "Write a short narrative with an effective opening hook, precise atmosphere and correctly punctuated dialogue.",
    ["writing", "narrative", "atmosphere", "direct-speech", "genre", "hook"], "Narrative writing: genre and atmosphere (Unit 2, p. 110)",
    [
      text("Genre shapes **language and structure**: a thriller uses short sentences and tension; romance uses emotion and description; historical fiction uses period detail. All narratives need a **hook**, **atmosphere** and **coherent development**.", "Explanation"),
      table("Openings", ["Type", "Example"], [["Action", "The door slammed and the lights went out."], ["Question", "Have you ever known a silence that felt like a threat?"], ["Setting", "It rained for forty days that autumn, and nobody in Harrow Lane opened a window."], ["Dialogue", "“You shouldn't have come back,” said the old man."]]),
      table("Direct speech rules", ["Rule", "Example"], [["New speaker = new line", "“Where are you going?” she asked.\n“Home,” he said."], ["Punctuation inside the quotation marks", "“I'm leaving,” she said. / “I'm leaving!” she said."], ["Reporting clause: lower case after a comma", "“I don't know,” he whispered, “what to say.”"], ["Vary the reporting verb", "murmured, snapped, admitted, muttered"]]),
      annotated("Model opening (thriller)", [["Hook", "By midnight, the phone had rung eleven times, and each time the caller had said nothing."], ["Atmosphere", "Outside, a bitterly cold wind rattled the shutters, and the streetlamp flickered like a dying pulse."], ["Speech", "“Don't answer it,” Mira whispered, her voice barely audible over the wind."]]),
      tip("Atmosphere comes from precise adjectives and adverbs (bitterly cold, flickering, barely audible), not from more adjectives.", "Precision"),
    ],
    [
      mc("Which is the strongest opening hook?", ["By midnight, the phone had rung eleven times, and each time the caller had said nothing.", "It was a night.", "I am going to tell you a story."], 0, "Creates immediate curiosity."),
      mist("Find the mistake (punctuation).", ["“I'm leaving”", "she said.", "“Don't follow me.”"], 0, "“I'm leaving,”", "Use a comma inside the closing quotation mark before the reporting clause."),
      fill("“Home,” he ___ (mutter), without looking up. (choose a past verb)", ["muttered"], "Vary reporting verbs."),
      match("Genre and feature.", [["thriller", "short tense sentences"], ["romance", "emotion and description"], ["historical fiction", "period detail"]], "Match genre with language."),
      order("Put the narrative parts in a logical order.", ["Hook", "Setting and atmosphere", "Problem", "Development", "Ending"], "paragraph", "A basic narrative structure."),
      mc("Which sentence sets the mood more precisely?", ["A bitterly cold wind rattled the shutters.", "It was bad weather.", "The weather was really horrible."], 0, "Precise adverb + verb."),
    ]),

  // ============================================================ UNIT 3
  A("adv-grammar-verb-patterns", "GRAMMAR", "Advanced Verb Patterns: Infinitive, -ing and Changes of Meaning", "Verb patterns", "CHALLENGING", 20, ["adv-grammar-adjective-order"],
    "Use verbs followed by infinitives, -ing forms, object + infinitive, and verbs whose meaning changes.",
    ["grammar", "verb-patterns", "infinitive", "gerund", "meaning-change"], "Verb patterns (Unit 3)",
    [
      text("Verb patterns must be learned **with the verb**. At Advanced level, the challenge is the **large set of verbs with both patterns** and the **shifts in meaning** between them.", "Explanation"),
      table("Patterns", ["Pattern", "Verbs", "Example"], [
        ["+ to-infinitive", "agree, offer, decide, refuse, manage, afford, fail, promise, tend", "She offered to help."],
        ["+ -ing", "admit, deny, suggest, avoid, risk, consider, involve, resent, imagine", "He denied taking the money."],
        ["+ object + to-infinitive", "persuade, allow, force, enable, encourage, remind, warn", "They persuaded him to stay."],
        ["+ object + -ing / bare infinitive", "hear, see, watch, notice", "I saw her leave. / I saw her leaving."],
        ["+ either (little change)", "begin, start, continue, prefer, like", "She began to cry / crying."],
      ]),
      table("Meaning changes", ["Verb", "+ -ing", "+ to-infinitive"], [
        ["stop", "stop doing (end an activity)", "stop to do (pause in order to do)"],
        ["try", "try doing (experiment)", "try to do (make an effort)"],
        ["remember / forget", "remember doing (recall an earlier action)", "remember to do (not forget to act)"],
        ["regret", "regret doing (feel sorry about a past action)", "regret to do (formal: sorry to announce)"],
        ["go on", "go on doing (continue)", "go on to do (move on to a new action)"],
        ["mean", "mean doing (involve)", "mean to do (intend)"],
      ]),
      compare("Errors", [["She suggested to go.", "She suggested going. / She suggested that we go.", "suggest + -ing."], ["I look forward to see you.", "I look forward to seeing you.", "to is a preposition here."], ["He denied to have taken it.", "He denied having taken it.", "deny + -ing."]]),
    ],
    [
      mc("He denied ___ the money.", ["taking", "to take", "take"], 0, "deny + -ing."),
      mc("They persuaded him ___ the offer.", ["to accept", "accepting", "accept"], 0, "persuade + object + to-infinitive."),
      mc("She stopped ___ a newspaper on her way home. (in order to)", ["to buy", "buying", "buy"], 0, "stop to do = pause in order to do something."),
      mist("Find the mistake.", ["I look forward", "to see", "you next week."], 1, "to seeing", "To is a preposition: -ing."),
      fill("We regret ___ (inform) you that the flight has been cancelled. (formal)", ["to inform"], "regret to + verb = formal announcement."),
      match("Meaning?", [["try switching it off", "experiment"], ["try to switch it off", "make an effort"], ["remember locking the door", "recall"], ["remember to lock the door", "do not forget"]], "Match the meaning."),
    ]),

  A("adv-vocab-describing-trends", "VOCABULARY", "Describing Trends: Verbs, Nouns, Degree and Speed", "Trends and statistics", "CHALLENGING", 16, ["adv-vocab-word-idioms"],
    "Describe trends in data using precise verbs, nouns and adverbs of degree and speed.",
    ["vocabulary", "trends", "data-description", "adverbs", "academic-writing"], "Describing trends (Unit 3)",
    [
      text("Trend language combines a **verb or noun of movement** with an **adverb or adjective of degree and speed**. It is essential for **graph description**."),
      table("Movement", ["Direction", "Verbs", "Nouns"], [
        ["upward", "rise, climb, soar, rocket, surge, increase, grow", "a rise, a surge, an upturn, a steady climb"],
        ["downward", "fall, decline, drop, plummet, plunge, collapse, decrease", "a fall, a drop, a slump, a sharp decline"],
        ["stable", "remain stable, level off, plateau, stay constant", "a plateau, a levelling-off"],
        ["irregular", "fluctuate, oscillate", "fluctuations, an erratic pattern"],
        ["peak / low", "peak at, reach a peak of, bottom out at", "a peak, a low point, a trough"],
      ]),
      table("Degree and speed", ["Meaning", "Adverbs", "Adjectives"], [
        ["large / fast", "dramatically, sharply, steeply, rapidly", "dramatic, sharp, steep, rapid"],
        ["moderate", "considerably, significantly, markedly", "considerable, significant, marked"],
        ["small / slow", "slightly, marginally, gradually, steadily", "slight, marginal, gradual, steady"],
      ]),
      list("Patterns", ["Verb + adverb: Sales rose sharply.", "There was + adjective + noun: There was a sharp rise in sales.", "Prepositions: rise from X to Y · rise by 10% · a rise of 10% · peak at 70,000 · fall to a low of 9,000."]),
      compare("Errors", [["Prices rose by 40,000.", "Prices rose to 40,000. / Prices rose by 10,000 to 40,000.", "by = amount of change; to = new level."], ["a plummet increase", "a dramatic increase", "Plummet is a verb of decline."]]),
    ],
    [
      match("Direction.", [["plummet", "fall sharply"], ["soar", "rise sharply"], ["fluctuate", "vary irregularly"], ["level off", "stop changing"], ["peak at", "reach the highest point"]], "Learn the meaning of movement verbs."),
      mc("Visitor numbers ___ from 71,000 in 2019 to only 9,000 in 2020.", ["plummeted", "soared", "levelled off"], 0, "A dramatic fall."),
      mc("There was a ___ rise in sales during the summer months.", ["steady", "steadily", "steadied"], 0, "Adjective before noun."),
      mist("Find the mistake.", ["Prices", "rose by 40,000", "in 2024 (from 30,000)."], 1, "rose to 40,000", "The new level is expressed with to."),
      fill("Sales rose ___ (sharp) in the first quarter.", ["sharply"], "Adverb of degree."),
      order("Put the words in the correct order.", ["There", "was", "a", "marginal", "decline", "in", "unemployment."], "word", "There was + adjective + noun."),
    ]),

  A("adv-vocab-phrasal-up-down", "VOCABULARY", "Phrasal Verbs with up and down", "Phrasal verbs", "CORE", 12, ["adv-vocab-describing-trends"],
    "Use phrasal verbs with up and down in business, environmental and everyday contexts.",
    ["vocabulary", "phrasal-verbs", "up", "down", "business", "listening-support"], "Phrasal verbs with up and down (Unit 3)",
    [
      text("**Up** often suggests **increase, completion or approach**; **down** often suggests **decrease, reduction or stopping**. But many phrasal verbs are idiomatic."),
      table("Up", ["Phrasal verb", "Meaning", "Example"], [
        ["speed up", "go or make faster", "We need to speed up the process."],
        ["wind up", "end up (informal); finish", "She wound up in a different city."],
        ["step up", "increase", "The company stepped up production."],
        ["bring up", "raise (a topic / a child)", "He brought up the issue of pay."],
        ["back up", "support / make a copy", "Please back up your files."],
        ["clean up", "make clean; remove", "The council will clean up the beach."],
      ]),
      table("Down", ["Phrasal verb", "Meaning", "Example"], [
        ["cut down (on)", "reduce", "You should cut down on sugar."],
        ["slow down", "reduce speed", "Growth slowed down last year."],
        ["turn down", "reduce / refuse", "Please turn down the volume. He turned down the job."],
        ["break down", "stop working / analyse", "The car broke down. Let me break down the costs."],
        ["scale down", "reduce in size", "They scaled down their plans."],
        ["water down", "make weaker", "The proposal was watered down."],
      ]),
    ],
    [
      match("Match the phrasal verb with its meaning.", [["cut down on", "reduce"], ["speed up", "go faster"], ["wind up", "end up"], ["scale down", "reduce in size"], ["step up", "increase"]], "Learn the verbs."),
      mc("You should ___ on sugar if you want to lose weight.", ["cut down", "speed up", "wind up"], 0, "cut down on = reduce."),
      fill("The government has ___ up its efforts to protect wildlife.", ["stepped"], "step up = increase."),
      mist("Find the mistake.", ["We need to", "slow up", "the process."], 1, "speed up", "Speed up means faster; slow down means slower."),
      mc("“The proposal was watered down” means it was ___.", ["made weaker", "improved", "rejected"], 0, "Water down = make weaker."),
      sa("“I'll ___ up my files before the update.” (make a copy)", ["back"], "back up.", { hint: "b _ _ k" }),
    ]),

  A("adv-reading-generous-millionaire", "READING", "Reading: The Generous Millionaire Nobody Knew", "Biography", "CHALLENGING", 20, ["adv-reading-modern-novel-extract"],
    "Analyse a biographical text: chronology, character, principles and the writer's stance.",
    ["reading", "biography", "philanthropy", "chronology", "character"], "Biography: the billionaire who wasn't (Unit 3)",
    [
      text("A **biography** has a **chronology**, a **character portrait** and often a **theme**. Track **key dates**, the person's **principles** and any **contrast** between appearance and reality.", "Reading strategy"),
      passage("Example", "Neighbours assumed he was a retired clerk. In fact, he had built a fortune and given nearly all of it away.", "Appearance vs reality"),
      list("Guided practice", ["Appearance → retired clerk.", "Reality → fortune given away.", "Theme → modesty and generosity."]),
    ],
    [
      mc("What did Marta's neighbours think she was?", ["a retired clerk", "a teacher", "an artist"], 0, "“a retired clerk”.", FEENEY),
      mc("What conditions did she place on her foundation?", ["Donations must not be traced to her and money should be spent, not saved.", "Money must be invested.", "Only universities could benefit."], 0, "Paragraph 2.", FEENEY),
      mc("What was her principle about giving?", ["Give while alive, and see the results.", "Give after death.", "Give only to family."], 0, "“I'd rather see the good it does while I'm alive.”", FEENEY),
      mc("What does her final quotation show about her?", ["modesty", "pride", "anger"], 0, "“Nobody needs to be thanked…”", FEENEY),
      mc("How did she treat journalists?", ["She declined to discuss it.", "She gave many interviews.", "She wrote a book."], 0, "“declined to discuss it”.", FEENEY),
      tf("The donations were always publicly announced.", false, "Recipients often did not know who their benefactor was.", FEENEY),
    ]),

  A("adv-reading-limits-to-growth", "READING", "Reading: Limits to Growth", "Argument and counter-argument", "CHALLENGING", 18, ["adv-reading-generous-millionaire"],
    "Follow a balanced argument, separate the positions and identify the central empirical question.",
    ["reading", "economics", "argument", "counter-argument", "environment"], "Limits to growth (Unit 3)",
    [
      text("A balanced discussion text presents **two positions** and a **central question**. Map: **Position A → its evidence → Position B → its evidence → the unresolved question**.", "Reading strategy"),
      passage("Example", "Supporters say the tax will reduce pollution; opponents argue it will only raise prices. Everything depends on whether people change their habits.", "Two positions + key question"),
      list("Guided practice", ["A → the tax reduces pollution.", "B → the tax raises prices.", "Question → will habits change?"]),
    ],
    [
      mc("How was growth viewed for much of the twentieth century?", ["as an unqualified good", "as harmful", "as unimportant"], 0, "“unqualified good”.", LIMITS),
      mc("What do critics argue about the costs of growth?", ["They have been underestimated.", "They do not exist.", "They are too small to matter."], 0, "“consistently underestimated”.", LIMITS),
      mc("What do critics say might happen if the costs were counted?", ["some profitable activities would prove loss-making", "growth would increase", "prices would fall"], 0, "Paragraph 2.", LIMITS),
      mc("How do defenders of growth respond?", ["Innovation has proved doom-mongers wrong.", "They agree completely.", "They ignore the argument."], 0, "Paragraph 3.", LIMITS),
      mc("What is the central empirical question?", ["whether activity can be separated from resource use quickly enough", "whether growth is fair", "whether people want growth"], 0, "The final sentence.", LIMITS),
      tf("The writer takes a firm side in the debate.", false, "The text presents both positions.", LIMITS),
    ]),

  A("adv-writing-report-graphs", "WRITING", "Report Writing: Using Graphs and Data", "Report writing", "CHALLENGING", 22, ["adv-vocab-describing-trends", "upper-writing-survey-report"],
    "Structure an analytical report based on a graph using headings, accurate trend language and recommendations.",
    ["writing", "report", "graphs", "data", "trends", "analysis"], "Report writing: using graphs (Unit 3, p. 112)",
    [
      text("A **graph-based report** describes the **main features**, **compares** figures, **explains** possible causes and gives **recommendations**. It does not simply list numbers.", "Explanation"),
      table("Structure", ["Section", "Content", "Language"], [
        ["Aim", "what the data shows; source", "This report analyses … Figure 1 shows …"],
        ["Method / Data", "the data; the period", "The data covers … The figures are taken from …"],
        ["Findings", "overall trend + key details + comparisons", "Visitors rose steadily … peaked at … then plummeted …"],
        ["Recommendations", "what to do", "It is recommended that … the museum should …"],
      ]),
      passage("Data description", GRAPH, "Model paragraph"),
      list("Techniques", ["Start with the **overall trend**, then the **highs, lows and turning points**.", "Use **approximation**: about, roughly, just under, approximately.", "Use **comparison**: twice as many as, 10 per cent below, just over a third.", "Explain, not only describe: as a result of temporary closures."]),
    ],
    [
      order("Put the report sections in order.", ["Aim", "Data", "Findings", "Recommendations"], "paragraph", "Standard report order."),
      mc("Which sentence describes the OVERALL trend?", ["Visitor numbers rose steadily, fell sharply in 2020 and then recovered gradually.", "In 2015 there were 42,000 visitors.", "Numbers are important."], 0, "Start with the overall pattern."),
      fill("Visitors plummeted ___ (to / by) 9,000 in 2020. (new level)", ["to"], "to = new level."),
      mist("Find the mistake.", ["Numbers", "were rose", "steadily until 2019."], 1, "rose", "Active verb: rose."),
      match("Approximation words.", [["approximately", "about"], ["just under", "slightly less than"], ["just over", "slightly more than"]], "Match the meaning."),
      mc("Which sentence explains, rather than only describes?", ["Numbers plummeted as a result of temporary closures.", "Numbers fell.", "There was a fall."], 0, "It gives a cause."),
    ]),

  A("adv-writing-in-class-1-preparation", "WRITING", "In-Class Writing 1: A 200-Word Profile, Narrative or Data Report", "Assessment preparation", "CHALLENGING", 24, ["adv-writing-report-graphs", "adv-writing-narrative-genre-atmosphere"],
    "Choose a text type, plan quickly and write a 200-word text under exam conditions using the routines from Weeks 1–3.",
    ["writing", "assessment-practice", "200-words", "planning", "editing"], "In-Class Writing 1 preparation (Units 1-3)",
    [
      text("In Assessment 1 you will write **200 words** in one of the text types you have studied: **personal profile**, **narrative** or **analytical report**. Read the task, choose the text type, plan for a few minutes, write and check.", "Explanation"),
      table("Choosing the text type", ["Task wording", "Text", "Key features"], [["Introduce yourself for a course / application", "Personal profile", "evidence, achievements, goals, formal register"], ["Write a story / describe an event", "Narrative", "hook, atmosphere, direct speech, past tenses"], ["Describe or analyse a chart / trend", "Report", "headings, overall trend, key figures, recommendations"]]),
      table("Timing (40 minutes)", ["Stage", "Minutes", "Focus"], [["Plan", "5", "text type, 3 key ideas, structure"], ["Write", "27", "four paragraphs, ~200 words"], ["Check", "8", "tenses, agreement, punctuation, spelling, word count"]]),
      annotated("Checklist", [["Task", "Did I answer all parts of the question?"], ["Structure", "Clear opening, logical paragraphs, closing?"], ["Language", "Range of tenses, adverbs, participle clauses, linkers?"], ["Accuracy", "Edit with codes: T, Gr, WW, WO, Sp, P."]]),
    ],
    [
      mc("‘Describe the trend shown in the graph’ requires ___.", ["an analytical report", "a narrative", "a personal profile"], 0, "Data description."),
      mc("‘Write a story that begins with the sentence…’ requires ___.", ["a narrative", "a report", "a profile"], 0, "Narrative."),
      mist("Find the mistake (register).", ["The number of visitors", "went up like crazy", "in 2019."], 1, "rose sharply", "Use precise trend language."),
      order("Put the exam stages in order.", ["Plan", "Write", "Check"], "sentence", "Plan, write, check."),
      fill("Having ___ (finish) my degree, I joined a research team.", ["finished"], "Perfect participle clause."),
      mc("How many words should you write?", ["about 200", "about 50", "about 600"], 0, "About 200."),
    ]),
];

void [compare, flow, list, sa, structure, tf, tip, vocab, text, passage, annotated, table];
