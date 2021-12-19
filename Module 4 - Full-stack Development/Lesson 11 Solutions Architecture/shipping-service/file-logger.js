const winston = require("winston");

const logger = winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.File({filename:"shipping.log"}),
        new winston.transports.Console({format: winston.format.simple()})
    ]
})

module.exports = logger;