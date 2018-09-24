const http = require('http');
const os = require('os');

console.log('My k web server starting on ' + new Date());

var handler = function(request, response) {
    console.log('Received request from ' + request.connection.remoteAddress);

    response.writeHead(200);
    response.end('O, Nice work! You succeeded in hitting ' + os.hostname
      + ' on ' + new Date() + '\n');   
}

var www = http.createServer(handler);

var port = 8080;
www.listen(port);

console.log('The value of DB_URL is:', process.env.DB_URL);

console.log('My k web server listening on port ' + port);