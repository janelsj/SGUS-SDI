function whack() {
    // Add code here - return a promise that resolved "SMACK!"
    let promise = new Promise (function(resolve) {
        setTimeout(() => {
            console.log("Inside timeout function");
            resolve("SMACK!");
        }, 3000);
    })
    .then(function (result) {
        console.log("first then()", result);
        return "SMACK2";
    })
    .then(function (result) {
        console.log("second then()", result);
        return "!";
    })
    .then(function(result){
        console.log("third then()", result);
        return true;
    })

    return promise;
}

// Call whack() and resolve "SMACK!" using .then()
whack();