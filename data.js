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

        out += "</table>";
        document.getElementById(divID).innerHTML = out;

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

var divIDs = ["id01",
              "id02",
              "id03",
              "id04",
              "id05",
              "id06",
              "id07",
              "id08",
              "id09",
              "id010",
              "id011",
              "id012",
              "id013",
              "id014",
              "id015"];

//Loop to set the markers on the map
for (var i = 0; i < feedIDs.length; i++) {
    setDataOnPage(feedIDs[i], divIDs[i]);
};
