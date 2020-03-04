
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});


/* jquery roadmap */
$(document).ready(function () {
  /* timeline section js */

  $(".timeline-card").on('mouseenter mouseleave', function (e) {
    $(this).find(".circle").toggleClass('circle-hover');
  });
  /* timeline section js */

  /* toggle view for each team member */
  $(".team-1").hover(function () {
    $(".team-1-cbd").toggleClass("bg-gradient");
    $(".team-1-default").toggleClass("d-none");
    $(".team-1-show").toggleClass("d-none");
  });

  $(".team-2").hover(function () {
    $(".team-2-cbd").toggleClass("bg-gradient");
    $(".team-2-default").toggleClass("d-none");
    $(".team-2-show").toggleClass("d-none");
  });

  $(".team-3").hover(function () {
    $(".team-3-cbd").toggleClass("bg-gradient");
    $(".team-3-default").toggleClass("d-none");
    $(".team-3-show").toggleClass("d-none");
  });

  $(".team-4").hover(function () {
    $(".team-4-cbd").toggleClass("bg-gradient");
    $(".team-4-default").toggleClass("d-none");
    $(".team-4-show").toggleClass("d-none");
  });

  /* toggle plan slider and cards */

  $(".btn-1").click(function () {
    $(this).toggleClass("btn-primary");
    $(".btn-2").toggleClass("btn-primary");
    $(".price-1").html("$10");
    $(".price-2").html("$20");
    $(".price-3").html("$50");
  });

  $(".btn-2").click(function () {
    $(this).toggleClass("btn-primary active");
    $(".btn-1").toggleClass("btn-primary active");
    $(".price-1").html("$99");
    $(".price-2").html("$199");
    $(".price-3").html("$299");

  });

  /* animation for autolplay slider caroussel using slick */
  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /* floating carousel section animation with slick */
  $('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    cssEase: 'ease',
    adaptiveHeight: true,
    nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right bg-gradient text-light p-2 rounded-circle"></i></span>',
    prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left bg-gradient text-light p-2 rounded-circle"></i></span>'
  });


  /* floating profile photo  carousel */
  $('.one-time-img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    easing: 'linear'

  });


  /* sync both carousels */
  $('.slick-next').on('click', function (e) {
    $(".one-time-img").slick('slickNext');

  });

  $('.slick-prev').on('click', function (e) {
    $(".one-time-img").slick('slickPrev');
  });


});

//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";
