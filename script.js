
const data = {"WOII": [{"q": "Waarom startte Hitler WOII?", "a": "Expansiedrang / Lebensraum"}, {"q": "Wat zijn de 3 strategie\u00ebn van Hitler?", "a": "Oosten-SU, Westen-havens, Bondgenoot-Itali\u00eb"}, {"q": "Economische noodzaak voor oorlog?", "a": "Geen toegang tot grondstoffen of zee\u00ebn"}, {"q": "Ideologische redenen?", "a": "Anti-communisme, anti-joods, Arisch ras overleven"}, {"q": "Waarom lieten FR/UK Hitler doen?", "a": "Trauma WOI, crisis, taalrecht, leger niet bedreigend"}, {"q": "Wat is de Phoney War?", "a": "FR/UK verklaren oorlog maar vallen Duitsland niet aan"}, {"q": "Andere namen Phoney War?", "a": "Dr\u00f4le de Guerre, Sitzkrieg"}, {"q": "Waarom valt FR niet aan?", "a": "Politiek verdeeld, defensief"}, {"q": "Waarom valt UK niet aan?", "a": "Klein leger"}, {"q": "Reactie op Polen?", "a": "Oorlog + sancties"}, {"q": "Hitlers antwoord?", "a": "Blitzkrieg"}, {"q": "Wat is Blitzkrieg?", "a": "Snelle aanval"}, {"q": "Crystal Meth rol?", "a": "Wakker houden"}, {"q": "Koning Belgi\u00eb?", "a": "Leopold III"}, {"q": "Wie weigerde vrede?", "a": "Churchill"}, {"q": "Hongerplan?", "a": "Sovjets verhongeren"}, {"q": "Grootste operatie?", "a": "Operatie Barbarossa"}, {"q": "Sterker leger?", "a": "FR+UK"}], "Hitler1": [{"q": "Waarom WOI oorzaak WOII?", "a": "Versailles \u2192 woede"}, {"q": "Waarom wonnen geallieerden?", "a": "Industrie+vloot"}, {"q": "Schrik revolutie?", "a": "Russisch voorbeeld"}, {"q": "Leger 1918?", "a": "Keizer weg + capitulatie"}, {"q": "Strijd tegen communisten?", "a": "Propaganda + spionnen"}, {"q": "Alternatief klassenstrijd?", "a": "Externe vijand"}, {"q": "Hoe politiek actief?", "a": "Spion \u2192 NSDAP"}, {"q": "Mein Kampf boodschap?", "a": "Arisch nationalisme"}, {"q": "Versailles frustratie?", "a": "Land+betalingen"}, {"q": "Waarom VS leningen?", "a": "Stabiliteit"}, {"q": "Gevolg leningen?", "a": "Gouden jaren 20"}, {"q": "Stop leningen?", "a": "Beurscrash"}, {"q": "Oorzaken crash?", "a": "Schulden, banken"}, {"q": "Periode na 1929?", "a": "Depressie"}, {"q": "Hoe dictator?", "a": "Reichstagbrand"}, {"q": "Zondebok?", "a": "1 vijand"}, {"q": "Op wie schuld?", "a": "Joden+communisten"}, {"q": "Dolkstoot?", "a": "Verraad WOI"}, {"q": "Propaganda?", "a": "Media+parades"}], "Hitler2": [{"q": "Overwicht geallieerden?", "a": "Economie+vloot"}, {"q": "Schrik kapitalisten?", "a": "Communisme"}, {"q": "Wie was Lenin?", "a": "Leider Bolsjewieken"}, {"q": "Maatregel Lenin?", "a": "Landafname"}, {"q": "Wat met keizer?", "a": "Vlucht NL"}, {"q": "Thule-cirkel?", "a": "Arische groep"}, {"q": "Klassenstrijd?", "a": "Arm vs rijk"}, {"q": "Alternatief strijd?", "a": "Externe vijanden"}, {"q": "NSDAP?", "a": "Nationaal-Socialistische Duitse Arbeiderspartij"}, {"q": "Kenmerk Mein Kampf?", "a": "Arisch nationalisme"}], "Breendonk": [{"q": "Geschiedenis fort?", "a": "1909-14 \u2192 SS kamp"}, {"q": "Waarom fortengordel?", "a": "Bescherming BE"}, {"q": "Welke steden?", "a": "Luik+Antwerpen"}, {"q": "Wanneer gebouwd?", "a": "1909\u20131914"}, {"q": "Waarom HQ?", "a": "Strategie"}, {"q": "SS?", "a": "Schutzstaffel"}, {"q": "Waarom opgepakt?", "a": "Totalitarisme"}, {"q": "Waarom nummers?", "a": "Ontmenselijking"}, {"q": "Geen info?", "a": "Geheimhouding"}, {"q": "Soorten gevangenen?", "a": "Haftlinge+gijzelaars"}, {"q": "Dagelijks leven?", "a": "Overbevolkt+arbeid"}, {"q": "Instroom Joden?", "a": "Stijgt 42-44"}, {"q": "Totalitarisme?", "a": "Volledige controle"}, {"q": "Fascisme?", "a": "1 leider"}, {"q": "Nazisme?", "a": "Fascisme+rassenhaat"}, {"q": "Voorbeelden?", "a": "Geweld, nummers"}, {"q": "Verschil gevangenis?", "a": "Wreedheid"}, {"q": "Waarom hel?", "a": "Marteling+honger"}], "Periodisering": [{"q": "Eeuw?", "a": "100 jaar"}, {"q": "Millennium?", "a": "1000 jaar"}, {"q": "Tijdsvak?", "a": "Indeling"}, {"q": "Periodisering?", "a": "Verdelen verleden"}, {"q": "Waarom tijdsvakken?", "a": "Structuur"}, {"q": "7 tijdsvakken?", "a": "Prehistorie \u2192 Hedendaags"}, {"q": "Waarom kunstmatig?", "a": "Afspraken"}, {"q": "Ronde jaartallen?", "a": "Geen exact moment"}, {"q": "Waarom vroeger anders?", "a": "Nationalisme"}, {"q": "Kritiek?", "a": "Te politiek"}, {"q": "Jouw criteria?", "a": "Grote veranderingen"}, {"q": "Welke eeuw?", "a": "21e"}, {"q": "Welk millennium?", "a": "3e"}, {"q": "Huidig tijdvak?", "a": "Hedendaags"}, {"q": "Scharnierdata?", "a": "Overgangen"}]};

