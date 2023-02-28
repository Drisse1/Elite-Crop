$(function () {
	'use strict';
	//ypper bar and navbar
	var winH   = $(window).height(),
	    upperH = $('.upper-bar').innerHeight(),
	    navH   = $('.navbar').innerHeight();
	$('.slider, .carousel-item ').height(winH - ( upperH + navH ));    

	//features imaegs

	$('.featured-work ul li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'all') {
			$('.shuffle-images .col-sm').css('opacity', 1);
		} else {
		$('.shuffle-images .col-sm').css('opacity', '.08');
		$($(this).data('class')).parent().css('opacity', 1); 

		}
	});

});
