var http = require("http");
const server = http.createServer(function(req, res){
    res.writeHead(200,{"content-type": "text/plain"})
    //Enviamos una cadena, en este caso es Hola 
    res.end("Hola Mundo!")
});
//Puerto donde lo va a escuchar
server.listen(8080);
console.log("Ejecutandose en el puerto 8000");