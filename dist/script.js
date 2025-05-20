const burger = document.querySelector(".burger__menu");
const hNav1 = document.querySelector(".header__nav1");
const hNav2 = document.querySelector(".header__nav2");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav1.classList.toggle("open");
  hNav2.classList.toggle("open");
});

var slider = tns({
  container: ".display__wrapper",
  items: 6,
  slideBy: "page",
  autoplay: true,
  controls: 0,
  autoplayButtonOutput: 0,
  // navContainer: ".slider__nav",
  mouseDrag: true,
});
