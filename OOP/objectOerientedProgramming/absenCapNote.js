Abstraction
-------------------
John - Model cars
Surender - Mileage cars
Krish - Speed cars

All these three people went to car show room and met executive


Abstraction means giving only the required information.



Encapsulation
----------------------

Encapsulation means hiding the details.

Encapsulation is a process of binding variables and functions.
use var keyword to make data members (variables) private.
use setter methods to set the data and getter method to get that data.


get - read
set - write


class Student
{
constructor() //to initialize or declare variables
{
var fname;
var marks;
}
setName(fname) //assign value or write value
{
this.fname=fname;
}
getName() //read value
{
return this.fname;
}
setMarks(marks) //write value
{
this.marks=marks;
}
getMarks() //read value
{
return this.marks;
}

}

var std=new Student();
std.setName("srinivas");
document.write("Name is "+std.getName());

std.setMarks(78);
document.write("marks are "+std.getMarks());