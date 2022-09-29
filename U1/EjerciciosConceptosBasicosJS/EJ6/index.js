// Crear un input y un button, cuando le demos al botón, se añadirá el texto que
// hemos puesto en el input en un div vacío. Recuerda se añadirá el texto, no se
// machaca lo que haya en el div.
function add(){
    var texto = document.getElementById("id2").value;
    
    const parrafo = document.createElement("p");
    document.getElementById("div1").appendChild(parrafo);
    document.getElementById("div1").lastChild.innerHTML = texto;
}