import {nav} from "js/topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("pages/topNavIndex.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);

    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("pages/footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}


//carousel
let title = document.querySelector('#title_slide')
let span1 = document.querySelector('#span_slide1')
let span2 = document.querySelector('#span_slide2')
let span3 = document.querySelector('#span_slide3')
let span4 = document.querySelector('#span_slide4')
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let slide4 = document.querySelector('#slide4');

span1.addEventListener('click', () => {
    title.innerText = 'You Are \nLocked In!'
    slide1.style.opacity = 1
    slide2.style.opacity = 0
    slide3.style.opacity = 0
    slide4.style.opacity = 0
})
span2.addEventListener('click', () => {
    title.innerText = 'The Clock \nIs Ticking...'
    slide1.style.opacity = 0
    slide2.style.opacity = 1
    slide3.style.opacity = 0
    slide4.style.opacity = 0   
})
span3.addEventListener('click', () => {
    title.innerText = 'What is \nEscapium?'
    slide1.style.opacity = 0
    slide2.style.opacity = 0
    slide3.style.opacity = 1
    slide4.style.opacity = 0
})

span4.addEventListener('click', () => {
    title.innerText = 'Escape \nin 60 mins?'
    slide1.style.opacity = 0
    slide2.style.opacity = 0
    slide3.style.opacity = 0
    slide4.style.opacity = 1
})

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel_container_testimonials");
    const left = document.getElementById("arrow_left_testimonials");
    const right = document.getElementById("arrow_right_testimonials");
  
    left.addEventListener("click", showPreviousSlideTestimonials);
    right.addEventListener("click", showNextSlideTestimonials);
  
    function showPreviousSlideTestimonials() {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth"
      });
    }
    function showNextSlideTestimonials() {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth"
      });
    }
  });
  




 
