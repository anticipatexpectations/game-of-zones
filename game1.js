$(document).ready(function(){
  $(".zone").on("mouseover", function(){
    $(this).css({"background-color":"#00FF00"});
  });

  $(".zone").on("click", function(){
    $(this).off("mouseleave");
    $(this).addClass("clicked");
    if( $('.clicked').length === 4 ){
      alert('You Win');
    }
  });

  $(".zone").on("mouseleave", function(){
    $(this).removeAttr("style");
  });




});
