// mise en place des variables

let button=document.getElementById('bouton');
let affichage=document.getElementById('affichage');
let multiplicateur=document.getElementById('multiplicateur');
let autoclick=document.getElementById('autoclick');
let autoclick2=document.getElementById('autoclick2');
let autoclick3=document.getElementById('autoclick3');
let plusScore1=document.getElementById('plusScore1');
let plusScore2=document.getElementById('plusScore2');
let plusScore3=document.getElementById('plusScore3');
let plusScore4=document.getElementById('plusScore4');
let plusScore5=document.getElementById('plusScore5');
let plusScore6=document.getElementById('plusScore6');
let score=0;
let cpt=1;
let cpt2=0;
let cpt3=0;
let cpt4=0;
let prix=20;
let prixMulti=1000;
let prixUsine=10000;
let prixVille=100000;

//fonction afin de désactiver le bouton entrer

// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     return false;
//   }
// }, true);

function Affichage(){
	if (score>=1000000000){
		affichage.innerHTML='<div id="ligne"><p>Nombre de fraises : </p></div><div class="nombres"><span>'+(Math.round(score/100000000)/10)+'mi</span> <img class="fraise1" src="images/fraise.png" alt="fraise"></div></div><div id="ligne"><div><p>Fraises par click : </p></div><div class="nombres"><span>'+cpt+'</span> <img class="fraise" src="images/fraise2.png" alt="fraise2"></div></div><div id="ligne"><div><p>Nombre de fermes : </p></div><div class="nombres"><span>'+cpt2+'</span> <img class="ferme" src="images/ferme.png" alt="ferme"></div></div><div id="ligne"><div><p>Nombre d\'usines : </p></div><div class="nombres"><span>'+cpt3+'</span> <img class="usine" src="images/usine.png" alt="usine"></div></div><div id="ligne"><div><p>Nombre de villes : </p></div><div class="nombres"><span>'+cpt4+'</span> <img class="ville" src="images/ville.png" alt="ville"></div></div>';
	}else if (score>=1000000){
		affichage.innerHTML='<div id="ligne"><div><p>Nombre de fraises : </p></div><div class="nombres"><span>'+(Math.round(score/100000)/10)+'M</span> <img class="fraise1" src="images/fraise.png" alt="fraise"></div></div><div id="ligne"><div><p>Fraises par click : </p></div><div class="nombres"><span>'+cpt+'</span> <img class="fraise" src="images/fraise2.png" alt="fraise2"></div></div><div id="ligne"><div><p>Nombre de fermes : </p></div><div class="nombres"><span>'+cpt2+'</span> <img class="ferme" src="images/ferme.png" alt="ferme"></div></div><div id="ligne"><div><p>Nombre d\'usines : </p></div><div class="nombres"><span>'+cpt3+'</span> <img class="usine" src="images/usine.png" alt="usine"></div></div><div id="ligne"><div><p>Nombre de villes : </p></div><div class="nombres"><span>'+cpt4+'</span> <img class="ville" src="images/ville.png" alt="ville"></div></div>';
	}else if (score>=1000){
		affichage.innerHTML='<div id="ligne"><div><p>Nombre de fraises : </p></div><div class="nombres"><span>'+(Math.round(score/100)/10)+'k</span> <img class="fraise1" src="images/fraise.png" alt="fraise"></div></div><div id="ligne"><div><p>Fraises par click : </p></div><div class="nombres"><span>'+cpt+'</span> <img class="fraise" src="images/fraise2.png" alt="fraise2"></div></div><div id="ligne"><div><p>Nombre de fermes : </p></div><div class="nombres"><span>'+cpt2+'</span> <img class="ferme" src="images/ferme.png" alt="ferme"></div></div><div id="ligne"><div><p>Nombre d\'usines : </p></div><div class="nombres"><span>'+cpt3+'</span> <img class="usine" src="images/usine.png" alt="usine"></div></div><div id="ligne"><div><p>Nombre de villes : </p></div><div class="nombres"><span>'+cpt4+'</span> <img class="ville" src="images/ville.png" alt="ville"></div></div>';
	}else{
		affichage.innerHTML='<div id="ligne"><div><p>Nombre de fraises : </p></div><div class="nombres"><span>'+score+'</span> <img class="fraise1" src="images/fraise.png" alt="fraise"></div></div><div id="ligne"><div><p>Fraises par click : </p></div><div class="nombres"><span>'+cpt+'</span> <img class="fraise" src="images/fraise2.png" alt="fraise2"></div></div><div id="ligne"><div><p>Nombre de fermes : </p></div><div class="nombres"><span>'+cpt2+'</span> <img class="ferme" src="images/ferme.png" alt="ferme"></div></div><div id="ligne"><div><p>Nombre d\'usines : </p></div><div class="nombres"><span>'+cpt3+'</span> <img class="usine" src="images/usine.png" alt="usine"></div></div><div id="ligne"><div><p>Nombre de villes : </p></div><div class="nombres"><span>'+cpt4+'</span> <img class="ville" src="images/ville.png" alt="ville"></div></div>';
	}
	
}

