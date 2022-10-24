var numeroRandom = parseInt(1+Math.random()*50);

do {
    var numero = prompt("Dime un numero");
    numero.toLowerCase();

    if(validNumero(numero) > 0){
    do {
        alert("Has introducido una cadena Introduce de nuevo un numero");
        numero = prompt("Dime un numero");
        var contadorLetraGen = validNumero(numero)
        if(contadorLetraGen == 0){
            Number(numero);
            break;
        }
    } while (contadorLetraGen === 0);
}
Number(numero);
console.log(numero)

if (numero === numeroRandom) {
    alert("HAS GANADO, ERES UN CRACK!!!")
}else{
    acertarNumeroExtra(numero);
}
  var seguirJugando = prompt("Quieres jugar Otra vez? Pulsa 1 para si o pulsa 0 para no")
  debugger
} while (seguirJugando != 0);


function acertarNumeroExtra(numero) {
    let contadorIntentos = 0;
    let contadorIni = 0;
    if(contadorIni <1){  //Solo lo muestre una vez
        if(numero > numeroRandom){
            alert("El numero que has introducido es mayor al random")
        }else{
            alert("El numero que has introducido es menor al random")
        }
    }
  
    do {
        numero = prompt("Dime un numero");
        if(validNumero(numero) > 0){
            do {
                alert("Has introducido una cadena Introduce de nuevo un numero");
                numero = prompt("Dime un numero");
                var contadorLetraGen = validNumero(numero)
                if(contadorLetraGen == 0){
                    Number(numero);
                    break;
                }
            } while (contadorLetraGen === 0);
        }
        if(numero > numeroRandom){
            alert("El numero que has introducido es mayor al random")
            contadorIntentos++;
        }else if(numero < numeroRandom){
            alert("El numero que has introducido es menor al random")
            contadorIntentos++;
        }else{
            alert("HAS GANADO, ERES UN CRACK!!!")
            break;
        }
    } while (contadorIntentos != 5);

    if(contadorIntentos === 5){
        alert("Has cumplido los maximos intentos(5)")
    }
}

function validNumero(numero) {
    let contadorLetra = 0;
    var arrayAbecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

    for (let i = 0; i < numero.length; i++) {
        for (let j = 0; j < arrayAbecedario.length; j++) {
            if (numero.charAt(i) == arrayAbecedario[j]){
                contadorLetra ++;
            }
        }
    }
return contadorLetra;
}


