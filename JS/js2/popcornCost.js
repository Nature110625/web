let pcType=prompt("enter the size of popcorn: ");
switch(pcType){
    case "S": 
        alert("You have to pay Rs.50");
        break;
    case "M":
        alert("You have to pay Rs.100");
        break;
    case "L":
        alert("You have to pay Rs.200");
        break;
    case "XL":
        alert("You have to pay Rs.250");
        break;
    default:
        alert("invalid size.");
}
