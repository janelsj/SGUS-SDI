function raiseAlert(){
    window.alert("alert raised!");
}

function login(){
    const user = {
        username:document.querySelector("#username").value,
        pwd:document.getElementById("pwd").value
    }

    window.alert(JSON.stringify(user));
}