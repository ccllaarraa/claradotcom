$(document).ready(function(){
//    images frontpage

$('.artist-title').hide().fadeIn(7000);
$('.home-btn').hide().fadeIn(7000);


    $(".div-blue").click(function(){
        $(".blue-content").toggle(1000);
    });
  
   
    $(".div-blue-lila ").click(function(){
        $(".blue-lila-content").toggle(1000);
    });
    $(".div-yellow").click(function(){
        $(".info-content").toggle(1000);
    });
    $(".div-lila").click(function(){
        $(".lila-content").toggle(1000);
    });
    $(".div-lila2").click(function(){
        $(".lila-content2").toggle(1000);
    });
    $(".div-red").click(function(){
        $(".red-content").toggle(1000);
    });
    $(".div-red2").click(function(){
        $(".red-content2").toggle(1000);
    });
    $(".div-yellow-green").click(function(){
        $(".yellow-green-content").toggle(1000);
    });
    $(".div-lila-red").click(function(){
        $(".lila-red-content").toggle(1000);
    });
    $(".div-green").click(function(){
        $(".green-content").toggle(1000);
    });
    $(".div-green-dark").click(function(){
        $(".dark-green-content").toggle(1000);
    });
    $(".div-red-yellow").click(function(){
        $(".welcome-content").toggle(1000);
    });
    $(".div-red-yellow2").click(function(){
        $(".plus-content").toggle(1000);
    });
    $(".div-yellow2").click(function(){
        $(".yellow-content").toggle(1000);
    });


    // ingeborg
    $(".down-left, .up-center-2").click(function(){
        $(this).addClass('hello');
    });


    // justine
    $(".just-div-1, .just-div-2, .just-div-3, .just-div-4, .just-vimeo-place").click(function(){
        $(this).next().addClass("block");
    });

    // quentin
     $(" .quent-vimeo-place, .quent-div").click(function(){
        $(this).next().addClass("block");
    });
    $(".quentin-second").click(function () {
        $(this).addClass('defaultcursor');
        $(this).animate({
            width: "100vw",
            height: "100vh",
            margin: '0'
          }, 800);
          $('.quentintool').hide('coupontooltip');
          $('.quentin-ctn-hidden').addClass('visible');
          $('.quent-itw-1').css("display", "none");
          $('.quent-itw-2').css("display", "none");
        });
        $(".quentin-toggle-left").click(function(){
            $(this).animate({
                width: "242px",
                height: "100vh",
                margin: '0'
              }, 800);
              $('.quentin-toggle-txt').addClass('visible');
              $('.quentin-toggle-left').addClass('defaultcursor');
          });
       
          $('.quentin-button-1')
            .on('mouseover', function (event) {
                $('.quentin-left-1').css("display", "inline");
            })
            .on('mouseout', function (event) {
                $('.quentin-left-1').css("display", "none");
            });

          $('.quentin-button-2')
          .on('mouseover', function (event) {
              $('.quentin-left-2').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-left-2').css("display", "none");
          });

          $('.quentin-button-3')
            .on('mouseover', function (event) {
                $('.quentin-left-3').css("display", "inline");
            })
            .on('mouseout', function (event) {
                $('.quentin-left-3').css("display", "none");
            });

          $('.quentin-button-4')
          .on('mouseover', function (event) {
              $('.quentin-left-4').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-left-4').css("display", "none");
          });

          $('.quentin-button-5')
            .on('mouseover', function (event) {
                $('.quentin-left-5').css("display", "inline");
            })
            .on('mouseout', function (event) {
                $('.quentin-left-5').css("display", "none");
            });

          $('.quentin-button-6')
          .on('mouseover', function (event) {
              $('.quentin-left-6').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-left-6').css("display", "none");
          });

          $('.quentin-button-7')
            .on('mouseover', function (event) {
                $('.quentin-left-7').css("display", "inline");
            })
            .on('mouseout', function (event) {
                $('.quentin-left-7').css("display", "none");
            });

          $('.quentin-button-8')
          .on('mouseover', function (event) {
              $('.quentin-left-8').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-left-8').css("display", "none");
          });

          $('.quentin-button-9')
          .on('mouseover', function (event) {
              $('.quentin-right-1').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-1').css("display", "none");
          });
          $('.quentin-button-10')
          .on('mouseover', function (event) {
              $('.quentin-right-2').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-2').css("display", "none");
          });
          $('.quentin-button-11')
          .on('mouseover', function (event) {
              $('.quentin-right-3').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-3').css("display", "none");
          });
          $('.quentin-button-12')
          .on('mouseover', function (event) {
              $('.quentin-right-4').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-4').css("display", "none");
          });
          $('.quentin-button-13')
          .on('mouseover', function (event) {
              $('.quentin-right-5').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-5').css("display", "none");
          });
          $('.quentin-button-14')
          .on('mouseover', function (event) {
              $('.quentin-right-6').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-6').css("display", "none");
          });
          $('.quentin-button-15')
          .on('mouseover', function (event) {
              $('.quentin-right-7').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-7').css("display", "none");
          });
          $('.quentin-button-16')
          .on('mouseover', function (event) {
              $('.quentin-right-8').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-8').css("display", "none");
          });
          $('.quentin-button-17')
          .on('mouseover', function (event) {
              $('.quentin-right-9').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-9').css("display", "none");
          });
          $('.quentin-button-18')
          .on('mouseover', function (event) {
              $('.quentin-right-11').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-11').css("display", "none");
          });
          $('.quentin-button-19')
          .on('mouseover', function (event) {
              $('.quentin-right-12').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-12').css("display", "none");
          });
          $('.quentin-button-20')
          .on('mouseover', function (event) {
              $('.quentin-right-13').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-13').css("display", "none");
          });
          $('.quentin-button-21')
          .on('mouseover', function (event) {
              $('.quentin-right-14').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-14').css("display", "none");
          });
          $('.quentin-button-22')
          .on('mouseover', function (event) {
              $('.quentin-right-15').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-15').css("display", "none");
          });
          $('.quentin-button-23')
          .on('mouseover', function (event) {
              $('.quentin-right-16').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-16').css("display", "none");
          });
          $('.quentin-button-24')
          .on('mouseover', function (event) {
              $('.quentin-right-17').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-17').css("display", "none");
          });
          $('.quentin-button-25')
          .on('mouseover', function (event) {
              $('.quentin-right-18').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-18').css("display", "none");
          });
          $('.quentin-button-26')
          .on('mouseover', function (event) {
              $('.quentin-right-19').css("display", "inline");
          })
          .on('mouseout', function (event) {
              $('.quentin-right-19').css("display", "none");
          });
        //   phylactere
        $(".slidingDiv").hide();
        $(".slidingDiv2").hide();
        $(".show_hide").show();
        $(".show_hide2").show();
    
        $('.show_hide').click(function () {
            $(".slidingDiv").toggle( "slide");
        });
        $('.show_hide2').click(function () {
            $(".slidingDiv2").toggle( "slide");
        });
        $('.phyl-div-1')
        .on('mouseover', function (event) {
            $('.phyl-img-1').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-1').css("display", "none");
        });
        $('.phyl-div-2')
        .on('mouseover', function (event) {
            $('.phyl-img-2').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-2').css("display", "none");
        });
        $('.phyl-div-3')
        .on('mouseover', function (event) {
            $('.phyl-img-3').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-3').css("display", "none");
        });
        $('.phyl-div-4')
        .on('mouseover', function (event) {
            $('.phyl-img-4').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-4').css("display", "none");
        });
        $('.phyl-div-5')
        .on('mouseover', function (event) {
            $('.phyl-img-5').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-5').css("display", "none");
        });
        $('.phyl-div-6')
        .on('mouseover', function (event) {
            $('.phyl-img-6').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-6').css("display", "none");
        });
        $('.phyl-div-7')
        .on('mouseover', function (event) {
            $('.phyl-img-7').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-7').css("display", "none");
        });
        $('.phyl-div-8')
        .on('mouseover', function (event) {
            $('.phyl-img-8').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-8').css("display", "none");
        });
        $('.phyl-div-9')
        .on('mouseover', function (event) {
            $('.phyl-img-9').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-9').css("display", "none");
        });
        $('.phyl-div-10')
        .on('mouseover', function (event) {
            $('.phyl-img-10').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-10').css("display", "none");
        });
        $('.phyl-div-11')
        .on('mouseover', function (event) {
            $('.phyl-img-11').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-11').css("display", "none");
        });
        $('.phyl-div-12')
        .on('mouseover', function (event) {
            $('.phyl-img-12').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-12').css("display", "none");
        });
        $('.phyl-div-13')
        .on('mouseover', function (event) {
            $('.phyl-img-13').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-13').css("display", "none");
        });
        $('.phyl-div-14')
        .on('mouseover', function (event) {
            $('.phyl-img-14').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-14').css("display", "none");
        });
        $('.phyl-div-15')
        .on('mouseover', function (event) {
            $('.phyl-img-15').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-15').css("display", "none");
        });
        $('.phyl-div-16')
        .on('mouseover', function (event) {
            $('.phyl-img-16').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.phyl-img-16').css("display", "none");
        });


        // charlotte
        $('.cha-stripe-1')
        .on('mouseover', function (event) {
            $('.charlotte-img1').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img1').css("display", "none");
        });
        $('.cha-stripe-2')
        .on('mouseover', function (event) {
            $('.charlotte-img2').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img2').css("display", "none");
        });
        $('.cha-stripe-3')
        .on('mouseover', function (event) {
            $('.charlotte-img3').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img3').css("display", "none");
        });
        $('.cha-stripe-4')
        .on('mouseover', function (event) {
            $('.charlotte-img4').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img4').css("display", "none");
        });
        $('.cha-stripe-5')
        .on('mouseover', function (event) {
            $('.charlotte-img5').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img5').css("display", "none");
        });
        $('.cha-stripe-6')
        .on('mouseover', function (event) {
            $('.charlotte-img6').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img6').css("display", "none");
        });
        $('.cha-stripe-7')
        .on('mouseover', function (event) {
            $('.charlotte-img7').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img7').css("display", "none");
        });
        $('.cha-stripe-8')
        .on('mouseover', function (event) {
            $('.charlotte-img8').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.charlotte-img8').css("display", "none");
        });

        $(".cha-first-text").click(function(){
            $(".cha-first-text-open").slideToggle('slow');
        });
        $(".cha-last-text").click(function(){
            $(".cha-last-text-open").slideToggle('slow');
        });

//testtttttt !!!!
        // $('.div-blue')
        // .on('mouseover', function (event) {
        //     $('.blue-content').css("display", "inline");
        // })
        // .on('mouseout', function (event) {
        //     $('.blue-content').css("display", "none");
        // });

     
     // ingeborg

     $('.inge-div-1')
     .on('mouseover', function (event) {
         $('.inge-img-1').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-1').css("display", "none");
     });
     $('.inge-div-2')
     .on('mouseover', function (event) {
         $('.inge-img-2').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-2').css("display", "none");
     });
     $('.inge-div-3')
     .on('mouseover', function (event) {
         $('.inge-img-3').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-3').css("display", "none");
     });
     $('.inge-div-4')
     .on('mouseover', function (event) {
         $('.inge-img-4').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-4').css("display", "none");
     });
     $('.inge-div-5')
     .on('mouseover', function (event) {
         $('.inge-img-5').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-5').css("display", "none");
     });
     $('.inge-div-6')
     .on('mouseover', function (event) {
         $('.inge-img-6').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-6').css("display", "none");
     });
     $('.inge-div-7')
     .on('mouseover', function (event) {
         $('.inge-img-7').css("display", "inline");
     })
     .on('mouseout', function (event) {
         $('.inge-img-7').css("display", "none");
     });
     $('.inge-right-top')
     .on('mouseover', function (event) {
         $('.inge-bio').css("display", "inherit");
     })
     .on('mouseout', function (event) {
         $('.inge-bio').css("display", "none");
     });

     $(".inge-left-bottom-left").click(function(){
            $(".inge-left-bottom-left-content").slideToggle('slow');
        });

        $(".inge-left-bottom-right").click(function(){
            $(".inge-left-bottom-right-content").slideToggle('slow');
        });

        $(".inge-left-top").click(function(){
            $(".inge-iframe").css("display", "inherit");
            $(".inge-left-top-child").css("display", "none");
        });

        // greg
        $(".greg-itw-left").click(function(){
            $(".greg-itw-left-ctn").slideToggle('slow');
        });

        $(".greg-itw-right").click(function(){
            $(".greg-itw-right-ctn").slideToggle('slow');
        });
        $('.greg-div-1')
        .on('mouseover', function (event) {
            $('.greg-img-1').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-1').css("display", "none");
        });
        $('.greg-div-2')
        .on('mouseover', function (event) {
            $('.greg-img-2').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-2').css("display", "none");
        });
        $('.greg-div-3')
        .on('mouseover', function (event) {
            $('.greg-img-3').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-3').css("display", "none");
        });
        $('.greg-div-4')
        .on('mouseover', function (event) {
            $('.greg-img-4').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-4').css("display", "none");
        });
        $('.greg-div-5')
        .on('mouseover', function (event) {
            $('.greg-img-5').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-5').css("display", "none");
        });
        $('.greg-div-6')
        .on('mouseover', function (event) {
            $('.greg-img-6').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-6').css("display", "none");
        });
        $('.greg-div-7')
        .on('mouseover', function (event) {
            $('.greg-img-7').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-7').css("display", "none");
        });
        $('.greg-div-8')
        .on('mouseover', function (event) {
            $('.greg-img-8').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-8').css("display", "none");
        });
        $('.greg-div-9')
        .on('mouseover', function (event) {
            $('.greg-img-9').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img-9').css("display", "none");
        });

        $('.greg-stripe-1')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-1').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-1').css("display", "none");
        });
        $('.greg-stripe-2')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-2').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-2').css("display", "none");
        });
        $('.greg-stripe-3')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-3').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-3').css("display", "none");
        });
        $('.greg-stripe-4')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-4').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-4').css("display", "none");
        });
        $('.greg-stripe-5')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-5').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-5').css("display", "none");
        });
        $('.greg-stripe-6')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-6').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-6').css("display", "none");
        });
        $('.greg-stripe-7')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-7').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-7').css("display", "none");
        });
        $('.greg-stripe-8')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-8').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-8').css("display", "none");
        });
        $('.greg-stripe-9')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-9').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-9').css("display", "none");
        });

        $('.greg-stripe-10')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-10').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-10').css("display", "none");
        });

        $('.greg-stripe-11')
        .on('mouseover', function (event) {
            $('.greg-img3 .greg-img3-11').css("display", "inline");
        })
        .on('mouseout', function (event) {
            $('.greg-img3 .greg-img3-11').css("display", "none");
        });


        // claire
        $('.claire-btn1')
        .on('mouseover', function (event) {
            $('.claire-txt1, .claire-img-1, .claire-caption1').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt1, .claire-img-1, .claire-caption1').css("display", "none");
        });

        $('.claire-btn2')
        .on('mouseover', function (event) {
            $('.claire-txt2, .claire-img-2, .claire-caption2').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt2, .claire-img-2, .claire-caption2').css("display", "none");
        });

        $('.claire-btn3')
        .on('mouseover', function (event) {
            $('.claire-txt3, .claire-img-3, .claire-caption3').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt3, .claire-img-3, .claire-caption3').css("display", "none");
        });

        $('.claire-btn4')
        .on('mouseover', function (event) {
            $('.claire-txt4, .claire-img-4, .claire-caption4').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt4, .claire-img-4, .claire-caption4').css("display", "none");
        });

        $('.claire-btn5')
        .on('mouseover', function (event) {
            $('.claire-txt5').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt5').css("display", "none");
        });


        $('.claire-btn6')
        .on('mouseover', function (event) {
            $('.claire-txt6').css("display", "inherit");
        })
        .on('mouseout', function (event) {
            $('.claire-txt6').css("display", "none");
        });


        // INNA

        $( ".inna-block" ).click(function() {
            $( "#font" ).toggle( "slow", function() {
              
            });
            $( ".welcome-text" ).toggle( "slow", function() {
              
            });
          });
          $(".inna-block").click(function(){
            $(".border-left-welcome, .border-right-welcome").toggleClass("border-short");
          });
        //   heloise

                $(".helo-itw").click(function(){
                    $(".helo-itw-ctn").slideToggle('slow');
                });

            $('.helo-img1')
            .on('mouseover', function (event) {
                $('.helo-img1-1').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img1-1').css("display", "none");
            });
            $('.helo-img2')
            .on('mouseover', function (event) {
                $('.helo-img2-2').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img2-2').css("display", "none");
            });
            $('.helo-img3')
            .on('mouseover', function (event) {
                $('.helo-img3-3').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img3-3').css("display", "none");
            });
    
            $('.helo-img4')
            .on('mouseover', function (event) {
                $('.helo-img4-4').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img4-4').css("display", "none");
            });

            $('.helo-img5')
            .on('mouseover', function (event) {
                $('.helo-img5-5').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img5-5').css("display", "none");
            });

            $('.helo-txt6')
            .on('mouseover', function (event) {
                $('.helo-txt-ctn').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-txt-ctn').css("display", "none");
            });

            $('.helo-img6')
            .on('mouseover', function (event) {
                $('.helo-img6-6').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img6-6').css("display", "none");
            });
            $('.helo-img7')
            .on('mouseover', function (event) {
                $('.helo-img7-7').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img7-7').css("display", "none");
            });
        
      
            $('.helo-img8')
            .on('mouseover', function (event) {
                $('.helo-img8-8').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img8-8').css("display", "none");
            });
        
      
            $('.helo-img9')
            .on('mouseover', function (event) {
                $('.helo-img9-9').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img9-9').css("display", "none");
            });
        
      
            $('.helo-img10')
            .on('mouseover', function (event) {
                $('.helo-img10-10').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('.helo-img10-10').css("display", "none");
            });
        
             // berna
       
             $('.itw2')
             .on('mouseover', function (event) {
                 $('#berna-answer-2').css("display", "block");
             })
             .on('mouseout', function (event) {
                 $('#berna-answer-2').css("display", "none");
             });




            $('.itw1')
            .on('mouseover', function (event) {
                $('#berna-answer-1').css("display", "block");
            })
            .on('mouseout', function (event) {
                $('#berna-answer-1').css("display", "none");
            });
           
              var clickCount = 0;
                $(".berna-imgs").click(function(){
                    clickCount = (clickCount == 5) ? 0:clickCount;
                    if(clickCount == 0){
                        console.log(clickCount)
                        $('.berna-img-left .ctn-berna-1 img').css("display", "block");
                        $('.berna-img-center .ctn-berna-3 img').css("display", "block");
                    }else if(clickCount == 1){
                        console.log(clickCount)

                        $('.berna-img-left .ctn-berna-1 img').css("display", "none");
                        $('.berna-img-center .ctn-berna-3 img').css("display", "none");
                        $('.berna-img-center .ctn-berna-2 img').css("display", "block");
                    }
                    else if(clickCount == 2){
                        console.log(clickCount)

                        $('.berna-img-center .ctn-berna-2 img').css("display", "none");
                        $('.berna-img-right .ctn-berna-4 img').css("display", "block");
                        $('.berna-img-right .ctn-berna-5 img').css("display", "block");
                    }
                    else if(clickCount == 3){
                        console.log(clickCount)

                        $('.berna-img-left .ctn-berna-1 img').css("display", "block");
                        $('.berna-img-center .ctn-berna-2 img').css("display", "block");
                        $('.berna-img-center .ctn-berna-3 img').css("display", "block");
                        $('.berna-img-right .ctn-berna-4 img').css("display", "block");
                        $('.berna-img-right .ctn-berna-5 img').css("display", "block");
                    }
                    else if(clickCount == 4){
                        console.log(clickCount)

                        $('.berna-img-left .ctn-berna-1 img').css("display", "none");
                        $('.berna-img-center .ctn-berna-2 img').css("display", "none");
                        $('.berna-img-center .ctn-berna-3 img').css("display", "none");
                        $('.berna-img-right .ctn-berna-4 img').css("display", "none");
                        $('.berna-img-right .ctn-berna-5 img').css("display", "none");
                    }
                    clickCount++;
                });
                $(".mhand-text").click(function(){
                    $(".mhand-text-open").slideToggle('slow');
                });
                $(".mhand-text2").click(function(){
                    $(".mhand-text-open2").slideToggle('slow');
                });
                $(".mhand-text3").click(function(){
                    $(".mhand-text-open3").slideToggle('slow');
                });
              
                    
                $(".just-itw-1").click(function(){
                    $(".just-itw-1-open").slideToggle('slow');
                });
                $(".just-itw-2").click(function(){
                    $(".just-itw-2-open").slideToggle('slow');
                });
                $(".quent-itw-1").click(function(){
                    $(".quent-itw-1-open").slideToggle('slow');
                });
                $(".quent-itw-2").click(function(){
                    $(".quent-itw-2-open").slideToggle('slow');
                });

               
              

            // mhand

            var audio;
            var playlist;
            var tracks;
            var current;

            init();
            function init(){
                current = 0;
                audio = $('audio');
                playlist = $('#playlist');
                tracks = playlist.find('li a');
                len = tracks.length - 1;
                audio[0].volume = .10;
                audio[0].play();
                playlist.find('a').click(function(e){
                    e.preventDefault();
                    link = $(this);
                    current = link.parent().index();
                    run(link, audio[0]);
                });
                audio[0].addEventListener('ended',function(e){
                    current++;
                    if(current == len){
                        current = 0;
                        link = playlist.find('a')[0];
                    }else{
                        link = playlist.find('a')[current];    
                    }
                    run($(link),audio[0]);
                });
            }
            function run(link, player){
                    player.src = link.attr('href');
                    par = link.parent();
                    par.addClass('active').siblings().removeClass('active');
                    audio[0].load();
                    audio[0].play();
            }
          
    
    
      
      
    
    
      
  


    
   

});


