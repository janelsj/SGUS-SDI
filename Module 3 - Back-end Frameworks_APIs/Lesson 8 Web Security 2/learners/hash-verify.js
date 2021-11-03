const bcrypt = require('bcrypt');
const hashedValue = process.argv[2];
const plainText = process.argv[3];

//bcrypt.compare([plainText to be hashed],[hashedValue that is generated from hash-bcrypt function],[callback function for comparing])
bcrypt.compare(plainText, hashedValue, function(err, result) {
    console.log(`compare ${plainText} against ${hashedValue}`);
    if(err){
        console.error(err);
        return;
    }
    console.log(result);
});
