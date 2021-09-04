/*
    Right-click on index.html on the root directory and select "Open with Live Server" to launch a website.
*/

// 1. Use of createElement()

const firstH1Element = document.createElement("h1"); // Create a <h1>
document.body.append(firstH1Element); // Append it to <body>
firstH1Element.innerText = "DOM Manipulation 123"; // Add <h1>inner text</h1>

// 2. Use of innerHTML

//document.body.innerHTML = "<h1>DOM Manipulation ABC</h1>";