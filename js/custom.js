let mobMenu = document.querySelector(".mob-menu");
let bodyTag = document.querySelector("body");
let navigationMenu = document.querySelector(".navigation");
let numberBtn = document.querySelectorAll(".number-btn");
let appointmentForm = document.querySelector(".appointment-form");
let inactiveBtn = document.querySelector(".inactive-btn");
let formBg = document.querySelector(".form-bg");
let menuItem = document.querySelectorAll(".menu-item");
mobMenu.onclick = mobMenuActive;
function mobMenuActive(){
    this.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    bodyTag.classList.toggle("active");
}
numberBtn.forEach(function(e){
    e.onclick = appointmentFormActive;
})
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
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  });
menuItem.forEach(function(e,i){
    e.onclick = function activeItem(){
        for(let j=0;j<menuItem.length;j++){
            if(j==i){
                e.classList.add("active");
            }
            else{
                menuItem[j].classList.remove("active");
            }
        }
        
    }
})
$('.classes-slider').slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  