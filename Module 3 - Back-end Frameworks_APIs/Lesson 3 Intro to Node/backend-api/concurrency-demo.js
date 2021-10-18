/*
  Demo from https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
  
  The setTimeout did not print after 500ms. Instead, it waited for while loop to break before printing it. 

  When the callback in setTimeout() intent to execute after 500ms, it can't do that because while(true) has taken up 
  the resources. It waits until while(true) break after 2 seconds then the callback in setTimeout is being executed.

  Instructor may use illustration to demonstrate the execution of this code.
*/

const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}