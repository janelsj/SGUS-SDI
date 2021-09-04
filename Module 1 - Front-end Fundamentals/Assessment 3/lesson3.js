/*
    Task 1.

    Declare and initialize the following variables:
    - your name
    - number of family members
    - your height
    - are you married?
    - your actual retirement age 

    Five variables are expected here. Name your variables meaningfully.
*/

// Add code here
const myName = "Jane";
const familyMembers = 4;
const myHeight = 1.6;
const maritalStatus = "Single";
const retirementAge = 60;

/*
    Task 2.

    Write an arithmetic expression to calculate the interests rate per annum at 5.2.

    Simple Formula: investmentAmount x interests rates x years / 100

    console.log the value of "profit".
*/

const investmentAmount = 100000;
const years = 10;
const interests = 5.2;
let profit = 0; // change this value after adding your code

// Add code here;
profit = investmentAmount * interests * years / 100;
console.log(profit);
/* 
    Task 3 - Research.

    There is no need to write code for this task. You are to write your answer in this comment.
    You should google for the answer but give the answer in your own words.

    ---

    Question 1: What does Type Inference means?

    Your answer here:
    Type Inference means that the programming language automatically detects the types of 
    variables when there is no explicit information or annotations about the data type. Types
    are automatically inferred when variables are initialised or when default values are set
    for parameters.
    ---

    Question 2: What are primitive data types?

    Your answer here:
    Primitive data types are data types that are pre-defined within a programming language as 
    basic building blocks, unlike non-primitive data types which are created by a programmer.
    For Javascript, the primitive data types are number, string, boolean, null and undefined.
    --- 

    Question 3: How are variables different from array?

    Your answer here:
    A variable can only store a single value (single data type) at any one time, but an array
    can store a set of multiple values, which can be of a single data type or a mix of different
    data types.
    --- 

    Question 4: What are the other arithmetic operators that are not covered in the lesson?

    Your answer here:
    The other arithmetic operators are:
        **	Exponentiation,
        %   Modulus (Remainder),
        ++  Increment,
        --  Decrement.
    --- 

    References used:
    1) https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript;
    2) https://www.w3schools.com/js/js_arithmetic.asp

*/
