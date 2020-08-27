const http = require('http');

// Creo el servidor
http.createServer((request, response) => {

	response.writeHead(200, { 'Content-Type': 'application/json' });
	
	let salida = {
		nombre: 'Matias',
		apellido: 'Falcone',
		edad: 32,
	}

	response.write(JSON.stringify(salida));
	response.end();

})
.listen(8080);

console.log('Escuchando en el puerto 8080...');