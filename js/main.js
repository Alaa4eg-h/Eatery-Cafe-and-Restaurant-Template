
// PRELOADER 
(function () {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function () {
        preloader.style.opacity = '0';
        document.querySelector('body').style.overflowY = 'auto';
    }, 5000);
})();


// Open & Close Menu
(function () {
    const nav = document.querySelector('.nav');
    const toggleMenu = document.querySelector('.toggle-menu');

    // open & Close Menu
    toggleMenu.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
})();


// Navigation on scroll & Resize

(function () {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10 || window.innerWidth < 768) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        }
    });

    window.addEventListener('resize', function () {
        if (window.scrollY > 10 || window.innerWidth < 768) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        }
    });

    window.addEventListener('load', function () {
        if (window.innerWidth < 768 || window.scrollY > 10) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        }
    });
})();

// GO TO SECTION SMOOTHLY
(function () {
    const navLink = document.querySelectorAll('.nav-link');

    // ADD EVENT TO LINKS
    navLink.forEach(function (Link) {
        Link.addEventListener('click', function (e) {
            e.preventDefault();
            // Store Href of a clicked link
            const href = e.target.getAttribute('href');
            const sectionOffset = document.querySelector(href).offsetTop;
            const navHeight = document.querySelector('.nav').clientHeight;
            const nav = document.querySelector('.nav');
            window.scrollTo({
                top: sectionOffset - navHeight,
                behavior: 'smooth'
            });
            // Close Menu When Select a link
            nav.classList.remove('open');
        });
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
const tilt = $('.js-tilt').tilt();
tilt.methods.destroy.call(tilt);
