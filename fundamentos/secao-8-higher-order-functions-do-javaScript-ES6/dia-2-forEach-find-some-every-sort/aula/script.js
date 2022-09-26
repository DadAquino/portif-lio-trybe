const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach((email) => showEmailList(email));


// exercicio 2

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((numeros) => numeros%3 === 0 && numeros%5 === 0);

console.log(findDivisibleBy3And5());

// 2.2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((nomes) => nomes.length === 5);

console.log(findNameWithFiveLetters());

// 2.3 

const musicas = [
  { id: '31031684', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031685', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
 const musica = musicas.find((ids) => ids.id === id);
 return musica.title;
}

console.log(findMusic('31031685'));

// 3.1 

const nams = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>  arr.some((nomes) => nomes === name);


console.log(hasName(nams, 'Brun'));

//4.1

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => {
  return b.age - a.age;
});

console.log(people);