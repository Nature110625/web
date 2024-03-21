let num1 =prompt("enter a number:");
let op =prompt("enter the operator:");
let num2 =prompt("enter next number:");
let ans=0.00;
switch(op){
    case '+':
        ans=num1+num2;
        console.log("the sum of numbers = ",ans);
        break;
    case '-':
        ans=num1-num2;
        console.log("the difference of numbers = ", ans);
        break;
    case '*':
        ans=num1*num2;
        console.log("the product of numbers = ", ans);
        break;
    case '/':
        ans=num1/num2;
        console.log("the quotient of division of numbers = ", ans);
        break;
    case '%':
        ans=num1%num2;
        console.log("the remainder of division of numbers = ", ans);
        break;
    case '**':
        ans=num1**num2;
        console.log("number one raise to number two = ", ans);
        break;
    default:
        console.log("invalid operator");
        break;    
}