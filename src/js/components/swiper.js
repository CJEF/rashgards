const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  const swiperReviews = new Swiper(".swiper-reviews", {
    pagination: {
      el: ".swiper-pagination-reviews",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 25,
    // centeredSlides: true,
    slidesPerView: 3,
    /* simulateTouch: false,
    preventInteractionOnTransition: true,
    mousewheelControl: false,
    onlyExternal: false,
    roundLengths: false,
    preventClicks: false,
    noSwiping: true,
    draggable: false,
    allowTouchMove: false,
    noSwiping: true,
    noSwipingClass: "swiper-slide", */
    breakpoints: {
      // when window width is >= 320px
      320: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  

let SwiperTop = new Swiper(".gallery-slider--top", {
    spaceBetween: 15,
    centeredSlides: true,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    slidesPerView: "6",
    allowTouchMove: false,
    disableOnInteraction: true,
    // mousewheel: false,
     breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
  
  let SwiperBottom = new Swiper(".gallery-slider--bottom", {
    spaceBetween: 15,
    centeredSlides: true,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    slidesPerView: "6",
    allowTouchMove: false,
    disableOnInteraction: true,
     breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });

  let SwiperPartners = new Swiper(".swiper-partners", {
    autoplay: {
      delay: 0
    },
    speed: 6000,
    loop: true,
    spaceBetween: 35,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 4000,
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 10,
        spaceBetween: 40
      }
    }
  });

  
  /* let SwiperLine = new Swiper(".swiper-line", {
    spaceBetween: 40,
    speed: 6000,
    slidesPerView: "4",
    loop: true,
  }); */
  
  let fighterSlider = new Swiper(".fighter-slider", {
    spaceBetween: 30,
    slidesPerView: "3",
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        /* centeredSlides: true, */
      },
      // when window width is >= 640px
      640: {
        // slidesPerView: 'auto',
      }
    }
  });
  
  