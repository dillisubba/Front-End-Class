//Normal function
function sum(num1, num2) {
    console.log("Sum of  two numbers is: " + (num1 + num2));
}
sum(10, 20);
console.log("-----------");
//Default parameter
function add(num1, num2) {
    if (num2 === void 0) { num2 = 50; }
    console.log("Sum of  two numbers is: " + (num1 + num2));
}
add(100); // here eventhough i only gave one value, it pulled the default value from the arguments.
add(200, 400);
