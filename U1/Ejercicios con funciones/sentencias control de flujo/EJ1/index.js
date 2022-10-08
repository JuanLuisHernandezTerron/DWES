// Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert
// quien es el mayor de los dos.
function add(){
    let edad1 = Number(document.getElementById("edad1").value);
    let edad2 = Number(document.getElementById("edad2").value);
    
    (edad1 > edad2 ) ? document.getElementById("resultado").innerHTML =  "El numero mayor es:"+edad1 : document.getElementById("resultado").innerHTML =  "El numero  es: "+ edad2;
}
