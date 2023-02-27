let navBtn = document.querySelector(".nav__btn");
let navMenu = document.querySelector(".nav-menu");
let desktopMenuLinks = Array.from(document.querySelectorAll(".menu__link"));
let mobileMenuLinks = Array.from(document.querySelectorAll(".mobile-menu__item"));
let paths = Array.from(document.querySelectorAll('path'))



desktopMenuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let find = desktopMenuLinks.find((item) => {
      return item.classList.contains("menu__link--active");
    });
    find.classList.remove("menu__link--active");
    item.classList.add("menu__link--active");
  });
});

mobileMenuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let find = mobileMenuLinks.find((item) => {
      return item.classList.contains("mobile-menu__item--main");
    });
    find.classList.remove("mobile-menu__item--main");
    item.classList.add("mobile-menu__item--main");
  });
});

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav__btn--open");

  if (navBtn.classList.contains("nav__btn--open")) {
    navMenu.classList.add("nav-menu--open");
  } else {
    navMenu.classList.remove("nav-menu--open");
  }
});
paths.forEach(item=>{
 item.addEventListener('click',()=>{
  item.classList.toggle('place__like-fill')
 })
})