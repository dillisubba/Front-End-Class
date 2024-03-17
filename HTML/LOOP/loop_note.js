Nested if..else
---------------------
syntax:
----------
if(expression)
{
//statements;
}
else if(expression)
{
//statements;
}
else
{
//statements;
}

----------
Initialize three numbers and display greatest number.

var num1=100, num2=190,num3=280;
if(num1>num2 && num1>num3)
{
document.write(num1+"greatest number");
}
else if(num2>num1 && num2>num3)
{
document.write(num2+"greatest number");
}
else
{
document.write(num3+"is greatest number");
}
--------

switch case
-----------------
It compares values of a variable against multiple constant values which variable has.

syntax:
-----------
switch(variablename)
{
case constantexpression1:
//statements;
break;
case constantexpression2:
//statements;
break;
....
...
...
default:
//statements;
break;
}
----------
display century if num1 is 100 , double century if num1 is 200, tripple century if num1 is 300,..

var num1=100;
switch(num1)
{
case 100:
document.write("Century");
break;
case 200:
document.write("Double century");
break;
case 300:
document.write("Tripple century");
break;
default:
document.write("Enter correct century");
break;
}
------------------

//Loop--means repitition of a sequence of statements.
-------
A loop is a sequence of instructions repeated more than once.

while loop
do..while loop
for loop--(best and common loop) 1

initialization
condition
increment/decrement

while loop
----------------
It is a pre-test condition. First only it will check the condition, if the condition is true then only it will execute the statements. if the condition is false it will not execute the statements.

syntax:
-----------
initialization;
while(condition)
{
//statements;
increment/decrement;
}
------------
Display numbers 1 to 5.

var num1=1; //initialization
while(num1<=5) //condition // 1<5y 2<5y 3<5y4<5y 5==5y 6<=5n
{
document.write(num1); //1 2 3 4 5
num1++; // num1++ means num1=num1+1; //increment //2 3 4 5 6
}
-------
do..while
-----------------
If we want to execute the statements atleast once without checking the condition then we can use do..while loop.
syntax:
---------
initialization;
do
{
//statements;
increment/decrement;
}while(condition);

----
Display 1 to 5 numbers.
var num1=1; //initialization;
do
{
document.write(num1); //1 2 3 4 5
num1++; //2 3 4 5 6
}while(num1<=5); //condition 2<=5y 3<=5y 4<=5y 5==5y 6<=5n
----------
for loop
-----------
syntax:
----------
for(initialization;condition;increment/decrement)
{
//statements;
}
Display 1 to 5 numbers
for(var num1=1;num1<=5;num1++)
{
document.write(num1); // 1 2 3 4 5
