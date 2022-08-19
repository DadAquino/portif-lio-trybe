let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n = [];

for(let i=0;i<numbers.length;i+=1){
    let j=i+1
    if(j<numbers.length){
    n[i]=numbers[i]*numbers[j];
    } else{n[i]=numbers[i]*2}
}
console.log(numbers);
console.log(n);