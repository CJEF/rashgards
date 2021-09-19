const callbackBtn = document.querySelectorAll("a.nav__link[data-modal]");
const orderBtn = document.querySelectorAll("button.article-info__btn[data-modal]");
const agreement = document.querySelectorAll("button.footer-agreement__btn[data-modal]");
const sizeGridBtn = document.querySelectorAll("button.catalog__grid-btn[data-modal]");
const fighterBtn = document.querySelectorAll("button.fighters-item__btn[data-modal]");

const closeBtn = document.querySelectorAll(".modal__close");
const body = document.querySelector('body');

function openModal(e) {
    const target = e.target;
    // console.log("tar", target.closest('[data-modal]'));
    const targetWrap = target.closest('[data-modal]');
    const btnData = targetWrap.getAttribute('data-modal');
    let id = `#${btnData}`;
    const modal = document.querySelector(id);   
    const overlay = modal.closest(".modal-wrapper");
    modal.classList.add("active");
    overlay.classList.add("active");
    body.classList.add('overflow-hidden')
}

function closeModal(e) {
  const target = e.target;
  const modal = target.closest(".modal")
  const overlay = target.closest(".modal-wrapper");
  modal.classList.remove('active')
  overlay.classList.remove("active");
  // modal.forEach(function(elem) {
    // if (!elem.classList.contains('active')) {
    //   console.log(elem);
      body.classList.remove('overflow-hidden');
    // }
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

callbackBtn.forEach(function(elem) {
    elem.addEventListener("click", openModal);
});

closeBtn.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

agreement.forEach(function (elem) {
  elem.addEventListener("click", openModal)
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    let modalWrap = document.querySelectorAll(".modal-wrapper");
    modalWrap.forEach(function(modal) {
      modal.classList.remove("active")
    })
  }
});