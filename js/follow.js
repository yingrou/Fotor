$(document).ready(function () {
    //关注
    $("#follow,input[name='follow']").click(function () {
        $(this).hide().siblings().fadeToggle();
        var num = $("#fans");
        num.text(parseInt(num.text())+1);
    });
    $("#no-follow,input[name='no-follow']").click(function () {
        $(this).hide().siblings().fadeToggle();
        var num = $("#fans");
        num.text(parseInt(num.text())-1);
    });
    $(".glyphicon-heart").click(function () {
        $(this).toggleClass("red");
        var num = $(this).parents(".action").siblings(".like").find("span");
        if ($(this).hasClass('red')){
            num.text(parseInt(num.text())+1);
        }
        else {
            num.text(parseInt(num.text())-1);
        }
    });
});