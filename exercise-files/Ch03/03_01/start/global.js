var hello="Hello World from node.js!"

var justNode=hello.slice(17);


console.log(`Rock world from ${justNode}`);
console.log('Hello ${justNode}');

console.log(`Dir name ${__dirname}`);
console.log(`File name ${__filename}`);


var path = require("path");

console.log(`The file name is ${path.basename(__filename)}`)
console.log(`The dir name is ${path.basename(__dirname)}`)
