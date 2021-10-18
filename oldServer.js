var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url === '/home') {
        var readableStream = fs.createReadStream('./index.html', { encoding: 'utf8' });
        res.writeHead(200, { 'content-type': 'text/html' });
        readableStream.pipe(res)

    } else if (req.url === '/about-us') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./aboutUs.html', { encoding: 'utf8' }).pipe(res)
    } else if (req.url === '/json') {
        res.writeHead(200, { 'content-type': 'application/json' });
        var jsonData = [{ name: 'jack', age: 23 }, { name: 'max', age: 25 }];
        res.end(JSON.stringify(jsonData));


    }
    else {
        res.end('this is not a valid route')
    }


})

server.listen(5000, () => {
    console.log('server listened successfully')

});