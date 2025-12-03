
let data={};
fetch("data/questions.json").then(r=>r.json()).then(j=>{data=j; init();});

function init(){
 if(document.getElementById("fc")) loadFC();
 if(document.getElementById("quiz-box")) loadQuiz();
 if(document.getElementById("scores")) loadScores();
}

// FLASHCARDS
function loadFC(){
 let box=document.getElementById("fc");
 Object.keys(data).forEach(set=>{
   data[set].forEach(c=>{
     box.innerHTML+=`<div class='card'><b>${c.q}</b><br><br>${c.a}</div>`;
   });
 });
}

// QUIZ
function loadQuiz(){
 let box=document.getElementById("quiz-box");
 let arr=[];
 Object.keys(data).forEach(set=>{
   data[set].forEach(q=>arr.push({...q,set:set}));
 });
 let i=0, score=0;

 function ask(){
   let q=arr[i];
   let opts=[q.a,...q.wrong];
   opts.sort(()=>Math.random()-0.5);
   box.innerHTML=`<div class='card'><h3>${q.q}</h3>`+
   opts.map(o=>`<button onclick="answer('${o}','${q.a}')">${o}</button>`).join("")+
   `</div>`;
 }
 window.answer=function(sel, correct){
   if(sel===correct){
     score++;
   }
   i++;
   if(i<arr.length) ask();
   else{
     saveScore(score,arr.length);
     quizCompleted();
   }
 }
 ask();
}

function quizCompleted(){
 document.getElementById("quiz-box").innerHTML=
 `<h2>Quiz klaar!</h2><a class='btn' href='index.html'>Terug</a>`;
}

function saveScore(sc,tot){
 let s=JSON.parse(localStorage.getItem("scores")||"[]");
 s.push({s:sc,t:tot,date:new Date().toLocaleString()});
 localStorage.setItem("scores",JSON.stringify(s));
}

function loadScores(){
 let box=document.getElementById("scores");
 let s=JSON.parse(localStorage.getItem("scores")||"[]");
 s.forEach(e=>{
   box.innerHTML+=`<div class='card'>${e.s}/${e.t} — ${e.date}</div>`;
 });
}
