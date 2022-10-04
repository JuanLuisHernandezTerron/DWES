// De un aspirante a un empleo, que realizó un test de capacitación, se obtuvo la 
// siguiente información: nombre del aspirante, cantidad total de preguntas que se 
// le realizaron y cantidad de preguntas que contestó correctamente. Se pide 
// confeccionar un programa que lea los datos del aspirante e informe el nivel del 
// mismo según el porcentaje de respuestas correctas que ha obtenido, y 
// sabiendo que:
// ● Nivel superior: Porcentaje>=90%.
// ● Nivel medio: Porcentaje>=75%. 
// ● Nivel bajo: Porcentaje>=50%.
// ● Fuera de nivel: Porcentaje<50%

function add(){
    let nombre = document.getElementById("nombre").value;
    let preguntasRealizadas = document.getElementById("preguntasReli").value;
    let preguntasAcertadas = document.getElementById("preguntasAcer").value;

    let formula = ((preguntasAcertadas/preguntasRealizadas)*100);
    
    if(parseInt(formula) >= 90){
        document.getElementById("resultado").innerHTML = "Tu porcentaje es SUPERIOR";
    }else if(parseInt(formula) >= 75){
        document.getElementById("resultado").innerHTML = "Tu porcentaje es MEDIO";
    }else if(parseInt(formula) >= 50){
        document.getElementById("resultado").innerHTML = "Tu porcentaje es BAJO";
    }else{
        document.getElementById("resultado").innerHTML = "Tu porcentaje es FUERA DE NIVEL";
    }
}