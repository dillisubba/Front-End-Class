$(document).ready(function(){
  $(".btn").click(function(){
    $("p").text("Replace previous text"); //writing method to replace all paragraphs
  });
  
  $(".secbtn").click(function(){
    $("p:first").text("Replace the first paragraph"); //writing method to replace first paragraph
  });
  
});
