$(document).ready(function () {
    $("#get_pic").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".line").css("left","50%");
        $("#task-list").hide();
        $("#pic-list").fadeIn();
    });
    $("#task").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".line").css("left","0");
        $("#pic-list").hide();
        $("#task-list").fadeIn();
    });
    $(".iknow").click(function () {
       $(this).parent().slideUp();
    });
});