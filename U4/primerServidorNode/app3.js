const express = require('express');
const puerto = 3000;
const app = express();

app.use(express.static(__dirname+"/servidorEstatico"));
app.listen(puerto, ()=>{
    console.log("Servidor Funcionando Correctamente")
});