function openPage(id){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}

window.onload=()=>{
 let fs=document.getElementById('flash-select');
 let qs=document.getElementById('quiz-select');
 Object.keys(data).forEach(k=>{
   fs.innerHTML+=`<option value="${k}">${k}</option>`;
   qs.innerHTML+=`<option value="${k}">${k}</option>`;
 });
};

function startFlashcards(){
 let key=document.getElementById('flash-select').value;
 let box=document.getElementById('flash-container');
 box.innerHTML="";
 data[key].forEach(card=>{
    box.innerHTML+=`<div class='flashcard'><b>${card.q}</b><br><br><span style='color:#ff7f50'>${card.a}</span></div>`;
 });
}

function startQuiz(){
 let key=document.getElementById('quiz-select').value;
 let box=document.getElementById('quiz-box');
 let arr=data[key];
 let i=0;
 function ask(){
   box.innerHTML=`<h3>${arr[i].q}</h3><input id='ans'><button onclick='go()'>OK</button><p id='fb'></p>`;
 }
 window.go=function(){
   let a=document.getElementById('ans').value.toLowerCase();
   if(arr[i].a.toLowerCase().includes(a)) document.getElementById('fb').innerText="Juist!";
   else document.getElementById('fb').innerText="Fout!";
   i=(i+1)%arr.length; setTimeout(ask,900);
 };
 ask();
}
