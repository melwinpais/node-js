var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var  realPerson = {
  name: '',
  sayings: []
};

rl.question("What is the name of a real person?", function(answer) {
  realPerson.name = answer;

  rl.setPrompt(`What would ${realPerson.name} would say?`);
  rl.prompt();
  rl.on('line', function(saying) {
    if(saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      realPerson.sayings.push(saying.trim());
      rl.setPrompt(`What else ${realPerson.name} would say? ('exit to leave')`);
      rl.prompt();
    }
  });
});

rl.on('close', function(){
  console.log('The person %s said %j', realPerson.name, realPerson.sayings);
  process.exit();
});
