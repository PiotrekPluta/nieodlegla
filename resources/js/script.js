$(document).ready(function () {
   /* Script to control wether the page is loaded or not */ 
    document.body.classList.add('js-loading');

    window.addEventListener("load", showPage);

    function showPage() {
    document.body.classList.remove('js-loading');
    }
    
    /* Showing button in menu on scrolling down*/
    
        /* For the sticky navigation */
    $('.js--section-video').waypoint(function(direction) {
        if (direction == "down") {
            $('.js--sticky-nav').removeClass('invisible');
            $('.js--nav-button').removeClass('invisible');
            
            //$('.js--sticky-nav').addClass('visible');
        } else {
            //$('.js--sticky-nav').removeClass('visible');
            $('.js--sticky-nav').addClass('invisible');
        }
    }, {
      offset: '400px;'
    });
    
    
    
    /*Showing the pop-up with contact form*/
    $('#btn-suggest').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('.modal-box').style.display = 'block';
    });
    /*Closing the pop-up*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.modal-box').style.display = 'none';
    });
    
//--------------------------------------------------------------------------//
//SHOWING AND HIDING POP-UPS
    
        /*Showing the pop-up with feat-description*/
    $('#wyczyn1').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn1_content').style.display = 'block';
        document.querySelector('#wyczyn1_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn1_content').style.display = 'none';
    });
    
        $('#wyczyn2').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn2_content').style.display = 'block';
        document.querySelector('#wyczyn2_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn2_content').style.display = 'none';
    });
    $('#wyczyn3').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn3_content').style.display = 'block';
        document.querySelector('#wyczyn3_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn3_content').style.display = 'none';
    });
    $('#wyczyn4').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn4_content').style.display = 'block';
        document.querySelector('#wyczyn4_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn4_content').style.display = 'none';
    });
    $('#wyczyn5').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn5_content').style.display = 'block';
        document.querySelector('#wyczyn5_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn5_content').style.display = 'none';
    });
    $('#wyczyn6').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn6_content').style.display = 'block';
        document.querySelector('#wyczyn6_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn6_content').style.display = 'none';
    });
    $('#wyczyn7').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn7_content').style.display = 'block';
        document.querySelector('#wyczyn7_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn7_content').style.display = 'none';
    });
    $('#wyczyn8').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn8_content').style.display = 'block';
        document.querySelector('#wyczyn8_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn8_content').style.display = 'none';
    });
    $('#wyczyn9').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn9_content').style.display = 'block';
        document.querySelector('#wyczyn9_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn9_content').style.display = 'none';
    });
    $('#wyczyn10').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn10_content').style.display = 'block';
        document.querySelector('#wyczyn10_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn10_content').style.display = 'none';
    });
    $('#wyczyn11').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn11_content').style.display = 'block';
        document.querySelector('#wyczyn11_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn11_content').style.display = 'none';
    });
    $('#wyczyn12').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn12_content').style.display = 'block';
        document.querySelector('#wyczyn12_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn12_content').style.display = 'none';
    });
    $('#wyczyn13').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn13_content').style.display = 'block';
        document.querySelector('#wyczyn13_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn13_content').style.display = 'none';
    });
    $('#wyczyn14').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn14_content').style.display = 'block';
        document.querySelector('#wyczyn14_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn14_content').style.display = 'none';
    });


    $('#wyczyn15').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn15_content').style.display = 'block';
        document.querySelector('#wyczyn15_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn15_content').style.display = 'none';
    });
    $('#wyczyn16').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn16_content').style.display = 'block';
        document.querySelector('#wyczyn16_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn16_content').style.display = 'none';
    });
    $('#wyczyn17').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn17_content').style.display = 'block';
        document.querySelector('#wyczyn17_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn17_content').style.display = 'none';
    });
    $('#wyczyn18').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn18_content').style.display = 'block';
        document.querySelector('#wyczyn18_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn18_content').style.display = 'none';
    });
    $('#wyczyn19').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn19_content').style.display = 'block';
        document.querySelector('#wyczyn19_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn19_content').style.display = 'none';
    });
    $('#wyczyn20').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn20_content').style.display = 'block';
        document.querySelector('#wyczyn20_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn20_content').style.display = 'none';
    });
    $('#wyczyn21').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn21_content').style.display = 'block';
        document.querySelector('#wyczyn21_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn21_content').style.display = 'none';
    });
    $('#wyczyn22').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn22_content').style.display = 'block';
        document.querySelector('#wyczyn22_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn22_content').style.display = 'none';
    });
    $('#wyczyn23').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn23_content').style.display = 'block';
        document.querySelector('#wyczyn23_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn23_content').style.display = 'none';
    });
    $('#wyczyn24').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn24_content').style.display = 'block';
        document.querySelector('#wyczyn24_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn24_content').style.display = 'none';
    });
    $('#wyczyn25').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn25_content').style.display = 'block';
        document.querySelector('#wyczyn25_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn25_content').style.display = 'none';
    });
    $('#wyczyn26').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn26_content').style.display = 'block';
        document.querySelector('#wyczyn26_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn26_content').style.display = 'none';
    });
    $('#wyczyn27').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn27_content').style.display = 'block';
        document.querySelector('#wyczyn27_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn27_content').style.display = 'none';
    });
    $('#wyczyn28').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn28_content').style.display = 'block';
        document.querySelector('#wyczyn28_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn28_content').style.display = 'none';
    });
    $('#wyczyn29').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn29_content').style.display = 'block';
        document.querySelector('#wyczyn29_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn29_content').style.display = 'none';
    });
    $('#wyczyn30').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn30_content').style.display = 'block';
        document.querySelector('#wyczyn30_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn30_content').style.display = 'none';
    });
    $('#wyczyn31').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn31_content').style.display = 'block';
        document.querySelector('#wyczyn31_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn31_content').style.display = 'none';
    });
    $('#wyczyn32').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn32_content').style.display = 'block';
        document.querySelector('#wyczyn32_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn32_content').style.display = 'none';
    });
    $('#wyczyn33').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn33_content').style.display = 'block';
        document.querySelector('#wyczyn33_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn33_content').style.display = 'none';
    });
    $('#wyczyn34').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn34_content').style.display = 'block';
        document.querySelector('#wyczyn34_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn34_content').style.display = 'none';
    });
    $('#wyczyn35').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn35_content').style.display = 'block';
        document.querySelector('#wyczyn35_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn35_content').style.display = 'none';
    });
    $('#wyczyn36').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn36_content').style.display = 'block';
        document.querySelector('#wyczyn36_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn36_content').style.display = 'none';
    });
    $('#wyczyn37').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn37_content').style.display = 'block';
        document.querySelector('#wyczyn37_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn37_content').style.display = 'none';
    });
    $('#wyczyn38').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn38_content').style.display = 'block';
        document.querySelector('#wyczyn38_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn38_content').style.display = 'none';
    });
    $('#wyczyn39').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn39_content').style.display = 'block';
        document.querySelector('#wyczyn39_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn39_content').style.display = 'none';
    });
    $('#wyczyn40').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn40_content').style.display = 'block';
        document.querySelector('#wyczyn40_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn40_content').style.display = 'none';
    });
    $('#wyczyn41').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn41_content').style.display = 'block';
        document.querySelector('#wyczyn41_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn41_content').style.display = 'none';
    });
    $('#wyczyn42').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn42_content').style.display = 'block';
        document.querySelector('#wyczyn42_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn42_content').style.display = 'none';
    });
    $('#wyczyn43').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn43_content').style.display = 'block';
        document.querySelector('#wyczyn43_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn43_content').style.display = 'none';
    });
        $('#wyczyn44').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn44_content').style.display = 'block';
        document.querySelector('#wyczyn44_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn44_content').style.display = 'none';
    });
        $('#wyczyn45').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn45_content').style.display = 'block';
        document.querySelector('#wyczyn45_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn45_content').style.display = 'none';
    });
     $('#wyczyn46').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn46_content').style.display = 'block';
        document.querySelector('#wyczyn46_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn46_content').style.display = 'none';
    });
    $('#wyczyn47').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn47_content').style.display = 'block';
        document.querySelector('#wyczyn47_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn47_content').style.display = 'none';
    });
    $('#wyczyn48').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn48_content').style.display = 'block';
        document.querySelector('#wyczyn48_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn48_content').style.display = 'none';
    });
    $('#wyczyn49').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn49_content').style.display = 'block';
        document.querySelector('#wyczyn49_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn49_content').style.display = 'none';
    });
    $('#wyczyn50').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn50_content').style.display = 'block';
        document.querySelector('#wyczyn50_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn50_content').style.display = 'none';
    });
    $('#wyczyn51').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn51_content').style.display = 'block';
        document.querySelector('#wyczyn51_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn51_content').style.display = 'none';
    });
    $('#wyczyn52').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn52_content').style.display = 'block';
        document.querySelector('#wyczyn52_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn52_content').style.display = 'none';
    });
        $('#wyczyn53').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn53_content').style.display = 'block';
        document.querySelector('#wyczyn53_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn53_content').style.display = 'none';
    });
    $('#wyczyn54').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn54_content').style.display = 'block';
        document.querySelector('#wyczyn54_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn54_content').style.display = 'none';
    });

    $('#wyczyn54').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn54_content').style.display = 'block';
        document.querySelector('#wyczyn54_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn54_content').style.display = 'none';
    });
    $('#wyczyn55').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn55_content').style.display = 'block';
        document.querySelector('#wyczyn55_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn55_content').style.display = 'none';
    });
    $('#wyczyn56').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn56_content').style.display = 'block';
        document.querySelector('#wyczyn56_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn56_content').style.display = 'none';
    });
    $('#wyczyn57').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn57_content').style.display = 'block';
        document.querySelector('#wyczyn57_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn57_content').style.display = 'none';
    });
    $('#wyczyn58').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn58_content').style.display = 'block';
        document.querySelector('#wyczyn58_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn58_content').style.display = 'none';
    });
    $('#wyczyn59').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn59_content').style.display = 'block';
        document.querySelector('#wyczyn59_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn59_content').style.display = 'none';
    });
    $('#wyczyn60').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn60_content').style.display = 'block';
        document.querySelector('#wyczyn60_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn60_content').style.display = 'none';
    });
      $('#wyczyn61').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn61_content').style.display = 'block';
        document.querySelector('#wyczyn61_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn61_content').style.display = 'none';
    });
    $('#wyczyn62').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn62_content').style.display = 'block';
        document.querySelector('#wyczyn62_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn62_content').style.display = 'none';
    });
    $('#wyczyn63').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn63_content').style.display = 'block';
        document.querySelector('#wyczyn63_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn63_content').style.display = 'none';
    });
    $('#wyczyn64').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn64_content').style.display = 'block';
        document.querySelector('#wyczyn64_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn64_content').style.display = 'none';
    });
    $('#wyczyn65').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn65_content').style.display = 'block';
        document.querySelector('#wyczyn65_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn65_content').style.display = 'none';
    });
    $('#wyczyn66').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn66_content').style.display = 'block';
        document.querySelector('#wyczyn66_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn66_content').style.display = 'none';
    });
    $('#wyczyn67').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn67_content').style.display = 'block';
        document.querySelector('#wyczyn67_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn67_content').style.display = 'none';
    });
    $('#wyczyn68').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn68_content').style.display = 'block';
        document.querySelector('#wyczyn68_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn68_content').style.display = 'none';
    });
    $('#wyczyn69').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn69_content').style.display = 'block';
        document.querySelector('#wyczyn69_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn69_content').style.display = 'none';
    });
    $('#wyczyn70').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn70_content').style.display = 'block';
        document.querySelector('#wyczyn70_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn70_content').style.display = 'none';
    });
    $('#wyczyn71').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn71_content').style.display = 'block';
        document.querySelector('#wyczyn71_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn71_content').style.display = 'none';
    });
      $('#wyczyn72').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn72_content').style.display = 'block';
        document.querySelector('#wyczyn72_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn72_content').style.display = 'none';
    });
    $('#wyczyn73').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn73_content').style.display = 'block';
        document.querySelector('#wyczyn73_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn73_content').style.display = 'none';
    });
    $('#wyczyn74').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn74_content').style.display = 'block';
        document.querySelector('#wyczyn74_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn74_content').style.display = 'none';
    });
    $('#wyczyn75').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn75_content').style.display = 'block';
        document.querySelector('#wyczyn75_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn75_content').style.display = 'none';
    });
    $('#wyczyn76').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn76_content').style.display = 'block';
        document.querySelector('#wyczyn76_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn76_content').style.display = 'none';
    });
    $('#wyczyn77').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn77_content').style.display = 'block';
        document.querySelector('#wyczyn77_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn77_content').style.display = 'none';
    });
    $('#wyczyn78').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn78_content').style.display = 'block';
        document.querySelector('#wyczyn78_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn78_content').style.display = 'none';
    });

        $('#wyczyn79').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn79_content').style.display = 'block';
        document.querySelector('#wyczyn79_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn79_content').style.display = 'none';
    });
    $('#wyczyn80').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn80_content').style.display = 'block';
        document.querySelector('#wyczyn80_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn80_content').style.display = 'none';
    });
    $('#wyczyn81').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn81_content').style.display = 'block';
        document.querySelector('#wyczyn81_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn81_content').style.display = 'none';
    });
    $('#wyczyn82').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn82_content').style.display = 'block';
        document.querySelector('#wyczyn82_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn82_content').style.display = 'none';
    });
    $('#wyczyn83').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn83_content').style.display = 'block';
        document.querySelector('#wyczyn83_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn83_content').style.display = 'none';
    });
   $('#wyczyn84').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn84_content').style.display = 'block';
        document.querySelector('#wyczyn84_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn84_content').style.display = 'none';
    });
    $('#wyczyn85').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn85_content').style.display = 'block';
        document.querySelector('#wyczyn85_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn85_content').style.display = 'none';
    });

    $('#wyczyn86').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn86_content').style.display = 'block';
        document.querySelector('#wyczyn86_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn86_content').style.display = 'none';
    });
    $('#wyczyn87').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn87_content').style.display = 'block';
        document.querySelector('#wyczyn87_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn87_content').style.display = 'none';
    });
    $('#wyczyn88').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn88_content').style.display = 'block';
        document.querySelector('#wyczyn88_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn88_content').style.display = 'none';
    });
        $('#wyczyn89').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn89_content').style.display = 'block';
        document.querySelector('#wyczyn89_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn89_content').style.display = 'none';
    });
    $('#wyczyn90').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn90_content').style.display = 'block';
        document.querySelector('#wyczyn90_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn90_content').style.display = 'none';
    });
    $('#wyczyn91').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn91_content').style.display = 'block';
        document.querySelector('#wyczyn91_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn91_content').style.display = 'none';
    });
    $('#wyczyn92').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn92_content').style.display = 'block';
        document.querySelector('#wyczyn92_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn92_content').style.display = 'none';
    });
    $('#wyczyn93').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn93_content').style.display = 'block';
        document.querySelector('#wyczyn93_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn93_content').style.display = 'none';
    });
    $('#wyczyn94').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn94_content').style.display = 'block';
        document.querySelector('#wyczyn94_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn94_content').style.display = 'none';
    });
    $('#wyczyn94').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn94_content').style.display = 'block';
        document.querySelector('#wyczyn94_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn94_content').style.display = 'none';
    });
    $('#wyczyn95').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn95_content').style.display = 'block';
        document.querySelector('#wyczyn95_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn95_content').style.display = 'none';
    });
    $('#wyczyn96').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn96_content').style.display = 'block';
        document.querySelector('#wyczyn96_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn96_content').style.display = 'none';
    });
    $('#wyczyn97').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn97_content').style.display = 'block';
        document.querySelector('#wyczyn97_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn97_content').style.display = 'none';
    });
    $('#wyczyn98').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn98_content').style.display = 'block';
        document.querySelector('#wyczyn98_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn98_content').style.display = 'none';
    });
    $('#wyczyn99').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn99_content').style.display = 'block';
        document.querySelector('#wyczyn99_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn99_content').style.display = 'none';
    });
    $('#wyczyn100').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn100_content').style.display = 'block';
        document.querySelector('#wyczyn100_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn100_content').style.display = 'none';
    });
    $('#wyczyn101').click(function() {
        document.querySelector('.bg-modal').style.display = 'block';
        document.querySelector('#wyczyn101_content').style.display = 'block';
        document.querySelector('#wyczyn101_content').style.position = 'fixed';
    });
    /*Closing the pop-up with feat-description*/
        $('.popup-close-arrow').click(function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('#wyczyn101_content').style.display = 'none';
    });


    
    
        /* Mobile navigation */
    $('.js--mobile-nav-icon').click(function() {
        var menu = $('.js--menu');
        var hamburger = $('#js--hamburger');
        var gobackarrow = $('#js--menu-go-back-arrow');
        var nav=$('.js--nav');
        var navbutton=$('.js--nav-button');
        var blacklogo=$('.js--black');
        var whitelogo=$('.js--white');
        var backgr=$('.js--menu-background');
        
        menu.slideToggle(10);
        if (hamburger.hasClass('exist')) {
            hamburger.addClass('not-exist');
            hamburger.removeClass('exist');
            gobackarrow.addClass('exist');
            gobackarrow.removeClass('not-exist')
            /*nav.addClass('lake-color');
            nav.removeClass('sea-color');*/
            navbutton.addClass('visible');
            navbutton.removeClass('invisible');
            /*blacklogo.addClass('not-exist');
            blacklogo.removeClass('exist');
            whitelogo.addClass('exist');
            whitelogo.removeClass('not-exist');*/
            backgr.addClass('exist');
            backgr.removeClass('not-exist');
            
        } else {
            hamburger.addClass('exist');
            hamburger.removeClass('not-exist');
            gobackarrow.addClass('not-exist');
            gobackarrow.removeClass('exist')
            navbutton.addClass('invisible');
            navbutton.removeClass('visible');
            backgr.addClass('not-exist');
            backgr.removeClass('exist');
            /*nav.addClass('sea-color');
            nav.removeClass('lake-color');*/
            /*blacklogo.addClass('exist');
            blacklogo.removeClass('not-exist');
            whitelogo.addClass('not-exist');
            whitelogo.removeClass('exist');*/

        }        
    });
    
