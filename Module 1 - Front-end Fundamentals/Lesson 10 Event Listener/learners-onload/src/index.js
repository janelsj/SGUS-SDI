// Add code here
window.addEventListener("load", () => alert("Hi 1")); // Precedence 2

window.addEventListener("load", function(event){        //Precedence 2 (according to position in JS code --> runs top to bottom)
    alert("Hi 2");
});

window.onload = () => alert("Hi 3"); // Precedence 1: Loads first in window (overrides hello() in html)

function hi() {              //Precedence 1 (window.onload is the same attribute as <body onload =""></body>, so will override it when JS runs.
    window.alert("Hi 4");
}
