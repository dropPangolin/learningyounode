var net = require('net');
var port = process.argv[2]

function numFill(number){
    return (number < 10) ? ('0'+number) : (''+number);
}

var server = net.createServer(function connectionListner(socket){
    var date = new Date();
    var data = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+numFill(date.getDate())+" "+date.getHours()+":"+numFill(date.getMinutes());
    socket.write(data);
    socket.write('\n');
    socket.end();
});
server.listen(port);