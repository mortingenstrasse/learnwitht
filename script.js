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
  document.getElementById('content').innerHTML = `
     
    <h1>${wordData.word}</h1>
    <hr />
    <p><strong>meaning:</strong><br />${wordData.meaning}</p>
    <p>${wordData.example1}</p>
    <p>${wordData.example2}</p>
    <button onclick="continueLearning()">CONTINUE</button>
     <!-- Badge -->
       <div class="badge">
        <img src="images/badge.png" alt="Badge" />
      </div>
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
  document.getElementById('content').innerHTML = `
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
  document.getElementById('content').innerHTML = `
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

// Word Power Sekmesini Yükler
function loadWordPowerTab() {
  const content = document.getElementById('content');

  // İçerik alanını sıfırla ve Word Power ekranını göster
  if (content) {
    showRandomWord(); // Kelime öğrenme sayfasını yükle
  }

  // Sekme durumunu güncelle
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('tab-word').classList.add('active');
}

// Grammar Sekmesini Yükler
function loadGrammarTab() {
  const content = document.getElementById('content');

  // Eğer içerik bölümü yoksa hata oluşmasını engelle
  if (!content) {
    console.error("Content element not found!");
    return;
  }

  // Grammar içeriğini ekle
  content.innerHTML = `
    <div class="grammar-content">
      <h1>Grammar</h1>

<section>
  <h2>Section 1: Relative Pronouns (Who/That)</h2>
  <p>Relative pronouns introduce relative clauses to give more information.</p>
  <ul>
    <li><strong>Who:</strong> Used for people.</li>
    <li><strong>That:</strong> Used for both people and things (informal).</li>
  </ul>
  <h3>Examples:</h3>
  <p>1. I like people who/that aren’t too serious.</p>
  <p>2. I want someone who/that has a good sense of humor.</p>
  <p>3. I’d like someone (who/that) I can talk to easily.</p>
</section>

<section>
  <h2>Section 2: Adverbial Clauses</h2>
  <p>An adverbial clause is a dependent clause that acts like an adverb. It modifies the verb in the main clause.</p>
  <h3>Examples:</h3>
  <p>- It bothers me when a friend answers the phone at the dinner table.</p>
  <p>- I’ll call you when I arrive home.</p>
  <p>- He left early because he wasn’t feeling well.</p>
</section>

<section>
  <h2>Section 3: Gerund Phrases</h2>
  <p>Gerund phrases use verbs ending in -ing that function as nouns.</p>
  <h3>Examples:</h3>
  <p>1. She’d be good at testing games.</p>
  <p>2. Playing games all day would be a lot of fun.</p>
</section>

<section>
  <h2>Section 4: Comparisons</h2>
  <p>Comparisons highlight differences or similarities between things.</p>
  <h3>Examples:</h3>
  <p>- She earns more than her coworkers.</p>
  <p>- He earns as much as his brother.</p>
  <p>- The job doesn’t pay as much as the previous one.</p>
</section>

<section>
  <h2>Section 5: Requests with Modals</h2>
  <p>Modal verbs are used to make polite requests or ask for permission.</p>
  <h3>Examples:</h3>
  <p>1. Can I borrow your truck, please?</p>
  <p>2. Could you lend me your truck?</p>
  <p>3. Is it OK if I use your credit card?</p>
</section>

<section>
  <h2>Section 6: Indirect Requests</h2>
  <p>Indirect requests are polite ways to pass messages, ask for information, or request actions.</p>
  <h3>Examples:</h3>
  <p>1. Could you tell Mary that she left her phone in my car?</p>
  <p>2. Can you tell Mary not to forget the student reports?</p>
</section>

<section>
  <h2>Section 7: Past Continuous vs Simple Past</h2>
  <p>The Past Continuous describes actions that were happening at a specific time in the past.</p>
  <h3>Examples:</h3>
  <p>1. While I was working out, it calculated how many calories I burned.</p>
  <p>2. A man was looking for his cat when he found a suspicious package inside a trash can.</p>
</section>

<section>
  <h2>Section 8: Past Perfect</h2>
  <p>The Past Perfect (had + past participle) shows that one past action happened before another past action.</p>
  <h3>Examples:</h3>
  <p>1. When I came back, someone had stolen it.</p>
  <p>2. I guess I’d forgotten to lock it up.</p>
</section>

<section>
  <h2>Section 9: Present Perfect and Present Perfect Continuous</h2>
  <p>Present Perfect: Actions that started in the past and continue into the present.</p>
  <h3>Examples:</h3>
  <p>1. I have studied web design for 2 years.</p>
  <p>2. She has worked at this company since 2015.</p>
</section>

<section>
  <h2>Section 10: Would Rather vs Would Prefer</h2>
  <p>Would rather and would prefer express preferences.</p>
  <h3>Examples:</h3>
  <p>1. I would rather stay at home than go out tonight.</p>
  <p>2. I would prefer to stay at home tonight.</p>
</section>

<section>
  <h2>Section 11: Past Modals for Degrees of Certainty</h2>
  <p>Past modals express certainty, possibility, or impossibility about a past event.</p>
  <h3>Examples:</h3>
  <p>1. He must have fallen asleep. (certainty)</p>
  <p>2. He may have gone out. (possibility)</p>
</section>
    </div>
  `;

  // Sekme durumunu güncelle
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('tab-grammar').classList.add('active');
}