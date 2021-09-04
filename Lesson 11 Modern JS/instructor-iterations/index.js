// Typical for loop
const numbers = [1,2,3,4,5];
for(let i=0 ; i<numbers.length ; i++){
    console.log('typical for loop', i, numbers[i]);
}

// forEach
numbers.forEach((n,i)=>{
    console.log(".forEach()", i, n);
})

// filter
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('eventNumbers', evenNumbers);