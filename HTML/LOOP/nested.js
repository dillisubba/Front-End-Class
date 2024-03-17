// Nested Expression--follow note4.js
var x = 10;
var y = 20;
var z = 30;

 if(x>y && x>z)
 {
    document.write(x +"greatest number");

 }
 else if(y>x && y>z)
 {
    document.write(y+"greatest number");
 }
 else{
    document.write(z+"greatest number");
 }

 document.write("<br>");

var x = 1000;
var y = 200;
var z = 300;
var a = 100;

 if(x>y && x>z && x>a)
 {
    document.write(x+"greatest number");
 }
 else if(y>x && y>z && y>a)
 {
    document.write(y+"greatest number");
 }
 else if(z>x && z>y && z>a)
 {
    document.write(z+"greatest number");
 }
 else if(a>x && a>y && a>z)
 {
    document.write(a+"greatest number");
 }

 document.write("<br>");

 //Switch Case--follow note4.js

 //Display decade if value x is 10, two decades if value x is 20, three decades if value x is 30
 var x = 20;


 switch(x)
 {
 case 10:
 document.write("Decade");
 break;
 case 20:
 document.write("Two decades");
 break;
 case 30:
 document.write("Three decades");
 break;
 default:
 document.write("Enter correct decade");
 break;
 }

 