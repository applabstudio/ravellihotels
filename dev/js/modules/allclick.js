const dom = {
  selector: '.js-allclick',
};

const allclick = (evt) => {
  evt.preventDefault();
  let link = evt.target.closest(dom.selector).querySelector('a').getAttribute('href');
  location.href = link;
};

export default {
  init: function init() {
    document.addEventListener('click', (evt) => {
      if (evt.target.matches(`${dom.selector},${dom.selector} *`)) {
        allclick(evt);
      }
    });
  },
};