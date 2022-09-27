let numero1;
let numero2;
let numero3;
let numero4;

numero1 = prompt("Dime un numero",numero1);
numero2 = prompt("Dime un numero",numero2);
numero3 = prompt("Dime un numero",numero3);
numero4 = prompt("Dime un numero",numero4);


let resultadoSuma = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4);
console.log("La suma de los 4  es "+resultadoSuma);


let resultadoProducto = parseFloat(numero1) * parseFloat(numero2) * parseFloat(numero3) * parseFloat(numero4);
console.log("El producto de los 4 es "+resultadoProducto);

let resultadoResta = parseFloat(numero1) - parseFloat(numero2);
console.log("La resta de los 2 primeros es "+resultadoResta);

let resultadoDivision = parseFloat(numero3) / parseFloat(numero4);
console.log("La división de los 2 ultimos es: "+ resultadoDivision);



