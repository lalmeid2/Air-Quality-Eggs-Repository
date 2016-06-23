//This file corresponds to the "data" tab on the website. It is not being used because
//the data that comes from the eggs is not going to Xively website anymore.

//The key has to be set before trying to retrieve data from Xively
xively.setKey( "U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw" ); 

var setDataOnPage = function (feedID, divID) {
    var coordinates = {name: "", lat: 0, lon: 0};
    var marker;

    //Get feed from Xively  
    xively.feed.get(feedID, function (feed) {
        coordinates.name = feed["title"];
        coordinates.lat = feed["location"].lat;
        coordinates.lon = feed["location"].lon;

        var div = document.createElement('div');
        div.id = divID;
        var out = "<table><tr><th>AQE: " + feed["title"] + "</th><th>Value</th></tr>";

        //Structure used to get the sensor type (string) and its value:
        for (var i = 0; i < feed["datastreams"].length; i++) {
            for (var j = 0; j < feed["datastreams"][i]["tags"].length; j++) {
                if (feed["datastreams"][i]["tags"][j].indexOf("aqe:sensor_type") != -1) {
                
                    out += "<tr><td>" + 
                    feed["datastreams"][i]["id"] +
                    "</td><td>" +
                    feed["datastreams"][i]["current_value"] +
                    "</td><tr>";
                    
                };
            };
        };
        out += "</table><p></p>";
        div.innerHTML = out;
        document.body.appendChild(div);
    });
};

//Note: For future changes, make this array dynamic in a way the user can add eggs while using
//      the website. For this to happen files can be used (or any other form of data storing).

var feedIDs = [
                1218314598,   //LMU-NJ 1
                329270064,    //LMU-NJ 2
                1700345296,   //LMU-NJ 3
                2045393884,   //LMU-NJ 4
                2087285270,   //LMU-NJ 5
                967735657,    //LMU-NJ 6
                428399050,    //LMU-NJ 7
                908476336,    //LMU-NJ 8
                294678862,    //LMU-NJ 15
                873272112,    //LMU-NJ 16
                391882660,    //LMU-NJ 18
            ];

//Loop to set the markers on the map
    //P.S.: It uses a structure that creates "div" elements dinamically
for (var i = 0; i < feedIDs.length; i++) {
    setDataOnPage(feedIDs[i], "id" + i);
};
