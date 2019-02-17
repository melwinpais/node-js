var questions = [
  "What is your name?",
  "What is your favorite hobby?",
  "What is your preffered programming language?",
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]} \n`);
  process.stdout.write(`   >\n`);
}

process.stdin.on('data', function(data) {
  process.stdout.write(`\n Your answer is ${data}`);
  answers.push(data.toString().trim());

  if(answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});



ask(0);

process.on('exit', function(){
  process.stdout.write(`${answers[1]} now ${answers[0]}, you can write ${answers[2]} later!`);
});
