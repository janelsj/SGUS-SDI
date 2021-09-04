function sendEmail() {
    console.log("sending Email");
}

function sendSms() {
    console.log("sending SMS");
}

function process(send) {
    send();
}

process(sendEmail);
process(sendSms);