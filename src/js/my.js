$(document).ready(function () {
    $('.slider__list').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></' +
                'button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i><' +
                '/button>'
    });
});
