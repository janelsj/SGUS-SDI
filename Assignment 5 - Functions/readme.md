# JavaScript Functions: Assignment

## Problems

### 1: [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors)

1. Under the `src` directory, create a file named `rps.js`
1. Define a function named `playGame`
1. The function should accepts `rock`, `paper`, or `scissors` as an argument by the user
1. Randomly pick `rock`, `paper`, or `scissors` as the computer choice
1. Return whether the user `win`, `lose`, or `tie`

**Example:**

```js
playGame("rock"); // Computer picked: paper. User picked: rock. User lose.
```

### 2: Dice Roller

1. Under the `src` directory, create a file named `dice.js`
1. Define a function named `rollDice`
1. The function should choose two random numbers between 1 and 6
1. It should return the sum of the two numbers

**Example:**

```js
rollDice(); // Dice rolled are 3 and 6 with the sum of 9
```

#### Bonus

1. Allow the function to accept a number as a parameter
1. Role the dice as many times as indicated by the above parameter

**Example:**

```js
rollDice(3); // Dice rolled are 3, 6, and 7 with the sum of 16
```

### 3: Research String Methods

Using [this link](https://www.w3schools.com/js/js_string_methods.asp) please describe any 3 methods, what they are used for and how to use them.

#### Method 1

```
Name: slice()

Description: 
Used to extract a part of a string and return the extracted part as a new string.
The method includes two parameters:
- the first parameter states the starting index position of the first character of the part to be extracted; and
- the second parameter (optional) states the index position of the first character of the part to be ignored after the extracted part.
If the second parameter is omitted, the rest of the string will be extracted.
Negative number in the parameters means that the strings are counted from the last character.

Example:
const string1 = "Today is Wednesday.";
string1.slice(-10, -7)   // Returns "Wed"

```

#### Method 2

```
Name: replace()

Description:
Used to replace a value with another in a string.
The method is case-sensitive and replaces only the first match found within the string by default.
The method has two parameters:
- first parameter is the value in the string to be replaced;
- second parameter is the new replacement value.
/i can be used to make the expression for the match case-insensitive.
/g enables all matches in the string to be replaced.

Example:
const string2 = "She sells seashells on the seashore.";

string2.replace("Sea", "beautiful ")  
        // Returns same as string2 "She sells seashells on the seashore." as there is no "Sea" (with capital S) in string 2. This can be made case-insensitive with /i.

string2.replace(/Sea/i, "beautiful ") is the same as string2.replace("sea", "beautiful ")
        // Returns "She sells beautiful shells on the seashore." By default, only the first "sea" match in the string is being replaced, so no change is made to the second "sea" in the string. To replace all "sea" in the string, a global match can be used with /g.

string2.replace(/sea/g, "beautiful ") is the same as string2.replace(/Sea/ig, "beautiful ")
        // Returns "She sells beautiful shells on the beautiful shore." /i and /g can be combined as /ig to make the expression for the global match case-insensitive.

```

#### Method 3

```
Name: split()

Description:
Used to convert a string to an array, using characters in the string to split the string into array elements, such as:
split(",") to split the string using comma to form array elements;
split(" ") to split the string using word spacing to form array elements;
split("") to split individual characters of the string into array elements.

Example:
const string3 = "Yesterday, it rained.";
string3.split(",");         // Returns ['Yesterday', ' it rained.']
string3.split(" ");         // Returns ['Yesterday,', 'it', 'rained.']
string3.split("");          // Returns ['Y', 'e', 's', 't', 'e', 'r', 'd', 'a', 'y', ',', ' ', 'i', 't', ' ', 
                            // 'r', 'a', 'i', 'n', 'e', 'd', '.']

```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
