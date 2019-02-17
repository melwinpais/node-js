var fs = require('fs');

fs.rmdir('./assets', (err) => {
  if(err) throw err;
  console.log(`Assets directory removed`);
})

fs.rmdir('./logs', (err) => {
  if(err) throw err;
  console.log(`Logs directory removed`);
})
