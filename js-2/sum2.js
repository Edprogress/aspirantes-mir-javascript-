/*Ejercicios:
1.	Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos: */	
// escribe la función sum acá

    function sum(array) {
        let contador = 0 ;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        contador = contador + array[i];
    }
    return contador ;
    }

	console.log(sum([1, 2, 3])) // 6
	console.log(sum([10, 8, 12, 5])) // 35
	console.log(sum([])) // 0