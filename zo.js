var converter = require('number-to-words');
var wordsearch = require('wordsearch');
var fs = require('fs');
const request = require('request');
const wordwrap = require('word-wrap');

function downloadPage(url) {
    return new Promise((resolve, reject) => {
        request(url, {headers: {'User-Agent': 'daily thermal printout vsnijjar@gmail.com'}}, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
		console.log(response);
            }
            resolve(body);
        });
    });
}


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

var upperLimit = 20;
function mathPractice() { // max width: 28
  console.log('╔══════════════════════════╗');
  console.log('║  Zoravar\'s Math Practice ║');
  console.log('╚══════════════════════════╝');
//  console.log('\n');
//  arithmetic('+');
  multTable();
}

function multTable() {
  for(var i = 0; i < 14; i++) {
    str = "7 x " + i + " = ___" + "    " + "8 x " + i + " = ___"; 
    console.log(str + '\n');
  }
}

function arithmetic(sign) {
  for(i = 0; i < 10; i ++) { 
    var x = getRandomInt(upperLimit) + '';
    var y = getRandomInt(upperLimit) + '';
    console.log('     ' + x.padStart(2) + ' ' +  sign + ' ' + y.padStart(2) + ' = ______');
    console.log('\n');
  }
} 

function todayIs() {
  console.log(centerStr('Today Is ' + new Date().toLocaleDateString('en-US', { weekday: 'long'})));
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dstr = new Date().toLocaleDateString('en-US', options)
  console.log(centerStr(dstr));
}

function numbersPlaces() {
  console.log('╔══════════════════════════╗');
  console.log('║           Numbers        ║');
  console.log('╚══════════════════════════╝');
  console.log();

  for(i = 0; i < 5; i++) {
    var onesPlace = getRandomInt(9);
    var exponent = getRandomInt(8);
    var number = onesPlace * Math.pow(10, exponent);
//    console.log(centerStr(number.toLocaleString()));
    console.log(centerStr('_'.repeat(number.toLocaleString().length + 4)));
    console.log(centerStr(converter.toWords(number))); 
    console.log();
  }
}

function wordSearch() {
  console.log('╔══════════════════════════╗');
  console.log('║       Word Search        ║');
  console.log('╚══════════════════════════╝');

  var words = ['tara', 'california', 'india', 'zoravar'];
  var search = wordsearch(words, thermalMaxWidth / 2, thermalMaxWidth / 2);
  search.grid.forEach(function(row) { console.log(row.join(' ')); } );

  console.log()
  console.log(centerStr('Words'));
  console.log(centerStr('-----'));
  for(i = 0; i < words.length; i++) {
    console.log(centerStr(words[i]));
  }
  console.log()
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
['Always say PLEASE and','THANK YOU to others.'],
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

function maze() {
  var contents = fs.readFileSync('./maze.txt', 'utf8');
  console.log(contents);
}

function dailyRules() { // max width: 28
  console.log('╔══════════════════════════╗');
  console.log('║       Daily Rules        ║');
  console.log('╚══════════════════════════╝');
  const dailyRule = "I will be nice, say please, and thank you.";
  console.log(wordwrap(dailyRule, {width: 27, indent: ' '}));
}

async function weather() {
  console.log('╔══════════════════════════╗');
  console.log('║         Weather          ║');
  console.log('╚══════════════════════════╝');
  var url = "https://api.weather.gov/gridpoints/MTR/85,142/forecast";
  const weather =  await downloadPage(url);
  const weatherjson = JSON.parse(weather);
  console.log(wordwrap(weatherjson.properties.periods[0].detailedForecast, {width: 26, indent: ' '}));
}

async function wordOfTheDay() {
  console.log('╔══════════════════════════╗');
  console.log('║     Word of The Day      ║');
  console.log('╚══════════════════════════╝');
  var url = "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  const word =  await downloadPage(url);
  const wordjson = JSON.parse(word);
  console.log('Word:');
  console.log(' ' + wordjson.word);
  console.log('Definition:');
  console.log(wordwrap(wordjson.definitions[0].text, {width: 26, indent: ' '}));
  console.log('Example:');
  console.log(wordwrap(wordjson.examples[0].text, {width: 26, indent: ' '}));
}

header();
todayIs();
dailyRules();
ruleOfLife();
weather().then( moo => {
  wordOfTheDay().then().catch(err => {});
}).catch(err => {});
//numbersPlaces();
//mathPractice();
//maze();
//wordSearch();
