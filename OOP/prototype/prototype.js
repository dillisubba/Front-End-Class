//syntax: classname.prototype.methodname;

class pet {
    display() {
        document.writeln("Pet type is dog.");
    }
    show(){
        document.writeln("Pet name is Kusang.");
    }
}
var animal=new pet();
animal.display();
animal.show();

var animal2=new pet();
animal2.display();
animal2.display();



document.write('<br>');

class studentname{
    display(){
        document.writeln("Shiva");
    }
    show(){
        document.writeln("Rai")
    }
}
var frd=new studentname();
frd.display();
frd.show();

var frd1=new studentname();
frd.display();
frd.show();



document.write('<br>');

function customer(firstname, lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
//create prototype
customer.prototype.fullname=function(){
    return this.firstname +" "+ this.lastname;
}
var cust= new customer("Govind", "chhetri");
document.write("Full name is: "+cust.fullname());//prototype ko fullname chai yah function vayera bascha.



document.write('<br>');

function sum(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
}
sum.prototype.add=function(){
    return this.x + this.y+ this.z;
}
var total=new sum(10, 20, 30);
document.write("The total sum is: ", total.add()+"<br>");

var total1=new sum(50,60,20);
document.write("The total is: ", total1.add());