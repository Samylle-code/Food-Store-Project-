const $menu = document.querySelector('.header__nav.active');
const $btnMenuOpen = document.querySelector('.btnMenu btnMenu_open');
const $btnMenuClose = document.querySelector('.btnMenu btnMenu_close');

$btnMenuOpen.addEventListener('click', function() {
  $menu.classList.add('.header__nav.active')

})

$btnMenuClose.addEventListener('click', function() {
  $menu.classList.remove('.header__nav.active')

})