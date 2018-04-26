var http = require('http');
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

http.createServer(function (request, response) {

    console.log('request ', request.url);

    var filePath = '.' + request.url;


    if (filePath == './') {
        filePath = './form.html';
    }


    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (file) {
        	body += file;

        });
        
        request.on('end', function () {
        	var post = qs.parse(body);
                // use post['blah'], etc.
                console.log(post);

                response.end(JSON.stringify(post));
        });

    }

    if(request.url == '/form'){
        console.log('Entrou em outra pagina');
        response.end();
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

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8000);
console.log('Server running at http://127.0.0.1:8125/');
