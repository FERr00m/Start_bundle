'use strict';
$(document).ready(function() {
  try {
    // Tabs sliders
    const sliderNewProducts = document.querySelector('.js-slider-newProducts');
    if (sliderNewProducts) {
      const init = new Swiper(sliderNewProducts, {
        // Optional parameters
        slidesPerView: 1,
        lazy: true,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
          el: '.js-slider-newProducts .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            //spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            //spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            pagination: false
          },
        },
        // autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.tabs-slider__btns-wrap .js-slider-newProducts-btn--next',
          prevEl: '.tabs-slider__btns-wrap .js-slider-newProducts-btn--prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
    }
  } catch (e) {console.error('Error in Tabs Banner ', e)}

  try {
    // Hover Effect for buttons
    //добавляет hover-эффект на кнопки
    function hoverEffect(elementParent, elementChild) {
      $(elementParent)
        .on('mouseenter', function(e) {
          const parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find(elementChild).css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
          const parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find(elementChild).css({top:relY, left:relX})
        });
    }
    hoverEffect('.js-hover-btn', '.span');
  } catch (e) {console.error('Error in Hover Effect for buttons ', e)}
});

window.addEventListener('load', function() {
  //
});
