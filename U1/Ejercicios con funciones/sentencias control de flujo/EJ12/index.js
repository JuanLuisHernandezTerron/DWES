// Mostrar un mensaje indicando si el número introducido en una caja de texto es 
// par o impar. 

function add(){
    let numero = document.getElementById("numero").value;
   var numero1 = Number(numero) % 2 == 0 ? document.getElementById("resultado").innerHTML = "Es par" : document.getElementById("resultado").innerHTML = "Es Impar"; 
}