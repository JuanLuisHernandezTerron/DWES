// Crear un bucle desde 1 hasta 200 donde se muestre en consola únicamente 
// los números múltiplos de 5 y el número de números que no son primos. 
// Nota: Aplicar modulo (%)

var contadornoPrimos = 0;

for (let i = 1; i <= 200; i++) {
    var es_primo = new Boolean(true);
    if(i % 5 == 0){
        console.log(i);
    }
    
    for (let j = 2; j < i; j++) {
        if(i%j == 0){
            es_primo = false;
            break;
        }
    }
    if(es_primo){
        console.log(i);
    }else{
        contadornoPrimos++;
    }
 }

 console.log("Hay "+Number(contadornoPrimos)+" no primos");