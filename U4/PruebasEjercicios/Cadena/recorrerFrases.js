module.exports.primeraPalabra=(cadena)=>{
    let arrayPalabras = cadena.split(" ");
    return arrayPalabras[0];
}
module.exports.ultimaPalabra=(cadena)=>{
    let arrayPalabras = cadena.split(" ");
    return arrayPalabras[arrayPalabras.length-1];
}

module.exports.longitudCadena=(cadena)=>{
    let arrayPalabras = cadena.split(" ");
    return "La cadena tiene un total de "+arrayPalabras.length+",  palabras";
}