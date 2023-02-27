


//jquery
$(document).ready(function(){
    $(window).on('load', function() {
     
      $(".home").hide(0).delay(500).fadeIn(3000);
      if(window.outerWidth < 1000){
      $(".read-more-btn").hide(0).delay(500).fadeIn(3000);
      }
    });

console.log ('hi no error here yet bye');


//modal here

  var modalButtons = $('.artist-center, .plus1-title, .logo-ctn, .add--left--ok, .heart, .info, .add-bottom1, .add-bottom2, .add-bottom3, .add-center2, .add-center1, .add-center3, .merle, .clement-circle, .open-days-circle, .xenia-dotdotdot, .laura');
  var modals = $('.modal');
  

  $(modalButtons).on('click', function(e) {
  
          toggleModals(e)  ;
          console.log('hi')
     
  })

    function toggleModals(e) {
      var element = $(e.target);
      console.log(e)
      $(element).addClass('open-days-active clement-active ');
    
      var modalClass = element.attr('data-modal');
            var modalToOpen = $('.modal-' + modalClass);
            $(modals).removeClass('open ');
            $(modalToOpen).addClass('open ');

        
    }

    $('.close').on('click', function(){ 
      $(modals).removeClass('open')
    });


  
  

    $('#klara-circle1')
      .on('mouseover', function (event) {
          $('#klara-img1').css("visibility", "visible");
      })
      .on('mouseout', function (event) {
          $('#klara-img1').css("visibility", "hidden");
      });
   
    $('#klara-circle2')
      .on('mouseover', function (event) {
          $('#klara-img2, #klara-itw2').css("visibility", "visible");
      })
      .on('mouseout', function (event) {
          $('#klara-img2, #klara-itw2').css("visibility", "hidden");
      });

    $('#klara-circle3')
      .on('mouseover', function (event) {
          $('#klara-img3, #klara-itw3').css("visibility", "visible");
      })
      .on('mouseout', function (event) {
          $('#klara-img3, #klara-itw3').css("visibility", "hidden");
      });

    $('#klara-circle4')
      .on('mouseover', function (event) {
          $('#klara-img4, #klara-itw4').css("visibility", "visible");
      })
      .on('mouseout', function (event) {
          $('#klara-img4, #klara-itw4').css("visibility", "hidden");
      });
   
      setTimeout(function(){
        $('.logo-1').fadeOut();// or fade, css display however you'd like.
     }, 3000);
     setTimeout(function(){
      $('.logo-2').fadeOut();// or fade, css display however you'd like.
   }, 1000);
     setTimeout(function(){
      $('.logo-2').fadeIn();// or fade, css display however you'd like.
   }, 3500);

  //mute xenias video 
$("#xenia-video-1").prop('muted', true);

  $("#xenia-video-1").hover( function (){
    if( $("#xenia-video-1").prop('muted') ) {
          $("#xenia-video-1").prop('muted', false);
          $('#xenia-video1-caption').css("visibility", "visible");
    } else {
      $("#xenia-video-1").prop('muted', true);
      $('#xenia-video1-caption').css("visibility", "hidden");

    }
  });

  $("#xenia-video-2").prop('muted', true);

  $("#xenia-video-2").hover( function (){
    if( $("#xenia-video-2").prop('muted') ) {
          $("#xenia-video-2").prop('muted', false);
          $('#xenia-video2-caption').css("visibility", "visible");
    } else {
      $("#xenia-video-2").prop('muted', true);
      $('#xenia-video2-caption').css("visibility", "hidden");
    }
  });

  $("#xenia-video-3").prop('muted', true);

  $("#xenia-video-3").hover( function (){
    if( $("#xenia-video-3").prop('muted') ) {
          $("#xenia-video-3").prop('muted', false);
          $('#xenia-video3-caption').css("visibility", "visible");
    } else {
      $("#xenia-video-3").prop('muted', true);
      $('#xenia-video3-caption').css("visibility", "hidden");
    }
  });

//caption xeniaimg s
$(' #xenia-img1')
.on('mouseover', function (event) {
    $('#xenia-img1-caption').css("visibility", "visible");
})
.on('mouseout', function (event) {
    $('#xenia-img1-caption').css("visibility", "hidden");
});

$('#xenia-img3,  #xenia-img2')
.on('mouseover', function (event) {
    $('#xenia-img2-caption').css("visibility", "visible");
})
.on('mouseout', function (event) {
    $('#xenia-img2-caption').css("visibility", "hidden");
});


//serpent claws show images
$(".serpent-circle:first").addClass("serpent-circle-active");

$(".serpent-circle").hover( function (){
  $(".serpent-circle:first").removeClass("serpent-circle-active");
  $('.solo-1, .double-1').css("display", "none");
});

$('.circle-1')
  .on('mouseover', function (event) {
    $('.solo-1, .double-1').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-1, .double-1').css("display", "none");
  });


$('.circle-2')
  .on('mouseover', function (event) {
    $('.solo-2, .double-2').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-2, .double-2').css("display", "none");
  });

  $('.circle-3')
  .on('mouseover', function (event) {
    $('.solo-3, .double-3').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-3, .double-3').css("display", "none");
  });
  $('.circle-4')
  .on('mouseover', function (event) {
    $('.solo-4, .double-4').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-4, .double-4').css("display", "none");
  });
  $('.circle-5')
  .on('mouseover', function (event) {
    $('.solo-5, .double-5').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-5, .double-5').css("display", "none");
  });
  $('.circle-6')
  .on('mouseover', function (event) {
    $('.solo-6, .double-6').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.solo-6, .double-6').css("display", "none");
  });
//avatar
$('.call')
.on('mouseover', function (event) {
  $('.call-img1').css("visibility", "visible");
})
.on('mouseout', function (event) {
  $('.call-img1').css("visibility", "hidden");
});

$('.call2')
.on('mouseover', function (event) {
  $('.call-img2').css("visibility", "visible");
})
.on('mouseout', function (event) {
  $('.call-img2').css("visibility", "hidden");
});

$('.call3')
.on('mouseover', function (event) {
  $('.call-img3').css("visibility", "visible");
})
.on('mouseout', function (event) {
  $('.call-img3').css("visibility", "hidden");
});
$('.call4')
.on('mouseover', function (event) {
  $('.call-img4').css("visibility", "visible");
})
.on('mouseout', function (event) {
  $('.call-img4').css("visibility", "hidden");
});


//open days
$(".open-days-circle:first").addClass("open-days-active");



//ben
$(".ben-dot1").addClass("ben-active");
$('.ben-dot1')
  .on('mouseover', function (event) {
    $('.ben-content-1').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.ben-content-1').css("display", "none");
  });

  $('.ben-dot2')
  .on('mouseover', function (event) {
    $('.ben-content-2').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.ben-content-2').css("display", "none");
  });



  $('.ben-dot3')
  .on('mouseover', function (event) {
    $('.ben-content-3').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.ben-content-3').css("display", "none");
  });
  
  $('.ben-dot4')
  .on('mouseover', function (event) {
    $('.ben-content-4').css("display", "inline");
  })
  .on('mouseout', function (event) {
    $('.ben-content-4').css("display", "none");
  });


  //end jquery
});

