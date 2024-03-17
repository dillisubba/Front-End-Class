/* Javascript Array
--------------------------
It is an object which represents a collection of similar type of elements.

1. By array literal

2. By creating an instance of Array directly (using new keyword)

3. By using Array constructor (using new keyword)



1. By array literal
---------------------------
array index or subscript starts from zero.
syntax:
-----------
var arrayname=[value1,value2,.....];

eg:
var studentnames=["kiran","krishna","john","wesley"];
document.write(studentnames[0]);
document.write(studentnames[1]);
document.write(studentnames[2]);
document.write(studentnames[3]);

or

var studentnames=["kiran","krishna","john","wesley"];
for(var i=0;i<studentnames.length;i++)
{
document.write(studentnames[i]);
}

--------
2. By creating an instance of an Array (using new keyword)
-------------------------------------------------
var arrayname=new Array();
new keyword is used to create an instance of an array.

var studentnames=new Array();
studentnames[0]="vamshi";
studentnames[1]="vamshi priya";
studentnames[2]="vamshi priya neelam";
studentnames[3]="vamshi mohan";

var i;
for(i=0;i<studentnames.length;i++)
{
document.write(studentnames[i]);
}
---------------
3. Array constructor (using new keyword)
--------------------------------------------
we should create an instance of an array by passing arguments/parameters in the constructor so that it is not required to provide the values explicitly.


var studentnames=new Array("shivam","shiva ram","shiva ram prasad");
var i;
for(i=0;i<studentnames.length;i++)
{
document.write(studentnames[i]);
}
*/