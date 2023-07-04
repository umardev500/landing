const swiper = new Swiper('.swiper-service', {
  // Optional parameters
  loop: true,

  autoHeight: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1280: {
      slidesPerView: 2.3,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.service-button-next',
    prevEl: '.service-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});