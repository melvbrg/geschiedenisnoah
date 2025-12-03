
let data = {};

fetch("data/questions.json")
 .then(r=>r.json())
 .then(j=>{data=j; loadDocs();});

function showPage(p){
 document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
 document.getElementById(p).classList.add('active');
 if(p=='scores') loadScores();
}

function loadDocs(){
 let box=document.getElementById('docList');
 box.innerHTML="";
 Object.keys(data).forEach(doc=>{
   box.innerHTML += `<div class='card' onclick="openDoc('${doc}')">${doc}</div>`;
 });
}

function openDoc(doc){
 let fileMap={
   "WOII":"Waarom startte hilter wo2.pdf",
   "Hitler deel 1":"HOE RAAKTE HITLER AAN DE MACHT.pdf",
   "Hitler deel 2":"Hoe raakte hitler aan de macht deel 2.pdf",
   "Breendonk":"breendonk.pdf",
   "Periodisering":"periodisering examen Noah geschiedenis.pdf"
 };
 window.open("docs/"+fileMap[doc], "_blank");
}

function openFlashcardMenu(){
 showPage('menu');
 document.getElementById("menu-title").innerText="Kies hoofdstuk voor flashcards";
 let box=document.getElementById('menu-box');
 box.innerHTML="";
 Object.keys(data).forEach(doc=>{
   box.innerHTML+=`<div class='card' onclick="openFlashcards('${doc}')">${doc}</div>`;
 });
}

function openFlashcards(doc){
 showPage('flashcards');
 document.getElementById("fc-title").innerText=doc;
 let box=document.getElementById("fc-box");
 box.innerHTML="";

 data[doc].forEach(card=>{
   box.innerHTML+=`<div class='card'><b>${card.q}</b><br><br><span style='color:#ff4f8b'>${card.a}</span></div>`;
 });
}

function openQuizMenu(){
 showPage('menu');
 document.getElementById("menu-title").innerText="Kies hoofdstuk voor quiz";
 let box=document.getElementById('menu-box');
 box.innerHTML="";
 Object.keys(data).forEach(doc=>{
   box.innerHTML+=`<div class='card' onclick="openQuiz('${doc}')">${doc}</div>`;
 });
}

function openQuiz(doc){
 showPage('quiz');
 let arr=data[doc], i=0, score=0;
 document.getElementById("quiz-title").innerText=doc;

 function ask(){
   document.getElementById("quiz-box").innerHTML=
   `<h3>${arr[i].q}</h3>
    <input id='ans'>
    <button onclick='go()'>OK</button>
    <p id='fb'></p>`;
 }

 window.go=function(){
   let a=document.getElementById('ans').value.toLowerCase();
   if(arr[i].a.toLowerCase().includes(a)){
     document.getElementById("fb").innerText="Juist!";
     score++; confetti();
   } else {
     document.getElementById("fb").innerText="Fout!";
   }
   i++;
   if(i<arr.length) setTimeout(ask,700);
   else{
     saveScore(doc,score,arr.length);
     setTimeout(()=>showPage('home'),900);
   }
 };

 ask();
}

function confetti(){
 for(let i=0;i<25;i++){
   let c=document.createElement("div");
   c.className="confetti";
   c.style.left=Math.random()*100+"vw";
   c.style.background=Math.random()>0.5?"#ff4f8b":"#ff9a76";
   document.body.appendChild(c);
   setTimeout(()=>c.remove(),2000);
 }
}

function saveScore(doc,sc,tot){
 let arr=JSON.parse(localStorage.getItem('scores')||'[]');
 arr.push({doc:doc,score:sc,total:tot,date:new Date().toLocaleString()});
 localStorage.setItem('scores',JSON.stringify(arr));
}

function loadScores(){
 let box=document.getElementById("score-box");
 let arr=JSON.parse(localStorage.getItem('scores')||'[]');
 box.innerHTML="";
 arr.forEach(s=>{
   box.innerHTML+=`<div class='card'>${s.doc} — ${s.score}/${s.total} — ${s.date}</div>`;
 });
}
