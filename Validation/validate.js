function validateForm(){
  //var fn=document.getElementById("fname").value;
  var fn=document.stdForm.fname.value;
  if(fn==null||fn==""){
    alert("Please enter first name");
    return false;
  }
 
  //var ln=document.getElementById("lname").value;
  var ln=document.stdForm.lname.value;
  if(ln==null||ln==""){
  alert("Please enter last name");
  return false;
  }

  var dob=document.getElementById("dob").value;
  if(dob==null||dob==""){
  alert("Please enter date of birth");
  return false;
  }
  
  /*document.getElementById("g").value;
  var male=document.querySelector('.male').value;
  var female=document.querySelector('.female').value;
  if(!male.checked && !female.checked){
    alert("Plase select gender");
    return false;
  }*/
  var gd=document.getElementById("g").value;
  if(gd==null||gd=="")selectorId==undefined&&selectorId
    alert("Please select gender");
    return false;
  }
  
  
else{
  return true;
}
