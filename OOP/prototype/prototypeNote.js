Prototype object
----------------------

Javascript is a prototype based language where the objects can acquire properties and features from one another. Each object contains a prototype object.

In javascript whenever a function is created the prototype property is added to that function automatically.
This property is a prototype object which holds a constructor property.

syntax:
---------
classname.prototype.methodname;

Whenever an object is created in javascript , its corresponding functions are loaded into the memory.
A new copy of the function is created on each object creation.

class First{
display(){
document.write("welcome");
}

show(){
document.write("show");
}
}
var f1obj=new First();
f1obj.display();
f1obj.show();

var f2obj=new First();
f2obj.display();
f2obj.show();
-----

In prototype based approach , all the objects share the same function.
It will ignore the requirement of creating a new copy of function for each object.
The functions are loaded once into the memory.


f1obj \
display(), show()
f2obj /

--------
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prototype example</title>
</head>
<body>
<script>
function Student(firstname,lastname)
{
this.firstname=firstname;
this.lastname=lastname;
}

//create prototype
Student.prototype.fullname=function()
{
return this.firstname+" "+ this.lastname;
}
var stdobj1=new Student("srinivasa","rao");
document.write("full name is :"+stdobj1.fullname());

</script>
</body>
</html>
-------------------------
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prototype add</title>
</head>
<body>
<script>
function Add(num1,num2)
{
this.num1=num1;
this.num2=num2;
}
//create prototype
Add.prototype.Totalresult=function(){
return this.num1+this.num2;
}
var sumobj=new Add(5,6);
document.write("total is ",sumobj.Totalresult());
</script>
</body>
</html>
------------------


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prototype add</title>
</head>
<body>
<script>
function Add(num1,num2)
{
this.num1=num1;
this.num2=num2;
}
//create prototype
Add.prototype.Totalresult=function(){
return this.num1+this.num2;
}
var sumobj=new Add(5,6);
document.writeln("total is ",sumobj.Totalresult()+"<br/>");
var sumobj=new Add(15,5);
document.writeln("total is ",sumobj.Totalresult()+"<br/>");
var sumobj1=new Add(15,16);
document.writeln("total is ",sumobj1.Totalresult()+"<br/>");
</script>
</body>
</html>