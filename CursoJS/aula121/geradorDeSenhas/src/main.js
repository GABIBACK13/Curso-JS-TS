import './assets/css/style.css';
import createPassword from './modules/geradores';

// Animation for the menu //
const container = document.querySelector('.container');
(function () {
  let menuF = document.querySelector('.btn-menu');
  menuF.addEventListener('click', function () {
    let menu = document.querySelector('.btn-menu-display');
    let arrow = document.querySelector('.btn-menu-arrow');

    container.classList.toggle('container-active');
    menu.classList.toggle('menu-active');

    if (menu.classList.contains('menu-active')) {
      arrow.style.transition = 'transform 0.4s';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = 'rotate(0deg)';
    }
  });
})();

//service //

