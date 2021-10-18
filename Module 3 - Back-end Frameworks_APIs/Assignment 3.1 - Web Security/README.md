# Security: Assignment

## Brief

In this assignment, we will learn about `logging` as it is the tenth top web application security risk listed on [OWASP](https://owasp.org/www-project-top-ten/) to date (9 Aug 2021). This logging is not the same as console.log. Console is one of many output of a log. Console logging is applicable for development only because whatever is logged on console cannot be retained. Only logging on file system can be retained and referenced. In this assignment, we want to apply application log to file using the popular [winston](https://www.npmjs.com/package/winston) library.. 

A simple node application has been setup for you. Refer to `./logging-app`.

You are to implement a simple function in `index.js`:
``` js
function sum (a, b){
    // log info
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Arguments must be numeric");
    }

    const total = a + b;
    // log debug
    return total;
}

try{
    sum(1,2);
    sum(1, "test");
}catch(err){
    // log error
}

```

You are to add logging code to the commented lines.

### Task 1: Setup Logger

Setup logger at `./logging-app/src/logger.js` and export it using CommonJS approach `module.exports = logger;`.

Refer to [winston usage](https://github.com/winstonjs/winston#usage) for instruction on how to setup a logger.

### Task 2: Apply logging to sum()

You need to import `./src/logger.js` to `index.js`. E.g. `const logger = require("./src/logger")`

Then, apply logging to commented line.


## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.