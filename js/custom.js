let mobMenu = document.querySelector(".mob-menu");
let bodyTag = document.querySelector("body");
let navigationMenu = document.querySelector(".navigation");
let numberBtn = document.querySelector(".number-btn");
let appointmentForm = document.querySelector(".appointment-form");
let inactiveBtn = document.querySelector(".inactive-btn");
let formBg = document.querySelector(".form-bg");
mobMenu.onclick = mobMenuActive;
function mobMenuActive(){
    this.classList.toggle("active");
    navigationMenu.classList.toggle("active");
}
numberBtn.onclick = appointmentFormActive;
function appointmentFormActive(){
    appointmentForm.classList.add("active");
    bodyTag.style.overflow = "hidden";
    inactiveBtn.onclick = inactiveForm;
    formBg.onclick = inactiveForm;
}
function inactiveForm(){
    appointmentForm.classList.remove("active");
    bodyTag.style.removeProperty("overflow"); 
    // bodyTag.style.overflow = "visible";
}
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
