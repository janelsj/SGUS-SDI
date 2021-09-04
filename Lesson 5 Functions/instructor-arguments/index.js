const firstName = "Larry";
const lastName = "Tan";

// 1. Demo argument
// 2. Demo default value
// 3. Demo handle undefined
function printMyName(firstName, lastName = "") {
  console.log(firstName, lastName);
}

printMyName(firstName);
