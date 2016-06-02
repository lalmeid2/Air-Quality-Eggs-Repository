//Set the Google Maps' map
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(33.9689978832525,-118.415820072074),
        zoom:13,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Indicating where the Air Quality Egg is on the map.
xivelyGmaps.setMapElement("#googleMap");
xivelyGmaps.setKey("U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw");
google.maps.event.addDomListener(google.maps.Marker, 'load', xivelyGmaps.subscribe("967735657"));
//google.maps.event.addDomListener(google.maps.Marker, 'load', xivelyGmaps.subscribe("485551354"));