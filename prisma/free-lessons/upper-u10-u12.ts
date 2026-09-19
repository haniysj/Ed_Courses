import { annotated, compare, fill, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, type SeedLesson } from "./dsl";
import { U } from "./upper-common";

// Upper-Intermediate, Units 10-12. Topics follow the academy's syllabus; every text is ORIGINAL. Where facts are given they are widely accepted and hedged; stories and profiles are fictional.

const VIKINGS = "THE AMAZING SEAFARERS OF THE NORTH\n\nFor about three centuries, from the late eighth century, the Vikings, seafaring people from Scandinavia, sailed across the seas of Europe and beyond. Their reputation as violent raiders is partly deserved, but historians now stress that they were also traders, farmers and settlers.\n\nTheir success depended on their ships. The long, narrow “longships” were light enough to be pulled onto beaches, yet strong enough to cross open ocean. Using them, Viking sailors are believed to have reached Iceland, Greenland and, around the year 1000, the coast of North America, several centuries before Columbus.\n\nBut how much do we really know? Most written accounts were produced by their enemies, so we must be careful: some of the stories may have been exaggerated. Archaeologists, examining graves and settlements, have discovered that many Viking men and women were not the ferocious warriors of legend, but ordinary people who lived by farming and trading. It seems that the truth is more interesting than the myth.";
const SCHOLAR = "THE SCHOLAR UNDER THE PLAYGROUND\n\n(A fictional account)\n\nIn 2019, builders preparing to expand a school playground in a small northern town uncovered a stone coffin. Inside was a skeleton with a curved spine and several injuries. Local historians believed it might belong to Aldric, a medieval scholar who had disappeared six hundred years earlier.\n\nExperts were divided. Some thought the skeleton must have been that of a soldier, because of the injuries. Others argued that a soldier could not have been buried so carefully. “He can't have died in battle,” one of them said. “No one would have gone to such trouble for a common fighter.”\n\nDNA tests provided the answer. A descendant, found through old parish records, matched the bones. The scholar had probably fallen from a tower while examining the roof; his injuries, once thought to be battle wounds, were consistent with a long fall. The town now displays the skeleton in its museum, and a plaque on the playground wall reads: “Someone should have looked here sooner.”";
const WONDER = "HAVE YOU EVER WONDERED?\n\n1. Why is the sky blue? Sunlight looks white, but it contains all the colours of the rainbow. As it passes through the atmosphere, the shorter blue waves are scattered in all directions much more than the longer red waves, so the sky looks blue to us.\n\n2. Why do onions make us cry? When we cut an onion, it releases a gas that reacts with the moisture in our eyes and irritates them. The eyes produce tears to wash the irritation away.\n\n3. Why do we get goosebumps? Tiny muscles at the base of each hair contract when we are cold or emotional. Scientists believe that, long ago, this made our ancestors' fur stand up, keeping them warm or making them look bigger.\n\n4. Why does time seem to pass faster as we get older? Nobody knows for certain. One theory suggests that new experiences make time feel longer, while routine makes it feel shorter; if that is true, a busy adult life may seem to fly by.";
const DREW = "SOMEONE SHOULD HAVE STOPPED HIM\n\n(A fictional story)\n\nDrew was nine when he decided to cross the river in a bathtub. He had built a sail from a bedsheet, packed sandwiches and told nobody. The whole town gathered on the bank to watch, and half of them shouted advice.\n\n“He should have told his parents,” said a neighbour. “He needn't have taken the sandwiches,” said another; “it's only two hundred metres.” His teacher, who had been standing by the water, wrung her hands. “Somebody must have seen him build it,” she said. “Someone should have stopped him.”\n\nBut the bathtub, wobbling and turning in circles, reached the far bank exactly forty minutes later. Drew stood up, bowed and ate a sandwich. “If only I had brought a second sandwich,” he said. The town laughed with relief, and Drew, dripping and delighted, became a legend.";
const BODY_CLOCK = "THE BODY CLOCK\n\nAlmost every living thing follows a daily rhythm. In humans, this rhythm is known as the circadian rhythm, from the Latin for “around a day”. It regulates when we feel sleepy, when we feel hungry and even when our body temperature rises and falls.\n\nThe main clock is a small group of cells in the brain that respond to light. When darkness falls, the brain produces a hormone called melatonin, which helps to prepare us for sleep; when light reaches the eyes in the morning, the production stops. This explains why bright screens late at night may make it harder to fall asleep.\n\nSome people are naturally “larks”, who wake early and feel best in the morning, while others are “owls”, who function better in the evening. The pattern appears to be partly inherited, and it changes with age: teenagers tend to become sleepy later than children or older adults. Shift workers and frequent travellers often suffer because their routines conflict with their body clocks, and studies suggest that this may affect health over the long term.";
const ARCHITECT = "The Glass Library was designed in 1998. It is a really big building. It is very important for the city. It was made by a famous architect. The architect was born in Lisbon. The library has a lot of rooms. Many people go there every day. It has a big garden.";

