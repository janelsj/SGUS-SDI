//Worse Case
function bigORuleOne() {
  const numberArray = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 100)
  );

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 999) {
      console.log("Found!");
    }
  }
}
// Best Case?
// Worse Case?
// Big O Notation?

// Remove Constants
function bigORuleTwo() {
  let number = 0;
  let stringOne = "Skills Union";

  for (let i = 0; i < stringOne.length; i++) {
    number += 1;
    console.log(stringOne[i]);
  }
}
// Big O Notation?

// Different terms for inputs
function bigORuleThree() {
  let numberSetOne = [2, 4, 6, 8, 10, 12];
  let numberSetTwo = [3, 6, 9, 12, 15];

  for (let i = 0; i < numberSetOne.length; i++) {
    console.log(numberSetOne[i]);
  }

  for (let j = 0; j < numberSetTwo.length; j++) {
    console.log(numberSetTwo[j]);
  }
}
// Big O Notation?

//Drop Non Dominants
function bigORuleFour() {
  let numberSetOne = [2, 4, 6, 8, 10, 12];
  let numberSetTwo = [3, 6, 9, 12, 15];

  for (let i = 0; i < numberSetOne.length; i++) {
    console.log(numberSetOne[i]);
  }

  for (let j = 0; j < numberSetTwo.length; j++) {
    console.log(numberSetTwo[j]);
  }

  for (let x = 0; x < numberSetOne.length; x++) {
    for (let y = 0; y < numberSetTwo.length; y++) {
      if (numberSetOne[x] === numberSetTwo[y]) {
        console.log("Both numbers are the same:", numberSetOne[x]);
      } else {
        console.log(
          "Both numbers are different:",
          numberSetOne[x],
          numberSetTwo[y]
        );
      }
    }
  }
}
// Big O Notation?
