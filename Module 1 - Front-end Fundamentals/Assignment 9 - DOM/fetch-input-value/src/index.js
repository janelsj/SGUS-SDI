//Task 1:
console.log(`{ username: ${document.getElementsByTagName("input")[0].value}, pwd: ${document.getElementsByTagName("input")[1].value} }`);

//Task 2:
function userAlert() {
    alert(`Please confirm your login details:
    username: ${document.getElementById("username").value} 
    password: ${document.getElementById("password").value}`);
}

document.querySelector("button").addEventListener("click", userAlert);

/*
Alternative method for Task 2:
******************************
document.querySelector("button").onclick = () => {
    alert(`Please confirm your login details:
     username: ${document.getElementById("username").value} 
     password: ${document.getElementById("password").value}`)
}
*/