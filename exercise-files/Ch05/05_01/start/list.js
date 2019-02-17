var fs = require('fs');

fs.readdir('./lib', function(err, files) {
  if(err) {
    throw err;
  }

  console.log('Files are');
  console.log(files);
 });

console.log("Reading files....");
