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
    $('.authorization__login').on('click', function (e) {
        e.preventDefault();
        $('.login-popup').addClass('login-popup_active');
    })
    $('.login-popup__cancel').on('click', function (e) {
        e.preventDefault();
        $('.login-popup').removeClass('login-popup_active');
    })

    $('.authorization__create-account').on('click', function (e) {
        e.preventDefault();
        $('.register-popup').addClass('register-popup_active');
    })
    $('.register-popup__cancel').on('click', function (e) {
        e.preventDefault();
        $('.register-popup').removeClass('register-popup_active');
    })

    $('.toggler__link-lang').on('click', function (e) {
        e.preventDefault();
        $('.toggler__link-lang').each(function () {
            $(this).removeClass('toggler__link-lang_active');
        })
        $(this).addClass('toggler__link-lang_active');
    })

    $('.toggler__link-currency').on('click', function (e) {
        e.preventDefault();
        $('.toggler__link-currency').each(function () {
            $(this).removeClass('toggler__link-currency_active');
        })
        $(this).addClass('toggler__link-currency_active');
    })
});
