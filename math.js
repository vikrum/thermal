var thermalMaxWidth = 28;
var upperLimit = 12;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function centerStr(str) {
  var len = str.length;
  var pad = 0;
  if(len < thermalMaxWidth) {
    pad = Math.floor((thermalMaxWidth - len) / 2); 
  }
  return ' '.repeat(pad) + str;
}

function header() { // max width: 28
  console.log('╔══════════════════════════╗');
  console.log('║  Zoravar\'s Math Practice ║');
  console.log('╚══════════════════════════╝');
  console.log('\n');
}

function footer() {
  console.log('═'.repeat(thermalMaxWidth));
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dstr = new Date().toLocaleDateString('en-US', options)
  console.log(centerStr(dstr));
}

function multiplication() {
  for(i = 0; i < 10; i ++) { 
    var x = getRandomInt(upperLimit) + '';
    var y = getRandomInt(upperLimit) + '';
    console.log('     ' + x.padStart(2) + '  x  ' + y.padStart(2) + ' = ______');
    console.log('\n');
  }
} 


header();
multiplication();
footer();
