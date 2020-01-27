// mise en place des variables

//variables +1 mignon
let takoyaki=document.getElementById('takoyaki');
let plusScore1=document.getElementById('plusScore1');
let plusScore2=document.getElementById('plusScore2');
let	plusScore3=document.getElementById('plusScore3');
let	plusScore4=document.getElementById('plusScore4');
let	plusScore5=document.getElementById('plusScore5');
let	plusScore6=document.getElementById('plusScore6');
let	plusScore7=document.getElementById('plusScore7');
let	plusScore8=document.getElementById('plusScore8');
let	plusScore9=document.getElementById('plusScore9');
let	plusScore10=document.getElementById('plusScore10');
let	plusScore11=document.getElementById('plusScore11');
let	plusScore12=document.getElementById('plusScore12');
let	plusScore13=document.getElementById('plusScore13');
let	plusScore14=document.getElementById('plusScore14');
let	plusScore15=document.getElementById('plusScore15');
let	plusScore16=document.getElementById('plusScore16');
let	plusScore17=document.getElementById('plusScore17');
let	plusScore18=document.getElementById('plusScore18');

//variables VRAi js
let wasabi=document.getElementById('wasabi');
let soja=document.getElementById('soja');
let score=0;
let prixPate = 50;
let prixPoulpe = 100;
let prixSauce = 1000;
let prixKatsuo = 5000;
let prixBrochette = 500;
let prixBento = 1000;
let prixKukku = 10000;
let prixLivreur = 100000;
let prixIsakaya = 1000000;
let prixChaine = 6500000;

let cptTotal=1;
let cptSeconde=0;

let cptPate = 0;
let cptPoulpe = 0;
let cptSauce = 0;
let cptKatsuo = 0;
let cptBrochette = 0;
let cptBento = 0;
let cptKukku = 0;
let cptLivreur = 0;
let cptIsakaya = 0;
let cptChaine = 0;

let cptDrapeau = 0;

let spanPate=document.getElementById('spanPate');
let spanPoulpe=document.getElementById('spanPoulpe');
let spanSauce=document.getElementById('spanSauce');
let spanKatsuo=document.getElementById('spanKatsuo');

let infoPate=document.getElementById('infoPate');
let infoPoulpe=document.getElementById('infoPoulpe');
let infoSauce=document.getElementById('infoSauce');
let infoKatsuo=document.getElementById('infoKatsuo');

//fonction afin de désactiver le bouton entrer

// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     return false;
//   }
// }, true);


//Animation takoyaki
takoyaki.addEventListener('mousedown', function(e){
	let r=Math.round(Math.random()*17)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+cptTotal+'<img src="../Image/takoyaki" alt="takoyaki" height:"50px" width="50px">';
	if (r<=6){	
		plus.setAttribute('class','on1');
	}else if (r>=13){	
		plus.setAttribute('class','on3');
	}else{	
		plus.setAttribute('class','on2');
	}
});

takoyaki.addEventListener('mouseup', function(e){
		plusScore1.setAttribute('class','off');
		plusScore2.setAttribute('class','off');
		plusScore3.setAttribute('class','off');
		plusScore4.setAttribute('class','off');
		plusScore5.setAttribute('class','off');
		plusScore6.setAttribute('class','off');
		plusScore7.setAttribute('class','off');
		plusScore8.setAttribute('class','off');
		plusScore9.setAttribute('class','off');
		plusScore10.setAttribute('class','off');
		plusScore11.setAttribute('class','off');
		plusScore12.setAttribute('class','off');
		plusScore13.setAttribute('class','off');
		plusScore14.setAttribute('class','off');
		plusScore15.setAttribute('class','off');
		plusScore16.setAttribute('class','off');
		plusScore17.setAttribute('class','off');
		plusScore18.setAttribute('class','off');
});


// images mouvantes

function pate1(x){
	x.src='../Image/pate2.png';
}

function pate2(x){
	x.src='../Image/pate.png';
}

function poulpe1(x){
	x.src='../Image/poulpe2.png';
}

function poulpe2(x){
	x.src='../Image/poulpe.png';
}

function sauce1(x){
	x.src='../Image/sauce2.png';
}

function sauce2(x){
	x.src='../Image/sauce.png';
}

function bonite1(x){
	x.src='../Image/bonite2.png';
}

function bonite2(x){
	x.src='../Image/bonite.png';
}

function brochette1(x){
	x.src='../Image/brochette2.png';
}

function brochette2(x){
	x.src='../Image/brochette.png';
}

function bento1(x){
	x.src='../Image/bento2.png';
}

function bento2(x){
	x.src='../Image/bento.png';
}

function kukku1(x){
	x.src='../Image/kukku2.png';
}

function kukku2(x){
	x.src='../Image/kukku.png';
}

function livreur1(x){
	x.src='../Image/livreur2.png';
}

function livreur2(x){
	x.src='../Image/livreur.png';
}

function restaurant1(x){
	x.src='../Image/restaurant2.png';
}

function restaurant2(x){
	x.src='../Image/restaurant.png';
}

function desRestaurants1(x){
	x.src='../Image/desRestaurants2.png';
}

function desRestaurants2(x){
	x.src='../Image/desRestaurants.png';
}

function tako1(x){
	x.src='../Image/takoyakiCONTOUR2.png';
}

function tako2(x){
	x.src='../Image/takoyakiCONTOUR.png';
}



// VRAI JS

