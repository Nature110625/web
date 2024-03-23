let num1 =parseInt(prompt("enter a number:"));
let op =prompt("enter the operator: (+, -, *, /, %, **)");
let num2 =parseInt(prompt("enter next number:"));
let ans=0.00;
switch(op){
    case '+':
        ans=num1+num2;
        alert(`the sum of numbers = ${ans}`);
        break;
    case '-':
        ans=num1-num2;
        alert("the difference of numbers = "+ans);
        break;
    case '*':
        ans=num1*num2;
        alert("the product of numbers = "+ans);
        break;
    case '/':
        ans=num1/num2;
        alert("the quotient of division of numbers = "+ans);
        break;
    case '%':
        ans=num1%num2;
        alert("the remainder of division of numbers = "+ans);
        break;
    case '**':
        ans=num1**num2;
        alert("number one raise to number two = "+ans);
        break;
    default:
        alert("invalid operator");
        break;    
}