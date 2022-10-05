// Leer una cadena de texto en un formulario y generar un array con la función 
// split(). Posteriormente, mostrar la siguiente información: Número de palabras, 
// primera palabra, última palabra.

function add(){
    let texto = document.getElementById("texto").value;
    const arrayTexto = texto.split(" ");

    alert("La frase contiene "+ arrayTexto.length + " palabras");
    alert("La primera palabra es "+ arrayTexto[0]);
    alert("La ultima palabra es "+ arrayTexto[arrayTexto.length-1]);

}