/*13	Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1. */ 
// escribe la función maxIndex acá
function maxIndex(arguments) {
    let mayor = arguments[0] ;
    let pos = "";
    if (arguments.length === 0) {
        return -1
    }
    else { 
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i+1];
            if (arguments[i] >= mayor) { //10 > 10
               mayor = arguments[i] 
              pos = i;
            }
        }
        return pos ;
    }
    }
	console.log(maxIndex([1, 3, 2])) // 1
	console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
	console.log(maxIndex([])) // -1
