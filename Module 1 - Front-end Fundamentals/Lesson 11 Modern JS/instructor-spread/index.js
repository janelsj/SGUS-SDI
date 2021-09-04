/*
    1. Demonstrate using spread syntax to copy objects.
 */

// - The destination object will not hold a reference to the source object. (Remember objects and arrays are passed by reference)

const item = {
    id:1,
    name:"Apple",
    price:0.55,
};

const itemDetails = {
    id:2, 
    color:"Red",
    weight:0.1
};

const combined = {...item, ...itemDetails}; //id:2 will overwrite id:1 since they share the same property name.

console.log('object', combined);

// Notice id 1 is being replaced because itemDetails are the second in the spread syntax.



/* 
    2. Demonstrate using spread syntax to copy arrays.
*/

const row1 = ["Kelly", "Mary", "Larry"];

const row2 = ["Keith", "Mary", "David"];

const mergedRow = [...row1, ...row2];

console.log('array', mergedRow); //"Mary" element can be repeated ==> will not be overwritten



// Notice that "Mary" will be repeated.

/*
    3. Spread syntax on function
*/

function sum (num1, num2, num3){
    console.log('parameters value', num1, num2, num3);
}

const nums = [1,2,3];

sum(...nums);



/* 
    4. Rest syntax on function
*/

function concat (...strings){       // takes in unlimited number of parameters
    console.log(strings)
}

concat("apple", "orange", "banana");
concat("singapore", "malaysia", "indonesia", "thailand", "myanmar");