$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,

        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1
                }

            }
        ]

    });
});