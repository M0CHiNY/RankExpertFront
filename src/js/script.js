document.addEventListener("DOMContentLoaded", function () {
  //динаміна зміна відстані між елементами у блоці service-step
  function adjustMargins() {
    const serviceList = document.querySelector(".service-steps__list");
    const items = serviceList.querySelectorAll(".service-steps__item");

    items.forEach((item, index) => {
      const nextItem = items[index + 1];
      const prevItem = items[index - 1];

      if (index % 2 === 0 && nextItem) {
        item.style.marginBottom = nextItem.offsetHeight + "px";
      } else if (index % 2 !== 0 && prevItem) {
        item.style.marginTop = prevItem.offsetHeight + "px";
      }
    });
  }

  function resetMargins() {
    const serviceList = document.querySelector(".service-steps__list");
    const items = serviceList.querySelectorAll(".service-steps__item");

    items.forEach((item) => {
      item.style.marginTop = "";
      item.style.marginBottom = "";
    });
  }

  function handleResize() {
    if (window.innerWidth >= 1024) {
      adjustMargins();
    } else {
      resetMargins();
      // Додайте іншу логіку для менших екранів, якщо потрібно
    }
  }
  // Викликаємо при завантаженні сторінки
  handleResize();
  // Викликаємо при зміні розміру вікна
  window.addEventListener("resize", handleResize);

  //колір тексту
  const items = document.querySelectorAll(".service-steps__item");
  let lastColor = "#888"; // Початковий колір при верхньому положенні

  function changeColorOnScroll() {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;

      if (isVisible) {
        changeItemColor(item, "#201F1D"); // Змінюємо колір на сірий
      } else {
        changeItemColor(item, lastColor); // Повертаємо до початкового коліру
      }
    });
  }

  function changeItemColor(item, color) {
    item.querySelector(".service-steps__caption").style.color = color;
    item.querySelector(".service-steps__text").style.color = color;
  }

  // Перевірка ширини екрану перед викликом функції
  function checkScreenWidth() {
    if (window.innerWidth >= 1024) {
      changeColorOnScroll();
    }
  }

  // Викликати функцію при скролі сторінки
  window.addEventListener("scroll", checkScreenWidth);

  // Також викликаємо функцію при завантаженні сторінки для перевірки при початковому розмірі екрану
  window.addEventListener("load", checkScreenWidth);

  // І в разі зміни розміру вікна
  window.addEventListener("resize", checkScreenWidth);

  
  
  
  //scroll bar


})

