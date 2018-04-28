var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/views/index.html');

    io.on('connection', function (socket) {
        console.log('user connect');

        setInterval(() => {
            console.log('Server is calling you');
        }, 2000);

        socket.on('disconnect', function () {
            console.log('user disconnected');
            next();
        });
        io.emit('page', 'hello user');
    });
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});
