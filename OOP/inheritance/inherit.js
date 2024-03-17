/*class cars{
    constructor(){
        this.companyname="BMW";
    }
}
class bike extends cars{
    constructor(model,price){
        super();//it will call parent class constructor
        this.model=model;
        this.price=price;
    }
}
var auto=new bike("BMW",50000);
document.write(auto.companyname);
document.write(auto.model);
document.write(auto.price);

document.write('<br');*/



class employee{
    constructor(){
        this.corporate="Amazon";
    }
}
class emp extends employee{
    constructor(name, salary){
        super();
        this.name=name;
        this.salary=salary
    }
}
var worker=new emp('John', 2000);
document.write(worker.corporate);
document.write(worker.name);
document.write(worker.salary);

document.write('<br');