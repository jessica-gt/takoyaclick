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
	takoyaki.innerHTML='<img src="../Image/takoyakiCONTOUR2.png" alt="takoyaki">';
	let r=Math.round(Math.random()*17)+1;
	var plus=document.getElementById('plusScore'+r);
	plus.innerHTML='+'+cptPoint+'<img src="../Image/takoyaki" alt="takoyaki" height:"50px" width="50px">';
	if (r<=6){	
		plus.setAttribute('class','on1');
	}else if (r>=13){	
		plus.setAttribute('class','on3');
	}else{	
		plus.setAttribute('class','on2');
	}
})

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
	takoyaki.innerHTML='<img src="../Image/takoyakiCONTOUR.png" alt="takoyaki">';
})