/*Function to open a pop-up that is shared in a link*/    
    $(function(){
   if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (hash == "wyczyn1"){wyczyn1_open();}
       else if (hash == "wyczyn2") {wyczyn2_open();}
        else if (hash == "wyczyn3") {wyczyn3_open();}
        else if (hash == "wyczyn4") {wyczyn4_open();}
        else if (hash == "wyczyn5") {wyczyn5_open();}
        else if (hash == "wyczyn6") {wyczyn6_open();}
        else if (hash == "wyczyn7") {wyczyn7_open();}
        else if (hash == "wyczyn8") {wyczyn8_open();}
        else if (hash == "wyczyn9") {wyczyn9_open();}
        else if (hash == "wyczyn10") {wyczyn10_open();}
        else if (hash == "wyczyn11") {wyczyn11_open();}
        else if (hash == "wyczyn12") {wyczyn12_open();}
        else if (hash == "wyczyn13") {wyczyn13_open();}
        else if (hash == "wyczyn14") {wyczyn14_open();}
        else if (hash == "wyczyn15") {wyczyn15_open();}
        else if (hash == "wyczyn16") {wyczyn16_open();}
        else if (hash == "wyczyn17") {wyczyn17_open();}
        else if (hash == "wyczyn18") {wyczyn18_open();}
        else if (hash == "wyczyn19") {wyczyn19_open();}
        else if (hash == "wyczyn20") {wyczyn20_open();}
        else if (hash == "wyczyn21") {wyczyn21_open();}
        else if (hash == "wyczyn22") {wyczyn22_open();}
        else if (hash == "wyczyn23") {wyczyn23_open();}
        else if (hash == "wyczyn24") {wyczyn24_open();}
        else if (hash == "wyczyn25") {wyczyn25_open();}
        else if (hash == "wyczyn26") {wyczyn26_open();}
        else if (hash == "wyczyn27") {wyczyn27_open();}
        else if (hash == "wyczyn28") {wyczyn28_open();}
        else if (hash == "wyczyn29") {wyczyn29_open();}
        else if (hash == "wyczyn30") {wyczyn30_open();}
        else if (hash == "wyczyn31") {wyczyn31_open();}
        else if (hash == "wyczyn32") {wyczyn32_open();}
        else if (hash == "wyczyn33") {wyczyn33_open();}
        else if (hash == "wyczyn34") {wyczyn34_open();}
        else if (hash == "wyczyn35") {wyczyn35_open();}
        else if (hash == "wyczyn36") {wyczyn36_open();}
        else if (hash == "wyczyn37") {wyczyn37_open();}
        else if (hash == "wyczyn38") {wyczyn38_open();}
        else if (hash == "wyczyn39") {wyczyn39_open();}
        else if (hash == "wyczyn40") {wyczyn40_open();}
        else if (hash == "wyczyn41") {wyczyn41_open();}
        else if (hash == "wyczyn42") {wyczyn42_open();}
        else if (hash == "wyczyn43") {wyczyn43_open();}
        else if (hash == "wyczyn44") {wyczyn44_open();}
        else if (hash == "wyczyn45") {wyczyn45_open();}
        else if (hash == "wyczyn46") {wyczyn46_open();}
        else if (hash == "wyczyn47") {wyczyn47_open();}
        else if (hash == "wyczyn48") {wyczyn48_open();}
        else if (hash == "wyczyn49") {wyczyn49_open();}
        else if (hash == "wyczyn50") {wyczyn50_open();}
        else if (hash == "wyczyn51") {wyczyn51_open();}
        else if (hash == "wyczyn52") {wyczyn52_open();}
        else if (hash == "wyczyn53") {wyczyn53_open();}
        else if (hash == "wyczyn54") {wyczyn54_open();}
        else if (hash == "wyczyn55") {wyczyn55_open();}
        else if (hash == "wyczyn56") {wyczyn56_open();}
        else if (hash == "wyczyn57") {wyczyn57_open();}
        else if (hash == "wyczyn58") {wyczyn58_open();}
        else if (hash == "wyczyn59") {wyczyn59_open();}
        else if (hash == "wyczyn60") {wyczyn60_open();}
        else if (hash == "wyczyn61") {wyczyn61_open();}
        else if (hash == "wyczyn62") {wyczyn62_open();}
        else if (hash == "wyczyn63") {wyczyn63_open();}
        else if (hash == "wyczyn64") {wyczyn64_open();}
        else if (hash == "wyczyn65") {wyczyn65_open();}
        else if (hash == "wyczyn66") {wyczyn66_open();}
        else if (hash == "wyczyn67") {wyczyn67_open();}
        else if (hash == "wyczyn68") {wyczyn68_open();}
        else if (hash == "wyczyn69") {wyczyn69_open();}
        else if (hash == "wyczyn70") {wyczyn70_open();}
        else if (hash == "wyczyn71") {wyczyn71_open();}
        else if (hash == "wyczyn72") {wyczyn72_open();}
        else if (hash == "wyczyn73") {wyczyn73_open();}
        else if (hash == "wyczyn74") {wyczyn74_open();}
        else if (hash == "wyczyn75") {wyczyn75_open();}
        else if (hash == "wyczyn76") {wyczyn76_open();}
        else if (hash == "wyczyn77") {wyczyn77_open();}
        else if (hash == "wyczyn78") {wyczyn78_open();}
        else if (hash == "wyczyn79") {wyczyn79_open();}
        else if (hash == "wyczyn80") {wyczyn80_open();}
        else if (hash == "wyczyn81") {wyczyn81_open();}
        else if (hash == "wyczyn82") {wyczyn82_open();}
        else if (hash == "wyczyn83") {wyczyn83_open();}
        else if (hash == "wyczyn84") {wyczyn84_open();}
        else if (hash == "wyczyn85") {wyczyn85_open();}
        else if (hash == "wyczyn86") {wyczyn86_open();}
        else if (hash == "wyczyn87") {wyczyn87_open();}
        else if (hash == "wyczyn88") {wyczyn88_open();}
        else if (hash == "wyczyn89") {wyczyn89_open();}
        else if (hash == "wyczyn90") {wyczyn90_open();}
        else if (hash == "wyczyn91") {wyczyn91_open();}
        else if (hash == "wyczyn92") {wyczyn92_open();}
        else if (hash == "wyczyn93") {wyczyn93_open();}
        else if (hash == "wyczyn94") {wyczyn94_open();}
        else if (hash == "wyczyn95") {wyczyn95_open();}
        else if (hash == "wyczyn96") {wyczyn96_open();}
        else if (hash == "wyczyn97") {wyczyn97_open();}
        else if (hash == "wyczyn98") {wyczyn98_open();}
        else if (hash == "wyczyn99") {wyczyn99_open();}
        else if (hash == "wyczyn100") {wyczyn100_open();}

       
   }

});

