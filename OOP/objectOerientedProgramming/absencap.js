class customer{
    constructor(){
        var custname;
        var due;
    }
    setName(custname){
        this.custname=custname;
    }
    getName(){
        return this.custname;
    }

    setDue(due){
        this.due=due;
    }
    getDue(){
        return this.due;
    }
}
var cus=new customer();
cus.setName("Kali budi");
document.write("Customer name is "+ cus.getName());

cus.setDue(400);
document.write("Due is "+ cus.getDue());

document.write('<br>')

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