let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior='a';
let menor='askdadkasdadladal';
for (let i=0;i<array.length;i+=1){

    if(maior.length<array[i].length){
        maior = array[i];}

    if(menor.length>array[i].length){
        menor=array[i];}
}
console.log('maior:'+maior, 'menor:'+menor);