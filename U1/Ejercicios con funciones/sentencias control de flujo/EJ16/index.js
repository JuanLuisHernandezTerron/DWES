// Se ingresan tres valores por teclado, si todos son iguales se imprime la suma 
// del primero con el segundo y a este resultado se lo multiplica por el tercero 
// (tener en cuenta que puede haber tres condiciones simples).

function add(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);
    if(numero1 == numero2 &&  numero1 == numero3){
        let resultadoFinal = (numero1 + numero3)*numero3;
        document.getElementById("resultado").innerHTML = "El resultado es "+ resultadoFinal;
    }else{
        document.getElementById("resultado").innerHTML = "Introduce los 3 numeros iguales";

    }
}