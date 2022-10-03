// Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de
// ellos.

function add(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;

    if((Number(numero1) > Number(numero2)) && (Number(numero1) > Number(numero3))){
        document.getElementById("resultado").innerHTML = "El numero mayor es "+numero1;
    }else if((Number(numero2) > Number(numero1)) && (Number(numero2) > Number(numero3))){
        document.getElementById("resultado").innerHTML = "El numero mayor es "+numero2;
    }else{
        document.getElementById("resultado").innerHTML = "El numero mayor es "+numero3;
    }
}