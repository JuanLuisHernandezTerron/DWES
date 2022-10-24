const $Form = document.getElementById("formulario");
const $nombreApellidos = document.getElementById("nombre");
const $fecha = document.getElementById("fechaCita");
const $Dni = document.getElementById("dni");
const $Hora = document.getElementById("hora");
const $mediConfirmacion = document.getElementById("inputConfirmacion");
const email = document.getElementById("checkbox1");
const telefono = document.getElementById("checkbox2");


function hadleSubmit(e) {
    e.preventDefault();

    const nombreApellidos = $nombreApellidos.value;
    const fecha = $fecha.value;
    const dni = $Dni.value;
    const hora = $Hora.value;
    const mediaConfirmacion = $mediConfirmacion.value;

    var es_Validado = new Boolean(true);

    

    if (nombreApellidos == false || isValidNombreApellidos(nombreApellidos) == false) {
        alert("Has introducido mal el nombre")
        es_Validado = false;
    }

    if (fecha == false || isValidFecha(fecha) == false) {
        alert("Has introducido mal la fecha")
        es_Validado = false;
    }

    if (dni == false || isValidDni(dni) == false) {
        alert("Has introducido mal el dni")
        es_Validado = false;
    }

    if (hora == false || isValidHora(hora) == false) {
        alert("Has introducido mal la hora")
        es_Validado = false;
    }

    if (mediaConfirmacion == false || isValidMediaConfirmacion(mediaConfirmacion) == false) {
        alert("Has introducido mal el media confirmarcion")
        es_Validado = false;
    }

    if(es_Validado){
        var newuser = {nombreApellidosUsu : nombreApellidos, dniUsu : dni,fechaUsu : fecha, horaUsu : hora, medioConfirmacion: mediaConfirmacion};
        console.log(newuser);
        var UserNew = JSON.stringify(newuser);
        console.log(UserNew);
        localStorage.setItem("Cita",UserNew);
    }

}

function recargarInfo() {
        var dnidec = prompt("Dime tu dni");
        var cita = JSON.parse(localStorage.getItem("Cita"));
        if(cita["dniUsu"] === dnidec){
            $nombreApellidos.value = cita["nombreApellidosUsu"];
            $Dni.value = cita["dniUsu"];
            $fecha.value = cita["fechaUsu"];
            $Hora.value = cita["horaUsu"];
            $mediConfirmacion.value = cita["medioConfirmacion"];
        }
}

function isValidMediaConfirmacion(mediaConfirmacion) {
    
    if(email.checked){
        const validacion =  /^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/
        validacion.test(mediaConfirmacion);
    }else if(telefono.checked){
        const validacion = /^\+[0-9]{2}\s[0-9]{9}$/
        validacion.test(mediaConfirmacion);
    }
}

function isValidHora(hora){
    const validacion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    validacion.test(hora)
}

function isValidDni(dni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
    'T'];
    
    if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
    return false;
   } 
    
    if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
    return false;
   }
}

function isValidFecha(fecha) {
    const validacion = /^[0-2][0-9]\/[0-12]\/\d{4}$/;
    validacion.test(fecha)
}

function isValidNombreApellidos(nombre) {
    const validacion = /^[a-zA-Z]+\s[a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    validacion.test(nombre);
}


$Form.addEventListener('submit',hadleSubmit);