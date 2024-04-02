let uEntry=prompt("To roll a dice enter 'roll':");
if(uEntry=="roll"){
    let rNum=Math.floor(Math.random()*10)+1;
    if(rNum>6)
        rNum-=4;
    console.log("rolled dice showed: ", rNum);
}
else
    console.log("you choosed not to roll a dice.");
