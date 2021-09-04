/*
    In-class exercise.

    Write a while loop where expectedBalance is greater than walletBalance, increment walletBalance by 1 each loop. You should console.log the current walletBalance in the while loop.

    You should expect the console to print 1 to 10.
*/

let walletBalance = 0;
const expectedBalance = 10;

// within the while loop, do "walletBalance++;"
while (expectedBalance > walletBalance) {
    walletBalance++;
    console.log(walletBalance);
}