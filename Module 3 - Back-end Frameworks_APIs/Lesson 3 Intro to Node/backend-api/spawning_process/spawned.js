const fs = require('fs');

process.on("message", (filename) => {
  console.log(`Filename received from parent: ${filename}`)
  fs.writeFileSync(filename, "write some output data");
  process.send("File created");
  process.exit();
});