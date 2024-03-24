let arr=[1, 2, 3, 4, 5, 6, 2, 3], num, i=0;
console.log(arr);
num=prompt("Enter the num you want to find: ");
for(n of arr){
    if(n==num)
        arr.splice(i, 1);
    i++;
}
console.log("-----------List -----------");
console.log(arr);
console.log("----------------------------");