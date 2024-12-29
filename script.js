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
        "word": "resilient",
        "meaning": "able to recover quickly from difficulties",
        "example1": "Children are often more resilient than adults.",
        "example2": "The community showed great resilience after the disaster."
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
        }
    
  ];
  
  let currentWordIndex = 0;
  let learnedWords = [];
  
  // Rastgele bir kelime seç ve göster
  function showRandomWord() {
    if (learnedWords.length === 5) {
      showParagraphScreen(); // 5 kelime öğrenildiğinde paragraf ekranına geç
      return;
    }
  
    currentWordIndex = Math.floor(Math.random() * words.length); // Rastgele kelime
    const wordData = words[currentWordIndex];
  
    // HTML içeriğini güncelle
    document.querySelector('.content').innerHTML = `
      <h1>${wordData.word}</h1>
      <hr />
      <p><strong>meaning:</strong><br />${wordData.meaning}</p>
      <p>${wordData.example1}</p>
      <p>${wordData.example2}</p>
      <button onclick="continueLearning()">CONTINUE</button>
    `;
  }
  
  // Continue butonuna basıldığında
  function continueLearning() {
    const wordData = words[currentWordIndex];
    learnedWords.push(wordData.word); // Öğrenilen kelimeyi kaydet
    showRandomWord(); // Yeni kelimeyi göster
  }
  
  // Paragraf ekranını göster
  function showParagraphScreen() {
    document.querySelector('.content').innerHTML = `
      <h2>Write a short paragraph using the words which you learnt</h2>
      <hr />
      <p><strong>${learnedWords.join(', ')}</strong></p>
      <textarea id="paragraphInput" rows="6" placeholder="Start writing..."></textarea>
      <button onclick="finishParagraph()">FINISH</button>
    `;
  }
  
  // Paragraf tamamlandığında
  function finishParagraph() {
    const paragraph = document.getElementById('paragraphInput').value;
    document.querySelector('.content').innerHTML = `
      <h2>Your Paragraph</h2>
      <p>${paragraph}</p>
      <button onclick="restartLearning()">NEXT 5 WORDS</button>
    `;
  }
  
  // Yeni 5 kelime için sıfırla
  function restartLearning() {
    learnedWords = [];
    showRandomWord();
  }
  
  // İlk kelimeyi göster
  showRandomWord();