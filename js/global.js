$(document).ready(function () {
    //导航
    $("#menu").click(function () {
        $(".nav-container").css("transform","translate3d(0, 0, 0)");
        $(".nav-bg").fadeIn();
        $("#footer").slideUp();
    });
    $(".nav-bg").click(function () {
        $(".nav-container").css("transform","translate3d(-100%, 0, 0)");
        $(this).fadeOut();
        $("#footer").slideDown();
    });
    $(".glyphicon-bell").click(function () {
        $(".notify-bg,.notify-box").fadeIn();
    });
    $(".notify-bg,.sure").click(function () {
        $(".notify-bg").fadeOut();
        $(".notify-box").fadeOut();
    });
    $(".glyphicon-send").click(function () {
        $(".share-box").slideDown();
        $(".share-bg").fadeIn();
    });
    $(".share-bg,.cancel-btn").click(function () {
        $(".share-box").slideUp();
        $(".share-bg").fadeOut();
    });
    $(".glyphicon-option-horizontal").click(function () {
        $(".more-box").slideDown();
        $(".more-bg").fadeIn();
    });
    $(".more-bg,.none").click(function () {
        $(".more-box").slideUp();
        $(".more-bg").fadeOut();
    });
    $(".glyphicon-edit").click(function () {
        $(".comment-box,.comment-bg").slideDown();
    });
    $(".comment-bg").click(function () {
        $(".comment-box,.comment-bg").slideUp();
    });
});