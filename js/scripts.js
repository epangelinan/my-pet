$(document).ready(function(){
  $("button#lightText").click(function() {
    $("body").removeClass();
    $("div").removeClass();
    $("body").addClass("green-background");
    $("div").addClass("light-text");
  });
  $("button#darkText").click(function() {
    $("body").removeClass();
    $("div").removeClass();
    $("body").addClass("yellow-background");
    $("div").addClass("dark-text");
  });
  $("button#original").click(function() {
    $("body").removeClass();
    $("div").removeClass();
  });
});
