import {nav} from "./topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("topNav.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);

    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}

//carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel_container_fifth");
    const left = document.getElementById("arrow_left_fifth");
    const right = document.getElementById("arrow_right_fifth");
  
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

  //faqs

const btn1 = document.querySelector(".btn_about_one");
const p1 = document.querySelector(".p_about_one");
const span1 = document.querySelector(".span_accordeon_one")
btn1.addEventListener("click", () => {
    p1.classList.toggle("accordeon");
    span1.classList.toggle("display")

})

const btn2 = document.querySelector(".btn_about_two");
const p2 = document.querySelector(".p_about_two");
const span2 = document.querySelector(".span_accordeon_two")
btn2.addEventListener("click", () => {
    p2.classList.toggle("accordeon");
    span2.classList.toggle("display")

})
const btn3 = document.querySelector(".btn_about_three");
const p3 = document.querySelector(".p_about_three");
const span3 = document.querySelector(".span_accordeon_three")
btn3.addEventListener("click", () => {
    p3.classList.toggle("accordeon");
    span3.classList.toggle("display")
})
const btn4 = document.querySelector(".btn_about_four");
const p4 = document.querySelector(".p_about_four");
const span4 = document.querySelector(".span_accordeon_four")
btn4.addEventListener("click", () => {
    p4.classList.toggle("accordeon");
    span4.classList.toggle("display")

})
const btn5 = document.querySelector(".btn_about_five");
const p5 = document.querySelector(".p_about_five");
const span5 = document.querySelector(".span_accordeon_five")
btn5.addEventListener("click", () => {
    p5.classList.toggle("accordeon");
    span5.classList.toggle("display")

})
const btn6 = document.querySelector(".btn_about_six");
const p6 = document.querySelector(".p_about_six");
const span6 = document.querySelector(".span_accordeon_six")
btn6.addEventListener("click", () => {
    p6.classList.toggle("accordeon");
    span6.classList.toggle("display")

})
const btn7 = document.querySelector(".btn_about_seven");
const p7 = document.querySelector(".p_about_seven");
const span7 = document.querySelector(".span_accordeon_seven")
btn7.addEventListener("click", () => {
    p7.classList.toggle("accordeon");
    span7.classList.toggle("display")
})
