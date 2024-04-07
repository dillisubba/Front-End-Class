//Named function
function display() {
    console.log("Hello World!");
}
display();
//create a function without any parameter
function show() {
    console.log("Welcome to the Typescript Functions!");
}
show();
//function with one parameter
function print(city) {
    console.log("City name is " + city);
}
print("Boston.");
//function with two parameters
function display1(fname, lname, city) {
    console.log("First name is " + fname + " "
        + "and last name is " + lname);
}
;
display1("John", "Doe", "Boston");
//function with three parameters with return type
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(10, 20, 30));
