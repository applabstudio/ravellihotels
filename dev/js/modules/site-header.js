const dom = {
  siteHeader: '.uk-navbar',
  siteNav: '.js-site-nav',
};

const setScrollClass = (evt) => {
  const siteHeader = document.querySelector(dom.siteHeader);
  if (window.pageYOffset > 1) {
    siteHeader.classList.add('sticky');
  } else {
    siteHeader.classList.remove('sticky');
  }
}

const events = () => {
  window.addEventListener('scroll', setScrollClass);
};

export default {
  init: () => {
    events();
  },
};