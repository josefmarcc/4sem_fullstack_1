var fs = require("fs");
var fileToRead = process.argv[2];

function newLineNr() {
  fs.readFile(fileToRead, function (err, contents) {
    var lines = contents.toString().split("\n").length - 1;
    console.log(lines);
  });
}

newLineNr();
