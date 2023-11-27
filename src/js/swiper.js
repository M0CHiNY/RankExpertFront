// import Swiper JS
import Swiper from "swiper/bundle";

// Section team start
const teamSwiper = document.querySelector(".portfolio__swiper");

if (teamSwiper) {
  const swiper = new Swiper(".team-swiper", {
    direction: "horizontal",
    navigation: {
      nextEl: ".team-button__next",
      prevEl: ".team-button__prev",
    },
    resizeObserver: true,
    pagination: {
      el: ".team-pagination",
      clickable: true,
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
}

// Section team end

// Section our porfolio start
const swiperContainer = document.querySelector(".portfolio__swiper");

function initSwiper() {
  const swiperContainer = document.querySelector(".portfolio__swiper");

  if (swiperContainer.swiper && swiperContainer.swiper.slides.length > 0) {
    swiperContainer.swiper.removeAllSlides();
  }

  const swiper = new Swiper(".portfolio__swiper", {
    direction: "horizontal",
    pagination: {
      el: ".portfolio-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".portfolio-button__next",
      prevEl: ".portfolio-button__prev",
    },
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

  swiperContainer.swiper = swiper;
}

if (swiperContainer) {
  function checkWindowWidth() {
    const swiperContainer = document.querySelector(".portfolio__swiper");

    if (window.innerWidth < 1024 && !swiperContainer.swiper) {
      initSwiper();
    } else if (window.innerWidth >= 1024 && swiperContainer.swiper) {
      swiperContainer.swiper.destroy();
      swiperContainer.swiper = null;
    }
  }

  checkWindowWidth();

  window.addEventListener("resize", checkWindowWidth);
}
// Section our porfolio end

// most mopular article slider start
const teamSwiperSlider = document.querySelector(".most-popular__swiper");

if (teamSwiperSlider) {
  const mostPopular = new Swiper(".most-popular__swiper", {
    direction: "horizontal",
    pagination: {
      el: ".most-popular__pagintation",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
}
// most mopular article slider end
