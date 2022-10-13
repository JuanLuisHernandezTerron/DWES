function add(){
    const $FORM = document.getElementById("formularioMain");
    const $DNI = document.getElementById("dni");
    const $NOMBRE = document.getElementById("nombre");
    const $APELLIDOS = document.getElementById("apellidos");
    const $TELEFONO = document.getElementById("telefono");
    const $HORARIO = document.getElementById("horarios");
    const $COMENTARIOS = document.getElementById("comentarios");
    
    function handleSubmit(e){
        e.preventDefault();
        const form = $FORM.value;
        const dni = $DNI.value;
        const nombre = $NOMBRE.value;
        const apellidos = $APELLIDOS.value;
        const telefono = $TELEFONO.value;
        const horario = $HORARIO.value;
        const comentarios = $COMENTARIOS.value;
        
        (dni == false || isValidDNI(dni) == false) ? alert("Has introducido mal el DNI, el formato correcto es 55555555-X"):
        (nombre == false || isValidNombre(nombre) == false) ? alert("Has introducido mal el nombre, introduce por lo menos un nombre o como máximo 2"):
        (apellidos == false || isValidApellidos(apellidos) == false) ? alert("Has introducido mal los apellidos, tienes que introducir como minimo 1 o como máximo 2"):
        (telefono == false || isValidTelefono(telefono) == false) ? alert("Has introducido mal los telefono, tienes que introducir +99 999999999") : 
        (horario == false || isValidHorario(horario) == false) ? alert("Has introducido mal la hora, mira que no se pase de las 24 horas"):
        alert("No has realizado bien el formulario");

        var newUser = {dni : dni, nombre : nombre, apellidos : apellidos, telefono : telefono, horario : horario, comentarios : comentarios};
        console.log(newUser);
        var user = JSON.stringify(newUser);
        console.log(user);
    }

    function isValidHorario(horario){
        const validacion = /^(([0-1][0-9])|([2][0-4]))\:[0-5][0-9]$/;
        return validacion.test(horario);
    }

    function isValidTelefono(telefono){
        const validacion = /^\+[0-9]{2}\s[0-9]{9}$/;
        return validacion.test(telefono);
    }

    function isValidApellidos(apellidos){
        const validacion = /^[a-z]+$|^[a-z]+\s[a-z]+$/;
        return validacion.test(apellidos);
    }

    function isValidNombre(nombre){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
        return validacion.test(nombre);
    }

    function isValidDNI(dni){
        const validacion = /^\d{8}[A-Z]$/;
        return validacion.test(dni);
    }

    $FORM.addEventListener('submit', handleSubmit);
}