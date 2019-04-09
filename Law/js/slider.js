$('.protect-slider__block').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.examples-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.comments-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});