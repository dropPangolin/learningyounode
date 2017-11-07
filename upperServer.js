var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);


var server = http.createServer(serverHandler);

server.listen(port);


function serverHandler(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    //fs.createReadStream(file).pipe(response);
    
    if (request.method != "POST"){
        return response.end('Not a POST request.\n');
    }
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
}