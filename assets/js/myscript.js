
$('a.trigger').click(function(){
	$('.wrapper, nav').toggleClass('active');
	$(this).toggleClass('active');
	return false;
});

$('.wrapper').click(function(){
	$('.wrapper, nav, .trigger').removeClass('active');
});