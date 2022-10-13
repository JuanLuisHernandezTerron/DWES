function add(){
    const FORM = document.getElementById('formulario').value;
    const NOMBRE = document.getElementById('nombre').value;
    const APELLIDOS = document.getElementById('apellidos').value;
    const CORREO = document.getElementById('correo').value;
    const WEBPersonal = document.getElementById('webPersonal').value;
    

    function handleSubmit(e){
        e.preventDefault();
        
        (NOMBRE == false || isValidNombre(NOMBRE) == false) ? alert("Has introducido mal el nombre del formulario"):
        (APELLIDOS == false || isValidApellidos(APELLIDOS) == false) ? alert("Has introducido mal los apellidos del formulario"):
        (CORREO == false || isValidCorreo(CORREO) == false) ? alert("Has introducido mal el correo del formulario"):
        (WEBPersonal == false ||isValidPaginaWeb(WEBPersonal) == false) ? alert("Has introducido mal la pagina web personal"):
        alert("Has introducido mal los datos del formulario");

        var newUser = {nombre : NOMBRE , apellidos : APELLIDOS, correo : CORREO, email : WEBPersonal };
        console.log(newUser);
        var user = JSON.stringify(newUser);
        console.log(user);
        
    }

    function isValidPaginaWeb(paginaWeb){
        const validacion = /^[htp]{4}\:\/\/[w]{4}\.[a-zA-Z]{4}\.[a-zA-Z]{3}$/
        return validacion.test(paginaWeb);
    }

    function isValidCorreo(correo){
        const validacion =  /^[a-zA-Z]{6}\@[a-zA-Z]{4}\.[a-zA-Z]{3}$/;
        return validacion.test(correo);
    }

    function isValidApellidos(apellidos){
        const validaciones = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
        return validaciones.test(apellidos);
    }

    function isValidNombre(nombre){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
        return validacion.test(nombre);
    }

    FORM.addEventListener('submit',handleSubmit);
}