const mediaQuery = window.matchMedia('(min-width: 1200px)')
const header__mobile_menu = document.querySelector('.header__mobile_menu');
const header__menu_close = document.querySelector('.header__menu_close');
const nav__item = document.querySelectorAll('.nav__item');
const faq__item = document.querySelectorAll('.faq__item');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

if (mediaQuery.matches) {      
  nav__item.forEach(el=>el.classList.add('desktop'))
} else {
  nav__item.forEach(el=>el.classList.remove('desktop'))
}

function handleTabletChange(e) {  
  if (e.matches) {    
    nav.classList.remove('open'); 
    body.classList.remove('opened-menu')
    nav__item.forEach(el=>el.classList.add('desktop'))
  } else {
    nav__item.forEach(el=>el.classList.remove('desktop'))
  }
}

function openBurgerMenu() {
  nav.classList.add('open')
  body.classList.add('opened-menu')
  header__mobile_menu.classList.add('hide')
  header__menu_close.classList.add('show')
  header__mobile_menu.classList.remove('show')
  header__menu_close.classList.remove('hide')
}

function closeBurgerMenu() {
  nav.classList.remove('open')
  body.classList.remove('opened-menu')
  header__mobile_menu.classList.remove('hide')
  header__menu_close.classList.remove('show')
  header__mobile_menu.classList.add('show')
  header__menu_close.classList.add('hide')
}

function openCloseSubMenu() {
  const openCloseIcon = this.querySelector('.nav__item_title')
  const openCloseSubMenu = this.querySelector('.nav__item_content')
  openCloseIcon.classList.toggle('open')  
  openCloseSubMenu.classList.toggle('open')
}

function faqOpenClose() {
  const openCloseFaqIcon = this.querySelector('.faq__item_title')
  const openCloseFaqText = this.querySelector('.faq__item_text')
  openCloseFaqIcon.classList.toggle('open')  
  openCloseFaqText.classList.toggle('open')
}

header__mobile_menu.addEventListener('click', openBurgerMenu, false)
header__menu_close.addEventListener('click', closeBurgerMenu, false)
nav__item.forEach(el=>el.addEventListener('click', openCloseSubMenu, false))
faq__item.forEach(el=>el.addEventListener('click', faqOpenClose, false))

mediaQuery.addEventListener('change', handleTabletChange, false)
