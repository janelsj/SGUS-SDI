/*
    In-class exercise.

    Consider a traffic light behaviour.
    - RED means stop
    - GREEN means go
    - AMBER means coming to a stop

    Write a switch case where AMBER and RED will execute the same line of code by console.log "STOP". If value is GREEN, console.log "GO". By default, it would be "GO".

    Since you are done with the switch clause, change the value of "trafficLight" to to observe different outcome! 
*/

const trafficLight = "RED";

switch (trafficLight) {
    case "RED":
        console.log("STOP");
        break;
    case "AMBER":
        console.log("STOP");
        break;
    case "GREEN":
        console.log("GO");
        break;
    default:
        console.log("GO");
}

const traffic = "RED";

switch (traffic) {
    case "RED":
    case "AMBER":
        console.log("STOP");
        break;
    default:
        console.log("GO");
}

const light = 2;
switch (light) {
    case 1:
        console.log("STOP");
        break;
    case "AMBER":
        console.log("STOP");
        break;
    case 3:
        console.log("GO");
        break;
    default:
        console.log("GO");
}