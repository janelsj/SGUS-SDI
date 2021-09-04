/*
    Task 1: Call fetch() and filter() using a Database instance.

    You are required to implement fetch() and filter() so that "Code Block A" will work.

    The output looks something like this:

    fetch() returns [
        { name: 'Ivan', age: 30, gender: 'm' },
        { name: 'Christopher', age: 34, gender: 'm' },
        { name: 'Cheryl', age: 29, gender: 'f' },
        { name: 'Kelly', age: 27, gender: 'f' }
    ]
    filter() returns [
        { name: 'Cheryl', age: 29, gender: 'f' },
        { name: 'Kelly', age: 27, gender: 'f' }
    ]
    

    Task 2: Work on Code Block B. It should have the same output as Code Block A except it uses async/await syntax.

    Hint: 
    - Array.filter()
    - IIFE
*/

class Database {
  #data = [
    {
      name: "Ivan",
      age: 30,
      gender: "m",
    },
    {
      name: "Christopher",
      age: 34,
      gender: "m",
    },
    {
      name: "Cheryl",
      age: 29,
      gender: "f",
    },
    {
      name: "Kelly",
      age: 27,
      gender: "f",
    },
  ];

  fetch() {
    // Add code here
    return new Promise((resolve) => {
      resolve(this.#data);
    })
  }

  filter(prop, value) {
    // Add code here
    return new Promise((resolve) => {
      let filteredData = this.#data.filter((obj) => {
        if (obj[prop] === value) {
          return obj;
        }
      });
      resolve(filteredData);
    })
  }
}


// Code Block A
const db = new Database();
db.fetch().then((r) => console.log("fetch() returns", r)); // prints entire #data array
db.filter("gender", "f").then((r) => console.log("filter() returns", r)); // prints an array contains the female
// End of Code Block A

// Code Block B

// Add code here - async/await syntax
(async function fetchPromise() {
  const result = await db.fetch();
  console.log("async fetch() returns", result);
  })();

(async () => {
  const result = await db.filter("gender","f");
  console.log("async filter() returns", result);
})()
// End of Code Block B
