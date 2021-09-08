$(document).ready(function() {

// width random of three columns
    var first = Math.floor((Math.random() * 45) + 1);
    var second = Math.floor((Math.random() * 45) + 1);
    var third = 100 - (first + second);

	$(".very-left").width( first + "%");
    $(".very-right").width( second + "%");
    $(".very-center").width( third + "%");


    // height random name

    var fourth = Math.floor((Math.random() * 45) + 1);
    $(".mynameis").height( fourth + "%");

    // font random

    var classes = ["no-time", "swiss-affair", "mono-ohno"];

    $(".yall").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
   



// transition page
$('.btn_nav').click(function() {
       
    console.log('click')
    $('.very-right').addClass('animate_content');
    $('.images-page').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.images-page').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.images-page').removeClass('fadeIn');
    }, 1500);
  
  });
  
  // on click show page after 1500ms
  $('.btn_link').click(function() {
    setTimeout(function() {
      $('.btn_link').addClass('fadeIn');
    }, 1500);
  });
});

  