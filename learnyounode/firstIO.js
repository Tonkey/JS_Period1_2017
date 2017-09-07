/* var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var fileStr = file.toString();

var newLines = fileStr.split('\n');

console.log(newLines.length-1);
 */
//Learnyounode's solution
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length-1
console.log(lines);