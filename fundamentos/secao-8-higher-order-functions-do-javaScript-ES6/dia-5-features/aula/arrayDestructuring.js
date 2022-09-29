const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [text, func] = saudacoes;
func(text);

// segundo exercicio

let comidaa = 'gato';
let animall = 'água';
let bebidaa = 'arroz';

let org = [comidaa, animall, bebidaa];

const [animal, bebida, comida] = org;

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo



// terceiro exercicio

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [ , , , n, n2, n3, n4] = numerosPares;
const pares = [n ,n2, n3, n4];
numerosPares = pares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo



// quartoo execicio

const getNationality = ({ firstName, nationality = 'brazillian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person))

// quinto exercicio

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

  // quinto exercicio

  const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number*value;
  };
  
  console.log(multiply(8, 2));