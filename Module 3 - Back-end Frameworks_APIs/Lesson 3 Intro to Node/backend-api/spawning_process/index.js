/*
    In the "child_process" module, there are four ways to create child processes:
    1. spawn()
    2. exec()
    3. execFile()
    4. fork()

    The goal of this demonstration is not so that learners learn the four types of child process creationg method. This is just
    a conceptual demo to show that node.js is able to spawn a new process.

    cd to this directory and run `node index.js`.
*/

// import the module
const { fork } = require("child_process");

const forked = fork("./spawned.js"); // the js file that will become the child process.

forked.on("message", (msg) => {
  console.log("Message from child:", msg); // print this when receive msg from child
});

forked.send("output.txt"); // get child process to create this file.

// After running `node index.js`, a file will be created in the same directory.
