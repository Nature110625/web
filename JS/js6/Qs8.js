let str="avgdhghfghjhdghahhieiutuhgjdbvj";
let sum=printUniqueElement(str);
console.log(sum);

function printUniqueElement(arr){
    let ans=[];
    for(el of arr){
        if(!present(el))
            ans.push(el);
    }
    return ans;
    function present(val){
        for(char of ans){
            if(char==val)
                return true;
        }
        return false;
    }
}

let country=["India", "Pakistan", "Afganistan", "Iran", "Iraq", "United State of America", "United Kingdom"];
console.log(lar_country(country));
function lar_country(con){
    let lar=con[0];
    for(c of con){
        if(c.length>lar.length){
            lar=c;

        }
    }
    return lar;
}


let string='apple is a fruit, so is mango. we need oxygen, so do animals.';
console.log(vowelCounter(string));
function vowelCounter(str){
    let count=0;
    for(al of string){
        if(al=='a' || al=='A' || al=='e' || al=='E' || al=='i' || al=='I' || al=='o' || al=='O' || al=='u' || al=='U')
            count++;
    }
    return count;
}

let st=1, end=4;
let rnum=function() {
    return (parseInt(Math.random()*(end-st+1))+st);
}
console.log(rnum());
