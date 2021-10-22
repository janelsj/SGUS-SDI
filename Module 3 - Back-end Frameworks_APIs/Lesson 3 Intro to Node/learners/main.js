const {fork} = require('child_process');

// console.log("[MAIN] Forking a child process with ./sub.js");
const forked = fork('./sub.js');

// console.log("[MAIN] Registering a message listener");
forked.on("message", (msg) => {
    console.log(`[MAIN] Resceived msg from forked: ${msg}`);
});

// console.log("[MAIN] Sending filename to child");
forked.send("output.txt"); //this is the name of the output filename