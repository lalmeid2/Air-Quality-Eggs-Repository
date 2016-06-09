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


var feedIDs = [967735657,
			  485551354,
			  1844507298,
			  2035052636,
			  163188704,
			  294678862,
			  391882660,
			  428399050,
			  873272112,
			  2045393884,
			  1700345296,
			  1218314598,
			  2087285270,
			  908476336,
			  329270064];

var map = new google.maps.Map(document.getElementById('googleMap'), {
  	zoom: 15,
  	center: new google.maps.LatLng(33.9689978832525,-118.415820072074),
 	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

//Loop to set the markers on the map
for (var i = 0; i < feedIDs.length; i++) {
	setMarkerOnMap(feedIDs[i]);
};
