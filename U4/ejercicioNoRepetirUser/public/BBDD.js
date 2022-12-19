let objetosExportar = {};
var arrayDNI = []

objetosExportar.validarUser = function(dniUser){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                (recorrerUsuarios(dniUser)) ? resolve("ERRROR:DNI existente") : reject("OK: DNI no existente");
            },2000)
        })
}

function recorrerUsuarios(dni) {
    for (let i = 0; i < arrayDNI.length; i++) {
        if (arrayDNI[i] === dni) {
            return true;
        }        
    }
}

module.exports = objetosExportar;