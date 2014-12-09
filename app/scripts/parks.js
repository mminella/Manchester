/*global google */
/* jshint unused: false */

'use strict';

var parkMap;

function addMarker(lat, lng, title, body) {
	var newMarker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: parkMap,
		draggable: false
	});
	
	google.maps.event.addListener(newMarker, 'click', function() {
		var curTitle = '';
		if(title !== null) {
			curTitle = '<h1>' + title + '</h1>';
		}
		
	    $('#parkDesc').html(curTitle + body);
	});
}

$(document).ready(function() {
	var latLng = new google.maps.LatLng(41.775930, -72.521501);

	var myOptions = {
	    zoom: 13,
	    center: latLng,
	    mapTypeControl: true,
	    mapTypeControlOptions: {
	        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	        position: google.maps.ControlPosition.BOTTOM_CENTER
	    },
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		panControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		}
	};

	parkMap = new google.maps.Map($('#gmap')[0], myOptions);
});
