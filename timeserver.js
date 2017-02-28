/* Send time over a TCP server
*/
var net = require('net');
var args = process.argv.slice(2);

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.end(currentDate());
})

function zeroFill (num){
  return (num < 10 ? '0' : '') + num;
}


function currentDate(){
  currentDate = new Date();
  // proper date format
  // slightly more elegant way of formatting date
  return currentdate.getFullYear() + '-' +
    zeroFill(currentdate.getMonth() + 1) + '-' +
    zeroFill(currentDate.getDate()) + ' ' +
    zeroFill(currentDate.getHours()) + ':' +
    zeroFill(currentDate.getMinutes());
  // return currentDate.getFullYear()+'-'+('0'+(currentDate.getMonth()+1)).slice(-2)+'-'+('0'+currentDate.getDate()).slice(-2)+' '+('0'+currentDate.getHours()).slice(-2)+':'+('0'+currentDate.getMinutes()).slice(-2)+'\n';
}


server.listen(args[0]);
