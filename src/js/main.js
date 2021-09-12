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

Fancybox.bind('[data-fancybox]', {
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
  callbacks : {
    onInitialized: function() {console.log(123);}
  }
}); 

// OverlayScrollbars(document.getElementById("#content-1"), { resize : "both" }); 


let articleLink = document.querySelectorAll(".article-slider__link")
articleLink.forEach(function(link) {
  link.addEventListener("mouseover", function () {
    let wrapper = link.closest(".article__left")
    wrapper.classList.add('visible')
  })
  link.addEventListener("mouseout", function () {
    let wrapper = link.closest(".article__left")
    wrapper.classList.remove('visible')
  })
})

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
