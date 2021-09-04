function handle(isError){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isError){
                reject("Mock error");
            }
            resolve("handled");
        }, 2000)
    })
    .catch(error => {return error})
}

// Add code here - define a function with async / await keyword that calls handle(boolean). 
let myFunction = async () => {
    console.log('my result');
    const wait = await handle(true);
    console.log(wait); //waited 2 seconds before this console.log happens.
    }

myFunction();