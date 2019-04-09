$(document).ready(function() {
    $('.header__mobile-menu-button').click(function() {
        $('.header').toggleClass('header_mobile-menu-active');
    });

    $('.header__mobile-menu').click(function() {
        $('.header').removeClass('header_mobile-menu-active');
    });

});