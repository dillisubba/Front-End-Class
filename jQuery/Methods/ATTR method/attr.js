//read data
$(document).ready(function () {
    $(".btn1").click(function () {
        $("img").attr("width", "450px");
    });
    //store data/it shows the path of the image
    $(".btn2").click(function(){
        var result=$("img").attr("src");
        alert(result);
    });
});