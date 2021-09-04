document.querySelector("#road").width = 1200;

let car = document.querySelector("#car");
car.style.position = "absolute";
car.style.top = 400;
car.style.left = 600;

/*
    You only require to add code within "addEventListener" function. 
    When "a" key is pressed, move the car to the left 10px. When "d" key is pressed, move the car to the right 10px.
    Hint: The position of the car element is "absolute".
*/
window.addEventListener('keypress', function(evt){
    console.log(evt);
    // Add code here    
    let position = parseInt(car.style.left, 10);

    function moveLeft() {
        if (evt.key==="a") {
            position -= 10;
            return car.style.left = position;
        }
    }
    
    function moveRight() {
        if (evt.key==="d") {
            position += 10;
            return car.style.left = position;
        }
    }

    if (position >= 20 && position <= 940) {
        moveLeft();
        moveRight();
    } else if (position < 20) {
        moveRight();
    } else if (position > 940){
        moveLeft();
    }
})