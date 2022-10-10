// Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de
// ellos.

function add(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    (numero1 > numero2 && numero1 > numero3) ? document.getElementById("resultado").innerHTML = "El numero mayor es "+numero1 :
    (numero2 > numero1 && numero2 > numero3) ? document.getElementById("resultado").innerHTML = "El numero mayor es "+numero2 :
    document.getElementById("resultado").innerHTML = "El numero mayor es "+numero3;

}