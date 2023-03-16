let persona = {
    nombre :    "Edinson" ,
    edad :      38 ,
    ciudad :    "Cali" ,
    profesion : "Programador" ,
    
    
}

console.log(persona);

function presentacion(persona) {
    return "Hola mi nombre es "+persona.nombre+" tengo "+persona.edad+" años"+" vivo en "+persona.ciudad+" mi profesion es "+persona.profesion;
}

let mensaje = presentacion(persona);
console.log(mensaje);
console.log(typeof(mensaje));


persona.hobbies = ["trotar", "cine", "futbol","viajar"];
console.log(persona.hobbies);

for (let i in persona.hobbies) {
    console.log(persona.hobbies[i]);
}




