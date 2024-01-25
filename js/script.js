import { CountUp } from './countup.min.js';

// Side Navigation JS Code //
let menuButton = document.querySelector('.menu-button');
let cancelButton = document.querySelector('.cancel-button');
let navBar = document.querySelector('.navbar');
let body = document.querySelector('body');

menuButton.onclick = function () {
  menuButton.style.opacity = '0';
  menuButton.style.pointerEvents = 'none';
  navBar.classList.add('active');
  body.style.overflow = 'hidden';
};

cancelButton.onclick = function () {
  menuButton.style.opacity = '1';
  menuButton.style.pointerEvents = 'auto';
  navBar.classList.remove('active');
  body.style.overflow = 'auto';
};

// Sticky Navigation Menu JS Code //
// let val;
//     let nav = document.querySelector("nav");
//     window.onscroll = function() {
//         if (document.documentElement.scrollTop > 20) {
//             nav.classList.add("sticky");
//         } else {
//             nav.classList.remove("sticky");
//         }
//     }

// Navigation Close When Links Clicked JS Code //
let navLinks = document.querySelectorAll('.menu li a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    menuButton.style.opacity = '1';
    menuButton.style.pointerEvents = 'auto';
    navBar.classList.remove('active');
    body.style.overflow = 'auto';
  });
}

// Swiper JS Code //
// slider was broken so just quick dirty fix
// to delay the init of the slider
setTimeout(() => {
  var swiper = new Swiper('.mySwiper', {
    fadeEffect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      enabled: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 500);

var swiper = new Swiper('.myClientSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function isInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

const brandSection = document.getElementById('brand-section');
const brandNumber = document.getElementById('brand-number');
const adSection = document.getElementById('ad-section');
const adSpend = document.getElementById('ad-spend');

let brandFired = 0;
let adFired = 0;

document.addEventListener('scroll', () => {
  if (isInViewport(brandSection)) {
    if (brandFired !== 1) {
      var countUp = new CountUp(brandNumber, 20);
      countUp.start();
      brandFired = 1;
    }
  }

  if (isInViewport(adSection)) {
    if (adFired !== 1) {
      var countUp = new CountUp(adSpend, 50);
      countUp.start();
      adFired = 1;
    }
  }
});
