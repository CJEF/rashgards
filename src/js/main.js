/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

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

swiperReviews.mousewheel.enable();

Fancybox.bind("[data-fancybox]", {
  // Your options go here
});

var instance = OverlayScrollbars(document.getElementById("content-1"), {});

let articleLink = document.querySelectorAll(".article-slider__link");
articleLink.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    let wrapper = link.closest(".article__left");
    wrapper.classList.add("visible");
  });
  link.addEventListener("mouseout", function () {
    let wrapper = link.closest(".article__left");
    wrapper.classList.remove("visible");
  });
});

let SwiperTop = new Swiper(".gallery-slider--top", {
  spaceBetween: 15,
  centeredSlides: true,
  speed: 6000,
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

/* let SwiperLine = new Swiper(".swiper-line", {
  spaceBetween: 40,
  speed: 6000,
  slidesPerView: "4",
  loop: true,
}); */

let fighterSlider = new Swiper(".fighter-slider", {
  spaceBetween: 30,
  slidesPerView: "3",
});



const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // closeMenu();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

const scrollTop = document.querySelector(".scroll-top");
const introHeight = document.querySelector("#intro").offsetHeight;
// console.log("scrollTop", scrollTop);
// console.log("introHeight", introHeight);
// console.log("window.top", window.top);
// console.log("window.scrollTop ", window.scrollTop );
// console.log("window.scrollY", window.scrollY );

document.addEventListener("scroll", function() {
  if (window.scrollY > introHeight) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
})


