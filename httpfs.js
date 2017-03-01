/* Serving a file over an HTTP server
*/
var http = require('http');
var fs = require('fs');

var args = process.argv.splice(2);

// Read our file into a stream
var fileToServe = fs.createReadStream(args[1]);

var server = http.createServer(function (req, res){

  // Pipe file stream to HTTP server response
  fileToServe.pipe(res);

})
server.listen(args[0]);
