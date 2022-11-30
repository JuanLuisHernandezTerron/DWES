const { application } = require('express');
var express = require('express');
var app = express();
app.get("/",function(req,res){
    res.send("Hola Mundo");
})

app.get("/:name",function(req,res){
    res.send("Hola "+req.params.name+"!");
})

app.listen(3000,function(){
    console.log("Aplicación de ejemplo escuchando en el puerto 3000")
})