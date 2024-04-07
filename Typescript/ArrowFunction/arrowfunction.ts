//arrow function without any parameter
let showmessage = () => {
    console.log("Hello World!");
}
showmessage();

//arrow function with one parameter
let display = (message:string) => {
    console.log ("Welcome to the arrow function, " ,message);
}
display("Dilli");

//arrow function with two parameters
let show = (fname:string, lname:string) => {
    console.log("Hello " + fname + " " + lname);
}
show("Dilli", "Subba");

//arrow function with three parameters
let result = (num1:number, num2:number, num3:number) => {
    console.log("Total is " +(num1+num2+num3));
}
result(10,20,30);

//arrow functionwith two parameters and with return type.
let sum = (num1:number, num2:number): number => {
    return num1+num2;
}
console.log(sum(500,200));