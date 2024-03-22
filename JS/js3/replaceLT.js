let name="ApnaCollege";
let new_name=name.slice(4).replace('l', 't').replace('l', 't');
console.log(new_name);

let startArray=['January', 'July', 'March', 'August'];
startArray.shift();
startArray.unshift(startArray[0]);
startArray[1]='June';
console.log(startArray);

let startArray1=['January', 'July', 'March', 'August'];
startArray1.splice(0,1);
startArray1.splice(1, 0, 'June');
console.log(startArray1);

let arr=['C', 'C++', 'html', 'javascript', 'python', 'java', 'C#', 'sql'];
if(arr.includes('c'))
    console.log("The element exist in array");
else
    console.log("The element is not present in array");
let index=arr.reverse().indexOf('javascript');
console.log(index);

let ttt=[['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
ttt[0][1]='O';
console.log(ttt);

let arrQ1=[1, 2, 5, 3, 0];
console.log(arrQ1.slice(0, 3));
console.log(arrQ1.slice(-3));

let str="";
if(str.length==0)
    console.log("The string is empty.");
else
    console.log("The string is not empty.");

let word="Chaitanya";
let i=3;
if(word[i]>60 && word[i]<=86)
    console.log("The character is in lower case.");
else
    console.log("The character is in lower case.");

