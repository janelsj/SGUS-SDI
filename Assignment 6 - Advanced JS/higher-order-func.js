/*
    Task 1. Outer function calculate totalPrice, inner function return a GST payable price.

    Steps:
    - Create an outer function that takes the array "priceList" as an argument.
    - In the scope of the outer function, sum all the value in array "priceList" 
    and store the value in variable "totalPrice".
    - Return an inner function that multiply "totalPrice" with GST 7% and store 
    the value in variable "payablePrice".
    - The variable "payablePrice" should be returned in the inner function.
    - Make appropriate calls to the outer and inner function and console log
    the value of "payablePrice".
    
*/

const priceList = [10.5, 9.9, 8.9, 4.5];

// Add code here
function outer(anyPriceList) {
  let totalPrice = 0;
  for (i = 0; i < anyPriceList.length; i++) {
    totalPrice += anyPriceList[i];
  };
  console.log("Total Price: " + totalPrice);
  function inner() {
    let payablePrice = totalPrice * 1.07;
    return payablePrice;
  };
    return inner;
}
const totalPayablePrice = outer(priceList);
console.log("Total payable price is " + totalPayablePrice());

/*
    Task 2. Manipulate the "queue" array.
*/

function createQueue(fn) {
  const queue = [1, 2, 3, 4];
  return fn(queue);
}

const result = createQueue(addMoreItems); // Add code here - function as argument

function addMoreItems() {
  const queue = [1, 2, 3, 4];
  queue.unshift("start");
  queue.push("last");
  return queue;
}

console.log(result); // Expected output: ["start", 1, 2, 3, 4, "last"];
