const { performance } = require('perf_hooks');

function testPerformance() {
  let t0 = performance.now();

  let number = 1;
  number += 1;

  let t1 = performance.now();
  console.log("Time taken to perform addition", t1 - t0);
}
testPerformance();

function findInstructor() {
  let t0 = performance.now();
  const instructorArray = new Array(100000).fill("Stanley");
  let numberOfStanley = 0;
  for (let i = 0; i <= instructorArray.length; i++) {
    if (instructorArray[i] === "Stanley") {
      numberOfStanley += 1;
    }
  }
  console.log("Number of Stanley Instructor found:", numberOfStanley);

  let t1 = performance.now();
  console.log("Time to find Stanley took:", t1 - t0);
}
findInstructor();