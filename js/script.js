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
      menu: false,
      sectionsColor: [],
      navigation: false,
      navigationPosition: 'right',
      navigationColor: '#000',
      navigationTooltips: [],
      loopBottom: false,
      loopTop: false,
      css3: false,
      paddingTop: 0,
      paddingBottom: 0,
      normalScrollElements: null,
      scrollOverflow: false,
      scrollOverflowOptions: null,
      keyboardScrolling: true,
      touchSensitivity: 5,

      //responsive
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveExpand: false,

      // Custom selectors
      sectionSelector: '.ms-section',
      leftSelector: '.ms-left',
      rightSelector: '.ms-right',

      //events
      onLeave: function (index, nextIndex, direction) { },
      afterLoad: function (anchorLink, index) { },
      afterRender: function () { },
      afterResize: function () { },
    });
    $('.hamburger').on('click', function () {
      $('.hamburger').toggleClass('active');
      $('.hamburger-menu').toggleClass('open');
    });
  });
})(jQuery);
