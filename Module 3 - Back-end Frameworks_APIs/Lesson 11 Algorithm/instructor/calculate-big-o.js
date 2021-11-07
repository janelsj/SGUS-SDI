function basicChallenge() {
  console.log("This is a basic challenge");
}
//O(1)

function NChallenge(nArray) {
  for (let i = 0; i < nArray.length; i++) {
    console.log(nArray[i]);
  }
}
// Answer: O(2N)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }

  return a;
}
// Answer: O(3 + 4n)

let totalCalls = 0;
function addtionalChallenge(n) {
  totalCalls += 1;
  for (let i = 1; i <= n; i++) {
    addtionalChallenge(n - 1);
  }
}
addtionalChallenge(12); //Dont go beyond 12
console.log(totalCalls);
//Answer: O(n!) - very very not desirable
