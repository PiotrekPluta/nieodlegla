document.addEventListener("DOMContentLoaded", function (event) {

  document.body.classList.add('js-loading');
  window.addEventListener("load", showPage);

  function showPage() {
    document.body.classList.remove('js-loading');
  }

  const jsStickyNav = document.querySelector('.js--sticky-nav');
  const jsNavButton = document.querySelector('.js--nav-button');
  const bgModal = document.querySelector('.bg-modal');
  const modalBox = document.querySelector('.modal-box');
  const popUpCloseArrow = document.querySelectorAll('.popup-close-arrow');
  const buttonSuggest = document.querySelector('#btn-suggest');
  const featBox = document.querySelectorAll('.feat-box');
  const featsContent = document.querySelectorAll('.feat-content');
  const jsMobileNavIcon = document.querySelector('.js--mobile-nav-icon');

  /* Showing button in menu on scrolling down*/

  /* For the sticky navigation */
  $('.js--section-video').waypoint(direction => {
    if (direction === "down") {

      jsStickyNav.classList.remove('invisible');
      jsNavButton.classList.remove('invisible');

    } else {

      jsStickyNav.classList.add('invisible');

    }
  }, {
    offset: '400px;'
  });

  /*Showing the pop-up with contact form*/
  buttonSuggest.addEventListener('click', () => {

    bgModal.style.display = 'block';
    modalBox.style.display = 'block';

  });
  /*Closing the pop-up*/
  popUpCloseArrow.forEach(arrow => {

    arrow.addEventListener('click', () => {

      bgModal.style.display = 'none';
      modalBox.style.display = 'none';

    });
  });

  //SHOWING AND HIDING POP-UPS

  /*Showing the pop-up with feat-description*/

  featBox.forEach((feat, index) => {

    feat.addEventListener('click', () => {

      bgModal.style.display = 'block';
      featsContent[index].style.display = 'block';
      featsContent[index].style.position = 'fixed';

    });

    /*Closing the pop-up with feat-description*/
    popUpCloseArrow.forEach(arrow => {

      arrow.addEventListener('click', () => {

        bgModal.style.display = 'none';
        featsContent[index].style.display = 'none';

      });
    });
  });

  /* Mobile navigation */

  jsMobileNavIcon.addEventListener('click', () => {

    const menu = document.querySelector('.js--menu');
    const hamburger = document.querySelector('.js--hamburger');
    const goBackArrow = document.querySelector('.js--menu-go-back-arrow');
    const nav = document.querySelector('.js--nav');
    const blacklogo = document.querySelector('.js--black');
    const whitelogo = document.querySelector('.js--white');
    const background = document.querySelector('.js--menu-background');

    menu.slideToggle(10);

    if (hamburger.classList.contains('exist')) {

      hamburger.classList.add('not-exist');
      hamburger.classList.remove('exist');
      goBackArrow.classList.add('exist');
      goBackArrow.classList.remove('not-exist');
      jsNavButton.classList.add('visible');
      jsNavButton.classList.remove('invisible');
      background.classList.add('exist');
      background.classList.remove('not-exist');

    } else {

      hamburger.classList.add('exist');
      hamburger.classList.remove('not-exist');
      goBackArrow.classList.add('not-exist');
      goBackArrow.classList.remove('exist')
      jsNavButton.classList.add('invisible');
      jsNavButton.classList.remove('visible');
      background.classList.add('not-exist');
      background.classList.remove('exist');

    }
  });

  /*Function to open a pop-up that is shared in a link*/
  function featOpen(id) {
    $(id).click();
  }

  $(function () {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      featOpen(hash);
    }

  });

});