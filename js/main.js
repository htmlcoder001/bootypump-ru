'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),
  };

  /** Anchor smooth scroll **/
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = -30,
              element = document.querySelector(this.getAttribute('href')),
              target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

  /** Reviews carousel **/
  (() => {
    let photos_carousel =  '#photos_carousel';
    let reviews_carousel =  '#reviews_carousel';

    let photos_swiper = new Swiper(photos_carousel, {
      spaceBetween: 32,
      slidesPerView: 1,
      centered: true,
      pagination: {
        el: '.photos-wrapper__pagination',
        clickable: true
      },
      watchOverflow: true
    });

    let reviews_swiper = new Swiper(reviews_carousel, {
      spaceBetween: 64,
      slidesPerView: 1,
      pagination: {
        el: '.reviews-wrapper__pagination',
        clickable: true
      },
      watchOverflow: true
    });

  })();

});