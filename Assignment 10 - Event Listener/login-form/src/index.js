/*
    When button is clicked, login() function will be called and raise an alert that display username and password entered.
    - If username is not an email, raise an alert that display "Username must be a valid email".
    - If password length is less than 8, raise an alert that display "Password must be at least 8 characters".
    - If both username and password has error, raise only one alert that display both error messages.

    Upon page load, the username input field should set focus. That means user can 
    immediately type something and the value reflect in the "username" input field.
    Ref: https://stackoverflow.com/questions/4331022/focus-input-box-on-load 

    Challenge: when "tab" key is entered at username input field, set focus to the
    next input field which is the password field.

    When <button> is placed within <form>, button click will cause <form> to perform a submission.
    You would realize that your function is not being called as expected. You need to prevent the 
    default behaviour of a form submission in order to let your function execute. See this link
    for more information - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    Example: https://www.w3schools.com/jsref/event_preventdefault.asp
*/

function login(evt){
    // Add code here
    evt.preventDefault();
    const username = document.querySelector("[placeholder='username']").value;
    const password = document.querySelector("[placeholder='password']").value;
    const user = {username, password};

    const emailRegex = /^([A-Za-z0-9-\'\.]+)@([A-Za-z0-9-\']+).([a-z]+)(.[a-z]+)?$/;
  
    if (!emailRegex.test(username) && password.length>7) {
        window.alert ("Username must be a valid email.");
    } else if (emailRegex.test(username) && password.length<8) {
        window.alert("Password must be at least 8 characters.");
    } else if (!emailRegex.test(username) && password.length<8) {
        window.alert("Username must be a valid email. \nPassword must be at least 8 characters.");
    } else if (emailRegex.test(username) && password.length>7) {
        window.alert (JSON.stringify(user));
    }
}

document.querySelector("button").addEventListener("click", login);

window.onload = document.querySelector("[placeholder='username']").focus();

//Challenge: Toggle Tab
const nodeList = document.querySelector("form").childNodes;
for (let i=0; i<nodeList.length; i++) {
    nodeList[i].addEventListener("keyup", function(e){
        if (e.keyCode===9) {
            e.preventDefault();
            nodeList[i].tabIndex = 0;
            nodeList[i-1].tabIndex = -1;
        };
    })
}

/*
References used:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
http://www.javascriptkit.com/javatutors/redev2.shtml
https://www.w3resource.com/javascript/form/email-validation.php
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
 */