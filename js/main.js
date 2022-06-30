document.addEventListener('DOMContentLoaded',() => {
const elementosCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel, {
duration: 190,
dist: -90,
shift:66,
padding:16,
numVisible:8,
indicators: true,

});
});