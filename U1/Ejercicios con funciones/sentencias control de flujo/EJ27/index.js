// Realiza una página que contenga una función JavaScript para hacer 
// estadísticas sobre una cadena de texto que se introduzca, contando el número 
// de veces que aparece cada letra. Se deberá mostrar un listado con las letras 
// del abecedario con el número de veces que aparece cada letra en la cadena 
// que se la pasa. Utilizar un Array para almacenar la información estadística. No 
// se tendrán en cuenta que pudiera haber tildes, consideraremos que no existen

function add(){
    var texto = document.getElementById("texto").value.toLowerCase();
    var arrayAbecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
   
    for (let i = 0; i < arrayAbecedario.length; i++) {
        var contadorLetras = 0;
        for (let j = 0; j < texto.length; j++) {
            if ((arrayAbecedario[i]) == texto.charAt(j)) {
                contadorLetras++;
            }
        }
        let elemento = document.createElement("p");
        document.getElementById("resueltos").appendChild(elemento).innerHTML = "<br>La letra "+arrayAbecedario[i] + " ha aparecido "+ contadorLetras + " veces";
    }
}