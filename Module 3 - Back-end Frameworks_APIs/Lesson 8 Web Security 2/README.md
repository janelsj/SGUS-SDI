# Web Security 2

## Brief

In this lesson, we will not be having a fixed entry file, typically `./index.js`. Instead, we will run multiple files with `node` command directly. Learners are not required to write any code but run the JS files via Terminal. If the class end early, start assignment where learners are to create sign up and login API Endpoint with codebase produced in the previous lesson.

We will learn two things in this lesson - hashing and JWT. The lesson is broken into 4 parts.

Part 1: hash a text
Part 2: verify a text against a hashed value
Part 3: generate JWT token
Part 4: verify JWT token

Before jumping into part 1, observe the file `./index.js` and run `node index.js param1 param2` on Terminal. We will be using this approach to pass in arguments into a JS file.



### Part 1 - Hash a Text

Install bcrypt with `npm install bcrypt`.

Observe how a plain text is hashed at `./hash.js`.

```js
const bcrypt = require('bcrypt'); 
const saltRounds = 10; 
const plainText = process.argv[2]; // Taken from command

bcrypt.hash(plainText, saltRounds, function(err, hash){
    
    // A callback function called after hash() completes.    
    if(err){
        console.error(err);
        return;
    }
    console.log(hash);
});
```

Run the following command: `node hash.js apple` and you will see an output like this:

```
$2b$10$L2MpsLZn2tflN6APK4s0EONFLowkq7ImLAyce6h4cbXM9xaM5Yl.2
```

### Part 2 - Verify a text against hashed value.

Observe how a text is being compared against hashed value.

```js
const bcrypt = require('bcrypt');
const hashedValue = process.argv[2];
const plainText = process.argv[3];

bcrypt.compare(plainText, hashedValue, function(err, result){
    console.log(`compare ${plainText} against ${hashedValue}`);
    if(err){
        console.error(err);
        return;
    }

    console.log(result);
});
```

Run the following command using the output from Part 1. 

```
$ node verify-hash.js '$2b$10$L2MpsLZn2tflN6APK4s0EONFLowkq7ImLAyce6h4cbXM9xaM5Yl.2' orange
output: false
$ node verify-hash.js '$2b$10$L2MpsLZn2tflN6APK4s0EONFLowkq7ImLAyce6h4cbXM9xaM5Yl.2' apple
output: true
```

Based on the above execution, we can note that the hashed value compare against "orange" returns false while it returns true when compare against "apple". 

### Part 3 - Generate a JWT Token

Install Json Web Token with `npm install jsonwebtoken`.

Observe the file `generate-jwt.js`.

```js
const jwt = require("jsonwebtoken"); // Import
const fs = require("fs"); // fs package comes with node.js by defaut, no need npm install.
const privateKey = fs.readFileSync("./jwtRS256.key"); // read the private key

// The data to be used for generating JWT
const mockLoginData = {
    accountId: 1,
    email:"edison@skillsunion.com",
    permissions:{
        role:"ADMIN",
        allow:['CREATE_VEHICLE', 'CREATE DRIVER']
    }
}

// Generate token with the above data. 
const token = jwt.sign(mockLoginData, privateKey, {algorithm:"RS256", expiresIn:"1d"});
console.log(token);
```
Run the file:
```
$ node generate-jwt.js

Output:
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjEsImVtYWlsIjoiZWRpc29uQHNraWxsc3VuaW9uLmNvbSIsInBlcm1pc3Npb25zIjp7InJvbGUiOiJBRE1JTiIsImFsbG93IjpbIkNSRUFURV9WRUhJQ0xFIiwiQ1JFQVRFIERSSVZFUiJdfSwiaWF0IjoxNjI4OTA5ODczLCJleHAiOjE2Mjg5OTYyNzN9.Og79PMlcWTCnsHVRJHlzuytX9QY-sCwcGw5UVHWTbK0UVztxXGm0jJgzvTleZP6XoFdVGKWjJNEzBPwOJG5PldJutrfKvkiBvkvaeHrETGCcicU9ZPK98sCEElBLtKddHpZJqSpfW2ycQ64N8dkzU4-oVOWS6nozZLKRg9HtFVTTFynTboQPhBaR00OR5sVWUERJnu61_r1ecV_kEoX5A5GiHFWUMsyyd_Lz40DdLAwMBAAsPtXm7rpjWQRunFrlXNwP0cfyzHalap_4Xx0MoQr7P1gTwSfK834Cc0mDXX2v0o2y025rzwRfdtVFCbPH_K3Zq1tBZFhU_T_misWGTp90cRz3z0Uc3wg5TiVAyHMVUKbZEtgvF5vNLL75fwgnz2YjodmzNgfFfBXKKzEQhDQoUVGHhnqAEXwHKriMMomVzTXAYYdGljqK7FUsFAtOmc2yPMAMUDD1K-YQx1RvMvv-63fuR7sCHAytJUfVM8-6nrdwvduo3k1bWZDIQJEN8TUjL2AV6qqGC_tkIJriMjufJ5gV7BNSSSb5IEfua2VA0OGq9XMeXB6qs9Im9ZDXmzd3J32xSbWYM43R0Yuu7iTikyuBqykRcfJIpQEaOkylrAzqpoTLRJ-7hRHDy7LJufCzYdNi2GUv4pgdHZc4kP8KPdjAQYZcBklAV3pqXAY
```

JWT does not always require to sign with a private key. In this exercise, we try to produce the industry practice as relevant and as simple as possible. 
(can generate a RSA private key from https://cryptotools.net/rsagen)

### Part 4 - Verify JWT Token

Observe the file: `verify-jwt.js`.

```js
const jwt = require("jsonwebtoken"); // Import
const fs = require("fs"); // Import fs that comes with node.js
const privateKey = fs.readFileSync("./jwtRS256.key"); // Import the private key

const token = process.argv[2]; // Input argument

// Decrypt the given token
jwt.verify(token, privateKey, {algorithms:["RS256"]}, function(err, decoded){
    if(err){
        console.error(err); // The token will fail is it expires.
        return;
    }

    console.log(decoded); // You get the decrypted data.
})
```

Run the file:

```
$ node verify-jwt.js '<paste the generated jwt token>'

output:
{
  accountId: 1,
  email: 'edison@skillsunion.com',
  permissions: { role: 'ADMIN', allow: [ 'CREATE_VEHICLE', 'CREATE DRIVER' ] },
  iat: 1628909873,
  exp: 1628996273
}
```

You may change the expiry by editing `generate-jwt.js`. Try setting the expiry to 5 seconds so that you may attempt decrypt an expired JWT token.

```
Error log:
TokenExpiredError: jwt expired
    at /Users/edisonzhuang/Projects/SkillsUnion/ntu-sdi/module-3/lesson-3.8-web-security-2/node_modules/jsonwebtoken/verify.js:152:21
    ...

Console log:
{
  expiredAt: 2021-08-14T03:05:08.000Z
}
```