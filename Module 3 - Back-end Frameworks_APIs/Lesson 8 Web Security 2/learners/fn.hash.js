const bcrypt = require('bcrypt');

function hash(textToHash) {
    return new Promise((resolve, reject) => {
        //bcrypt.hash([plainText to be hashed],[number of saltrounds],[promise callback function])
        bcrypt.hash(textToHash, 10, (err,hash)=>{
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log(hash);
            resolve(hash);
        });
    });
}
module.exports = hash;