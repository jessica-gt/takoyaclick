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
let flag=document.getElementById('flag');
let score=0;
let prixPate = 50;
let prixPoulpe = 500;
let prixSauce = 5000;
let prixKatsuo = 8000;
let prixBrochette = 500;
let prixBento = 1000;
let prixKukku = 10000;
let prixLivreur = 100000;
let prixRestau1 = 1000000;
let prixRestau2 = 6500000;

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
let cptRestau1 = 0;
let cptRestau2 = 0;

let cptDrapeau = 0;

let spanPate=document.getElementById('spanPate');
let spanPoulpe=document.getElementById('spanPoulpe');
let spanSauce=document.getElementById('spanSauce');
let spanKatsuo=document.getElementById('spanKatsuo');
let spanBrochette=document.getElementById('spanBrochette');
let spanBento=document.getElementById('spanBento');
let spanKukku=document.getElementById('spanKukku');
let spanLivreur=document.getElementById('spanLivreur');
let spanRestau1=document.getElementById('spanRestau1');
let spanRestau2=document.getElementById('spanRestau2');

let infoPate=document.getElementById('infoPate');
let infoPoulpe=document.getElementById('infoPoulpe');
let infoSauce=document.getElementById('infoSauce');
let infoKatsuo=document.getElementById('infoKatsuo');
let infoBrochette=document.getElementById('infoBrochette');
let infoBento=document.getElementById('infoBento');
let infoKukku=document.getElementById('infoKukku');
let infoLivreur=document.getElementById('infoLivreur');
let infoRestau1=document.getElementById('infoRestau1');
let infoRestau2=document.getElementById('infoRestau2');




//fonction afin de désactiver le bouton entrer

// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     return false;
//   }
// }, true);


//fonction sauvegarde
function save(){
	localStorage.setItem('score', score);
	localStorage.setItem('prixPate', prixPate);
	localStorage.setItem('prixPoulpe', prixPoulpe);
	localStorage.setItem('prixSauce', prixSauce);
	localStorage.setItem('prixKatsuo', prixKatsuo);
	localStorage.setItem('prixBrochette', prixBrochette);
	localStorage.setItem('prixBento', prixBento);
	localStorage.setItem('prixKukku', prixKukku);
	localStorage.setItem('prixLivreur', prixLivreur);
	localStorage.setItem('prixRestau1', prixRestau1);
	localStorage.setItem('prixRestau2', prixRestau2);
	localStorage.setItem('cptTotal', cptTotal);
	localStorage.setItem('cptSeconde', cptSeconde);
	localStorage.setItem('cptPate', cptPate);
	localStorage.setItem('cptPoulpe', cptPoulpe);
	localStorage.setItem('cptSauce', cptSauce);
	localStorage.setItem('cptKatsuo', cptKatsuo);
	localStorage.setItem('cptBrochette', cptBrochette);
	localStorage.setItem('cptBento', cptBento);
	localStorage.setItem('cptKukku', cptKukku);
	localStorage.setItem('cptLivreur', cptLivreur);
	localStorage.setItem('cptRestau1', cptRestau1);
	localStorage.setItem('cptRestau2', cptRestau2);
	localStorage.setItem('cptDrapeau', cptDrapeau);
}

