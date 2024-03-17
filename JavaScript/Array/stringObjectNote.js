/*string Object
----------------------
It is an object which represents a sequence of characters.

1. By string literal
2. By string object (using new keyword).

1. By string literal
----------------------------
It is created using double quotes(" ").
syntax:
------------
var stringname="value";

eg:
var fname="srinivas";
document.write(fname);

2. By string object (using new keyword).
-----------------------------------------------------------
syntax:
----------
var stringname=new String("value");
eg:
var fname=new String("Srinivas");
document.write(fname);


String methods
------------------------
string object provides a set of methods for manipulating strings.

var str1="Hello World";
var str2="Welcome";

charAt()

ASCII values
A-Z -> 65-90
a-z -> 97-122
<html>
<head>
<title>String objects</title>
</head>
<body>
<script>
//string literal
var fname="srinivas";
document.write(fname+"<br/>");

//string object
var fullname=new String("srinivasa rao");
document.write(fullname+"<br/>");

//string methods
var str1="Hello World";
var str2="Welcome";
var str3="HAPPY DAY";
var str4="this is split method in javascript string object";
document.write("first string:",str1+"<br/>");
document.write("second string is :",str2+"<br/>");

document.write("character at a specified index is ",str1.charAt(0)+"<br/>");
document.write("ASCII value of a particular character is ",str1.charCodeAt(0)+"<br/>");
document.write(str1.concat(str2)+"<br/>");

document.write("index of particular word", str1.indexOf("World")+"<br/>");

document.write("index of particular character", str2.indexOf("e")+"<br/>");

document.write("last index of a given character", str2.lastIndexOf('e')+"<br/>");
document.write(str1.replace("Hello","Welcome")+"<br/>");

document.write("data in upper case ",str1.toUpperCase()+"<br/>");
document.write("data in lower case ", str3.toLowerCase()+"<br/>");

document.write("part of a given string", str2.substring(0,3)+"<br/>");
document.write("split the given string", str4.split(" ")+"<br/>");
</script>
</body>
</html>*/