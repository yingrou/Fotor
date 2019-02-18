$(document).ready(function () {
    $(".all").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".line").css("left","33%");
        $(".all-pic").fadeIn().siblings().hide();
    });
    $(".my").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".line").css("left","66.6%");
        $(".my-pic").fadeIn().siblings().hide();
    });
    $(".hot").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".line").css("left","0");
        $(".hot-pic").fadeIn().siblings().hide();
    });
});