var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2])
var textFile = process.argv[3];
/*
// 404 response
function send404Response(response){
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("Error 404: Page not found, but hey at least we tried");
    response.end();
}

//Handle a user Request
function onRequest(request, response){
    if(request.method == "GET" && request.url == "/"){
        response.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404Response(response);
    }
}
*/

var server = http.createServer(function giveData(request, response){
    //code here
    response.writeHead(200, {"Content-Type":"text/plain"})
    fs.createReadStream(textFile).pipe(response);
});
server.listen(port);