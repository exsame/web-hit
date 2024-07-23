$(function(){
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    $(window).on("scroll load", function(){
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    
    header.addClass("fixed");
});
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("backToTop");
    
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
nextBtn.addEventListener("click", () =>{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
    });
    slideNumber++;
    if(slideNumber>(numberOfSlides-1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
prevBtn.addEventListener("click", () =>{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
    });
    slideNumber--;
    if(slideNumber<0){
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) =>{
            slideIcon.classList.remove("active");
        });
        slideNumber++;
        if(slideNumber>(numberOfSlides-1)){
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();
slider.addEventListener("mouseover", () =>{
    clearInterval(playSlider);
});
slider.addEventListener("mouseout", () =>{
    repeater();
});
