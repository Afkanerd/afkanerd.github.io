//main.js controls all interactions

var technologies_swiper = new Swiper('.swiper-container', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

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

});

//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";

