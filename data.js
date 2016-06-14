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
                    //console.log(feed["datastreams"][i]["tags"][j].slice(16) + " " + feed["datastreams"][i]["current_value"]);
                    //console.log(feed["datastreams"][i]["id"] + " " + feed["datastreams"][i]["current_value"]);
                
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

//Loop to set the markers on the map
for (var i = 0; i < feedIDs.length; i++) {
    setDataOnPage(feedIDs[i], "id" + i);
};
