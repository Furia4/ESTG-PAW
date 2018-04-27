const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './Form');



function requestLogger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

app.use(requestLogger);

app.get('/', (req, res) => {
    res.render('formulario',{});
    res.status(200);
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(8081, () => {
    console.log('Servidor ativo na porta: 8081');
});
