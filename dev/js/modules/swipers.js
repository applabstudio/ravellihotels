import Swiper from 'swiper';

const dom = {
  hero: '[data-swiper="hero"]',
  card: '[data-swiper="cards"]',
  carousel: '[data-swiper="image-carousel"]',
  videogallery: '[data-swiper="video-carousel"]',
};

const heroSlider = () => {
  let swiper;
  const selector = dom.hero;

  function initSwiper() {
    swiper = new Swiper(selector, {
      speed: 700,
      loop: false,
      slidesPerView: 1,
      autoplay: {
        delay: 7000,
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  return {
    init: initSwiper,
  };
};

const cardSlider = () => {
  let swiper;
  const selector = dom.card;

  function initSwiper() {
    swiper = new Swiper(selector, {
      speed: 700,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 7000,
      },
      preloadImages: false,
      lazy: {
        elementClass: 'swiper-lazy',
        loadPrevNext: true,
        loadPrevNextAmount: 3,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 'auto',
          spaceBetween: 15,
        },
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  return {
    init: initSwiper,
  };
};

const imageCarousel = () => {
  let swiper;
  const selector = dom.carousel;

  function initSwiper() {
    swiper = new Swiper(selector, {
      autoplay: false,
      loop: false,
      slidesPerView: 'auto',
      freeMode: true,
    });
  }

  return {
    init: initSwiper,
  };
};

const videoGallery = () => {
  let swiper;
  const selector = dom.videogallery;

  function initSwiper() {
    swiper = new Swiper(selector, {
      autoplay: false,
      loop: false,
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 15,
    });
  }

  return {
    init: initSwiper,
  };
};

export default {
  initHeroSlider: () => {
    const slider = heroSlider();
    slider.init();
  },
  initCardSlider: () => {
    const slider = cardSlider();
    slider.init();
  },
  initCarousel: () => {
    const slider = imageCarousel();
    slider.init();
  },
  initVideogallery: () => {
    const slider = videoGallery();
    slider.init();
  },
};
