const menu_container = document.querySelector('#menu_container');
const menuCloseBtn = document.querySelector('#image_menu_close');
const menuBtn = document.querySelector('#image_menu');

menuBtn.addEventListener('click', () => {
  menu_container.classList.add('open');
});

menuCloseBtn.addEventListener('click', () => {
  menu_container.classList.remove('open');
});