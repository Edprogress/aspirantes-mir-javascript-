/*19.	Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.*/

function join(array) {
    let str=[] ;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    
       str = str +array[i]+"  "  ;
       
        
    }
    return str.trim() ;  // El metodo trim() sirve para eliminar el espacio al comienzo y al final del string 
}
console.log (join(["retornando",3,"String",2,"con ",1, "espacios",0 ]));

