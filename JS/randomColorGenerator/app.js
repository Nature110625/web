let body=document.querySelector("body");

function setColor(){
    counter++;
    if(counter>1){
        let oh4=document.querySelector("h4");
        oh4.remove();
    }
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    let box=document.querySelector(".colour");
    box.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    let h4=document.createElement("h4");
    h4.innerText=`The color generated is rgb(${r}, ${g}, ${b})`;
    box.insertAdjacentElement('beforebegin', h4);
}
let counter=0;
let btn=document.querySelector("button");
btn.addEventListener("click", setColor)