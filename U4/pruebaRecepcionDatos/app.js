const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const puerto = 3030;
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/animales",(req,res)=>{
    let animalFavorito = req.body.variableEnviada;
    res.render("tuanimal.ejs",{animalFavorito: animalFavorito})
});

app.listen(puerto,()=>{
    console.log("Entrando en el servidor con el puerto 3030");
})