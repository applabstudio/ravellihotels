const hamburgher = function() {
  let logo = document.querySelector('#logo-open');
  let logoh4 = document.querySelector('#logoh4');
    document.querySelector('#logo-open').addEventListener('click', function() {
      logo.style.visibility = 'hidden';
      logoh4.style.visibility = 'hidden';
    });
    document.querySelector('.uk-close').addEventListener('click', function() {
      logo.style.visibility = 'visible';
      logoh4.style.visibility = 'visible';
    });
}

export default { init:hamburgher };