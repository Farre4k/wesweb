var http = require('http');
var dt = require('./myfirstModule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime())
    res.end(" The first code! ");
}).listen(8080);