$(document).ready(function(){
    $(".btn").click(function(){
        $(".default").toggleClass("active");
        $(".iframe").toggleClass("iframe-active");
        $(".head").toggleClass("head-close");
        $(".main-block").show(500);
        return false;
    });
});
