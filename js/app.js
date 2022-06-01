window.addEventListener('load', () => {

  const swiperProduct = new Swiper(".js-swiper-product", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    clickable: true,
  });

  const swiperBg = new Swiper('.js-swiper-bg', {
    speed: 800,
    allowTouchMove: true,
    pagination: {
      el: '.js-slider-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: swiperProduct
    },
    breakpoints: {
      578: {
        allowTouchMove: false,
      }
    }

  });


  const header = document.querySelector('.js-header');
  const burgerBtn = header.querySelector('.js-header-burger');
  const burgerMenu = header.querySelector('.js-burger-menu');


  const mobContentBackBtn = document.querySelector('.js-mob-content-back-btn');

  const mobContentBtn = header.querySelector('.js-mob-content-btn');
  const mobContent = header.querySelector('.js-mob-block-content');

  burgerBtn.addEventListener('click', (e) => {
    header.classList.toggle('is-active');
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    mobContent.classList.remove('active');
  })

  mobContentBtn.addEventListener('click', (e) => {
    mobContent.classList.add('active');
  })

  mobContentBackBtn.addEventListener('click', (e) => {
    mobContent.classList.remove('active');
  })


  function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
      if (!e.target.matches(elem + ' .js-accardion-btn')) return;
      else {
        if (!e.target.parentElement.classList.contains('active')) {
          if (option == true) {
            var elementList = document.querySelectorAll(elem + ' .js-accardion-container');
            Array.prototype.forEach.call(elementList, function (e) {
              e.classList.remove('active');
            });
          }
          e.target.parentElement.classList.add('active');
        } else {
          e.target.parentElement.classList.remove('active');
        }
      }
    });
  }

  initAcc('.js-accardion', true);

});


