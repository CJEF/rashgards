// console.log('');
"use strict";
// console.log('');
"use strict";
/* const swiper = new Swiper('.swiper', {
    loop: true,
}); */
"use strict";
"use strict";

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [55.824213, 37.652984],
    zoom: 18
  }, {
    searchControlProvider: "yandex#search"
  }),
      // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: "GRAPPFIT",
    balloonContent: "<img src=\"./img/map-logo.svg\" class=\"questions__map-logo\" alt=\"map image\"><p class=\"questions__map-text\">\u0433.\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433, \u0443\u043B. \u0411\u043E\u0440\u0438\u0441\u0430 \u0413\u0430\u043B\u0443\u0448\u043A\u0438\u043D\u0430, 10</p>"
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "./img/location-icon.svg",
    // Размеры метки.
    iconImageSize: [34, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-18, -55]
  });
  myMap.geoObjects.add(myPlacemark);
  /* document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      // const mapBaloon = document.querySelector(".ymaps-2-1-79-image");
      // mapBaloon.click();
      var balloon = new ymaps.Balloon(myMap);
      balloon.open(myMap.getCenter());
      // console.log(mapBaloon);
    }, 3000);
  }) */
  // var balloon = new ymaps.Balloon(myMap);
  // balloon.open();
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
var swiper = new Swiper(".swiper", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperReviews = new Swiper(".swiper-reviews", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true
  },
  spaceBetween: 25,
  // centeredSlides: true,
  slidesPerView: 3
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
Fancybox.bind("[data-fancybox]", {// Your options go here
});
/* var myScrollbar = document.querySelector('.fakescroll').fakeScroll({
  onChange: () => {
    myScrollbar.DOM.bar.style.left = myScrollbar.scrollRatio * 100 + "%";
  },
}) */

var instance = OverlayScrollbars(document.getElementById("content-1"), {// overflowBehavior : {
  //   x: "auto"
  // },
  // resize: "none",
  // sizeAutoCapable : false ,
  // scrollbars : {
  //   visibility: "visible"
  // },
}); // OverlayScrollbars(document.getElementById("#content-1"), { resize : "both" });

var articleLink = document.querySelectorAll(".article-slider__link");
articleLink.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    var wrapper = link.closest(".article__left");
    wrapper.classList.add("visible");
  });
  link.addEventListener("mouseout", function () {
    var wrapper = link.closest(".article__left");
    wrapper.classList.remove("visible");
  });
}); // setTimeout(function name(params) {
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

var SwiperTop = new Swiper(".gallery-slider--top", {
  spaceBetween: 15,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 0
  },
  loop: true,
  slidesPerView: "6",
  allowTouchMove: false,
  disableOnInteraction: true // mousewheel: false,

});
var SwiperBottom = new Swiper(".gallery-slider--bottom", {
  spaceBetween: 15,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 0
  },
  loop: true,
  slidesPerView: "6",
  allowTouchMove: false,
  disableOnInteraction: true
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;

    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // closeMenu();

        var blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var scrollTop = document.querySelector(".scroll-top");
var introHeight = document.querySelector("#intro").offsetHeight; // console.log("scrollTop", scrollTop);
// console.log("introHeight", introHeight);
// console.log("window.top", window.top);
// console.log("window.scrollTop ", window.scrollTop );
// console.log("window.scrollY", window.scrollY );

document.addEventListener("scroll", function () {
  if (window.scrollY > introHeight) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
//# sourceMappingURL=main.js.map
