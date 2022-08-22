let n = 5;
for (i=1;i<=5;i+=1){
    let print='';

    for(let j=4;j>=i;j-=2){
        print+="*";}
    
    for(k=1;k<=i;k+=1){
        print+=' ';}
    
    for(let j=4;j>=i;j-=2){
        print+="*";}


        if(i%2==!0){
    console.log(print);}
    }
