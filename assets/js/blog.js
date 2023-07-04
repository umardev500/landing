console.log('ok')
const swiperBlog = new Swiper('.swiper-blog', {
  // Optional parameters
  loop: false,

  autoHeight: true,
  slidesPerView: 1.16,
  spaceBetween: 20,
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 2.6,
    }
  },
});