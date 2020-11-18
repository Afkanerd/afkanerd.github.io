// common.js

// changes top nav menu icon and background when opened
$(".navbar-toggler").on("click", function () {
  $(this).text($(this).text() == "apps" ? "close" : "apps");
  $("#header_nav, #particles_js").toggleClass("bg-black");
});
// Scroll animation with AOS Library
AOS.init({
  duration: 1200,
  easing: 'ease-in-out'
});
//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";
