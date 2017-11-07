var url = require('url');
var urlVal = "/api/parsetime?iso=2013-08-10T12:10:15.474Z ";
var result = url.parse(urlVal, true, true);

var data = result.query.iso


console.log(cuttingHairs(data));

console.log(unixTimeSendOff(data));



function cuttingHairs(queryString){
    var details = queryString.split("T");
    var answers = details[1].split("\:");
    answers[2]=answers[2].split("\.")[0];
    var goodTime = {"hour":answers[0], "minute":answers[1], "second":answers[2]}
    return goodTime;
}

function unixTimeSendOff(queryString){
    return Date.parse(queryString);
}