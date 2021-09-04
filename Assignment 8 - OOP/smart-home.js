/*
    Create a function "createSignalFactory" that returns an object with function "send()". The implementation of "send()" function should
    go according to the device type declared in the only argument.

    You can use easily create this with object literals and functions. If you have succeeded this approach, you are being challenged to 
    improve the code by:

    - Create a "BaseSignal" class to be inherited by "TVSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - In the children classes, override "send()" function with implementation specfic to its type.
    - Through the function "createSignalFactory", instantiate an object using the "new" keyword.
*/

// Add code here

function createSignalFactory(deviceName) {
    const device = {
        send: function() {
            switch (deviceName.toUpperCase()) {
                case "TV":
                case "AIRCON":
                case "DOOR":
                    console.log(`Send ${deviceName.toUpperCase()} signal.`);
                    break;
                default:
                    console.log("Error: no signal.");
            }
        },
    };
    return device;
}

let signal = createSignalFactory('tv');
signal.send(); // "Send tv signal"

signal = createSignalFactory('aircon');
signal.send(); // "Send aircon signal"

signal = createSignalFactory('door');
signal.send(); // "Send door signal"

// signal = createSignalFactory('random');
// signal.send(); // "Error: no signal."

// ---------- Challenge ------------

class BaseSignal {
    constructor() {
        if(this.constructor.name === "BaseSignal"){
            throw new Error("This class cannot be instantiated");
        }
        this.send = function() {}
    }
}

class TVSignal extends BaseSignal {
    constructor() {
        super();
        this.send = function() {
            console.log(`Send tv signal.`);
        };
    }
}

class AirconSignal extends BaseSignal {
    constructor() {
        super();
        this.send = function() {
            console.log(`Send aircon signal.`);
        };
    }
}

class DoorSignal extends BaseSignal {
    constructor() {
        super();
        this.send = function() {
            console.log(`Send door signal.`);
        };
    }
}

function createSignalFactory2(deviceName) {
    let device = {};
    switch (deviceName.toUpperCase()) {
        case "TV":
            return (device = new TVSignal());
        case "AIRCON":
            return (device = new AirconSignal());
        case "DOOR":
            return (device = new DoorSignal());
        default:
            return {
                send: () => console.log("Error: no signal."),
            };
    }
}

let signal2 = createSignalFactory2('tv');
signal2.send(); // "Send tv signal"

signal2 = createSignalFactory2('aircon');
signal2.send(); // "Send aircon signal"

signal2 = createSignalFactory2('door');
signal2.send(); // "Send door signal"

signal2 = createSignalFactory2('random');
signal2.send(); // "Error: no signal."