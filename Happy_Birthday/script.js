$(document).ready(function(){
    $(".btn").click(function(){
        $(".default").toggleClass("active");
        $(".head").toggleClass("head-close");
        $(".main-block").show(500);
        return false;
    });
});
