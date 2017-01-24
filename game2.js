var zoneArray = ['zone-4','zone-2','zone-3','zone-1']
var zoneIndex = 0;
$(document).ready(function(){
  $(".zone").on("click", function(){
    if (zoneArray[zoneIndex] === $(this).attr("id")) {
      $(this).off("mouseover").off("mouseleave").css({"background-color": "green"})
      .addClass("clicked");
      zoneIndex++;
    };
  if ($('.clicked').length===4){
     alert('You Win');
  };
    });


  $(".zone").on("mouseover", function(){
    if (zoneArray[zoneIndex] === $(this).attr("id")) {
        $(this).css({"background-color":"green"});
      } else {
        $(this).css({"background-color":"red"});
      }
  });


  $(".zone").on("mouseleave", function(){
    $(this).removeAttr("style");
  });
});
