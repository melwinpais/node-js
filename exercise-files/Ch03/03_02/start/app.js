console.log(process.argv);

function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[++index];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!greeting || !user) {
  console.log('Something went wrong!')
} else {
  console.log(`Welcome ${user}, ${greeting}`)
}


 // node app.js --user Mel --greeting "Have a great day!"
