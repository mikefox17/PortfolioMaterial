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

// Email.send({
//   Host: "smtp.yourisp.com",
//   Username: "username",
//   Password: "password",
//   To: "them@website.com",
//   From: "you@isp.com",
//   Subject: "This is the subject",
//   Body: "And this is the body"
// }).then(message => alert(message));
