let objetosExportar = {};

objetosExportar.validarUser = function(dniUser,arrayUsers){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                (recorrerUsuarios(arrayUsers,dniUser)) ? resolve("OK:DNI existente") : reject("ERRROR: DNI no existente");
            },2000)
        })
}

function recorrerUsuarios(array,dni) {
    const arrayUsers = array;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].dni === dni) {
            return true;
        }        
    }
}

module.exports = objetosExportar;