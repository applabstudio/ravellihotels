const dom = {
  siteHeader: '.uk-navbar',
  siteNav: '.js-site-nav',
  toTop: '.toTop',
};

const setScrollClass = (evt) => {
  const siteHeader = document.querySelector(dom.siteHeader);
  if (window.pageYOffset > 1) {
    siteHeader.classList.add('sticky');
  } else {
    siteHeader.classList.remove('sticky');
  }
}

const setVisibleScrollToTop = (evt) => {
  const toTop = document.querySelector(dom.toTop);
  if (window.pageYOffset > 250) {
    toTop.classList.remove('uk-hidden');
  } else {
    toTop.classList.add('uk-hidden');
  }
}

const events = () => {
  window.addEventListener('scroll', setScrollClass);
  window.addEventListener('scroll', setVisibleScrollToTop);
};

export default {
  init: () => {
    events();
  },
};