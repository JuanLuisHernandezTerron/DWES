const express = require('express');
const app = express();
const puerto = 3030;

app.set("view engine", "ejs");

app.get("/:nombre/:edad",(req,res)=>{
    let nombreUser = req.params.nombre;
    let edad = req.params.edad;
    let cuantas = nombreUser.length;
    (edad >=18) ? res.render("cuantasLetrasJL.ejs",{nombreUser:nombreUser,cuantas:cuantas,edad:",eres mayor de edad"}) : res.render("cuantasLetrasJL.ejs",{nombreUser:nombreUser,cuantas:cuantas,edad:",eres menor de edad"});
})

app.listen(puerto,()=>{
    console.log("Entrando en el servidor con el puerto 3030")
})