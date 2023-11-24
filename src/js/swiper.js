// import Swiper JS
import Swiper from "swiper/bundle";
// import Swiper styles

// Section team start


const swiper = new Swiper('.team-swiper', {
  direction: "horizontal",
  navigation: {
    nextEl: ".team-button__next",
    prevEl: ".team-button__prev",
  },
  resizeObserver: true,
    pagination: {
        el: '.team-pagination',
        clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
    },
});


// Section team end

// Section our porfolio start
// Функція для ініціалізації Swiper
function initSwiper() {
  const swiperContainer = document.querySelector(".portfolio__swiper");

  // Перевірка, чи існують слайди в Swiper
  if (swiperContainer.swiper && swiperContainer.swiper.slides.length > 0) {
    swiperContainer.swiper.removeAllSlides();
  }

  const swiper = new Swiper(".portfolio__swiper", {
    direction: "horizontal",
    pagination: {
      el: ".portfolio-pagination",
      type: "fraction",
    },
    // If we need navigation
    navigation: {
      nextEl: ".portfolio-button__next",
      prevEl: ".portfolio-button__prev",
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // Зберігаємо посилання на Swiper
  swiperContainer.swiper = swiper;
}

// Функція для перевірки ширини вікна та ініціалізації Swiper
function checkWindowWidth() {
  const swiperContainer = document.querySelector(".portfolio__swiper");

  if (window.innerWidth < 1024 && !swiperContainer.swiper) {
    initSwiper();
  } else if (window.innerWidth >= 1024 && swiperContainer.swiper) {
    swiperContainer.swiper.destroy();
    swiperContainer.swiper = null; // Очистити посилання на Swiper
  }
}

// Викликати функцію при завантаженні сторінки
checkWindowWidth();

// Відслідковування події resize на вікні
window.addEventListener("resize", checkWindowWidth);
// Section our porfolio end
