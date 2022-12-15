const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const puerto = 3030;

const baseDeDatos = require("./public/baseDeDatos.js");

app.get("/",(req,res) =>{
    res.render("index.ejs");
});

app.post("/usuario",(req,res) =>{
    let usuario = {
        nombre: req.body.nombreUser,
        password: req.body.passwordUser,
        email: req.body.emailUser
    };

    baseDeDatos.validarUsuario(usuario.nombre).then((mensajeResultante)=>{
        res.render("usuarioCreado.ejs",{nombreUsuarioReg: usuario.nombre, 
                                      passwordUsuarioReg : usuario.password,
                                      emailUsuarioReg: usuario.email});
    }).catch((mensajeResultante)=>{
        res.render("usuarioRepetido.ejs", {mensajeError: mensajeResultante});
    });
});

app.listen(puerto,()=>{
    console.log("Entrando en el servidor por el puerto 3030")
})

