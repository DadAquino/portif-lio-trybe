#JavaScript Assíncrono - Fetch API e async/await

A comunicação com serviços de terceiros é parte do dia a dia de qualquer pessoa que programa. Seja para coletar tweets, seja para abrir um mapa do Google Maps, seja até mesmo se comunicar com um banco de dados ou serviço interno da organização, **APIs são sempre** a forma de se fazer isso. Entender o que são e como usá-las, isto é, **como fazer sua aplicação se comunicar com elas**, é absolutamente **fundamental**.

***Em resumo a API é responsável pelo controle dos pontos de acesso a eles, por meio de um conjunto de rotinas e padrões de programação.***

###O que é JSON e por que o usamos?

JSON significa **JavaScript Object Notation** e é basicamente uma forma de representarmos dados como objetos Javascript:

``` javaScript
{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
```

Apesar do nome, ele **não é um objeto JavaScript**, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzi-lo para que fique a par da linguagem que estamos usando. Para isso existe a **função JSON.parse()**, assim como existe a função **JSON.stringify()**, que transforma uma estrutura **JavaScript em string**.

###Como utilizar APIs na minha aplicação?

Para utilizá-las siga as boas práticas a seguir:

- Encontre uma API pública que seja bem documentada e mantida;
- Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
- Entenda o formato dos dados disponíveis;
- Faça requests e receba responses da API com os dados que você deseja receber.

***

###Promises

- As **Promises são assíncronas**, ou seja, elas têm um espaço especial para sua execução sem que travem o fluxo de outras funções;

- As **Promises têm “superpoderes”**, isto é, funções extras que facilitam o controle do fluxo assíncrono;

- As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um **Construtor**.

**As Promises possuem três estados:**

- **Pending** (pendente): estado inicial. Significa que ela está em execução;
- **Fulfilled** (resolvida): estado de sucesso. Significa que tudo deu certo e foi retornado o valor de sucesso;
- **Rejected** (rejeitada): estado de rejeição. Significa que algo deu errado e foi retornado o erro que gerou essa rejeição.



***Para resolver o problema de assincronicidade:***

.then() .catch() e async/await com try/catch.

Esses métodos vão garantir que o código que estamos desenvolvendo aguarde o retorno de uma Promise antes de executar os próximos passos.

***

###Fetch API

No contexto do Front-end, a maioria dos casos em que você precisa utilizar funções assíncronas ocorrem em requisições.
Um bom exemplo é a função **fetch() da Fetch API!**

A função fetch pode receber dois parâmetros:

1 - URL do serviço alvo da requisição;

2 - E, opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações por agora; nesse início, daremos essas informações para que você se acostume a usar o fetch().

O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também em formato.

A função fetch é responsável por enviar requisições a APIs. Porém essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.

***
