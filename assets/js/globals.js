(function () {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const mobileNav = $('.mobile-nav');
  const menuBtn = $('#menu-toggle');
  const background = $('.mobile-nav .background');
  const closeBtn = $('#menu-close');


  function openMobileNav() {
    mobileNav.classList.add('visible');
    // document.body.style.overflow = 'hidden';
    document.body.classList.add('noscroll');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('visible');
    // document.body.style.overflow = '';
    document.body.classList.remove('noscroll');
  }

  function initMobileNav() {
    menuBtn.addEventListener('click', openMobileNav);
    background.addEventListener('click', closeMobileNav);
    closeBtn.addEventListener('click', closeMobileNav);
  }

  window.addEventListener('load', () => {
    initMobileNav();
  });
})();