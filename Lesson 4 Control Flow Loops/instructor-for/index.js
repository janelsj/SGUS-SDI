// Demonstrate the different ways to loop an array

let fruits = ["apple", "banana", "cranberry"];

// 1. The traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("1.", fruits[i]);
}

// 2. For In syntax
for (idx in fruits) {
  console.log("2.", idx);
}

// 3. For Of syntax
for (fruit of fruits) {
  console.log("3.", fruit);
}
