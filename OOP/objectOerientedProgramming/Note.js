/* avscript Object Oriented Programming
-------------------------------------------------------------
class
object
abstraction
encapsulation
inheritance
polymorphism


class
-------
These are special types of functions.

class contains class members within a body including methods or constructor.

//function declaration
function functionname(){

}

//class declaration
class classname
{

}

classname always starts with Uppercase alphabet.

class Student{ }

constructor
-------------------
javascript constructor is a special type of method which is used to initialize and create an object.
It is called when the memory is allocated for an object.

use constructor keyword to declare a constructor.
class contains only one constructor.
javscript allows to use parent class constructor through super keyword.


<html>
<head>
<title>Class</title>
</head>
<body>
<script>
class Student
{
constructor(sid,sname)
{
this.sid=sid;
this.sname=sname;
}
display()
{
document.write("student id is ",this.sid+"student name is ",this.sname);
}
}
var std=new Student(101,"srinivas");
std.display();
</script>

</body>
</html>
*/