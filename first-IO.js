var fs = require("fs");
var arr = process.argv[2];
var str = fs.readFileSync(arr).toString().split("\n");
var NumOfLines = str.length - 1;
console.log(NumOfLines);