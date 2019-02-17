var fs = require('fs');

var stream = fs.createReadStream('./chat.log', 'UTF-8');

var data = '';

stream.once('data', () => {
  console.log('\n\n\n');
  console.log('Started reading file');
  console.log('\n\n\n');
});

stream.on('data', (chunk) => {
  process.stdout.write(`  chunk: ${chunk.length} |`);
  data += chunk;
});

stream.on('end', () => {
  console.log('\n\n\n');
  console.log(`Finished reading with size ${data.length}`);
  console.log('\n\n\n');
});
