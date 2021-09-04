/*

    Task Breakdown:
    1. Create a class "DataSender" that extends "BaseDataSender".
    2. Implement a function send()
    3. In the send() function, use spread syntax to merge "startSignal", the given signal and "endSignal" into an array
        in the respective order [<start signal>, <given signal>, <end signal>].
    4. The given signal should be given through the constructor.
    
    Code challenge:
    - If the given signal is not "01" or "02", throw an error.

    Refer to the mocked Data Map:
    00 : Start 
    01 : Signal A
    02 : Signal B
    FD : Close Channel
    FE : Power Off
    FF : End

    Real Life Scenario:

    A SMART Home project inspires this assignment. The BaseDataSender class contains the necessary serial data required to start and end data sequence.
    All implementations of the new device must extend from BaseDataSender. For example, if ten different devices are used in the SMART Home project, 
    we would have ten classes inheriting from BaseDataSender class. If a need arises to change the start and end sequence data, 
    developers do not have to change the start and end signal of ten classes. Instead, only the BaseDataSender class needs to be updated, 
    and this change will automatically affect all ten devices. This allows scalability so that when we grow up to 100 devices, 
    it will not be a nightmare when start and end signal needs to be changed.
*/

class BaseDataSender {
    startSignal = ['00']; // Sequence must be at the start of signal
    endSignal = ['FD', 'FE', 'FF']; // Sequence must be at the end of the signal

    constructor(signal){
        this.signal = signal;
    }
}

// Add code here
class DataSender extends BaseDataSender {
    constructor (givenSignal) {
        super();
        this.givenSignal = givenSignal;
        this.send = () => {
            if (givenSignal==="01" || givenSignal==="02") {
                let mergedSignal = [...this.startSignal, givenSignal, ...this.endSignal];
                console.log(mergedSignal);
                return mergedSignal;
            } else {
                throw new Error("Error");
            }
        }
    }
}

const sender = new DataSender("01");
sender.send(); // "[ '00', '01', 'FD', 'FE', 'FF' ]"