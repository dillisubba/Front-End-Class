Inheritance
-----------------
Acquiring the properties of parent class to the child class is known as inheritance.


Javascript allows us to create new classes based on already existing classes.

child class can reuse the methods and variables of parent class.
use extends keyword to create a child class on the basis of parent class.

class A
{
}
class B extends A
{
}

class Test
{
display()
{
document.write("parent class display");
}
}
class Testchild extends Test
{
show()
{
document.write("child class show");
}
}
var childobj=new Testchild();
childobj.display();
childobj.show();
----------------