"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    // private state
    
    //constant for making a 2 digit number...
    const padSingleDigit = num => num.toString().padStart(2, "0");

    //declaring variables...
    let stopwatchTimer = null;
    let start_time = false;
    let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

    //function for ticking the stopwatch...
    const tickStopwatch = () => {    

        // increment milliseconds by 10 milliseconds
        elapsed.milliseconds = elapsed.milliseconds + 10;
    
        // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
        if (elapsed.milliseconds == 1000) 
        {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        // if seconds total 60, increment minutes by one and reset seconds to zero
        if (elapsed.seconds == 60) 
        {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }
    
        //displaying the time...
        minuteSpan.text( padSingleDigit(elapsed.minutes) );
        secondSpan.text( padSingleDigit(elapsed.seconds) );
        msSpan.text(elapsed.milliseconds);
    };
    
    // public methods
    

    //function for starting stopwatch when user clicks on start button...
    const start = () => {
        if (start_time == false) 
        {
            tickStopwatch();
            stopwatchTimer = setInterval(tickStopwatch, 10);
            start_time = true;
        }
    };

    //function for stoping stopwatch when user clicks on stop button...
    const stop = () => {
        clearInterval(stopwatchTimer);
        start_time = false;
    };

    //function for reseting stopwatch when user clicks on reset button...
    const reset = () => {

        start_time = false;
        clearInterval(stopwatchTimer);

        elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

        $("#s_minutes").text("00");
        $("#s_seconds").text("00");
        $("#s_ms").text("000");
    };
    
    return {  start, stop, reset };
};