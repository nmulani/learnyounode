var filtermodule = require('./filterlsmodule.js');
var args = process.argv;

filtermodule(args[2], args[3], callback);

function callback(err, data){
  if(err){
    console.log("Oops, there was an error!");
  }
  else{
    data.forEach(function (element){
      console.log(element);
    });
  }
}
