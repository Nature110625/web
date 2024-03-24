let f=1, num=parseInt(prompt("Enter a number: "));
for(let i=num; i>1; i--)
    f*=i;
console.log(`The factorial of ${num} = ${f}`);