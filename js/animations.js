$(document).ready(function () {

  $(".logo-sm").on('mouseover', function (e) {
    $(this).toggleClass('animated flip slower');
  });

  $(".intro-section").on('mouseleave', function (e) {
    $(this).find(".col-md-6:first").toggleClass('');
  });

});
