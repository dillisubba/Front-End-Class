Javascript built-in objects
---------------------------------------
Object
Array
Date
Math
String
Boolean
RegularExpression


Javascript Object
---------------------------
It is an entity which has properties and methods.

Javascript is object based language. Everything is an object in javascript.

Javascript is template based but not class based.
It is not required to create class to get the object.
we can directly create objects.

Create objects in Javascript
-----------------------------------------
1. By object literal
2. By creating an instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword).


1. By object literal
---------------------------
syntax:
----------
objectname={property1:value1,property2:value2,...};

eg:
<script>
student={studentid:1,studentname:"srinivas",studentage:34,studentcourse:"javascript"};
document.write(student.studentid);
document.write(student.studentname);
document.write(student.studentage);
document.write(student.studentcourse);
</script>

----------------
2. By creating an instance of Object (using new keyword)
------------------------------------------------------------
syntax:
----------
var objectname=new Object();
new keyword is used to create an object.

<script>
var student=new Object();
student.studentid=45;
student.studentname="Varun";
student.studentage=23;
student.studentcourse="Html";
document.write(student.studentid);
document.write(student.studentname);
document.write(student.studentage);
document.write(student.studentcourse);
</script>
-------------------

3. By using an object constructor
------------------------------------------------
we should create a function with arguments/parameters.
each and every argument value can be assigned in the current object by using this keyword.

this keyword refers to the current object.

<script>
function student(studentID,studentNAME,studentAGE,studentCOURSE)
{
this.studentid=studentID;
this.studentname=studentNAME;
this.studentage=studentAGE;
this.studentcourse=studentCOURSE;
}
std=new student(198,"shivam",31,"angular");
document.write(std.studentid);
document.write(std.studentname);
document.write(std.studentage);
document.write(std.studentcourse);
</script>

--------------------------