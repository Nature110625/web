const maxNum=prompt("Enter the maximum number upto which you want to guess: ");

let rNum=Math.floor(Math.random()*maxNum)+1;

let uans=prompt(`Enter your guess: `);

let flag=true;
for(let i=0; flag; i++){
    if(uans=="quit"||uans=="Quit"||uans=="q"||uans=="Q"){
        flag=false;
        console.log(`You Quit!!.... The random number is: ${rNum}`);
    }
    else if(uans==rNum){
        flag=false;
        console.log(`You are right, Congratulations!!....Your guess (${uans}) matched with random number (${rNum})`);
    }
    else if(uans>rNum)
        uans=prompt("Your guess is larger. Try again:");
    else if(uans<rNum)
        uans=prompt("Your guess is smaller. Try again:");
}
