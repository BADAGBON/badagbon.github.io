const scroll = new SmoothScroll('a[href*="#"]');

const mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
}); 