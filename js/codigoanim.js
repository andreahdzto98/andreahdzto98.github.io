// JavaScript Document
function EjecutarAnimacion1(datajson){
	
	let anims = lottie.loadAnimation({
	  container: document.getElementById("animacion1"), 
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  animationData: datajson
	});	
	anims.play();
    
    return anims;
}

const anims = EjecutarAnimacion1(JSON.parse(anim1));





function EjecutarAnimacion2(datajson){
	
	let anims2 = lottie.loadAnimation({
	  container: document.getElementById("animacion2"), 
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  animationData: datajson
	});	
	anims2.play();
    
    return anims2;
}

const anims2 = EjecutarAnimacion2(JSON.parse(anim2));


function EjecutarAnimacion3(datajson){
	
	let anims3 = lottie.loadAnimation({
	  container: document.getElementById("animacion3"), 
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  animationData: datajson
	});	
	anims3.play();
    
    return anims3;
}

const anims3 = EjecutarAnimacion3(JSON.parse(anim3));


function EjecutarAnimacion4(datajson){
	
	let anims4 = lottie.loadAnimation({
	  container: document.getElementById("animacion4"), 
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  animationData: datajson
	});	
	anims4.play();
    
    return anims4;
}

const anims4 = EjecutarAnimacion4(JSON.parse(anim4));


function EjecutarAnimacion5(datajson){
	
	let anims5 = lottie.loadAnimation({
	  container: document.getElementById("animacion5"), 
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  animationData: datajson
	});	
	anims5.play();
    
    return anims5;
}

const anims5 = EjecutarAnimacion5(JSON.parse(anim5));






