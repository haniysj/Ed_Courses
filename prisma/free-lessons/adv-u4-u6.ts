import { annotated, compare, fill, list, match, mc, mist, order, passage, sa, structure, table, text, tf, tip, type SeedLesson } from "./dsl";
import { A } from "./adv-common";

// Advanced, Units 4-6. Topics follow the academy's syllabus; every text is ORIGINAL (people, groups and events are fictional unless stated as widely known, hedged fact).

const MYSTIC = "THE NOVELIST AND THE CONJURER\n\n(A fictional comparative biography)\n\nIn the 1920s, two famous men became unlikely friends. Edmund Vale was a best-selling novelist who wrote brilliantly logical detective stories, yet in private he believed passionately in spirits and messages from the dead. Leon Marek was a stage magician whose fame rested on escaping from locked chests, and who spent his spare time exposing fraudulent mediums.\n\nOn the face of it, they had little in common. Vale was a trusting man who wanted to be convinced; Marek was a sceptic who wanted proof. Yet they enjoyed each other's company for years, exchanging letters and attending each other's shows. Vale, who could not bring himself to accept that anything he had seen was a trick, must have been disappointed when Marek explained how a supposedly supernatural effect was done; Marek, for his part, could not have been more polite about it.\n\nThe friendship did not survive a particular séance. Vale's wife, who might have been sincere, produced messages that Marek judged to be fake, and Marek said so. Vale never forgave him. Each, it seems, saw the other as a man who could not, or would not, see the obvious. What is certain is that neither of them would have wished to be proved wrong.";
const WORLDS = "A DIFFERENT KIND OF TOURISM\n\n(A fictional feature)\n\nWhen six visitors from a remote mountain community arrived in a European capital for a two-week exchange programme, journalists expected a story about culture shock. What they got was something more interesting: a story about how the hosts reacted.\n\nThe visitors, whom the press nicknamed “the Highland Six”, were unimpressed by skyscrapers but fascinated by the fact that nobody in the city seemed to know their neighbours. “In our village,” said the eldest, a woman in her sixties, “if you don't greet your neighbour, they will ask what is wrong. Here, if you greet a stranger, they ask what you want.”\n\nThe hosts, for their part, found the visitors' habits both charming and baffling. Time, for example, was treated less as a deadline than as a companion: meetings began when everyone had arrived, and did so without apology. Several of the hosts, who had never questioned their own relationship with the clock, admitted that they had begun to wonder whether it was the visitors who were behind, or themselves who were the ones in a hurry.";
const WAR = "WHEN GOOD COMES FROM BAD\n\nWar is rightly remembered for its destruction, but historians also note that conflict has often accelerated developments that might otherwise have taken decades. The First World War (1914–1918) is a frequently cited example.\n\nMedicine changed rapidly. The scale of casualties forced doctors to improve the storage and transport of blood, which is widely regarded as an early step towards modern blood banks. Surgeons treating severe facial injuries developed new reconstructive techniques, laying the foundations of what would later be called plastic surgery. Standardised methods for treating wounds and preventing infection also spread quickly.\n\nSocial change was equally striking. With so many men away at the front, women took on work in factories, offices and transport that had previously been closed to them. Their contribution is often credited with strengthening the case for women's right to vote, which was granted in several countries in the years that followed. It would be wrong, however, to suggest that these gains justified the war. As one historian has put it, progress was the by-product of suffering, never its purpose.";
const EMAIL_WEAK = "Hi,\n\nI'm writing because my flight was a total disaster and I want my money back. Your staff were rubbish. Sort it out ASAP.\n\nThanks";

