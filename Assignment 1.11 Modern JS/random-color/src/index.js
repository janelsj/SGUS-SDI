/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <span> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/


const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

// Convert colors object array to colorArr strings array:
let colorArr = [];
colours.forEach(({color:c, value:v}) => colorArr.push(c));

//Change colours of target:
const target = document.getElementById("target");
let currColorIndex = 0;
const changeColor = () => {
	target.style.backgroundColor = colorArr[currColorIndex];
	(currColorIndex+1 < colorArr.length) ? currColorIndex++ : currColorIndex=0;
}

//------------------Code Challenge Start-----------------------------

//Create html element div to contain checkbox & label:
const checkbox = document.createElement("input");
const label = document.createElement("label");
const div = document.createElement("div");
checkbox.type = "checkbox";
checkbox.id = "checkbox";
label.htmlFor = "checkbox";
label.innerText = "Stop";
div.style.position = "absolute";
div.style.top = 150;
div.style.left = 525;
document.body.appendChild(div);
div.append(checkbox, label);

/*_________________________________________________________________________	
  ********** CODE BELOW IS FOR STOPPING AND RESTARTING COLOR ************
  ****** CHANGE DEPENDING ON STATUS OF CHECKBOX (CHECKED/UNCHECKED)*******
  _________________________________________________________________________*/
	// Toggle checkbox to start/stop color change:
		let start;
		const startStop = () => {
			if (!checkbox.checked) {
				start = setInterval(changeColor, 1000);
			} else if (checkbox.checked) {
				clearInterval(start);
			}
		};
		checkbox.addEventListener("click", startStop)
// ------------------Code Challenge End-----------------------------

		target.onload = startStop();

/*_____________________________________________________________________
	*************** END OF CODE FOR CHECKBOX STOPPING ***************
	******************* AND RESTARTING COLOR CHANGE *****************
  _____________________________________________________________________*/	


/*________ (I misread the question initially...so wrote the code below) __________
  Below is the code where the onclick event results in the final iteration through
  the rest of the color array, starting from the current color at the time it was 
  stopped at, until the last element of the array is reached. The color change will
  not repeat itself, as stated in the question.
  (Please comment out all the checkbox start/stop codes from lines 78 to 91
  before uncommenting the code below for it to run properly.)
*/

// const start = setInterval(changeColor, 1000);
// target.onload = start;
// //-------Code Challenge Start-----------
// 	checkbox.addEventListener("click", () => {
// 		clearInterval(start);
// 		setInterval(() => {
// 			target.style.backgroundColor = colorArr[currColorIndex];
// 			(currColorIndex < colorArr.length) ? currColorIndex++ : currColorIndex;
// 		}, 1000);
// 	})
// //-------Code Challenge End--------------
