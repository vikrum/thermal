var generator = require('generate-maze');
 
var maze = generator(9, 7);

var out = '';
   
for(i = 0; i < maze.length; i++) {
  var row = maze[i];
  ['top', 'middle', 'bottom'].forEach(function(e) {
    for(j = 0; j < row.length; j++) {
      var cell = row[j];
      if(e === 'middle') {
        if(cell['left']) {
          out += '|';
	}
	else {
          out += ' ';
	}
        out += '  ';
	if(j == row.length - 1) {
	  if(cell['right']) {
            out += '|';
	  }
	  else {
            out += ' ';
	  }
	}
      }
      else {
  if(i == maze.length - 1) {

  }
  else {

  }
        if(cell[e]) {
          out += '+--';
	}
	else {
          out += '+  ';
	}
	if(j == row.length - 1) {
          out += '+';
	}
      }
    } 
    out += '\n';
  });
}
console.log(out);