export const ADV_U4_U6: SeedLesson[] = [
  // ============================================================ UNIT 4
  A("adv-grammar-modals-speculation", "GRAMMAR", "Modal Verbs of Speculation: Present, Continuous and Past", "Speculation", "CHALLENGING", 20, ["adv-grammar-verb-patterns"],
    "Speculate about present and past situations with the correct modal form and degree of certainty.",
    ["grammar", "modal-verbs", "speculation", "deduction", "past-modals"], "Modals of speculation (Unit 4)",
    [
      text("Speculation uses **modal + infinitive** (present), **modal + be + -ing** (in progress now) and **modal + have + participle** (past). The modal expresses **how sure** the speaker is.", "Explanation"),
      table("Degrees of certainty", ["Certainty", "Present / future", "Continuous", "Past"], [
        ["almost certain (yes)", "must be", "must be working", "must have been"],
        ["probable", "should be / ought to be", "should be arriving", "should have arrived"],
        ["possible", "may / might / could be", "might be sleeping", "might / could have been"],
        ["almost certain (no)", "can't be / couldn't be", "can't be working", "can't have been"],
        ["possible (no)", "may not / might not be", "might not be listening", "might not have seen"],
      ]),
      list("Subtle points", ["**Can't** and **couldn't** are used for negative deduction; **mustn't** is not (mustn't = prohibition).", "**Could have** can express a **missed possibility**: You could have told me (but you didn't). Compare: He could have been at home (speculation).", "**Might have** and **could have** show possibility; **may have** is more formal.", "**Will** and **would** can also express deduction: That'll be the postman. (present) · That would have been the postman. (past)"]),
      compare("Errors", [["He mustn't have known.", "He can't have known.", "Negative deduction."], ["She must been ill.", "She must have been ill.", "Have is required."], ["They might be arrive.", "They might be arriving. / They might arrive.", "Choose a valid form."]]),
    ],
    [
      mc("He hasn't answered his phone all day; he ___ in a meeting.", ["must be", "can't be", "should have been"], 0, "Strong positive deduction."),
      mc("She ___ have seen us; she was abroad at the time.", ["can't", "must", "needn't"], 0, "Strong negative deduction."),
      mist("Find the mistake.", ["They", "mustn't have", "received the invitation."], 1, "can't have", "The negative of must have is can't have."),
      fill("Listen! Somebody ___ (might / knock) at the door.", [["might be knocking"]], "Continuous: might be + -ing."),
      match("Meaning?", [["You could have told me.", "criticism of a missed chance"], ["He could have been at home.", "past possibility"], ["That'll be the postman.", "present deduction"]], "Match the meaning."),
      order("Put the words in the correct order.", ["She", "can't", "have", "been", "working", "at", "that", "hour."], "word", "can't have been + -ing."),
    ]),

  A("adv-grammar-modal-meanings", "GRAMMAR", "Other Meanings of Modals: Ability, Permission, Obligation, Habit and Refusal", "Modal functions", "CHALLENGING", 16, ["adv-grammar-modals-speculation"],
    "Use modal and semi-modal verbs for ability, permission, obligation, habit, refusal, advice and criticism.",
    ["grammar", "modal-verbs", "ability", "obligation", "permission", "refusal"], "Modal meanings (Unit 4)",
    [
      text("Modals do far more than speculate. Their **function** depends on context.", "Explanation"),
      table("Functions", ["Function", "Forms", "Example"], [
        ["general ability", "can / could / be able to", "She could swim at four."],
        ["specific past success", "was able to / managed to (not could)", "I was able to fix it. (I succeeded on one occasion)"],
        ["permission", "may / can / be allowed to", "Passengers may leave their seats."],
        ["obligation", "must / have to / need to / be required to", "All applicants are required to submit a portfolio."],
        ["no obligation", "needn't / don't have to", "You needn't come."],
        ["habit (typical behaviour)", "will / would", "He will sit for hours staring at the sea."],
        ["refusal", "won't / wouldn't", "The engine won't start. She wouldn't listen."],
        ["advice / criticism", "should / ought to / had better", "You ought to apologise."],
      ]),
      compare("Errors", [["Yesterday I could finish the report (one success).", "Yesterday I was able to finish the report.", "Specific past success: was able to / managed to."], ["You mustn't come; it's optional.", "You needn't come; it's optional.", "Mustn't = forbidden."]]),
    ],
    [
      mc("The engine ___ start this morning, however many times I tried.", ["wouldn't", "shouldn't", "needn't"], 0, "Refusal in the past: wouldn't."),
      mc("Yesterday I ___ finish the whole report before noon. (a single success)", ["was able to", "could", "may"], 0, "Specific success: was able to."),
      mist("Find the mistake.", ["You", "mustn't come", "if you prefer not to; it's optional."], 1, "needn't come", "Mustn't means prohibited."),
      fill("He ___ sit for hours staring at the sea. (typical behaviour)", ["will"], "Will expresses typical behaviour."),
      match("Function?", [["She wouldn't listen.", "refusal"], ["Passengers may leave their seats.", "permission"], ["You ought to apologise.", "advice"], ["I managed to fix it.", "specific success"]], "Match the function."),
      order("Put the words in the correct order.", ["All", "applicants", "are", "required", "to", "submit", "a", "portfolio."], "word", "Obligation: be required to."),
    ]),

  A("adv-vocab-idiomatic-collocations", "VOCABULARY", "Idiomatic Collocations: Adjective + Noun", "Collocations", "CHALLENGING", 14, ["adv-vocab-phrasal-up-down"],
    "Use idiomatic adjective + noun collocations such as a level playing field, a foregone conclusion and a mixed blessing.",
    ["vocabulary", "collocations", "idioms", "adjective-noun", "expressions"], "Idiomatic collocations (Unit 4)",
    [
      text("These **fixed combinations** are common in journalism and academic argument. Their meaning is **not obvious** from the parts."),
      table("Idiomatic collocations", ["Expression", "Meaning", "Example"], [
        ["a level playing field", "a fair situation for all competitors", "Small firms want a level playing field."],
        ["a foregone conclusion", "a result that is certain in advance", "The result was a foregone conclusion."],
        ["a mixed blessing", "something with both good and bad effects", "Fame is a mixed blessing."],
        ["a raw deal", "unfair treatment", "Part-time staff got a raw deal."],
        ["a saving grace", "a good quality that redeems something bad", "The food was poor; the view was its saving grace."],
        ["wishful thinking", "believing something because you want it to be true", "That is wishful thinking."],
        ["a lost cause", "something that cannot succeed", "Saving the old cinema seemed a lost cause."],
        ["a vicious circle", "a situation where one problem causes another that worsens the first", "Poverty and poor health form a vicious circle."],
      ]),
    ],
    [
      match("Match the expression with its meaning.", [["a level playing field", "a fair situation"], ["a foregone conclusion", "a certain result"], ["a mixed blessing", "good and bad together"], ["a raw deal", "unfair treatment"], ["wishful thinking", "believing what you want"]], "Learn the collocations."),
      mc("The match was a ___ ; everyone knew who would win.", ["foregone conclusion", "lost cause", "level playing field"], 0, "A certain result."),
      fill("The food was mediocre; the view was its ___ grace.", ["saving"], "a saving grace."),
      mist("Find the mistake.", ["Fame is", "a mixed benefit", "for many people."], 1, "a mixed blessing", "The fixed expression is a mixed blessing."),
      mc("“Small firms want a level playing field” means they want ___.", ["fair competition", "lower prices", "bigger offices"], 0, "Fairness."),
      sa("Believing something because you want it to be true = ___ thinking", ["wishful"], "wishful thinking.", { hint: "w _ _ _ _ _ l" }),
    ]),

  A("adv-vocab-deception-synonyms", "VOCABULARY", "The Vocabulary of Deception: Synonyms and Nuance", "Synonyms of deception", "CHALLENGING", 14, ["adv-vocab-idiomatic-collocations"],
    "Distinguish verbs and nouns of deception by degree, intention and register.",
    ["vocabulary", "deception", "synonyms", "nuance", "register"], "Synonyms of deception (Unit 4)",
    [
      text("English has many words for **deceiving**. They differ by **intention**, **degree of seriousness** and **register**."),
      table("Verbs", ["Verb", "Meaning", "Example"], [
        ["deceive", "make someone believe what is false, usually deliberately", "He deceived investors about the company's profits."],
        ["delude", "make someone (or yourself) believe something untrue; often self-deception", "Don't delude yourself: it will not be easy."],
        ["mislead", "give a wrong impression, not always intentionally", "The label was misleading."],
        ["trick / dupe / hoodwink", "deceive by cunning; informal to literary", "They were duped into paying twice."],
        ["con", "informal: trick for money", "He conned her out of her savings."],
        ["fool", "make someone believe something untrue, often playfully", "You almost fooled me."],
      ]),
      table("Nouns", ["Noun", "Meaning"], [["hoax", "a deliberate trick, often public"], ["sham", "something that is not what it pretends to be"], ["scam", "a dishonest scheme to obtain money"], ["illusion", "a false idea or an appearance that is not real"], ["fraud", "criminal deception for gain"]]),
      tip("Delude and self-deception go together (delude yourself). Mislead may be unintentional; deceive is usually intentional.", "Nuance"),
    ],
    [
      match("Match the word with its meaning.", [["hoax", "a deliberate public trick"], ["scam", "a dishonest scheme for money"], ["sham", "something not what it pretends to be"], ["delude", "make yourself believe something untrue"], ["mislead", "give a wrong impression"]], "Learn the nuance."),
      mc("Don't ___ yourself; the project will not be easy.", ["delude", "con", "dupe"], 0, "Delude yourself."),
      mc("The label was ___, although the company did not intend it.", ["misleading", "deceiving", "conning"], 0, "Mislead can be unintentional."),
      mist("Find the mistake.", ["He", "delighted investors", "about the company's profits."], 1, "deceived", "Deceived = tricked."),
      fill("They were ___ (dupe) into paying twice for the same service.", ["duped"], "dupe = trick."),
      sa("A dishonest scheme to get money is a ___", ["scam"], "scam.", { hint: "s _ _ m" }),
    ]),

  A("adv-reading-novelist-and-conjurer", "READING", "Reading: The Novelist and the Conjurer", "Comparative biography", "CHALLENGING", 20, ["adv-reading-limits-to-growth"],
    "Compare two people, identify speculation and hedging, and infer attitudes.",
    ["reading", "biography", "comparison", "speculation", "attitude"], "The mystic and the sceptic (Unit 4)",
    [
      text("A **comparative biography** sets two lives side by side. Make a **two-column chart** (similarities and differences), then look at how the writer uses **modals of speculation** to fill gaps in the evidence.", "Reading strategy"),
      passage("Example", "Neither man left a written account of the argument, so historians can only guess: it might have been about money, or it may simply have been pride.", "Speculation because evidence is missing"),
      list("Guided practice", ["Gap → no written account.", "Speculation → might have been / may have been.", "Attitude → cautious."]),
    ],
    [
      mc("What was Edmund Vale famous for?", ["logical detective stories", "stage magic", "political speeches"], 0, "Best-selling detective novels.", MYSTIC),
      mc("What contrast is drawn between the two men?", ["Vale wanted to be convinced; Marek wanted proof.", "Both were sceptics.", "Both were mediums."], 0, "“a trusting man… a sceptic”.", MYSTIC),
      mc("What does “must have been disappointed” express?", ["a deduction by the writer", "a certain fact from a letter", "a regret"], 0, "must have = strong deduction.", MYSTIC),
      mc("What caused the end of the friendship?", ["a séance and Marek's judgement that the messages were fake", "a quarrel about money", "a book review"], 0, "Paragraph 3.", MYSTIC),
      mc("What does “might have been sincere” suggest about Vale's wife?", ["The writer cannot be sure.", "She was lying.", "She was certainly honest."], 0, "might have = possibility.", MYSTIC),
      tf("The writer says that each man would have accepted being proved wrong.", false, "“neither of them would have wished to be proved wrong”.", MYSTIC),
    ]),

  A("adv-writing-formal-email-opinion", "WRITING", "A Formal Email and an Opinion Essay", "Formal register", "CHALLENGING", 22, ["adv-vocab-deception-synonyms", "adv-writing-in-class-1-preparation"],
    "Write formal emails and opinion essays in an appropriate register, including apologies, requests and a clear personal stance.",
    ["writing", "formal-email", "opinion-essay", "register", "apology"], "Formal email and opinion essay (Unit 4, p. 114)",
    [
      text("**Formal register** is achieved through **structure**, **vocabulary** and **grammar** (passive, nominalisation, modal verbs), not only by avoiding contractions.", "Explanation"),
      passage("Weak email", EMAIL_WEAK, "What is wrong?"),
      table("From informal to formal", ["Informal", "Formal"], [["Hi,", "Dear Sir or Madam, / Dear Ms Rahman,"], ["I want my money back.", "I would appreciate a full refund of the fare."], ["Your staff were rubbish.", "I was disappointed by the standard of service I received."], ["Sort it out ASAP.", "I would be grateful for a response within seven days."], ["Thanks", "Yours faithfully / Yours sincerely,"]]),
      table("Useful language", ["Function", "Phrases"], [["Purpose", "I am writing to complain about / to enquire whether …"], ["Apology", "I would like to express my sincere regret that … · Please accept our apologies for …"], ["Request", "I would be grateful if you could … · Would you be so kind as to …"], ["Stance (essay)", "It is my firm belief that … · I am inclined to think that … · Personally, I take the view that …"]]),
      annotated("Model opinion paragraph", [["Position", "It is my firm belief that public transport should be free for students."], ["Reason", "Not only would this reduce traffic, but it would also give young people greater access to education."], ["Counter", "Admittedly, some argue that the cost would be unsustainable; nevertheless, the long-term benefits would outweigh it."]]),
    ],
    [
      mc("Which opening is appropriate for a formal email to an unknown person?", ["Dear Sir or Madam,", "Hi there,", "Hey,"], 0, "Formal salutation."),
      mist("Find the mistake (register).", ["Your staff", "were rubbish", "and unhelpful."], 1, "were unhelpful and impolite", "Avoid slang in formal writing."),
      fill("I would be ___ if you could send me a written reply.", ["grateful"], "I would be grateful if you could…"),
      match("Function?", [["I would like to express my sincere regret …", "apology"], ["I would be grateful if you could …", "request"], ["It is my firm belief that …", "stance"]], "Match the phrase with its function."),
      mc("Which ending suits ‘Dear Ms Rahman’?", ["Yours sincerely,", "Yours faithfully,", "Best,"], 0, "Known name: sincerely."),
      order("Put the words in the correct order.", ["I", "would", "appreciate", "a", "full", "refund", "of", "the", "fare."], "word", "Formal request."),
    ]),

  // ============================================================ UNIT 5
  A("adv-grammar-avoiding-repetition", "GRAMMAR", "Ways of Avoiding Repetition: Ellipsis, Reduced Infinitives and Substitution", "Cohesion", "CHALLENGING", 18, ["adv-grammar-modal-meanings"],
    "Avoid repetition by omitting words, using reduced infinitives and substituting words such as so, do so, one and that.",
    ["grammar", "ellipsis", "substitution", "cohesion", "reduced-infinitive"], "Ways of avoiding repetition (Unit 5)",
    [
      text("Good style avoids **repeating words** when the meaning is clear. English does this through **ellipsis** (omission), **substitution** and **reduced infinitives**.", "Explanation"),
      table("Techniques", ["Technique", "Example (full → reduced)"], [
        ["Ellipsis after and / but / or", "She opened the door and (she) walked in."],
        ["Ellipsis after an auxiliary", "I haven't finished, but Tom has (finished)."],
        ["Reduced infinitive (repeat only to)", "I'd love to (come). He didn't mean to (upset her)."],
        ["Substitution with so / not", "Will it rain? — I hope so. / I hope not."],
        ["Substitution with do so", "Anyone who wishes to leave may do so."],
        ["Substitution with one(s)", "I prefer the blue one."],
        ["Synonyms in context", "the car … the vehicle … the old banger"],
      ]),
      list("Rules", ["Omit a repeated subject only if the verbs are in **the same construction**.", "With **reduced infinitives**, keep **to** but omit the verb, unless the verb is **be**: I don't want to be late. — You needn't be. (not *You needn't*)", "**So** is used after believe, think, hope, expect, suppose; use **not** to negate: I hope not. (also I don't think so)", "Avoid **too much ellipsis** in formal writing where clarity matters."]),
      compare("Errors", [["I don't want to go, but she wants.", "I don't want to go, but she wants to.", "Reduced infinitive needs to."], ["Will she come? — I think not so.", "Will she come? — I don't think so.", "Correct negative substitution."]]),
    ],
    [
      mc("“Will it rain?” “I hope ___.”", ["not", "no", "not so"], 0, "hope not = I hope it won't."),
      mc("I don't want to go, but she wants ___.", ["to", "it", "so"], 0, "Reduced infinitive."),
      mist("Find the mistake.", ["Anyone who wishes to leave", "may to do so", "at any time."], 1, "may do so", "Modal + do so."),
      fill("Do you like these shoes? — I prefer the blue ___.", ["ones"], "one(s) substitution."),
      match("Technique?", [["I hope so.", "substitution with so"], ["I'd love to.", "reduced infinitive"], ["She has (finished).", "ellipsis after auxiliary"]], "Match the technique."),
      order("Put the words in the correct order.", ["Anyone", "who", "wishes", "to", "leave", "may", "do", "so."], "word", "do so replaces the repeated verb phrase."),
    ]),

  A("adv-vocab-nationalities-culture", "VOCABULARY", "Nationalities, Regions and Cultural Terminology", "Cultural vocabulary", "CORE", 12, ["adv-vocab-deception-synonyms"],
    "Use nationality words, demonyms and cultural terms accurately and respectfully.",
    ["vocabulary", "nationalities", "culture", "demonyms", "listening-support"], "Nationalities and cultural terminology (Unit 5)",
    [
      text("**Nationality words** follow patterns, but there are many exceptions. Use them **respectfully**, and prefer **precise cultural vocabulary** in academic writing."),
      table("Patterns", ["Pattern", "Examples"], [
        ["-an / -ian", "Omani, Egyptian, Brazilian, Norwegian, Italian"],
        ["-ish", "British, Spanish, Turkish, Polish, Danish"],
        ["-ese", "Chinese, Japanese, Portuguese, Lebanese (same form for singular and plural)"],
        ["-i", "Kuwaiti, Iraqi, Pakistani, Israeli"],
        ["special", "French, Dutch, Swiss, Thai, Greek, Irish"],
      ]),
      table("Collective use", ["Use", "Example"], [["the + adjective (nation as a whole)", "the French, the Dutch, the Japanese"], ["-s plural", "the Omanis, the Egyptians"], ["a + noun (individual)", "an Omani, a Frenchwoman, a Swiss"]]),
      table("Cultural terms", ["Word", "Meaning"], [["custom / tradition", "an established habit / a belief passed down"], ["etiquette", "formal rules of polite behaviour"], ["taboo", "something forbidden by social convention"], ["stereotype", "a fixed, oversimplified idea about a group"], ["heritage", "cultural traditions and property inherited"], ["assimilate", "become part of a different culture"], ["culture shock", "confusion when living in an unfamiliar culture"]]),
    ],
    [
      match("Match the country with its nationality word.", [["Poland", "Polish"], ["Portugal", "Portuguese"], ["Iraq", "Iraqi"], ["Denmark", "Danish"]], "Learn the endings."),
      mc("The ___ are famous for their cycling culture.", ["Dutch", "Netherlands", "Hollandic"], 0, "Collective noun: the Dutch."),
      fill("Behaviour that a culture strictly forbids is a ___.", ["taboo"], "taboo."),
      mist("Find the mistake.", ["Many", "Japaneses", "visit the museum."], 1, "Japanese", "Japanese has no plural -s."),
      mc("A fixed, oversimplified idea about a group is a ___.", ["stereotype", "custom", "etiquette"], 0, "Stereotype."),
      sa("Formal rules of polite behaviour = ___", ["etiquette"], "etiquette.", { hint: "e _ _ _ _ _ _ _ e" }),
    ]),

  A("adv-reading-worlds-of-difference", "READING", "Reading: A Different Kind of Tourism", "Perspective and culture", "CHALLENGING", 18, ["adv-reading-novelist-and-conjurer"],
    "Analyse a feature article that reverses expectations, comparing two cultural viewpoints.",
    ["reading", "culture", "feature-article", "perspective", "irony"], "Worlds of difference (Unit 5)",
    [
      text("Some feature articles **reverse the expected angle**. Ask: **what did readers expect** and **what did the writer show instead**? Note the **contrast** between the **visitors' view** and the **hosts' view**.", "Reading strategy"),
      passage("Example", "Journalists expected the guests to be amazed by the city; instead, it was the residents who were amazed by the guests.", "Reversed expectation"),
      list("Guided practice", ["Expected → guests amazed.", "Actual → hosts amazed.", "Effect → invites reflection."]),
    ],
    [
      mc("What did journalists expect to write about?", ["culture shock", "sports results", "fashion"], 0, "“a story about culture shock”.", WORLDS),
      mc("What surprised the visitors most?", ["nobody knew their neighbours", "the size of buildings", "the food"], 0, "They were fascinated by the lack of neighbourliness.", WORLDS),
      mc("How did the elder describe greetings?", ["In the village silence is rude; here greeting a stranger arouses suspicion.", "Greetings are unimportant.", "Greetings are only for the young."], 0, "Her quotation.", WORLDS),
      mc("What was the visitors' attitude to time?", ["It was a companion rather than a deadline.", "It was a weapon.", "It was ignored completely."], 0, "“treated less as a deadline than as a companion”.", WORLDS),
      mc("What did several hosts admit?", ["They wondered whether they were the ones in a hurry.", "They wanted to move.", "They disliked the visitors."], 0, "Final sentence.", WORLDS),
      tf("The writer's main interest is how the visitors changed the hosts' thinking.", true, "“a story about how the hosts reacted”.", WORLDS),
    ]),

  A("adv-writing-comparing-two-countries", "WRITING", "Similarities and Differences: Comparing Two Countries", "Comparative essay", "CHALLENGING", 22, ["adv-grammar-avoiding-repetition", "adv-reading-worlds-of-difference"],
    "Write a balanced 200-word comparative essay using contrastive linkers, non-defining clauses and ellipsis.",
    ["writing", "comparison", "essay", "linkers", "contrast", "non-defining-clauses"], "Comparing two countries (Unit 5, p. 115)",
    [
      text("A comparative essay is organised **point by point** (topic by topic) or **block by block** (country by country). Use **comparative and contrastive linkers** to keep the comparison visible.", "Explanation"),
      table("Linkers", ["Function", "Examples"], [["Similarity", "similarly · likewise · both … and … · in the same way · just as"], ["Contrast (within a sentence)", "whereas · while · whilst · although · despite the fact that"], ["Contrast (between sentences)", "in contrast · on the other hand · by comparison · nevertheless"], ["Concession", "even though · however · that said"]]),
      annotated("Model paragraph (point by point)", [["Topic", "Attitudes to time differ markedly between the two countries."], ["Country A", "In Norway, which is famous for its punctuality, meetings start precisely on the hour."], ["Contrast", "By contrast, in Spain, where social life is more flexible, a start ten minutes late is unremarkable."], ["Conclusion", "Both approaches, however, reflect the value each culture places on relationships."]]),
      tip("Use non-defining relative clauses (which…, where…) to add facts without breaking the comparison. Use ellipsis to avoid repetition: Norway is cold, and Spain (is) warm.", "Style"),
    ],
    [
      mc("Which linker introduces a contrast between two sentences?", ["In contrast,", "Similarly,", "Likewise,"], 0, "In contrast."),
      mc("Which sentence uses a non-defining relative clause correctly?", ["Norway, which is famous for punctuality, values timekeeping.", "Norway which is famous for punctuality values timekeeping.", "Norway, that is famous, values timekeeping."], 0, "Commas + which."),
      mist("Find the mistake.", ["Whereas the north", "is cold and wet,", "however the south is warm."], 2, "the south is warm", "Whereas already contrasts: no however in the same sentence."),
      fill("___ the two countries differ in climate, they share a love of music. (although)", [["Although", "While", "Whilst"]], "Concession."),
      order("Put the parts of a comparative essay in order.", ["Introduction", "Similarities", "Differences", "Conclusion"], "paragraph", "A standard pattern."),
      match("Function?", [["likewise", "similarity"], ["whereas", "contrast"], ["that said", "concession"]], "Match the linker."),
    ]),

  // ============================================================ UNIT 6
  A("adv-grammar-emphatic-do", "GRAMMAR", "Emphatic do/does/did and Other Ways of Adding Emphasis", "Emphasis", "CORE", 12, ["adv-grammar-cleft-sentences"],
    "Use emphatic do/does/did to contradict, insist or stress and combine it with other emphasising structures.",
    ["grammar", "emphasis", "emphatic-do", "contrast"], "Emphatic do (Unit 6)",
    [
      text("**Emphatic do** puts **stress on the auxiliary** to **contradict**, **insist**, **stress a strong feeling** or **correct** what someone has said. In writing it is often used in quotation or informal style.", "Explanation"),
      table("Forms", ["Use", "Example"], [
        ["Contradiction", "You didn't call me. — I did call you! You just didn't answer."],
        ["Insistence / persuasion", "Do come in. Do sit down."],
        ["Strong feeling", "I do like the design, but it's so expensive."],
        ["Past and third person", "He does know the answer. She did leave early."],
        ["Imperative emphasis", "Do be careful! Do stop talking!"],
      ]),
      compare("Errors", [["I did finished it.", "I did finish it.", "Emphatic did + base verb."], ["He does knows.", "He does know.", "Base verb after does."]]),
      tip("Compare the emphasis structures: emphatic do (I DO like it), it-cleft (It was the design that I liked), what-cleft (What I liked was the design), inversion (Never have I liked a design more).", "Options"),
    ],
    [
      mc("You didn't tell me. — I ___ tell you! You weren't listening.", ["did", "do", "had"], 0, "Emphatic did."),
      mist("Find the mistake.", ["He does", "knows", "the answer."], 1, "know", "Base verb after does."),
      fill("Please ___ come in and make yourself at home.", ["do"], "Polite emphatic do."),
      match("Function?", [["I did call you!", "contradiction"], ["Do sit down.", "polite insistence"], ["I do like it, but …", "strong feeling"]], "Match the use."),
      order("Put the words in the correct order.", ["She", "did", "leave", "early,", "whatever", "he", "says."], "word", "Emphatic did + base verb."),
      mc("Which sentence is emphatic?", ["I DO admire her work.", "I admire her work.", "I am admiring her work."], 0, "Stressed auxiliary."),
    ]),

  A("adv-vocab-compound-nouns-phrasal", "VOCABULARY", "Compound Nouns from Phrasal Verbs and Word Stress", "Compound nouns", "CORE", 14, ["adv-vocab-nationalities-culture"],
    "Form and use nouns from phrasal verbs (breakdown, outcome, setback) and apply stress patterns.",
    ["vocabulary", "compound-nouns", "phrasal-verbs", "word-stress", "listening-support"], "Compound nouns from phrasal verbs (Unit 6)",
    [
      text("Many **nouns** are formed from **phrasal verbs**. Sometimes the order reverses (**break down → breakdown**, but **outcome** comes from **come out**). **Stress** usually falls on the **first** syllable of the noun and on the **particle** in the verb."),
      table("Noun / verb pairs", ["Noun (stress first)", "Verb (stress second)", "Example"], [
        ["ˈbreakdown", "break ˈdown", "The car's breakdown delayed us. The car broke down."],
        ["ˈholdup", "hold ˈup", "There was a hold-up on the motorway. Hold up your hand."],
        ["ˈsetback", "set ˈback", "The failure was a setback. It set us back a year."],
        ["ˈoutcome", "(come ˈout)", "The outcome of the trial surprised everyone."],
        ["ˈtakeaway", "take aˈway", "We ordered a takeaway."],
        ["ˈslip-up", "slip ˈup", "It was a careless slip-up."],
        ["ˈlayout", "lay ˈout", "The layout of the page is clear."],
        ["ˈoutbreak", "break ˈout", "An outbreak of fever was reported."],
      ]),
      tip("Some are hyphenated (hold-up, slip-up, check-in) and some are one word (breakdown, outcome). Check a dictionary and be consistent.", "Spelling"),
    ],
    [
      match("Match the noun with its meaning.", [["setback", "a delay or problem"], ["outcome", "a result"], ["breakdown", "a failure of a machine or system"], ["slip-up", "a careless mistake"], ["outbreak", "a sudden start of something unpleasant"]], "Learn each noun."),
      mc("The failed test was a real ___ for the research team.", ["setback", "takeaway", "layout"], 0, "A setback = a problem that delays progress."),
      fill("An ___ of the disease was reported in the north. (sudden start)", ["outbreak"], "outbreak."),
      mist("Find the mistake.", ["The car", "broke down", "caused a long break down on the road."], 2, "breakdown", "Noun: breakdown (one word)."),
      mc("Which syllable is stressed in the NOUN ‘breakdown’?", ["the first", "the second", "both equally"], 0, "ˈbreakdown."),
      sa("A careless mistake = a ___-up", ["slip"], "slip-up.", { hint: "s _ _ _" }),
    ]),

  A("adv-reading-when-good-comes-from-bad", "READING", "Reading: When Good Comes from Bad", "Historical feature", "CHALLENGING", 20, ["adv-reading-worlds-of-difference"],
    "Analyse a historical feature article, its structure, its evidence and the writer's careful qualifications.",
    ["reading", "history", "feature-article", "evidence", "qualification"], "When good comes from bad (Unit 6)",
    [
      text("A historical feature often has **thesis → examples in categories → qualification**. Notice **hedges and reporting** (*is often credited with*, *is widely regarded as*) that show the writer is **relaying** rather than **asserting** claims.", "Reading strategy"),
      passage("Example", "The invention is often credited with saving thousands of lives, although historians point out that its adoption was slow and uneven.", "Credit + qualification"),
      list("Guided practice", ["Claim → saved thousands of lives (reported).", "Qualification → slow, uneven adoption.", "Attitude → cautious."]),
    ],
    [
      mc("What is the article's central idea?", ["Conflict has sometimes speeded up developments that might have taken decades.", "War is good.", "History repeats itself."], 0, "First paragraph.", WAR),
      mc("Which medical development is described?", ["improved storage and transport of blood", "vaccines", "radio"], 0, "Paragraph 2.", WAR),
      mc("What does ‘is widely regarded as’ tell us?", ["The claim is common but not proven.", "It is false.", "It is the writer's opinion only."], 0, "Reporting a widely held view.", WAR),
      mc("How did women's work change?", ["They took jobs previously closed to them.", "They left work.", "They fought in armies."], 0, "Paragraph 3.", WAR),
      mc("How does the writer qualify the argument at the end?", ["The gains did not justify the war.", "War is necessary for progress.", "Progress is impossible."], 0, "“It would be wrong… to suggest that these gains justified the war.”", WAR),
      tf("The writer says progress was the purpose of the suffering.", false, "“the by-product of suffering, never its purpose”.", WAR),
    ]),

  A("adv-writing-talk-history", "WRITING", "Writing for Talking: Researching a Period in History", "Presentation script", "CHALLENGING", 22, ["adv-grammar-emphatic-do", "adv-reading-when-good-comes-from-bad"],
    "Write a spoken presentation script that introduces a historical topic, organises evidence and engages the audience.",
    ["writing", "presentation", "script", "history", "evidence", "spoken-style"], "Writing for talking: a period in history (Unit 6, p. 116)",
    [
      text("A **written script** for a talk needs **signposting**, **shorter sentences**, **repetition for emphasis** and **evidence** that the audience can follow by ear.", "Explanation"),
      table("Structure of the script", ["Part", "Purpose", "Language"], [
        ["Opening", "hook + topic + outline", "Imagine … Today I'd like to look at … I'll cover three points."],
        ["Main points", "one idea + evidence each", "First of all … The evidence for this is … To give an example …"],
        ["Transitions", "guide the audience", "Let's move on to … So far we have seen … This brings me to …"],
        ["Conclusion", "summary + closing thought", "To sum up … What matters most is …"],
      ]),
      annotated("Model opening", [["Hook", "Imagine a hospital in which every patient who needed blood had to wait for a donor to be found."], ["Topic", "Today I would like to talk about how one of history's worst conflicts changed medicine."], ["Outline", "I'll look at three areas: blood, surgery and the treatment of wounds."]]),
      list("Evidence and research", ["Use **reliable sources** (books, academic websites).", "Give **dates and figures** but **round** them for speech.", "Use hedging: is thought to · historians generally agree that …", "Avoid **long lists**: three key examples are enough."]),
    ],
    [
      order("Put the script parts in order.", ["Opening with hook", "Main points with evidence", "Transitions", "Conclusion"], "paragraph", "Opening, main points, transitions, conclusion."),
      mc("Which is the best transition?", ["This brings me to my second point: surgery.", "Then.", "Blood is done."], 0, "Signposting."),
      mc("Which sentence is better for a SPOKEN script?", ["The war led to three big advances: blood banks, plastic surgery and better wound care.", "The conflict precipitated advances in haemotology, reconstructive surgery and antisepsis respectively.", "Advances: blood; surgery; wounds."], 0, "Short, clear, easy to follow by ear."),
      fill("I'll cover three ___ in this talk. (main things)", [["points", "areas"]], "Signpost the structure."),
      mc("Which opening is most engaging?", ["Imagine a hospital in which every patient had to wait for a donor.", "This is my presentation.", "I will now speak."], 0, "A hook that creates a scene."),
      match("Function?", [["To sum up, …", "conclusion"], ["Let's move on to …", "transition"], ["Imagine …", "hook"]], "Match the function."),
    ]),

  A("adv-grammar-midterm-review-units-1-6", "GRAMMAR", "Mid-Term Review: Grammar, Vocabulary and Reading for Units 1–6", "Assessment review", "CHALLENGING", 26, ["adv-writing-talk-history", "adv-vocab-compound-nouns-phrasal"],
    "Practise the multiple-choice format of the mid-term examination across Units 1–6.",
    ["grammar", "review", "assessment-practice", "multiple-choice", "mid-term"], "Mid-term review (Units 1-6)",
    [
      text("The mid-term examination is **multiple choice** and covers **grammar, vocabulary and reading** from Units 1–6. Read the whole sentence, **eliminate** clearly wrong options, and check **time expressions and collocations**.", "Explanation"),
      table("Revision map", ["Unit", "Focus"], [["1", "tense system; reflexives; synonyms; life stages"], ["2", "adverbs and adjectives; adjective order; informal phrasal verbs; word idioms"], ["3", "verb patterns; describing trends; phrasal verbs with up and down"], ["4", "modals of speculation and function; idiomatic collocations; deception"], ["5", "avoiding repetition; nationalities; near-synonyms"], ["6", "emphasis; compound nouns from phrasal verbs"]]),
      tip("Strategy: predict before you look at the options; eliminate; check collocation; never leave a question blank.", "Strategy"),
    ],
    [
      mc("By next June, I ___ in this company for ten years.", ["will have been working", "will work", "have worked"], 0, "Duration up to a future point."),
      mc("It is ___ unlikely that prices will fall this year.", ["highly", "deeply", "bitterly"], 0, "highly unlikely."),
      mc("She bought ___ chest.", ["a lovely old wooden", "a wooden old lovely", "an old lovely wooden"], 0, "Opinion, age, material."),
      mc("They persuaded him ___ the offer.", ["to accept", "accepting", "accept"], 0, "persuade + object + to-infinitive."),
      mc("Visitor numbers ___ from 71,000 to 9,000 in a single year.", ["plummeted", "soared", "levelled off"], 0, "Sharp fall."),
      mc("He hasn't replied; he ___ in a meeting.", ["must be", "can't be", "needn't be"], 0, "Strong deduction."),
      mc("“Will it rain?” “I hope ___.”", ["not", "no", "not so"], 0, "hope not."),
      mc("The match was a ___ ; everyone knew who would win.", ["foregone conclusion", "mixed blessing", "raw deal"], 0, "A certain result."),
      mc("Anyone who wishes to leave may ___.", ["do so", "to do", "doing so"], 0, "Modal + do so."),
      mc("The failure of the first test was a serious ___ for the project.", ["setback", "takeaway", "layout"], 0, "A problem that delays progress."),
    ]),
];

void [compare, list, sa, structure, tf, tip, text, passage, annotated, table];
