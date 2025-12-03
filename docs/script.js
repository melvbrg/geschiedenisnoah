// ---------------------------
//   GLOBALS
// ---------------------------

let questionsData = {};
let currentQuestions = [];
let currentIndex = 0;
let currentCorrect = [];
let score = 0;

// ---------------------------
//   LOAD JSON
// ---------------------------

fetch("data/questions.json")
  .then(response => response.json())
  .then(data => {
    questionsData = data;
  });

// ---------------------------
//   FLASHCARDS
// ---------------------------

function loadFlashcards() {
  const select = document.getElementById("flashcardSelect");
  const container = document.getElementById("flashcard-container");

  const selected = select.value;
  container.innerHTML = "";

  if (!selected) return;

  const list = questionsData[selected];

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const q = document.createElement("h3");
    q.innerText = item.question;

    const a = document.createElement("p");
    a.innerText = "Antwoorden: " + item.correct.join(", ");

    card.appendChild(q);
    card.appendChild(a);
    container.appendChild(card);
  });
}

// ---------------------------
//   START QUIZ
// ---------------------------

function startQuiz() {
  const select = document.getElementById("quizSelect");
  const selected = select.value;

  if (!selected) {
    alert("Kies eerst een onderdeel!");
    return;
  }

  currentQuestions = shuffleArray([...questionsData[selected]]);
  currentIndex = 0;
  score = 0;

  document.getElementById("quiz-area").style.display = "block";

  loadQuestion();
}

// ---------------------------
//   LOAD QUESTION
// ---------------------------

function loadQuestion() {
  const q = currentQuestions[currentIndex];

  document.getElementById("quiz-question").innerText = q.question;

  const answersDiv = document.getElementById("quiz-answers");
  answersDiv.innerHTML = "";

  const answers = [...q.correct, ...q.wrong];
  const shuffled = shuffleArray(answers);

  currentCorrect = q.correct;

  shuffled.forEach(ans => {
    const label = document.createElement("label");
    label.className = "answer-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = ans;

    label.appendChild(checkbox);
    label.append(" " + ans);
    answersDiv.appendChild(label);
  });
}

// ---------------------------
//   CHECK ANSWER
// ---------------------------

function checkAnswer() {
  const chosen = [...document.querySelectorAll("#quiz-answers input:checked")].map(el => el.value);

  const allCorrect = 
    chosen.length === currentCorrect.length &&
    chosen.every(a => currentCorrect.includes(a));

  if (allCorrect) {
    score++;
    showConfetti();
    alert("Juist! 🎉");
  } else {
    alert("Fout ❌\nCorrecte antwoorden:\n" + currentCorrect.join("\n"));
  }

  currentIndex++;

  if (currentIndex >= currentQuestions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

// ---------------------------
//   END QUIZ
// ---------------------------

function endQuiz() {
  alert("Quiz afgelopen! Score: " + score + "/" + currentQuestions.length);

  saveScore(score, currentQuestions.length);

  document.getElementById("quiz-area").style.display = "none";
}

// ---------------------------
//   SAVE SCORE
// ---------------------------

function saveScore(score, total) {
  const rec = JSON.parse(localStorage.getItem("scores") || "[]");

  rec.push({
    date: new Date().toLocaleString(),
    score: score,
    total: total
  });

  localStorage.setItem("scores", JSON.stringify(rec));
}

// ---------------------------
//   LOAD SCORES
// ---------------------------

function loadScores() {
  const list = JSON.parse(localStorage.getItem("scores") || "[]");
  const container = document.getElementById("score-list");

  container.innerHTML = "";

  list.forEach(s => {
    const div = document.createElement("div");
    div.className = "score-card";
    div.innerText = `${s.date} — ${s.score}/${s.total}`;
    container.appendChild(div);
  });
}

// ---------------------------
//   CONFETTI EFFECT
// ---------------------------

function showConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";

  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 1 + "s";
    confetti.appendChild(piece);
  }

  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 2000);
}

// ---------------------------
//   SHUFFLE FUNCTION
// ---------------------------

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
