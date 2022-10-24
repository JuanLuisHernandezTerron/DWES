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
        setCookie(nombre,apellidos,codigoPostal,contrasena);
        alert(getCookie(prompt("Dime la cookie y te diré su valor")))
        alert();
    }
}

function setCookie(cnombre,cApellido, cPostal, cContrasena,fechaExp) {
    let dia = new Date();
    dia.setTime(dia.getTime() + fechaExp*60*60*24*1000);
    let expires = dia.toUTCString();
    document.cookie = "Usuario"+"="+cnombre +" "+cApellido+";"+"Expires"+"="+expires;
    document.cookie = "CodigoPostal"+"="+cPostal+";"+"Expires"+"="+expires;
    document.cookie = "Contraseña"+"="+cContrasena+";"+"Expires"+"="+expires;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";"); 
    for (let index = 0; index < ca.length; index++) { 
        let c = ca[index];   
        while(c.charAt(0) == " "){  
            c = c.substring(1); 
        }    

        if (c.indexOf(name) == 0){ 
            return c.substring(cname.lenght+1,c.length)
        }
    }
    return ""; 
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

/*
    Otra Forma de recorrer una cookie(Sirve para sacar un nombre si passa por parametro un valor)

    let cname = prompt("¿Que quieres consultar?")
    let cookieSeparator = document.cookie.split(";")
    let nombreValor = ""
    for (let index = 0; index < cookieSeparator.length; index++) {
        let separadorAUX = cookieSeparator[index].split("=")
        for (let index = 0; index < separadorAUX.length; index++) {
            if (separadorAUX[index].trim() === cname) {
                nombreValor = separadorAUX[index + 1]
                break;
            }
        }
    }

*/ 

