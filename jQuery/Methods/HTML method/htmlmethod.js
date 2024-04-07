$(document).ready(function(){
    $(".btn").click(function(){
        var result=$("p").html();//result is local variable
            alert(result);
    });
    //reading the data
$(".ovbtn").click(function(){
    var output=$("#overview").html()
    alert(output);
});
//store value/assigning value
$(".spcbtn").click(function(){
    $("#emp").html("<h3>Storing value to empty div.</h3>");
});
});