const fs = require('fs');
var arr = process.argv[2];

fs.readFile(arr, function(err,file) {
    if (err){
        console.log('No such file')
    } else {
        var str = file.toString().split('\n')
        var NumsOfLines = str.length - 1;
        console.log(NumsOfLines);
    }
});