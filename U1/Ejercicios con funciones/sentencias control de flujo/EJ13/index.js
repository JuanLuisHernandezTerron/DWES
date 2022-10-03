// Recorrer mediante for una variable llamada texto que representa a la cadena 
// “ejemplo”.
// ¿Qué resultados obtenemos al ejecutar? ¿Qué conclusión podemos extraer?

function add(){
    let mensaje = document.getElementById("texto").value;
    let longitudFrase = mensaje.length;

    for (let i = 0; i < longitudFrase; i++) {
       var cadenaEjemplo = mensaje.charAt(i);
       const texto = document.createElement("p");
       document.getElementById("texto2").appendChild(texto).innerHTML = cadenaEjemplo;
    }
}