/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */



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


