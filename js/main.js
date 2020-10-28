
// Navigation on scroll & Resize

(function () {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10 || window.innerWidth < 768) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        };
    });

    window.addEventListener('resize', function () {
        if (window.scrollY > 10 || window.innerWidth < 768) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        };
    });

    window.addEventListener('load', function () {
        if (window.innerWidth < 768 || window.scrollY > 10) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        };
    });
})();


// Open & Close Menu
(function () {
    const nav = document.querySelector('.nav');
    const toggleMenu = document.querySelector('.toggle-menu');

    toggleMenu.addEventListener('click', function () {
        nav.classList.toggle('open');
    })



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
