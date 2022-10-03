// Vamos a realizar un script que nos pregunte el nombre y la edad. Nos 
// responderá con un saludo y nos dirá si somos menores o mayores de edad y 
// los días que hemos vivido

function add(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    let diasVividos = Number(edad) * 365;
    if(Number(edad) >= 18){
     document.getElementById("resultado").innerHTML = "Hola "+ nombre + ", eres mayor de edad, has vivido "+ diasVividos + " dias";
    }else{
    document.getElementById("resultado").innerHTML = "Hola "+ nombre + ", eres menor de edad, has vivido "+ diasVividos + " dias";
    }
}