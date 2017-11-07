function spitHTMLData(url, arrayValue){
    var http = require('http');
    
    var data = ""
    
    http.get(url, function(result){
        result.setEncoding('utf8');
        result.on('error', function(err){
            console.error(err);
        });
        result.on('data',function(chunk){
            data += chunk;
            
        });
        result.on('end', function finishGETRequest(){
            outPutsReceived++;
            results[arrayValue] = data;
            if(outPutsReceived == 3 ){
                for(var i = 0; i < 3; i++){
                    console.log(results[i]);
                }
            }
        }); 
    })
}

var results = [];
var outPutsReceived = 0;
var URLArray = process.argv.slice(2);

for (var i = 0; i < URLArray.length; i++){
    spitHTMLData(URLArray[i],i)
}


/*
Collect from 3 websites and console log them in ORDER the collections STARTED
*/
