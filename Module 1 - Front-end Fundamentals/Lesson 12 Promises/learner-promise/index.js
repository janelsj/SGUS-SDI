function createPromise() {
  // Add code here - To create a promise and practice resolve and reject
  const num = 6;
  let isNumberEven = new Promise( function (resolve, reject) {
    if (num % 2 === 0) {
      resolve ("This is an even number.");
    } else {
      reject ("This is an odd number.");
    }
  });
  console.log(isNumberEven)
}

createPromise();

function createPromise2() {
    // Add code here - To create a promise and practice resolve and reject
    const num1 = [1,2,3,4,5,6,7,8,9,10];
    let evenNumbers = new Promise( function (resolve, reject) {
      if (num1.every((n) => n % 2 === 0)) {
        resolve (num1.map(i => Math.pow(i,2)));
      } else {
        reject (num1.filter(n => n % 2 === 1).map(i => i * 3));
      }
    });
    console.log(evenNumbers)
  }
  
  createPromise2();
