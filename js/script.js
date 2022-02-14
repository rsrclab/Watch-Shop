/**
 * This is script for index page
 */

(function ($) {
  $(document).ready(function () {
    if ( $('#multiscroll').length ) {
      $('#multiscroll').multiscroll({
        verticalCentered: true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        easingcss3: 'ease-out',
        sectionsColor: [],
        navigation: false,
        keyboardScrolling: true,
        touchSensitivity: 5,
  
        // //responsive
        responsiveWidth: 767,
  
        // Custom selectors
        sectionSelector: '.ms-section',
        leftSelector: '.ms-left',
        rightSelector: '.ms-right',
      });
    }

    $('.hamburger').on('click', function () {
      $('.hamburger').toggleClass('active');
      $('.hamburger-menu').toggleClass('open');
      $('.overlay').fadeToggle();
    });

    $('.footer-indicator').on('click', function () {
      $('.footer').toggleClass('show');
    });
    $(document).on('click', function(e) {
      if ( !$(e.target).closest('.footer').length ) {
        $('.footer').removeClass('show');
      }
    });
    $('.back-to-top a').on('click', function(e) {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });

    if ( $('.w-slider').length ) {
      $('.w-slider__holder').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
      });
    }
    
    if ( $('.f-intro').length ) {
      if ( $(window).width() < 768 ) {
        $('.f-intro__imgs').slick({
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          adaptiveHeight: true
        });
      }
    }

    if ( $(".pdetail").length ) {
      setTimeout(() => {
        $(".pdetail").addClass("active");
      }, 500);
    }

    if ( $(".story").length ) {
      setTimeout(() => {
        $(".story").addClass("active");
      }, 500);
    }

  });
})(jQuery);
