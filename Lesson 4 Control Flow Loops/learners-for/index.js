/*
    In-class exercise.

    Write for loops to console.log the value in queueNumberArr but skip logging event number.

    Since this is an exercise, you are required to achieve the above by writing 3 types of for loop:
    - traditional for loop
    - for-in
    - for-of

    Hint: Do google and refer to syntax from the internet!
*/

const queueNumberArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

// Try writing traditional for loop
for (let i=0; i<queueNumberArr.length; i++) {
    console.log(`${i}` + "," + queueNumberArr[i]);
}
// Try with for-in

// Try with for-of
