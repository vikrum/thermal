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
['Never show weakness (Andrew)'],
['Always pay attention to','what you are doing (Papa)'],
['Always practice (Papa)'],
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
