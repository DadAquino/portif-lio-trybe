# .filter e .map  

## .filter

**Retornará outro array com todos os elementos que satisfaçam à condição verificada pela função.**

``` javaScript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]
```

***O retorno é um novo array com os dois números pares vindos do array numbers.***


**Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.**

``` javaScript
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
```

***

## .map

### O método map executa a função recebida por parâmetro para cada elemento de um array e retorna o resultado em um novo array, sem modificar o original.


***Obs: podemos usar um loop for para a maioria das aplicações .map, porém o .map deixa o código mais limpo, além de evitar erros, lembrando que o uso de cada uma das opções depende da aplicação.***


**Exemplo de aplicação com o uso de for:**

``` javaScript
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);
```

**Mesmo exemplo usando array.map**

``` javaScript
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
```


###### Qual a diferença, afinal, de map para forEach? São duas principais:

- A função **map** aplica sobre os elementos de um array uma função e retorna um **array novo, sem modificar o original**;

- A função **forEach** não tem tal **restrição**. Ela pode **modificar** o array original e retornar nada por padrão - ela pode **criar** um array novo a partir de um antigo, pode simplesmente **buscar** por um elemento e retorná-lo, **pode não retornar nada**, enfim! Ela é **genérica** e pode fazer diversas coisas.

___Obs: Pense sempre que o forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!___


