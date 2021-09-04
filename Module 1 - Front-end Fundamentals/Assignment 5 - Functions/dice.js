function randomNum() {
    return Math.floor(Math.random()*6) + 1;
}

function rollDice() {
    return randomNum() + randomNum();
}

console.log(rollDice());

// #### Bonus

function rollDiceBonus(timesOfDiceRoll) {
    const diceArray = [];
    for(i = 1; i <= timesOfDiceRoll; i++) {
        diceArray.push(randomNum());
    };
    console.log(diceArray); // shows the list of random number between 1 to 6 generated as many times as indicated by user
    let sum = 0;
        diceArray.forEach(function(num) {
            sum += num;
        });
    return sum; // total sum of all random numbers generated
}

console.log(rollDiceBonus(100));