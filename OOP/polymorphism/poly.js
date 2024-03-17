/*only one mothod 
class firstname{
    display(){
        document.write("Rajesh");
    }
}
class fstname extends firstname{
}
var fname=new fstname();
fname.display();



document.write('<br>');

//if parent and child classes have the same method.
class lastname{
    display(){
        document.write("Display lastname");
    }
}

class lstname extends lastname{
    display(){
        document.write("Limbu");
    }
}

var lname=new lstname();
lname.display();

document.write('<br>');
//If we want to execute parent and child class functions which are having the same name then
class first{
    display(){
        document.write("City name is Tallmadge");
    }
}
class second extends first{
    display(){
        document.write("State is Ohio");
    }
}
var sec=[new first(), new second()]
sec.forEach(function(Add){
    Add.display();
});*/


//If parent class and child class two different methods then

class employee{
   display(){
    document.writeln("Employee name is Dilli.")// ln le space dincha.
   } 
}
class salary extends employee{
    show(){
        document.writeln("Salary is 25000.")
    }
}

var sal = new salary();
sal.display();
sal.show();

