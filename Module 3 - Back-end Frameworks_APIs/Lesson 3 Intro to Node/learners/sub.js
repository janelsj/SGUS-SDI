const fs = require('fs');

// console.log("[SUB] Registering message event");

process.on("message", (filename)=>{
    // console.log("[SUB] writing file...");
    fs.writeFileSync(filename, "Some Data"); //writeFileSync is a synchronous process, so this line will be executed before going to the next line.
    
    // console.log("[SUB] Send message back to main 'File created'");
    process.send("File created"); // Sub (child) process will send this string to main.js

    setTimeout(()=>{
        // console.log("[SUB] Exiting child process after 1 second");
        process.exit();
    },1000)
})
