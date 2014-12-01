'use strict';

$(document).ready(function() {
	$('.calendar-entry').each(function () {
	    var tmpHeight = $(this).height();
	    $(this).parent().height(tmpHeight);
	});

	var contentColumnMaxHeight = 0;
	
	$.each([$('#leftNav'), $('#mainContent > article'), $('#socialRail')], function() {
		if(contentColumnMaxHeight < $(this).outerHeight()) {
			contentColumnMaxHeight = $(this).outerHeight();
		}
	});
	
	console.log('Max height = ' + contentColumnMaxHeight);

	$.each([$('#leftNav'), $('#socialRail')], function() {
		$(this).height(contentColumnMaxHeight - (50));
	});
});
