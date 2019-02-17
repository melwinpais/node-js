var fs = require('fs');

fs.readFile('./chat.log', 'UTF-8', (err, chatlog) => {
  console.log(`File length is ${chatlog.length}`);
});

console.log('Reading file');
