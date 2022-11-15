$(document).ready(function() {

$( "#clickme" ).click(function() {
  $( "#ressources" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

});