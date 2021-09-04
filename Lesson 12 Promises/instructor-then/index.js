// 1. How to create a promise object

function doSomething(){

    return new Promise((resolve, reject) => {
        console.log("Promise created at", new Date());
        setTimeout(()=>{            
            resolve("done");            
        }, 3000);
    });
    
}

// 2. Call doSomething() and handle promise with .then()

doSomething().then((resolvedValue)=>{
    console.log(resolvedValue, new Date());
})