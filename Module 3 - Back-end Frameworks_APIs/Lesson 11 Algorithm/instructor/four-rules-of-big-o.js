//Worse Case
function bigORuleOne() {
  let dataSet = ["Edison", "Colin", "Stanley", "Peter", "Joshua", "Sritam"];

  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i] === "Stanley") {
      return "Found!";
    }
  }
}
//Best case: O(1) - Assuming item is found at the beginning of the array.
//Worst case: O(N) - Assuming item is found at the last index / item not found at all.

// Remove Constants
function bigORuleTwo() {
  let numberSet = [1, 2, 3, 4, 5];  //O(1)
  let total = 0;                    //O(1)

  for (let i = 0; i < numberSet.length; i++) {  //O(N)
    total += numberSet[i];                      //O(N)
    total += 1;                                 //O(N)
  }

  return total;                                 //O(1)
}
//O(3+3N) - but by removing the constants (ie. remove multiplier), this would be:
//O(1+N) - but after dropping the non-dominants, it is:
//O(N)


// Different terms for different inputs
function bigORuleThree() {
  let stringOne = "Skills Union";               //O(1)
  let stringTwo = "Software Development";       //O(1)

  for (let i = 0; i < stringOne.length; i++) {   //O(N)
    console.log(stringOne[i]);                   //O(N)
  }

  for (let i = 0; i < stringTwo.length; i++) {  //O(M) - M used instead of N because this runs M times depending on length of StringTwo ('N'times is dependent on StringOne length)
    console.log(stringTwo[i]);                  //O(M)
  }
}
//O(2+2N+2M) - but after removing constants, it is :
//O(1+N+M) - but after dropping the non-dominants, it is:
//O(N+M)

//Drop Non Dominants
function bigORuleFour() {
  let numberSetOne = [2, 4, 6, 8, 10, 12];  //O(1)
  let finalArray = [];                      //O(1)

  for (let i = 0; i < numberSetOne.length; i++) {   //O(N)
    console.log(numberSetOne[i]);                   //O(N)
  }

  for (let x = 0; x < numberSetOne.length; x++) {   //O(N^2)
    for (let y = 0; y < numberSetOne.length; y++) {
      finalArray.push(numberSetOne[i] + numberSetOne[y]);
    }
  }
}
//O(2+2N+N^2), but after considering worse case(rule 1) and removing constants(rule 2), it is:
//O(N+N^2), but after dropping non-dominants, it is:
//O(N^2), since with a quadratic, the O(2+2N) is considered negligible

//Example 2: Different variables inside nested loops:
function bigORuleFour() {
  let numberSetOne = [2, 4, 6, 8, 10, 12];  //O(1)
  let numberSetTwo = [1, 3, 5, 6, 9, 11];
  let finalArray = [];                      //O(1)

  for (let i = 0; i < numberSetOne.length; i++) {   //O(N)
    console.log(numberSetOne[i]);                   //O(N)
  }

  for (let x = 0; x < numberSetOne.length; x++) {   //O(N *
    for (let y = 0; y < numberSetTwo.length; y++) { //M)
      finalArray.push(numberSetOne[i] + numberSetTwo[y]);
    }
  }
}
//O(2+2N+N*M), after considering all the rules, it is:
//O(NM)