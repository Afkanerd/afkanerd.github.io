
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});



$(document).ready(function () {

  /* timeline section js */
  $(".timeline-card").on('mouseenter mouseleave', function (e) {
    $(this).find(".circle").toggleClass('circle-hover animated bounce ');
    $(this).find("h6").toggleClass('animated tada slow');

  });
  /* timeline section js */

  /* logo animation */

  $(".logo-sm").on('mouseover', function (e) {
    $(this).toggleClass('animated flip slower');
  });
  /* logo animation end */

  /* number count effect */
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).data('value')
    }, {
      duration: 10000,
      easing: 'swing',
      step: function (now) {
        $(this).text(this.Counter.toFixed());
      }
    });
  });
  /* number count effect */


});

//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";
