// Use ES6 approach to import data.js
import hobby, {firstName, lastName, age} from "./data.js";
console.log(firstName, lastName, "is", age, "and enjoys", hobby);

import defaultExport from "./data.js";
console.log(defaultExport);

import { anotherPerson } from "./data.js";
console.log(anotherPerson.firstName, anotherPerson.lastName, "is", anotherPerson.age, "and enjoys", anotherPerson.hobby);
