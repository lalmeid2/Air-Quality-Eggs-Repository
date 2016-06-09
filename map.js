//The key has to be set before trying to retrieve data from Xively
xively.setKey( "U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw" ); 

var setMarkerOnMap = function (feedID) {
    var coordinates = {name: "", lat: 0, lon: 0};
    var marker;

    //Get feed from Xively  
	xively.feed.get(feedID, function (feed) {
		coordinates.name = feed["title"];
		coordinates.lat = feed["location"].lat;
		coordinates.lon = feed["location"].lon;

		marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(coordinates.lat, coordinates.lon),
	    	map: map
	  	});

	  	google.maps.event.addListener(marker, 'click', (function(marker, i) {
	    	return function() {
	      	infowindow.setContent(coordinates.name);
	      	infowindow.open(map, marker);
	    	}
	  	})(marker, i));
	});
};


var feedID = 967735657;

var map = new google.maps.Map(document.getElementById('googleMap'), {
  	zoom: 15,
  	center: new google.maps.LatLng(33.9689978832525,-118.415820072074),
 	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var i;

//Needs a loop; trying to do it with files;

setMarkerOnMap(967735657);
setMarkerOnMap(485551354);
setMarkerOnMap(1844507298);
setMarkerOnMap(2035052636);
setMarkerOnMap(163188704);
setMarkerOnMap(294678862);
setMarkerOnMap(391882660);
setMarkerOnMap(428399050);
setMarkerOnMap(873272112);
setMarkerOnMap(2045393884);
setMarkerOnMap(1700345296);
setMarkerOnMap(1218314598);
setMarkerOnMap(2087285270);
setMarkerOnMap(908476336);
setMarkerOnMap(329270064);
