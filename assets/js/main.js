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
      var repo_name = document.createElement("h5");
      repo_name.setAttribute("class", "text-white  font-weight-bold");
      repo_name.appendChild(document.createTextNode(`${repo.name} | ${repo.language}`));
      var repo_description = document.createElement("p");
      repo_description.setAttribute("class", "text-light py-4");
      repo_description.appendChild(document.createTextNode(repo.description));
      var repo_link = document.createElement("a");
      repo_link.setAttribute("class", "btn btn-outline-light  py-2 px-4 ");
      repo_link.href = repo.html_url;
      repo_link.appendChild(document.createTextNode("learn more"));
      var div = document.createElement("div");
      div.setAttribute("class", " p-3 rounded mx-auto mb-5");
      div.appendChild(repo_name);
      div.appendChild(repo_description);
      div.appendChild(repo_link);
      var div_column = document.createElement("div");
      div_column.setAttribute("class", "swiper-slide rounded");
      div_column.appendChild(div);
      var main_body = document.getElementById("main_body");
      main_body.appendChild(div_column)
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
$(".timeline-card").on('mouseenter mouseleave', function (e) {
  $(this).toggleClass("rounded shadow")
  $(this).find(".circle").toggleClass('circle-hover ');
});
// scroll down
$("#scroll_down_icon").click(function (e) {
  window.scroll({
    top: 400,
    behavior: 'smooth'
  });
})