function verif(){
	if (cpt>=100){
		multiplicateur.innerHTML='MAXED';
		multiplicateur.disabled=true;
	}else if (score<prix){
		multiplicateur.disabled=true;
	}else{
		multiplicateur.disabled=false;
	}
	if (cpt2>=100){
		autoclick.innerHTML='MAXED';
		autoclick.disabled=true;
	}else if (score<prixMulti){
		autoclick.disabled=true;
	}else{
		autoclick.disabled=false;
	}
	if (cpt3>=100){
		autoclick2.innerHTML='MAXED';
		autoclick2.disabled=true;
	}else if (score<prixUsine){
		autoclick2.disabled=true;
	}else{
		autoclick2.disabled=false;
	}
	if (cpt4>=100){
		autoclick3.innerHTML='MAXED';
		autoclick3.disabled=true;
	}else if (score<prixVille){
		autoclick3.disabled=true;
	}else{
		autoclick3.disabled=false;
	}
}

function click(){
	score=score+cpt;
	Affichage();
	verif();
}

function incrementer(){
	if (cpt>=100){
		multiplicateur.disabled=true;
		multiplicateur.innerHTML='MAXED';		
	}else if (score<prix){
		multiplicateur.disabled=true;
		multiplicateur.style.borderColor='grey';
	}else{
		multiplicateur.disabled=false;
		score=score-(prix);
		cpt++;
		Affichage();
		prix=prix+10;
		if (prix>=1000){
			multiplicateur.innerHTML='<img class="fraise" src="images/fraise2.png" alt="fraise2">Plus de fraises x'+(Number(cpt)+1)+'<br>Prix = '+prix/1000+'k';
		}else{
			multiplicateur.innerHTML='<img class="fraise" src="images/fraise2.png" alt="fraise2">Plus de fraises x'+(Number(cpt)+1)+'<br>Prix = '+prix;
		}
		verif();
	}
}

function autoclicker(){
	function click2(){
			score=score+cpt2;
			Affichage();
			verif();
			};
	if (cpt2>=100){
		autoclick.disabled=true;
		autoclick.innerHTML='MAXED';		
	}else if (score<prixMulti){
		autoclick.disabled=true;
	}else{
		score=score-prixMulti;
		prixMulti=prixMulti+1000;
		cpt2++;
		Affichage();
		autoclick.innerHTML='<img class="ferme" src="images/ferme.png" alt="ferme">Ferme<br>Prix = '+prixMulti/1000+'k';
		if (cpt2>1){
			clearInterval(interval1);
		}
		interval1=setInterval(click2,1000);
		verif();	
	}
}

function autoclicker2(){
	function click3(){
			score=score+(cpt3*10);
			Affichage();
			verif();
			};
	if (cpt3>=100){
		autoclick2.disabled=true;
		autoclick2.innerHTML='MAXED';		
	}else if (score<prixUsine){
		autoclick2.disabled=true;
	}else{
		score=score-prixUsine;
		prixUsine=prixUsine+10000;
		cpt3++;
		Affichage();
		if (prixUsine>=1000000){
			autoclick2.innerHTML='<img class="usine" src="images/usine.png" alt="usine">Usine<br>Prix = '+prixUsine/1000000+'M';
		}else{
			autoclick2.innerHTML='<img class="usine" src="images/usine.png" alt="usine">Usine<br>Prix = '+prixUsine/1000+'k';
		}
		if (cpt3>1){
			clearInterval(interval2);
		}
		interval2=setInterval(click3,1000);
		verif();
	}
}

function autoclicker3(){
	function click4(){
			score=score+(cpt4*100);
			Affichage();
			verif();
			};
	if (cpt4>=100){
		autoclick3.disabled=true;
		autoclick3.innerHTML='MAXED';		
	}else if (score<prixVille){
		autoclick3.disabled=true;
	}else{
		score=score-prixVille;
		prixVille=prixVille+100000;
		cpt4++;
		Affichage();
		if  (prixVille>=1000000){
			autoclick3.innerHTML='<img class="ville" src="images/ville.png" alt="ville">Ville<br>Prix = '+prixVille/1000000+'M';
			
		}else{
			autoclick3.innerHTML='<img class="ville" src="images/ville.png" alt="ville">Ville<br>Prix = '+prixVille/1000+'k';
		}
		if (cpt4>1){
			clearInterval(interval3);
		}
		interval3=setInterval(click,1000);
		verif();
	}
}

bouton.onclick=click;
multiplicateur.onclick=incrementer;
autoclick.onclick=autoclicker;
autoclick2.onclick=autoclicker2;
autoclick3.onclick=autoclicker3;

bouton.addEventListener('mousedown', function(e){
	let r=Math.round(Math.random()*5)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+cpt;
	plus.setAttribute('class','on');
})

bouton.addEventListener('mouseup', function(e){
		plusScore1.setAttribute('class','off');
		plusScore2.setAttribute('class','off');
		plusScore3.setAttribute('class','off');
		plusScore4.setAttribute('class','off');
		plusScore5.setAttribute('class','off');
		plusScore6.setAttribute('class','off');
})