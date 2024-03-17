Polymorphism
--------------------
poly - many
morphism - forms

polymorphism means it is a way to perform a single action in different forms.
We can call the same method on different javascript objects.

class First
{
display()
{
document.write("First class display");
}
}
class Second extends First
{

}

var secobj=new Second();
secobj.display();



----------------


if parent and child classes have the same method then

<script>
class First{
display(){
document.write("First class display");
}
}

class Second extends First{
display(){
document.write("Second class display");
}
}

var secobj=new Second();
secobj.display();

</script>

-------------------



-------------------

SR
Srinivasa Rao
09:24 AM
If we want to execute parent and child class functions which are having the same name then
//displays both

<script>
class First{
display(){
document.write("First class display");
}
}
class Second extends First{
display(){
document.write("Second class display");
}
}

var second=[new First(),new Second()]
second.forEach(function(test){//forEach works as a loop. It displays both strings
test.display();
});


</script>

---------------------------


If parent class and child class two different methods then

<script>
class First{
display(){
document.write("First class display");
}
}
class Second extends First{
show(){
document.write("Second class display");
}
}

var secobj=new Second();
secobj.display();
secobj.show();
</script>

--------------------------
