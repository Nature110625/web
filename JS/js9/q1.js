let body=document.querySelector("body");
console.dir(body);

let np=document.createElement('p');
body.appendChild(np);
np.style.color='red';
np.innerText="Hey I'm red";
let h3=document.createElement('h3');
body.append(h3);
h3.style.color='blue';
h3.innerText="Hey I'm blue";
let div=document.createElement('div');
body.append(div);
div.classList.add('box')
let divh1=document.createElement('h1');
div.appendChild(divh1);
divh1.innerText="I'm in a div";
let divp=document.createElement("p");
div.appendChild(divp);
divp.innerText="ME TOO!";

//create a new input and button element on the page using Js
//set the button to "Click me"
let input=document.createElement("input");
let btn=document.createElement("button");

body.appendChild(input);
body.appendChild(btn);

btn.innerText="Click me!";
input.placeholder="username";
btn.id="btn";
console.dir(btn);

let btn2=document.querySelector("#btn");
btn2.classList.add("cc");

//create an h1 element
let h1=document.createElement("h1");
body.appendChild(h1);
h1.innerText="DOM Practice";
h1.classList.add("h1style");

//create a paragraph tag
let p=document.createElement("p");
body.appendChild(p);
p.innerHTML="Apna College<b> Delta </b>Practice where Delta is bold";


//js part 10 pq question2
let heading=document.createElement("h3");
let inp=document.createElement("input");
body.appendChild(heading);
body.appendChild(inp);
inp.addEventListener("keydown", (event)=>{
    let val=event.key;
    if(val==" "){
        let value=heading.innerText+"0";
        heading.innerText=value;
    }
    else if(((val>='A' && val<='Z') || (val>='a' && val<='z')) && val.length==1){
        heading.innerText=heading.innerText+val;
    }
    console.log(event.key)
});