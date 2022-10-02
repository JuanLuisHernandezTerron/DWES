function add(){
    let texto = document.getElementById("insertar").value; //Me guarda el valor del input de texto que he introducido

    const lista = document.createElement("li"); // creo un elemento li, para la lista desordenada
    document.getElementById("listaHTML").appendChild(lista).innerHTML = texto; //llamo al id del ul del html y creo subhijos(li) y le añado el texto
}