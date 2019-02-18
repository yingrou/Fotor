$(document).ready(function () {
    $(".detail").click(function () {
        $(".more-detail").slideToggle();
        $(".glyphicon-menu-down").toggleClass("rotate");
    })
});