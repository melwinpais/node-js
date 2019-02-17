var fs = require('fs');

if(fs.existsSync('lib')) {
  console.log('Directory exists');
} else {
  fs.mkdir('lib', (err) => {
    console.log(err ? err : 'Directory Created');
  });
}
