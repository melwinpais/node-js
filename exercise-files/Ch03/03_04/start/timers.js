var timeout = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

function waitingForPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}%`);
}
var interval = setInterval(function () {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/timeout) * 100);
  waitingForPercent(percentWaited);
  // console.log(`Waiting since ${currentTime/1000} seconds`);
}, waitInterval);

setTimeout(function () {
  clearInterval(interval);
  console.log('\n\ndone!\n');
}, timeout);
