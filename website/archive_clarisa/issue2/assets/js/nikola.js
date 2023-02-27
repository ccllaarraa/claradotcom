$(document).ready(function(){
  
    if ($('#nikola').hasClass('nikola-content')) {
       
        // nikola
        var slides = document.querySelectorAll('.nikola-slides .slide ');
        var slides2 = document.querySelectorAll('.nikola-slides2 .slide2 ');
        var slides3 = document.querySelectorAll('.nikola-slides3 .slide3 ');
        var slides4 = document.querySelectorAll('.nikola-slides4 .slide4');
        var slides5 = document.querySelectorAll('.nikola-slides5 .slide5 ');
        var slides6 = document.querySelectorAll('.nikola-slides6 .slide6 ');
        var currentSlide = 0;
        var currentSlide2 = 0;
        var currentSlide3 = 0;
        var currentSlide4 = 0;
        var currentSlide5 = 0;
        var currentSlide6 = 0;
    
        function nextSlide() {
            goToSlide(currentSlide+1);
        }
        function nextSlide2() {
            goToSlide2(currentSlide2+1);
        }
        function nextSlide3() {
            goToSlide3(currentSlide3+1);
        }
        function nextSlide4() {
            goToSlide4(currentSlide4+1);
        }
        function nextSlide5() {
            goToSlide5(currentSlide5+1);
        }
        function nextSlide6() {
            goToSlide6(currentSlide6+1);
        }
        
        function goToSlide(n) {
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide showing niko-div1';
        }
        function goToSlide2(n) {
            slides2[currentSlide2].className = 'slide2';
            currentSlide2 = (n+slides2.length)%slides2.length;
            slides2[currentSlide2].className = 'slide2 showing2 niko-div2';
        }
        function goToSlide3(n) {
            slides3[currentSlide3].className = 'slide3';
            currentSlide3 = (n+slides3.length)%slides3.length;
            slides3[currentSlide3].className = 'slide3 showing3 niko-div3';
        }
        function goToSlide4(n) {
            slides4[currentSlide4].className = 'slide4';
            currentSlide4 = (n+slides4.length)%slides4.length;
            slides4[currentSlide4].className = 'slide4 showing4 niko-div4';
        }
        function goToSlide5(n) {
            slides5[currentSlide5].className = 'slide5';
            currentSlide5 = (n+slides5.length)%slides5.length;
            slides5[currentSlide5].className = 'slide5 showing5 niko-div5';
        }
        function goToSlide6(n) {
            slides6[currentSlide6].className = 'slide6';
            currentSlide6 = (n+slides6.length)%slides6.length;
            slides6[currentSlide6].className = 'slide6 showing6 niko-div6';
        }
    
        var next1 = document.getElementById('next1');
        var next2 = document.getElementById('next2');
        var next3 = document.getElementById('next3');
        var next4 = document.getElementById('next4');
        var next5 = document.getElementById('next5');
        var next6 = document.getElementById('next6');
      
        next1.onclick = function() {
            nextSlide();
        };
        next2.onclick = function() {
            nextSlide2();
        };
        next3.onclick = function() {
            nextSlide3();
        };
        next4.onclick = function() {
            nextSlide4();
        };
        next5.onclick = function() {
            nextSlide5();
        };
        next6.onclick = function() {
            nextSlide6();
        };
      
    }
       
    
    });
    
    