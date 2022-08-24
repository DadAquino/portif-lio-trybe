function arrayOfNumbers(vetor){
// variavel que recebera o vetor
    let array = [];
    let arrayNovo = [];
// for para copiar os númros do array
    for(let key in vetor){
        array[key]=vetor[key];
    }

// loop for pra perceorrer o array, for dentro de for
 let contador=0;
    for(let i=0;i<array.length;i+=1){
        for(let key in array[i]){
            if(array[i][key]%2==0){
                arrayNovo[contador]=array[i][key];
                contador+=1; } } }
    console.log(arrayNovo);

    


}










let vector = [[1, 2], [3,4,5,6], [7,8,9,10], [12, 13, 15, 17, 20], [22, 26, 28]];
arrayOfNumbers(vector);