//loader
// if (screen.width <= 699) {
//   document.location = "/mobile.html";
// }
    
$(window).on('DOMContentLoaded', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS one seconds.
});
function removeLoader(){
    $( "#loading" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading" ).remove(); //makes page more lightweight 
  });  
}

$(window).on('load', function(){
  setTimeout(removeLoader2, 500); //wait for page load PLUS one seconds.
});
function removeLoader2(){
    $( "#loading2" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading2" ).remove(); //makes page more lightweight 
  });  
}

$(window).on('DOMContentLoaded', function(){
  setTimeout(removeLoader3, 500); //wait for page load PLUS one seconds.
});
function removeLoader3(){
    $( "#loading3" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading3" ).remove(); //makes page more lightweight 
  });  
}

$(window).on('load', function(){
  setTimeout(removeLoader4, 500); //wait for page load PLUS one seconds.
});
function removeLoader4(){
    $( "#loading4" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading4" ).remove(); //makes page more lightweight 
  });  
}

$(window).on('load', function(){
  setTimeout(removeLoader5, 500); //wait for page load PLUS one seconds.
});
function removeLoader5(){
    $( "#loading5" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading5" ).remove(); //makes page more lightweight 
  });  
}


$(window).on('load', function(){
  setTimeout(removeLoader6, 500); //wait for page load PLUS one seconds.
});
function removeLoader6(){
    $( "#loading6" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading6" ).remove(); //makes page more lightweight 
  });  
}

$(window).on('load', function(){
  setTimeout(removeLoader7, 500); //wait for page load PLUS one seconds.
});
function removeLoader7(){
    $( "#loading7" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading7" ).remove(); //makes page more lightweight 
  });  
}






//ajax request
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.scrollTo(0, 0);
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("works").innerHTML =
  xhttp.responseText;
}

//go to home
function GoToHomePage()
{
  window.location = '/home.html';   
}

//date available

// Set the date we're counting down to
var countDownDate = new Date("October 16, 2020 ").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  // Display the result in the element with id="demo"
  // document.getElementById("date-available").innerHTML = days;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//date countodown

// Set the date we're counting down to
var countDownDate2 = new Date("September 16, 2020 ").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  
  // Display the result in the element with id="demo"
  document.getElementById("date-launch").innerHTML = days2;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



window.onload=function(){
var scroller = {};
scroller.e = document.getElementById("clement");
if(scroller.e){
if (scroller.e.addEventListener) {
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);
}

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

    var pst = $('#clement').scrollLeft() + delta;

    if (pst < 0) {
        pst = 0;
    } else if (pst > $('.clement-ctn').width()) {
        pst = $('.clement-ctn').width();
    }

    $('#clement').scrollLeft(pst);

    return false;
}
}

//clement click caption
function clementClick() {
  var x = document.getElementById("caption1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clementClick2() {
  var x = document.getElementById("caption2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// function clementClick3() {
//   var x = document.getElementById("caption3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
function clementClick4() {
  var x = document.getElementById("caption4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clementClick5() {
  var x = document.getElementById("caption5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clementClick6() {
  var x = document.getElementById("caption6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clementClick7() {
  var x = document.getElementById("caption7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

