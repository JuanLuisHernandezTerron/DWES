// Dado un vector de enteros, comprobar el mayor, el menor y por último la media 
// de todos.
// El botón «Cargar Ejemplo» pondrá un ejemplo de números predefinidos

function numerosAleatorios(){
    let vectoresAleatorios = numeroRandom()+","+numeroRandom()+","+numeroRandom()+","+numeroRandom();
    document.getElementById("texto").value = vectoresAleatorios;
}

function numeroRandom(){
    var numeroAleatorio = parseInt(1+(Math.random()*100));
    return numeroAleatorio;
}

function add(){
    let vectorAux = document.getElementById("texto").value;
    var arrayNumeros = vectorAux.split(",");
    var numeroMayor = 0;
    var numeroMenor = arrayNumeros[0];
    let todosNumeros = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        todosNumeros += Number(arrayNumeros[i]);
        if (arrayNumeros[i] > numeroMayor) {
            numeroMayor = arrayNumeros[i];
        }else if (arrayNumeros[i] < numeroMenor) {
            numeroMenor = arrayNumeros[i];
        }
    }

    alert("La suma de todos los numeros son: "+todosNumeros)
    alert("El numero mas grande es: "+numeroMayor);
    alert("El numero mas chico es: "+numeroMenor);
    alert("La media de todos los numero es: "+ todosNumeros/arrayNumeros.length);
}