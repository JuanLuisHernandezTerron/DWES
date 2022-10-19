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

     debugger

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

    if(es_Validado == true){
        var NewBolsas = {fechaCreacionBolsa : fechaCreacion, cocineroBolsa : cocinero, destinarioBolsa : destinario, gramosBolsa : gramos, composicionBolsa: composicion, numeroCuenta: numeroCuenta};
        console.log(NewBolsas);
        var newbolsa = JSON.stringify(NewBolsas);
        console.log(newbolsa);
    }
}

function isValidNumeroCuenta(numeroCuenta) {
    let mapaVocabulario = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};
    let valorLetra1 = Number(mapaVocabulario[numeroCuenta.slice(0,1)]);
    let valorLetra2 = Number(mapaVocabulario[numeroCuenta.slice(1,2)]);
    debugger
    
    var es_valido = Boolean(true);

    sumaLetras = valorLetra1 + valorLetra2;
    sumaLetras2 = Number(mapaVocabulario[numeroCuenta.slice(0,1)]) + Number(mapaVocabulario[numeroCuenta.slice(1,2)]);
    let suma3 = 0;
    let suma4 = 0;
    let primerDigito = numeroCuenta.slice(numeroCuenta.lenght-2 ,numeroCuenta.lenght-1);
    let segundoDigito = numeroCuenta.slice(numeroCuenta.lenght-1 ,numeroCuenta.lenght);

    if (sumaLetras != sumaLetras2) {
        es_valido = false;
    }else{
        alert("Las sumas de las letras no son iguales")
    }
    
    for (let index = 0; index < mapaVocabulario.lenth; index++) {
        if(index >4 && index <=6){
            suma3 += Number(mapaVocabulario[numeroCuenta.slice(index,index+1)])
        }
    }

    suma3 = Number(suma3/6);
    suma4 = Number(suma4/6);

    for (let index = 0; index < mapaVocabulario.lenth; index++) {
        if(index >6 && index <=12){
            suma4 += Number(mapaVocabulario[numeroCuenta.slice(index,index+1)])
        }
    }

    if(es_valido && primerDigito === suma3 && segundoDigito === suma4){
        const validacion = /^[A-Z]{2}\d{2}\-\d{12}\-\d{2}$/
        return validacion.test(numeroCuenta);
    }
}

function isValidComposicion(composicion) {
    const gramos = $gramos.value;
    const validacion = /^gramos[g][A-Z]{1,2}\d{0,1}[A-Z]{1,2}\d{0,1}$/;
    return validacion.test(composicion);
}

function isValidGramos(gramos){
    const validacion = /^[100-5000]{3,4}$/;
    return validacion.test(gramos);
}

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

$FORM.addEventListener('submit',handleSubmit)