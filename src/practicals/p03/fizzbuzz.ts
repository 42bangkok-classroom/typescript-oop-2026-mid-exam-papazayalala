// Write your code below
const a : number =Number(process.argv[2]);
if ( isNaN(a) || a <=0 ){
}
else{
    for (let i =0 ; i<a;i++){
        let b=i+1;
        if(b%3==0 && b%5==0){
            console.log("FizzBuzz");
        }
        else if(b%3==0){
            console.log("Fizz");
        }
        else if(b%5==0){
            console.log("Buzz");
        }
        else{
            console.log(b);
        }
    }
}