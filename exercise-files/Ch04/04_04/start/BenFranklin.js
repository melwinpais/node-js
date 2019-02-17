var Person = require('./lib/Person');

var ben = new Person("Ben Franklin");
var gw = new Person("George Washington");
var hc = new Person("Hilary Clinton");
var dt = new Person("Donal Trump");

function say(name, said) {
	console.log(`${name}: ${said}`);
}

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

gw.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

hc.on('say', function(said) {
	say(this.name, said);
});

dt.on('say', function(said) {
	say(this.name, said);
});

ben.emit('speak', "You may delay, but time will not.");
gw.emit('speak', "Its better to be alone than in bad company.");
hc.emit('say', "Open the border!")
dt.emit('say', "Build the wall!")
