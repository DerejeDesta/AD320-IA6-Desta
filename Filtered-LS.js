const fs = require('fs');
const path = require('path');
    var folder = process.argv[2]
    var extention = process.argv[3]
    fs.readdir(folder, function (err, list) {
      if (err){ 
      	console.error(err);
      }
      list.forEach(function (file) {
      	var str = file.toString();
      if (path.extname(str) ==="."+extention) {
          console.log(str);
        }
      })
    });

 
    