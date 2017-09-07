// var fs = require('fs');

// var contents = fs.readFile(process.argv[2], function(err, data){
//     if(err){
//         //do some error handling
//     } else {
//         var lines = data.toString().split('\n').length - 1
//         console.log(lines)
//     }
// })

//Learnyounode's solution
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function(err, contents) {
    if(err) {
        return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})