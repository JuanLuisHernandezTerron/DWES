const formulario = document.getElementById("formulario");
const dni = document.getElementById("dni").value;
const nombre = document.getElementById("nombre").value;
const apellidos = document.getElementById("apellidos").value;
const contrasena = document.getElementById("contrasena").value;
const email = document.getElementById("email").value;
const telefono = document.getElementById("telefono").value;
formulario.addEventListener('submit',hadleSubmit,false);

function hadleSubmit(e) {
    console.log("Entrando validacion")
    e.preventDefault();
    (isValidDNI(dni) == false || dni == false) ? alert("Has introducido mal el dni") : console.log("");
    (isValidNombre(nombre) == false || nombre == false) ? alert("Has introducido mal el nombre") : console.log("");
    (isValidApellido(apellidos) == false || apellidos == false) ? alert("Has introducido mal los apellidos") : console.log("");
    (isValidContrasena(contrasena) == false || contrasena == false) ? alert("Has introducido mal la contraseña") : console.log("");
    (isValidEmail(email) == false || email == false) ? alert("Has introducido mal el email") : console.log("");
    (isValidTelefono(telefono) == false || telefono == false) ? alert("Has introducido mal el telefono") : console.log("");

    function isValidDNI(dni) {
        const validacion = /^[0-9]{8}[A-Z]{1}$/
        validacion.test(dni);
    }

    function isValidNombre(nombre) {
        const validacion = /^(([a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+))$/
        validacion.test(nombre);
    }

    function isValidApellido(apellidos) {
        const validacion = /^(([a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+))$/
        validacion.test(apellidos);
    }

    function isValidContrasena(contrasena) {
        const validacion = /^\w{8,10}$/
        validacion.test(contrasena);
    }

    function isValidEmail(email) {
        const validacion = /^[a-zA-Z]{3}\@[a-zA-Z]{3}\.[a-zA-Z]{3}$/
        validacion.test(email);
    }

    function isValidTelefono(telefono) {
        const validacion = /^[0-9]{10}$/
        validacion.test(telefono);
    }
}

