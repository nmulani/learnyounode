/* Create a simple API for sending the time in either standard or unixtime
  format, as a JSON object */

var http = require('http');
var url = require('url');
var args = process.argv.splice(2);

var server = http.createServer(function(req, res){

  // Parse API URL path
  parsedUrl = url.parse(req.url, true);

  // If we are returning standard time as a JSON object
  if(parsedUrl.path.includes("parsetime")){
    obtainedDate = new Date(parsedUrl.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      hour: obtainedDate.getHours(),
      minute: obtainedDate.getMinutes(),
      second: obtainedDate.getSeconds()
    }));
  }

  // If we are returning the unix time as a JSON object
  else if(parsedUrl.path.includes("unixtime")){
    obtainedDate = new Date(parsedUrl.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      unixtime: obtainedDate.getTime()
    }));
  }
  else{
    // console.log("Unknown API endpoint");
    res.writeHead(404);
    res.end();
  }
})

server.listen(args[0]);