// quentin tooltip
var tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', ok, false);
function ok(e) { 
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = (e.pageX - 1000) + 'px';
        tooltip[i].style.top = (e.pageY - 100) + 'px';
    }
}

// frontpage tooltips
var tooltips = document.querySelectorAll('.here-tooltip');

window.onmousemove = function (e) {
    var x = (e.clientX + 5 ) + 'px',
        y = (e.clientY ) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

// //logo
// setTimeout(function(){
//     $('.logo-1').fadeOut();// or fade, css display however you'd like.
//  }, 3000);
//  setTimeout(function(){
//   $('.logo-2').fadeOut();// or fade, css display however you'd like.
// }, 1000);
//  setTimeout(function(){
//   $('.logo-2').fadeIn();// or fade, css display however you'd like.
// }, 3500);

// //mobile
// if (screen.width <= 699) {
//     document.location = "../../archive_clarisa/issue2/mobile.html";
//   }


//   $(window).on('DOMContentLoaded', function(){
//     setTimeout(removeLoader, 500); //wait for page load PLUS one seconds.
//   });
//   function removeLoader(){
//       $( ".loading, #loading-logo" ).fadeOut(500, function() {
//         // fadeOut complete. Remove the loading div
//         $( ".loading,  #loading-logo" ).remove(); //makes page more lightweight 
//     });  
//   }