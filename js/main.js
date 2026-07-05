document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo) {
    if (heroVideo.readyState >= 2) {
      heroVideo.classList.add('is-loaded');
    } else {
      heroVideo.addEventListener('loadeddata', function () {
        heroVideo.classList.add('is-loaded');
      });
    }
  }
});
