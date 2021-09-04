/*
    Define a class PaymentGateway, that has the following functions:

    1. connectToBank()
    2. verifyCardDetails()
    3. processPayment()
    4. pay()

    Functions (1) to (3) are implementations to be hidden. Function (4) will be exposed as public function.
*/

//Method 1:
class PaymentGateway {
    #connectToBank() {
        console.log("Connecting to bank...");
    }
    #verifyCardDetails(card) {
        console.log(`Verifying ${card}...`);
    }
    #processPayment() {
        console.log("Processing payment...");
    }
    pay(cardNumber) {
        this.#connectToBank();
        this.#verifyCardDetails(cardNumber);
        this.#processPayment();
    }
}

const newPayment = new PaymentGateway();
newPayment.pay(12345);


//Method 2:
class PaymentGateway2 {
    #cardNumber;
    set card(num) {
        this.#cardNumber = num;
    }
    #connectToBank() {
        console.log("Connecting to bank...");
    }
    #verifyCardDetails() {
        console.log(`Verifying ${this.#cardNumber}...`);
    }
    #processPayment() {
        console.log("Processing payment...");
    }
    pay() {
        this.#connectToBank();
        this.#verifyCardDetails();
        this.#processPayment();
    }
}

const anotherNewPayment = new PaymentGateway2();
anotherNewPayment.card = 54321;
anotherNewPayment.pay();