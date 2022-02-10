/**
 * This is script for index page
 */

(function ($) {
  $(document).ready(function () {
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

    $('.hamburger').on('click', function () {
      $('.hamburger').toggleClass('active');
      $('.hamburger-menu').toggleClass('open');
    });
  });
})(jQuery);
