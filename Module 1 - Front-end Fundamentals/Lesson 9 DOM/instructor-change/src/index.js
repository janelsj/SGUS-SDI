/*
    1. Demonstrate changing the HTML content using innerHTML and innerText.
    <p>html content</p>
*/

document.querySelector("#p1").innerText = "<b>This is first paragraph</b>";
document.querySelector("#p2").innerHTML = "<b>This is second paragraph</b>";

/*
    2. Demonstrate .append() and .appendChild()

    Excerpt from MDN: Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
*/

const inputText = document.createElement("input");
document.querySelector("#div1").appendChild(inputText);

document.querySelector("#div1").append("Hello world!"); // Change this to .appendChild and "Hello world!" will not show. 

/*
    3. Add an <img>
*/

// Create <img> element
const image = document.createElement("img"); 

// Set properties of <img>
image.src = 'https://hbr.org/resources/images/article_assets/2020/05/May20_27_933445788_464881289-2.jpg';
image.width = 300;
image.style.display = 'block';
image.style.marginTop = 10;

// Append it
document.querySelector("#div1").append(image);