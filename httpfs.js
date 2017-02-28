/* Serving a file over an HTTP server
*/
var http = require('http');
var fs = require('fs');

var args = process.argv.splice(2);
var fileToServe = fs.createReadStream(args[1]);

var server = http.createServer(function (req, res){
  fileToServe.pipe(res);
})
server.listen(args[0]);
