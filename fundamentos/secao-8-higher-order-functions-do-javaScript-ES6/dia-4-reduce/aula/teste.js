const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

 // faça uma função que some todos os números pares do array:

 // reduce
const reduced = (numbers) => numbers.reduce((acc, curr) => acc + curr );

console.log(`resultado com reduce: ${reduced(numbers)}`);

// for 
const reducedFor = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i += 1){
        result += numbers[i];
    }
    return result;
};

console.log(`resultado com for: ${reducedFor(numbers)}`);