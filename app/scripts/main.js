'use strict';

$('.calendar-entry').each(function () {
    var tmpHeight = $(this).height();
    $(this).parent().height(tmpHeight);
});