const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', function(request, response) {
    response.render('home', {
        appBar: 'Home - DomingoMG',
        nombre: 'Domingo',
    });
});

app.get('/about', function(request, response) {
    response.render('about', {
        appBar: 'About - DomingoMG',
    });
});

app.get('/api/v1/usuario', function(request, response) {
    let salida = {
        nombre: 'Lisbety',
        edad: 18,
        url: request.url
    }

    response.send(JSON.stringify(salida));
});

app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
});