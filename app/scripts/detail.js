'use strict';

$(document).ready(function() {
	$('.calendar-entry').each(function () {
	    var tmpHeight = $(this).height();
	    $(this).parent().height(tmpHeight);
	});

	var contentColumnMaxHeight = $('#mainContent').height();

	$.each([$('#leftNav'), $('#socialRail')], function() {
		$(this).height(contentColumnMaxHeight - (20));
	});
	
	$(window).resize(function() {
		contentColumnMaxHeight = $('#mainContent').height();

		$.each([$('#leftNav'), $('#socialRail')], function() {
			$(this).height(contentColumnMaxHeight - (20));
		});
	});
});
