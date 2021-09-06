// 1. Cannot import
import {name} from './name.js';
console.log(name);

// 2. Change name.js to name.mjs (this works but not the common practice)

// 3. Use `npm init`.
// Add {"type":"module"} and {"script":{"start":"node index.js"}}
// Run the application
