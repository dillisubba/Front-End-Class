Exception Handling
-----------------------------
It is a process or method which is used for handling the abnormal statements in the code and execute them.

In exception handling we have a throw statement which is used to raise an exception.

The throw statement is handled by writing the code into the try..catch block.

If an error is present , the catch block will execute otherwise the try block statement is executed.


Types or Errors
------------------------
Syntax errors
-------------------
When an user makes a mistake in predefined syntax or a program.

Runtime errors
----------------------
When an error occurs during program execution .

Logical errors
-------------------
An error which occurs when there is a logical mistake in the program.


try...catch
----------------
A try..catch is commonly used statement in different programming language .
It is used to handle the error.

try{
}
This code which needs possible error testing is kept in the try block.

catch( ){
}
This catch block handles the error of the code by executing the statements.

syntax:
---------
try{
//statements or expressions
}
catch(error){
//statements or expressions
}
---------



<html>
<head>
<title>Exception handling</title>
</head>
<body>
<script>
try{
var num1=10;
var num2=0;
var result=num1/num2;
document.write(result);
}
catch(error)
{
document.write(error.message);
}
</script>
</body>
</html>



<html>
<head>
<title>Exception handling</title>
</head>
<body>
<script>
try{
var numbers=[25,45,11,78,23];
document.write(numbersex);
}
catch(ex){
document.write("Error occured");
}
</script>
</body>
</html>



<html>
<head>
<title>Exception handling</title>
</head>
<body>
<script>
try{
var marks=prompt("Enter marks between 0 and 100");
if(marks>0 && marks<=100){
document.write("Marks are :",marks);
}
else{
//throw keyword is used to raise an error
throw new Error("Enter valid marks");//message
}
}
catch(ex){
document.write("Error occured"+ex.message);
}
finally{
document.write("finally block executed");
}
</script>
</body>
</html>