// Crear un programa donde el usuario introduzca su altura, edad y sexo y le 
// devuelva el peso ideal recomendado. La fórmula a aplicar es: 50+((altura*150)/4)*3 + (Edad-20)/4 y si es mujer *0,9.

function add(){
    var altura = Number(document.getElementById("altura").value);
    var edad = Number(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    
    switch (sexo) {
        case "hombre":
            let formula = 50+((altura-150)/4)*3 + (edad-20)/4;
            document.getElementById("resultado").innerHTML = "Su peso ideal siendo hombre es "+ formula;
            break;
        case "mujer":
            let formula1 = 50+((altura-150)/4)*0.9 + (edad-20)/4;
            document.getElementById("resultado").innerHTML = "Su peso ideal siendo mujer es "+ formula1;
            break;
        default:
            document.getElementById("resultado").innerHTML = "Introduce si es hombre o mujer correctamente";
            break;
    }
}

