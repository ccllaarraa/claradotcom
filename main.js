$(document).ready(function() {

// width random of three columns
    var first = Math.floor((Math.random() * 45) + 1);
    var second = Math.floor((Math.random() * 45) + 1);
    var third = 100 - (first + second);

    if ($(window).width() > 770) {
            $(".very-left").width( first + "%");
            $(".very-right").width( second + "%");
            $(".very-center").width( third + "%");
     
            var fourth = Math.floor((Math.random() * 45) + 1);
            $(".mynameis").height( fourth + "%");
    }
    // height random name
   
   
   
    // font random

    var classes = ["no-time", "swiss-affair", "mono-ohno"];

    $(".yall").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });

    $(".images-page").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
   



// transition page
$('.btn_nav').click(function() {
    
    console.log('click')
     $('.very-right').toggleClass('animate_content');

   

   
  });
  
  


});



function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}


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
  