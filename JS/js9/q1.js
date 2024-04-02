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