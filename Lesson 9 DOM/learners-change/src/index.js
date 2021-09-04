/*
    1. Demonstrate changing the HTML content using innerHTML and innerText.
    <p>html content</p>
*/

// Add code here
document.querySelector("#p1").innerText = "Hello World!"


/*
    2. Demonstrate .append() and .appendChild()

    Excerpt from MDN: Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
*/

// Add code here
const newText = document.createElement("p");
newText.innerHTML = "<h3>This is paragraph 3.</h3>";
document.querySelector("div").appendChild(newText);

/*
    3. Add an <img>
*/

// Create <img> element
const image1 = document.createElement("img");

// Set properties of <img>
image1.src="https://hbr.org/resources/images/article_assets/2020/05/May20_27_933445788_464881289-2.jpg";
image1.width = 250;
image1.style.display = "flex";
image1.style.marginTop = 20;

// Append it
document.querySelector("#p2").appendChild(image1);
document.querySelector("div").append("This is paragraph 4.");