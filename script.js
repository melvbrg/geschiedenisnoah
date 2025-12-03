// ------------------------------
// Laden van JSON met vragen
// ------------------------------
async function loadQuestions() {
    const res = await fetch("data/questions.json");
    return await res.json();
}

// ------------------------------
// FLASHCARDS
// ------------------------------
document.addEventListener("DOMContentLoaded", async () => {
    const data = await loadQuestions();

    // FLASHCARDS PAGE
    const select = document.getElementById("flashcard-select");
    if (select) {
        select.addEventListener("change", () => {
            const chosen = select.value;
            showFlashcards(chosen, data);
        });
    }

    // QUIZ PAGE
    const quizSelect = document.getElementById("quiz-select");
    if (quizSelect) {
        quizSelect.addEventListener("change", () => {
            const chosen = quizSelect.value;
            startQuiz(chosen, data);
        });
    }
});

function showFlashcards(topic, data) {
    const container = document.getElementById("flashcard-container");
    container.innerHTML = "";

    if (!topic || !data[topic]) return;

    data[topic].forEach(q => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<b>${q.question}</b><br><br>${q.answer}`;
        container.appendChild(card);
    });
}

// ------------------------------
// QUIZ
// ------------------------------

let currentIndex = 0;
let currentQuestions = [];
let currentTopic = "";
let score = 0;

function startQuiz(topic, data) {
    if (!topic || !data[topic]) return;

    currentTopic = topic;
    currentQuestions = [...data[topic]];

    // shuffle:
    currentQuestions = currentQuestions.sort(() => Math.random() - 0.5);

    currentIndex = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    const quizBox = document.getElementById("quiz-box");
    if (!quizBox) return;

    quizBox.innerHTML = "";

    if (currentIndex >= currentQuestions.length) {
        quizBox.innerHTML = `
            <h2>Quiz klaar!</h2>
            <p>Score: ${score}/${currentQuestions.length}</p>
        `;
        saveScore(currentTopic, score, currentQuestions.length);
        return;
    }

    const q = currentQuestions[currentIndex];

    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    let html = `<h3>${q.question}</h3>`;
    shuffledOptions.forEach(opt => {
        html += `<button class="quiz-btn" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</button>`;
    });

    quizBox.innerHTML = html;
}

function checkAnswer(option) {
    const q = currentQuestions[currentIndex];
    const quizBox = document.getElementById("quiz-box");

    if (option === q.answer) {
        score++;
        confettiEffect();
    }

    currentIndex++;
    showQuestion();
}

// ------------------------------
// SCORES OPSLAAN
// ------------------------------
function saveScore(topic, score, total) {
    const allScores = JSON.parse(localStorage.getItem("scores") || "{}");

    if (!allScores[topic]) allScores[topic] = [];

    allScores[topic].push({
        date: new Date().toLocaleString(),
        score: score,
        total: total
    });

    localStorage.setItem("scores", JSON.stringify(allScores));
}

// ------------------------------
// CONFETTI EFFECT
// ------------------------------
function confettiEffect() {
    const duration = 600;
    const end = Date.now() + duration;

    (function frame() {
        const colors = ["#ff80bf", "#ff9966", "#ff4da6", "#ffa64d"];

        for (let i = 0; i < 5; i++) {
            const conf = document.createElement("div");
            conf.className = "confetti";
            conf.style.background = colors[Math.floor(Math.random()*colors.length)];
            conf.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(conf);

            setTimeout(() => conf.remove(), 600);
        }

        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}
