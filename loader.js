var fs = require('fs');

var path = require('path');

function filterByExtension(dir, fileString, callback){
    fs.readdir(dir, function(err, arrayList){
        if (err){
            return callback(err);
        }
        arrayList = arrayList.filter(function(file){
            return path.extname(file)== "." + fileString;
        })
        callback(null,arrayList);
    })
}

module.exports = filterByExtension;