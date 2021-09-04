function cook(string1, string2) {
    if ((string1 === "cheese" && string2 === "rice")||(string1 === "rice" && string2 === "cheese")) {
        console.log("baked rice");
    } else if ((string1 === "cheese" && string2 === "pasta")||(string1 === "pasta" && string2 === "cheese")) {
        console.log("baked pasta");
    } else if ((string1 === "egg" && string2 === "rice")||(string1 === "rice" && string2 === "egg")) {
        console.log("egg fried rice");
    }
}

cook("cheese", "rice");
cook("rice", "cheese");
cook("cheese", "pasta");
cook("pasta", "cheese");
cook("egg", "rice");
cook("rice", "egg");