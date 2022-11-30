const express = require('express');
const puerto = 8080;
const app = express();

app.use(express.static(__dirname + "/public"));
app.listen(puerto,()=>{
    console.log("Has entrado a la web con el puerto 8080");
})