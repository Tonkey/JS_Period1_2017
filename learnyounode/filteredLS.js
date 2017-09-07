// var fs = require('fs')
// var dir = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(dir, function(err, list) {
//     if(err){
//         return console.log(err)
//     }
//     var files = list.filter(function(fileNames){
//         if(fileNames.includes(ext)){
//             return fileNames
//         }
//     })
//     files.forEach(function(file){
//         console.log(file)
//     })
// })

//Learnyounode's solution
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function(err, files){
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})