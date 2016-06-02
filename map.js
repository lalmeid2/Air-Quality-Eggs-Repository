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

var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
