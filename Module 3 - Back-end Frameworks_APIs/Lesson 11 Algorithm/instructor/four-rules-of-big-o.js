//Worse Case
function bigORuleOne() {
  let dataSet = ["Edison", "Colin", "Stanley", "Peter", "Joshua", "Sritam"];

  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i] === "Stanley") {
      return "Found!";
    }
  }
}

// Remove Constants
function bigORuleTwo() {
  let numberSet = [1, 2, 3, 4, 5];
  let total = 0;

  for (let i = 0; i < numberSet.length; i++) {
    total += numberSet[i];
    total += 1;
  }

  return total;
}

// Different terms for inputs
function bigORuleThree() {
  let stringOne = "Skills Union";
  let stringTwo = "Software Development";

  for (let i = 0; i < stringOne.length; i++) {
    console.log(stringOne[i]);
  }

  for (let i = 0; i < stringTwo.length; i++) {
    console.log(stringTwo[i]);
  }
}

//Drop Non Dominants
function bigORuleFour() {
  let numberSetOne = [2, 4, 6, 8, 10, 12];
  let finalArray = [];

  for (let i = 0; i < numberSetOne.length; i++) {
    console.log(numberSetOne[i]);
  }

  for (let x = 0; x < numberSetOne.length; x++) {
    for (let y = 0; y < numberSetOne.length; y++) {
      finalArray.push(numberSetOne[i] + numberSetOne[y]);
    }
  }
}
