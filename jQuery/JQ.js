//using the tagname such as paragraph and h1 tags
$(document).ready(function(){
    $("p").text("First example of jQuery.");//element selector
    $("#must").text("Second example of jQuery.");//id selector(#)
    $("h1").css("color","blue");//element selector
    $("div").css("background-color","lightblue");//element selector
    $(".sr").css("color","red");//class selector(.)
});



