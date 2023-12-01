"use strict";

$(document).ready( () => {

    //creating new clock object and passing the id of inputs... 
    const clock = createClock(
        $("#hours"), $("#minutes"), $("#seconds"), $("#ampm")
    );

    //starting the clock when page loads...
    clock.start();

    //creating new stopwatch object and passing the id of inputs... 
    const stopwatch = createStopwatch(
        $("#s_minutes"), $("#s_seconds"), $("#s_ms")
    );

    //when user clicks on start button, start() function of closure will be called...
    $("#start").click(() => {
        stopwatch.start();
    });

    //when user clicks on stop button, stop() function of closure will be called...
    $("#stop").click(() => {
        stopwatch.stop();
    });

    //when user clicks on reset button, reset() function of closure will be called...
    $("#reset").click(() => {
        stopwatch.reset();
    });

}); // end ready()