function wyczyn1_open(){$('#wyczyn1').click();}
function wyczyn2_open(){$('#wyczyn2').click();}
function wyczyn3_open(){$('#wyczyn3').click();}
function wyczyn4_open(){$('#wyczyn4').click();}
function wyczyn5_open(){$('#wyczyn5').click();}
function wyczyn6_open(){$('#wyczyn6').click();}
function wyczyn7_open(){$('#wyczyn7').click();}
function wyczyn8_open(){$('#wyczyn8').click();}
function wyczyn9_open(){$('#wyczyn9').click();}
function wyczyn10_open(){$('#wyczyn10').click();}
function wyczyn11_open(){$('#wyczyn11').click();}
function wyczyn12_open(){$('#wyczyn12').click();}
function wyczyn13_open(){$('#wyczyn13').click();}
function wyczyn14_open(){$('#wyczyn14').click();}
function wyczyn15_open(){$('#wyczyn15').click();}
function wyczyn16_open(){$('#wyczyn16').click();}
function wyczyn17_open(){$('#wyczyn17').click();}
function wyczyn18_open(){$('#wyczyn18').click();}
function wyczyn19_open(){$('#wyczyn19').click();}
function wyczyn20_open(){$('#wyczyn20').click();}
function wyczyn21_open(){$('#wyczyn21').click();}
function wyczyn22_open(){$('#wyczyn22').click();}
function wyczyn23_open(){$('#wyczyn23').click();}
function wyczyn24_open(){$('#wyczyn24').click();}
function wyczyn25_open(){$('#wyczyn25').click();}
function wyczyn26_open(){$('#wyczyn26').click();}
function wyczyn27_open(){$('#wyczyn27').click();}
function wyczyn28_open(){$('#wyczyn28').click();}
function wyczyn29_open(){$('#wyczyn29').click();}
function wyczyn30_open(){$('#wyczyn30').click();}
function wyczyn31_open(){$('#wyczyn31').click();}
function wyczyn32_open(){$('#wyczyn32').click();}
function wyczyn33_open(){$('#wyczyn33').click();}
function wyczyn34_open(){$('#wyczyn34').click();}
function wyczyn35_open(){$('#wyczyn35').click();}
function wyczyn36_open(){$('#wyczyn36').click();}
function wyczyn37_open(){$('#wyczyn37').click();}
function wyczyn38_open(){$('#wyczyn38').click();}
function wyczyn39_open(){$('#wyczyn39').click();}
function wyczyn40_open(){$('#wyczyn40').click();}
function wyczyn41_open(){$('#wyczyn41').click();}
function wyczyn42_open(){$('#wyczyn42').click();}
function wyczyn43_open(){$('#wyczyn43').click();}
function wyczyn44_open(){$('#wyczyn44').click();}
function wyczyn45_open(){$('#wyczyn45').click();}
function wyczyn46_open(){$('#wyczyn46').click();}
function wyczyn47_open(){$('#wyczyn47').click();}
function wyczyn48_open(){$('#wyczyn48').click();}
function wyczyn49_open(){$('#wyczyn49').click();}
function wyczyn50_open(){$('#wyczyn50').click();}
function wyczyn51_open(){$('#wyczyn51').click();}
function wyczyn52_open(){$('#wyczyn52').click();}
function wyczyn53_open(){$('#wyczyn53').click();}
function wyczyn54_open(){$('#wyczyn54').click();}
function wyczyn55_open(){$('#wyczyn55').click();}
function wyczyn56_open(){$('#wyczyn56').click();}
function wyczyn57_open(){$('#wyczyn57').click();}
function wyczyn58_open(){$('#wyczyn58').click();}
function wyczyn59_open(){$('#wyczyn59').click();}
function wyczyn60_open(){$('#wyczyn60').click();}
function wyczyn61_open(){$('#wyczyn61').click();}
function wyczyn62_open(){$('#wyczyn62').click();}
function wyczyn63_open(){$('#wyczyn63').click();}
function wyczyn64_open(){$('#wyczyn64').click();}
function wyczyn65_open(){$('#wyczyn65').click();}
function wyczyn66_open(){$('#wyczyn66').click();}
function wyczyn67_open(){$('#wyczyn67').click();}
function wyczyn68_open(){$('#wyczyn68').click();}
function wyczyn69_open(){$('#wyczyn69').click();}
function wyczyn70_open(){$('#wyczyn70').click();}
function wyczyn71_open(){$('#wyczyn71').click();}
function wyczyn72_open(){$('#wyczyn72').click();}
function wyczyn73_open(){$('#wyczyn73').click();}
function wyczyn74_open(){$('#wyczyn74').click();}
function wyczyn75_open(){$('#wyczyn75').click();}
function wyczyn76_open(){$('#wyczyn76').click();}
function wyczyn77_open(){$('#wyczyn77').click();}
function wyczyn78_open(){$('#wyczyn78').click();}
function wyczyn79_open(){$('#wyczyn79').click();}
function wyczyn80_open(){$('#wyczyn80').click();}
function wyczyn81_open(){$('#wyczyn81').click();}
function wyczyn82_open(){$('#wyczyn82').click();}
function wyczyn83_open(){$('#wyczyn83').click();}
function wyczyn84_open(){$('#wyczyn84').click();}
function wyczyn85_open(){$('#wyczyn85').click();}
function wyczyn86_open(){$('#wyczyn86').click();}
function wyczyn87_open(){$('#wyczyn87').click();}
function wyczyn88_open(){$('#wyczyn88').click();}
function wyczyn89_open(){$('#wyczyn89').click();}
function wyczyn90_open(){$('#wyczyn90').click();}
function wyczyn91_open(){$('#wyczyn91').click();}
function wyczyn92_open(){$('#wyczyn92').click();}
function wyczyn93_open(){$('#wyczyn93').click();}
function wyczyn94_open(){$('#wyczyn94').click();}
function wyczyn95_open(){$('#wyczyn95').click();}
function wyczyn96_open(){$('#wyczyn96').click();}
function wyczyn97_open(){$('#wyczyn97').click();}
function wyczyn98_open(){$('#wyczyn98').click();}
function wyczyn99_open(){$('#wyczyn99').click();}
function wyczyn100_open(){$('#wyczyn100').click();}
 
    
});