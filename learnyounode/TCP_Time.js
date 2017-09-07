// var net = require('net')
// var server = net.createServer(function (socket){
    
//     date = new Date();
//     var year = date.getFullYear()
//     var hour = date.getHours()
//     var minutes = date.getMinutes()
//     var month = ("0" + (date.getMonth() + 1)).slice(-2)
//     var date = ("0" + date.getDate()).slice(-2)
    
//     var data = year + '-' + month + '-' + date  + ' ' + hour + ':' + minutes + '\n'

//     socket.end(data)
// })
// server.listen(process.argv[2])

//learnyounode's solution
var net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))