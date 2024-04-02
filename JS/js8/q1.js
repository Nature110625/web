let arr=[1000, 10, 30, 20, 40, 50, 60, 70, 80, 90, 100];

//finds if every number in array is divisible by 10
let flag=arr.every((el)=>{
        if(el%10==0) 
            return true;
    });
if(flag)
    console.log("Each element of array is divisible by 10.");

//finds the minimum of each element
let min=arr.reduce((res, el)=>{
    if(res>el)
        return el;
    else
        return res;
});
console.log(`The smallest of given numbers is: ${min}`);

//squares and sums the elements of array
let ans=arr.reduce((res, el)=>res+el**2, 0);//first element of array is value of res and is not operated on we can set initial value to 
                                            //operate all element of array
console.log(`the squared sum of array elements is: ${ans}`);
console.log(`the average of squared sum: ${ans/arr.length}`);

//creates new array by adding five to each elements of given array
let narr=arr.map((el)=> el+5);
console.log(narr);

//creates new array by converting each elements of given array into lower case
let str=["Tripti Raman Jha", "Preeti Jha", "Niharika", "Chaitanya", "Prakriti"];
let nstr=str.map((el)=>el.toUpperCase());
console.log(nstr);

//creates new object literals by 
let obj1={
    name: "Prakriti",
    degree: "intermediate",
    languages: ["Hindi", "English", "C", "C++", "Python", "Js", "HTML", "CSS"],
    height: "5 foot 6 inch",
};
let obj2={
    hobby: "drawing",
    fav_colour: "Blue"
};
mergeObject(obj1, obj2);
function mergeObject(ob1, ob2){
    let obj3={...ob1, ...ob2};
    console.log(obj3);
}

function doubleAndReturnsArgs(arr, ...arg){
    let args=arg.map((el=>el*2));
    let narr=[...arr, ...args];
    return narr;
}
console.log(doubleAndReturnsArgs(arr, 4, 5, 7, 0, 4));

