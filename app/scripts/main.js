'use strict';

$('.calendar-entry').each(function () {
    var tmpHeight = $(this).height();
    $(this).parent().height(tmpHeight);
});

$('#mainHeader a').each(function() {
	$(this).hover(function() {
		var element = $(this).parent().children('.arrow');
		
		element.toggleClass('arrow');
		element.toggleClass('arrow_active');
	}, function () {
		var element = $(this).parent().children('.arrow_active');
		
		element.toggleClass('arrow');
		element.toggleClass('arrow_active');
	});	
});