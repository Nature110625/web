let eNum=parseInt(prompt("Enter a number:"));
console.log(`The table of number ${eNum}:`);
function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(eNum);