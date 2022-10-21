const $form = document.getElementById("formulario");
const $dni = document.getElementById("dni");
const $nombre = document.getElementById("nombre");
const $fechaNacimiento = document.getElementById("fechaNacimiento");
const $email = document.getElementById("email");
const $webPersonal = document.getElementById("webpersonal");
const $contraseña = document.getElementById("contraseña");

function handleSubmit(e){
    e.preventDefault();
    const dni = $dni.value;
    const nombre = $nombre.value;
    const fechaNacimiento = $fechaNacimiento.value;
    const email = $email.value;
    const webPersonal = $webPersonal.value;
    const contraseña = $contraseña.value;
    var es_validadio = new Boolean(true);

    debugger
    if(dni == false || isValidDNI(dni) == false){
        alert("Has introducido mal el dni, recuerda que el formato es (99.999.999-X)");
        es_validadio = false;
    }

    if(nombre == false || isValidNombre(nombre) == false){
        alert("Has introducido mal el nombre, recuerda que el formato del nombre es Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos");
        es_validadio = false;
    }

    if(fechaNacimiento == false || isValidFechaNacimiento(fechaNacimiento) == null){
        alert("Has introducido mal la fecha de nacimiento, recuerda que el formato de la fecha es el siguiente: dd/mm/yyyy");
        es_validadio = false;
    }

    if(email == false || isValidEmail(email) == false){
        alert("Has introducido mal el email, recuerda que el formato del email es: xxxxxx@yyyyy.zzz");
        es_validadio = false;
    }

    if(webPersonal == false || isValidWebPersonal(webPersonal)==false){
        alert("Has introducido mal el web personal, recuerda que el formato de la web personal es http://www.xxxx.yyy");
        es_validadio = false;
    }

    if(contraseña == false || isValidContraseña(contraseña) == false) {
        alert("Has introducido mal el contraseña, recuerda que tiene que tener entre 8 y 10 carácteres");
        es_validadio = false;
    }

    if(es_validadio){
        var newUser = {dni : dni, nombre : nombre, fechaDeNacimiento : fechaNacimiento, email : email, webPersonal : webPersonal,contraseña : contraseña};
        console.log(newUser);
        var usuarioRegistrado = JSON.stringify(newUser);
        console.log(usuarioRegistrado);

        

        sessionStorage.setItem("dni",dni);
        sessionStorage.setItem("nombre",nombre);
        sessionStorage.setItem("fechaNacimiento",fechaNacimiento);
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("webpersonal",webPersonal);
        sessionStorage.setItem("contraseña",contraseña);
    }
}

function recargarClick(){
    if(sessionStorage.dni != undefined && sessionStorage.nombre != undefined || sessionStorage.fechaNacimiento != undefined || sessionStorage.email != undefined || sessionStorage.webPersonal != undefined || sessionStorage.contraseña != undefined) {
        document.getElementById("dni").value = sessionStorage.getItem("dni");
        document.getElementById("nombre").value = sessionStorage.getItem("nombre");
        document.getElementById("fechaNacimiento").value = sessionStorage.getItem("fechaNacimiento");
        document.getElementById("email").value = sessionStorage.getItem("email");
        document.getElementById("webpersonal").value = sessionStorage.getItem("webpersonal");
        document.getElementById("contraseña").value = sessionStorage.getItem("contraseña");
    } else {
        alert("Has introduido mal los datos");
    }
}

function isValidContraseña(contraseña){
    const validacion = /^\w{8}$|^\w{10}$/;
    return validacion.test(contraseña);
}

function isValidWebPersonal(webPersonal) {
    const validacion = /^[htp]{4}\:\/\/\w{3}\.\w{4}\.\w{3}$/
    return validacion.test(webPersonal);
}

function isValidEmail(email){
    const validacion = /^[a-zA-Z]{6}\@[a-zA-Z]{5}\.[a-zA-Z]{3}$/;
    return validacion.test(email);
}

function isValidFechaNacimiento(fechaNacimiento){
    const validacion = /^[0-2][0-9]\/[0-12]+\/\d{4}$/;
    return validacion.test(fechaNacimiento);
}

function isValidNombre(nombre){
    const validacion = /^[a-zA-Z]+\s[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    return validacion.test(nombre);
}

function isValidDNI(dni) {
    const validacion = /^[0-9]{8}[A-Z]$/;
    return validacion.test(dni);
}

$form.addEventListener('submit',handleSubmit);