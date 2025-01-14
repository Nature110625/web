function sum(num) {
    let ans=0;
    for (; num>0; num=Math.floor(num/10))
        ans+=num%10;
    return ans;
}
function genNum(n){
    return 942;
    // return (Math.floor(Math.random()*1000)));
}

export {sum, genNum};