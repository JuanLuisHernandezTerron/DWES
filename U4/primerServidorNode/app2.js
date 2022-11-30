const express = require('express');
const app = express();
const puertoServidor = 3000;
app.get("/",(req,res) => {
    res.send("Enhorabuena,estas conectado al servidor express")
})

app.get("/ejemploJson",(req,res)=>{
    res.send({
        nombre: "Juan Luis",
        edad: 21,
        aficiones:["F1","Furbo"]
    });
});

app.listen(puertoServidor,()=>{
    console.log("Servidor Escuchando por el puerto 3000")
});