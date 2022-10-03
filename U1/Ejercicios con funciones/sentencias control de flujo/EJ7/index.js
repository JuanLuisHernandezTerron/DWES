// Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el
// número es positivo, cero o negativo.

function add(){
    var numero = document.getElementById("numero1").value;
    var numeroRealG = Number(numero);

    if(Number.isInteger(numeroRealG)){
        if(numeroRealG > 0){
            document.getElementById("resultado").innerHTML = "Es numero positvo";
        }else if(numeroRealG == 0){
            document.getElementById("resultado").innerHTML = "Es cero";

        }else{
            document.getElementById("resultado").innerHTML = "Es negativo";
        }
    }else{
        document.getElementById("resultado").innerHTML = "No es entero";
    }
}