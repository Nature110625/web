//Outputs the sum of n natural numbers
let eNum=parseInt(prompt("Enter a number: "));
let sum=0;  

//do sum of n natural numbers
function uptoNsum(num){
    for(let i=num; i>0; i--){
        sum+=i; //lexical scope
    }
}

uptoNsum(eNum);
console.log(`Sum of ${eNum} natural numbers = ${sum}`);