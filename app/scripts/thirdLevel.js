'use strict';

$(document).ready(function() {
	if($(window).width() > 991) {
		$('.item').each(function() {
			$(this).children('div').height($(this).children('img').height() - 20);
		});
	}
	
	$(window).resize(function() {
		if($(window).width() > 991) {
			$('.item').each(function() {
				$(this).children('div').height($(this).children('img').height() - 20);
				$(this).children('div').hide();
				$(this).children('img').show();
			});
		} else {
			$('.item').each(function() {
				$(this).children('div').height('auto');
				$(this).children('div').show();
				$(this).children('img').hide();
			});
		}
	});
	
	var $container = $('#articleContainer');
	// initialize
	$container.masonry({
	  itemSelector: '.item',
	  gutter: 10
	});
	
	$('.image').hover(function() {
		if($(window).width() > 991) {
			$(this).children('img').toggle();
			$(this).children('div').toggle();
		}
	});
});
