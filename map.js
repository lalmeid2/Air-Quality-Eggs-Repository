// //Set the Google Maps' map
// function initialize() {
//     var mapProp = {
//         center:new google.maps.LatLng(33.9689978832525,-118.415820072074),
//         zoom:13,
//         mapTypeId:google.maps.MapTypeId.ROADMAP
//     };
//     var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }
// google.maps.event.addDomListener(window, 'load', initialize);

// //Indicating where the Air Quality Egg is on the map.
// xivelyGmaps.setMapElement("#googleMap");
// xivelyGmaps.setKey("U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw");
// google.maps.event.addDomListener(google.maps.Marker, 'load', xivelyGmaps.subscribe("967735657"));
// //google.maps.event.addDomListener(google.maps.Marker, 'load', xivelyGmaps.subscribe("485551354"));


xively.setKey( "U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw" ); 

var setMarkerOnMap = function (feedID) {
    var coordinates = {name: "", lat: 0, lon: 0};
    var marker;

    //Get datastream data from Xively  
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
  	zoom: 13,
  	center: new google.maps.LatLng(33.9689978832525,-118.415820072074),
 	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var i;

setMarkerOnMap(feedID);
setMarkerOnMap(485551354);
