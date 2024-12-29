// Statik JSON verisi
const words = [
    {
      "word": "lethal",
      "meaning": "causing or able to cause death",
      "example1": "Any sharp pointed instrument is potentially a lethal weapon.",
      "example2": "The snake’s venom is rarely lethal to humans."
    },
    {
      "word": "repair",
      "meaning": "to fix something that is broken or damaged",
      "example1": "The car needs immediate repair after the accident.",
      "example2": "He had to repair the broken fence in the backyard."
    },
    {
      "word": "essential",
      "meaning": "absolutely necessary; extremely important",
      "example1": "Water is essential for survival.",
      "example2": "Communication is essential in any relationship."
    },
    {
      "word": "fragile",
      "meaning": "easily broken or damaged",
      "example1": "The glass vase is very fragile.",
      "example2": "Be careful, this box contains fragile items."
    },
    {
      "word": "resilient",
      "meaning": "able to recover quickly from difficulties",
      "example1": "Children are often more resilient than adults.",
      "example2": "The community showed great resilience after the disaster."
    },
        {
          "word": "deterrent",
          "meaning": "something that discourages or prevents someone from acting",
          "example1": "The security system acts as a deterrent against theft.",
          "example2": "High fines serve as a deterrent to reckless driving."
        },
        {
          "word": "submission",
          "meaning": "the act of yielding to a superior force or authority",
          "example1": "His submission to the court was well-prepared.",
          "example2": "She signed the contract in submission to her employer's demands."
        },
        {
          "word": "adherence",
          "meaning": "the act of following or sticking to rules, beliefs, or standards",
          "example1": "Strict adherence to the rules ensured fairness.",
          "example2": "Their adherence to tradition is remarkable."
        },
        {
          "word": "prevalence",
          "meaning": "the state of being widespread or commonly occurring",
          "example1": "The prevalence of online shopping has increased significantly.",
          "example2": "The prevalence of diabetes is rising globally."
        },
        {
          "word": "run into",
          "meaning": "to encounter someone or something unexpectedly",
          "example1": "I ran into an old friend at the mall yesterday.",
          "example2": "They ran into trouble while hiking in the mountains."
        },
        {
          "word": "handover",
          "meaning": "the act of giving control, responsibility, or possession to someone else",
          "example1": "The handover of power occurred smoothly after the election.",
          "example2": "She completed the project and prepared for the handover to her colleague."
        },
        {
          "word": "detrimental",
          "meaning": "causing harm or damage",
          "example1": "Smoking is detrimental to your health.",
          "example2": "Poor diet can have a detrimental effect on performance."
        },
        {
          "word": "industrious",
          "meaning": "hard-working and diligent",
          "example1": "He is known as an industrious employee who always meets deadlines.",
          "example2": "The industrious students finished their project ahead of schedule."
        },
        {
          "word": "assumption",
          "meaning": "something that is accepted as true without proof",
          "example1": "Their plan was based on the assumption that prices would remain stable.",
          "example2": "It's a mistake to make assumptions without clear evidence."
        },
        {
          "word": "demand",
          "meaning": "a strong request or need for something",
          "example1": "The demand for electric cars is growing rapidly.",
          "example2": "His job requires meeting the high demands of clients."
        },
        {
          "word": "everlasting",
          "meaning": "lasting forever or for a very long time",
          "example1": "They promised each other everlasting love.",
          "example2": "The sculpture is a symbol of everlasting beauty."
        },
        {
          "word": "short fuse",
          "meaning": "a tendency to get angry quickly",
          "example1": "He has a short fuse and often loses his temper.",
          "example2": "Be careful what you say—she has a short fuse today."
        },
       {
            "word": "abundant",
            "meaning": "existing in large quantities; more than enough",
            "example1": "The region is abundant in natural resources.",
            "example2": "They enjoyed an abundant supply of food."
        },
        {
            "word": "adamant",
            "meaning": "refusing to change one's mind or opinion",
            "example1": "She was adamant that she would not resign.",
            "example2": "He remained adamant about the decision."
        },
        {
            "word": "alleviate",
            "meaning": "to make something less severe or serious",
            "example1": "The medicine helped alleviate the pain.",
            "example2": "Efforts were made to alleviate poverty."
        },
        {
            "word": "ambiguous",
            "meaning": "open to more than one interpretation; unclear",
            "example1": "His statement was deliberately ambiguous.",
            "example2": "The contract language was ambiguous."
        },
        {
            "word": "apprehensive",
            "meaning": "anxious or fearful that something bad might happen",
            "example1": "She felt apprehensive about her job interview.",
            "example2": "I was apprehensive before my first performance."
        },
        {
            "word": "arbitrary",
            "meaning": "based on random choice or personal whim, rather than reason",
            "example1": "The decision seemed arbitrary and unfair.",
            "example2": "His actions appeared completely arbitrary."
        },
        {
            "word": "assertive",
            "meaning": "having a confident and forceful personality",
            "example1": "She gave an assertive response during the meeting.",
            "example2": "Being assertive can help in negotiations."
        },
        {
            "word": "benevolent",
            "meaning": "well-meaning and kindly",
            "example1": "He was a benevolent ruler loved by all.",
            "example2": "The organization is known for its benevolent work."
        },
        {
            "word": "candid",
            "meaning": "truthful and straightforward; frank",
            "example1": "She gave a candid opinion about the project.",
            "example2": "His candid remarks were appreciated."
        },
        {
            "word": "coherent",
            "meaning": "logical and consistent",
            "example1": "His explanation was coherent and easy to understand.",
            "example2": "The report needs to be more coherent."
        },
        {
            "word": "collaborate",
            "meaning": "to work together with others to achieve a goal",
            "example1": "They decided to collaborate on the project.",
            "example2": "The two companies will collaborate to develop new technologies."
        },
        {
            "word": "comprehensive",
            "meaning": "complete and including all elements",
            "example1": "The book offers a comprehensive overview of the topic.",
            "example2": "The report is comprehensive and detailed."
        },
        {
            "word": "condemn",
            "meaning": "to express strong disapproval of something",
            "example1": "The government condemned the violent attacks.",
            "example2": "They condemned his actions as irresponsible."
        },
        {
            "word": "contemplate",
            "meaning": "to consider thoughtfully",
            "example1": "He contemplated moving to another city.",
            "example2": "I often contemplate the meaning of life."
        },
        {
            "word": "contradict",
            "meaning": "to assert the opposite of what has been stated",
            "example1": "His words contradicted his actions.",
            "example2": "The witness contradicted the earlier testimony."
        },
        {
            "word": "credible",
            "meaning": "believable or trustworthy",
            "example1": "The source provided credible information.",
            "example2": "She is a credible witness."
        },
        {
            "word": "cynical",
            "meaning": "doubtful or distrustful of human sincerity",
            "example1": "He has a cynical view of politics.",
            "example2": "Her cynical remarks upset everyone."
        },
        {
            "word": "deviate",
            "meaning": "to depart from an established course",
            "example1": "The plane had to deviate from its planned route.",
            "example2": "Don't deviate from the original plan."
        },
        {
            "word": "diligent",
            "meaning": "showing care and effort in one's work",
            "example1": "She is a diligent student.",
            "example2": "He worked diligently to complete the project."
        },
        {
            "word": "elaborate",
            "meaning": "detailed and complicated in design",
            "example1": "The painting had an elaborate design.",
            "example2": "He gave an elaborate explanation."
        },
        {
            "word": "empathetic",
            "meaning": "showing the ability to understand and share feelings",
            "example1": "She was empathetic towards his struggles.",
            "example2": "An empathetic listener can make a big difference."
        },
        {
            "word": "fluctuate",
            "meaning": "to rise and fall irregularly",
            "example1": "Prices fluctuate depending on supply and demand.",
            "example2": "The temperature fluctuates throughout the day."
        },
        {
            "word": "imminent",
            "meaning": "about to happen",
            "example1": "A storm is imminent.",
            "example2": "The company faces imminent collapse."
        },
        {
            "word": "integrity",
            "meaning": "the quality of being honest and having strong principles",
            "example1": "His integrity is unquestionable.",
            "example2": "She acted with integrity throughout the process."
        },
        {
            "word": "meticulous",
            "meaning": "showing great attention to detail",
            "example1": "He is meticulous about his work.",
            "example2": "She reviewed the report with meticulous care."
        },
        {
            "word": "abandon",
            "meaning": "to leave somebody, especially somebody you are responsible for, with no intention of returning",
            "example1": "abandon somebody, The baby had been abandoned by its mother.",
            "example2": ""
        },
        {
            "word": "ability",
            "meaning": "the fact that somebody/something is able to do something",
            "example1": "People with the disease may lose their ability to communicate.",
            "example2": ""
        },
        {
            "word": "able",
            "meaning": "to have the skill, intelligence, opportunity, etc. needed to do something",
            "example1": "You must be able to speak French for this job.",
            "example2": ""
        },
        {
            "word": "abolish",
            "meaning": "to officially end a law, a system or an institution",
            "example1": "This tax should be abolished.",
            "example2": ""
        },
        {
            "word": "abortion",
            "meaning": "the deliberate ending of a pregnancy at an early stage",
            "example1": "to support/oppose abortion",
            "example2": ""
        },
        {
            "word": "about",
            "meaning": "a little more or less than; a little before or after",
            "example1": "It costs about $10.",
            "example2": ""
        },
        {
            "word": "about",
            "meaning": "on the subject of somebody/something; in connection with somebody/something",
            "example1": "a book about flowers",
            "example2": ""
        },
        {
            "word": "above",
            "meaning": "at or to a higher place",
            "example1": "Put it on the shelf above.",
            "example2": ""
        },
        {
            "word": "above",
            "meaning": "at or to a higher place or position than something/somebody",
            "example1": "The water came above our knees.",
            "example2": ""
        },
        {
            "word": "abroad",
            "meaning": "in or to a foreign country",
            "example1": "to go/travel/live/study abroad ",
            "example2": ""
        },
        {
            "word": "absence",
            "meaning": "the fact of somebody being away from a place where they are usually expected to be; the occasion or period of time when somebody is away",
            "example1": "in somebody's absence, The decision was made in my absence (= while I was not there).",
            "example2": ""
        },
        {
            "word": "absent",
            "meaning": "not in a place because of illness, etc.",
            "example1": "He was absent from work for two weeks.",
            "example2": ""
        },
        {
            "word": "absolute",
            "meaning": "total and complete",
            "example1": "I've joined a class for absolute beginners.",
            "example2": ""
        },
        {
            "word": "absolutely",
            "meaning": "used to emphasize that something is completely true",
            "example1": "You're absolutely right.",
            "example2": ""
        },
        {
            "word": "absorb",
            "meaning": "to take in a liquid, gas or other substance from the surface or space around",
            "example1": "absorb something, Plants absorb carbon dioxide from the air.",
            "example2": ""
        },
        {
            "word": "abstract",
            "meaning": "based on general ideas and not on any particular real person, thing or situation",
            "example1": "abstract knowledge/principles",
            "example2": ""
        },
        {
            "word": "absurd",
            "meaning": "extremely silly; not logical and sensible",
            "example1": "That uniform makes the guards look absurd.",
            "example2": ""
        },
        {
            "word": "abundance",
            "meaning": "a large quantity that is more than enough",
            "example1": "The brochure promised beautiful walks with an abundance of wildlife.",
            "example2": ""
        },
        {
            "word": "abuse",
            "meaning": "the use of something in a way that is wrong or harmful",
            "example1": "alcohol/drug abuse",
            "example2": ""
        },
            {
                "word": "baby",
                "meaning": "a very young child or animal",
                "example1": "The baby's crying!",
                "example2": ""
            },
            {
                "word": "back",
                "meaning": "located behind or at the back of something",
                "example1": "We were sitting in the back row",
                "example2": ""
            },
            {
                "word": "back",
                "meaning": "to or into the place, condition, situation or activity where somebody/something was before",
                "example1": "When is he coming back to work?",
                "example2": ""
            },
            {
                "word": "back",
                "meaning": "the part of the human body that is on the opposite side to the chest, between the neck and the tops of the legs; the part of an animal\u2019s body that corresponds to this",
                "example1": "on your back, He was lying on his back on the sofa.",
                "example2": ""
            },
            {
                "word": "back",
                "meaning": "to encourage somebody or give them help; to give financial support to somebody/something",
                "example1": "Her parents backed her in her choice of career.",
                "example2": ""
            },
            {
                "word": "backdrop",
                "meaning": "everything that can be seen around an event or scene",
                "example1": "The mountains provided a dramatic backdrop for our picnic.",
                "example2": ""
            },
            {
                "word": "background",
                "meaning": "the details of a person\u2019s family, education, experience, etc.",
                "example1": "somebody's ethnic/genetic/cultural background ",
                "example2": ""
            },
            {
                "word": "backing",
                "meaning": "help and support from somebody to do something; financial support for something",
                "example1": "The police gave the proposals their full backing.",
                "example2": ""
            },
            {
                "word": "backup",
                "meaning": "extra help or support that you can get if necessary",
                "example1": "The police had backup from the army.",
                "example2": ""
            },
            {
                "word": "backwards",
                "meaning": "towards a place or position that is behind",
                "example1": "I lost my balance and fell backwards.",
                "example2": ""
            },
            {
                "word": "bacteria",
                "meaning": "the simplest and smallest forms of life. Bacteria exist in large numbers in air, water and soil, and also in living and dead creatures and plants, and are often a cause of disease.",
                "example1": "Neither chilling nor freezing kills all bacteria.",
                "example2": ""
            },
            {
                "word": "bad",
                "meaning": "unpleasant; full of problems",
                "example1": "I have some bad news for you, I'm afraid.",
                "example2": ""
            },
            {
                "word": "badge",
                "meaning": "a small piece of metal or plastic, with a design or words on it, that a person wears or carries to show that they belong to an organization, support something, have achieved something, have a particular rank, etc.",
                "example1": "She wore a badge saying \u2018Vote for Coates\u2019.",
                "example2": ""
            },
            {
                "word": "badly",
                "meaning": "without skill or care",
                "example1": "to play/sing badly",
                "example2": ""
            },
            {
                "word": "bag",
                "meaning": "a container made of cloth, leather, plastic or paper, used to carry things in, especially when shopping or travelling",
                "example1": "He was carrying a heavy bag of groceries.",
                "example2": ""
            },
            {
                "word": "bail",
                "meaning": "money that somebody agrees to pay if a person accused of a crime does not appear at their trial. When bail has been arranged, the accused person is allowed to go free until the trial.",
                "example1": "Can anyone put up bail for you?",
                "example2": ""
            },
            {
                "word": "bake",
                "meaning": "to cook food in an oven without extra fat or liquid; to be cooked in this way",
                "example1": "bake (something), to bake bread/biscuits/cookies",
                "example2": ""
            },
            {
                "word": "balance",
                "meaning": "a situation in which different things exist in equal, correct or good amounts",
                "example1": "This newspaper maintains a good balance in its presentation of different opinions.",
                "example2": ""
            },
            {
                "word": "balance",
                "meaning": "to put your body or something else into a position where it is steady and does not fall",
                "example1": "balance on something, How long can you balance on one leg?",
                "example2": ""
            },
            {
                "word": "balanced",
                "meaning": "keeping or showing a balance so that different things or different parts of something exist in equal or correct amounts",
                "example1": "The programme presented a balanced view of the two sides of the conflict.",
                "example2": ""
            },
            {
                "word": "cabin",
                "meaning": "a small room on a ship in which you live or sleep",
                "example1": "I lay in my cabin feeling miserably seasick.",
                "example2": ""
            },
            {
                "word": "cabinet",
                "meaning": "a group of senior members of a government that is responsible for advising and deciding on government policy",
                "example1": "a cabinet meeting",
                "example2": ""
            },
            {
                "word": "cable",
                "meaning": "a set of wires, covered in plastic or rubber, that carries electricity, phone signals, etc.",
                "example1": "fibre-optic cable",
                "example2": ""
            },
            {
                "word": "cafe",
                "meaning": "a place where you can buy drinks and simple meals. Alcohol is not usually served in British or American cafes.",
                "example1": "There are small shops and pavement cafes around every corner.",
                "example2": ""
            },
            {
                "word": "cake",
                "meaning": "a sweet food made from a mixture of flour, eggs, butter, sugar, etc. that is baked in an oven. Cakes are made in various shapes and sizes and are often decorated, for example with cream or icing.",
                "example1": "a piece/slice of cake",
                "example2": ""
            },
            {
                "word": "calculate",
                "meaning": "to use numbers to find out a total number, amount, distance, etc.",
                "example1": "calculate something, An independent valuer will calculate the value of your property.",
                "example2": ""
            },
            {
                "word": "calculation",
                "meaning": "the act or process of using numbers to find out an amount",
                "example1": "Cathy did a rough calculation.",
                "example2": ""
            },
            {
                "word": "call",
                "meaning": "the act of speaking to somebody on the phone",
                "example1": "to get/receive a call from somebody",
                "example2": ""
            },
            {
                "word": "call",
                "meaning": "to give somebody/something a particular name; to use a particular name or title when you are talking to somebody",
                "example1": "call somebody/something + noun, They decided to call the baby Mark.",
                "example2": ""
            },
            {
                "word": "calm",
                "meaning": "not excited, nervous or upset",
                "example1": "It is important to keep calm in an emergency.",
                "example2": ""
            },
            {
                "word": "calm",
                "meaning": "a quiet and peaceful time or situation",
                "example1": "The police appealed for calm.",
                "example2": ""
            },
            {
                "word": "calm",
                "meaning": "to make somebody/something become quiet and more relaxed, especially after strong emotion or excitement",
                "example1": "Have some tea; it'll calm your nerves.",
                "example2": ""
            },
            {
                "word": "camera",
                "meaning": "a piece of equipment for taking photographs, moving pictures or television pictures. It can be a separate item or part of another device.",
                "example1": "Just point the camera and press the button.",
                "example2": ""
            },
            {
                "word": "camp",
                "meaning": "a place where people live temporarily in tents or temporary buildings",
                "example1": "Let's return to camp.",
                "example2": ""
            },
            {
                "word": "camp",
                "meaning": "to put up a tent and live in it for a short time",
                "example1": "I camped overnight in a field.",
                "example2": ""
            },
            {
                "word": "campaign",
                "meaning": "a series of planned activities that are intended to achieve a particular social, commercial or political aim",
                "example1": "an anti-smoking campaign",
                "example2": ""
            },
            {
                "word": "campaign",
                "meaning": "to take part in or lead a campaign, for example to achieve social or political change, or in order to win an election",
                "example1": "The party campaigned vigorously in the north of the country.",
                "example2": ""
            },
            {
                "word": "camping",
                "meaning": "living in a tent, etc. on holiday",
                "example1": "Do you go camping?",
                "example2": ""
            },
            {
                "word": "campus",
                "meaning": "the buildings of a university or college and the land around them",
                "example1": "university/college campuses",
                "example2": ""
            },
            {
                "word": "can",
                "meaning": "a metal container in which food and drink is sold",
                "example1": "can of something, a can of beans/beer/soda",
                "example2": ""
            },
            {
                "word": "dad",
                "meaning": "father",
                "example1": "That's my dad over there.",
                "example2": ""
            },
            {
                "word": "daily",
                "meaning": "happening, done or produced every day",
                "example1": "Many people still read a daily newspaper.",
                "example2": ""
            },
            {
                "word": "daily",
                "meaning": "every day",
                "example1": "The machines are inspected twice daily.",
                "example2": ""
            },
            {
                "word": "dairy",
                "meaning": "made from milk",
                "example1": "dairy products/produce",
                "example2": ""
            },
            {
                "word": "dairy",
                "meaning": "milk, cheese and other milk products",
                "example1": "The doctor told me to eat less red meat and dairy.",
                "example2": ""
            },
            {
                "word": "dam",
                "meaning": "a barrier that is built across a river in order to stop the water from flowing, used especially to make a reservoir (= a lake for storing water) or to produce electricity",
                "example1": "the Narmada dam in India",
                "example2": ""
            },
            {
                "word": "damage",
                "meaning": "physical harm caused to something which makes it less attractive, useful or valuable",
                "example1": "serious/severe damage",
                "example2": ""
            },
            {
                "word": "damage",
                "meaning": "to have a bad or harmful effect on something/somebody",
                "example1": "The church was badly damaged by the 1997 earthquake.",
                "example2": ""
            },
            {
                "word": "damaging",
                "meaning": "causing damage; having a bad effect on somebody/something",
                "example1": "damaging consequences/effects",
                "example2": ""
            },
            {
                "word": "dance",
                "meaning": "a series of movements and steps that are usually performed to music; a particular example of these movements and steps",
                "example1": "Do you know any other Latin American dances?",
                "example2": ""
            },
            {
                "word": "dance",
                "meaning": "to move your body to the sound and rhythm of music",
                "example1": "Do you want to dance?",
                "example2": ""
            },
            {
                "word": "dancer",
                "meaning": "a person who dances or whose job is dancing",
                "example1": "She's a fantastic dancer.",
                "example2": ""
            },
            {
                "word": "dancing",
                "meaning": "moving your body to music",
                "example1": "There was music and dancing till two in the morning.",
                "example2": ""
            },
            {
                "word": "danger",
                "meaning": "the possibility of something happening that will injure, harm or kill somebody, or damage or destroy something",
                "example1": "Danger! Keep Out!",
                "example2": ""
            },
            {
                "word": "dangerous",
                "meaning": "likely to injure or harm somebody, or to damage or destroy something",
                "example1": "The situation is extremely dangerous.",
                "example2": ""
            },
            {
                "word": "dare",
                "meaning": "to be brave enough to do something",
                "example1": "She said it as loudly as she dared.",
                "example2": ""
            },
            {
                "word": "dark",
                "meaning": "with no or very little light, especially because it is night",
                "example1": "a dark room/street/forest/night",
                "example2": ""
            },
            {
                "word": "dark",
                "meaning": "the lack of light in a place, especially because it is night",
                "example1": "Are the children afraid of the dark?",
                "example2": ""
            },
            {
                "word": "darkness",
                "meaning": "the state of being dark, without any light",
                "example1": "After a few minutes our eyes got used to the darkness.",
                "example2": ""
            },
            {
                "word": "data",
                "meaning": "facts or information, especially when examined and used to find out things or to make decisions",
                "example1": "We collected publicly available data over a 10-day period.",
                "example2": ""
            },
            {
                "word": "each",
                "meaning": "used to refer to every one of two or more people or things, when you are thinking about them separately",
                "example1": "Each answer is worth 20 points.",
                "example2": ""
            },
            {
                "word": "each",
                "meaning": "used to refer to every one of two or more people or things, when you are thinking about them separately",
                "example1": "Each answer is worth 20 points.",
                "example2": ""
            },
            {
                "word": "each",
                "meaning": "used to refer to every one of two or more people or things, when you are thinking about them separately",
                "example1": "Each answer is worth 20 points.",
                "example2": ""
            },
            {
                "word": "eager",
                "meaning": "very interested and excited by something that is going to happen or about something that you want to do; showing this",
                "example1": "eager crowds outside the stadium",
                "example2": ""
            },
            {
                "word": "ear",
                "meaning": "either of the organs on the sides of the head that you hear with",
                "example1": "the left/right ear",
                "example2": ""
            },
            {
                "word": "early",
                "meaning": "near the beginning of a period of time, an event etc.",
                "example1": "the early morning",
                "example2": ""
            },
            {
                "word": "early",
                "meaning": "near the beginning of a period of time, an event, a piece of work, etc.",
                "example1": "We arrived early the next day.",
                "example2": ""
            },
            {
                "word": "earn",
                "meaning": "to get money for work that you do",
                "example1": "earn (something), He earns about $40\u2009000 a year.",
                "example2": ""
            },
            {
                "word": "earnings",
                "meaning": "the money that you earn for the work that you do",
                "example1": "a rise in average earnings",
                "example2": ""
            },
            {
                "word": "earth",
                "meaning": "the world; the planet that we live on",
                "example1": "the planet Earth",
                "example2": ""
            },
            {
                "word": "earthquake",
                "meaning": "a sudden, violent shaking of the earth\u2019s surface",
                "example1": "a devastating/massive/powerful earthquake",
                "example2": ""
            },
            {
                "word": "ease",
                "meaning": "lack of difficulty",
                "example1": "with ease, He passed the exam with ease.",
                "example2": ""
            },
            {
                "word": "ease",
                "meaning": "to become less unpleasant, painful or severe; to make something less unpleasant, etc.",
                "example1": "The pain immediately eased.",
                "example2": ""
            },
            {
                "word": "easily",
                "meaning": "without problems or difficulty",
                "example1": "The museum is easily accessible by car.",
                "example2": ""
            },
            {
                "word": "east",
                "meaning": "in or towards the east",
                "example1": "East Africa",
                "example2": ""
            },
            {
                "word": "east",
                "meaning": "towards the east",
                "example1": "The house faces east.",
                "example2": ""
            },
            {
                "word": "east",
                "meaning": "the direction that you look towards to see the sun rise; one of the four main points of the compass",
                "example1": "Which way is east?",
                "example2": ""
            },
            {
                "word": "eastern",
                "meaning": "located in the east or facing east",
                "example1": "eastern Spain",
                "example2": ""
            },
            {
                "word": "easy",
                "meaning": "not difficult; done or obtained without a lot of effort or problems",
                "example1": "an easy way to make bread",
                "example2": ""
            },
            {
                "word": "eat",
                "meaning": "to put food in your mouth, bite it and swallow it ",
                "example1": "I was too nervous to eat.",
                "example2": ""
            },
            {
                "word": "fabric",
                "meaning": "material made by weaving wool, cotton, silk, etc., used for making clothes, curtains, etc. and for covering furniture",
                "example1": "They sell a wide variety of printed cotton fabric.",
                "example2": ""
            },
            {
                "word": "fabulous",
                "meaning": "extremely good",
                "example1": "They put on a fabulous performance.",
                "example2": ""
            },
            {
                "word": "face",
                "meaning": "the front part of the head, where the eyes, nose and mouth are ",
                "example1": "a pretty/pale/round face ",
                "example2": ""
            },
            {
                "word": "face",
                "meaning": "to be opposite somebody/something; to have your face or front pointing towards somebody/something or in a particular direction",
                "example1": "face somebody/something, She turned and faced him.",
                "example2": ""
            },
            {
                "word": "facilitate",
                "meaning": "to make an action or a process possible or easier",
                "example1": "The new trade agreement should facilitate more rapid economic growth.",
                "example2": ""
            },
            {
                "word": "facility",
                "meaning": "buildings, services, equipment, etc. that are provided for a particular purpose",
                "example1": "leisure/sports facilities",
                "example2": ""
            },
            {
                "word": "fact",
                "meaning": "a thing that is known to be true, especially when it can be proved",
                "example1": "fact about something, First, some basic facts about healthy eating.",
                "example2": ""
            },
            {
                "word": "faction",
                "meaning": "a small group of people within a larger one, whose members have some different aims and beliefs to those of the larger group",
                "example1": "There are rival factions within the administration.",
                "example2": ""
            },
            {
                "word": "factor",
                "meaning": "one of several things that cause or influence something",
                "example1": "Obesity is a major risk factor for heart disease.",
                "example2": ""
            },
            {
                "word": "factory",
                "meaning": "a building or group of buildings where goods are made, mainly by machine",
                "example1": "a car factory",
                "example2": ""
            },
            {
                "word": "faculty",
                "meaning": "a department or group of related departments in a college or university",
                "example1": "the Faculty of Law",
                "example2": ""
            },
            {
                "word": "fade",
                "meaning": "to become or to make something become paler or less bright",
                "example1": "The curtains had faded in the sun.",
                "example2": ""
            },
            {
                "word": "fail",
                "meaning": "to not be successful in achieving something",
                "example1": "Many diets fail because they are boring.",
                "example2": ""
            },
            {
                "word": "failed",
                "meaning": "not successful",
                "example1": "a failed writer",
                "example2": ""
            },
            {
                "word": "failure",
                "meaning": "lack of success in doing or achieving something",
                "example1": "The success or failure of the plan depends on you.",
                "example2": ""
            },
            {
                "word": "fair",
                "meaning": "acceptable and appropriate in a particular situation",
                "example1": "a fair deal/wage/price",
                "example2": ""
            },
            {
                "word": "fairly",
                "meaning": "to some extent but not very",
                "example1": "fairly simple/easy/straightforward",
                "example2": ""
            },
            {
                "word": "fairness",
                "meaning": "the quality of treating people equally or in a way that is reasonable",
                "example1": "The fairness of the judicial system is being questioned.",
                "example2": ""
            },
            {
                "word": "faith",
                "meaning": "trust in somebody\u2019s ability or knowledge; trust that somebody/something will do what has been promised",
                "example1": "If the company can retain its customers' faith, it could become the market leader.",
                "example2": ""
            },
            {
                "word": "fake",
                "meaning": "not what somebody claims it is; appearing to be something it is not",
                "example1": "There were a few stalls selling fake designer clothing.",
                "example2": ""
            },
            {
                "word": "gain",
                "meaning": "an increase in the amount of something, especially in wealth or weight",
                "example1": "The opposition made unexpected gains in the last election.",
                "example2": ""
            },
            {
                "word": "gain",
                "meaning": "to obtain or win something, especially something that you need or want",
                "example1": "gain something, They managed to gain access to secret files.",
                "example2": ""
            },
            {
                "word": "gallery",
                "meaning": "a room or building for showing works of art, especially to the public",
                "example1": "a picture gallery",
                "example2": ""
            },
            {
                "word": "gallon",
                "meaning": "a unit for measuring liquid. In the UK, Canada and other countries it is equal to about 4.5 litres; in the US it is equal to about 3.8 litres. There are four quarts in a gallon.",
                "example1": "The tankers carried 130\u2009000 gallons of fuel.",
                "example2": ""
            },
            {
                "word": "gambling",
                "meaning": "the activity of playing games of chance for money and of betting on horses, etc.",
                "example1": "online/internet gambling",
                "example2": ""
            },
            {
                "word": "game",
                "meaning": "an activity that you do to have fun, often one that has rules and that you can win or lose; the equipment for a game",
                "example1": "The kids were playing a game with their balloons.",
                "example2": ""
            },
            {
                "word": "gaming",
                "meaning": "playing computer games",
                "example1": "online/mobile/console gaming",
                "example2": ""
            },
            {
                "word": "gang",
                "meaning": "an organized group of criminals",
                "example1": "criminal gangs",
                "example2": ""
            },
            {
                "word": "gap",
                "meaning": "a space where something is missing",
                "example1": "Extra funding is needed to plug the gap.",
                "example2": ""
            },
            {
                "word": "garage",
                "meaning": "a building for keeping one or more cars or other vehicles in",
                "example1": "a double garage (= one for two cars)",
                "example2": ""
            },
            {
                "word": "garden",
                "meaning": "a piece of land next to or around your house where you can grow flowers, fruit, vegetables, etc., usually with a lawn (= an area of grass)",
                "example1": "a front/back/rear garden",
                "example2": ""
            },
            {
                "word": "gas",
                "meaning": "any substance like air that is neither a solid nor a liquid, for example hydrogen or oxygen",
                "example1": "Air is a mixture of gases.",
                "example2": ""
            },
            {
                "word": "gate",
                "meaning": "a barrier like a door that is used to close an opening in a fence or a wall outside a building",
                "example1": "the front/main gate",
                "example2": ""
            },
            {
                "word": "gather",
                "meaning": "to come together, or bring people together, in one place to form a group",
                "example1": "A crowd soon gathered.",
                "example2": ""
            },
            {
                "word": "gathering",
                "meaning": "a meeting of people for a particular purpose",
                "example1": "a social/family gathering",
                "example2": ""
            },
            {
                "word": "gaze",
                "meaning": "a long, steady look at somebody/something",
                "example1": "He met her gaze (= looked at her while she looked at him).",
                "example2": ""
            },
            {
                "word": "gaze",
                "meaning": "to look steadily at somebody/something for a long time, either because you are very interested or surprised, or because you are thinking of something else",
                "example1": "She gazed at him in amazement.",
                "example2": ""
            },
            {
                "word": "gear",
                "meaning": "equipment in a vehicle that changes the relation between engine speed (or pedal speed on a bicycle) and the speed of the wheels moving forwards or backwards",
                "example1": "Careless use of the clutch may damage the gears.",
                "example2": ""
            },
            {
                "word": "gender",
                "meaning": "the fact of being male or female, especially when considered with reference to social and cultural differences, rather than differences in biology; members of a particular gender as a group",
                "example1": "issues of class, race and gender",
                "example2": ""
            },
            {
                "word": "habit",
                "meaning": "a thing that you do often and almost without thinking, especially something that is hard to stop doing",
                "example1": "You need to change your eating habits.",
                "example2": ""
            },
            {
                "word": "habitat",
                "meaning": "the place where a particular type of animal or plant is normally found",
                "example1": "The panda's natural habitat is the bamboo forest.",
                "example2": ""
            },
            {
                "word": "hail",
                "meaning": "to describe somebody/something as being very good or special, especially in newspapers, etc.",
                "example1": "be hailed (as) something, The conference was hailed as a great success.",
                "example2": ""
            },
            {
                "word": "hair",
                "meaning": "the substance that looks like a mass of fine threads growing on a person's head",
                "example1": "She has long dark hair.",
                "example2": ""
            },
            {
                "word": "half",
                "meaning": "to the extent of half",
                "example1": "The glass was half full.",
                "example2": ""
            },
            {
                "word": "half",
                "meaning": "an amount equal to half of something/somebody",
                "example1": "I'll see you in half an hour.",
                "example2": ""
            },
            {
                "word": "half",
                "meaning": "either of two equal parts into which something is or can be divided",
                "example1": "two and a half kilos (= 2\u00bd)",
                "example2": ""
            },
            {
                "word": "half",
                "meaning": "an amount equal to half of something/somebody",
                "example1": "I'll see you in half an hour.",
                "example2": ""
            },
            {
                "word": "halfway",
                "meaning": "at an equal distance between two points; in the middle of a period of time",
                "example1": "It's about halfway between London and Bristol.",
                "example2": ""
            },
            {
                "word": "hall",
                "meaning": "a space or passage inside the entrance or front door of a building",
                "example1": "in a hall, Her brother was standing in the front hall.",
                "example2": ""
            },
            {
                "word": "halt",
                "meaning": "an act of stopping the movement or progress of somebody/something",
                "example1": "Work came to a halt when the machine broke down.",
                "example2": ""
            },
            {
                "word": "halt",
                "meaning": "to stop; to make somebody/something stop",
                "example1": "She walked towards him and then halted.",
                "example2": ""
            },
            {
                "word": "hand",
                "meaning": "the part of the body at the end of the arm, including the fingers and thumb",
                "example1": "Ian placed a hand on her shoulder.",
                "example2": ""
            },
            {
                "word": "hand",
                "meaning": "to pass or give something to somebody",
                "example1": "hand something to somebody, She handed the letter to me.",
                "example2": ""
            },
            {
                "word": "handful",
                "meaning": "the amount of something that can be held in one hand",
                "example1": "a handful of rice",
                "example2": ""
            },
            {
                "word": "handle",
                "meaning": "the part of a door, window, etc. that you use to open it",
                "example1": "She turned the handle and opened the door.",
                "example2": ""
            },
            {
                "word": "handle",
                "meaning": "to deal with a situation, a person, an area of work or a strong emotion",
                "example1": "handle something/somebody, A new man was appointed to handle the crisis.",
                "example2": ""
            },
            {
                "word": "handling",
                "meaning": "the way that somebody deals with or treats a situation, a person, an animal, etc.",
                "example1": "I was impressed by his handling of the affair.",
                "example2": ""
            },
            {
                "word": "handy",
                "meaning": "easy to use or to do",
                "example1": "a handy little tool",
                "example2": ""
            },
            {
                "word": "hang",
                "meaning": "to attach something, or to be attached, at the top so that the lower part is free or loose",
                "example1": "hang something + adv./prep., Hang your coat on the hook.",
                "example2": ""
            },
            {
                "word": "ice",
                "meaning": "water that has frozen and become solid",
                "example1": "There was ice on the windows.",
                "example2": ""
            },
            {
                "word": "ice cream",
                "meaning": "a type of sweet frozen food made from milk fat, tasting of fruit, chocolate, etc. and often eaten as a dessert; a small amount of this food intended for one person, often served in a container made of biscuit that is like a cone in shape",
                "example1": "Desserts are served with cream or ice cream.",
                "example2": ""
            },
            {
                "word": "icon",
                "meaning": "a small symbol on a computer or smartphone screen that represents a program or a file",
                "example1": "Click on the printer icon with the mouse.",
                "example2": ""
            },
            {
                "word": "idea",
                "meaning": "a plan, thought or suggestion, especially about what to do in a particular situation",
                "example1": "It would be a good idea to call before we leave.",
                "example2": ""
            },
            {
                "word": "ideal",
                "meaning": "perfect; most suitable",
                "example1": "an ideal location/place ",
                "example2": ""
            },
            {
                "word": "ideal",
                "meaning": "an idea or standard that seems perfect, and worth trying to achieve or obtain",
                "example1": "He was accused of betraying his political ideals.",
                "example2": ""
            },
            {
                "word": "identical",
                "meaning": "similar in every detail",
                "example1": "a row of identical houses",
                "example2": ""
            },
            {
                "word": "identification",
                "meaning": "the process of showing, proving or recognizing who or what somebody/something is",
                "example1": "The identification of the crash victims was a long and difficult task.",
                "example2": ""
            },
            {
                "word": "identify",
                "meaning": "to recognize somebody/something and be able to say who or what they are",
                "example1": "identify somebody/something, She was able to identify her attacker.",
                "example2": ""
            },
            {
                "word": "identity",
                "meaning": "who or what somebody/something is",
                "example1": "The police are trying to discover the identity of the killer.",
                "example2": ""
            },
            {
                "word": "ideological",
                "meaning": "based on or connected with an ideology",
                "example1": "ideological differences",
                "example2": ""
            },
            {
                "word": "ideology",
                "meaning": "a set of ideas that an economic or political system is based on",
                "example1": "Marxist/capitalist ideology",
                "example2": ""
            },
            {
                "word": "idiot",
                "meaning": "a rude way to refer to somebody who you think is very stupid",
                "example1": "When I lost my passport, I felt such an idiot.",
                "example2": ""
            },
            {
                "word": "if",
                "meaning": "used to say that one thing can, will or might happen or be true, depending on another thing happening or being true",
                "example1": "If you see him, give him this note.",
                "example2": ""
            },
            {
                "word": "ignorance",
                "meaning": "a lack of knowledge or information about something",
                "example1": "They fought a long battle against prejudice and ignorance.",
                "example2": ""
            },
            {
                "word": "ignore",
                "meaning": "to pay no attention to something",
                "example1": "He ignored all the \u2018No Smoking\u2019 signs and lit up a cigarette.",
                "example2": ""
            },
            {
                "word": "ill",
                "meaning": "suffering from an illness or disease; not feeling well",
                "example1": "Her father is seriously ill in St Luke's hospital.",
                "example2": ""
            },
            {
                "word": "illegal",
                "meaning": "not allowed by the law",
                "example1": "illegal drugs/firearms/substances",
                "example2": ""
            },
            {
                "word": "illness",
                "meaning": "the state of being physically or mentally ill",
                "example1": "The virus can cause illness in humans.",
                "example2": ""
            },
            {
                "word": "illusion",
                "meaning": "a false idea or belief, especially about somebody or about a situation",
                "example1": "under the illusion that\u2026, She's under the illusion that (= believes wrongly that) she'll get the job.",
                "example2": ""
            },
            {
                "word": "jacket",
                "meaning": "a piece of clothing worn on the top half of the body over a shirt, etc. that has arms and fastens down the front; a short, light coat",
                "example1": "a leather/denim/tweed jacket",
                "example2": ""
            },
            {
                "word": "jail",
                "meaning": "a prison",
                "example1": "She spent a year in jail.",
                "example2": ""
            },
            {
                "word": "jail",
                "meaning": "to put somebody in prison",
                "example1": "be jailed (for something), He was jailed for life for murder.",
                "example2": ""
            },
            {
                "word": "jam",
                "meaning": "a thick sweet substance made by boiling fruit with sugar, often sold in jars and spread on bread",
                "example1": "strawberry jam",
                "example2": ""
            },
            {
                "word": "jazz",
                "meaning": "a type of music with strong rhythms, in which the players often improvise (= make up the music as they are playing), originally created by African American musicians at the beginning of the 20th century",
                "example1": "traditional/modern jazz",
                "example2": ""
            },
            {
                "word": "jeans",
                "meaning": "trousers made of denim (= a type of strong cotton)",
                "example1": "I always wear jeans.",
                "example2": ""
            },
            {
                "word": "jet",
                "meaning": "a plane driven by jet engines",
                "example1": "a jet aircraft/fighter/airliner",
                "example2": ""
            },
            {
                "word": "jewellery",
                "meaning": "objects such as rings and necklaces that people wear as decoration",
                "example1": "silver/gold jewellery",
                "example2": ""
            },
            {
                "word": "job",
                "meaning": "work for which you receive regular payment",
                "example1": "I don't have a job at present.",
                "example2": ""
            },
            {
                "word": "join",
                "meaning": "to fix or connect two or more things together",
                "example1": "join A to/onto B, Join one section of pipe to the next.",
                "example2": ""
            },
            {
                "word": "joint",
                "meaning": "involving two or more people together",
                "example1": "a joint account (= a bank account in the name of more than one person, for example shared by a couple)",
                "example2": ""
            },
            {
                "word": "joint",
                "meaning": "a place where two bones are joined together in the body in a way that enables them to bend and move",
                "example1": "inflammation of the knee joint",
                "example2": ""
            },
            {
                "word": "joke",
                "meaning": "something that you say or do to make people laugh, for example a funny story that you tell",
                "example1": "I can't tell jokes.",
                "example2": ""
            },
            {
                "word": "joke",
                "meaning": "to say something to make people laugh; to tell a funny story",
                "example1": "She was laughing and joking with the children.",
                "example2": ""
            },
            {
                "word": "journal",
                "meaning": "a newspaper or magazine that deals with a particular subject or profession",
                "example1": "a scientific/an academic journal",
                "example2": ""
            },
            {
                "word": "journalism",
                "meaning": "the work of collecting and writing news stories for newspapers, magazines, radio, television or online news sites; the news stories that are written",
                "example1": "I'd like a career in journalism.",
                "example2": ""
            },
            {
                "word": "journalist",
                "meaning": "a person whose job is to collect and write news stories for newspapers, magazines, radio, television or online news sites",
                "example1": "a freelance journalist",
                "example2": ""
            },
            {
                "word": "journey",
                "meaning": "an act of travelling from one place to another, especially when they are far apart",
                "example1": "They went on a long train journey across India.",
                "example2": ""
            },
            {
                "word": "joy",
                "meaning": "a feeling of great happiness",
                "example1": "Her books have brought joy to millions.",
                "example2": ""
            },
            {
                "word": "judge",
                "meaning": "a person in a court who has the authority to decide how criminals should be punished or to make legal decisions",
                "example1": "a High Court judge",
                "example2": ""
            },
            {
                "word": "keen",
                "meaning": "wanting to do something or wanting something to happen very much",
                "example1": "keen to do something, John was very keen to help.",
                "example2": ""
            },
            {
                "word": "keep",
                "meaning": "to continue to have something and not give it back or throw it away",
                "example1": "He kept all her letters.",
                "example2": ""
            },
            {
                "word": "key",
                "meaning": "most important; essential",
                "example1": "the key issue/factor/point",
                "example2": ""
            },
            {
                "word": "key",
                "meaning": "a piece of metal with a special shape used for locking a door, starting a car, etc.",
                "example1": "to put/turn the key in the lock",
                "example2": ""
            },
            {
                "word": "key",
                "meaning": "to put information into a computer using a keyboard",
                "example1": "key something, I was busy keying data.",
                "example2": ""
            },
            {
                "word": "keyboard",
                "meaning": "the set of keys for operating a computer or typewriter, or the set of letters that you can touch to write on a smartphone or tablet ",
                "example1": "The program locks the keyboard until a password is given.",
                "example2": ""
            },
            {
                "word": "kick",
                "meaning": "a movement with the foot or the leg, usually to hit something with the foot",
                "example1": "the first kick of the game",
                "example2": ""
            },
            {
                "word": "kick",
                "meaning": "to hit somebody/something with your foot",
                "example1": "Stop kicking\u2014it hurts!",
                "example2": ""
            },
            {
                "word": "kid",
                "meaning": "a child or young person",
                "example1": "Do you have any kids?",
                "example2": ""
            },
            {
                "word": "kidnap",
                "meaning": "to take somebody away illegally and keep them as a prisoner, especially in order to get money or something else for returning them",
                "example1": "Two businessmen have been kidnapped by terrorists.",
                "example2": ""
            },
            {
                "word": "kidney",
                "meaning": "either of the two organs in the body that remove waste products from the blood and produce urine",
                "example1": "a kidney infection",
                "example2": ""
            },
            {
                "word": "kill",
                "meaning": "to make somebody/something die",
                "example1": "kill (somebody/something), Cancer kills thousands of people every year.",
                "example2": ""
            },
            {
                "word": "killing",
                "meaning": "an act of killing somebody deliberately",
                "example1": "Their leader condemned the torture and killing of innocent civilians.",
                "example2": ""
            },
            {
                "word": "kilometre",
                "meaning": "a unit for measuring distance; 1\u2009000 metres",
                "example1": "The industrial estate is 6 kilometres from the city centre.",
                "example2": ""
            },
            {
                "word": "kind",
                "meaning": "caring about others; gentle, friendly and generous",
                "example1": "a very kind and helpful person",
                "example2": ""
            },
            {
                "word": "kind",
                "meaning": "a group of people or things that are the same in some way; a particular variety or type",
                "example1": "kind of somebody/something, three kinds of cakes/cake",
                "example2": ""
            },
            {
                "word": "king",
                "meaning": "the male ruler of an independent state that has a royal family",
                "example1": "the kings and queens of England",
                "example2": ""
            },
            {
                "word": "kingdom",
                "meaning": "a country that has a king or queen as head of state (= official leader of the country)",
                "example1": "the United Kingdom",
                "example2": ""
            },
            {
                "word": "kiss",
                "meaning": "the act of kissing somebody/something",
                "example1": "Come here and give me a kiss!",
                "example2": ""
            },
            {
                "word": "kiss",
                "meaning": "to touch somebody with your lips as a sign of love or sexual desire or when saying hello or goodbye",
                "example1": "They stood in a doorway kissing (= kissing each other).",
                "example2": ""
            },
            {
                "word": "lab",
                "meaning": "a laboratory",
                "example1": "a computer/research lab",
                "example2": ""
            },
            {
                "word": "label",
                "meaning": "a piece of paper, etc. that is attached to something and that gives information about it",
                "example1": "Always read the label carefully.",
                "example2": ""
            },
            {
                "word": "label",
                "meaning": "to fix a label on something or write information on something",
                "example1": "label something, Make sure that your luggage is clearly labelled.",
                "example2": ""
            },
            {
                "word": "laboratory",
                "meaning": "a room or building used for scientific research, experiments, testing, etc.",
                "example1": "a clinical/research laboratory",
                "example2": ""
            },
            {
                "word": "labour",
                "meaning": "work, especially physical work",
                "example1": "manual labour (= work using your hands)",
                "example2": ""
            },
            {
                "word": "lack",
                "meaning": "the state of not having something or not having enough of something",
                "example1": "lack of something, a lack of understanding/knowledge",
                "example2": ""
            },
            {
                "word": "lack",
                "meaning": "to have none or not enough of something",
                "example1": "to lack confidence/experience/resources/power",
                "example2": ""
            },
            {
                "word": "lad",
                "meaning": "a boy or young man",
                "example1": "Things have changed since I was a lad.",
                "example2": ""
            },
            {
                "word": "ladder",
                "meaning": "a piece of equipment for climbing up and down a wall, the side of a building, etc., consisting of two lengths of wood or metal that are joined together by steps or rungs",
                "example1": "to climb up/fall off a ladder",
                "example2": ""
            },
            {
                "word": "lady",
                "meaning": "a word used to mean \u2018woman\u2019 that some people, especially older people, consider is more polite",
                "example1": "There's a lady waiting to see you.",
                "example2": ""
            },
            {
                "word": "lake",
                "meaning": "a large area of water that is surrounded by land",
                "example1": "in a lake, We swam in the lake.",
                "example2": ""
            },
            {
                "word": "lamp",
                "meaning": "a device that uses electricity, oil or gas to produce light",
                "example1": "a desk/bedside lamp",
                "example2": ""
            },
            {
                "word": "land",
                "meaning": "the surface of the earth that is not sea",
                "example1": "The new project will reclaim the land from the sea.",
                "example2": ""
            },
            {
                "word": "land",
                "meaning": "to come down through the air onto the ground or another surface",
                "example1": "The plane landed safely.",
                "example2": ""
            },
            {
                "word": "landing",
                "meaning": "an act of bringing an aircraft or a spacecraft down to the ground after a journey",
                "example1": "a perfect/smooth/safe landing",
                "example2": ""
            },
            {
                "word": "landlord",
                "meaning": "a person or company from whom you rent a room, a house, an office, etc.",
                "example1": "a buy-to-let landlord (= who buys houses and flats in order to rent them out)",
                "example2": ""
            },
            {
                "word": "landmark",
                "meaning": "something, such as a large building, that you can see clearly from a distance and that will help you to know where you are",
                "example1": "The Empire State Building is a familiar landmark on the New York skyline.",
                "example2": ""
            },
            {
                "word": "landscape",
                "meaning": "everything you can see when you look across a large area of land, especially in the country",
                "example1": "the woods and fields that are typical features of the English landscape",
                "example2": ""
            },
            {
                "word": "lane",
                "meaning": "a narrow road in the country",
                "example1": "winding country lanes",
                "example2": ""
            },
            {
                "word": "language",
                "meaning": "the system of communication in speech and writing that is used by people of a particular country or area",
                "example1": "the English language",
                "example2": ""
            },
            {
                "word": "machine",
                "meaning": "a piece of equipment with many parts that work together to do a particular task. The power used to work a machine may be electricity, steam, gas, etc. or human power.",
                "example1": "Machines have replaced human labour in many industries.",
                "example2": ""
            },
            {
                "word": "machinery",
                "meaning": "machines as a group, especially large ones",
                "example1": "agricultural/industrial machinery",
                "example2": ""
            },
            {
                "word": "mad",
                "meaning": "very stupid; not at all sensible",
                "example1": "You must be mad to risk it.",
                "example2": ""
            },
            {
                "word": "magazine",
                "meaning": "a type of large thin book with a paper cover that you can buy every week or month, containing articles, photographs, etc., often on a particular topic; a similar collection of articles, etc. that appears regularly online",
                "example1": "a weekly/monthly magazine",
                "example2": ""
            },
            {
                "word": "magic",
                "meaning": "having or using special powers to make impossible things happen or seem to happen",
                "example1": "a magic spell/charm/potion",
                "example2": ""
            },
            {
                "word": "magic",
                "meaning": "the secret power of appearing to make impossible things happen by saying special words or doing special things",
                "example1": "Do you believe in magic?",
                "example2": ""
            },
            {
                "word": "magical",
                "meaning": "containing magic; used in magic",
                "example1": "magical powers",
                "example2": ""
            },
            {
                "word": "magistrate",
                "meaning": "an official who acts as a judge in the lowest courts of law",
                "example1": "to come up before the magistrates",
                "example2": ""
            },
            {
                "word": "magnetic",
                "meaning": "behaving like a magnet; that can be attracted by a magnet",
                "example1": "magnetic materials",
                "example2": ""
            },
            {
                "word": "magnificent",
                "meaning": "extremely attractive and impressive; deserving praise",
                "example1": "The Taj Mahal is a magnificent building.",
                "example2": ""
            },
            {
                "word": "magnitude",
                "meaning": "the great size or importance of something; the degree to which something is large or important",
                "example1": "We did not realize the magnitude of the problem.",
                "example2": ""
            },
            {
                "word": "mail",
                "meaning": "the official system used for sending and delivering letters, packages, etc.",
                "example1": "a mail service/train/van",
                "example2": ""
            },
            {
                "word": "mail",
                "meaning": "to send something to somebody using the postal system",
                "example1": "mail something (to somebody/something), Don't forget to mail that letter to your mother.",
                "example2": ""
            },
            {
                "word": "main",
                "meaning": "being the largest or most important of its kind",
                "example1": "Be careful crossing the main road.",
                "example2": ""
            },
            {
                "word": "mainland",
                "meaning": "the main area of land of a country or region, not including any islands near to it",
                "example1": "to/from the mainland, a boat to/from the mainland ",
                "example2": ""
            },
            {
                "word": "mainly",
                "meaning": "more than anything else; also used to talk about the most important reason for something",
                "example1": "They eat mainly fruit and nuts.",
                "example2": ""
            },
            {
                "word": "mainstream",
                "meaning": "considered normal because it reflects what is done or accepted by most people ",
                "example1": "mainstream culture/politics",
                "example2": ""
            },
            {
                "word": "mainstream",
                "meaning": "the ideas and opinions that are thought to be normal because they are shared by most people; the people whose ideas and opinions are most accepted",
                "example1": "His radical views place him outside the mainstream of American politics.",
                "example2": ""
            },
            {
                "word": "maintain",
                "meaning": "to make something continue at the same level, standard, etc.",
                "example1": "to maintain law and order/standards/a balance/control ",
                "example2": ""
            },
            {
                "word": "maintenance",
                "meaning": "the act of keeping something in good condition by checking or repairing it regularly",
                "example1": "The school pays for heating and the maintenance of the buildings.",
                "example2": ""
            },
            {
                "word": "nail",
                "meaning": "the thin hard layer covering the outer tip of the fingers or toes",
                "example1": "Stop biting your nails!",
                "example2": ""
            },
            {
                "word": "naked",
                "meaning": "not wearing any clothes",
                "example1": "She was clutching the sheet around her naked body.",
                "example2": ""
            },
            {
                "word": "name",
                "meaning": "a word or words that a particular person, animal, place or thing is known by",
                "example1": "What's your name?",
                "example2": ""
            },
            {
                "word": "name",
                "meaning": "to give a name to somebody/something",
                "example1": "name somebody/something (after somebody), He was named after his father (= given his father's first name).",
                "example2": ""
            },
            {
                "word": "namely",
                "meaning": "used to introduce more exact and detailed information about something that you have just mentioned",
                "example1": "We need to concentrate on our target audience, namely women aged between 20 and 30.",
                "example2": ""
            },
            {
                "word": "narrative",
                "meaning": "describing events or telling a story",
                "example1": "narrative fiction",
                "example2": ""
            },
            {
                "word": "narrative",
                "meaning": "a description of events",
                "example1": "a gripping narrative of their journey up the Amazon",
                "example2": ""
            },
            {
                "word": "narrow",
                "meaning": "measuring a short distance from one side to the other, especially in relation to length",
                "example1": "Stray dogs wander the steep narrow lanes of the old town.",
                "example2": ""
            },
            {
                "word": "narrow",
                "meaning": "to become or make something less wide",
                "example1": "This is where the river narrows.",
                "example2": ""
            },
            {
                "word": "nasty",
                "meaning": "very bad or unpleasant",
                "example1": "He had a nasty accident.",
                "example2": ""
            },
            {
                "word": "nation",
                "meaning": "a country considered as a group of people with the same language, culture and history, who live in a particular area under one government",
                "example1": "European/Arab/Asian nations",
                "example2": ""
            },
            {
                "word": "national",
                "meaning": "connected with a particular nation; shared by a whole nation",
                "example1": "Decide whether it would be better to advertise in a national or a local newspaper.",
                "example2": ""
            },
            {
                "word": "national",
                "meaning": "a citizen of a particular country",
                "example1": "Polish nationals living in Germany",
                "example2": ""
            },
            {
                "word": "nationwide",
                "meaning": "happening or existing in all parts of a particular country",
                "example1": "a nationwide campaign",
                "example2": ""
            },
            {
                "word": "native",
                "meaning": "connected with the place where you were born and lived for the first years of your life",
                "example1": "your native land/country/city",
                "example2": ""
            },
            {
                "word": "native",
                "meaning": "a person who was born in a particular country or area",
                "example1": "a native of New York",
                "example2": ""
            },
            {
                "word": "natural",
                "meaning": "existing in nature; not made or caused by humans",
                "example1": "the natural world (= of trees, rivers, animals and birds)",
                "example2": ""
            },
            {
                "word": "naturally",
                "meaning": "in a way that you would expect",
                "example1": "Naturally, I get upset when things go wrong.",
                "example2": ""
            },
            {
                "word": "nature",
                "meaning": "all the plants, animals and things that exist in the universe that are not made by people",
                "example1": "Take time to appreciate the beauties of nature.",
                "example2": ""
            },
            {
                "word": "naval",
                "meaning": "connected with the navy of a country",
                "example1": "a naval base/officer/battle",
                "example2": ""
            },
            {
                "word": "o'clock",
                "meaning": "used with the numbers 1 to 12 when telling the time, to mean an exact hour",
                "example1": "He left between five and six o'clock.",
                "example2": ""
            },
            {
                "word": "obesity",
                "meaning": "the quality or fact of being very fat, in a way that is not healthy",
                "example1": "Obesity can increase the risk of heart disease.",
                "example2": ""
            },
            {
                "word": "obey",
                "meaning": "to do what you are told or expected to do",
                "example1": "obey something, to obey a command/an order/rules/the law",
                "example2": ""
            },
            {
                "word": "object",
                "meaning": "a thing that can be seen and touched, but is not alive",
                "example1": "everyday objects such as cups and saucers",
                "example2": ""
            },
            {
                "word": "object",
                "meaning": "to say that you disagree with or oppose something",
                "example1": "If nobody objects, we'll postpone the meeting till next week.",
                "example2": ""
            },
            {
                "word": "objection",
                "meaning": "a reason why you do not like or are opposed to something; a statement about this",
                "example1": "I'd like to come too, if you have no objection.",
                "example2": ""
            },
            {
                "word": "objective",
                "meaning": "not influenced by personal feelings or opinions; considering only facts",
                "example1": "an objective assessment of the situation",
                "example2": ""
            },
            {
                "word": "objective",
                "meaning": "something that you are trying to achieve",
                "example1": "the primary/principal/key objective",
                "example2": ""
            },
            {
                "word": "obligation",
                "meaning": "the state of being forced to do something because it is your duty, or because of a law, etc.",
                "example1": "obligation to do something, You are under no obligation to buy anything.",
                "example2": ""
            },
            {
                "word": "oblige",
                "meaning": "to force somebody to do something, by law, because it is a duty, etc.",
                "example1": "Parents are obliged by law to send their children to school.",
                "example2": ""
            },
            {
                "word": "observation",
                "meaning": "the act of watching somebody/something carefully for a period of time, especially to learn something",
                "example1": "Most information was collected by direct observation of the animals' behaviour.",
                "example2": ""
            },
            {
                "word": "observe",
                "meaning": "to see or notice somebody/something",
                "example1": "observe somebody/something, Have you observed any changes lately?",
                "example2": ""
            },
            {
                "word": "observer",
                "meaning": "a person who watches somebody/something",
                "example1": "According to observers, the plane exploded shortly after take-off.",
                "example2": ""
            },
            {
                "word": "obsess",
                "meaning": "to completely fill your mind so that you cannot think of anything else, in a way that is not reasonable or normal",
                "example1": "be obsessed by somebody/something, He's obsessed by computers.",
                "example2": ""
            },
            {
                "word": "obsession",
                "meaning": "the state in which a person\u2019s mind is completely filled with thoughts of one particular thing or person in a way that is not reasonable or normal",
                "example1": "Her fear of flying is bordering on obsession.",
                "example2": ""
            },
            {
                "word": "obstacle",
                "meaning": "a situation, an event, etc. that makes it difficult for you to do or achieve something",
                "example1": "So far, we have managed to overcome all the obstacles that have been placed in our path.",
                "example2": ""
            },
            {
                "word": "obtain",
                "meaning": "to get something, especially by making an effort",
                "example1": "to obtain information/data/results",
                "example2": ""
            },
            {
                "word": "obvious",
                "meaning": "easy to see or understand",
                "example1": "I know you don't like her but try not to make it so obvious.",
                "example2": ""
            },
            {
                "word": "obviously",
                "meaning": "used when giving information that you expect other people to know already or agree with",
                "example1": "Obviously, we don't want to spend too much money.",
                "example2": ""
            },
            {
                "word": "occasion",
                "meaning": "a particular time when something happens",
                "example1": "on an occasion, on this/that occasion",
                "example2": ""
            },
            {
                "word": "pace",
                "meaning": "the speed at which somebody/something walks, runs or moves",
                "example1": "at a\u2026 pace, to set off at a steady/gentle/leisurely pace",
                "example2": ""
            },
            {
                "word": "pace",
                "meaning": "to walk up and down in a small area many times, especially because you are feeling nervous or angry",
                "example1": "+ adv./prep., She paced up and down outside the room.",
                "example2": ""
            },
            {
                "word": "pack",
                "meaning": "a container, usually made of paper, that holds a number of the same thing or an amount of something, ready to be sold",
                "example1": "pack of something, a pack of cigarettes/gum",
                "example2": ""
            },
            {
                "word": "pack",
                "meaning": "to put clothes, etc. into a bag in preparation for a trip away from home",
                "example1": "I haven't packed yet.",
                "example2": ""
            },
            {
                "word": "package",
                "meaning": "something that is wrapped in paper or put into a thick envelope so that it can be sent by mail, carried easily, or given as a present",
                "example1": "A large package has arrived for you.",
                "example2": ""
            },
            {
                "word": "package",
                "meaning": "to put something into a box, bag, etc. to be sold or transported",
                "example1": "package something, packaged food/goods",
                "example2": ""
            },
            {
                "word": "packet",
                "meaning": "a small container made of paper or card in which goods are packed for selling",
                "example1": "a packet of biscuits/cigarettes/crisps",
                "example2": ""
            },
            {
                "word": "pad",
                "meaning": "a thick piece of soft material that is used, for example, for cleaning or protecting something or for holding liquid",
                "example1": "medicated cleansing pads for sensitive skin",
                "example2": ""
            },
            {
                "word": "page",
                "meaning": "one side or both sides of a sheet of paper in a book, magazine, etc.",
                "example1": "Turn to page 64.",
                "example2": ""
            },
            {
                "word": "pain",
                "meaning": "the feelings that you have in your body when you have been hurt or when you are ill",
                "example1": "a cry of pain",
                "example2": ""
            },
            {
                "word": "painful",
                "meaning": "causing you pain",
                "example1": "Is your back still painful?",
                "example2": ""
            },
            {
                "word": "paint",
                "meaning": "a liquid that is put on surfaces to give them a particular colour; a layer of this liquid when it has dried on a surface",
                "example1": "white paint",
                "example2": ""
            },
            {
                "word": "paint",
                "meaning": "to cover a surface or object with paint",
                "example1": "paint something with something, Paint the shed with weather-resistant paint.",
                "example2": ""
            },
            {
                "word": "painter",
                "meaning": "a person whose job is painting buildings, walls, etc.",
                "example1": "He works as a painter and decorator.",
                "example2": ""
            },
            {
                "word": "painting",
                "meaning": "a picture that has been painted",
                "example1": "a watercolour/crylic painting ",
                "example2": ""
            },
            {
                "word": "pair",
                "meaning": "two things of the same type, especially when they are used or worn together",
                "example1": "a pair of shoes/boots",
                "example2": ""
            },
            {
                "word": "palace",
                "meaning": "the official home of a king, queen, president, etc.",
                "example1": "Buckingham Palace",
                "example2": ""
            },
            {
                "word": "pale",
                "meaning": "having skin that is very light in colour; having skin that has less colour than usual because of illness, a strong emotion, etc.",
                "example1": "a pale complexion",
                "example2": ""
            },
            {
                "word": "palm",
                "meaning": "a straight tree with a mass of long leaves at the top, growing in tropical countries. There are several types of palm tree, some of which produce fruit.",
                "example1": "a date palm",
                "example2": ""
            },
            {
                "word": "pan",
                "meaning": "",
                "example1": "",
                "example2": ""
            },
            {
                "word": "qualification",
                "meaning": "an exam that you have passed or a course of study that you have successfully completed",
                "example1": "academic/educational/professional/vocational qualifications",
                "example2": ""
            },
            {
                "word": "qualified",
                "meaning": "having passed the exams or completed the training that are necessary in order to do a particular job; having the experience to do a particular job",
                "example1": "a qualified teacher",
                "example2": ""
            },
            {
                "word": "qualify",
                "meaning": "to reach the standard of ability or knowledge needed to do a particular job, for example by completing a course of study or passing exams",
                "example1": "How long does it take to qualify?",
                "example2": ""
            },
            {
                "word": "quality",
                "meaning": "the standard of something when it is compared to other things like it; how good or bad something is",
                "example1": "Improving the quality of care for nursing home residents is a priority.",
                "example2": ""
            },
            {
                "word": "quantity",
                "meaning": "an amount or a number of something",
                "example1": "quantity of something, a large/small quantity of something",
                "example2": ""
            },
            {
                "word": "quarter",
                "meaning": "one of four equal parts of something",
                "example1": "quarter of something, a quarter of an hour/a century",
                "example2": ""
            },
            {
                "word": "queen",
                "meaning": "the female ruler of an independent state that has a royal family",
                "example1": "She was crowned queen at the age of fifteen.",
                "example2": ""
            },
            {
                "word": "query",
                "meaning": "a question, especially one asking for information or expressing a doubt about something",
                "example1": "Our assistants will be happy to answer your queries.",
                "example2": ""
            },
            {
                "word": "quest",
                "meaning": "a long search for something, especially for some quality such as happiness",
                "example1": "quest for something, the quest for happiness/knowledge/truth",
                "example2": ""
            },
            {
                "word": "question",
                "meaning": "a sentence, phrase or word that asks for information",
                "example1": "You didn't answer my question.",
                "example2": ""
            },
            {
                "word": "question",
                "meaning": "to ask somebody questions about something, especially officially",
                "example1": "question somebody, Police are keen to question any witnesses.",
                "example2": ""
            },
            {
                "word": "questionnaire",
                "meaning": "a written list of questions that are answered by a number of people so that information can be collected from the answers",
                "example1": "(British English), to fill in a questionnaire",
                "example2": ""
            },
            {
                "word": "queue",
                "meaning": "a line of people, cars, etc. waiting for something or to do something",
                "example1": "There were long queues at polling stations.",
                "example2": ""
            },
            {
                "word": "queue",
                "meaning": "to wait in a line of people, vehicles, etc. in order to do something, get something or go somewhere",
                "example1": "queue (up), People queued up outside.",
                "example2": ""
            },
            {
                "word": "quick",
                "meaning": "done with speed; taking or lasting a short time",
                "example1": "a quick look/check/search",
                "example2": ""
            },
            {
                "word": "quickly",
                "meaning": "fast",
                "example1": "She walked quickly away.",
                "example2": ""
            },
            {
                "word": "quiet",
                "meaning": "making very little noise",
                "example1": "her quiet voice",
                "example2": ""
            },
            {
                "word": "quietly",
                "meaning": "in a way that makes very little noise",
                "example1": "to ask/speak/talk quietly",
                "example2": ""
            },
            {
                "word": "quit",
                "meaning": "to leave your job, school, etc.",
                "example1": "If I don't get more money I'll quit.",
                "example2": ""
            },
            {
                "word": "quite",
                "meaning": "to some degree",
                "example1": "quite good/interesting/common/difficult",
                "example2": ""
            },
            {
                "word": "race",
                "meaning": "a competition between people, animals, vehicles, etc. to see which one is the faster or fastest",
                "example1": "a boat/horse race",
                "example2": ""
            },
            {
                "word": "race",
                "meaning": "to compete against somebody/something to see who can go faster or the fastest, do something first, etc.; to take part in a race or races",
                "example1": "They raced to a thrilling victory in the relay.",
                "example2": ""
            },
            {
                "word": "racial",
                "meaning": "happening or existing between people of different races",
                "example1": "racial hatred/prejudice/tension/violence",
                "example2": ""
            },
            {
                "word": "racing",
                "meaning": "the sport of racing horses",
                "example1": "He used to watch the racing on TV in the afternoons.",
                "example2": ""
            },
            {
                "word": "racism",
                "meaning": "the unfair treatment of people who belong to a different race; violent behaviour towards them",
                "example1": "a victim of racism",
                "example2": ""
            },
            {
                "word": "racist",
                "meaning": "having the belief that some races of people are better than others or having general beliefs about other people based only on their race; showing this through violent or unfair treatment of people of other races",
                "example1": "racist attitudes/remarks",
                "example2": ""
            },
            {
                "word": "racist",
                "meaning": "a person who believes that some races of people are better than others or who has general beliefs about other people based only on their race, and may show this in violent or unfair treatment of people of other races",
                "example1": "He's a racist.",
                "example2": ""
            },
            {
                "word": "radar",
                "meaning": "a system that uses radio waves to find the position and movement of objects, for example planes and ships, when they cannot be seen",
                "example1": "They located the ship by radar.",
                "example2": ""
            },
            {
                "word": "radiation",
                "meaning": "powerful and very dangerous rays that are sent out from radioactive substances",
                "example1": "high levels/doses of radiation that damage cells",
                "example2": ""
            },
            {
                "word": "radical",
                "meaning": "relating to the most basic and important parts of something; complete and detailed",
                "example1": "the need for radical changes in education",
                "example2": ""
            },
            {
                "word": "radio",
                "meaning": "the activity of broadcasting programmes for people to listen to; the programmes that are broadcast",
                "example1": "The play was written specially for radio.",
                "example2": ""
            },
            {
                "word": "rage",
                "meaning": "a feeling of violent anger that is difficult to control",
                "example1": "His face was dark with rage.",
                "example2": ""
            },
            {
                "word": "raid",
                "meaning": "a short surprise attack on an enemy by soldiers, ships or aircraft",
                "example1": "to conduct/launch a raid",
                "example2": ""
            },
            {
                "word": "raid",
                "meaning": "to visit a person or place without warning to look for criminals, illegal goods, drugs, etc.",
                "example1": "The house was raided in the early hours.",
                "example2": ""
            },
            {
                "word": "rail",
                "meaning": "a wooden or metal bar placed around something as a barrier or to provide support",
                "example1": "She leaned on the ship's rail and gazed out to sea.",
                "example2": ""
            },
            {
                "word": "railway",
                "meaning": "a track with rails on which trains run",
                "example1": "The railway is still under construction.",
                "example2": ""
            },
            {
                "word": "rain",
                "meaning": "water that falls from the sky in separate drops",
                "example1": "There will be rain in all parts tomorrow.",
                "example2": ""
            },
            {
                "word": "rain",
                "meaning": "when it rains, water falls from the sky in drops",
                "example1": "Is it raining?",
                "example2": ""
            },
            {
                "word": "raise",
                "meaning": "to lift or move something to a higher level",
                "example1": "She raised the gun and fired.",
                "example2": ""
            },
            {
                "word": "rally",
                "meaning": "a large public meeting, especially one held to support a particular idea or political party",
                "example1": "to attend/hold a rally",
                "example2": ""
            },
            {
                "word": "sack",
                "meaning": "to dismiss somebody from a job",
                "example1": "She was sacked for refusing to work on Sundays.",
                "example2": ""
            },
            {
                "word": "sacred",
                "meaning": "connected with God or a god; considered to be holy",
                "example1": "a sacred image/shrine/temple",
                "example2": ""
            },
            {
                "word": "sacrifice",
                "meaning": "the fact of giving up something important or valuable to you in order to get or do something that seems more important; something that you give up in this way",
                "example1": "The makers of the product assured us that there had been no sacrifice of quality.",
                "example2": ""
            },
            {
                "word": "sacrifice",
                "meaning": "to give up something that is important or valuable to you in order to get or do something that seems more important for yourself or for another person",
                "example1": "sacrifice something for somebody/something, She sacrificed everything for her children.",
                "example2": ""
            },
            {
                "word": "sad",
                "meaning": "unhappy or showing unhappiness",
                "example1": "sad to do something, We are very sad to hear that you are leaving.",
                "example2": ""
            },
            {
                "word": "sadly",
                "meaning": "in a sad way",
                "example1": "\u2018I'm so sorry,\u2019 she said sadly. ",
                "example2": ""
            },
            {
                "word": "safe",
                "meaning": "protected from any danger, harm or loss",
                "example1": "The children are quite safe here.",
                "example2": ""
            },
            {
                "word": "safety",
                "meaning": "the state of being safe and protected from danger or harm",
                "example1": "in safety, a place where children can play in safety",
                "example2": ""
            },
            {
                "word": "sail",
                "meaning": "a sheet of strong cloth which the wind blows against to make a boat or ship travel through the water",
                "example1": "As the boat moved down the river the wind began to fill the sails.",
                "example2": ""
            },
            {
                "word": "sail",
                "meaning": "to travel on water using sails or an engine",
                "example1": "+ adv./prep., to sail into harbour",
                "example2": ""
            },
            {
                "word": "sailing",
                "meaning": "the sport or activity of travelling in a boat with sails",
                "example1": "to go sailing",
                "example2": ""
            },
            {
                "word": "sailor",
                "meaning": "a person who works on a ship as a member of the crew",
                "example1": "a crew of two officers and 13 sailors",
                "example2": ""
            },
            {
                "word": "saint",
                "meaning": "a person that the Christian Church recognizes as being very holy, because of the way they have lived or died",
                "example1": "St John",
                "example2": ""
            },
            {
                "word": "sake",
                "meaning": "",
                "example1": "",
                "example2": ""
            },
            {
                "word": "salad",
                "meaning": "a mixture of raw vegetables such as lettuce, tomato and cucumber, usually served with other food as part of a meal",
                "example1": "All main courses come with salad or vegetables.",
                "example2": ""
            },
            {
                "word": "salary",
                "meaning": "money that employees receive for doing their job, especially professional employees or people working in an office, usually paid every month",
                "example1": "an annual salary of $40\u2009000",
                "example2": ""
            },
            {
                "word": "sale",
                "meaning": "an act or the process of selling something",
                "example1": "regulations governing the sale of alcoholic beverages",
                "example2": ""
            },
            {
                "word": "salt",
                "meaning": "a white substance that is added to food to make it taste better or to preserve it. Salt is obtained from mines and is also found in seawater. It is sometimes called common salt to show that it is different from other chemical salts. Its chemical name is sodium chloride.",
                "example1": "Pass the salt, please.",
                "example2": ""
            },
            {
                "word": "same",
                "meaning": "exactly the one or ones referred to or mentioned; not different",
                "example1": "We have lived in the same house for twenty years.",
                "example2": ""
            },
            {
                "word": "same",
                "meaning": "in the same way",
                "example1": "We treat boys exactly the same as girls.",
                "example2": ""
            },
            {
                "word": "table",
                "meaning": "a piece of furniture that consists of a flat top supported by legs",
                "example1": "at a/the table, We sat at a round table in the corner.",
                "example2": ""
            },
            {
                "word": "tablet",
                "meaning": "a small computer that is easy to carry, with a large touch screen and usually without a physical keyboard",
                "example1": "The company has launched its latest 10-inch tablet.",
                "example2": ""
            },
            {
                "word": "tackle",
                "meaning": "an act of trying to take the ball from an opponent in football (soccer), hockey, etc.; an act of knocking somebody to the ground, for example in rugby or American football ",
                "example1": "He was booked for a late tackle on Torres.",
                "example2": ""
            },
            {
                "word": "tackle",
                "meaning": "to make a determined effort to deal with a difficult problem or situation",
                "example1": "The government is determined to tackle inflation.",
                "example2": ""
            },
            {
                "word": "tactic",
                "meaning": "the particular method you use to achieve something",
                "example1": "They tried all kinds of tactics to get us to go.",
                "example2": ""
            },
            {
                "word": "tactical",
                "meaning": "connected with the particular method you use to achieve something",
                "example1": "tactical planning",
                "example2": ""
            },
            {
                "word": "tag",
                "meaning": "a small piece of paper, cloth, plastic, etc. attached to something to identify it or give information about it",
                "example1": "He put name tags on all his shirts.",
                "example2": ""
            },
            {
                "word": "tag",
                "meaning": "to fasten a tag onto something/somebody",
                "example1": "Each animal was tagged with a number for identification.",
                "example2": ""
            },
            {
                "word": "tail",
                "meaning": "the part that sticks out at the back of the body of a bird, an animal or a fish, which the animal can move from side to side or up and down",
                "example1": "The dog ran up, wagging its tail.",
                "example2": ""
            },
            {
                "word": "take",
                "meaning": "to carry or move something from one place to another",
                "example1": "take something, Remember to take your coat when you leave.",
                "example2": ""
            },
            {
                "word": "tale",
                "meaning": "a story created using the imagination, especially one that is full of action and adventure",
                "example1": "a coming-of-age/morality tale",
                "example2": ""
            },
            {
                "word": "talent",
                "meaning": "a natural ability to do something well",
                "example1": "The festival showcases the talent of young musicians.",
                "example2": ""
            },
            {
                "word": "talented",
                "meaning": "having a natural ability to do something well",
                "example1": "a talented player/musician/artist ",
                "example2": ""
            },
            {
                "word": "talk",
                "meaning": "a speech or lecture on a particular subject",
                "example1": "I went to several interesting talks at the conference.",
                "example2": ""
            },
            {
                "word": "talk",
                "meaning": "to say things; to speak in order to give information or to express feelings, ideas, etc.",
                "example1": "Stop talking and listen!",
                "example2": ""
            },
            {
                "word": "tall",
                "meaning": "having a greater than average height",
                "example1": "She's tall and thin.",
                "example2": ""
            },
            {
                "word": "tank",
                "meaning": "a large container for holding liquid or gas",
                "example1": "a fuel/water/storage tank",
                "example2": ""
            },
            {
                "word": "tap",
                "meaning": "a device for controlling the flow of water from a pipe into a bath or sink",
                "example1": "bath taps",
                "example2": ""
            },
            {
                "word": "tap",
                "meaning": "to hit somebody/something quickly and lightly",
                "example1": "tap (away) (at something), Someone tapped at the door.",
                "example2": ""
            },
            {
                "word": "tape",
                "meaning": "a long, narrow piece of material with a sticky substance on one side that is used for sticking things together",
                "example1": "adhesive/sticky tape",
                "example2": ""
            },
            {
                "word": "ugly",
                "meaning": "unpleasant to look at",
                "example1": "an ugly face",
                "example2": ""
            },
            {
                "word": "ultimate",
                "meaning": "happening at the end of a long process",
                "example1": "our ultimate goal/aim/objective/target",
                "example2": ""
            },
            {
                "word": "ultimately",
                "meaning": "in the end; finally",
                "example1": "A poor diet will ultimately lead to illness.",
                "example2": ""
            },
            {
                "word": "umbrella",
                "meaning": "an object with a round folding frame of long, straight pieces of metal covered with material, that you use to protect yourself from the rain or from hot sun",
                "example1": "to carry/hold an umbrella",
                "example2": ""
            },
            {
                "word": "unable",
                "meaning": "not having the skill, strength, time, knowledge, etc. to do something",
                "example1": "a former soldier who has been unable to find work since the war ended",
                "example2": ""
            },
            {
                "word": "unacceptable",
                "meaning": "so bad that you think it should not be allowed",
                "example1": "Such behaviour is totally unacceptable in a civilized society.",
                "example2": ""
            },
            {
                "word": "uncertainty",
                "meaning": "the state of being uncertain",
                "example1": "There is considerable uncertainty about the company's future.",
                "example2": ""
            },
            {
                "word": "uncle",
                "meaning": "the brother of your mother or father; the husband of your aunt or uncle",
                "example1": "Uncle Ian",
                "example2": ""
            },
            {
                "word": "uncomfortable",
                "meaning": "not letting you feel physically comfortable; unpleasant to wear, sit on, etc.",
                "example1": "uncomfortable shoes",
                "example2": ""
            },
            {
                "word": "unconscious",
                "meaning": "in a state like sleep because of an injury or illness, and not able to use your senses",
                "example1": "They found him lying unconscious on the floor.",
                "example2": ""
            },
            {
                "word": "under",
                "meaning": "below something",
                "example1": "He pulled up the covers and crawled under.",
                "example2": ""
            },
            {
                "word": "under",
                "meaning": "in, to or through a position that is below something",
                "example1": "Have you looked under the bed?",
                "example2": ""
            },
            {
                "word": "undergo",
                "meaning": "to experience something, especially a change or something unpleasant",
                "example1": "to undergo tests/trials/repairs",
                "example2": ""
            },
            {
                "word": "undergraduate",
                "meaning": "a university or college student who is studying for their first degree",
                "example1": "a first-year undergraduate",
                "example2": ""
            },
            {
                "word": "underground",
                "meaning": "under the surface of the ground",
                "example1": "an underground bunker/tunnel",
                "example2": ""
            },
            {
                "word": "underground",
                "meaning": "under the surface of the ground",
                "example1": "Rescuers found victims trapped several feet underground.",
                "example2": ""
            },
            {
                "word": "underlying",
                "meaning": "important in a situation but not always easily noticed or stated clearly",
                "example1": "The underlying assumption is that the amount of money available is limited.",
                "example2": ""
            },
            {
                "word": "undermine",
                "meaning": "to make something, especially somebody\u2019s confidence or authority, gradually weaker or less effective",
                "example1": "Our confidence in the team has been seriously undermined by their recent defeats.",
                "example2": ""
            },
            {
                "word": "understand",
                "meaning": "to know or realize the meaning of words, a language, what somebody says, etc.",
                "example1": "understand (something), Can you understand French?",
                "example2": ""
            },
            {
                "word": "understanding",
                "meaning": "the knowledge that somebody has about a particular subject or situation",
                "example1": "Students will gain a broad understanding of the workings of Parliament.",
                "example2": ""
            },
            {
                "word": "vacation",
                "meaning": "a period of time spent travelling or resting away from home",
                "example1": "on vacation, They're on vacation in Hawaii right now.",
                "example2": ""
            },
            {
                "word": "vacuum",
                "meaning": "a space that is completely empty of all substances, including all air or other gas",
                "example1": "a vacuum pump (= one that creates a vacuum)",
                "example2": ""
            },
            {
                "word": "vague",
                "meaning": "not clear in a person\u2019s mind",
                "example1": "to have a vague impression/memory/recollection of something",
                "example2": ""
            },
            {
                "word": "valid",
                "meaning": "that is legally or officially acceptable",
                "example1": "Do you have a valid passport?",
                "example2": ""
            },
            {
                "word": "validity",
                "meaning": "the state of being legally or officially acceptable",
                "example1": "The period of validity of the agreement has expired.",
                "example2": ""
            },
            {
                "word": "valley",
                "meaning": "an area of low land between hills or mountains, often with a river flowing through it; the land that a river flows through",
                "example1": "in a valley, In the valley below cows were grazing peacefully.",
                "example2": ""
            },
            {
                "word": "valuable",
                "meaning": "worth a lot of money",
                "example1": "My home is my most valuable asset.",
                "example2": ""
            },
            {
                "word": "value",
                "meaning": "how much something is worth in money or other goods for which it can be exchanged",
                "example1": "to go up/rise/increase in value",
                "example2": ""
            },
            {
                "word": "value",
                "meaning": "to think that somebody/something is important",
                "example1": "value somebody/something, He has come to value her advice and support.",
                "example2": ""
            },
            {
                "word": "van",
                "meaning": "a covered vehicle with no side windows in its back half, usually smaller than a lorry, used for carrying goods or people",
                "example1": "the driver of a white van",
                "example2": ""
            },
            {
                "word": "vanish",
                "meaning": "to disappear suddenly and/or in a way that you cannot explain",
                "example1": "He turned around and vanished into the house.",
                "example2": ""
            },
            {
                "word": "variable",
                "meaning": "often changing; likely to change",
                "example1": "variable temperatures",
                "example2": ""
            },
            {
                "word": "variable",
                "meaning": "a situation, number or quantity that can vary or be varied",
                "example1": "With so many variables, it is difficult to calculate the cost.",
                "example2": ""
            },
            {
                "word": "variation",
                "meaning": "a change, especially in the amount or level of something",
                "example1": "The dial records very slight variations in pressure.",
                "example2": ""
            },
            {
                "word": "varied",
                "meaning": "of many different types",
                "example1": "varied opinions",
                "example2": ""
            },
            {
                "word": "variety",
                "meaning": "several different sorts of the same thing",
                "example1": "There is a wide variety of patterns to choose from.",
                "example2": ""
            },
            {
                "word": "various",
                "meaning": "several different",
                "example1": "various types/forms/kinds of somebody/something ",
                "example2": ""
            },
            {
                "word": "vary",
                "meaning": "to be different from each other in size, shape, etc.",
                "example1": "New techniques were introduced with varying degrees of success.",
                "example2": ""
            },
            {
                "word": "vast",
                "meaning": "extremely large in area, size, amount, etc.",
                "example1": "a vast area of forest",
                "example2": ""
            },
            {
                "word": "vegetable",
                "meaning": "a plant or part of a plant that is eaten as food. Potatoes, beans and onions are all vegetables.",
                "example1": "The children don't eat enough fresh vegetables.",
                "example2": ""
            },
            {
                "word": "wage",
                "meaning": "a regular amount of money that you earn, usually every week or every month, for work or services",
                "example1": "wage/wages of something, wages of \u00a3300 a week",
                "example2": ""
            },
            {
                "word": "wait",
                "meaning": "an act of waiting; an amount of time waited",
                "example1": "The wait seemed interminable.",
                "example2": ""
            },
            {
                "word": "wait",
                "meaning": "to stay where you are or delay doing something until somebody/something comes or something happens",
                "example1": "She rang the bell and waited.",
                "example2": ""
            },
            {
                "word": "waiter",
                "meaning": "a man whose job is to serve customers at their tables in a restaurant, etc.",
                "example1": "I'll ask the waiter for the bill.",
                "example2": ""
            },
            {
                "word": "wake",
                "meaning": "to stop sleeping; to make somebody stop sleeping",
                "example1": "I always wake early in the summer.",
                "example2": ""
            },
            {
                "word": "walk",
                "meaning": "a journey on foot, usually for pleasure or exercise",
                "example1": "Let's go for a walk.",
                "example2": ""
            },
            {
                "word": "walk",
                "meaning": "to move or go somewhere by putting one foot in front of the other on the ground, but without running",
                "example1": "The baby is just learning to walk.",
                "example2": ""
            },
            {
                "word": "wall",
                "meaning": "a long, solid structure that rises straight up from the ground, made of stone, brick or concrete, that surrounds, divides or protects an area of land",
                "example1": "to build a wall",
                "example2": ""
            },
            {
                "word": "wander",
                "meaning": "to walk slowly around or to a place, often without any particular sense of purpose or direction",
                "example1": "+ adv./prep., She wandered aimlessly around the streets.",
                "example2": ""
            },
            {
                "word": "want",
                "meaning": "to have a desire or a wish for something/somebody",
                "example1": "want somebody/something, Do you want some more tea?",
                "example2": ""
            },
            {
                "word": "war",
                "meaning": "a situation in which two or more countries or groups of people fight against each other over a period of time",
                "example1": "the Second World War",
                "example2": ""
            },
            {
                "word": "ward",
                "meaning": "a separate room or area in a hospital for people with the same type of medical condition",
                "example1": "a maternity/surgical/psychiatric/children\u2019s ward",
                "example2": ""
            },
            {
                "word": "warehouse",
                "meaning": "a building where large quantities of goods are stored, especially before they are sent to shops to be sold",
                "example1": "Police are investigating a fire at a furniture warehouse.",
                "example2": ""
            },
            {
                "word": "warfare",
                "meaning": "the activity of fighting a war, especially using particular weapons or methods",
                "example1": "air/naval/guerrilla warfare",
                "example2": ""
            },
            {
                "word": "warm",
                "meaning": "at a fairly high temperature in a way that is pleasant, rather than being hot or cold",
                "example1": "warm weather/temperatures/air",
                "example2": ""
            },
            {
                "word": "warm",
                "meaning": "to make something/somebody warm or warmer; to become warm or warmer",
                "example1": "warm something/somebody/yourself, Come in and warm yourself by the fire.",
                "example2": ""
            },
            {
                "word": "warming",
                "meaning": "the process of making something, or of becoming, warm or warmer",
                "example1": "atmospheric warming",
                "example2": ""
            },
            {
                "word": "warn",
                "meaning": "to tell somebody about something, especially something dangerous or unpleasant that is likely to happen, so that they can avoid it",
                "example1": "warn somebody, I tried to warn him, but he wouldn't listen.",
                "example2": ""
            },
            {
                "word": "warning",
                "meaning": "a statement, an event, etc. telling somebody that something bad or unpleasant may happen in the future so that they can try to avoid it",
                "example1": "I had absolutely no warning.",
                "example2": ""
            },
            {
                "word": "warrant",
                "meaning": "a legal document that is signed by a judge and gives the police authority to do something",
                "example1": "an arrest warrant",
                "example2": ""
            },
            {
                "word": "yard",
                "meaning": "a piece of land next to or around your house where you can grow flowers, fruit, vegetables, etc., usually with a lawn (= an area of grass)",
                "example1": "They have a gorgeous old oak tree in their front yard.",
                "example2": ""
            },
            {
                "word": "yeah",
                "meaning": "",
                "example1": "",
                "example2": ""
            },
            {
                "word": "year",
                "meaning": "the period from 1 January to 31 December, that is 365 or 366 days, divided into 12 months",
                "example1": "Elections take place every year.",
                "example2": ""
            },
            {
                "word": "yell",
                "meaning": "to shout loudly, for example because you are angry, excited, frightened or in pain",
                "example1": "yell (at somebody/something), He yelled at the other driver.",
                "example2": ""
            },
            {
                "word": "yellow",
                "meaning": "having the colour of lemons or butter",
                "example1": "pale yellow flowers",
                "example2": ""
            },
            {
                "word": "yellow",
                "meaning": "the colour of lemons or butter",
                "example1": "She was dressed in yellow.",
                "example2": ""
            },
            {
                "word": "yes",
                "meaning": "used to answer a question and say that something is correct or true",
                "example1": "\u2018Is this your car?\u2019 \u2018Yes, it is.\u2019",
                "example2": ""
            },
            {
                "word": "yesterday",
                "meaning": "on the day before today",
                "example1": "A company spokeswoman said yesterday that no final decision had been made yet.",
                "example2": ""
            },
            {
                "word": "yesterday",
                "meaning": "the day before today",
                "example1": "Yesterday was Sunday.",
                "example2": ""
            },
            {
                "word": "yet",
                "meaning": "used in negative sentences and questions to talk about something that has not happened but that you expect to happen",
                "example1": "(British English), I haven't received a letter from him yet.",
                "example2": ""
            },
            {
                "word": "yet",
                "meaning": "despite what has just been said",
                "example1": "It's a small car, yet it's surprisingly spacious.",
                "example2": ""
            },
            {
                "word": "yield",
                "meaning": "the total amount of crops, profits, etc. that are produced",
                "example1": "a high crop yield",
                "example2": ""
            },
            {
                "word": "yield",
                "meaning": "the total amount of crops, profits, etc. that are produced",
                "example1": "a high crop yield",
                "example2": ""
            },
            {
                "word": "you",
                "meaning": "used as the subject or object of a verb or after a preposition to refer to the person or people being spoken or written to",
                "example1": "You said you knew the way.",
                "example2": ""
            },
            {
                "word": "young",
                "meaning": "having lived or existed for only a short time; not fully developed",
                "example1": "Young babies need to be wrapped up warmly.",
                "example2": ""
            },
            {
                "word": "young",
                "meaning": "young people considered as a group",
                "example1": "It's a movie that will appeal to the young.",
                "example2": ""
            },
            {
                "word": "youngster",
                "meaning": "a young person or a child",
                "example1": "The camp is for youngsters aged 8 to 14.",
                "example2": ""
            },
            {
                "word": "your",
                "meaning": "of or belonging to the person or people being spoken or written to",
                "example1": "I like your dress.",
                "example2": ""
            },
            {
                "word": "yours",
                "meaning": "of or belonging to you",
                "example1": "Is that book yours?",
                "example2": ""
            },
            {
                "word": "yourself",
                "meaning": "used when the person or people being spoken to both cause and are affected by an action",
                "example1": "Have you hurt yourself?",
                "example2": ""
            },
            {
                "word": "zero",
                "meaning": "0",
                "example1": "Five, four, three, two, one, zero\u2026 We have lift-off.",
                "example2": ""
            },
            {
                "word": "zone",
                "meaning": "an area or a region with a particular feature or use",
                "example1": "a war/combat/demilitarized/exclusion zone",
                "example2": ""
            }
        
  ];