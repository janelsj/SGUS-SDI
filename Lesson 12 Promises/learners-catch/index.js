function whoops(){
    // Add code here - return a promise that rejects or throw an error (try both!)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside timeout function 1");
            if (num % 2 === 1) {
                resolve("accepted");
            } else {
                reject("Error: This is not an odd number.");
                // reject(new Error ("Error - not odd number"));
            }
        }, 2000)
    })
}

// Add code here - call whoops() and use .then() and .catch()
const num = 2;
whoops()
    .then((result) => {
        console.log("1st then:", result);
        return num + 1;
    })
    .then((result) => {
        console.log("2nd then:", result);
    })
    .catch((e)=>{
        console.log(e);
    })


//____________METHOD 2__________________
function whoops2(){
    // Add code here - return a promise that rejects or throw an error (try both!)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside timeout function 2");
            if (num2 % 2 === 1) {
                resolve("accepted");
            } else {
                reject("Error: This is not an odd number.");
            }
        }, 2000)
    })
    .then((result) => {
        console.log("1st then:", result);
        return num2 + 1;
    })
    .then((result) => {
        console.log("2nd then:", result);
    })
    .catch((e)=>{
        console.log(e);
    })
}

// Add code here - call whoops() and use .then() and .catch()
const num2 = 3;
whoops2();