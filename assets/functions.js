$(document).ready(function() {
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
//		console.log(wScroll);
		$('.logo').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'px)'
		});
		
	});
});

$("#what-nav").click(function() {
	console.log('clicky');
    $('html, body').animate({
        scrollTop: $("#what-div").offset().top
    }, 1000);
});

$("#who-nav").click(function() {
	console.log('clicky');
    $('html, body').animate({
        scrollTop: $("#who-div").offset().top
    }, 1500);
});