// console.log('');
"use strict";
"use strict";

/* menu */
function closeMenu() {
  menuOverlay.classList.remove("active");
  menu.classList.remove("active");
}

var menu = document.querySelector(".mobile-menu");
var menuOverlay = document.querySelector(".mobile-menu-overlay");
var burger = document.querySelector(".burger");
var closeBurger = document.querySelector(".burger-close");
var navLink = document.querySelectorAll(".nav__link");
burger.addEventListener("click", function () {
  menuOverlay.classList.add("active");
  menu.classList.add("active");
});
closeBurger.addEventListener("click", function () {
  closeMenu();
});
navLink.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});
// console.log('');
"use strict";
"use strict";

/* $(document).ready(function() {
    // $('input[data-type="ph"]').inputmask("+7(999)999-9999");
    $('input.btn').prop('disabled', 'true');
    $('input[data-type="ph"]').inputmask("+7(999)999-9999", { 
        clearMaskOnLostFocus: true ,
        definitions: {
            "0": {
                validator: "[0-9\uFF11-\uFF19]"
            }
        },
        "oncomplete": function() {
            // $(this).find('input.btn').removeAttr('disabled');
            $('input.btn').removeAttr('disabled');
        } 
    });
}); */
var imPhone = document.querySelectorAll(".im-phone");
imPhone.forEach(function (input) {
  var myInputMask = new Inputmask("+7(999)-999-9999");
  myInputMask.mask(input);
});
"use strict";

var callbackBtn = document.querySelectorAll("a.nav__link[data-modal]");
var orderBtn = document.querySelectorAll("button.article-info__btn[data-modal]");
var agreement = document.querySelectorAll("button.footer-agreement__btn[data-modal]");
var sizeGridBtn = document.querySelectorAll("button.catalog__grid-btn[data-modal]");
var fighterBtn = document.querySelectorAll("button.fighters-item__btn[data-modal]");
var closeBtn = document.querySelectorAll(".modal__close");
var body = document.querySelector('body');

function openModal(e) {
  var target = e.target; // console.log("tar", target.closest('[data-modal]'));

  var targetWrap = target.closest('[data-modal]');
  var btnData = targetWrap.getAttribute('data-modal');
  var id = "#".concat(btnData);
  var modal = document.querySelector(id);
  var overlay = modal.closest(".modal-wrapper");
  modal.classList.add("active");
  overlay.classList.add("active");
  body.classList.add('overflow-hidden');
}

function closeModal(e) {
  var target = e.target;
  var modal = target.closest(".modal");
  var overlay = target.closest(".modal-wrapper");
  modal.classList.remove('active');
  overlay.classList.remove("active"); // modal.forEach(function(elem) {
  // if (!elem.classList.contains('active')) {
  //   console.log(elem);

  body.classList.remove('overflow-hidden'); // }
  // })
}

fighterBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
sizeGridBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
orderBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
callbackBtn.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
closeBtn.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});
agreement.forEach(function (elem) {
  elem.addEventListener("click", openModal);
});
"use strict";

var _Swiper, _Swiper2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperReviews = new Swiper(".swiper-reviews", {
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
      centeredSlides: true
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
var SwiperTop = new Swiper(".gallery-slider--top", (_Swiper = {
  spaceBetween: 15,
  centeredSlides: true,
  speed: 6000,
  loop: true,
  autoplay: {
    delay: 0
  }
}, _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "slidesPerView", "6"), _defineProperty(_Swiper, "allowTouchMove", false), _defineProperty(_Swiper, "disableOnInteraction", true), _defineProperty(_Swiper, "breakpoints", {
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
}), _Swiper));
var SwiperBottom = new Swiper(".gallery-slider--bottom", (_Swiper2 = {
  spaceBetween: 15,
  centeredSlides: true,
  speed: 6000,
  loop: true,
  autoplay: {
    delay: 0
  }
}, _defineProperty(_Swiper2, "loop", true), _defineProperty(_Swiper2, "slidesPerView", "6"), _defineProperty(_Swiper2, "allowTouchMove", false), _defineProperty(_Swiper2, "disableOnInteraction", true), _defineProperty(_Swiper2, "breakpoints", {
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
}), _Swiper2));
var SwiperPartners = new Swiper(".swiper-partners", {
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
      speed: 4000
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

var fighterSlider = new Swiper(".fighter-slider", {
  spaceBetween: 30,
  slidesPerView: "3",
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 0
      /* centeredSlides: true, */

    },
    // when window width is >= 640px
    640: {// slidesPerView: 'auto',
    }
  }
});
// ymaps.ready(function () {
//     var myMap = new ymaps.Map(
//         "map",
//         {
//           center: [55.824213, 37.652984],
//           zoom: 18,
//         },
//         {
//           searchControlProvider: "yandex#search",
//         }
//       ),
//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),
//       myPlacemark = new ymaps.Placemark(
//         myMap.getCenter(),
//         {
//           hintContent: "GRAPPFIT",
//           balloonContent: `<img src="./img/map-logo.svg" class="questions__map-logo" alt="map image"><p class="questions__map-text">г.Екатеринбург, ул. Бориса Галушкина, 10</p>`,
//         },
//         {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: "default#image",
//           // Своё изображение иконки метки.
//           iconImageHref: "./img/location-icon.svg",
//           // Размеры метки.
//           iconImageSize: [34, 48],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-18, -55],
//         }
//       );
//     myMap.geoObjects.add(myPlacemark)
//     /* document.addEventListener("DOMContentLoaded", function() {
//       setTimeout(() => {
//         // const mapBaloon = document.querySelector(".ymaps-2-1-79-image");
//         // mapBaloon.click();
//         var balloon = new ymaps.Balloon(myMap);
//         balloon.open(myMap.getCenter());
//         // console.log(mapBaloon);
//       }, 3000);
//     }) */
//     // var balloon = new ymaps.Balloon(myMap);
//     // balloon.open();
//   });
"use strict";
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
swiperReviews.mousewheel.enable();
Fancybox.bind("[data-fancybox]", {// Your options go here
});
var instance = OverlayScrollbars(document.getElementById("content-1"), {});
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
