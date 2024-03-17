javascript closures
------------------------------
Closure can be defined as a javascript feature in which the inner function has access to the outer function variable.

function A(){
function B()
{

}
}




//Example
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Closures</title>
</head>
<body>
<script>
function First(){
var num1=10; //local variable of First function
function Second(){ //closure
return num1;
}
return Second;
}
var result=First(); //result variable is like a function
document.write(result()+"<br/>");
document.write(result());
</script>
</body>
</html>