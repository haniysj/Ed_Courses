import { annotated, compare, fill, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, type SeedLesson } from "./dsl";
import { U } from "./upper-common";

// Upper-Intermediate, Units 4-6. Topics follow the academy's syllabus; every text is ORIGINAL (companies and people are fictional).

const POST_TRUTH = "TRUE, FALSE OR JUST FASTER?\n\nA hundred years ago, a false story could take weeks to travel from one town to another. Today, one careless post can reach millions of people before lunchtime. Some of these stories are harmless jokes, but others are fabrications designed to mislead: invented quotations, edited photographs and “news” from websites that do not exist.\n\nWhy do people believe them? Researchers suggest that we are more likely to accept information that agrees with what we already think, a tendency known as confirmation bias. Social media algorithms make this worse: they show us more of whatever we have clicked before, so we may end up seeing only one side of a story.\n\nExperts recommend a few simple habits. Check who published a story and whether other reliable sources report it. Look at the date. Be suspicious of headlines that make you very angry or very excited. Above all, do not share anything you have not checked. It is not censorship to ask for evidence; it is the minimum that a responsible reader can do.";
const BOOMERANG = "THE BOOMERANG GENERATION\n\nFor many young adults today, leaving home is not a single event but a series of attempts. Rents have risen faster than salaries, and permanent jobs are harder to find, so a growing number of people in their twenties are returning to their parents' homes after university or after losing a job. Sociologists call them the “boomerang generation”.\n\nSami, 26, moved back after his contract ended. “I put up with a lot of jokes,” he says, “but I couldn't afford to pay rent, and I take nothing for granted: I cook, I clean and I contribute to the bills.” His mother, Huda, admits she was surprised at first. “I thought the house would be quiet by now,” she laughs. “But we get on better than we did when he was a teenager.”\n\nNot every family finds it easy. Some parents worry that their children will never become independent, and some young adults feel that they are being judged. Family therapists suggest agreeing rules early: who pays for what, how long the arrangement will last, and how much privacy each person needs.";
const BUSINESS = "TWO SUCCESS STORIES FROM THE NORTH\n\n(Fictional companies)\n\nBrickbox began in 1958 as a small workshop that made wooden toys. When plastic became cheaper, the founder's son redesigned the toys as interlocking bricks that could be combined in thousands of ways. Sales grew slowly at first, but by the 1980s the company was selling to more than fifty countries. A period of falling profits, caused by expensive new products, nearly ended the firm; it recovered only after it went back to its original idea of a simple brick.\n\nFlatnest, a furniture company, was founded by a young man who noticed that customers paid more for transporting furniture than for the furniture itself. His solution was to sell flat packs that customers assembled at home, which reduced costs. There are few big companies that have changed an industry so completely. Today, Flatnest has several hundred stores, and most of its products are designed to be shipped in a single box.\n\nBoth companies grew because they focused on one clear idea, listened to customers and were prepared to change when their methods stopped working.";
const ENTREPRENEUR = "PROFILE: THE ENGINEER WHO WOULDN'T STOP\n\n(A fictional profile)\n\nNora Halvorsen was told at twenty-two that her idea for a solar-powered water pump was impractical. She had a small workshop, no investors and a great deal of debt. Fifteen years later, her company supplies pumps to villages in more than thirty countries.\n\nColleagues describe her as relentless. She works about sixty hours a week, reads every customer complaint herself and rarely takes a holiday. “I've made almost every possible mistake,” she says, “but I've hardly ever made the same one twice.” She is also a generous employer: she introduced profit-sharing five years ago, and most of her staff say that they would recommend the company to friends.\n\nCritics argue that her rapid expansion is risky. Nora does not disagree. “If we grow too slowly, we'll be overtaken,” she says. “If we grow too fast, we'll make mistakes. My job is to decide which risk is worth taking.”";

