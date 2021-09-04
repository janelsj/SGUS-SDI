// 1. Create and return a promise object

function doSomething(){

    return new Promise((resolve, reject) => {
        //throw new Error("Error!"); // toggle comment       
        reject("rejected"); // toggle comment
    });
    
}

// 2. Call doSomething() and handle error with .catch()

doSomething().then((resolvedValue)=>{
    console.log("inside then()", new Date()); // This line will be skipped.
}).catch(err => {
    console.log("error caught in .catch()", err);
});

