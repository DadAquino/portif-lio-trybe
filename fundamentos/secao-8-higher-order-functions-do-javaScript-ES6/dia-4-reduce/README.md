# Reduce

O reduce é diferente das outras HOFs: ele recebe **dois parâmetros** sendo o primeiro uma callback e o segundo um valor inicial, **que é opcional**. **O reduce busca reduzir um array**. Isto é, iterando em elementos de um array, como, por exemplo, a soma de todos os elementos de tal array. 

**principais vantagens do uso do método reduce podemos destacar:**

- Escrita de código mais limpo;
- Maior facilidade ao implementar a lógica com a qual se quer trabalhar;
- Melhor manutenção de código.

**Ex:

``` javaScript
reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )

```

A callback, que é o primeiro parâmetro do reduce, também pode receber até quatro parâmetros. Desses quatro parâmetros apenas dois deles devem existir obrigatoriamente, sendo eles o **acc** e o **curr**.

- **acc:** Temos então que acc abreviatura de accumulator ou acumulador, deve obrigatoriamente ser o primeiro parâmetro da callback
- **curr:** abreviatura de currentValue ou valor atual também obrigatório, deve ser o segundo parâmetro da callback.

**Ex:**

``` javaScript
array.reduce((acc, curr) => {
      // escopo de execução da função
}, valorInicial)
```
***Obs:  acc e curr são apenas nomes costumeiros, você pode dar o nome que quiser para o seu código, sendo uma boa opção escolher nomes semânticos, de acordo com o que é executado pela função em questão.***

***

### Uso for ou reduce?

**Método for:**
- Necessidade de criar uma variável para acumular o resultado de cada iteração do for, a soma de cada resultado - let sumNumbers;
- Necessidade de setar um valor inicial para variável - sumNumbers = 30;

**Método .reduce:**

- A função callback passada por parâmetro recebe dois parâmetros, o acumulador acc e o elemento do array de cada iteração, curr;
- Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: acc + curr;
- O retorno é salvo no primeiro parâmetro , acc. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria acc = acc + curr;


