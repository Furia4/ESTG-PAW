var http = require('http');

var qs = require('querystring');

var fs = require('fs');

var path = require('path');



http.createServer(function (request, response) {

    console.log('request url', request.url);

    console.log('metodo', request.method);

    console.log('headers',request.headers) ;



// let p = request.qs;

// if (request.method == "GET") {

// var url = require('url');

// var url_parts = url.parse(request.url, true);

// var query = url_parts.query;

// console.log("Query is ", query);

// // response.writeHead(200, { 'Content-Type': JSON });

// response.end(JSON.stringify(query) );

// }



    if (request.method == 'POST') {

        console.log("Form chamado");


        var body = '';

        request.on('data', function (chunk) {
            body += chunk;
        });

        request.on('end', function () {

                var data = qs.parse(body);

                console.log(data);

                response.writeHead(200);

                response.end(JSON.stringify(data));
        });


    }

    var filePath = '.' + request.url;

    if (filePath == './') {

        filePath = './form.html';

    }



    var extname = String(path.extname(filePath)).toLowerCase();

    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml'
    };



    var contentType = mimeTypes[extname] || 'application/octet-stream';



    fs.readFile(filePath, function (error, content) {

            if (error) {
                if (error.code == 'ENOENT') {
                    fs.readFile('./404.html', function (error, content) {

                            response.writeHead(200, {'Content-Type': contentType });

                            response.end(content, 'utf-8');
                    });

                }

                else {

                    response.writeHead(500);

                    response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');

                    response.end();

                }

            }

            else {

                response.writeHead(200, {'Content-Type': contentType });

                response.end(content, 'utf-8');

            }

        });
}).listen(8125);

console.log('Server running at http://127.0.0.1:8125/');