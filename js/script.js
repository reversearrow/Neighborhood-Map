(function(window,google) {
	var options = {
		center: {
			lat: 43.77974,
			lng: -79.41561
		},
		zoom: 13,
	},
	element = document.getElementById("map"),
	map = new google.maps.Map(element,options);
})(window,google)