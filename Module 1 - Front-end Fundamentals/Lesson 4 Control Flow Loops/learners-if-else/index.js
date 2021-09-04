/*
    In-class exercise.

    Consider the three boolean variables: 
        - isAM (it is PM when it's false)
        - isRaining
        - isWeekday 

    Write a if-elseif condition where:
        - if it's AM and weekday, console.log "Going to work"
        - if it's AM, weekday and isRaining, console.log "Going to work with an umbrella"
        - if it's not weekday, console.log "Continue sleeping"

    Once you are done with writing the conditional clauses, toggle the boolean value of the three variables to observe different outcome!
*/

const isAM = true;
const isRaining = false;
const isWeekday = false;

if (isAM && isWeekday && !isRaining) {
    console.log("Going to work");
} else if (isAM && isWeekday && isRaining) {
    console.log("Going to work with an umbrella");
} else if (!isAM || !isWeekday) {
    console.log("Continue sleeping");
}