function load(){

	//load variables
	score=Number(localStorage.getItem('score'));
	prixPate=Number(localStorage.getItem('prixPate'));
	prixPoulpe=Number(localStorage.getItem('prixPoulpe'));
	prixSauce=Number(localStorage.getItem('prixSauce'));
	prixKatsuo=Number(localStorage.getItem('prixKatsuo'));
	prixBrochette=Number(localStorage.getItem('prixBrochette'));
	prixBento=Number(localStorage.getItem('prixBento'));
	prixKukku=Number(localStorage.getItem('prixKukku'));
	prixLivreur=Number(localStorage.getItem('prixLivreur'));
	prixRestau1=Number(localStorage.getItem('prixRestau1'));
	prixRestau2=Number(localStorage.getItem('prixRestau2'));
	cptTotal=Number(localStorage.getItem('cptTotal'));
	cptSeconde=Number(localStorage.getItem('cptSeconde'));
	cptPate=Number(localStorage.getItem('cptPate'));
	cptPoulpe=Number(localStorage.getItem('cptPoulpe'));
	cptSauce=Number(localStorage.getItem('cptSauce'));
	cptKatsuo=Number(localStorage.getItem('cptKatsuo'));
	cptBrochette=Number(localStorage.getItem('cptBrochette'));
	cptBento=Number(localStorage.getItem('cptBento'));
	cptKukku=Number(localStorage.getItem('cptKukku'));
	cptLivreur=Number(localStorage.getItem('cptLivreur'));
	cptRestau1=Number(localStorage.getItem('cptRestau1'));
	cptRestau2=Number(localStorage.getItem('cptRestau2'));
	cptDrapeau=Number(localStorage.getItem('cptDrapeau'));

	//load compteur wasabi/soja
	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
	soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';

	//load pate
	spanPate.innerHTML=ecritureNb(prixPate)+' x';
	infoPate.innerHTML='info<span>Rajoute de la pâte à beignet petit Kukku ! <br>Chaque pâte à beignet te rajoute 1 clique <br><br><br>'+ecritureNb(cptPate)+' / 500</span>';
	if(cptPate>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/pateGris.png" alt="pate">';
			spanPate.innerHTML='MAX';
	}

	//load poulpe
	spanPoulpe.innerHTML=ecritureNb(prixPoulpe)+' x';
	infoPoulpe.innerHTML='info<span>Rajoute du poulpe petit Kukku ! <br>Chaque pouple te rajoute 5 cliques <br><br><br>'+ecritureNb(cptPoulpe)+' / 500</span>';
	if(cptPoulpe>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/poulpeGris.png" alt="poulpe">';
		spanPoulpe.innerHTML='MAX';
	}

	//load sauce
	spanSauce.innerHTML=ecritureNb(prixSauce)+' x';
	infoSauce.innerHTML='info<span>Rajoute de la sauce petit Kukku ! <br>Chaque sauce te rajoute 10 cliques <br><br><br> '+ecritureNb(cptSauce)+' / 500</span>';
	if(cptSauce>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/sauceGris.png" alt="sauce">';
		spanSauce.innerHTML='MAX';
	}

	//load Katsuobushi
	spanKatsuo.innerHTML=ecritureNb(prixKatsuo)+' x';
	infoKatsuo.innerHTML='info<span>Rajoute du Katsuobushi petit Kukku ! <br>Chaque Katsuobushi te rajoute 20 cliques <br><br><br> '+ecritureNb(cptKatsuo)+' / 500</span>';
	if(cptKatsuo>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/boniteGris.png" alt="katsuobuki">';
		spanKatsuo.innerHTML='MAX';
	}

	//load Brochette
	spanBrochette.innerHTML=ecritureNb(prixBrochette)+' x';
	infoBrochette.innerHTML='info<span>Fais des brochettes petit Kukku ! <br>Chaque brochette clique pour toi X 3 <br><br><br>'+ecritureNb(cptBrochette)+' / 500</span>';
	if (cptBrochette>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/brochetteGris.png" alt="brochette">';
		spanBrochette.innerHTML='MAX';
	}else if (cptBrochette>=1){
		intervalBrochette=setInterval(clickBrochette,1000);
	}

	//load Bento
	spanBento.innerHTML=ecritureNb(prixBento)+' x';
	infoBento.innerHTML='info<span>Fais des bentos petit Kukku ! <br> Chaque bento clique pour toi X 6 <br><br><br>'+ecritureNb(cptBento)+' / 500</span>';
	if (cptBento>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/bentoGris.png" alt="bento">';
		spanBento.innerHTML='MAX';
	}else if (cptBento>=1){
		intervalBento=setInterval(clickBento,1000);
	}

	//load Kukku
	spanKukku.innerHTML=ecritureNb(prixKukku)+' x';
	infoKukku.innerHTML='info<span>Engage plus de petits kukkus !<br> Chaque kukkus clique pour toi X 12 <br><br><br>'+ecritureNb(cptKukku)+' / 500</span>';
	if (cptKukku>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/kukkuGris.png" alt="kukku">';
		spanKukku.innerHTML='MAX';
	}else if (cptKukku>=1){
		intervalKukku=setInterval(clickKukku,1000);
	}

	//load livreur
	spanLivreur.innerHTML=ecritureNb(prixLivreur)+' x';
	infoLivreur.innerHTML='info	<span>Engage plus de petits livreurs !<br>Chaque livreur clique pour toi X 50 <br><br><br>'+ecritureNb(cptLivreur)+' / 500</span>';
	if (cptLivreur>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/livreurGris.png" alt="livreur">';
		spanLivreur.innerHTML='MAX';
	}else if (cptLivreur>=1){
		intervalLivreur=setInterval(clickLivreur,1000);
	}

	//load Isakaya
	spanRestau1.innerHTML=ecritureNb(prixRestau1)+' x';
	infoRestau1.innerHTML='info<span>Ouvre tes propres Isakaya!<br>Chaque Isakaya clique pour toi X 250 <br><br><br>'+ecritureNb(cptRestau1)+' / 500</span>';
	if (cptRestau1>=500){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/restaurantGris.png" alt="restaurant">';
		spanRestau1.innerHTML='MAX';
	}else if (cptRestau1>=1){
		intervalRestau1=setInterval(clickRestau1,1000);
	}

	//load Chaine d'Isakaya
	spanRestau2.innerHTML=ecritureNb(prixRestau2)+' x';
	infoRestau2.innerHTML='info<span>Créer ta chaine d\'Isakaya!<br>Chaque Isakaya clique pour toi X 500 <br><br><br>'+ecritureNb(cptRestau2)+' / 1</span>';
	if (cptRestau2>=1){
		x.disabled=true;
		alert('FINISH');
		x.innerHTML='<img src="../Image/desRestaurantsGris.png" alt="restaurants">';
		spanRestau2.innerHTML='MAX';
	}else if(cptRestau2>=1){
		intervalRestau2=setInterval(clickRestau2,1000);
	}
}


