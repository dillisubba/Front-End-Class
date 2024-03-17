//string lateral
var pet="dog";
document.write(pet+'<br/>');

//string object
var friends=new String("Shiva Dirga"+'<br/>');
document.write(friends);

//Strinf Method
var str1="Good morning";
var str2="Hello Everyone."
var str3="Welcome to my page."
var str4="Thank you for visiting my page."

document.write("This is my first string: ", str1+'<br/>')
document.write("This is my second string: ",str2+'<br/>')

document.write(str1.concat(str2)+'<br/>')

document.write("Character at a  specified index is ", str1.charAt(0)+'<br/>');
document.write("ASCII value of a particular character is ", str2.charCodeAt(0)+'<br/>');

document.write("Index of particular word ", str2.indexOf("Hello")+'<br/>');
document.write("Index of particular character ", str3.indexOf("e")+'<br/>');

document.write("Last index of a given character ", str3.lastIndexOf("e")+'<br/>');
document.write(str1.replace("Good", "Hello")+'<br/>');

document.write("Data in upper case ", str2.toUpperCase()+'<br/>');
document.write("Data in lower case ", str3.toLowerCase()+'<br/>');

document.write("Part of a given string ", str4.substring(0,4)+'<br/>');

document.write("Split the given string ", str4.split(" ")+'<br/>');
document.write("Split the given string ", str4.split(".")+'<br/>');
document.write("Split the given string ", str4.split("$")+'<br/>');