var fs = require('fs');


fs.readFile(process.argv[2], 'utf8', function(error, data){
  fileArray = data.split("\n");
  console.log(fileArray.length-1);
})
