
/*
    1. Create a new class SmsNotification that extends Notification class.
    2. Override send() function by console log the following message "SMS sent to Edison with message: Hello".
    3. Create another new class EmailNotification that extends Notification class.
    4. Override send() function by console log the following message "Email sent to edison@skillsunion.com with message: Hello".


class Notification{
    constructor(to, message){
        this.to = to;
        this.message = message;
    }

    send(){
        console.log("Unknown channel");
    }
}
*/

class Notification1 {
    constructor(to, message){
        this.to = to;
        this.message = message;
    }

    send(){
        console.log("Unknown channel");
    }
}

class SmsNotification extends Notification1 {
    constructor (to, message) {
        super(to, message);
    }

    send() {
        console.log("SMS sent to Edison with message: Hello");
    }
}

class EmailNotification extends Notification1 {
    // constructor (to, message) {
    //     super(to, message);
    // }

    send() {
        console.log("Email sent to edison@skillsunion.com with message: Hello");
    }
}

const sms = new SmsNotification;
sms.send();

const email = new EmailNotification;
email.send();