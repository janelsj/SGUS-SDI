/*
    Task 1. 

    Given the array "numberArr", loop through the elements and multiply every odd
    number by 2.
*/

const numberArr = [1, 4, 5, 7, 8, 10, 14, 15];

// Add code here
const doubleOddNumbers = [];
for (const number of numberArr) {
        if (number % 2 === 1) {
            doubleOddNumbers.push(number * 2);
        } else {
            doubleOddNumbers.push(number);
        };
    };

console.log (doubleOddNumbers);

/*
    Task 2. 

    Loop from 0 to 100 using while loop. 
    Push the value that in the multiple of 3 to "resultArr".
    console.log "resultArr".

*/

const resultArr = []; // Something is wrong here

// Add code here
let i = 0;
while (i < 100) {
     i++;
     if (i % 3 === 0) {
     resultArr.push(i);
     };
};
console.log(resultArr);

/*
    Task 3. 

    Use a switch case to detect the arithmetic operator. Possible values are + - * /.
    Defaults to +.

    Based on the operator, apply a different arithmetic expression to produce the "result" variable.

    Add on challenge: 
    - "addition" and "+" can run on same the same expression.
    - "subtract" and "-" can run on same the same expression.
    - "multiply" and "*" can run on same the same expression.
    - "divide" and "/" can run on same the same expression.

    Change the value of variable "operator" to observe different outcome!
*/

const num1 = 10;
const operator = "+";
const num2 = 2;
let result = 0;

switch (operator) {
    case "-":
    case "subtract":
        result = num1 - num2;
        break;
    case "*":
    case "multiply":
        result = num1 * num2;
        break;
    case "/":
    case "divide":
        result = num1 / num2;
        break;
    case "+":
    case "addition":
    default:
        result = num1 + num2;
};
console.log(result);

/* 
    Task 4 - Research.

    There is no need to write code for this task. You are to write your answer in this comment.
    You should google for the answer but give the answer in your own words.

    ---

    Question 1: What is the difference between for-in and for-of loop?

    Your answer here:
    for-in loops over object properties that are enumerable and non-Symbol in an  
    arbitrary order, but for-of loops over the values in the sequence as defined  
    by iterables such as strings, arrays or array-like objects.
    
    ---

    Question 2: Is traditional for-loop the popular way to perform iterations these days? Why?

    Your answer here:
    If iterating over array elements, other iteration methods such as .map or .forEach are more 
    popular as the codes are shorter, and do not necessitate the use of a temporary i variable 
    to code for the iteration loop. Shorter codes also translate to easier code readability.

    If there are no built-in object-specific prototype methods, for-loop is still commonly used 
    to provide iterations over defined elements for a finite number of times and the syntax provides
    fairly easy code readability.
    --- 

    Question 3: What advantage does traditional for loop has over other modern iteration methods? 

    Your answer here:
    If intending to break out of a loop once a certain match is found, if... else statements can be 
    included in the traditional for-loop to look for that particular match, followed by "break", to
    exit the loop early. Other modern iteration methods require looping through all elements before
    exiting the loop, so this could lead to slower performance issues.

*/
