//Normal function
function sum(num1:number, num2:number){
    console.log("Sum of  two numbers is: " + (num1+num2));
}

sum(10,20);


console.log("-----------");

//Default parameter
function add(num1:number, num2:number=50){     // here second argument is a default value
    console.log("Sum of  two numbers is: " + (num1 + num2))
}
add(100);// here eventhough i only gave one value, it pulled the default value from the arguments.
add(200, 400);// here default value is disregarded because of two values provided.