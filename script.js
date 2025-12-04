
async function loadQA(){
 const r=await fetch('data/questions.json'); return r.json();
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

document.addEventListener('DOMContentLoaded',async()=>{
 const qa=await loadQA();

 if(document.getElementById('cards')){
   let html='';
   qa.forEach(sec=>sec.items.forEach(it=>{
     html+=`<div class='card'><b>${it.question}</b><br>${it.answer}</div>`;
   }));
   document.getElementById('cards').innerHTML=html;
 }

 if(document.getElementById('section')){
   const sel=document.getElementById('section');
   qa.forEach(sec=>{sel.innerHTML+=`<option>${sec.section}</option>`});
   sel.onchange=()=>renderQuiz();
   renderQuiz();
 }

 async function renderQuiz(){
   const sel=document.getElementById('section').value;
   const sec=qa.find(s=>s.section===sel);
   const it=sec.items[Math.floor(Math.random()*sec.items.length)];
   let opts=[it.answer,...it.wrong];
   shuffle(opts);
   let html=`<h2>${it.question}</h2>`;
   opts.forEach(o=>{
     html+=`<button class='opt' onclick="alert('${o===it.answer?'Correct!':'Fout!'}')">${o}</button>`;
   });
   document.getElementById('quiz').innerHTML=html;
 }
});
