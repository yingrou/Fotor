$(document).ready(function () {
    $("#e-mail").focus(function(){
        $(".e-mail").css("top","-13px");
    });
    $("#e-mail").blur(function(){
        $(".e-mail").css("top","5px");
    });
    $("#password").focus(function(){
        $(".password").css("top","57px");
    });
    $("#password").blur(function(){
        $(".password").css("top","75px");
    });
    $("#login").click(function () {
        $(".login-p,.register").hide();
        $(".register-p,.login").fadeIn();
    })
    $("#register").click(function () {
        $(".login-p,.register").fadeIn();
        $(".register-p,.login").hide();
    })
});