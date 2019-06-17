const dom = {
  handles: '[data-modal]',
  modals: '.modal',
  catalogForm: '.webform-submission-catalog-form',
};

const closeModal = (evt) => {
  if (!evt.target.closest('.modal__content')) {
    evt.preventDefault();
    evt.target.closest(dom.modals).classList.remove('open');
  }
};

const closeModalAfterSubmit = (evt) => {
  evt.target.closest(dom.modals).classList.remove('open');
};

const events = () => {
  const handles = Array.from(document.querySelectorAll(dom.handles));
  const modals = Array.from(document.querySelectorAll(dom.modals));
  const catalogForm = document.querySelector(dom.catalogForm);

  handles.forEach((handle) => {
    handle.addEventListener('click', (evt) => {
      const target = document.getElementById(evt.currentTarget.getAttribute('data-modal'));
      evt.preventDefault();
      target.classList.add('open');
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', closeModal);
  });

  if (catalogForm) {
    catalogForm.addEventListener('submit', closeModalAfterSubmit); 
  }
};

export default {
  init: events,
};
