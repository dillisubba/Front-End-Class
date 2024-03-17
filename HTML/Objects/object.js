//1.By object literal
customer={customerid:1, customername:"Ram", customercity:"Akron", customerage:35}
document.write(customer.customerid + "<br>");
document.write(customer.customername +"<br>");
document.write(customer.customercity +"<br>");
document.write(customer.customerage +"<br>")

//2.By creating an instance of Object (using new keyword)
var customer=new Object();
customer.customerid=40;
customer.customername="Shyam";
customer.customercity="Salem";
customer.customerage=3;

document.write(customer.customerid + "<br>");
document.write(customer.customername + "<br>");
document.write(customer.customercity + "<br>");
document.write(customer.customerage);

//3.By using an object constructor
function driver(driverID, driverNAME, driverCITY, driverAGE){
    this.driverid=driverID;//first property ani second ma parameter use garincha.
    this.drivername=driverNAME;
    this.drivercity=driverCITY;
    this.driverage=driverAGE;
}
driv=new driver(5, "Hari", "Boston", 42);//driv is assigned object
document.write(driv.driverid + "<br>");
document.write(driv.drivername + "<br>");
document.write(driv.drivercity + "<br>");
document.write(driv.driverage);


