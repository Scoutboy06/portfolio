const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function initMobileNav() {
  const mobileNav = $('.mobile-nav');
  const menuBtn = $('#menu-toggle');
  const background = $('.mobile-nav .background');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('visible');
  });

  background.addEventListener('click', () => {
    mobileNav.classList.remove('visible');
  });
}

window.addEventListener('load', () => {
  initMobileNav();
});