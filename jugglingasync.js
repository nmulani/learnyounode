/* Figuring out how to handle asynchronous server requests in Javascript
*/
var http = require('http');
var bl = require('bl');

var count = 0;
var args = process.argv.slice(2);
var finishedResults = [];

args.forEach(function(element, index, arr) {
  http.get(element, function(response){
    response.pipe(bl(function(err, data){
      if (err){
          console.log(err);
      }
      else{

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


function finished (){
  finishedResults.forEach(function (element){
    console.log(element);
  })
}
