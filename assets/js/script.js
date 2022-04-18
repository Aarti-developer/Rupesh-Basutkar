// ========================================================================= //
// Scroll to Top Script
// ========================================================================= //
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

let hamburger = document.getElementById("hamburger");
let btnClose = document.getElementById("btn_sideNavClose");
let menuLinks = document.getElementById("pc_link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-toggle");
  menuLinks.classList.toggle("active");
});
btnClose.addEventListener("click", () => {
  menuLinks.classList.remove("active");
});
(function($) {

  var SliceSlider = {

      settings: {
          delta: 0,
          currentSlideIndex: 0,
          scrollThreshold: 40,
          slides: $('.slide'),
          numSlides: $('.slide').length,
          navPrev: $('.js-prev'),
          navNext: $('.js-next'),
      },
      init: function() {
          s = this.settings;
          this.bindEvents();
      },

      bindEvents: function() {
          s.slides.on({
              'DOMMouseScroll mousewheel': SliceSlider.handleScroll
          });
          s.navPrev.on({
              'click': SliceSlider.prevSlide
          });
          s.navNext.on({
              'click': SliceSlider.nextSlide
          });
          $(document).keyup(function(e) {
              if ((e.which === 37) || (e.which === 38)) {
                  SliceSlider.prevSlide();
              }
              // Down or right
              if ((e.which === 39) || (e.which === 40)) {
                  SliceSlider.nextSlide();
              }
          });
      },

      handleScroll: function(e) {

          if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

              s.delta--;

              if (Math.abs(s.delta) >= s.scrollThreshold) {
                  SliceSlider.prevSlide();
              }
          } else {

              s.delta++;

              if (s.delta >= s.scrollThreshold) {
                  SliceSlider.nextSlide();
              }
          }

          return false;
      },

      showSlide: function() {
          // reset
          s.delta = 0;
          if ($('main').hasClass('is-sliding')) {
              return;
          }
          s.slides.each(function(i, slide) {
              $(slide).toggleClass('is-active', (i === s.currentSlideIndex));
              $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1));
              $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1));
              $('main').addClass('is-sliding');
              setTimeout(function() {
                  $('main').removeClass('is-sliding');
              }, 1000);
          });
      },

      prevSlide: function() {

          if (s.currentSlideIndex <= 0) {
              s.currentSlideIndex = s.numSlides;
          }
          s.currentSlideIndex--;

          SliceSlider.showSlide();
      },

      nextSlide: function() {
          s.currentSlideIndex++;
          if (s.currentSlideIndex >= s.numSlides) {
              s.currentSlideIndex = 0;
          }

          SliceSlider.showSlide();
      },
  };
  SliceSlider.init();
})(jQuery);