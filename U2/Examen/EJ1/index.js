function plato() {
    var vip = document.getElementById("vip");
    var ivaPlato = 6 *0.10; //Los platos ya tienen el iva
    var ivaBebida = 1 * 0.21;
    var precioFinal = 6 + ivaPlato;
    var precioFinalbebida = 1 + ivaBebida; 
    var contadorComplementos = 0;
    
    let bebida = new Boolean(false);
    
    var complementos = Number(prompt("Quieres complementos? Envienos un 1 para si  o un 0 para no"));
    if (complementos == 1){
        
        do {
            var complementosPlato = prompt("Dime un complemento, recuerde tenemos entrante, bebida, postre. (Intruce 0 para salir, Gracias)")
            contadorComplementos ++;
            
                if (complementosPlato === "bebida"){
                    bebida = true;
                    precioFinal += precioFinalbebida;
                }else{
                    var ivaComplemento = 1 * 0.10;
                    precioFinal += 1 + ivaComplemento;
            }
        } while (complementosPlato != 0);
        
    }

    var vip =prompt("Eres vip? Envienos un Si o un No");
    debugger
    if (vip === "Si" || vip === "si") {
        var descuento = precioFinal * 0.05;
        alert("Su precio final es de: "+ (precioFinal - descuento))
    }else{
        alert("Su precio final es de : "+ precioFinal);
    }
}