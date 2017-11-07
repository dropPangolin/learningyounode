/*
  Write an HTTP server that serves JSON data when it receives a GET request  
  to the path '/api/parsetime'. Expect the request to contain a query string  
  with a key 'iso' and an ISO-format time as the value.  
*/

var http = require('http');
var port = process.argv[2];
var u = require('url');


var JSONpath = '/api/parsetime';
var UNIXpath = '/api/unixtime';

var server = http.createServer(handleRequests);

server.listen(port)

function handleRequests(request, response){
    if (request.method ==="GET"){
        var URLobj = u.parse(request.url, true, true);
        if (URLobj.pathname === "/api/parsetime"){
            normalTimeSendOff(URLobj.query.iso, response);            
        }
        else if(URLobj.pathname === "/api/unixtime"){
            unixTimeSendOff(URLobj.query.iso, response);

        }
        else{
            return response.end("Invalid path provided");
        }
    }
    
    else{
        return response.end("It wasn't a GET Request. \n");
    }
}

function normalTimeSendOff(queryString, response){
    var JObj = cuttingHairs(queryString);
    response.writeHead(200, {'Content-Type':'application/json'})
    response.write(JSON.stringify(JObj));
    response.end();
}

function unixTimeSendOff(queryString, response){
    var time = Date.parse(queryString);
    var JSONObj = {"unixtime":time};
    response.writeHead(200, {'Content-Type':'application/json'});
    response.write(JSON.stringify(JSONObj));
    response.end();
    
}



function cuttingHairs(queryString){
    var details = queryString.split("T");
    var answers = details[1].split("\:");
    answers[2]=answers[2].split("\.")[0];
    var goodTime = {"hour":Number(answers[0]), "minute":Number(answers[1]), "second":Number(answers[2])}
    return goodTime;
}