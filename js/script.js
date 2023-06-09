// Side Navigation JS Code //
let menuButton = document.querySelector(".menu-button");
let cancelButton = document.querySelector(".cancel-button");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuButton.onclick = function() {
    menuButton.style.opacity = "0";
    menuButton.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}

cancelButton.onclick = function() {
    menuButton.style.opacity = "1";
    menuButton.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}

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
let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        menuButton.style.opacity = "1";
        menuButton.style.pointerEvents = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto";
    })
}

// Swiper JS Code //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".myClientSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});