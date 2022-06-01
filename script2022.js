$(document).ready(function() {

    $("#menu-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-margin").offset().top
        }, 100);
    });
    $("#menu-coming").click(function() {
        $('html, body').animate({
            scrollTop: $("#coming-margin").offset().top
        }, 100);
    });
    $("#menu-previous").click(function() {
        $('html, body').animate({
            scrollTop: $("#previous-margin").offset().top
        }, 100);
    });
    $("#menu-footer").click(function() {
        $('html, body').animate({
            scrollTop: $("#footer-margin").offset().top
        }, 100);
    });
    $('.project-img').slick({
        dots: false,
        infinite: true,
        speed: 100,
        fade: true,
        adaptiveHeight: true,
      });

      
})