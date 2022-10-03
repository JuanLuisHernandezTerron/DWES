// Programa en el que se ingresen tres notas de un alumno, si el promedio es
// menor que 5 mostrar el mensaje “Repetidor”, entre 5 y 7 mostrar el mensaje
// “Superado” y si es mayor o igual a siete mostrar el mensaje ‘Promocionado’.
// Tener en cuenta que para obtener el promedio debemos operar la suma de las
// notas; y luego hacer promedio=suma/3;

function add(){
    let nota1 = document.getElementById("numero1").value;
    let nota2 = document.getElementById("numero2").value;
    let nota3 = document.getElementById("numero3").value;

    let notaFinal = ((Number(nota1) + Number(nota2) + Number(nota3))/3);

    if(notaFinal < 5){
        document.getElementById("resultado").innerHTML = "Suspenso";
    }else if(notaFinal >= 5 && notaFinal <= 7){
        document.getElementById("resultado").innerHTML = "Superado";
    }else{
        document.getElementById("resultado").innerHTML = "Promocionado";
    }
}

