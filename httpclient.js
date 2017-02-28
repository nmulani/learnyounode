/* Simple HTTP client in Node */
var http = require('http');
var args = process.argv;

http.get(args[2], callback).on('error', console.error);

function callback (response) {
  response.setEncoding('utf8');
  response.on('data', function (data){
    console.log(data);
  });
  response.on('error', console.error);
}
