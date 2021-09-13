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
