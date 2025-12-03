
const data = {
  "WOII":[{"q":"Waarom startte Hitler WOII?","a":"Expansiedrang / Lebensraum"}],
  "Hitler1":[{"q":"Waarom WOI oorzaak WOII?","a":"Versailles → woede"}],
  "Hitler2":[{"q":"Overwicht geallieerden?","a":"Economie + vloot"}],
  "Breendonk":[{"q":"Geschiedenis fort?","a":"1909-14 → SS kamp"}],
  "Periodisering":[{"q":"Eeuw?","a":"100 jaar"}]
};

function showPage(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.getElementById(p).classList.add('active');
  if(p==='home') loadScores();
}

window.onload = () => { loadDocs(); loadScores(); };

function loadDocs(){
  let d=document.getElementById('docs');
  d.innerHTML='';
  Object.keys(data).forEach(doc=>{
    d.innerHTML += `<div class='card' onclick="openFlash('${doc}')">${doc}</div>`;
  });
}

function openFlash(doc){
  document.getElementById('flash-title').innerText = doc;
  let box=document.getElementById('flash-box');
  box.innerHTML='';
  data[doc].forEach(q=>{
    box.innerHTML += `<div class='card'><b>${q.q}</b><br><br><span style='color:#ff6b9f'>${q.a}</span></div>`;
  });
  showPage('flash');
}

function openQuiz(doc){
  let arr=data[doc];
  let i=0, score=0;

  function ask(){
    document.getElementById('quiz-box').innerHTML =
      `<h3>${arr[i].q}</h3>
       <input id='ans'>
       <button onclick='go()'>OK</button>
       <p id='fb'></p>`;
  }

  window.go = function(){
    let a=document.getElementById('ans').value.toLowerCase();
    if(arr[i].a.toLowerCase().includes(a)){
      document.getElementById('fb').innerText="Juist!";
      score++; confetti();
    } else {
      document.getElementById('fb').innerText="Fout!";
    }
    i++;
    if(i<arr.length) setTimeout(ask,800);
    else{
      saveScore(doc,score,arr.length);
      setTimeout(()=>showPage('home'),1000);
    }
  };

  document.getElementById('quiz-title').innerText = doc;
  ask();
  showPage('quiz');
}

function confetti(){
  for(let i=0;i<30;i++){
    let c=document.createElement('div');
    c.className='confetti';
    c.style.left = Math.random()*100 + 'vw';
    c.style.background = Math.random()>0.5 ? '#ff6b9f' : '#ffa07a';
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
  let box=document.getElementById('scores');
  let arr=JSON.parse(localStorage.getItem('scores')||'[]');
  box.innerHTML='';
  arr.forEach(s=>{
    box.innerHTML += `<div class='card'>${s.doc} – ${s.score}/${s.total} – ${s.date}</div>`;
  });
}
