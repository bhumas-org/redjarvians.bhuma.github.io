// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

// Close menu after clicking any menu item

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});


// Hero Slider

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 4000);



const serviceSlider = document.getElementById("serviceSlider");
const serviceCards = document.querySelectorAll("#serviceSlider .card");

let serviceIndex = 0;

setInterval(() => {

    serviceIndex++;

    if(serviceIndex >= serviceCards.length){
        serviceIndex = 0;
    }

    const cardWidth = serviceCards[0].offsetWidth + 20;

    serviceSlider.style.transform =
        `translateX(-${serviceIndex * cardWidth}px)`;

}, 3000);