function pay(isSuccess){
    return new Promise((resolve) => {
        resolve(isSuccess);
    })
}

function sendInvoice(){
    return new Promise(r => {
        r("email sent");
    });
}

function updateDelivery(){
    return new Promise(r => {
        r("updated");
    })
}

async function start(){

    // Wait for pay() to respond before moving on.
    let isSuccess = await pay(false); // toggle argument
    console.log("isSuccess", isSuccess);

    if(isSuccess){

        // Send Invoice (don't have to wait for response)
        sendInvoice().then((msg) => {
            console.log(msg);
        }).catch(err => {
            console.error(err);
        })

        // Update Delivery (don't have to wait for response)
        updateDelivery().then(msg => {
            console.log(msg);
        }).catch(err => {
            console.error(err);
        })
    }
    
}

start();
