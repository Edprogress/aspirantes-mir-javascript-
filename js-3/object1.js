let pedro = {
    nombre : "Pedro Perez",
    edad : 30 ,
    activo : true ,
    hobbies :["programar","squash","piano"]
}
console.log(pedro.edad);

pedro.estatura = 1.8;

console.log(pedro);

delete pedro.activo;

console.log(pedro);

for (let propiedad in pedro) {
    console.log(propiedad+" : "+pedro[propiedad]);
    
}

pedro.saluda= function () {
    return ("Hola me llamo "+this.nombre);
}
console.log(pedro);
console.log(pedro.saluda());