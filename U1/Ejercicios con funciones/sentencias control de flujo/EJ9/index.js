// Se ingresa por teclado un número positivo de uno o dos dígitos controlar si el 
// número introducido es correcto y mostrar un mensaje indicando si el número 
// tiene uno o dos dígitos (recordar de convertir a entero con parseInt para 
// preguntar posteriormente por una variable entera). Tener en cuenta qué 
// condición debe cumplirse para tener dos dígitos un número entero.

function add(){
    let numero = document.getElementById("numeroPositivo").value;
    let numeroReal = Number(numero);

    var cociente  = numeroReal;
    var contador = 0;

    if(numeroReal > 0){
        while(cociente > 0){
            cociente = cociente /10;
            contador ++;
            cociente = parseInt(cociente); //Al ser siempre decimal, hay que parsearlo para que quede en 0
        }
        document.getElementById("resultado").innerHTML = "El numero tiene " + contador + " digitos";
    }else{
        document.getElementById("resultado").innerHTML = "Tiene que ser numero positivo/mayor que cero";
    }

}