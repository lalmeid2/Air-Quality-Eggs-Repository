//The key has to be set before trying to retrieve data from Xively
xively.setKey( "U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw" ); 

var setMarkerOnMap = function (feedID, serialNumber) {
    var coordinates = {name: "", lat: 0, lon: 0};
    var marker;
    var eggURL = "https://airqualityegg.wickeddevice.com/dashboard/#/egg/" + serialNumber;
    var eggURLhtml = "<a href=" + eggURL + ">" + eggURL + "</a>";


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
            infowindow.setContent(coordinates.name + "<p></p>" + eggURLhtml);
            infowindow.open(map, marker);
            }
        })(marker, i));
    });
};

//Variable containing the feed IDs and the serial number of each egg.
var feedIDs = [
                [1218314598, "egg0080225b098b0143"],   //LMU-NJ 1
                [329270064, "egg00802294ab180142"],    //LMU-NJ 2
                [1700345296, "egg008022c262980141"],  //LMU-NJ 3
                [2045393884, "egg0080225b56180143"],  //LMU-NJ 4
                [2087285270, "egg0080228b77a80140"],  //LMU-NJ 5
                [967735657, "egg00802294c8980142"],   //LMU-NJ 6
                [428399050, "egg0080228b2d8b0140"],   //LMU-NJ 7
                [908476336, "egg00802294ca180142"],   //LMU-NJ 8
                [294678862, "egg008028c099ab0152"],   //LMU-NJ 15
                [873272112, "egg008028c068980152"],   //LMU-NJ 16
                [391882660, "egg00802927120b0151"]    //LMU-NJ 18
                //1844507298,   //JML001
                //2035052636,   //JML002
                //485551354,    //JML003
                //163188704     //LMU Air Quality Egg
            ];

var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 16,
    center: new google.maps.LatLng(33.9689978832525,-118.415820072074),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

//Loop to set the markers on the map
for (var i = 0; i < feedIDs.length; i++) {
    setMarkerOnMap(feedIDs[i][0], feedIDs[i][1]);
};
