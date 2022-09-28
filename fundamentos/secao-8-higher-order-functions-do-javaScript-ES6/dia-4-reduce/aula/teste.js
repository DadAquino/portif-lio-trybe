const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 10];

 // faça uma função que some todos os números pares do array:

 // reduce
const reduced = (numbers) => numbers.filter((numero) => numero%2 === 0).reduce((acc, curr) => acc + curr );

console.log(`resultado com reduce: ${reduced(numbers)}`);

// for 
const pares = (array) => {
    let pares = [];
    for (let i = 0; i < array.length; i += 1) {
        array[i] % 2 === 0 ? pares.push(array[i]) : pares;
    }
    return pares;
}

const reducedFor = (numbers) => {
    const array = pares(numbers);
    let result = 0;
    for (let i = 0; i < array.length; i += 1){
        result += array[i];
    }
    return result;
};
    
console.log(`resultado com for: ${reducedFor(numbers)}`);