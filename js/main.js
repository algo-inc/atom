$(document).ready(function() {

  var swiper = new Swiper('.header__swiper', {
      navigation: {
        nextEl: '.header__btn-next',
        prevEl: '.header__btn-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });

    var swiper = new Swiper('.about__swiper', {
      navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev',
      },
    });


    $(".tabs__link").on('click touch', function(e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tabs__link--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');
    $(this).addClass('tabs__link--active');
    $($(this).attr('href')).addClass('tabs__content--active');
  });

    var swiper = new Swiper('.popular__swiper', {
      slidesPerView: 4,
      spaceBetween: 0, 
      loop: true,
      navigation: {
        nextEl: '.popular__btn-next',
        prevEl: '.popular__btn-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {
        650: {
          slidesPerView: 1
        },
        950: {
          slidesPerView: 2
        },
        1250: {
          slidesPerView: 3
        },
      }
    });
       
});