(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".company-details").owlCarousel({
            items:5,
        	nav: true,
        	autoplay: true,
        	dots: false,
        	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        	loop: true,
            
        });
         $(".homepage-slider").owlCarousel({
        	items:1,
        	nav: true,
        	autoplay: true,
        	dots: true,
        	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        	loop: true,
        	animateOut: 'fadeOut'

        });
        
        $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('.header-area').addClass("sticky");
          }
          else{
            $('.header-area').removeClass("sticky");
          }
        }); 


        


    });


    jQuery(window).load(function(){
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.scroll-to-top a').fadeIn();
            } else {
                $('.scroll-to-top a').fadeOut();
            }
        });
        $('.scroll-to-top a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        
    });


}(jQuery));	