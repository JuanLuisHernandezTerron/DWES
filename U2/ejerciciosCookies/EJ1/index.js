var cname = prompt("que vas a introducir")
var cvalor = prompt("Dime el nombre de usuario");
var fechaEXP = prompt("Cuantos dias quieres que dure la cookie");
var buscar = prompt("dime el nombre y te digo el valor");
var eliminarCookie = prompt("Que cookie quieres borrar");

setCookies(cname,cvalor,fechaEXP);
alert(getCookie(buscar));
deleteCookie(eliminarCookie);
modificarCookie();

function modificarCookie(){
    var cookieAUX = prompt("Cual cookie quieres modificar");
    let fechaEXPAUX = prompt("Cuantos dias quieres que expire la cookie?");
    let valoAUX = prompt("Cual es el valor de la cookie?");
    setCookies(cookieAUX,valoAUX,fechaEXPAUX);
}

function setCookies(cname,cvalor,fechaEXP) {
    let dia = new Date();
    dia.setTime(dia.getTime() + fechaEXP *24*60*60*1000);
    let expires = dia.toUTCString();
    alert(expires)
    document.cookie = cname + "="+ cvalor +";"+"Expires"+"="+ expires;
}

function deleteCookie(cname){
    setCookies(cname,"",0); // Para borrar una cookie llamaremos al metodo setCookies, y le pasaremos por parametro el nombre de la cookie
                            //que queremos borrar, resetearemos el valor, y le pasaremos como fecha de expireacion la mas baja posible que es 0.
}

function getCookie(cname) {
    
    let name = cname + "=";
    let ca = document.cookie.split(";"); // Guarda en un array los nombre y valores de la cookie
    for (let index = 0; index < ca.length; index++) { //Recorremos el array
        let c = ca[index]; //Guarda el valor de cada posicion del array    
        while(c.charAt(0) == " "){ //Recorremos el caracter 0 de la cadena hasta que no encuentre mas 
            c = c.substring(1); //Hasta que no se ecuentre el final, va a ir sobreescribiendo en la variable c
        }    

        if (c.indexOf(cname) == 0){ //Cuando lo encuentra haremos un return  con el nombre y el valor
            return c.substring(cname.lenght+1,c.length)
        }
    }
    return ""; //si no lo encuentra, devolverá una cadena vacia
}

