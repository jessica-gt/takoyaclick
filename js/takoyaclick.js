// mise en place des variables

let takoyaki=document.getElementById('takoyaki');
let plusScore1=document.getElementById('plusScore1');
let plusScore2=document.getElementById('plusScore2');
let	plusScore3=document.getElementById('plusScore3');
let	plusScore4=document.getElementById('plusScore4');
let	plusScore5=document.getElementById('plusScore5');
let	plusScore6=document.getElementById('plusScore6');
let cptPoint=1;

//fonction afin de désactiver le bouton entrer

// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     return false;
//   }
// }, true);



takoyaki.addEventListener('mousedown', function(e){
	let r=Math.round(Math.random()*5)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+cptPoint;
	plus.setAttribute('class','on');
})

takoyaki.addEventListener('mouseup', function(e){
		plusScore1.setAttribute('class','off');
		plusScore2.setAttribute('class','off');
		plusScore3.setAttribute('class','off');
		plusScore4.setAttribute('class','off');
		plusScore5.setAttribute('class','off');
		plusScore6.setAttribute('class','off');
})