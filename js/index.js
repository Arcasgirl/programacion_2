// almacenar slider en una variables
var slider = $('#slider');
// almacenar variables
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primera imagen con un margen del -100%
slider.css('margin-left','-'+100+'%');

function moverD(){
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,1300, function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left','-'+100+'%');
});
}

function moverI(){
	slider.animate({
		marginLeft: 0
	} ,1300, function(){
		$('#slider section:last').insertBefore('#slider section:first');
		slider.css('margin-left','-'+100+'%');
});
}

siguiente.on('click',function (){
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function (){
	moverI();
	clearInterval(interval);
	autoplay();
});

function autoplay(){
	interval = setInterval(function(){
		moverD();
	},7000);
};
autoplay();
