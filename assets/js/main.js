//main.js controls all interactions

// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles_js', '/assets/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});
//fetch technologies from github
var ajax = new XMLHttpRequest;
ajax.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    var sr = JSON.parse(this.responseText);
    for (var repo in sr) {
      var repo = sr[repo];

      var slide = `
          <div class="swiper-slide rounded p-2 p-md-4">
            <h5 class="my-3">${repo.name} | ${repo.language}</h5>
            <p class="py-2"> ${repo.description}</p>
            <a class="btn btn-outline-light py-2 px-4" href="${repo.html_url}">learn more</a>
          </div>`

      main_body.innerHTML += slide;
    }
  }
}
ajax.open("GET", "https://api.github.com/orgs/afkanerd/repos");
ajax.setRequestHeader("Content-Type", "application/json")
ajax.send();
// initialize swiper caroussel
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
    delay: 3000,
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
// timeline section js
$(".timeline_card").on('mouseenter mouseleave', function (e) {
  $(this).toggleClass("rounded shadow-lg")
  $(this).find(".circle").toggleClass('circle-hover ');
});
// scroll down
$("#scroll_down_icon").click(function (e) {
  window.scroll({
    top: 400,
    behavior: 'smooth'
  });
})


