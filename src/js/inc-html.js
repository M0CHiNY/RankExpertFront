import footer from '../html-parts/footer.html';
import header from '../html-parts/header.html';// Шлях до файлу
import swiperHTML from '../html-parts/swiper.html';
import modalWindow from '../html-parts/modal.html';
import accordion from '../html-parts/accordion.html';
  

// // Функція для перевірки наявності елемента в DOM
function isElementExist(elementId) {
  return document.getElementById(elementId) !== null;
}

if (isElementExist('header')) {
  document.getElementById('header').innerHTML = header; // пошук у файлі по ID
}

if (isElementExist('footer')) {
  document.getElementById('footer').innerHTML = footer;
}

if (isElementExist('swiperPart')) {
  document.getElementById('swiperPart').innerHTML = swiperHTML;
}

if (isElementExist('modalWindow')) {
  document.getElementById('modalWindow').innerHTML = modalWindow;
}

if (isElementExist('accordion')) {
  document.getElementById('accordion').innerHTML = accordion;
}
