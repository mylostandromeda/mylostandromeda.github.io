$(document).ready(function(){
    $(".header__button").click(function(){
        $(".menu").removeClass("menu_close");
        $(".menu").addClass("menu_open");
        $(".overlay").show();
        $(".overlay").animate({opacity:'1'},500);
        return false;
    });
    $(".overlay").click(function(){
        $(".menu").removeClass("menu_open");
        $(".menu").addClass("menu_close");
        $(".overlay").animate({opacity:'0'},500,function(){
            $(".overlay").hide();
        });
        return false;
    });
});