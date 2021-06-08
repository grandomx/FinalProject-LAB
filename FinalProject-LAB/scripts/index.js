$(document).ready(function(){
    var showHeaderAt = 150;
    var win = $(window), body = $('body');

    if(win.width() > 400){
        win.on('scroll', function(e){
            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });
    }
});

const $window = $(window);
const $body = $('body');

class Slideshow {
  constructor(userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      sPg: true,
      dur: 10000,
      aP: true };


    let options = Object.assign({}, defaultOptions, userOptions);

    this.$el = options.$el;
    this.mS = this.$el.find($('.js-slider-home-slide')).length;
    this.sPg = options.sPg;
    this.currentSlide = 1;
    this.isAnimating = false;
    this.animDur = 1200;
    this.aPSpeed = options.dur;
    this.interval;
    this.$controls = this.$el.find('.js-slider-home-button');
    this.aP = this.mS > 1 ? options.aP : false;

    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
        this.goToSlide(event.target.dataset.slide);
      }
    });

    this.init();
  }

  init() {
    this.goToSlide(1);
    if (this.aP) {
      this.startaP();
    }

    if (this.sPg) {
      let page = '<div class="pagination"><div class="container">';

      for (let i = 0; i < this.mS; i++) {
        let item = `<span class="pagination__item js-pagination-item ${i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        page = page + item;
      }

      page = page + '</div></div>';

      this.$el.append(page);
    }
  }

  preventClick() {
    this.isAnimating = true;
    this.$controls.prop('disabled', true);
    clearInterval(this.interval);

    setTimeout(() => {
      this.isAnimating = false;
      this.$controls.prop('disabled', false);
      if (this.aP) {
        this.startaP();
      }
    }, this.animDur);
  }

  goToSlide(index) {
    this.currentSlide = parseInt(index);

    if (this.currentSlide > this.mS) {
      this.currentSlide = 1;
    }

    if (this.currentSlide === 0) {
      this.currentSlide = this.mS;
    }

    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.mS ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');

    if (this.mS > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }

    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
  }

  startaP() {
    this.interval = setInterval(() => {
      if (!this.isAnimating) {
        this.nextSlide();
      }
    }, this.aPSpeed);
  }

  destroy() {
    this.$el.off();
  }}


(function () {
  let loaded = false;
  let maxLoad = 3000;

  function loadSlider() {
    const options = {
      sPg: true
    };

    slideShow = new Slideshow(options);
  }

  function addLoadClass() {
    $body.addClass('is-loaded');

    setTimeout(function () {
      $body.addClass('is-animated');
    }, 600);
  }

  $window.on('load', function () {
    if (!loaded) {
      loaded = true;
      loadSlider();
    }
  });

  setTimeout(function () {
    if (!loaded) {
      loaded = true;
      loadSlider();
    }
  }, maxLoad);

  addLoadClass();
})();