export const UPPER_U10_U12: SeedLesson[] = [
  // ============================================================ UNIT 10
  U("upper-grammar-past-modals-deduction", "GRAMMAR", "Modals of Probability in the Past: must have, might have, can't have, could have", "Past deduction", "CHALLENGING", 18, ["upper-grammar-habits-present-past"],
    "Speculate about past events with degrees of certainty using modal + have + past participle.",
    ["grammar", "modal-verbs", "deduction", "probability", "past-modals"], "Modals of probability in the past (Unit 10)",
    [
      text("We use **modal + have + past participle** to say **how certain** we are about a **past event**, based on evidence. The modal shows the **degree of certainty**.", "Explanation"),
      table("Degrees of certainty", ["Certainty", "Form", "Example"], [
        ["almost certain (yes)", "must have + participle", "The lights are off, so they must have gone to bed."],
        ["possible", "may / might / could have + participle", "He might have missed the bus."],
        ["almost certain (no)", "can't / couldn't have + participle", "She can't have seen us; she was abroad."],
        ["possible (no)", "may not / might not have + participle", "They might not have received the invitation."],
      ]),
      table("Continuous form", ["Form", "Example"], [["must have been + -ing", "He must have been sleeping when I called."], ["can't have been + -ing", "She can't have been working; the office was closed."]]),
      compare("Errors", [["He mustn't have seen us.", "He can't have seen us.", "The negative of must have is can't have."], ["She must have went.", "She must have gone.", "Past participle."], ["They could have arrive.", "They could have arrived.", "Have + participle."]]),
    ],
    [
      mc("The lights are off, so they ___ to bed.", ["must have gone", "can't have gone", "might go"], 0, "Strong positive deduction."),
      mc("She ___ us; she was abroad at the time.", ["can't have seen", "must have seen", "should see"], 0, "Strong negative deduction."),
      mist("Find the mistake.", ["He", "mustn't have", "noticed the mistake."], 1, "can't have", "The negative of must have is can't have."),
      fill("He didn't answer his phone. He ___ (might / sleep) or he might have been in a meeting.", [["might have been sleeping", "might have been asleep"]], "Continuous: might have been + -ing."),
      match("Certainty?", [["must have left", "almost certain"], ["might have left", "possible"], ["can't have left", "almost certain it did not happen"]], "Match the certainty."),
      order("Put the words in the correct order.", ["They", "must", "have", "forgotten", "about", "the", "meeting."], "word", "must have + participle."),
    ]),

  U("upper-grammar-should-have-needn-t-have", "GRAMMAR", "Criticism and Regret about the Past: should have, shouldn't have, needn't have", "Past criticism", "CORE", 14, ["upper-grammar-past-modals-deduction"],
    "Express criticism, regret and unnecessary past actions with should have, shouldn't have and needn't have.",
    ["grammar", "modal-verbs", "regret", "criticism", "past-modals"], "should have, needn't have (Unit 10)",
    [
      text("These forms judge **past actions**: what was **the right thing to do** and what was **unnecessary**.", "Explanation"),
      table("Past criticism and regret", ["Form", "Meaning", "Example"], [
        ["should have + participle", "it was a good idea but it did not happen", "You should have told me. (You didn't tell me.)"],
        ["shouldn't have + participle", "it was a bad idea and it happened", "I shouldn't have said that. (I said it.)"],
        ["needn't have + participle", "it was unnecessary but it happened", "You needn't have waited. (You waited, but it was not necessary.)"],
        ["didn't need to + base", "it was not necessary, and we don't know whether it happened", "I didn't need to wait, so I left."],
      ]),
      compare("Do not confuse", [["You needn't have brought food.", "You didn't need to bring food.", "The first: you brought food; the second: you did not have to (unclear whether you did)."]]),
    ],
    [
      mc("I ___ that. It was a terrible thing to say. (I said it)", ["shouldn't have said", "needn't have said", "should say"], 0, "Regret about a bad past action."),
      mc("You ___ the food; we already had plenty. (You brought it)", ["needn't have brought", "shouldn't bring", "didn't need bring"], 0, "Unnecessary action that happened."),
      mist("Find the mistake.", ["You", "should told", "me earlier."], 1, "should have told", "should + have + participle."),
      fill("She ___ (not / need) to wait, so she left. (it was not necessary)", ["didn't need"], "Didn't need to = not necessary."),
      match("Meaning?", [["You should have told me.", "you did not tell me"], ["I shouldn't have said that.", "I said it and regret it"], ["You needn't have waited.", "you waited unnecessarily"]], "Match the meaning."),
      order("Put the words in the correct order.", ["We", "should", "have", "left", "earlier."], "word", "should have + participle."),
    ]),

  U("upper-vocab-body-idioms", "VOCABULARY", "Metaphors and Idioms of the Body", "Idioms", "CORE", 14, ["upper-vocab-homonyms-homophones"],
    "Understand and use common idioms based on parts of the body.",
    ["vocabulary", "idioms", "body", "metaphor", "listening-support"], "Idioms of the body (Unit 10)",
    [
      text("Many idioms are based on **parts of the body**. Their meaning is **metaphorical**, so a word-for-word translation usually does not work. Learn them **as whole phrases**."),
      table("Idioms", ["Idiom", "Meaning", "Example"], [
        ["have a heart of gold", "be very kind and generous", "Our teacher has a heart of gold."],
        ["give someone a hand", "help", "Could you give me a hand with these boxes?"],
        ["keep an eye on", "watch carefully", "Please keep an eye on my bag."],
        ["be on its last legs", "be about to stop working or fail", "My old car is on its last legs."],
        ["pull someone's leg", "joke, tease", "Don't believe him: he's pulling your leg."],
        ["face the facts", "accept an unpleasant truth", "We must face the facts: sales are falling."],
        ["be all ears", "listen carefully", "Go on; I'm all ears."],
        ["keep a straight face", "not laugh or smile", "It was hard to keep a straight face."],
        ["bite your tongue", "stop yourself from saying something", "I had to bite my tongue."],
      ]),
      tip("Idioms are less common in formal academic writing, but they are very frequent in news, speech and informal writing.", "Register"),
    ],
    [
      match("Match the idiom with its meaning.", [["give someone a hand", "help"], ["pull someone's leg", "joke"], ["be on its last legs", "about to fail"], ["face the facts", "accept an unpleasant truth"], ["all ears", "listening carefully"]], "Learn each idiom as a whole."),
      mc("Could you ___ my bag while I buy a ticket?", ["keep an eye on", "pull the leg of", "bite the tongue of"], 0, "keep an eye on = watch."),
      fill("She has a ___ of gold: she always helps everyone.", ["heart"], "a heart of gold."),
      mist("Find the mistake.", ["He is", "pulling my hand", "— he doesn't mean it."], 1, "pulling my leg", "The idiom is pull someone's leg."),
      mc("“My laptop is on its last legs” means it ___.", ["is about to stop working", "is very fast", "is brand new"], 0, "On its last legs."),
      sa("“Listen carefully” = be all ___", ["ears"], "be all ears.", { hint: "e _ _ s" }),
    ]),

  U("upper-reading-amazing-seafarers", "READING", "Reading: The Amazing Seafarers of the North", "Historical text and evidence", "CHALLENGING", 18, ["upper-reading-living-in-the-past"],
    "Distinguish historical fact from myth, assess evidence and understand hedging in a history text.",
    ["reading", "history", "evidence", "hedging", "critical-reading"], "Historical investigation (Unit 10)",
    [
      text("Historical texts often mix **established facts**, **probable inferences** and **legends**. Look at the **verbs of certainty**: *is known to, are believed to, may have, it seems that*. Ask **who produced the sources** and whether they might be biased.", "Reading strategy"),
      passage("Example", "The city is thought to have been founded around 800 BC, although no written record survives.", "Hedging: is thought to"),
      list("Guided practice", ["Claim → founded around 800 BC.", "Hedge → is thought to.", "Reason for doubt → no written record."]),
    ],
    [
      mc("What is the popular image of the Vikings?", ["violent raiders", "peaceful monks", "musicians"], 0, "“Their reputation as violent raiders”.", VIKINGS),
      mc("What does the writer say about that image?", ["It is partly deserved but incomplete.", "It is completely false.", "It is completely true."], 0, "Partly deserved; they were also traders and farmers.", VIKINGS),
      mc("Why does the writer suggest we should be careful with written accounts?", ["Most were written by their enemies.", "They were written recently.", "They are in Latin."], 0, "The source may be biased.", VIKINGS),
      mc("What does “are believed to have reached” tell us?", ["It is probable but not certain.", "It is certain.", "It is false."], 0, "The verb is hedged.", VIKINGS),
      mc("What do archaeologists' discoveries suggest?", ["Many Vikings lived by farming and trading.", "All Vikings were warriors.", "Vikings never travelled."], 0, "Graves and settlements show ordinary lives.", VIKINGS),
      tf("The writer claims the legend is more interesting than the truth.", false, "“the truth is more interesting than the myth”.", VIKINGS),
    ]),

  U("upper-reading-scholar-under-playground", "READING", "Reading: The Scholar Under the Playground", "Forensic evidence", "CHALLENGING", 18, ["upper-reading-amazing-seafarers"],
    "Follow an argument about evidence, identify speculation with past modals and separate fact from theory.",
    ["reading", "history", "forensic-evidence", "past-modals", "speculation"], "Historical investigation: a discovery (Unit 10)",
    [
      text("Investigation stories move from **discovery** to **speculation** to **evidence** to **conclusion**. Notice how writers use **past modals** (must have, can't have) to show **reasoning**.", "Reading strategy"),
      passage("Example", "The tools were found beside the body, so he must have been a carpenter; yet the ring suggests he can't have been poor.", "Deductions"),
      list("Guided practice", ["Evidence → tools beside the body.", "Deduction → must have been a carpenter.", "Counter-evidence → the ring."]),
    ],
    [
      mc("What did the builders find?", ["a stone coffin with a skeleton", "gold coins", "a sword"], 0, "“a stone coffin”.", SCHOLAR),
      mc("Why did some experts think it was a soldier?", ["because of the injuries", "because of the coffin", "because of the tower"], 0, "The injuries suggested battle wounds.", SCHOLAR),
      mc("What does “He can't have died in battle” express?", ["strong certainty that it did not happen", "a possibility", "a regret"], 0, "can't have = almost certain it did not.", SCHOLAR),
      mc("How did the experts find out the truth?", ["DNA tests matched a descendant.", "a written letter", "a photograph"], 0, "DNA and parish records.", SCHOLAR),
      mc("What probably caused the injuries?", ["a fall from a tower", "a battle", "an illness"], 0, "“consistent with a long fall”.", SCHOLAR),
      mc("What does the plaque suggest?", ["The discovery could have happened earlier.", "The scholar was a soldier.", "The school is old."], 0, "“Someone should have looked here sooner.”", SCHOLAR),
    ]),

  U("upper-writing-emphasis-cleft", "WRITING", "Adding Emphasis: Cleft Sentences, Inversion and Strong Vocabulary", "Emphasis", "CHALLENGING", 20, ["upper-writing-describing-places", "upper-grammar-past-modals-deduction"],
    "Add emphasis to writing about people of influence using cleft sentences, inversion and strong vocabulary.",
    ["writing", "emphasis", "cleft-sentences", "inversion", "style"], "Adding emphasis (Unit 10)",
    [
      text("**Emphasis** helps the reader see what is **most important**. Advanced writers use **special structures** rather than only intensifying adverbs.", "Explanation"),
      table("Emphasising structures", ["Structure", "Pattern", "Example"], [
        ["It-cleft", "It was + focus + that/who …", "It was her persistence that changed the school."],
        ["What-cleft", "What + subject + verb + is/was …", "What impressed everyone was her honesty."],
        ["Inversion after negatives", "Never / Rarely / Not only + auxiliary + subject", "Never had she seen such courage. · Not only did she win, but she also broke the record."],
        ["Strong vocabulary", "replace ‘very + adjective’", "very important → vital; very good → outstanding"],
      ]),
      annotated("Model paragraph: A person of influence", [["Person", "Dr Salma Haddad transformed rural education in the region."], ["It-cleft", "It was her belief in small classes that made the difference."], ["What-cleft", "What made her different was her willingness to listen."], ["Inversion", "Rarely have teachers achieved so much with so few resources."]]),
      tip("Use emphasis sparingly. One or two special structures in a paragraph are enough; too many make the writing sound artificial.", "Balance"),
    ],
    [
      mc("___ her persistence that changed the school.", ["It was", "That was", "What was"], 0, "It-cleft."),
      mc("___ impressed everyone was her honesty.", ["What", "It", "That"], 0, "What-cleft."),
      mist("Find the mistake.", ["Never", "she had seen", "such courage."], 1, "had she seen", "Inversion after Never: auxiliary + subject."),
      fill("Not only ___ she win, but she also broke the record.", ["did"], "Not only + auxiliary + subject."),
      match("Strong vocabulary.", [["very important", "vital"], ["very good", "outstanding"], ["very big", "enormous"]], "Replace very + adjective."),
      order("Put the words in the correct order.", ["Rarely", "have", "teachers", "achieved", "so", "much."], "word", "Rarely + auxiliary + subject + participle."),
    ]),

  // ============================================================ UNIT 11
  U("upper-grammar-wish-if-only", "GRAMMAR", "I wish and If only: Present Regret, Past Regret and Irritation", "Wishes", "CHALLENGING", 16, ["upper-grammar-should-have-needn-t-have"],
    "Express regret, unreal wishes and irritation with wish and if only.",
    ["grammar", "wish", "if-only", "regret", "hypothesising"], "I wish and If only (Unit 11)",
    [
      text("**Wish** and **if only** express **unreal situations** and **regrets**. The verb moves **back one tense**, just like in unreal conditionals. *If only* is stronger and more emotional.", "Explanation"),
      table("Wish structures", ["Meaning", "Form", "Example"], [
        ["regret about the present", "wish + Past Simple", "I wish I lived closer to the city."],
        ["regret about the past", "wish + Past Perfect", "I wish I had studied harder."],
        ["irritation with someone's behaviour", "wish + would", "I wish you would stop interrupting."],
        ["strong feeling", "If only + same forms", "If only I had listened! · If only it would stop raining!"],
      ]),
      compare("Errors", [["I wish I would have more time.", "I wish I had more time.", "No would for your own situation."], ["I wish I studied harder last year.", "I wish I had studied harder last year.", "Past regret: past perfect."], ["I wish it will stop raining.", "I wish it would stop raining.", "Irritation: would."]]),
      tip("After wish, use were for all persons in formal English: I wish I were taller.", "Formal style"),
    ],
    [
      mc("I wish I ___ closer to the city; the journey takes two hours.", ["lived", "would live", "had lived"], 0, "Present regret: Past Simple."),
      mc("If only I ___ harder last year!", ["had studied", "studied", "would study"], 0, "Past regret: Past Perfect."),
      mist("Find the mistake.", ["I wish", "you will stop", "interrupting me."], 1, "would stop", "Irritation with behaviour: wish + would."),
      fill("I wish I ___ (be) taller. (formal style)", [["were", "was"]], "Unreal present: were / was."),
      match("Meaning?", [["I wish I had more time.", "present regret"], ["I wish I had listened.", "past regret"], ["I wish you would be quiet.", "irritation"]], "Match the meaning."),
      order("Put the words in the correct order.", ["If", "only", "I", "had", "listened", "to", "her."], "word", "If only + Past Perfect."),
    ]),

  U("upper-grammar-conditionals-hypothesising", "GRAMMAR", "Hypothesising: Conditionals, It's time, I'd rather and Supposing", "Conditionals", "CHALLENGING", 20, ["upper-grammar-wish-if-only"],
    "Use first, second, third and mixed conditionals and alternative structures to talk about real and unreal situations.",
    ["grammar", "conditionals", "mixed-conditionals", "hypothesising", "unreal-situations"], "Conditionals and hypothesising (Unit 11)",
    [
      text("Conditionals express **real** and **unreal** situations. The **verb form** shows how likely the writer thinks the situation is.", "Explanation"),
      table("Conditionals", ["Type", "Form", "Example"], [
        ["First (real / likely)", "If + Present, will + base", "If it rains, we'll stay in."],
        ["Second (unreal present / improbable future)", "If + Past Simple, would + base", "If I had more time, I would learn Chinese."],
        ["Third (unreal past)", "If + Past Perfect, would have + participle", "If I had known, I would have called."],
        ["Mixed (past cause, present result)", "If + Past Perfect, would + base", "If she had accepted the job, she would be rich now."],
        ["Mixed (present state, past result)", "If + Past Simple, would have + participle", "If he were more careful, he wouldn't have made that mistake."],
      ]),
      table("Alternatives", ["Structure", "Meaning", "Example"], [
        ["It's time + Past Simple", "we should do it now", "It's time we left."],
        ["I'd rather + Past Simple", "preference about another person", "I'd rather you didn't smoke here."],
        ["Supposing / Suppose + Past", "imagine a situation", "Supposing you won the lottery, what would you do?"],
        ["unless / provided that / as long as", "condition (if not / only if)", "I'll go unless it rains. / You can go provided that you finish."],
        ["Were you to … / Had I known …", "formal inversion", "Had I known, I would have called."],
      ]),
    ],
    [
      mc("If she ___ the job, she'd be rich now. (she did not accept)", ["had accepted", "accepted", "would accept"], 0, "Mixed conditional: Past Perfect + would."),
      mc("It's time we ___ home; it's very late.", ["went", "go", "will go"], 0, "It's time + Past Simple."),
      mc("I'd rather you ___ here. (preference about you)", ["didn't smoke", "don't smoke", "wouldn't smoke"], 0, "I'd rather + subject + Past Simple."),
      mist("Find the mistake.", ["If I", "would have known,", "I would have called."], 1, "had known", "Third conditional: If + Past Perfect."),
      fill("___ I known, I would have called. (formal inversion)", ["Had"], "Had I known = If I had known."),
      match("Which conditional?", [["If it rains, we'll stay in.", "first"], ["If I had more time, I would study.", "second"], ["If I had known, I would have called.", "third"], ["If I had worked harder, I would be rich now.", "mixed"]], "Match the type."),
    ]),

  U("upper-vocab-word-pairs", "VOCABULARY", "Academic Word Pairs (Binomials)", "Fixed pairs", "CORE", 12, ["upper-vocab-body-idioms"],
    "Use fixed word pairs joined by and, or and but in speech and writing.",
    ["vocabulary", "binomials", "fixed-expressions", "collocations", "listening-support"], "Word pairs (Unit 11)",
    [
      text("**Binomials** are fixed pairs of words joined by *and*, *or* or *but*. The **order is fixed**: we say *pros and cons*, not *cons and pros*."),
      table("Common pairs", ["Pair", "Meaning", "Example"], [
        ["sooner or later", "eventually", "Sooner or later, you'll have to decide."],
        ["pros and cons", "advantages and disadvantages", "Let's list the pros and cons."],
        ["sink or swim", "succeed or fail without help", "It was sink or swim on my first day."],
        ["wait and see", "be patient and see what happens", "We'll just have to wait and see."],
        ["far and wide", "in many places", "News spread far and wide."],
        ["give and take", "compromise", "A good marriage needs give and take."],
        ["once and for all", "finally and completely", "Let's settle this once and for all."],
        ["hit and miss", "sometimes good, sometimes not", "The service here is hit and miss."],
        ["short and sweet", "brief and pleasant", "Let's keep this short and sweet."],
        ["by and large", "generally", "By and large, the plan was successful."],
        ["ins and outs", "the details", "She knows the ins and outs of the law."],
      ]),
    ],
    [
      match("Match the pair with its meaning.", [["sooner or later", "eventually"], ["pros and cons", "advantages and disadvantages"], ["give and take", "compromise"], ["by and large", "generally"], ["hit and miss", "sometimes good, sometimes not"]], "Learn each pair as one unit."),
      mc("The service here is ___: sometimes it's excellent, sometimes it's terrible.", ["hit and miss", "short and sweet", "far and wide"], 0, "Hit and miss = inconsistent."),
      fill("Let's settle this once and ___ .", ["for all"], "once and for all."),
      mist("Find the mistake.", ["We need to", "weigh the cons and pros", "of the plan."], 1, "pros and cons", "The order is fixed: pros and cons."),
      mc("“By and large” is closest in meaning to ___.", ["generally", "sometimes", "never"], 0, "By and large = generally."),
      sa("“We'll just have to wait and ___” (see what happens)", ["see"], "wait and see.", { hint: "s _ _" }),
    ]),

  U("upper-reading-have-you-wondered", "READING", "Reading: Have You Ever Wondered?", "Explanations and hypotheses", "CORE", 18, ["upper-reading-scholar-under-playground"],
    "Read short scientific explanations, identify cause and effect, and distinguish proven facts from theories.",
    ["reading", "science", "cause-effect", "hypothesis", "hedging"], "Popular science (Unit 11)",
    [
      text("Popular-science texts explain **cause and effect** in simple language. Distinguish **facts** (‘the eyes produce tears’) from **theories** (‘scientists believe’, ‘one theory suggests’).", "Reading strategy"),
      passage("Example", "Sound travels more slowly than light, so we see lightning before we hear thunder.", "Cause and effect"),
      list("Guided practice", ["Cause → sound is slower than light.", "Effect → we see lightning first.", "This is a fact, not a theory."]),
    ],
    [
      mc("Why does the sky look blue?", ["Shorter blue waves are scattered more than red waves.", "It reflects the sea.", "Clouds are blue."], 0, "Explanation in paragraph 1.", WONDER),
      mc("What causes onions to make us cry?", ["a gas that irritates the eyes", "the smell", "the colour"], 0, "Paragraph 2.", WONDER),
      mc("What do scientists believe about goosebumps?", ["They once helped our ancestors keep warm or look bigger.", "They are caused by hunger.", "They are always caused by fear."], 0, "The verb ‘believe’ shows a theory.", WONDER),
      mc("What is said about why time seems to pass faster with age?", ["Nobody knows for certain.", "It is proven.", "It is a myth."], 0, "“Nobody knows for certain.”", WONDER),
      mc("Which words show that the last explanation is a theory?", ["one theory suggests, if that is true", "because, therefore", "always, never"], 0, "Hedging language.", WONDER),
      tf("All four explanations are presented as completely certain.", false, "The last one is a theory, and the third uses ‘scientists believe’.", WONDER),
    ]),

  U("upper-reading-someone-should-have-stopped", "READING", "Reading: Someone Should Have Stopped Him!", "Narrative with past modals", "CORE", 16, ["upper-reading-have-you-wondered"],
    "Identify past modals of criticism and speculation in a narrative and the tone created.",
    ["reading", "narrative", "past-modals", "humour", "tone"], "Someone should have stopped him (Unit 11)",
    [
      text("Different characters react differently to one event. Group their **comments** and identify the **modal forms** they use. Then decide the story's **tone** (comic, serious, tense).", "Reading strategy"),
      passage("Example", "“She should have taken a map,” said one. “She can't have known the way,” said another.", "Criticism and speculation"),
      list("Guided practice", ["should have → criticism.", "can't have → strong negative deduction.", "Tone → concerned chatter."]),
    ],
    [
      mc("What did Drew decide to do?", ["cross the river in a bathtub", "swim across", "build a bridge"], 0, "“cross the river in a bathtub”.", DREW),
      mc("What did the neighbour think Drew should have done?", ["told his parents", "brought a map", "asked the teacher"], 0, "“He should have told his parents.”", DREW),
      mc("What does “He needn't have taken the sandwiches” criticise?", ["an unnecessary action", "a dangerous action", "a rude action"], 0, "needn't have = unnecessary.", DREW),
      mc("What does “Somebody must have seen him build it” express?", ["a strong deduction", "a regret", "a wish"], 0, "must have = almost certain.", DREW),
      mc("What is Drew's final comment?", ["He wishes he had brought a second sandwich.", "He apologises.", "He is angry."], 0, "“If only I had brought a second sandwich.”", DREW),
      mc("What is the tone of the story?", ["humorous", "tragic", "frightening"], 0, "The ending is comic.", DREW),
    ]),

  U("upper-writing-narrative-linkers", "WRITING", "Narrative Writing (2): Linking Words and Expressions", "Cohesion in narrative", "CHALLENGING", 20, ["upper-writing-early-memory", "upper-grammar-conditionals-hypothesising"],
    "Use time sequencers and result, reason and contrast linkers to make narrative writing cohesive.",
    ["writing", "narrative", "linkers", "cohesion", "sequencers"], "Narrative writing 2 (Unit 11)",
    [
      text("Cohesive narrative depends on **linking words** that show **sequence, reason, result and contrast**. They guide the reader through the story and stop it from sounding like a **list of events**.", "Explanation"),
      table("Linkers for narrative", ["Function", "Examples"], [
        ["Time sequence", "at first · as soon as · while · meanwhile · by the time · eventually · in the end"],
        ["Reason", "because · as · since · owing to · so that"],
        ["Result", "so · therefore · as a result · with the result that"],
        ["Contrast", "but · however · despite · although · even so"],
        ["Purpose", "in order to · so as to · so that"],
      ]),
      annotated("Before and after", [["Before", "She missed the train. She was late. She ran. She got there. The meeting had finished."], ["After", "As soon as she realised she had missed the train, she ran to the office in order to arrive on time; however, by the time she got there, the meeting had already finished."]]),
      tip("Do not begin every sentence with the same linker. Vary position: Eventually, … / … , however, … / Despite …", "Variety"),
    ],
    [
      mc("___ she got to the station, the train had left.", ["By the time", "Because of", "Although"], 0, "By the time + Past Simple, Past Perfect."),
      mc("He left early ___ he could catch the last bus.", ["so that", "in spite of", "meanwhile"], 0, "so that = purpose."),
      mist("Find the mistake.", ["Despite", "it was raining,", "we went out."], 0, "Although", "Despite + noun/-ing; although + clause."),
      fill("___ the storm, the flight was cancelled. (because of)", ["Owing to"], "Owing to + noun."),
      match("Function?", [["meanwhile", "time"], ["as a result", "result"], ["even so", "contrast"], ["in order to", "purpose"]], "Classify the linkers."),
      order("Put the words in the correct order.", ["As", "soon", "as", "she", "arrived,", "she", "phoned", "her", "mother."], "word", "Time clause + main clause."),
    ]),

  // ============================================================ UNIT 12
  U("upper-grammar-articles-determiners", "GRAMMAR", "Articles and Determiners: a/an, the, Zero Article, all, whole, each, every, both, neither, either, none", "Articles and determiners", "CHALLENGING", 20, ["upper-grammar-conditionals-hypothesising"],
    "Use articles and determiners of quantity accurately in academic contexts.",
    ["grammar", "articles", "determiners", "quantifying-determiners", "academic-writing"], "Articles and determiners (Unit 12)",
    [
      text("Articles show whether a noun is **known** or **new**; **determiners** show **how many** or **which**. Errors here are common even at high levels.", "Explanation"),
      table("Articles", ["Article", "Use", "Example"], [
        ["a / an", "first mention; one of many; jobs", "She is a lawyer. I saw an accident."],
        ["the", "known / unique / defined", "The accident was serious. The moon is bright."],
        ["zero", "general plural or uncountable", "Museums are important. Time is valuable."],
        ["the + adjective", "a group of people", "the poor, the elderly, the rich"],
        ["the + nationality", "a nation as a whole", "the Omanis, the French"],
      ]),
      table("Determiners of quantity", ["Determiner", "Use", "Example"], [
        ["all + plural / uncountable", "the whole group (generalisation)", "All students must register. All the students in this class …"],
        ["whole + singular", "complete", "the whole day = all day"],
        ["each / every + singular", "individually / in general", "Each student has a locker. Every student must register."],
        ["both + plural (2)", "the two together", "Both answers are correct."],
        ["neither / either + singular (2)", "not one, one or the other", "Neither answer is correct. Either answer is acceptable."],
        ["none of + plural", "not one", "None of the answers was / were correct."],
      ]),
      compare("Errors", [["The life is difficult.", "Life is difficult.", "General: zero article."], ["Every students must attend.", "Every student must attend. / All students must attend.", "Every + singular."], ["I spent all the day.", "I spent the whole day. / I spent all day.", "the whole + singular."]]),
    ],
    [
      mc("___ students must register before Friday.", ["All", "Every", "Whole"], 0, "All + plural."),
      mc("___ student has a locker. (individually)", ["Each", "All", "Both"], 0, "Each + singular."),
      mist("Find the mistake.", ["The life", "is difficult for", "many people."], 0, "Life", "General: zero article."),
      fill("I spent the ___ day working on this essay. (complete)", ["whole"], "the whole day."),
      match("Which determiner?", [["not one of the two", "neither"], ["one or the other of two", "either"], ["the two together", "both"], ["not one of many", "none"]], "Match the meaning."),
      mc("___ of the answers was correct.", ["None", "Every", "Whole"], 0, "None of + plural."),
    ]),

  U("upper-vocab-life-time-expressions", "VOCABULARY", "Expressions with Life and Time", "Idiomatic expressions", "CORE", 14, ["upper-vocab-word-pairs"],
    "Use common idiomatic expressions with life and time.",
    ["vocabulary", "idioms", "life", "time", "expressions", "listening-support"], "Life and time expressions (Unit 12)",
    [
      text("Expressions with **life** and **time** are frequent in speech and in writing. Learn them as **fixed phrases**."),
      table("Time", ["Expression", "Meaning", "Example"], [
        ["take your time", "do not hurry", "Take your time; there's no rush."],
        ["kill time", "do something while waiting", "I read a magazine to kill time."],
        ["it's high time", "it should have happened already", "It's high time we started."],
        ["stand the test of time", "remain good over many years", "Her novels have stood the test of time."],
        ["in the nick of time", "just before it is too late", "The firefighters arrived in the nick of time."],
        ["for the time being", "temporarily", "For the time being, we'll use the old office."],
        ["no time to lose", "must act fast", "There's no time to lose."],
        ["third time lucky", "success after two failures", "Third time lucky: I passed!"],
        ["dead on time", "exactly on time", "The train arrived dead on time."],
      ]),
      table("Life", ["Expression", "Meaning", "Example"], [["get a life", "stop being boring / find interesting activities", "Stop complaining and get a life!"], ["come to life", "become active or interesting", "The city comes to life at night."], ["that's life", "you must accept it", "We lost; that's life."], ["a cushy life", "an easy, comfortable life", "He has a cushy life."]]),
    ],
    [
      match("Match the expression with its meaning.", [["in the nick of time", "just before it is too late"], ["for the time being", "temporarily"], ["kill time", "pass time while waiting"], ["stand the test of time", "remain good for years"], ["take your time", "do not hurry"]], "Learn each as a chunk."),
      mc("The firefighters arrived ___; another minute and the house would have been lost.", ["in the nick of time", "for the time being", "dead time"], 0, "In the nick of time."),
      fill("It's high ___ we started the meeting.", ["time"], "It's high time + Past Simple."),
      mist("Find the mistake.", ["She has", "a cushy live", "in the countryside."], 1, "life", "Spelling: a cushy life."),
      mc("Which expression means ‘temporarily’?", ["for the time being", "third time lucky", "dead on time"], 0, "For the time being."),
      sa("The city comes to ___ at night. (becomes active)", ["life"], "come to life.", { hint: "l _ _ e" }),
    ]),

  U("upper-reading-body-clock", "READING", "Reading: The Body Clock", "Academic article", "CHALLENGING", 18, ["upper-reading-someone-should-have-stopped"],
    "Read an academic-style article on circadian rhythms, interpret physiological data and identify topic sentences and supporting details.",
    ["reading", "science", "academic-text", "topic-sentence", "data"], "Biological time (Unit 12)",
    [
      text("Academic articles are organised by **paragraph topic sentences**. Read the **first sentence of each paragraph** to get the outline, then read the details. Note **technical terms** and their **definitions**.", "Reading strategy"),
      passage("Example", "Vitamin D is produced when sunlight reaches the skin. It helps the body absorb calcium, which is essential for strong bones.", "Definition + function"),
      list("Guided practice", ["Topic sentence → vitamin D is produced by sunlight.", "Detail → helps absorb calcium.", "Purpose → strong bones."]),
    ],
    [
      mc("What does ‘circadian’ mean, according to the text?", ["around a day", "around a year", "at night"], 0, "“from the Latin for ‘around a day’”.", BODY_CLOCK),
      mc("Which of these does the body clock NOT regulate?", ["eye colour", "sleepiness", "hunger"], 0, "Sleepiness, hunger and temperature are mentioned.", BODY_CLOCK),
      mc("What happens when darkness falls?", ["The brain produces melatonin.", "Melatonin production stops.", "The clock breaks."], 0, "Melatonin helps prepare for sleep.", BODY_CLOCK),
      mc("Why may bright screens at night be a problem?", ["They may make it harder to fall asleep.", "They cause hunger.", "They heat the room."], 0, "Light stops melatonin production.", BODY_CLOCK),
      mc("What are ‘larks’?", ["people who wake early and feel best in the morning", "people who sleep late", "people who never sleep"], 0, "Larks vs owls.", BODY_CLOCK),
      tf("The text says that the difference between larks and owls is entirely learned.", false, "“partly inherited”.", BODY_CLOCK),
    ]),

  U("upper-writing-improving-style-cohesion", "WRITING", "Improving Style and Cohesion: Architectural Profile", "Style and register", "CHALLENGING", 22, ["upper-writing-emphasis-cleft", "upper-writing-narrative-linkers"],
    "Rewrite a repetitive, informal text into an academic profile using varied structures, stronger vocabulary and clause reduction.",
    ["writing", "style", "cohesion", "register", "rewriting", "participle-clauses"], "Improving style and cohesion (Unit 12)",
    [
      text("Improving style means **replacing** repetitive, vague or informal language with **precise, varied and cohesive** writing. Follow four steps.", "Explanation"),
      table("Four-step rewrite", ["Step", "What to do", "Example"], [
        ["1 Remove repetition", "replace repeated words with pronouns or synonyms", "the library … it … the building"],
        ["2 Upgrade vocabulary", "replace basic verbs/adjectives", "made → designed · big → enormous · important → highly significant"],
        ["3 Combine sentences", "relative and participle clauses", "The library, designed in 1998, …"],
        ["4 Improve linking", "use cohesive devices", "Moreover, … · Consequently, …"],
      ]),
      passage("Original (weak)", ARCHITECT, "Repetitive and vague"),
      annotated("Improved version", [["Opening", "Designed in 1998 by a Lisbon-born architect, the Glass Library is one of the city's most significant landmarks."], ["Detail", "Containing dozens of reading rooms and an extensive garden, it attracts thousands of visitors daily."], ["Effect", "Consequently, it has become a symbol of the city's commitment to learning."]]),
    ],
    [
      mc("Which sentence has stronger vocabulary?", ["The library is a highly significant landmark.", "The library is a very big thing.", "The library is really good."], 0, "Precise, formal vocabulary."),
      mc("Which rewrite removes the repetition best?", ["The library, which is old, big and famous, attracts many visitors.", "The library is old. The library is big. The library is famous.", "The library is old and the library is big and it is famous."], 0, "Combining ideas with a relative clause avoids repeating the subject."),
      fill("___ (design) in 1998, the library is one of the city's landmarks.", ["Designed"], "Passive participle clause."),
      match("Basic → precise.", [["made", "designed"], ["big", "enormous"], ["important", "significant"]], "Upgrade the vocabulary."),
      mc("Which linker suits ‘…; ___, it has become a symbol of the city’?", ["consequently", "although", "unless"], 0, "Consequently = as a result."),
      order("Put the improvement steps in order.", ["Remove repetition", "Upgrade vocabulary", "Combine sentences", "Improve linking"], "sentence", "The four-step routine."),
    ]),

  U("upper-writing-final-exam-essay", "WRITING", "Final Exam Writing: A Formal Academic Essay (200–250 Words)", "Final essay", "CHALLENGING", 26, ["upper-writing-improving-style-cohesion", "upper-writing-in-class-2-preparation"],
    "Produce a polished 200–250 word academic essay using the structure, register and accuracy techniques of the whole course.",
    ["writing", "essay", "final-exam", "academic-writing", "assessment-practice", "250-words"], "Final examination essay (Units 1-12)",
    [
      text("Section D of the final examination is a **formal academic essay of 200–250 words**. It tests everything you have practised: **structure**, **register**, **range of grammar and vocabulary**, **cohesion** and **accuracy**.", "Explanation"),
      table("Marking areas", ["Area", "What examiners look for"], [["Task achievement", "answers the question; clear position; relevant ideas"], ["Organisation", "introduction, body paragraphs with topic sentences, conclusion; linkers"], ["Language range", "varied structures (passive, relative/participle clauses, conditionals, emphasis); precise vocabulary"], ["Accuracy", "tenses, articles, prepositions, spelling, punctuation"]]),
      table("50-minute plan", ["Stage", "Minutes", "Tasks"], [["Plan", "7", "position, 2–3 main points, examples"], ["Write", "33", "250 words in four paragraphs"], ["Check", "10", "correction codes: T, Gr, WW, WO, Sp, P; word count"]]),
      annotated("Model plan for ‘Should young people live with their parents until they marry?’", [["Intro", "Background + thesis: Although independence is valuable, living at home can be a sensible choice."], ["Body 1", "Advantages: shared costs, family support."], ["Body 2", "Disadvantages: less privacy, slower independence; rebuttal."], ["Conclusion", "On balance, the arrangement is acceptable if rules are agreed."]]),
      tip("Use at least: one passive, one relative or participle clause, one conditional, one emphasis structure and three different linkers.", "Language range"),
    ],
    [
      order("Put the stages of the 50-minute routine in order.", ["Plan", "Write", "Check"], "sentence", "Plan, write, check."),
      mc("Which is the best thesis for the model topic?", ["Although independence is valuable, living at home can be a sensible choice for young people.", "This essay is about young people.", "I like my family."], 0, "Clear, balanced, arguable."),
      mist("Find the mistake (register).", ["Living at home", "is a big deal", "for many families."], 1, "is a significant issue", "Avoid informal expressions."),
      fill("If rules ___ (agree) in advance, the arrangement can work well.", ["are agreed"], "First conditional with passive."),
      mc("Which structure adds emphasis?", ["What makes it difficult is the lack of privacy.", "It is difficult.", "It is very difficult."], 0, "What-cleft."),
      mc("What word count does Section D require?", ["200–250 words", "50–100 words", "500–600 words"], 0, "200–250 words."),
    ]),

  U("upper-grammar-final-review-units-1-12", "GRAMMAR", "Final Review: Grammar and Vocabulary for Units 1–12", "Assessment review", "CHALLENGING", 26, ["upper-grammar-articles-determiners", "upper-vocab-life-time-expressions", "upper-grammar-midterm-review-units-1-7"],
    "Consolidate the whole course with mixed grammar, vocabulary and sentence-transformation practice in final-exam style.",
    ["grammar", "review", "assessment-practice", "final-exam", "revision"], "Final review (Units 1-12)",
    [
      text("The final examination covers **Units 1–12**: **Section A** Grammar and syntax, **Section B** Academic vocabulary and phrasal verbs, **Section C** Reading comprehension, **Section D** Essay. Use this lesson to test yourself on mixed items.", "Explanation"),
      table("Revision map", ["Units", "Key grammar", "Key vocabulary"], [["1–3", "tense system, present perfect, narrative tenses", "compounds; make/do; books and films"], ["4–6", "questions, future forms, quantifiers", "antonyms; take/put; variable stress"], ["7–9", "modals; participle clauses; habits", "get; extreme adjectives; homophones"], ["10–12", "past modals; wish/conditionals; articles", "body idioms; word pairs; life and time"]]),
      tip("Sentence transformation: keep the meaning, use the key word, and check the grammar of the whole new sentence.", "Strategy"),
    ],
    [
      mc("If I ___ you, I would accept the offer.", ["were", "am", "will be"], 0, "Second conditional: If I were you."),
      mc("By the time we arrived, the film ___.", ["had started", "started", "has started"], 0, "Earlier past event."),
      mc("She ___ have known; nobody told her. (deduction)", ["can't", "mustn't", "shouldn't"], 0, "can't have known."),
      mc("I wish I ___ harder for the exam last year.", ["had studied", "studied", "would study"], 0, "Past regret."),
      mc("We ___ at 6 a.m. every day when I was young. (repeated action)", ["would get up", "were getting up", "have got up"], 0, "would for past habit."),
      mc("___ of the two suggestions was practical; both were unrealistic.", ["Neither", "Either", "Every"], 0, "Neither = not one of two."),
      mc("Prices have ___ sharply this year. (verb: go up)", ["increased", "an increase", "the increase"], 0, "Verb after have."),
      mc("The soup is absolutely ___; don't touch it.", ["boiling", "hot", "warm"], 0, "Extreme adjectives go with absolutely."),
      mc("Sooner ___ later, you'll have to decide.", ["or", "and", "but"], 0, "sooner or later."),
      mc("The firefighters arrived in the ___ of time.", ["nick", "tick", "point"], 0, "in the nick of time."),
    ]),
];

void [compare, structure, tip, annotated, passage, tf, sa, text, list, table];
