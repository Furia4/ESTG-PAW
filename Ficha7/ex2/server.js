var express = require("express");
var app = express();

const {User} = require('./utilizador/utilizador');

var user = [];
user[0] = new User('12','isabel','feminino');
user[1] = new User('13','Silveira','feminino');

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
   res.render('html',{
       title: 'PAW',
       messageTitle: 'Jade',
       messageText: 'Exemplo ... '
   })
});
app.get("/alunos", function(req, res) {
    var finish=''
    for(var i=0;i<user.length;i++){
        finish += ' Numero: ' + user[i]._numero + ' Nome: ' + user[i]._nome + ' Genero: ' + user[i]._genero;
    }
    res.status(200).send(finish);
    res.end();
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("Listening on " + port);
});
