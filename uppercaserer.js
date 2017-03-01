/* HTTP server takes any data passed to it, transforms it to uppercase
  and then pipes it out as a response */

var http = require('http');
var map = require('through2-map');

var args = process.argv.splice(2);

var server = http.createServer(function(req, res){

  // If we receive a POST request
  if(req.method === "POST"){
    // Convert received data to uppercase and send to HTTP response
    req.pipe(map(function(chunk){
      return chunk.toString().toUpperCase()
    })).pipe(res);
  }
  else {
    // Let user know if we need a POST request
    return res.end('Send me a POST\n');
  }
})

server.listen(args[0]);
