let h2=document.querySelector('h2');
let gameSeq=[];
let userSeq=[];
let btns=['y', 'b', 'g', 'm'];
let started=false;
let level=0;

document.addEventListener("keypress", function(){
    if(!started){
        // console.log("hii");
        levelUp();
        started=true;
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function btnUserFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranbtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp, 1000);
    }
    else{
        h2.innerHTML=`Game Over: your score was<b>${level-1}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 250);

        reset();
    }
}

function btnPress(){
    let btn=this;
    btnUserFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".colour");
for(bt of allBtns){
    bt.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}