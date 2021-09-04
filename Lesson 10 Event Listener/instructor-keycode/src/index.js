function keyPressHandler(e){
    console.log(e); // Demonstrate and show the data in console log.
}

let p1 = false; // Check for second "p"
function registerKey(e){
    switch(e.key){
        case "a":
            document.querySelector("#a1").style.backgroundColor = "green";
            break;

        case "p":
            if(p1){
                document.querySelector("#p2").style.backgroundColor = "green";    
            }
            document.querySelector("#p1").style.backgroundColor = "green";
            p1 = true;
            break;

        case "l":
            document.querySelector("#l1").style.backgroundColor = "green";
            break;

        case "e":
            document.querySelector("#e1").style.backgroundColor = "green";
            break;

    }
}