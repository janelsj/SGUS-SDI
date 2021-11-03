const hash = require('./fn.hash');
const text = process.argv[2];

(async() => {
    console.log("hash", await hash(text))
})();