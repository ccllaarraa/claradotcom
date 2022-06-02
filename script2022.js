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


// lazy load

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
