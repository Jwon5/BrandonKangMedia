/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function() {
  $("a")
    .mouseover(function() {
      $(this)
        .find("img")
        .stop()
        .animate({
          opacity: "1"
        });
    })
    .mouseout(function() {
      $(this)
        .find("img")
        .stop()
        .animate({
          opacity: "0.3"
        });
    });
});
