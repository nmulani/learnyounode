/* Figuring out how to handle asynchronous server requests in Javascript
*/
var http = require('http');
var bl = require('bl');

var count = 0;
var args = process.argv.slice(2);
var finishedResults = [];

args.forEach(function(element, index, arr) {
  http.get(element, function(response){
    
    // Pipe data stream to bufferlist, which will concatenate all data into a single object.
    response.pipe(bl(function(err, data){
      if (err){
          console.log(err);
      }
      else{

        /* In order for asynchronous data to be stored in the same order they were received,
           we must count callbacks, and use these counts as array indices. If we just push to
           the array, the indices will be wrong. */
        // finishedResults.push(data.toString());
        finishedResults[index] = data.toString();

        count++;
        if(count == args.length){
          finished();
        }
      }
    }))
  })
})

/* Once all the data is received, we can print it out in the
   proper sequence */
function finished (){
  finishedResults.forEach(function (element){
    console.log(element);
  })
}
