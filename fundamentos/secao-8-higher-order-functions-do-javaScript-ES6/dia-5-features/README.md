# Features do ES6

Hoje você vai aprender sete features do ES6 que são muito úteis na hora de desenvolver uma aplicação:

- spread operator;
- parâmetro rest;
- object destructuring;
- array destructuring;
- default destructuring;
- abbreviation object literal;
- default params.


##Spread Operator

Spread Operator - espalha os elementos pelo array, sem alterar o array original.

``` javaScript
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
```

Outro uso interessante do spread é no **argumento de uma função** que recebe **vários parâmetros**. Temos uma função que calcula o IMC. A função recebe como parâmetros o peso e a altura da pessoa e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:

``` javaScript
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
```


**Spread Operator com objetos**:

``` javaScript
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };

console.log(customer);

// resultado 

{
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
}

```

Dessa forma, apenas **copiamos** as informações do **array original** e colamos em **outro lugar**.



##Parâmetro Rest

O parâmetro rest é uma feature do ES6 que permite que você crie funções que recebam um **número variável de argumentos**. Os argumentos que serão passados como parâmetro são **salvos em um array que pode ser acessado de dentro da função**, o que te permite usar métodos como o **.length**. 

``` javaScript
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
```

sum calcula a soma de todos os argumentos passados a ela - independente do número. Como o parâmetro rest “empacota” todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro desse array.


##Object Destructuring

ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de **desestruturação de objeto**, ou **object destructuring**

``` javaScript
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};


const { name } = product;
console.log(name); // Smart TV Crystal UHD
```

Para extrair um elemento de um **objeto dentro de outro objeto**, use a seguinte sintaxe:

```javaScript
// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
```

##Array Destructuring

Arrays são objetos iteráveis que têm algumas similaridades com os objetos em Javascript. Podemos desestruturar arrays usando a notação para array destructuring, que serve para acessar valores de um objeto e atribuí-los a variáveis.


```javaScript
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```

**com array destructuring:**

```javaScript
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```

##Default Destructuring

Quando tentamos destructurar um valor do objeto ou array que não existe:

```javaScript
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;
```

O valor **padrão** pra esses casos é **undfined**.

No **ES6** podemos **atribuir um valor** a esse elemento, da seguinte forma:

```javaScript
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian
```
***obs: a mesma coisa pode  ser feita com arrays***

##Object Property Shorthand

feature **property shorthand** elimina: podemos simplesmente substituir **id: id** por id que o **Javascript** entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:

```javaScript
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```

##Default Parameters

``` javaScript
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome pessoa usuária!
```
No **ES6** temos uma feature que permite **atribuir um valor padrão ao parâmentros passados**, logo se **não houver valor enviado pela chamada da função** a resposta **será a padrão escolhida**;


















