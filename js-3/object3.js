let receta = {};


receta.nombre = "Sandwich ";
receta.ingredientes = [];
receta.ingredientes.push({nombre : "pan", cantidad : 2});
receta.ingredientes.push({nombre : "Queso", cantidad : 1});

console.log(receta.ingredientes[0].nombre);

let  suma = (receta.ingredientes[0].cantidad)+(receta.ingredientes[1].cantidad);
console.log(suma);
