var fs = require('fs');

fs.readFile('./lib/sayings.md', 'UTF-8', (err, contents) => {
  if(err) throw err;
  console.log(contents);
});

console.log("Reading files....");
