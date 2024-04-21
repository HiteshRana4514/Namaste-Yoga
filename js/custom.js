let mobMenu = document.querySelector(".mob-menu");
let navigationMenu = document.querySelector(".navigation");
mobMenu.onclick = mobMenuActive;
function mobMenuActive(){
    this.classList.toggle("active");
    navigationMenu.classList.toggle("active");
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