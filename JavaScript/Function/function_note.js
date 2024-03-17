Functions
----------------
A function is a block of code which is used to perform a specific task.

Functions are of two types
---------------------------------------
1. Built-in functions
2. User defined functions.


1. Built-in functions
------------------------------
isNaN() - It helps to check whether the given value is not a number.
document.write isNaN(56);// it should display 'true'
document.write isNaN("Hello");//it should display 'false'

parseInt()- This function parses the string argument and returns an integer.
document.write parseInt("10");// it should display 10

parseFloat() - This function parses the string argument and returns an floating point number.
document.write parseFloat("67.8789");// it should display the number 67.8789


eval() - This function evaluates an argument.
document.write eval(4*3);// it should display the product 12

--------------------


user defined functions
----------------------------------
Which we create according to our requirement.

//create a function

function functionname(with or without arguments)
{
//statements;
}

eg:
function display()
{
document.write("welcome to functions");
}


//call the function

functionname(with or without argumetns);
eg:
display();
--------
<script>
//create a function without parameters
function display()
{
document.write("welcome to functions ");
}
//call function
display();
</script>
--------

//function with parameters
---------------------------------------
//create a function with a parameter

function show(fname)
{
document.write("welcome"+fname);
}

//call the function
show("srinivas");

-------------------
//create a function with two parameters
function Add(num1, num2)
{
document.write("total is "+(num1+num2));
}
Add(34,56);
---------

//create a function with two parameters and return value.

<script>
function add(num1, num2)
{
return num1+num2;

}
var result=add(3,4);
document.write(result);
(or)
document.write(add(3,4);

add(3,4);
</script>

---------------------------]
Anonymous function
--------------------------------
A function which does not have any name.


var result=function(){
document.write("welcome to anonymous functions");
}

result();
--------------------
Arrow function
----------------------
( ) => { }

( )=> {
document.write("welcome to arrow functions");
}
Arrow function is ES6 standards.

Arrow functions are anonymous functions means a function without any name but it is assigned to a variable. we can also call as lambda expressions.

//anonymous functions
var show=function(){
document.write("welcome");
}

//arrow functions
var result= ( ) => {
document.write("arrow functions");
}

result();
--------------------------
let is local scope.
var is global scope.


//arrow functions
let result= ( ) => {
console.log("arrow functions");
}

