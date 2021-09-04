window.addEventListener('keypress', function(evt) {
    console.log(evt);

    // 1. Implement a switch case to turn "LEMON" into a blue background when detected respective key code.
    switch(evt.key){
        case "l":
        case "L":
            document.querySelector("#l").style.backgroundColor = "yellow";
            document.querySelector("#l").style.fontWeight = "bolder";
            document.querySelector("#l").style.fontSize = 30;
            document.querySelector("#l").style.fontStyle = "italic";
            break;

        case "e":
        case "E":
            document.querySelector("#e").style.backgroundColor = "yellow";
            document.querySelector("#e").style.fontWeight = "bolder";
            document.querySelector("#e").style.fontSize = 30;
            document.querySelector("#e").style.fontStyle = "italic";
            break;

        case "m":
        case "M":
            document.querySelector("#m").style.backgroundColor = "yellow";
            document.querySelector("#m").style.fontWeight = "bolder";
            document.querySelector("#m").style.fontSize = 30;
            document.querySelector("#m").style.fontStyle = "italic";
            break;

        case "o":
        case "O":
            document.querySelector("#o").style.backgroundColor = "yellow";
            document.querySelector("#o").style.fontWeight = "bolder";
            document.querySelector("#o").style.fontSize = 30;
            document.querySelector("#o").style.fontStyle = "italic";
            break;

        case "n":
        case "N":
            document.querySelector("#n").style.backgroundColor = "yellow";
            document.querySelector("#n").style.fontWeight = "bolder";
            document.querySelector("#n").style.fontSize = 30;
            document.querySelector("#n").style.fontStyle = "italic";
            break;
    }

});