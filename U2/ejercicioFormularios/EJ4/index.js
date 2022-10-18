const $FORM = document.getElementById("formulario");
const $fechaCreacion = document.getElementById("fechaCreacion");
const $cocinero = document.getElementById("cocinero");
const $destinario = document.getElementById("destinario");
const $gramos = document.getElementById("gramos");
const $composicion = document.getElementById("composicion");
const $numeroCuenta = document.getElementById("iban");

function handleSubmit(e){
    e.preventDefault();
     const fechaCreacion = $fechaCreacion.value;
     const cocinero = $cocinero.value;
     const destinario = $destinario.value;
     const gramos = $gramos.value;
     const composicion = $composicion.value;
     const numeroCuenta = $numeroCuenta.value;
     var es_Validado = new Boolean(true);

    if(fechaCreacion == false || isValidFechaCreacion(fechaCreacion) == false){
        alert("La fecha ha sido mal introdcidad")
        es_Validado = false;
    } 

    if(cocinero == false || isValidCocinero(cocinero)   == false){
        alert("El nombre del cocinero está mal escrito")
        es_Validado = false;
    }

    if(destinario == false || isValidDestino(destinario) == false){
        alert("El destino está mal escrito")
        es_Validado = false;
    }

    if(gramos == false || isValidGramos(gramos) == false){
        alert("Los gramos están mal escritos")
        es_Validado = false;
    }
       
    if(composicion == false || isValidComposicion(composicion) == false){
        alert("Los composicion están mal escritos")
        es_Validado = false;
    }

    if(numeroCuenta == false || isValidNumeroCuenta(numeroCuenta)== false){
        alert("La cuenta está mal escrito")
        es_Validado = false;
    }
}

function isValidNumeroCuenta(numeroCuenta) {
    let mapaVocabulario = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25};
}

function isValidComposicion(composicion) {
    const numeroCuenta = $numeroCuenta.value;
    const validacion = /^numeroCuenta[g][A-Z]{1,2}\d{0,1}[A-Z]{1,2}\d{0,1}$/;
    return validacion.test(composicion);
}

function isValidGramos(gramos){
    const validacion = /^[100-5000]{3,4}$/;
    return validacion.test(gramos);

function isValidDestino(destinario){
    const validacion = /^[A-Z]{2,3}\_[a-z]+\:\d{4}$/;
    return validacion.test(destinario);
}


function isValidCocinero(cocinero){
    const validacion = /^[A-Z]{2}\W\d{4}$/;
    return validacion.test(cocinero);
}

function isValidFechaCreacion(fechaCreacion){
    const validacion =/^(([0][1-9])|(([1-2][0-9])|([3][0-1])))\-[0-12]{2}\-\d{4}$/;
    return validacion.test(fechaCreacion);
}

