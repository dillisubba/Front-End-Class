function validateRegistrationForm(){
var frstname=document.stdForm.fname.value;//name attribut use gareko
//alert(frstname);
var lstname=document.stdForm.lname.value;//name attribute used
//alert(lstname);
var email=document.getElementById("email").value;//id attribute
//alert(email);
var mob=document.getElementById("phone").value;
//alert(mob); 
var gnd=document.stdForm.gender.value;//name attribute used
var dob= document.getElementById("date").value;
var add=document.getElementById("addr").value;
var ct=document.getElementById("city").value;
var stt=document.getElementById("state").value;
var spec=document.getElementsByName("spz").value;/*NEED TO WORK ON*/
var pw=document.getElementById("password").value;


if(frstname==null||frstname==""){
    alert("First name is required.");
    return false;
}
if(lstname==null||lstname==""){
    alert("Last name is required.");
    return false;
}
if(email==null||email==""){
alert("Email is required");
return false;

}
if(mob==null||mob==""){
    alert("Mobile numer is required");
    return false;//question why use <=9 and type print letter "e" when type in html is "number"? only up/down arrow
}
if(mob.length<10){
alert("Mobile number must be 10 digits");
return false;
}
if(mob.length>10){
    alert("Mobile number must not be more than 10 digits.");
    return false;
}

else if(isNaN(mob)){
    alert("Only numerical value");
    return false;
}

if(gnd==null||gnd==""){
    alert("Select atleast one gender.");
    return false;
}
if(dob==null||dob==""){
    alert("Enter your date of birth.");
    return false;
}
if(add==null||add==""){
   alert("Enter building number and street name.");
   return false;
}
if(ct==null||ct==""){
    alert("Enter your city.");
    return false;
}
if(stt==null||stt==""){
    alert("Enter your state.");
    return false;
}
if(document.getElementById("dd").selectedIndex==0){
    alert("Please select qualification.");
    return false;
}//multiple checkboxes NOT YET HAPPENED
if(spec==null||spec==""){//NEED TO WORK ON
   alert("Check atleast one specializations");
   return false;
}
if(pw==null||pw==""){
    alert("enter your password.");
    return false;
}

else{

}
return true;
}


