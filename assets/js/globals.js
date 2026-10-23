// Native details keeps navigation usable when JavaScript is unavailable.
const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target)) mobileMenu.open = false;
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => { mobileMenu.open = false; });
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
    if (event.matches) mobileMenu.open = false;
  });
}
