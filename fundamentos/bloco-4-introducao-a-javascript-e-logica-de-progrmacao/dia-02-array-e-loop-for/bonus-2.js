let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let k=0;k<numbers.length;k+=1){

    for(let i=0;i<numbers.length;i+=1){
        let j=i+1;
            if(numbers[j]>numbers[i]){
                let n=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=n;
            }
    }
}
console.log(numbers);