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