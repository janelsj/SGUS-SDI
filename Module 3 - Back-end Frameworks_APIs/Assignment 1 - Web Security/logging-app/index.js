const logger = require("./src/logger");

function sum (a, b){
    // log info
    logger.info(`User input numbers: ${a} + ${b}`);
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Arguments must be numeric");
    }

    const total = a + b;
    // log debug
    logger.debug(`Total generated from 'sum' function: ${a + b}`);
    return total;
}

try{
    sum(1,2);
    sum(1, "test");
}catch(err){
    // log error
    logger.error("Arguments must be numeric");
}
