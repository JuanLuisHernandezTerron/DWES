// Realizar un programa que lea por teclado dos números, si el primero es mayor
// al segundo informar su suma y diferencia, en caso contrario informar el
// producto y la división del primero respecto al segundo.

function add(){
    let edad1 = document.getElementById("texto1").value;
    let edad2 = document.getElementById("texto2").value;
    const elemento = document.createElement("p");
    const elemento2 = document.createElement("p");

    if(Number(edad1) > Number(edad2)){
        document.getElementById("resultado").appendChild(elemento).innerHTML = "La suma de sus numeros es "+ (Number(edad1) + Number(edad2));
        document.getElementById("resultado").appendChild(elemento2).innerHTML = "La diferencia de sus numero es "+ (Number(edad1) - Number(edad2));
    }else if(Number(edad1) < Number(edad2)){
        document.getElementById("resultado").appendChild(elemento).innerHTML = "El producto de estos dos numeros es "+ (Number(edad1)*Number(edad2));
        document.getElementById("resultado").appendChild(elemento2).innerHTML = "La division de estos dos numeros es "+ (Number(edad2)/Number(edad1));
    }
}