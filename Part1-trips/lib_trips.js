"use strict";

class Trip {
    constructor(destination, km, litres) {
        this.destination = destination;
        this.km = parseFloat(km);
        this.litres = parseFloat(litres);
    }

    get isValid() {              // a read-only property
        if (this.destination == "" || isNaN(this.km) || isNaN(this.litres)) {
            return false;
        } else if (this.km <= 0 || this.litres <= 0){
            return false;
        } else {
            return true;
        }
    }

    get kml() {                  // a read-only property
        return this.km / this.litres;
    }

    toString() {
        const kml = this.kml.toFixed(1);
        return `${this.destination}: Kilometers - ${this.km}; KML - ${kml}`;
    }
}


const moduleTrips = ( () => {

    //defining empty array...
    const _trips = [];

    //function for adding trips...
    function push(trip)
    {
        // only allow Trip objects to be added to array
        if (trip instanceof Trip) 
        {
            _trips.push(trip);
        }
    }

    //function for calculating total kilometers per liter...
    function totalKml() 
    {             
        // a read-only property
        let totalKm = 0;        
        let totalLitres = 0;  

        for (let trip of _trips) 
        {
            totalKm += trip.km;
            totalLitres += trip.litres;
        }
        return totalKm / totalLitres;
    } 

    //function to display all trips...
    function toString() 
    {
        let str = "";

        for (let trip of _trips) 
        {
            str += trip.toString() + "\n";
        }
        
        str += "\nCumulative KML: " + totalKml().toFixed(1);
        return str;
    }


    //public methods for returning variables...
    return {
        push: push,
        totalKml: totalKml,
        toString: toString,
    };


}) ();