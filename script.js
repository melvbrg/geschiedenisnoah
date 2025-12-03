const chapters={
wo2:[{q:'Waarom startte Hitler WOII?',a:'Expansiedrang'}],
macht1:[{q:'Waarom werd WOI oorzaak WOII?',a:'Verdrag van Versailles'}],
breendonk:[{q:'Wanneer is Fort Breendonk gebouwd?',a:'1909-1914'}],
macht2:[{q:'Waarvoor staat NSDAP?',a:'Nationaal Socialistische Duitse Arbeiderspartij'}],
periodisering:[{q:'Wat is een eeuw?',a:'100 jaar'}]
};

let currentQuiz=[],currentIndex=0,currentDoc='';

function openChapter(id){
document.getElementById('home').classList.add('hidden');
const c=document.getElementById('chapter');
c.innerHTML='<h2>Flashcards</h2>';
chapters[id].forEach(x=>{c.innerHTML+=`<div class='card' onclick="alert('${x.a}')">${x.q}</div>`});
c.classList.remove('hidden');
}
function showQuizSelector(){
document.getElementById('home').classList.add('hidden');
document.getElementById('quiz-select').classList.remove('hidden');
}
function startQuiz(doc){
currentDoc=doc;currentQuiz=[...chapters[doc]];currentIndex=0;
document.getElementById('quiz-select').classList.add('hidden');
document.getElementById('quiz').classList.remove('hidden');
document.getElementById('quiz-title').innerText='Quiz – '+doc;
loadQuestion();
}
function loadQuestion(){
document.getElementById('question').innerText=currentQuiz[currentIndex].q;
document.getElementById('answer').value='';
document.getElementById('feedback').innerText='';
}
function confetti(){
for(let i=0;i<40;i++){
const d=document.createElement('div');
d.className='confetti';
d.style.left=Math.random()*100+'vw';
d.style.background=`hsl(${Math.random()*360},80%,60%)`;
document.body.appendChild(d);
setTimeout(()=>d.remove(),1500);
}}
function checkAnswer(){
const inp=document.getElementById('answer').value.toLowerCase().trim();
const right=chapters[currentDoc][currentIndex].a.toLowerCase();
if(inp && right.includes(inp)){
document.getElementById('feedback').innerText='Juist! 🎉';
confetti();
} else document.getElementById('feedback').innerText='Fout ❌';
currentIndex++;
if(currentIndex<currentQuiz.length)setTimeout(loadQuestion,1000);
else document.getElementById('feedback').innerText+='\nQuiz klaar!';
}
