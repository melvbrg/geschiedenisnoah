
const data = {
 "WOII":[{"q":"Waarom startte Hitler WOII?","a":"Expansiedrang / Lebensraum"}],
 "Hitler deel 1":[{"q":"Waarom WOI oorzaak WOII?","a":"Versailles → woede"}],
 "Hitler deel 2":[{"q":"Overwicht geallieerden?","a":"Economie + vloot"}],
 "Breendonk":[{"q":"Geschiedenis fort?","a":"1909-14 → SS kamp"}],
 "Periodisering":[{"q":"Wat is een eeuw?","a":"100 jaar"}]
};

function goHome(){showPage('home');}

function showPage(id){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}

window.onload = ()=>{loadDocs();};

function loadDocs(){
 let d=document.getElementById('docs');
 d.innerHTML='';
 Object.keys(data).forEach(doc=>{
   d.innerHTML += `<div class='card'>${doc}</div>`;
 });
}
