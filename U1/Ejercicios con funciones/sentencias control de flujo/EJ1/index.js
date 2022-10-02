// Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert
// quien es el mayor de los dos.
function add(){
    let edad1 = document.getElementById("edad1").value;
    let edad2 = document.getElementById("edad2").value;
    if(Number(edad1) > Number(edad2)){
        document.getElementById("resultado").innerHTML = "La edad mayor es:"+Number(edad1);
    }else if(Number(edad1) < Number(edad2)){
        document.getElementById("resultado").innerHTML = "La edad mayor es: "+Number(edad2);
    }else{
        document.getElementById("resultado").innerHTML = "Tienen la misma edad";
    }
}
