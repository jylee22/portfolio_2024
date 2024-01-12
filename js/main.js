var swiper = new Swiper(".pj_slide_group", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    //clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  }
});