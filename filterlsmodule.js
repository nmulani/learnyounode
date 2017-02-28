var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, fileExtension, callback){
  fs.readdir(directoryName, function(err, data){
    if (err){
      return callback(err);
    }
    else {
      callback(null, data.filter(function (element){
        return (path.extname(element) === "."+fileExtension);
      }));
    }
  });
}
