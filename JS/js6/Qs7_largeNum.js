let numArr=[1, 4, 6, 4, 66, 63, 93, 64, 83, 26, 94, 37, 10, 84, 38, 10, 1, 84, 74];
let num=parseInt(prompt("Enter a number:"));
printLarger(num);
function printLarger(n){
    for(items of numArr)
        if(n<items)
            console.log(items);
}