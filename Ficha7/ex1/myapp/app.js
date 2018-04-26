'use strict';
const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set('views', './views');

let alunos = [
    {
        'numero': 1,
        'nome': 'isabel',
        'genero': 'feminino'
    }
];

app.get('/alunos', (req, res, next) => {
    res.send(alunos);
});

app.get('/hello', function (req, res) {
        res.render('hello',{
            title: 'PAW',
            messageTitle: 'Jade',
            messageText: 'Exemplo...'
        });
});


app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000!')
});