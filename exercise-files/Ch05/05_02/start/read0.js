var fs = require('fs');

var contents = fs.readFileSync('./lib/sayings.md', 'UTF-8');

console.log(contents);
