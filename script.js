let vragen = {};
let huidigeVragen = [];
let index = 0;
let score = 0;
let huidigOnderdeel = "";

async function loadQuestions() {
    const response = await fetch("data/questions.json");
    vragen = await response.json();
}

loadQuestions();

function startQuiz() {
    const selectie = document.getElementById("onderdeel-dropdown").value;
    if (!selectie) return alert("Kies een onderdeel!");

    huidigOnderdeel = selectie;
    huidigeVragen = vragen[selectie];
    index = 0;
    score = 0;

    document.getElementById("onderdeel-selectie").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    toonVraag();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function toonVraag() {
    let vraagObj = huidigeVragen[index];

    document.getElementById("feedback").innerText = "";
    document.getElementById("vraag").innerText = vraagObj.vraag;

    let antwoordenDiv = document.getElementById("antwoorden");
    antwoordenDiv.innerHTML = "";

    let opties = [vraagObj.juist, ...vraagObj.fout];
    opties = shuffle(opies);

    opties.forEach(optie => {
        let btn = document.createElement("button");
        btn.className = "quiz-btn";
        btn.innerText = optie;
        btn.onclick = () => controleerAntwoord(optie, vraagObj.juist, btn);
        antwoordenDiv.appendChild(btn);
    });
}

function controleerAntwoord(gegeven, juist, knop) {
    let buttons = document.querySelectorAll(".quiz-btn");

    buttons.forEach(b => b.disabled = true);

    if (gegeven === juist) {
        knop.style.background = "#8fda9f";
        confetti();
        score++;
    } else {
        knop.style.background = "#ff9e9e";

        buttons.forEach(b => {
            if (b.innerText === juist) b.style.background = "#8fda9f";
        });
    }

    document.getElementById("feedback").innerText = 
        `${index + 1} / ${huidigeVragen.length}`;
}

function volgendeVraag() {
    index++;

    if (index >= huidigeVragen.length) {
        localStorage.setItem("score_" + huidigOnderdeel, score);
        alert("Klaar! Je score: " + score);
        window.location.href = "scores.html";
        return;
    }

    toonVraag();
}

// Confetti effect
function confetti() {
    for (let i = 0; i < 20; i++) {
        let c = document.createElement("div");
        c.className = "confetti";
        document.body.appendChild(c);

        c.style.left = Math.random() * window.innerWidth + "px";

        setTimeout(() => c.remove(), 600);
    }
}
