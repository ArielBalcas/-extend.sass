document.addEventListener('DOMContentLoaded',() => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
    duration: 1,
    dist: -40,
    shift:90,
    padding:15,
    numVisible:12,
    indicators: true,
    
    });
    });