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
    <h2>Write a short paragraph using the words you’ve learned</h2>
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