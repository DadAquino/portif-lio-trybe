function listaDeFrutas (fruit){
  // declaracao de variaveis para usar no loop  
    
    let lista = ['frutas'];
    let frutas = [];


// loop para atribuir lista a nossa variável

    for(let key in fruit){
        frutas[key]=fruit[key];
    }
   

// loop para correr o array e adicionar palavras novas ao novo array

    for (let i=0;i<frutas.length;i+=1){
        let contador=0;

        for(let key in lista){
            if(lista[key]===frutas[i]){
                contador+=1;}}
    if(contador==0){
    lista.push(frutas[i]);  }}

//array para armazenar os numeros;

// loop para contar quantas vezes a palavra aparece
        for(let i=0;i<lista.length;i+=1){
            let contador = 0;
            for(let j=0;j<frutas.length;j+=1){
                if(lista[i]==frutas[j]){
                    contador+=1; }}
        lista[i]=[lista[i], contador];
        }
// retorno

        return 'Sua cesta possui: '+lista[1][2];
}













const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  console.log(listaDeFrutas(basket));