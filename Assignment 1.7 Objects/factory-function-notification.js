/*
    Study the function "createNotification". 

    createNotification() is a factory function where it instantiates an object based on the arguments passed to it. 

    In this case, this function will return either a SMS or EMAIL notification object. 

    Task 1: Implement case "EMAIL" 
    Task 2: Instantiate both SMS and EMAIL object and invoke send() function.
    Task 3: Code challenge! 
    - Create a class "Notification" with mandatory properties (type, to and content) and optional properties (cc and subject).
    - The function send() should be implemented in the class.
    - The class will implement send() function based on the value given to property "type".
    - The class should handle the case where "type" is not "sms" and "email".
*/

function createNotification(type, params) {
    switch (type.toUpperCase()) {
        case "SMS":
            {


                const notification = {
                    to: params.to,
                    content: params.content
                };

                notification.send = function() {
                    console.log(`Sent SMS to ${this.to} with content ${this.content}`);
                }

                return notification;
            }

        case "EMAIL":
            {
                // Add code here to create email notification object
            }

        default:
            return null;
    }
}

<<<<<<< Updated upstream
// Add code here to create one sms and one email object. Invoke function "send()" for both object.
=======
// Add code here to create one sms and one email object. Invoke function "send()" for both object.

let sms = createNotification("sms", {to:"John", content:"How are you?"});
sms.send();

let email = createNotification("email", {to:"Tom", content:"Hello, how are you?"});
email.send();

//Task 3: Code Challenge
class Notification {
    constructor (type, to, content, subject = "", cc = "") {
        this.type = type;
        if (this.type !== "SMS" && this.type !== "EMAIL") {
            throw new Error(`Nothing was sent.`);
        }
        this.to = to;
        this.cc = cc;
        this.subject = subject;
        this.content = content;
    };
    send() {
        if (this.type.toUpperCase() === "SMS") {
            console.log(`Sent SMS to ${this.to} with content "${this.content}".`);
        } else if (this.type.toUpperCase() === "EMAIL") {
            console.log(`Sent EMAIL to ${this.to} with content "${this.content}".`);
        };
    }
}
//Instantialising objects using Task 3 code for defining Class.

let smsOne = new Notification("sms", "Mary", "How are you?",);
smsOne.send();

let emailOne = new Notification("email", "Eunice", "Hello, how are you?", "Hi");
emailOne.send();

let notSmsNotEmail = new Notification("random", "Tom", "How are you?");
notSmsNotEmail.send();
>>>>>>> Stashed changes
