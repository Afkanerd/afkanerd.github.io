
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});


/* jquery roadmap */
$(document).ready(function () {

  var events = [
    {
      date: 'Q1 - 2018',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
    {
      date: 'Q2 - 2018',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
    {
      date: 'Q3 - 2018',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
    {
      date: 'Q4 - 2018',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
    {
      date: 'Q1 - 2019',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
    {
      date: 'Q1 - 2019',
      content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    },
  ];

  $('#my-timeline').roadmap(events, {
    eventsPerSlide: 6,
    slide: 1,
    prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
    nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
  });

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
    $(this).toggleClass("btn-primary active");
    $(".btn-2").toggleClass("btn-primary active");
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


});

//footer date placement
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + " ";
