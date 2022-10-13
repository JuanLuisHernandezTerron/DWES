
    const $FORM = document.getElementById("formulario");
    const $NOMBRE = document.getElementById("nombre");
    const $APELLIDOS = document.getElementById("apellidos");
    const $CORREO = document.getElementById("correo");
    const $WEBPersonal = document.getElementById("webPersonal").value;

    function handleSubmit(e){
        e.preventDefault();
        const NOMBRE = $NOMBRE.value;
        const APELLIDOS = $APELLIDOS.value;
        const CORREO = $CORREO.value;
        const WEBPersonal = $WEBPersonal.value;

        if(NOMBRE == false || isValidNombre(NOMBRE) == false){
            alert("Has introducido mal el nombre")
        }else{
            if((APELLIDOS == false || isValidApellidos(APELLIDOS) == false)){
                alert("Has introducido mal los apellidos")
            }else{
                if((CORREO == false || isValidCorreo(CORREO) == false)){
                    alert("Has introducido mal los correos")
                }else{
                    if((WEBPersonal == false || isValidWebPersonal(WEBPersonal) == false)){
                        alert("Has introducido mal la pagina web personal")
                    }else{
                        var newUser = {nombre : NOMBRE , apellidos : APELLIDOS, correo : CORREO, email : WEBPersonal };
                        console.log(newUser);
                        var user = JSON.stringify(newUser);
                        console.log(user);
                    }
                }
            }
        }
    }

    function isValidWebPersonal(paginaWeb){
        const validacion = /^[htp]{4}\:\/\/[w]{4}\.[a-zA-Z]{4}\.[a-zA-Z]{3}$/;
        return validacion.test(paginaWeb);
    }

    function isValidCorreo(correo){
        const validacion =  /^[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]{3}$/;
        return validacion.test(correo);
    }

    function isValidApellidos(apellidos){
        const validaciones = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/i;
        return validaciones.test(apellidos);
    }

    function isValidNombre(nombre){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/i;
        return validacion.test(nombre);
    }

$FORM.addEventListener('submit', handleSubmit);