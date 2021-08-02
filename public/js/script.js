var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-light', 'shadow');
        } else {
          nav.classList.remove('bg-light', 'shadow');
        }
});
var _CONTENT = [ 
	"YOUTUBER","VLOGGER","BLOGGER","RIDER","TRAVELLER"
];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
var _CURSOR = document.querySelector("#cursor");
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 400);
		}, 200);
	}
}
_INTERVAL_VAL = setInterval(Type, 100);
jQuery(document).ready(function($){

	$('.prlx').each(function(){
		gsap.fromTo($(this).find('img'),{y:"-50%"},{scrollTrigger:{trigger:$(this),start: "top bottom",end: "bottom top",markers: false,scrub: true,},y: "0%",ease:'none'});		
	});
	
	$('.legende').each(function(){
		gsap.fromTo($(this),{y:'30vh'},{scrollTrigger:{trigger:$(this).parent(),start: "top bottom",end: "bottom top",markers: false,scrub: true},y:'-30vh',ease:'none'});		
	});	

});
