var fs = require('fs');
var path = require('path');

var args = process.argv;

fs.readdir(args[2], matchingFiles);

function matchingFiles (err, fileList){
  fileList.forEach(function(element){
    if (path.extname(element) === ("." + args[3])){
      console.log(element);
    }
  });
}
