var converter = require('number-to-words');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var thermalMaxWidth = 28;

function centerStr(str) {
  var len = str.length;
  var pad = 0;
  if(len < thermalMaxWidth) {
    pad = Math.floor((thermalMaxWidth - len) / 2); 
  }
  return ' '.repeat(pad) + str;
}

function header() {
  console.log('╔══════════════════════════╗');
  console.log('║       Zoravar\'s Day      ║');
  console.log('╚══════════════════════════╝');
}

function todayIs() {
  console.log(centerStr('Today Is'));
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dstr = new Date().toLocaleDateString('en-US', options)
  console.log(centerStr(dstr));
}

function numbersPlaces() {
  console.log('╔══════════════════════════╗');
  console.log('║           Numbers        ║');
  console.log('╚══════════════════════════╝');
  console.log();

  var onesPlace = 6;
  for(i = 0; i < 4; i++) {
    var exponent = getRandomInt(8);
    var number = onesPlace * Math.pow(10, exponent);
//    console.log(centerStr(number.toLocaleString()));
    console.log(centerStr('_'.repeat(number.toLocaleString().length + 4)));
    console.log(centerStr(converter.toWords(number))); 
    console.log();
  }
}

function ruleOfLife() {
  console.log('╔══════════════════════════╗');
  console.log('║       Rule Of Life       ║');
  console.log('╚══════════════════════════╝');
  var rules = [
['Always be truthful to','yourself and others.'],
['Always ask why (Papa)'],
['Always be happy (Papa & Zo)'],
['Always eat slow and never','rush anything (Zo)'],
['Always have fun (Zo)'],
['Always be nice and say','nice things. Never say','mean things. (Zo)'],
['Always come up with new','ideas, inventions,','contraptions, and','machines (Zo)'],
['Always think of','others (Papa)'],
['Always be healthy. (Mama)'],
['Always do things properly','and your best with','finishing touches','(Mama & Papa)'],
['It is ok to make mistakes,','that is how we','succeed. (Mama & Papa)'],
['Always try new things (Papa)'],
['Always sit straight. (Mama)'],
['Always think for yourself','and use your own','thinking. (Papa)'],
['Always keep improving (Papa)'],
['Always pay attention to','what you are doing (Papa)'],
['Always practice (Papa)'],
['Always use the right tool', 'for the job (Papa)'],
['Improvise sometimes (Papa)'],
['Always keep trying hard','things until they get','easy (Papa)'],
];

  var item = rules[Math.floor(Math.random() * rules.length)];
  for(i = 0; i < item.length; i++) {
     console.log(centerStr(item[i]));
  }
}

header();
todayIs();
ruleOfLife();
numbersPlaces();
