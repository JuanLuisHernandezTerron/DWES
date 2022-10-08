// Realizar un programa que lea por teclado dos números, si el primero es mayor
// al segundo informar su suma y diferencia, en caso contrario informar el
// producto y la división del primero respecto al segundo.

function add(){
    let edad1 = Number(document.getElementById("texto1").value);
    let edad2 = Number(document.getElementById("texto2").value);
    const elemento = document.createElement("p");
    const elemento2 = document.createElement("p");

    (edad1 > edad2) ? document.getElementById("resultado").appendChild(elemento).innerHTML = "La suma de sus numeros es "+Number(edad1 + edad2) + " <br> La diferencia de sus numero es "+ Number(edad1 - edad2) : 
    (edad1 < edad2) ? document.getElementById("resultado").appendChild(elemento).innerHTML = "El producto de estos dos numeros es "+ Number(edad1 * edad2) + "<br>La division de estos dos numeros es "+ Number(edad2/edad1):
    "No has introducido bien los datos";

}