//ecriture nombre k,M,mi,...
function ecritureNb(nb){
	if (nb>=1000000000000){
		return((Math.round(nb/10000000000)/100)+'bi');
	}else if (nb>=1000000000){
		return((Math.round(nb/10000000)/100)+'mi');
	}else if(nb>=1000000){
		return((Math.round(nb/10000)/100)+'M');
	}else if (nb>=1000){
		return((Math.round(nb/10)/100)+'k');
	}else if (nb<1000){
		return(nb);
	}
}

//Animation takoyaki
takoyaki.addEventListener('mousedown', function(e){
	let r=Math.round(Math.random()*17)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+ecritureNb(cptTotal)+'<img src="../Image/takoyaki" alt="takoyaki" height:"50px" width="50px">';
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
    wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerPate (x) {
	if (score>=prixPate){
		cptPate++;
		cptTotal++;
		score=score-prixPate;
		prixPate=prixPate+50;
		spanPate.innerHTML=ecritureNb(prixPate)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoPate.innerHTML='info<span>Rajoute de la pâte à beignet petit Kukku ! <br>Chaque pâte à beignet te rajoute 1 clique <br><br><br>'+ecritureNb(cptPate)+' / 500</span>';
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
		cptTotal=cptTotal+5;
		score=score-prixPoulpe;
		prixPoulpe=prixPoulpe+500;
		spanPoulpe.innerHTML=ecritureNb(prixPoulpe)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoPoulpe.innerHTML='info<span>Rajoute du poulpe petit Kukku ! <br>Chaque pouple te rajoute 5 cliques <br><br><br>'+ecritureNb(cptPoulpe)+' / 500</span>';
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
		cptTotal=cptTotal+10;
		score=score-prixSauce;
		prixSauce=prixSauce+500;
		spanSauce.innerHTML=ecritureNb(prixSauce)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoSauce.innerHTML='info<span>Rajoute de la sauce petit Kukku ! <br>Chaque sauce te rajoute 10 cliques <br><br><br> '+ecritureNb(cptSauce)+' / 500</span>';
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
		cptTotal=cptTotal+20;
		score=score-prixKatsuo;
		prixKatsuo=prixKatsuo+500;
		spanKatsuo.innerHTML=ecritureNb(prixKatsuo)+' x';
		wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
		infoKatsuo.innerHTML='info<span>Rajoute du Katsuobushi petit Kukku ! <br>Chaque Katsuobushi te rajoute 20 cliques <br><br><br> '+ecritureNb(cptKatsuo)+' / 500</span>';
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

function clickBrochette(){
	score=score+(cptBrochette*3); // score = score + compteur
 	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerBrochette(x){

	if (score>=prixBrochette){
		cptBrochette++;
		cptSeconde=cptSeconde+3;
		score=score-prixBrochette;
		prixBrochette=prixBrochette+500;
		if (cptBrochette>1){
			clearInterval(intervalBrochette);
		}
		intervalBrochette=setInterval(clickBrochette,1000);
		spanBrochette.innerHTML=ecritureNb(prixBrochette)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoBrochette.innerHTML='info<span>Fais des brochettes petit Kukku ! <br>Chaque brochette clique pour toi X 3 <br><br><br>'+ecritureNb(cptBrochette)+' / 500</span>';
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

function clickBento(){
	score=score+(cptBento*6); // score = score + compteur
   	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerBento(x){

	if (score>=prixBento){
		cptBento++;
		cptSeconde=cptSeconde+6;
		score=score-prixBento;
		prixBento=prixBento+1000;
		if (cptBento>1){
			clearInterval(intervalBento);
		}
		intervalBento=setInterval(clickBento,1000);
		spanBento.innerHTML=ecritureNb(prixBento)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoBento.innerHTML='info<span>Fais des bentos petit Kukku ! <br> Chaque bento clique pour toi X 6 <br><br><br>'+ecritureNb(cptBento)+' / 500</span>';
		if (cptBento>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/bentoGris.png" alt="bento">';
			spanBento.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function clickKukku(){
	score=score+(cptKukku*12); // score = score + compteur
   	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerKukku(x){

	if (score>=prixKukku){
		cptKukku++;
		cptSeconde=cptSeconde+12;
		score=score-prixKukku;
		prixKukku=prixKukku+1000;
		if (cptKukku>1){
			clearInterval(intervalKukku);
		}
		intervalKukku=setInterval(clickKukku,1000);
		spanKukku.innerHTML=ecritureNb(prixKukku)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoKukku.innerHTML='info<span>Engage plus de petits kukkus !<br> Chaque kukkus clique pour toi X 12 <br><br><br>'+ecritureNb(cptKukku)+' / 500</span>';
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

function clickLivreur(){
	score=score+(cptLivreur*50); // score = score + compteur
   	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerLivreur(x){

	if (score>=prixLivreur){
		cptLivreur++;
		cptSeconde=cptSeconde+50;
		score=score-prixLivreur;
		prixLivreur=prixLivreur+5000;
		if (cptLivreur>1){
			clearInterval(intervalLivreur);
		}
		intervalLivreur=setInterval(clickLivreur,1000);
		spanLivreur.innerHTML=ecritureNb(prixLivreur)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoLivreur.innerHTML='info	<span>Engage plus de petits livreurs !<br>Chaque livreur clique pour toi X 50 <br><br><br>'+ecritureNb(cptLivreur)+' / 500</span>';
		if (cptLivreur>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/livreurGris.png" alt="livreur">';
			spanLivreur.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function clickRestau1(){
	score=score+(cptRestau1*250); // score = score + compteur
   	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerRestau1(x){

	if (score>=prixRestau1){
		cptRestau1++;
		cptSeconde=cptSeconde+250;
		score=score-prixRestau1;
		prixRestau1=prixRestau1+10000;
		if (cptRestau1>1){
			clearInterval(intervalRestau1);
		}
		intervalRestau1=setInterval(clickRestau1,1000);
		spanRestau1.innerHTML=ecritureNb(prixRestau1)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoRestau1.innerHTML='info<span>Ouvre tes propres Isakaya!<br>Chaque Isakaya clique pour toi X 250 <br><br><br>'+ecritureNb(cptRestau1)+' / 500</span>';
		if (cptRestau1>=500){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/restaurantGris.png" alt="restaurant">';
			spanRestau1.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

function clickRestau2(){
	score=score+(cptRestau2*500); // score = score + compteur
   	wasabi.innerHTML='<p>'+ecritureNb(score)+'</p>';
}

function incrementerRestau2(x){

	if (score>=prixRestau2){
		cptRestau2++;
		cptSeconde=cptSeconde+500;
		score=score-prixRestau2;
		prixRestau2=prixRestau2+300000;
		if (cptRestau2>1){
			clearInterval(intervalRestau2);
		}
		intervalRestau2=setInterval(clickRestau2,1000);
		spanRestau2.innerHTML=ecritureNb(prixRestau2)+' x';
		soja.innerHTML='<p>'+ecritureNb(cptSeconde)+'/sec</p>';
		infoRestau2.innerHTML='info<span>Créer ta chaine d\'Isakaya!<br>Chaque Isakaya clique pour toi X 500 <br><br><br>'+ecritureNb(cptRestau2)+' / 1</span>';
		if (cptRestau2>=1){
			x.disabled=true;
			alert('FINISH');
			x.innerHTML='<img src="../Image/desRestaurantsGris.png" alt="restaurants">';
			spanRestau2.innerHTML='MAX';
		}
	}else{
		alert ( ' Et non ! Cuisine encore plus Petit Kukku !!! ');
	}
}

if (cptPate>=500 && cptPoulpe>=500 && cptSauce>=500 && cptKatsuo>=500 && cptBrochette>=500 && cptBento>=500 && cptKukku>=500 && cptLivreur>=500 && cptRestau1>=500 && cptRestau2>=1){
	flag.style.border='solid 2px yellow';
}