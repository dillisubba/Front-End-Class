<html>
<head>
<title>Login Form</title>
</head>
<body>
<form name="loginform" method="post" onsubmit="return validateloginform()">
<label>Enter User Name :</label>
<input type="text" id="username" name="usrname"/>
<br/>
<label>Enter Password:</label>
<input type="password" id="pwd" name="pass"/>
<br/>
<label>Enter Fee :</label>
<input type="text" id="feeid" name="feeid"/>
<br/>
<input type="submit" value="Login"/>

</form>
<script>
function validateloginform()
{
//var usname=document.loginform.usrname.value;
var usname=document.getElementById("username").value;
//alert(usname);
// var pwd=document.loginform.pass.value;
var pwd=document.getElementById("pwd").value;
// alert(pwd);

var fee=document.getElementById("feeid").value;
if(usname==null||usname=="")
{
alert("username cannot be left blank");

return false;
}
if(usname.length<=3)
{
alert("username must be more than 3 characters");
return false;
}
if(pwd==null||pwd=="")
{
alert("password cannot be left blank");
return false;
}
if(fee==null||fee=="")
{
alert("Fee is required");
}
else if(isNaN(fee))
{
alert("Fee must be numbers only");
return false;
}
else{

}
return true;
}
</script>
</body>
</html>


successful.html// Yo chai button ma link garnu parcha
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=<device-width>, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1 style="color:green">Form Submitted Successfully</h1>
</body>
</html>