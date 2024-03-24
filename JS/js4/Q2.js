let ndig=0;
let num=parseInt(prompt("enter a number: "));
for(let i=num; i>0; i=Math.floor(i/10))
    ndig++;
console.log("No. of digit =", ndig);