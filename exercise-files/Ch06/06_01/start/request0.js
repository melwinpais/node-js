var https = require('https');
var fs = require('fs');

var options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Donald_Trump',
  method: 'GET'
};

var req = https.request(options, (res) => {

  var responseBody = '';

  console.log('Response from server has started');
  console.log(`Server status ${res.statusCode}`);
  console.log('Response headers %j', res.headers);

  res.setEncoding('UTF-8');

  res.once('data', (chunk) => {
    console.log('\n\n');
    console.log(chunk);
    console.log('\n\n');
  })

  res.on('data', (chunk) => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  })

  res.on('end', () => {
    fs.writeFile('index.html', responseBody, (err) => {
      if(err) throw err;
      console.log('File Downloaded');
    })
  })
})

req.on('error', (err) => {
  console.log(`problem with request: ${err.message}`);
})

req.end();