export const UPPER_U4_U6: SeedLesson[] = [
  // ============================================================ UNIT 4
  U("upper-grammar-questions-negatives", "GRAMMAR", "Questions and Negatives: Indirect, Negative and Prepositional Questions", "Questions", "CORE", 16, ["upper-grammar-narrative-tenses"],
    "Form subject, object, negative, indirect and prepositional questions accurately and understand their functions.",
    ["grammar", "questions", "negatives", "indirect-questions", "prepositions"], "Questions and negatives (Unit 4)",
    [
      text("Question forms at this level include **subject and object questions**, **negative questions** (surprise, invitation, confirmation), **indirect questions** (politeness) and questions that **end with a preposition**.", "Explanation"),
      table("Question types", ["Type", "Structure", "Example"], [
        ["Subject question", "wh-word + verb (no auxiliary)", "Who told you? (Someone told me.)"],
        ["Object question", "wh-word + auxiliary + subject + verb", "Who did you tell?"],
        ["Negative question", "auxiliary + n't + subject …?", "Haven't you finished yet? (surprise) · Wouldn't you like some tea? (offer)"],
        ["Indirect question", "polite opener + statement order", "Could you tell me what time the shop closes?"],
        ["Preposition at the end", "wh-word + auxiliary + subject + verb + preposition", "What are you looking at? · Who did she give it to?"],
        ["Question tag", "statement, + auxiliary + pronoun?", "It's cold, isn't it? · You haven't seen it, have you?"],
      ]),
      compare("Errors", [["Who did tell you?", "Who told you?", "Subject question: no auxiliary."], ["Can you tell me where is the bank?", "Can you tell me where the bank is?", "Indirect: statement order."], ["Do you know if is he coming?", "Do you know if he is coming?", "Statement order after if."]]),
    ],
    [
      mc("___ you about the change? (Someone told you.)", ["Who told", "Who did tell", "Who does tell"], 0, "Subject question: no auxiliary."),
      mc("“___ you like some tea?” (a polite offer)", ["Wouldn't", "Don't", "Aren't"], 0, "A negative question used for an offer."),
      mist("Find the mistake.", ["Could you tell me", "where is", "the nearest bank?"], 1, "where the nearest bank is", "Indirect question: statement order."),
      order("Put the words in the correct order.", ["Who", "did", "she", "give", "the", "keys", "to?"], "word", "Preposition stays at the end."),
      fill("It's freezing today, ___ it? (tag)", ["isn't"], "Positive statement → negative tag."),
      match("Function?", [["Haven't you finished yet?", "surprise"], ["Wouldn't you like some tea?", "offer"], ["Could you tell me where the station is?", "polite request"]], "Match the function."),
    ]),

  U("upper-vocab-antonyms-prefixes", "VOCABULARY", "Saying the Opposite: Antonyms and Negative Prefixes", "Antonyms", "CORE", 14, ["upper-vocab-books-films"],
    "Form and use opposites with the prefixes un-, dis-, in-, im-, il-, ir- and choose the right antonym for context.",
    ["vocabulary", "antonyms", "negative-prefixes", "word-building"], "Antonyms and negative prefixes (Unit 4)",
    [
      text("Opposites can be **different words** (fake / genuine) or formed with a **negative prefix**. Prefixes follow tendencies, but there are exceptions, so learn each pair."),
      table("Prefix patterns", ["Prefix", "Used before", "Examples"], [
        ["un-", "many adjectives and participles", "unhappy, unusual, unable, unaware"],
        ["dis-", "verbs and some adjectives", "dishonest, disagree, disappear, disloyal"],
        ["in-", "Latin-based adjectives", "inaccurate, incorrect, incapable, inevitable"],
        ["im-", "before p, m, b", "impossible, immature, impolite, imbalance"],
        ["il-", "before l", "illegal, illogical, illiterate"],
        ["ir-", "before r", "irregular, irresponsible, irrelevant"],
      ]),
      table("Different-word antonyms", ["Word", "Opposite"], [["fake", "genuine"], ["reliable", "unreliable / dubious"], ["accurate", "inaccurate"], ["temporary", "permanent"], ["vague", "precise"]]),
      tip("A negative prefix changes the meaning but not the stress or the word class. Note that some pairs are not opposites: ‘invaluable’ means very valuable!", "Careful"),
    ],
    [
      match("Match the word with its opposite.", [["legal", "illegal"], ["responsible", "irresponsible"], ["possible", "impossible"], ["honest", "dishonest"], ["accurate", "inaccurate"]], "Learn each pair; prefixes depend on the first letter."),
      fill("It is ___ (legal) to park here; you will be fined.", ["illegal"], "il- before l."),
      mist("Find the mistake.", ["It was", "an irpossible", "task."], 1, "impossible", "im- before p."),
      mc("Which word is the opposite of “genuine”?", ["fake", "precise", "temporary"], 0, "Genuine ≠ fake."),
      mc("Which is NOT the opposite of the base word?", ["invaluable (valuable)", "impolite (polite)", "unfair (fair)"], 0, "Invaluable means extremely valuable."),
      sa("The opposite of “relevant” is ___", ["irrelevant"], "ir- before r.", { hint: "i _ _ _ _ _ _ _ _ t" }),
    ]),

  U("upper-vocab-truth-deception", "VOCABULARY", "The Language of Truth and Deception", "Media vocabulary", "CHALLENGING", 14, ["upper-vocab-antonyms-prefixes"],
    "Use precise vocabulary to evaluate information, sources and claims.",
    ["vocabulary", "media", "credibility", "academic-register", "critical-thinking"], "Truth and deception (Unit 4)",
    [
      text("Critical readers use **precise evaluative language**. These words are common in academic essays about **media and information**."),
      table("Truth and deception", ["Word", "Meaning", "Example"], [
        ["credible", "believable; trustworthy", "A credible source names its evidence."],
        ["reliable", "can be trusted to be correct", "Encyclopedias are usually reliable."],
        ["fabrication", "an invented story or lie", "The report was a complete fabrication."],
        ["bias", "an unfair preference for one side", "The article shows political bias."],
        ["prejudice", "an unreasonable opinion formed without evidence", "Prejudice can affect decisions."],
        ["bogus", "false, not genuine", "He sold bogus tickets."],
        ["conspiracy theory", "a belief that a secret group plans events", "Conspiracy theories spread quickly online."],
        ["fantasist", "a person who imagines or tells unrealistic stories", "He was a fantasist who claimed to have met kings."],
      ]),
      list("Useful collocations", ["a credible source · a reliable witness", "spread misinformation", "fact-check a claim", "a biased report · a balanced view"]),
    ],
    [
      match("Match the word with its meaning.", [["credible", "believable"], ["fabrication", "an invented story"], ["bias", "unfair preference for one side"], ["bogus", "false, not genuine"], ["reliable", "can be trusted"]], "These words appear often in academic texts about media."),
      mc("A ___ source names its evidence and can be checked.", ["credible", "bogus", "biased"], 0, "Credible = trustworthy."),
      fill("The newspaper published a complete ___ : nothing in the story was true. (invented story)", ["fabrication"], "fabrication = invention."),
      mist("Find the mistake.", ["The article", "shows a strong bogus", "against the government."], 1, "bias", "Bias = unfair preference; bogus = false."),
      mc("Which phrase is a good habit for readers?", ["fact-check a claim", "spread misinformation", "ignore the source"], 0, "Check before sharing."),
      sa("A belief that a secret group is controlling events is a conspiracy ___", ["theory"], "conspiracy theory.", { hint: "t _ _ _ _ y" }),
    ]),

  U("upper-reading-post-truth", "READING", "Reading: True, False or Just Faster?", "Evaluating information", "CHALLENGING", 18, ["upper-reading-suspense-story"],
    "Identify the writer's argument, recognise causes of misinformation and evaluate advice given in an article.",
    ["reading", "media", "argument", "critical-reading", "cause-effect"], "Fake news (Unit 4)",
    [
      text("An opinion article usually has a **problem**, its **causes**, and **advice**. Underline each part, then evaluate: is the evidence **specific** (studies, examples) or only **general**?", "Reading strategy"),
      passage("Example", "Researchers suggest that people who read only one newspaper tend to hold stronger opinions. To avoid this, experts recommend reading sources with different views.", "Cause + advice"),
      list("Guided practice", ["Problem → strong, one-sided opinions.", "Cause → reading only one newspaper.", "Advice → read different views."]),
    ],
    [
      mc("How does the writer describe how fast information travels today?", ["A careless post can reach millions before lunch.", "It takes weeks.", "It rarely travels."], 0, "“One careless post can reach millions of people before lunchtime.”", POST_TRUTH),
      mc("What is confirmation bias?", ["accepting information that agrees with our existing views", "checking every fact", "distrusting all news"], 0, "“more likely to accept information that agrees with what we already think”.", POST_TRUTH),
      mc("How do algorithms make the problem worse?", ["They show more of what we have already clicked.", "They delete stories.", "They translate stories."], 0, "We may see only one side.", POST_TRUTH),
      mc("Which advice is NOT given?", ["Share quickly if the story is exciting.", "Check who published it.", "Look at the date."], 0, "The writer says not to share unchecked stories.", POST_TRUTH),
      tf("The writer argues that checking evidence is a form of censorship.", false, "“It is not censorship to ask for evidence”.", POST_TRUTH),
      mc("What is the writer's overall purpose?", ["to persuade readers to check information before sharing it", "to entertain", "to sell a product"], 0, "The article ends with a call to action.", POST_TRUTH),
    ]),

  U("upper-writing-linking-conjunctions", "WRITING", "Linking Ideas: Conjunctions of Contrast, Reason, Result, Time and Condition", "Conjunctions", "CORE", 18, ["upper-writing-contrast-result"],
    "Use a range of subordinating and coordinating conjunctions and linkers to connect ideas in formal writing.",
    ["writing", "conjunctions", "linkers", "cohesion", "formal-writing"], "Linking ideas (Unit 4)",
    [
      text("Advanced writing links ideas with **variety and accuracy**. Some linkers join clauses within a sentence (**conjunctions**); others connect sentences (**adverbials**), and they follow **different punctuation rules**.", "Explanation"),
      table("Linkers", ["Function", "Within a sentence", "Between sentences"], [
        ["Contrast", "although, even though, while, whereas, despite / in spite of + noun/-ing", "However, …  · Nevertheless, …  · On the other hand, …"],
        ["Reason", "because, as, since, owing to (noun)", "—"],
        ["Result", "so, such … that, so … that", "Therefore, …  · Consequently, …  · As a result, …"],
        ["Time", "when, as soon as, before, after, while, until", "Meanwhile, …  · Afterwards, …  · Eventually, …"],
        ["Condition", "if, unless, as long as, provided that, in case", "Otherwise, …"],
      ]),
      compare("Errors", [["Despite it was raining, we went out.", "Despite the rain, we went out. / Although it was raining, we went out.", "Despite + noun/-ing; although + clause."], ["It was cold, however we went out.", "It was cold; however, we went out.", "Punctuate the adverbial."], ["Because of he was late, we started.", "Because he was late, we started.", "Because + clause; because of + noun."]]),
      annotated("Model sentence", [["Contrast", "Although the plan is expensive, it will save money in the long term."], ["Result", "The plan is so expensive that few schools can afford it; consequently, only a few will use it."]]),
    ],
    [
      mc("___ the heavy rain, the match continued.", ["Despite", "Although", "However"], 0, "Despite + noun."),
      mc("___ he was ill, he went to work.", ["Although", "Despite", "Because of"], 0, "Although + clause."),
      mist("Find the mistake.", ["It was cold,", "however", "we went for a walk."], 1, "; however,", "Punctuate: ; however, / . However,"),
      fill("The course was ___ difficult that many students withdrew. (so / such)", ["so"], "so + adjective + that."),
      match("Function?", [["unless", "condition"], ["consequently", "result"], ["whereas", "contrast"], ["as soon as", "time"]], "Classify the linkers."),
      order("Put the words in the correct order.", ["As", "soon", "as", "she", "arrived,", "the", "meeting", "began."], "word", "Time clause first."),
    ]),

  // ============================================================ UNIT 5
  U("upper-grammar-future-forms-complete", "GRAMMAR", "The Future System: will, going to, Continuous and Perfect Forms", "Future forms", "CORE", 18, ["upper-grammar-questions-negatives"],
    "Use will, going to, Present Continuous, Present Simple, Future Continuous and Future Perfect for different future meanings.",
    ["grammar", "future", "future-continuous", "future-perfect", "forms"], "Future forms (Unit 5)",
    [
      text("Each future form has its own **meaning and level of certainty**. The **Future Continuous** describes an action **in progress** at a future time; the **Future Perfect** describes one **completed before** a future time.", "Explanation"),
      table("Future forms", ["Form", "Meaning", "Example"], [
        ["will + base", "instant decision, prediction (opinion), promise", "I'll call you later."],
        ["be going to", "intention, prediction with evidence", "I'm going to apply for that job. Look out: it's going to fall!"],
        ["Present Continuous", "personal arrangement", "I'm meeting my tutor at three."],
        ["Present Simple", "timetable, or after time conjunctions", "The train leaves at six. I'll call you when I arrive."],
        ["Future Continuous will be + -ing", "in progress at a future moment; polite questions", "This time tomorrow I'll be flying to Cairo."],
        ["Future Perfect will have + participle", "completed before a future time", "By June I'll have finished the course."],
      ]),
      structure("Structure", "By + future time → Future Perfect · This time next week → Future Continuous", "After when, as soon as, before, until, if, use the Present Simple for the future: I'll ring you as soon as I get there."),
      compare("Errors", [["When I will arrive, I'll call you.", "When I arrive, I'll call you.", "No will after a time conjunction."], ["By next year I'll work here for ten years.", "By next year I'll have worked here for ten years.", "Future Perfect."]]),
    ],
    [
      mc("This time tomorrow, I ___ on a beach in Salalah.", ["will be lying", "will lie", "will have lain"], 0, "In progress at a future moment: Future Continuous."),
      mc("By the end of June, I ___ the course.", ["will have finished", "will finish", "am finishing"], 0, "Completed before a future time."),
      mist("Find the mistake.", ["I'll call you", "when I will arrive", "at the airport."], 1, "when I arrive", "No will after when."),
      fill("She ___ (meet) the director at three tomorrow. (arrangement)", [["is meeting", "'s meeting"]], "Arrangement: Present Continuous."),
      match("Which meaning?", [["I'll help you with that.", "instant decision"], ["It's going to rain.", "evidence"], ["The train leaves at 6.", "timetable"], ["I'll have finished by Friday.", "completed before"]], "Match the future meaning."),
      order("Put the words in the correct order.", ["By", "this", "time", "next", "year", "I", "will", "have", "graduated."], "word", "By + future time + Future Perfect."),
    ]),

  U("upper-vocab-take-put", "VOCABULARY", "take and put: Collocations and Phrasal Verbs", "Take and put", "CORE", 14, ["upper-vocab-truth-deception"],
    "Use common collocations and phrasal verbs with take and put in formal and informal contexts.",
    ["vocabulary", "take", "put", "phrasal-verbs", "collocations", "listening-support"], "Take and put (Unit 5)",
    [
      text("**Take** and **put** produce many fixed expressions. Learn them **in context**: some are idiomatic, and their meaning is not obvious from the parts."),
      table("Take", ["Expression", "Meaning", "Example"], [
        ["take for granted", "not appreciate because it is always there", "We take clean water for granted."],
        ["take issue with", "disagree with", "I take issue with the writer's conclusion."],
        ["take a risk", "do something dangerous or uncertain", "Entrepreneurs must take risks."],
        ["take place", "happen (planned event)", "The ceremony took place on Friday."],
        ["take on", "accept (a job, challenge)", "She took on extra responsibilities."],
      ]),
      table("Put", ["Expression", "Meaning", "Example"], [
        ["put up with", "tolerate", "I can't put up with the noise."],
        ["put a stop to", "end something", "The council put a stop to the building work."],
        ["put pressure on", "try to force someone", "Don't put pressure on him to decide."],
        ["put away", "return to its place / save", "Put your books away."],
        ["put off", "postpone", "They put off the meeting."],
      ]),
    ],
    [
      match("Match the expression with its meaning.", [["take for granted", "not appreciate"], ["put up with", "tolerate"], ["take issue with", "disagree with"], ["put a stop to", "end something"], ["put off", "postpone"]], "Learn the meanings as chunks."),
      mc("We often ___ clean water ___, but it is a precious resource.", ["take / for granted", "put / away", "take / place"], 0, "take for granted."),
      fill("The council decided to put a ___ to the illegal building.", ["stop"], "put a stop to."),
      mist("Find the mistake.", ["The ceremony", "put place", "on Friday."], 1, "took place", "take place = happen."),
      mc("I can't ___ the noise from the building site any longer.", ["put up with", "take issue with", "put off"], 0, "put up with = tolerate."),
      sa("“I disagree with the author's view.” = I take ___ with the author's view.", ["issue"], "take issue with.", { hint: "i _ _ _ e" }),
    ]),

  U("upper-reading-boomerang-generation", "READING", "Reading: The Boomerang Generation", "Multiple perspectives", "CORE", 18, ["upper-reading-post-truth"],
    "Read a sociological article, compare the perspectives of different people and identify the article's balance.",
    ["reading", "sociology", "perspective", "family", "collocations"], "The boomerang generation (Unit 5)",
    [
      text("Feature articles often give **several perspectives**. Make a two-column note: **what each person thinks** and **what the writer says**. Look for balance: are both sides represented fairly?", "Reading strategy"),
      passage("Example", "The mayor believes the new bridge will reduce traffic. Local shop owners fear it will take customers away.", "Two perspectives"),
      list("Guided practice", ["Mayor → positive (reduces traffic).", "Shop owners → negative (lost customers).", "Article balance → both views presented."]),
    ],
    [
      mc("What are the main reasons young adults return home?", ["rising rents and difficulty finding permanent jobs", "boredom", "family holidays"], 0, "Rents rose faster than salaries and jobs are less permanent.", BOOMERANG),
      mc("Why did Sami move back?", ["His contract ended and he could not afford rent.", "He wanted to study.", "He wanted to travel."], 0, "“couldn't afford to pay rent”.", BOOMERANG),
      mc("How did Sami's mother feel at first?", ["surprised", "delighted", "furious"], 0, "“I was surprised at first”.", BOOMERANG),
      mc("What do family therapists suggest?", ["agree rules early", "avoid discussing money", "ask the children to leave"], 0, "Agree rules about money, time and privacy.", BOOMERANG),
      mc("Which expression from the article means ‘not appreciate’?", ["take for granted", "put up with", "put off"], 0, "“I take nothing for granted.”", BOOMERANG),
      tf("The article shows only positive views of the boomerang trend.", false, "It also mentions worries and feeling judged.", BOOMERANG),
    ]),

  U("upper-writing-cv-cover-letter", "WRITING", "Applying for a Job: CV and Formal Cover Letter", "Application writing", "CORE", 20, ["upper-writing-linking-conjunctions", "int-writing-professional-correspondence"],
    "Write an effective CV and a tailored formal cover letter, using formal register instead of informal phrasing.",
    ["writing", "cv", "cover-letter", "formal-register", "job-application"], "CV and cover letter (Unit 5)",
    [
      text("A **cover letter** persuades an employer to read your **CV**. It is **formal**, **tailored** to the job and **concise** (usually 250–300 words).", "Explanation"),
      table("Structure of a cover letter", ["Paragraph", "Content", "Model language"], [
        ["1 Opening", "which job and how you found it", "I am writing to apply for the position of … advertised on …"],
        ["2 Skills and experience", "two or three relevant strengths with evidence", "I have three years' experience in …, during which I …"],
        ["3 Motivation", "why this company / role", "I am particularly interested in … because …"],
        ["4 Closing", "next step; politeness", "I would welcome the opportunity to discuss … I look forward to hearing from you."],
      ]),
      table("Informal → formal", ["Informal", "Formal"], [["I'm really good at working in teams.", "I work effectively as part of a team."], ["I got a promotion.", "I was promoted to team leader."], ["I'd love to work for you.", "I would welcome the opportunity to join your organisation."], ["a lot of experience", "extensive experience"]]),
      list("CV tips", ["Reverse chronological order (most recent first).", "Action verbs: managed, organised, developed, achieved.", "Numbers where possible: managed a team of eight.", "One or two pages; no photograph or personal details unless requested."]),
    ],
    [
      order("Put the parts of a cover letter in order.", ["Opening: which job", "Skills and experience", "Motivation", "Closing"], "paragraph", "Opening, skills, motivation, closing."),
      mc("Which sentence is most formal?", ["I would welcome the opportunity to join your organisation.", "I'd love to work for you.", "Give me a chance!"], 0, "Formal register."),
      mist("Find the mistake (register).", ["I have", "a lot of", "experience in sales."], 1, "extensive", "Prefer extensive to a lot of in formal writing."),
      fill("I was ___ (promote) to team leader in 2022.", ["promoted"], "Passive: was promoted."),
      mc("Which verb would improve a CV?", ["managed", "did", "was involved"], 0, "Action verbs are more powerful."),
      match("Informal → formal.", [["I got a promotion.", "I was promoted."], ["I'm really good at teamwork.", "I work effectively in a team."]], "Convert informal phrases to formal ones."),
    ]),

  // ============================================================ UNIT 6
  U("upper-grammar-quantifiers", "GRAMMAR", "Expressions of Quantity: Countable, Uncountable and Quantifiers", "Quantity", "CORE", 18, ["upper-grammar-future-forms-complete"],
    "Use quantifiers accurately with countable and uncountable nouns, including few / little, fewer / less and determiners with of.",
    ["grammar", "quantifiers", "countable", "uncountable", "determiners"], "Quantity (Unit 6)",
    [
      text("The choice of **quantifier** depends on whether the noun is **countable** or **uncountable**, and on whether you want a **positive** or **negative** meaning.", "Explanation"),
      table("Quantifiers", ["Meaning", "Countable", "Uncountable", "Both"], [
        ["a small number (positive)", "a few, several", "a little", "some, a number of"],
        ["hardly any (negative)", "few", "little", "hardly any, not many/much"],
        ["comparative", "fewer, more", "less, more", "—"],
        ["a large quantity", "many, a great many", "much, a great deal of", "plenty of, a lot of, loads of"],
        ["all or none", "every, each, all", "all", "none of, no"],
      ]),
      list("Rules", ["**few / little** (no article) = almost none (negative): There is little hope.", "**a few / a little** = some (positive): I have a few ideas.", "**Fewer** with countable; **less** with uncountable (formal): fewer cars, less traffic.", "**most people** (in general) but **most of the people** (specific): Most of the people in the survey were satisfied.", "**The number of** takes a singular verb; **a number of** takes a plural verb."]),
      compare("Errors", [["There are less students this year.", "There are fewer students this year.", "Countable: fewer."], ["I have few time.", "I have little time. / I have a little time.", "Uncountable: little."], ["Most of people agree.", "Most people agree. / Most of the people agree.", "Of needs the / determiner."]]),
    ],
    [
      mc("There are ___ students in the class this year than last year.", ["fewer", "less", "little"], 0, "Countable: fewer."),
      mc("We have ___ time; let's hurry. (almost none)", ["little", "a little", "few"], 0, "Negative: little."),
      mist("Find the mistake.", ["Most of", "people", "agree with the proposal."], 0, "Most", "General: most people."),
      fill("A great ___ of money was spent on the project.", ["deal"], "a great deal of + uncountable."),
      match("Countable or uncountable?", [["advice", "uncountable"], ["suggestion", "countable"], ["information", "uncountable"], ["opinion", "countable"]], "Learn common uncountable nouns."),
      mc("A number of students ___ complained.", ["have", "has", "is"], 0, "A number of + plural verb."),
    ]),

  U("upper-vocab-variable-stress", "VOCABULARY", "Words with Variable Stress: Noun–Verb Pairs", "Word stress", "CORE", 12, ["upper-vocab-take-put"],
    "Recognise noun–verb pairs where stress changes and use them accurately in reading and writing.",
    ["vocabulary", "word-stress", "noun-verb-pairs", "pronunciation", "listening-support"], "Words with variable stress (Unit 6)",
    [
      text("Many two-syllable words are **nouns when stressed on the first syllable** and **verbs when stressed on the second**. Even if you only read, knowing this helps you recognise the **word class**."),
      table("Noun / verb pairs", ["Word", "Noun (stress 1st)", "Verb (stress 2nd)"], [
        ["progress", "Her progress is impressive.", "We must progress quickly."],
        ["import", "Oil is the main import.", "They import fruit from Egypt."],
        ["increase", "There was an increase in prices.", "Prices increase every year."],
        ["record", "He broke the world record.", "Please record the meeting."],
        ["refund", "I asked for a refund.", "They will refund your money."],
        ["permit", "You need a permit.", "The law does not permit it."],
        ["contrast", "There is a sharp contrast.", "The two results contrast strongly."],
      ]),
      tip("Reading tip: if the word follows a/the/an, it is probably a noun; if it follows to, will or a subject pronoun, it is probably a verb.", "Grammar clue"),
    ],
    [
      match("Noun or verb?", [["an increase in prices", "noun"], ["prices increase", "verb"], ["the record", "noun"], ["to record", "verb"]], "Use the position in the sentence."),
      mc("Which word is a VERB in “Prices ___ every year”?", ["increase", "an increase", "the increase"], 0, "Subject + verb."),
      fill("You need a ___ to park here. (noun)", ["permit"], "a + noun."),
      mist("Find the mistake.", ["They", "an import", "fruit from Egypt."], 1, "import", "Verb needed after they."),
      mc("Which of these words has different stress as a noun and as a verb?", ["record", "table", "window"], 0, "Record changes stress."),
      sa("A sum of money returned to you: a ___", ["refund"], "a refund.", { hint: "r _ _ _ _ d" }),
    ]),

  U("upper-reading-two-success-stories", "READING", "Reading: Two Success Stories from the North", "Business case study", "CHALLENGING", 18, ["upper-reading-boomerang-generation"],
    "Read a business case study, extract data and identify the factors of success and change.",
    ["reading", "business", "case-study", "data", "comparison"], "Business case studies (Unit 6)",
    [
      text("Case studies present **history, key decisions, problems and results**. Underline **dates** and **turning points**, then summarise **why** the company succeeded.", "Reading strategy"),
      passage("Example", "Founded in 1990, the firm nearly collapsed in 2005 after an expensive failure, but it recovered by returning to its most popular product.", "Turning point + recovery"),
      list("Guided practice", ["Start → 1990.", "Problem → expensive failure in 2005.", "Solution → back to the popular product."]),
    ],
    [
      mc("What did Brickbox first make?", ["wooden toys", "furniture", "computers"], 0, "“a small workshop that made wooden toys”.", BUSINESS),
      mc("What nearly ended the company?", ["falling profits from expensive new products", "a fire", "a lawsuit"], 0, "Expensive new products caused falling profits.", BUSINESS),
      mc("How did Brickbox recover?", ["by returning to the simple brick", "by closing stores", "by selling the company"], 0, "It went back to its original idea.", BUSINESS),
      mc("What problem did Flatnest's founder notice?", ["Transporting furniture cost more than the furniture.", "Furniture was too heavy to design.", "Stores were too small."], 0, "He noticed the transport costs.", BUSINESS),
      mc("Which quantifier phrase appears in the text?", ["few big companies", "little companies", "less companies"], 0, "“There are few big companies that…”", BUSINESS),
      mc("What do both companies have in common?", ["one clear idea, customer focus and willingness to change", "the same founders", "very low prices"], 0, "The final paragraph.", BUSINESS),
    ]),

  U("upper-reading-relentless-engineer", "READING", "Reading: The Engineer Who Wouldn't Stop", "Character profile", "CORE", 16, ["upper-reading-two-success-stories"],
    "Identify a person's traits, achievements and the writer's attitude in a profile, and infer attitudes from quotations.",
    ["reading", "profile", "character-traits", "quotations", "attitude"], "Entrepreneur profile (Unit 6)",
    [
      text("In a profile, look for **traits** (relentless, generous), **evidence** (facts that show the trait) and **the writer's attitude** (admiring, critical, balanced).", "Reading strategy"),
      passage("Example", "She checks every report herself, works weekends and answers customers personally.", "Evidence for the trait ‘hard-working’"),
      list("Guided practice", ["Trait → dedicated.", "Evidence → checks every report, works weekends.", "Attitude → admiring."]),
    ],
    [
      mc("What was Nora told at twenty-two?", ["that her idea was impractical", "that she was too young", "that she should study more"], 0, "“her idea for a solar-powered water pump was impractical”.", ENTREPRENEUR),
      mc("How many hours a week does she work?", ["about sixty", "about twenty", "about forty"], 0, "“about sixty hours a week”.", ENTREPRENEUR),
      mc("Which trait is shown by ‘reads every customer complaint herself’?", ["attention to customers", "laziness", "shyness"], 0, "Evidence of care for customers.", ENTREPRENEUR),
      mc("What does Nora say about her mistakes?", ["She has hardly ever made the same one twice.", "She never makes mistakes.", "She hides her mistakes."], 0, "“hardly ever made the same one twice”.", ENTREPRENEUR),
      mc("What is the writer's attitude to Nora?", ["mostly admiring but balanced", "hostile", "bored"], 0, "The profile also mentions critics.", ENTREPRENEUR),
      tf("Nora agrees that her expansion is completely without risk.", false, "“My job is to decide which risk is worth taking.”", ENTREPRENEUR),
    ]),

  U("upper-writing-survey-report", "WRITING", "Report Writing: A Consumer Survey", "Formal report", "CHALLENGING", 22, ["upper-grammar-quantifiers", "upper-writing-linking-conjunctions"],
    "Write a formal survey report with clear sections, objective language, data description and recommendations.",
    ["writing", "report", "survey", "data-description", "formal-writing"], "Survey report (Unit 6)",
    [
      text("A **survey report** presents the **purpose, method, findings and recommendations** of a small investigation. It uses **headings**, **impersonal language** and **precise language for numbers**.", "Explanation"),
      table("Four-part structure", ["Section", "Content", "Model language"], [
        ["Background / objectives", "why the survey was carried out", "The aim of this report is to … A survey was conducted to find out …"],
        ["Methodology", "how the data was collected", "Fifty students were asked … Respondents were asked to complete a questionnaire."],
        ["Key findings", "the main results, with numbers", "The majority of respondents (68%) … Only a small minority … Roughly a third …"],
        ["Recommendations", "what should be done", "It is recommended that … The café should consider …"],
      ]),
      table("Language for data", ["Function", "Phrases"], [["Proportions", "the majority of · a minority of · roughly half · just over a third · almost two-thirds"], ["Comparison", "significantly more than · slightly fewer than · twice as many as"], ["Trend", "increased sharply · fell steadily · remained stable"]]),
      annotated("Model extract", [["Objectives", "The aim of this report is to establish how satisfied students are with the campus café."], ["Methodology", "A questionnaire was given to fifty students during a single week."], ["Findings", "The majority of respondents (68%) said that the prices were too high, whereas only a small minority complained about the quality of the food."], ["Recommendation", "It is recommended that the café should introduce a cheaper set menu."]]),
    ],
    [
      order("Put the report sections in order.", ["Background and objectives", "Methodology", "Key findings", "Recommendations"], "paragraph", "The standard order."),
      mc("Which sentence belongs in the Methodology section?", ["A questionnaire was given to fifty students.", "It is recommended that prices be lowered.", "68% said prices were too high."], 0, "Methodology = how data was collected."),
      mc("Which phrase suits ‘34 out of 50’?", ["roughly two-thirds", "a small minority", "hardly any"], 0, "34/50 = 68%."),
      mist("Find the mistake.", ["The majority of respondents", "was", "dissatisfied."], 1, "were", "Respondents is plural; the majority of respondents were."),
      fill("It ___ recommended that the café introduce a cheaper menu. (verb be)", ["is"], "It is recommended that …"),
      mc("Why does a report use impersonal language?", ["to sound objective and formal", "to be shorter", "to entertain"], 0, "Objectivity."),
    ]),
];

void [compare, structure, tip, annotated, passage, tf, sa, text, list, table];
