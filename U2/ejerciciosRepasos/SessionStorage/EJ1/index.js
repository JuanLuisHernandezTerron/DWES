const $FORM = document.getElementById("formulario");
const $NOMBRE = document.getElementById("nombre");
const $APELLIDOS = document.getElementById("apellidos");
const $HORA = document.getElementById("hora");
const $FECHA = document.getElementById("fecha");
const $CODIGOPOSTAL = document.getElementById("codigoPostal");
const $CONTRASEÑA = document.getElementById("contraseña");


function hadleSubmit(e) {
    e.preventDefault();
    debugger
    const nombre = $NOMBRE.value;
    const apellidos = $APELLIDOS.value;
    const hora = $HORA.value;
    const fecha = $FECHA.value;
    const codigoPostal = $CODIGOPOSTAL.value;
    const contrasena = $CONTRASEÑA.value;

    var es_Validado = new Boolean(true);

    if(nombre === false || isValidNombre(nombre) === false){
        alert("Has introducido mal el nombre")
        es_Validado = false;
    }

    if(apellidos === false || isValidApellidos(apellidos) === false){
        alert("Has introducido mal los apellidos")
        es_Validado = false;
    }

    if(hora === false || isValidHora(hora) === false){
        alert("Has introducido mal la hora")
        es_Validado = false;
    }

    if(fecha === false || isValidFecha(fecha) === false){
        alert("Has introducido mal la fecha")
        es_Validado = false;
    }

    if(codigoPostal === false || isValidCodigo(codigoPostal) === false){
        alert("Has introducido mal el codigo postal")
        es_Validado = false;
    }

    if(contrasena === false || isValidContrasena(contrasena) === false){
        alert("Has introducido mal la contraseña")
        es_Validado = false;
    }

    if(es_Validado){
        var NewUser = {NombreUsu : nombre, ApellidosUsu: apellidos, HoraUsu:hora, FechaUsu: fecha, CodigoPostalUsu: codigoPostal, ContrasenaUSU: contrasena};
        console.log(NewUser);
        var UserNew = JSON.stringify(NewUser);
        console.log(UserNew);
        localStorage.setItem("Nombre", JSON.stringify(NewUser.NombreUsu));
        localStorage.setItem("Apellidos", JSON.stringify(NewUser.ApellidosUsu));
        localStorage.setItem("Hora", JSON.stringify(NewUser.HoraUsu));
        localStorage.setItem("FechaUsu", JSON.stringify(NewUser.FechaUsu));
        localStorage.setItem("CodigoPostal", JSON.stringify(NewUser.CodigoPostalUsu));
        localStorage.setItem("Contraseña", JSON.stringify(NewUser.ContrasenaUSU));
    }
    alert(devolverDato());
}

function devolverDato() {
    return JSON.parse(localStorage.getItem(prompt("Que dato quieres sacar?"))) //Con sessionStorage es igual;
}

function isValidNombre(nombre) {
    const validacion = /^[A-Z][a-z]+|^([A-Z][a-z]+\s[a-z]+)$/
    return validacion.test(nombre);
}

function isValidApellidos(apellidos) {
    const validacion = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
    return validacion.test(apellidos);
}

function isValidHora(hora) {
    const validacion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/
    return validacion.test(hora);
}

function isValidFecha(fecha) {
    const validacion = /^[0-2][0-9]\/[0-12]+\/\d{4}$/
    return validacion.test(fecha);
}

function isValidCodigo(codigoPostal) {
    const validacion = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/
    return validacion.test(codigoPostal);
}

function isValidContrasena(contrasena) {
    const validacion = /^\w{8}$|^\w{10}$/
    return validacion.test(contrasena);
}

$FORM.addEventListener('submit',hadleSubmit)

