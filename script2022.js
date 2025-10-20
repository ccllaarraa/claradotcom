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



// clock js
var inc = 1000;

clock();

function clock() {
    var date = new Date();

  var hours = ((date.getHours() + 12) % 12 + 1 );
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  var hour = hours * 30;
  var minute = minutes * 6;
  var second = seconds * 6;
  
  var classhour = document.getElementById('hour');

  classhour.style.transform = "rotate(" + hour + "deg)";
  document.querySelector('.minute').style.transform =  "rotate(" + minute + "deg)";
  document.querySelector('.second').style.transform =  "rotate(" + second + "deg)";
}

setInterval(clock, inc);
