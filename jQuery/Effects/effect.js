$(document).ready(function(){
    $(".showbtn").click(function(){
        $("p").show();
    });

    $(".hidebtn").click(function(){
        $("p").hide();
    });

    $(".showhide").click(function(){
    $("p").toggle();//toggle method le duitai button ko kam garcha.
    });

    $(".fadeIn").click(function(){
      $("p").fadeIn();
    });
    $(".fadeOut").click(function(){
      $("p").fadeOut();
    });

    $(".fadeInOut").click(function(){
     $("p").fadeToggle();
    });

    $(".slideUp").click(function(){
        $("P").slideUp();
    });
    $(".slideDown").click(function(){
        $("P").slideDown();
    });

    $(".slidetoggle").click(function(){
        $("P").slideToggle();
    });

    $(".stt").click(function(){
        $("img").animate({ //img is a tag p tag jastai
            left:200
        });
    });
});