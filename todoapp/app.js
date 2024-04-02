let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click", addTask);
function addTask(){
    let li=document.createElement("li");
    let delBtn=document.createElement("button");

    ul.appendChild(li);
    li.innerText=input.value;
    input.value="";

    li.appendChild(delBtn);
    delBtn.innerText="delete";
    delBtn.classList.add("del");
}

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON')
        event.target.parentElement.remove();
    // console.log(event.target.nodeName);
});

// let delBtns=document.querySelectorAll(".del");
// for(let i=0; i<delBtns.length; i++){
//     delBtns[i].addEventListener("click", function (){
//         // console.log("element deleted");
//         let ptr=this.parentElement;
//         ptr.remove();
//     });
// }
