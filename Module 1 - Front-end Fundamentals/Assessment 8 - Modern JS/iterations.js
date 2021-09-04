/*
    Task 1: Use .every() to check if every of the given array is whole number.
*/

const numbers = [1,2,3,4,5.1];

// Add code here
const isWholeNum = numbers.every(num => Number.isInteger(num));
console.log("Task 1: All whole numbers? ", isWholeNum);

/*
    Task 2: Use .filter() on `charArr` to produce another array that contains only the number.
*/

const charArr = [1,2,'a','b', 3,'c'];

// Add code here
const numArr = charArr.filter(number => typeof number === "number");
console.log("Task 2: 'Numbers-only' array --> ", numArr);
/*
    Task 3: Use .map() to produce an array where each numeric element is incremented by 1.
*/

const nums = [1,2,3,4,5]; // produce [2,3,4,5,6]
const numsIncrease = nums.map(num => num+1);
console.log("Task 3: Increase element by one --> ", numsIncrease);
/*
    Task 4: Use .slice() to produce an array that contains the 2nd to 4th elements.
*/

const animals = ["snake", "cow", "lamb", "dog", "shark"]; // produce ["cow", "lamb", "dog"]
const someAnimals = animals.slice(1,4);
console.log("Task 4: slice 2nd to 4th element --> ", someAnimals);
