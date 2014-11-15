'use strict';

$(document).ready(function() {
	$('.calendar-entry').each(function () {
	    var tmpHeight = $(this).height();
	    $(this).parent().height(tmpHeight);
	});

	var contentColumnMaxHeight = 0;
	
	$('.conent-column').each(function() {
		if(contentColumnMaxHeight < $(this).outerHeight()) {
			contentColumnMaxHeight = $(this).outerHeight();
		}
	});

	$('.conent-column').each(function() {
		var topPadding = parseInt($(this).css('padding-top'));
		var bottomPadding = parseInt($(this).css('padding-top'));
		$(this).height(contentColumnMaxHeight - (topPadding + bottomPadding));
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
});
