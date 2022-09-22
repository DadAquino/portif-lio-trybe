// Crie uma função que retorne a string 'Acordando!!';

const acordando = () => console.log('Acordando!!');

// Crie outra função que retorne a string 'Bora tomar café!!';

const cafe = () => console.log('Bora tomar café!!');

// Crie mais uma função que retorne a string 'Partiu dormir!!';

const dormir = () => console.log('Partiu dormir!!');

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (func) =>  func()

// Ao chamar a função doingThings:
doingThings(cafe);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
