/*
    1. Using some standard document.getElement*() functions.
*/
const paragraph = document.getElementById("p1");
console.log("paragraph", paragraph);

const classname = document.getElementsByClassName("btn");
console.log("button", classname);

const paragraphs = document.getElementsByTagName("p");
console.log("paragraphs", paragraphs);
console.log("paragraph 1", paragraphs[0]); //returns only the FIRST TAG NAME matching this, since this method returns ALL matching tag Names into an array of HTML Collection.

/*
    2. Using document.querySelector to return the first occurence.
*/ 
const para = document.querySelector("#p2");     // ID name
console.log("p2", para);

const paras = document.querySelectorAll("p"); //tagName
console.log("all paragraphs", paras);

const selectButton = document.querySelector(".btn"); // Class Name
console.log("button", selectButton);