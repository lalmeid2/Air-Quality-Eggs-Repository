// Make sure the document is ready to be handled  
$(document).ready(function($) {
  
    // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)  
    xively.setKey( "U5o8w9lgaTX9Gkd89zlCM4NCvrnnVj6cEUJIKHcZ5MIW1Ijw" );  

    // Replace with your own values  
    var feedID        = 967735657,     // Feed ID  
        datastreamID  = "CO";          // Datastream ID  
        selector      = "#myphone";   // Your element on the page  

    // Get datastream data from Xively  
    xively.datastream.get (feedID, datastreamID, function ( datastream ) {  
        // WARNING: This code is only executed when we get a response back from Xively,   
        // it will likely execute after the rest your script  
        //  
        // NOTE: The variable "datastream" will contain all the Datastream information   
        // as an object. The structure of Datastream objects can be found at:   
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream  

        // Display the current value from the datastream  
        $("#place").html("CO: " + datastream["current_value"] );  

        // Getting realtime!   
        // The function associated with the subscribe method will be executed   
        // every time there is an update to the datastream  
        xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {  
          // Display the current value from the updated datastream  
          $(selector).html( datastream_updated["current_value"] );  
        });  
  
    });  

    datastreamID  = "NO2";

    xively.datastream.get (feedID, datastreamID, function ( datastream ) {  
        // WARNING: This code is only executed when we get a response back from Xively,   
        // it will likely execute after the rest your script  
        //  
        // NOTE: The variable "datastream" will contain all the Datastream information   
        // as an object. The structure of Datastream objects can be found at:   
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream  

        // Display the current value from the datastream  
        $("#place2").html("NO2: " + datastream["current_value"] );  

        // Getting realtime!   
        // The function associated with the subscribe method will be executed   
        // every time there is an update to the datastream  
        xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {  
          // Display the current value from the updated datastream  
          $(selector).html( datastream_updated["current_value"] );  
        });  
  
    });

    datastreamID  = "Humidity";

    xively.datastream.get (feedID, datastreamID, function ( datastream ) {  
        // WARNING: This code is only executed when we get a response back from Xively,   
        // it will likely execute after the rest your script  
        //  
        // NOTE: The variable "datastream" will contain all the Datastream information   
        // as an object. The structure of Datastream objects can be found at:   
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream  

        // Display the current value from the datastream  
        $("#place3").html("Humidity: " + datastream["current_value"] );  

        // Getting realtime!   
        // The function associated with the subscribe method will be executed   
        // every time there is an update to the datastream  
        xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {  
          // Display the current value from the updated datastream  
          $(selector).html( datastream_updated["current_value"] );  
        });  
  
    });

    datastreamID  = "Temperature";

    xively.datastream.get (feedID, datastreamID, function ( datastream ) {  
        // WARNING: This code is only executed when we get a response back from Xively,   
        // it will likely execute after the rest your script  
        //  
        // NOTE: The variable "datastream" will contain all the Datastream information   
        // as an object. The structure of Datastream objects can be found at:   
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream  

        // Display the current value from the datastream  
        $("#place4").html("Temperature: " + datastream["current_value"] );  

        // Getting realtime!   
        // The function associated with the subscribe method will be executed   
        // every time there is an update to the datastream  
        xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {  
          // Display the current value from the updated datastream  
          $(selector).html( datastream_updated["current_value"] );  
        });  
  
    });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,   
  // use the function associated with datastream.get to work with the data   
  // once the request is complete  
});   