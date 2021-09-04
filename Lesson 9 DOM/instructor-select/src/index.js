/*
    1. Using some standard document.getElement*() functions.
*/

const h1 = document.getElementsByTagName("h1");
console.log('h1', h1); // Collection
console.log('h1[0]', h1[0]); // The actual h1 element


const p = document.getElementById("p1");
console.log('p',p); // Single HTML Element


const button = document.getElementsByClassName("btn");
console.log('button',button); // Collection



/*
    2. Using document.querySelector to return the first occurence.
*/ 

const firstPara = document.querySelector("p");
console.log('firstPara', firstPara);


const selectP2 = document.querySelector("#p2");
console.log('selectP2', selectP2);


const selectBtn = document.querySelector(".btn");
console.log('selectBtn', selectBtn);

