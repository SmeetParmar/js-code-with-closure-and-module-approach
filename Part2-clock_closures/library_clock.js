"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // private state
    
    //constant for making a 2 digit number...
    const padSingleDigit = num => num.toString().padStart(2, "0");


    //function for displaying the time...
    const displayCurrentTime = () => {

        //getting current date...
        const now = new Date();

        // getting hours...
        let hours = now.getHours();
        
        //declaring variable for am/pm...
        let ampm = "AM"; 
        
        //setting its value...
        if (hours > 12) 
        { 
            hours = hours - 12;
            ampm = "PM";
        } 
        else 
        { 
            // for 12 PM and 12 AM
             switch (hours) 
             {
                case 12:
                    ampm = "PM";
                    break;
                case 0: 
                    hours = 12;
                    ampm = "AM";
             }
        }

        //updating the time in input box... 
        hourSpan.text(hours);
        minuteSpan.text( padSingleDigit(now.getMinutes()) );
        secondSpan.text( padSingleDigit(now.getSeconds()) );
        ampmSpan.text(ampm);
    };

    
    // public methods

    // function for updating time at interval of every 1000 milliseconds... 
    const start = () => {
        displayCurrentTime();
        setInterval(displayCurrentTime, 1000);
    };
    return { start };
};