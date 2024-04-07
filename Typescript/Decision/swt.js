var num1 = 5;
var num2 = 10;
var symbol = 2; //changing cases for finding value
switch (symbol) {
    case 1:
        console.log("Total is " + (num1 + num2));
        break;
    case 2:
        console.log("Diffrence is " + (num1 - num2));
        break;
    case 3:
        console.log("Product is " + (num1 * num2));
        break;
    case 4:
        console.log("Quotient is " + (num1 / num2));
        break;
    case 5:
        console.log("Remainder is " + (num1 % num2));
        break;
    default:
        console.log("Invalid");
        break;
}
