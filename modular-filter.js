const filter = require('./filter.js')
const path = require('path')
var folder = process.argv[2]
var extention = process.argv[3]

filter(folder, extention, function (err, list) {
  if (err) {
    return console.error(err);
  }
  list.forEach(function (file) {
      	var str = file.toString();
   
      if (path.extname(str) ==="."+extention) {
          console.log(str);
        }
      })
})


