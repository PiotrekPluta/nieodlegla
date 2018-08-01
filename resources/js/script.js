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
  $(function () {
    if (window.location.hash) {
      var hash = window.location.hash.substring(1);
      if (hash === "wyczyn1") {
        wyczyn1_open();
      }
      else if (hash === "wyczyn2") {
        wyczyn2_open();
      }
      else if (hash === "wyczyn3") {
        wyczyn3_open();
      }
      else if (hash === "wyczyn4") {
        wyczyn4_open();
      }
      else if (hash === "wyczyn5") {
        wyczyn5_open();
      }
      else if (hash === "wyczyn6") {
        wyczyn6_open();
      }
      else if (hash === "wyczyn7") {
        wyczyn7_open();
      }
      else if (hash === "wyczyn8") {
        wyczyn8_open();
      }
      else if (hash === "wyczyn9") {
        wyczyn9_open();
      }
      else if (hash === "wyczyn10") {
        wyczyn10_open();
      }
      else if (hash === "wyczyn11") {
        wyczyn11_open();
      }
      else if (hash === "wyczyn12") {
        wyczyn12_open();
      }
      else if (hash === "wyczyn13") {
        wyczyn13_open();
      }
      else if (hash === "wyczyn14") {
        wyczyn14_open();
      }
      else if (hash === "wyczyn15") {
        wyczyn15_open();
      }
      else if (hash === "wyczyn16") {
        wyczyn16_open();
      }
      else if (hash === "wyczyn17") {
        wyczyn17_open();
      }
      else if (hash === "wyczyn18") {
        wyczyn18_open();
      }
      else if (hash === "wyczyn19") {
        wyczyn19_open();
      }
      else if (hash === "wyczyn20") {
        wyczyn20_open();
      }
      else if (hash === "wyczyn21") {
        wyczyn21_open();
      }
      else if (hash === "wyczyn22") {
        wyczyn22_open();
      }
      else if (hash === "wyczyn23") {
        wyczyn23_open();
      }
      else if (hash === "wyczyn24") {
        wyczyn24_open();
      }
      else if (hash === "wyczyn25") {
        wyczyn25_open();
      }
      else if (hash === "wyczyn26") {
        wyczyn26_open();
      }
      else if (hash === "wyczyn27") {
        wyczyn27_open();
      }
      else if (hash === "wyczyn28") {
        wyczyn28_open();
      }
      else if (hash === "wyczyn29") {
        wyczyn29_open();
      }
      else if (hash === "wyczyn30") {
        wyczyn30_open();
      }
      else if (hash === "wyczyn31") {
        wyczyn31_open();
      }
      else if (hash === "wyczyn32") {
        wyczyn32_open();
      }
      else if (hash === "wyczyn33") {
        wyczyn33_open();
      }
      else if (hash === "wyczyn34") {
        wyczyn34_open();
      }
      else if (hash === "wyczyn35") {
        wyczyn35_open();
      }
      else if (hash === "wyczyn36") {
        wyczyn36_open();
      }
      else if (hash === "wyczyn37") {
        wyczyn37_open();
      }
      else if (hash === "wyczyn38") {
        wyczyn38_open();
      }
      else if (hash === "wyczyn39") {
        wyczyn39_open();
      }
      else if (hash === "wyczyn40") {
        wyczyn40_open();
      }
      else if (hash === "wyczyn41") {
        wyczyn41_open();
      }
      else if (hash === "wyczyn42") {
        wyczyn42_open();
      }
      else if (hash === "wyczyn43") {
        wyczyn43_open();
      }
      else if (hash === "wyczyn44") {
        wyczyn44_open();
      }
      else if (hash === "wyczyn45") {
        wyczyn45_open();
      }
      else if (hash === "wyczyn46") {
        wyczyn46_open();
      }
      else if (hash === "wyczyn47") {
        wyczyn47_open();
      }
      else if (hash === "wyczyn48") {
        wyczyn48_open();
      }
      else if (hash === "wyczyn49") {
        wyczyn49_open();
      }
      else if (hash === "wyczyn50") {
        wyczyn50_open();
      }
      else if (hash === "wyczyn51") {
        wyczyn51_open();
      }
      else if (hash === "wyczyn52") {
        wyczyn52_open();
      }
      else if (hash === "wyczyn53") {
        wyczyn53_open();
      }
      else if (hash === "wyczyn54") {
        wyczyn54_open();
      }
      else if (hash === "wyczyn55") {
        wyczyn55_open();
      }
      else if (hash === "wyczyn56") {
        wyczyn56_open();
      }
      else if (hash === "wyczyn57") {
        wyczyn57_open();
      }
      else if (hash === "wyczyn58") {
        wyczyn58_open();
      }
      else if (hash === "wyczyn59") {
        wyczyn59_open();
      }
      else if (hash === "wyczyn60") {
        wyczyn60_open();
      }
      else if (hash === "wyczyn61") {
        wyczyn61_open();
      }
      else if (hash === "wyczyn62") {
        wyczyn62_open();
      }
      else if (hash === "wyczyn63") {
        wyczyn63_open();
      }
      else if (hash === "wyczyn64") {
        wyczyn64_open();
      }
      else if (hash === "wyczyn65") {
        wyczyn65_open();
      }
      else if (hash === "wyczyn66") {
        wyczyn66_open();
      }
      else if (hash === "wyczyn67") {
        wyczyn67_open();
      }
      else if (hash === "wyczyn68") {
        wyczyn68_open();
      }
      else if (hash === "wyczyn69") {
        wyczyn69_open();
      }
      else if (hash === "wyczyn70") {
        wyczyn70_open();
      }
      else if (hash === "wyczyn71") {
        wyczyn71_open();
      }
      else if (hash === "wyczyn72") {
        wyczyn72_open();
      }
      else if (hash === "wyczyn73") {
        wyczyn73_open();
      }
      else if (hash === "wyczyn74") {
        wyczyn74_open();
      }
      else if (hash === "wyczyn75") {
        wyczyn75_open();
      }
      else if (hash === "wyczyn76") {
        wyczyn76_open();
      }
      else if (hash === "wyczyn77") {
        wyczyn77_open();
      }
      else if (hash === "wyczyn78") {
        wyczyn78_open();
      }
      else if (hash === "wyczyn79") {
        wyczyn79_open();
      }
      else if (hash === "wyczyn80") {
        wyczyn80_open();
      }
      else if (hash === "wyczyn81") {
        wyczyn81_open();
      }
      else if (hash === "wyczyn82") {
        wyczyn82_open();
      }
      else if (hash === "wyczyn83") {
        wyczyn83_open();
      }
      else if (hash === "wyczyn84") {
        wyczyn84_open();
      }
      else if (hash === "wyczyn85") {
        wyczyn85_open();
      }
      else if (hash === "wyczyn86") {
        wyczyn86_open();
      }
      else if (hash === "wyczyn87") {
        wyczyn87_open();
      }
      else if (hash === "wyczyn88") {
        wyczyn88_open();
      }
      else if (hash === "wyczyn89") {
        wyczyn89_open();
      }
      else if (hash === "wyczyn90") {
        wyczyn90_open();
      }
      else if (hash === "wyczyn91") {
        wyczyn91_open();
      }
      else if (hash === "wyczyn92") {
        wyczyn92_open();
      }
      else if (hash === "wyczyn93") {
        wyczyn93_open();
      }
      else if (hash === "wyczyn94") {
        wyczyn94_open();
      }
      else if (hash === "wyczyn95") {
        wyczyn95_open();
      }
      else if (hash === "wyczyn96") {
        wyczyn96_open();
      }
      else if (hash === "wyczyn97") {
        wyczyn97_open();
      }
      else if (hash === "wyczyn98") {
        wyczyn98_open();
      }
      else if (hash === "wyczyn99") {
        wyczyn99_open();
      }
      else if (hash === "wyczyn100") {
        wyczyn100_open();
      }

    }

  });

  function wyczyn1_open() {
    $('#wyczyn1').click();
  }

  function wyczyn2_open() {
    $('#wyczyn2').click();
  }

  function wyczyn3_open() {
    $('#wyczyn3').click();
  }

  function wyczyn4_open() {
    $('#wyczyn4').click();
  }

  function wyczyn5_open() {
    $('#wyczyn5').click();
  }

  function wyczyn6_open() {
    $('#wyczyn6').click();
  }

  function wyczyn7_open() {
    $('#wyczyn7').click();
  }

  function wyczyn8_open() {
    $('#wyczyn8').click();
  }

  function wyczyn9_open() {
    $('#wyczyn9').click();
  }

  function wyczyn10_open() {
    $('#wyczyn10').click();
  }

  function wyczyn11_open() {
    $('#wyczyn11').click();
  }

  function wyczyn12_open() {
    $('#wyczyn12').click();
  }

  function wyczyn13_open() {
    $('#wyczyn13').click();
  }

  function wyczyn14_open() {
    $('#wyczyn14').click();
  }

  function wyczyn15_open() {
    $('#wyczyn15').click();
  }

  function wyczyn16_open() {
    $('#wyczyn16').click();
  }

  function wyczyn17_open() {
    $('#wyczyn17').click();
  }

  function wyczyn18_open() {
    $('#wyczyn18').click();
  }

  function wyczyn19_open() {
    $('#wyczyn19').click();
  }

  function wyczyn20_open() {
    $('#wyczyn20').click();
  }

  function wyczyn21_open() {
    $('#wyczyn21').click();
  }

  function wyczyn22_open() {
    $('#wyczyn22').click();
  }

  function wyczyn23_open() {
    $('#wyczyn23').click();
  }

  function wyczyn24_open() {
    $('#wyczyn24').click();
  }

  function wyczyn25_open() {
    $('#wyczyn25').click();
  }

  function wyczyn26_open() {
    $('#wyczyn26').click();
  }

  function wyczyn27_open() {
    $('#wyczyn27').click();
  }

  function wyczyn28_open() {
    $('#wyczyn28').click();
  }

  function wyczyn29_open() {
    $('#wyczyn29').click();
  }

  function wyczyn30_open() {
    $('#wyczyn30').click();
  }

  function wyczyn31_open() {
    $('#wyczyn31').click();
  }

  function wyczyn32_open() {
    $('#wyczyn32').click();
  }

  function wyczyn33_open() {
    $('#wyczyn33').click();
  }

  function wyczyn34_open() {
    $('#wyczyn34').click();
  }

  function wyczyn35_open() {
    $('#wyczyn35').click();
  }

  function wyczyn36_open() {
    $('#wyczyn36').click();
  }

  function wyczyn37_open() {
    $('#wyczyn37').click();
  }

  function wyczyn38_open() {
    $('#wyczyn38').click();
  }

  function wyczyn39_open() {
    $('#wyczyn39').click();
  }

  function wyczyn40_open() {
    $('#wyczyn40').click();
  }

  function wyczyn41_open() {
    $('#wyczyn41').click();
  }

  function wyczyn42_open() {
    $('#wyczyn42').click();
  }

  function wyczyn43_open() {
    $('#wyczyn43').click();
  }

  function wyczyn44_open() {
    $('#wyczyn44').click();
  }

  function wyczyn45_open() {
    $('#wyczyn45').click();
  }

  function wyczyn46_open() {
    $('#wyczyn46').click();
  }

  function wyczyn47_open() {
    $('#wyczyn47').click();
  }

  function wyczyn48_open() {
    $('#wyczyn48').click();
  }

  function wyczyn49_open() {
    $('#wyczyn49').click();
  }

  function wyczyn50_open() {
    $('#wyczyn50').click();
  }

  function wyczyn51_open() {
    $('#wyczyn51').click();
  }

  function wyczyn52_open() {
    $('#wyczyn52').click();
  }

  function wyczyn53_open() {
    $('#wyczyn53').click();
  }

  function wyczyn54_open() {
    $('#wyczyn54').click();
  }

  function wyczyn55_open() {
    $('#wyczyn55').click();
  }

  function wyczyn56_open() {
    $('#wyczyn56').click();
  }

  function wyczyn57_open() {
    $('#wyczyn57').click();
  }

  function wyczyn58_open() {
    $('#wyczyn58').click();
  }

  function wyczyn59_open() {
    $('#wyczyn59').click();
  }

  function wyczyn60_open() {
    $('#wyczyn60').click();
  }

  function wyczyn61_open() {
    $('#wyczyn61').click();
  }

  function wyczyn62_open() {
    $('#wyczyn62').click();
  }

  function wyczyn63_open() {
    $('#wyczyn63').click();
  }

  function wyczyn64_open() {
    $('#wyczyn64').click();
  }

  function wyczyn65_open() {
    $('#wyczyn65').click();
  }

  function wyczyn66_open() {
    $('#wyczyn66').click();
  }

  function wyczyn67_open() {
    $('#wyczyn67').click();
  }

  function wyczyn68_open() {
    $('#wyczyn68').click();
  }

  function wyczyn69_open() {
    $('#wyczyn69').click();
  }

  function wyczyn70_open() {
    $('#wyczyn70').click();
  }

  function wyczyn71_open() {
    $('#wyczyn71').click();
  }

  function wyczyn72_open() {
    $('#wyczyn72').click();
  }

  function wyczyn73_open() {
    $('#wyczyn73').click();
  }

  function wyczyn74_open() {
    $('#wyczyn74').click();
  }

  function wyczyn75_open() {
    $('#wyczyn75').click();
  }

  function wyczyn76_open() {
    $('#wyczyn76').click();
  }

  function wyczyn77_open() {
    $('#wyczyn77').click();
  }

  function wyczyn78_open() {
    $('#wyczyn78').click();
  }

  function wyczyn79_open() {
    $('#wyczyn79').click();
  }

  function wyczyn80_open() {
    $('#wyczyn80').click();
  }

  function wyczyn81_open() {
    $('#wyczyn81').click();
  }

  function wyczyn82_open() {
    $('#wyczyn82').click();
  }

  function wyczyn83_open() {
    $('#wyczyn83').click();
  }

  function wyczyn84_open() {
    $('#wyczyn84').click();
  }

  function wyczyn85_open() {
    $('#wyczyn85').click();
  }

  function wyczyn86_open() {
    $('#wyczyn86').click();
  }

  function wyczyn87_open() {
    $('#wyczyn87').click();
  }

  function wyczyn88_open() {
    $('#wyczyn88').click();
  }

  function wyczyn89_open() {
    $('#wyczyn89').click();
  }

  function wyczyn90_open() {
    $('#wyczyn90').click();
  }

  function wyczyn91_open() {
    $('#wyczyn91').click();
  }

  function wyczyn92_open() {
    $('#wyczyn92').click();
  }

  function wyczyn93_open() {
    $('#wyczyn93').click();
  }

  function wyczyn94_open() {
    $('#wyczyn94').click();
  }

  function wyczyn95_open() {
    $('#wyczyn95').click();
  }

  function wyczyn96_open() {
    $('#wyczyn96').click();
  }

  function wyczyn97_open() {
    $('#wyczyn97').click();
  }

  function wyczyn98_open() {
    $('#wyczyn98').click();
  }

  function wyczyn99_open() {
    $('#wyczyn99').click();
  }

  function wyczyn100_open() {
    $('#wyczyn100').click();
  }

});