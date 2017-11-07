var http = require('http');

var url = process.argv[2];
//var url = "http://oglaf.com/"

http.get(url, function(result){
    result.setEncoding('utf8');
    result.on('error', function(err){
        console.error(err)
    });
    result.on('data', function(chunk){
        console.log(chunk);
    })
});