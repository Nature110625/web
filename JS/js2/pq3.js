let num=prompt("Enter a natural number less than 4: ");
switch(num){
    case '1':
        alert("Months in Quarter "+num+" are: January, February, March");
        break;
    case '2':
        alert("Months in Quarter "+num+" are: April, May, June");
        break;
    case '3':
        alert("Months in Quarter "+num+" are: July, August, September");
        break;
    case '4':
        alert("Months in Quarter "+num+" are: Octuber, November, December");
        break;
    default:
        alert("Invalid Entry");
        break;
}