const factorial = (n) => {
    let result = n;
    for (i = n-1; i > 0; i -= 1) {
        result = result*i;
        console.log(result);
    }
    console.log(`O fatorial de ${n} é: ${result}`);
}
factorial(5);

const longestWord = (array) => {
    const result = array.split(" ");
    let maior =' ';
    for (let k in result) {
        if (maior.length < result[k].length){
            maior = result[k];
        }
    }
    console.log(maior);
}


longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu paralelepipedo');
// retorna 'aconteceu'