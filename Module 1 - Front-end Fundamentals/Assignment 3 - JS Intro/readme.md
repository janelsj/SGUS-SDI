# JavaScript Introduction: Assignment

## Brief

There are two parts to this assignment. The first require learners to update their answer in this file. The second is a code challenge will be done at [index.js](./assignment/index.js).

## Part 1: Data Types

What are the return values for each of the below code snippets? After coming up with each answer, test it out in the browser console.

### Section 1:

```js
typeof 42;
// Number

typeof 4.2;
// Number

typeof "hello";
// String

typeof false;
// Boolean

typeof NaN;
// Number

typeof (4 !== 2);
// true
```

### Section 2:

What's going on here? What "rules," if any, can we guess from testing these examples?

```js
"hamburger" + "s";
// hamburgers

"hamburgers" - "s";
// NaN

"4" + "2";
// 42

"4" - "2";
// 2

"johnny" + 5;
// johnny5

"johnny" - 5;
// NaN

99 * "baloons";
// NaN
```

## Part 2 - Temperature Converter

Create a program that can convert a temperature in Fahrenheit, Celsius, or Kelvin to the other two units.

## Instructions

1. Write your code in [index.js](./assignment/index.js)
1. Define a variable named `celsius`
1. Store the temperature you get from the user into the `celsius` variable
1. Using the [conversion formula](http://www.csgnetwork.com/temp2conv.html), write JavaScript code that converts `Celsius` to its equivalent `Fahrenheit` and `Kelvin` values

   Example:

   ```
   0C => 32F
   0C => 273.15K
   ```

1. Use `console.log` to print the starting and converted temperature
1. Repeat steps 1-4 for `Fahrenheit` and `Kelvin` temperatures
1. Right-click the file (or highlighted code) and click on "Run Code" to execute code.

**Example:**

```js
// Starting temperature
const celsius = ...; // Add some code to get the user input

// Conversion Code
const celsiusToFahrenheit = ...;
const celsiusToKelvin = ...;

// Print the results to the browser console
console.log(`Celsius: ${...} C`);
console.log(`Fahrenheit: ${...} F`);
console.log(`Kelvin: ${...} K`);
```

The console will print something like this:

```
Celsius: STARTING_TEMP C
Fahrenheit: CONVERTED_TEMP F
Kelvin: CONVERTED_TEMP K
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
