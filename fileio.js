var fs = require('fs');

var fileObject = fs.readFileSync(process.argv[2]);
var fileStr = fileObject.toString();
var fileArray = fileStr.split('\n');

console.log(fileArray.length-1);
