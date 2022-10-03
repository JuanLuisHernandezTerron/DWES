// Confeccionar un programa que permita cargar un número entero positivo de 
// hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

function add(){
    let numero = document.getElementById("numero").value;
    let numeroReal = Number(numero);
    var cociente = numeroReal;
    var contador = 0;
    if(numeroReal > 0){
        while(cociente > 0){
            cociente = cociente /10;
            contador ++;
            cociente = parseInt(cociente);
        }

        if(contador  > 0 && contador >= 3){
            document.getElementById("resultado").innerHTML = "El numero "+ numeroReal + ", tiene "+ contador + " digitos";
        }
    }else{
        document.getElementById("resultado").innerHTML = "Tiene que tener almenos un numero";
    }
}