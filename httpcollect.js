/* Getting a better understanding of how to concatenate and format
* data streams in Node
*/
var http = require('http');
var bl = require('bl');
var args = process.argv;

http.get(args[2], callback).on('error', console.error);

function callback (response){
  // Pipe data stream to bufferlist, which will concatenate all data into a single object.
  response.pipe(bl(function(err, data){
    if(err){
      console.error;
    }
    else{
      console.log(data.toString().length);
      console.log(data.toString());
    }
  }));
}
