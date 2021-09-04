function doSomething(mockReject){
    return new Promise((resolve, reject) => {
        if(mockReject){
            reject('rejected');
        }else{
            resolve('done');
        }
    });
}

// "async" keyword is declared with the function
async function start(){
    try{        
        // "await" keyword is used at the code that returns a promise
        const res = await doSomething(true); // toggle boolean to resolve or reject
        console.log('res', res);
    }catch(err){
        console.log('err', err);
    }
}
    
start();

// When async/await keyword is used, it is best practice to surround it with try-catch.