// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles


const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});