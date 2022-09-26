## Hoje você vai conhecer algumas HOFs que são utilizadas com arrays.  

#### Essas funções são bastante poderosas, podendo facilitar muito a manipulação e criação de arrays, resultando em um código mais legível, conciso e expressivo.

- Utilizar **Array.forEach** para iterar sobre todos os elementos de um array;

- Utilizar **Array.find** para encontrar o primeiro elemento de um array que satisfaça a uma condição;

- Utilizar **Array.some** e **Array.every** para testar se os elementos de um array satisfazem a uma condição;

- Utilizar **Array.sort** para ordenar arrays de acordo com algum critério.

***
### **Ex:**
```javaScript
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
```
- arrayOfValues - Nome do array que será percorrido;
- .forEach - A HOF pode ser .find, .some, .every;
- element - Valor do elemento do array;
- (element) => {console.log('Cada elemento do array:', element); - função a ser executada.

### Outro detalhe interessante:

**A arrow function passada para o forEach possui element, index e array como parâmetros, onde:**

- element - Valor do elemento do array;
- index - Índice em cada iteração ou posição do elemento no array, começando do 0;
- array - Array original que está sendo percorrido.

__obs: não necessáriamente devem ser usdaos esses nomes__

___

#### forEach
O forEach percorre o array e executa a função passada para cada um dos seus valores. **O forEach não retorna nenhum valor**.
``` javaScript
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
```

#### find
A **função find** é utilizada para achar o **primeiro** elemento que satisfaça a condição passada. Então a função que deverá ser passada precisa retornar **true ou false**.
``` javaScript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((numeros) => numeros%3 === 0 && numeros%5 === 0);

console.log(findDivisibleBy3And5());
```

#### some e every
As funções são parecidas, o **every** retorna true se **todos** os elementos do array satisfazem a condição.
Já o **some** retorna true se apenas um dos elementos satisfaz a equação.
``` javaScript
const nams = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>  arr.some((nomes) => nomes === name);


console.log(hasName(nams, 'Brun'));
```

#### sort
A função sort tem como objetivo **ordenar** os valores do array, por padrão os elementos são ordenados em ordem **alfabética**, caso o esperado seja a ordem crescente ou decrescente dos elementos do array deve se **espescificar as condições**.
``` javaScript
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => {
  return b.age - a.age;
// o sort compara sempre dois elemetos por vez, e podemos manipular a comparação, retornando valores positivos ou negativos, como no exemplo acima.
});

console.log(people);
```