function buttonClick(){
	score=score+cptTotal; // score = score + compteur
    wasabi.innerHTML='<p>'+score+'</p>';
}

function incrementerPate (x) {
	if (score>=prixPate){
		cptPate++;
		cptTotal++;
		score=score-prixPate;
		prixPate=prixPate+50;
		spanPate.innerHTML=prixPate+' x';
		wasabi.innerHTML='<p>'+score+'</p>';
		infoPate.innerHTML='info<span>Rajoute de la pâte à beignet petit Kukku ! <br>Chaque pâte à beignet te rajoute 1 clique <br><br><br>'+cptPate+' / 500</span>';
		if(cptPate>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/pateGris.png" alt="pate">';
			spanPate.innerHTML='MAX';
		}
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerPoulpe (x) {
	if (score>=prixPoulpe){
		cptPoulpe++;
		cptTotal=cptTotal+10;
		score=score-prixPoulpe;
		prixPoulpe=prixPoulpe+100;
		spanPoulpe.innerHTML=prixPoulpe+' x';
		wasabi.innerHTML='<p>'+score+'</p>';
		infoPoulpe.innerHTML='info<span>Rajoute du poulpe petit Kukku ! <br>Chaque pouple te rajoute 10 cliques <br><br><br>'+cptPoulpe+' / 500</span>';
		if(cptPoulpe>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/poulpeGris.png" alt="poulpe">';
			spanPoulpe.innerHTML='MAX';
		}
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerSauce (x) {
	if (score>=prixSauce){
		cptSauce++;
		cptTotal=cptTotal+100;
		score=score-prixSauce;
		prixSauce=prixSauce+300;
		spanSauce.innerHTML=prixSauce+' x';
		wasabi.innerHTML='<p>'+score+'</p>';
		infoSauce.innerHTML='info<span>Rajoute de la sauce petit Kukku ! <br>Chaque sauce te rajoute 100 cliques <br><br><br> '+cptSauce+' / 500</span>';
		if(cptSauce>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/sauceGris.png" alt="sauce">';
			spanSauce.innerHTML='MAX';
		}
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerKatsuo (x) {
	if (score>=prixKatsuo){
		cptKatsuo++;
		cptTotal=cptTotal+1000;
		score=score-prixKatsuo;
		prixKatsuo=prixKatsuo+1000;
		spanKatsuo.innerHTML=prixKatsuo+' x';
		wasabi.innerHTML='<p>'+score+'</p>';
		infoKatsuo.innerHTML='info<span>Rajoute du Katsuobushi petit Kukku ! <br>Chaque Katsuobushi te rajoute 1000 cliques <br><br><br> '+cptKatsuo+' / 500</span>';
		if(cptKatsuo>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/boniteGris.png" alt="katsuobuki">';
			spanKatsuo.innerHTML='MAX';
		}
	}
	else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerBrochette(x){
	function clickBrochette(){
		score=score+(cptBrochette*3); // score = score + compteur
    	wasabi.innerHTML='<p>'+score+'</p>';
	}
	if (score>=prixBrochette){
		cptBrochette++;
		cptSeconde=cptSeconde+3;
		score=score-prixBrochette;
		prixBrochette=prixBrochette+500;
		if (cptBrochette>1){
			clearInterval(intervalBrochette);
		}
		intervalBrochette=setInterval(clickBrochette,1000);
		spanBrochette.innerHTML=prixBrochette+' x';
		soja.innerHTML='<p>'+cptSeconde+'/sec</p>';
		infoBrochette.innerHTML='info<span>Fais des brochettes petit Kukku ! <br>Chaque brochette clique pour toi X 3 <br><br><br>'+cptBrochette+' / 500</span>';
		if (cptBrochette>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/brochetteGris.png" alt="brochette">';
			spanBrochette.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerBento(x){
	function clickBento(){
		score=score+(cptBento*6); // score = score + compteur
    	wasabi.innerHTML='<p>'+score+'</p>';
	}
	if (score>=prixBento){
		cptBento++;
		cptSeconde=cptSeconde+6;
		score=score-prixBento;
		prixBento=prixBento+1000;
		if (cptBento>1){
			clearInterval(intervalBento);
		}
		intervalBento=setInterval(clickBento,1000);
		spanBento.innerHTML=prixBento+' x';
		soja.innerHTML='<p>'+cptSeconde+'/sec</p>';
		infoBento.innerHTML='info<span>Fais des bentos petit Kukku ! <br> Chaque bento clique pour toi X 6 <br><br><br>'+cptBento+' / 500</span>';
		if (cptBento>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/bentoGris.png" alt="bento">';
			spanBrochette.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function incrementerKukku(x){
	function clickKukku(){
		score=score+(cptKukku*12); // score = score + compteur
    	wasabi.innerHTML='<p>'+score+'</p>';
	}
	if (score>=prixKukku){
		cptKukku++;
		cptSeconde=cptSeconde+12;
		score=score-prixKukku;
		prixKukku=prixKukku+1000;
		if (cptKukku>1){
			clearInterval(intervalKukku);
		}
		intervalKukku=setInterval(clickKukku,1000);
		spanKukku.innerHTML=prixKukku+' x';
		soja.innerHTML='<p>'+cptSeconde+'/sec</p>';
		infoKukku.innerHTML='info<span>Engage plus de petits kukkus !<br> Chaque kukkus clique pour toi X 12 <br><br><br>'+cptKukku+' / 500</span>';
		if (cptKukku>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/kukkuGris.png" alt="kukku">';
			spanKukku.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}