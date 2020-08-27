const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Agrego puerto de escucha por HEROKU
const port = process.env.PORT || 8080;

// Creo un middleware que me muestre siempre una página estática, sin importar a qué dirección me llamen
app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
 	
  	res.render('home', {
  		nombre: 'matias'
  	});

});

app.get('/about', (req, res) => {
 	
  	res.render('about');

});
 
app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${ port }...`);
})