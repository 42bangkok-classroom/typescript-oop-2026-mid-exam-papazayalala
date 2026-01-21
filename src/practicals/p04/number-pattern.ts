// Write your code below
/*
const N : number =Number(process.argv[2]);
if ( isNaN(N) || N <= 0 ){
}
else{
    let space ="";
    for(let i=1 ; i<N ; i++){
        let k =- N;
        for(let l=1 ; l<= (N-1) ;l++){
            space +="*";
        }
        for(let w=1 ; w<=i ; w++){
            space += i;
        }
        space += "\n";
    }
    console.log(space);
}
*/
const N : number =Number(process.argv[2]);
if ( isNaN(N) || N <= 0 ){
}
else{
let pattern = "";      
    for (let i = 1; i <=N; i++) {    
        for (let j = 1; j <= (N-i); j++) {    
            pattern += " ";
        }

        for (let k = 1; k <= i; k++) { 
            pattern += k;
        
        }   
        pattern += "\n";   
    }
    console.log(pattern);  

}