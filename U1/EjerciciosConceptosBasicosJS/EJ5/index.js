//Desarrollar un programa que pida el ingreso del precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador.
// Ingresar por teclado un precio con decimales y la cantidad sin decimales, es
// decir un entero.

let precio = prompt("Dime el precio del articulo");
let cantidadCliente = prompt("Dime cuanto te vas a llevar");
let Resulado = parseFloat(precio) * Number(cantidadCliente);
console.log("Tiene que abonar la cifra de: "+ parseFloat(Resulado));


