//create a Function that returns the concatenation of all strings in an array
let strArray=["My ", "name ", "is ", "Prakriti. ", "I ", "have ", "one ", "brother ", "and ", "one ", "sister."];
let sen=conArr(strArray);
console.log(sen);

function conArr(arr){
    let sen="";
    for(items of arr){
        sen+=items;
    }
    return sen;
}