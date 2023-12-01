"use strict";

$(document).ready( () => {
    
    $("#add_trip").click( () => {
        const trip = new Trip( 
          $("#destination").val(), $("#km").val(), $("#litres").val() );

        if (trip.isValid) {

            //using module to add trips to array...
            moduleTrips.push(trip); 

            // displaying trips using module's method...
            $("#trip_list").val(moduleTrips.toString());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nKilometers and litres " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
});