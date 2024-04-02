let num=n=>n*n;
let id=setInterval(()=>{
    console.log("Hello World");
}, 2000);
// setInterval(()=>{console.log("Hello World");}, 2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

let arrayAverage= array=>{
    let sum=0;
    for(items of array){
        sum+=items;
    }
    return sum/array.length;
}

let isEven=n=>{
    if(n%2==0)
        console.log("is even.");
    else
        console.log("is odd.");
}