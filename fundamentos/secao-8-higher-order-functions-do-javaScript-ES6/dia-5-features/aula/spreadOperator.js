// Faça uma lista com as suas frutas favoritas
const specialFruit = ['pêra', 'uva', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite consdensado', 'calda de chocolate', 'melaço'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));