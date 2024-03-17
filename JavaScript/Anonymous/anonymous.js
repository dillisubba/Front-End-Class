//anonymous without parameter
var lname = function(){
    document.write("Limbu");
}
lname();

document.write('<br>');
var city = function(){
    document.write('Ohio')
}
city();

document.write('<br>')
//anonymous with single parameter
var fname = function(Dilli){
    document.write("My name is" +" ",Dilli);
}
fname("Dilli")

document.write('<br>');
var city = function(Ohio){
    document.write(Ohio)
}
city("Ohio")

document.write('<br>');
//anonymous with two para
var address = function(city, State){
    document.write("The city is" + city+ "the country is"+ State)
}
address("Akron", "Ohio");

//Arrow function without parameters
var nickname = ()=>{
    document.write("Monkey temple");
}
nickname();
document.write('<br>');
//Arrow function with single parameters
var lname = (Limbu)=>{
    document.write("Limbu");
}
lname("my lname is Limbu")
//arrow function with numeric value
var num = (square)=>{
    document.write(square*square);
}
num(9);