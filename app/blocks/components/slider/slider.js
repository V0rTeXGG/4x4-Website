const sliderBanner = new Swiper('[data-swipper="banner"]', {
  slidesPerView: 1,
  spaceBetween: 0,
  watchOverflow: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '[data-swiper="banner-button-prev"]',
    nextEl: '[data-swiper="banner-button-next"]',
  },
  pagination: {
    el: '[data-swiper="banner-pagination"]',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+'<div class="swiper-pagination-bullet--width" style="width: 0"></div></span>';
    },
  },
});

const sliderProjects = new Swiper('[data-swipper="project"]', {
  slidesPerView: 2,
  spaceBetween: 26,
  watchOverflow: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: '[data-swiper="project-button-prev"]',
    nextEl: '[data-swiper="project-button-next"]',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
});

const sliderAwards = new Swiper('[data-swipper="awards"]', {
  slidesPerView: 5,
  spaceBetween: 24,
  watchOverflow: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: '[data-swiper="awards-button-prev"]',
    nextEl: '[data-swiper="awards-button-next"]',
  },
  breakpoints: {
    851: {
      slidesPerView: 5,
    },
    575: {
      slidesPerView: 3,
    },
    451: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
});


const sliderBlog = new Swiper('[data-swipper="blog"]', {
  slidesPerView: 2,
  spaceBetween: 26,
  watchOverflow: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: '[data-swiper="blog-button-prev"]',
    nextEl: '[data-swiper="blog-button-next"]',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
});

