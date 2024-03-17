Javascript Hoisting
----------------------------
Hoisting is a mechanism in javascript which moves the declaration of variables and functions at the top.
We can use variables and functions before declaring them.

javascript hoisting is applicable only for declaration not initialization.
It is required to initialize the variables and functions before using their values.

regular
----------
var x;
x=10;
document.write(x);


hoisting
----------
document.write(x);
var x;
x=90;



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hoisting</title>
</head>
<body>
<script>
document.write(total(50,20));
function total(num1,num2)
{
return num1+num2;
}
</script>
</body>
</html>