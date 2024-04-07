//arrow function without any parameter
var showmessage = function () {
    console.log("Hello World!");
};
showmessage();
//arrow function with one parameter
var display = function (message) {
    console.log("Welcome to the arrow function, ", message);
};
display("Dilli");
//arrow function with two parameters
var show = function (fname, lname) {
    console.log("Hello " + fname + " " + lname);
};
show("Dilli", "Subba");
//arrow function with three parameters
var result = function (num1, num2, num3) {
    console.log("Total is " + (num1 + num2 + num3));
};
result(10, 20, 30);
//arrow functionwith two parameters and with return type.
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(500, 200));
