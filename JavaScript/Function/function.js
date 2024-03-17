//functions can be used in three cases;
//1.innerHTML
//2. document.write
//3. window.alert

//ES5 = var
//ES6 = let, const


function add(a,b){
    return a + b;
}

document.write(add(200, 100));
document.write('<br');

//anonymous functions, arrow functions & events



//anonymous functions- function without name
var f = function foo(){
    console.log('Hello!');
}
f();
// yo muni chai foo function lai naliyera,,,anonymous vayecha
var f = function(){
    console.log('Hello!');
}
f();

document.write('<br>');
f = 1;
f(); //f is not a function.
document.write('<br>');

//arrow function-ES6 Standard
function sum(a,b){ // named function with multiple parameters
    return a + b
}
//arrow function banaunu lai
let sum2 = (a,b)=> a + b




//This is only normal function
function isPositive(number){ //named function with one parameter
    return number >=0
}
//converting to arrow function
let isPositive2 = number => number >= 0


function randomNumber(){ //named function with no parameters
    return Math.random
}
//converting to arrow function
let randomNumber2 = () => Math.random


document.addEventListerner('click', function() { // anonymous function
    console.log('click')
})
//converting to arrow function-no paramater
document.addEventListerner('click', () => console.log('click'))




