/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

const swiper = new Swiper(".swiper", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperReviews = new Swiper(".swiper-reviews", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true,
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
});

swiperReviews.mousewheel.enable();

Fancybox.bind("[data-fancybox]", {
  // Your options go here
});

/* var myScrollbar = document.querySelector('.fakescroll').fakeScroll({
  onChange: () => {
    myScrollbar.DOM.bar.style.left = myScrollbar.scrollRatio * 100 + "%";
  },
}) */

var instance = OverlayScrollbars(document.getElementById("content-1"), {
  // overflowBehavior : {
  //   x: "auto"
  // },
  // resize: "none",
  // sizeAutoCapable : false ,
  // scrollbars : {
  //   visibility: "visible"
  // },
  
});

// OverlayScrollbars(document.getElementById("#content-1"), { resize : "both" });

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

// setTimeout(function name(params) {
//   /* (function ($) {
//     $(window).on("load", function () {
//       $("#content-1").mCustomScrollbar({
//         axis: "x", // horizontal scrollbars
//         theme:"dark",
//         advanced:{autoExpandHorizontalScroll:true}
//       });
//     });
//   })(jQuery); */
//   jQuery(document).ready(function(){
//     jQuery('.scrollbar-inner').scrollbar();
//   });
// }, 2000);

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
