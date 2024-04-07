//constructor function

let person=function(name,gender,birthdyear){
    this.name=name;
    this.gender=gender;
    this.birthdyear=birthdyear;
    this.calcAge=function(){
        let age= new Date().getFullYear()-this.birthdyear;
        console.log(age);
    }
}
let john = new person('John','Male', 1990);
console.log(john);

//let now=new Date();
//let str= new String();

 