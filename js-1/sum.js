function suma(numero) {
    let contador = 0
    for (let i = 0; i <= numero; i++) {
       
        const element = i;
        contador = contador + element;
    }
    return contador ;
}

    console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
	console.log(suma(10)) // 55
	console.log(suma(15)) // 120
