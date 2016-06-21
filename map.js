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

var feedIDs = [
                1218314598,   //LMU-nj 1
                329270064,    //LMU-nj 2
                1700345296,   //LMU-nj 3
                2045393884,   //LMU-nj 4
                2087285270,   //LMU-nj 5
                967735657,    //LMU-NJ 6
                428399050,    //LMU-NJ 7
                908476336,    //LMU-nj 8
                294678862,    //LMU-NJ 15
                873272112,    //LMU-NJ 16
                391882660,    //LMU-NJ 18
                1844507298,   //JML001
                2035052636,   //JML002
                485551354,    //JML003
                163188704     //LMU Air Quality Egg
            ];

var serialNumbers = [
                    "egg0080225b098b0143", //LMU-NJ 1
                    "egg00802294ab180142", //LMU-NJ 2
                    "egg008022c262980141", //LMU-NJ 3
                    "egg0080225b56180143", //LMU-NJ 4
                    "egg0080228b77a80140", //LMU-NJ 5
                    "egg00802294c8980142", //LMU-NJ 6
                    "egg0080228b2d8b0140", //LMU-NJ 7
                    "egg00802294ca180142", //LMU-NJ 8
                    "egg008028c099ab0152", //LMU-NJ 15
                    "egg008028c068980152", //LMU-NJ 16
                    "egg0080281b299b0150", //LMU-NJ 17
                    "egg00802927120b0151", //LMU-NJ 18
                    ];

var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 16,
    center: new google.maps.LatLng(33.9689978832525,-118.415820072074),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

//Loop to set the markers on the map
for (var i = 0; i < feedIDs.length; i++) {
    setMarkerOnMap(feedIDs[i]);
};
