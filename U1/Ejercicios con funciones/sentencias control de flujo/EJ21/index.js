// Escribe una función iterativa que dado un número entero n, retorne un array 
// con todos los números enteros en orden decreciente desde n a 1.
let numero = Number(document.getElementById("numero").value);
var arrayNumeros = [numero];
var contadorArray = 0;
add(numero);
debugger

function add(numeroExt){
    if(numeroExt > 0){
        numero[contadorArray++] = numeroExt;
        return add(numeroExt-1)
    }
}

console.table(arrayNumeros)
    