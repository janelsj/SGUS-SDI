const s = new Date().getSeconds();

setTimeout(()=>{
    //Line below gets executed 3 seconds later:
    console.log(`[TIMEOUT] Ran after ${new Date().getSeconds() - s} seconds`)
}, 3000);

while(true){
    /* This will hoard the thread until the "if" condition is met, 
    then will exit this 'while' loop to execute setTimeout*/
    if (new Date().getSeconds() - s >= 10) {
        break;
    }
}

/* 
When 'if'-condition of new Date().getSeconds() - s is longer than the setTimeout second parameter,
then line 5 gets executed after the 'if'-condition is met.
When 'if'-condition of new Date().getSeconds() - s is shorter than the setTimeout second parameter,
then line 5 gets executed once the second parameter is met, BEFORE meeting the 'if'-condition statement.
*/