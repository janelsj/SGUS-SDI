/*
    Code Challenge 4 - Nested Loop.

    At an apparel shop, the owner has to print size labels on different product.
    However, in the given array of product, "Watch" comes in one size and do not
    require to print label. 

    Modify the given code so that the program would skip "Watch". 
    This means that the program should not enter the inner loop when 
    products[i] is "Watch".
*/

const sizeLabels = ["XS", "S", "M", "L", "XL"];

const products = ["Shirts", "Dress", "Watch", "Shorts"];

let results = [];

// outer loop
for (let i = 0; i < products.length; i++) {
  if (i === 2) {continue;}
  // inner loop
  for (let j = 0; j < sizeLabels.length; j++) {
    console.log(`${products[i]} ${sizeLabels[j]}`);
  }
}
