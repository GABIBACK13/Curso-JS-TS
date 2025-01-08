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

const outputPassword = document.querySelector('.password-output');
const size = document.querySelector('.password-size');
const upercase = document.querySelector('.password-upercase');
const lowercase = document.querySelector('.password-lowercase');
const numbers = document.querySelector('.password-numbers');
const special = document.querySelector('.password-symbols');

window.document.querySelector('.btn1').addEventListener('click', () => {
  let length = +size.value;
  (length > 20) ? length = 20 : length;
  const upercaseChecked = upercase.checked;
  const lowercaseChecked = lowercase.checked;
  const numbersChecked = numbers.checked;
  const specialChecked = special.checked;

  outputPassword.value = createPassword(length, upercaseChecked, lowercaseChecked, numbersChecked, specialChecked);
});