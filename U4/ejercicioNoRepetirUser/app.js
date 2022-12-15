const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const puerto = 8080;
var arrayUsuario = [];

const bbdd = require("./public/BBDD.js");
// app.use("/assets/js/");

app.get("/",(req,res) =>{
    res.render("formulario.ejs");
});

app.post("/newUser",(req,res)=>{
    let usuario= {
        dni:req.body.dniUser,
        nombre:req.body.nombreUser,
        apellidos:req.body.apellidosUser,
        contrasena:req.body.contrasenaUser,
        email:req.body.emaiilUser,
        telefono:req.body.telefonoUser
    };
    arrayUsuario.push(usuario);

    bbdd.validarUser(usuario.dni,arrayUsuario).then((mensajeResuelto)=>{
        res.render("userIngresado.ejs",{dniUser:usuario.dni,
                                        userNombre:usuario.nombre,
                                        userApellidos:usuario.apellidos,
                                        userContrasena:usuario.contrasena,
                                        userEmail:usuario.email,
                                        userTelefono:usuario.telefono});
    }).catch((mensajeResuelto)=>{
        res.render("userRepetido.ejs"),{mensajeError:mensajeResuelto}
    });
});

app.listen(puerto, ()=>{
    console.log("Entrando en la pagina web con el puerto 8080")
})