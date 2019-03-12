console.log("hello from app.js");

$("#test").on("click", function() {
  $("#test").hide();
});

$(document).ready(function() {
  $(".parallax").parallax();
});

$(document).ready(function() {
  $(".sidenav").sidenav();
});

var lastScrollTop = 0;
$(document).on("scroll", function() {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    $("#showHide_hd").slideUp(1000);
  } else {
    $("#showHide_hd").slideDown(1500);
  }
  lastScrollTop = st;
});
