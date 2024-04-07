$(document).ready(function(){
    $(".btn").click(function(){
        var $btn=$("p").text()
        alert($btn);//info is a varaible name(alert.info bhancha)
    });
    //display only one paragraph
    $(".btn").click(function(){
      var first=$("p:first").text()  
      alert(first);
    });
    //display last paragraph
    $(".btn").click(function(){
        var last=$("p:last").text()
        alert(last);
    });
    //displaying specific paragraph
    $(".spcbtn").click(function(){
    var specificParagraph=$("p.ind").text();
    alert(specificParagraph);
    });
});
