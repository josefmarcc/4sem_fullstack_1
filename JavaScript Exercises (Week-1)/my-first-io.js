const fs = require("fs");

var textfile = fs.readFileSync(process.argv[2]);
var textLineNum = textfile.toString().split("\n").length - 1;
console.log(textLineNum);
