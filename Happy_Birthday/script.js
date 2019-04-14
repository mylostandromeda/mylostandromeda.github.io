$(document).ready(function(){
    $(".btn").click(function(){
        $(".default").toggleClass("active");
        $(".head").toggleClass("head-close");
        $(".iframe").toggleClass("iframe-active");
        $(".main-block").show(500);
        return false;
    });
});
