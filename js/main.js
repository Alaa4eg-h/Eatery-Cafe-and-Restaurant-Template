
// Navigation on scroll

(function () {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        };
    });
})();



// Start Owl Crousel

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});








// Team Section Card Effects
const tilt = $('.js-tilt').tilt()
tilt.methods.destroy.call(tilt);
