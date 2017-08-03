$(document).ready(function(){
	
	$('.openBtn').on('click', function(){
		$('.overlay').addClass('openOverlay animated slideInLeft');
		console.log('klik');
	});

	$('.closeBtn').on('click', function(){
		$('.overlay').addClass('openOverlay animated slideOutLeft');
		console.log('klik');
	});

});
