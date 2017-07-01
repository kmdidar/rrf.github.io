/*
* ----------------------------------------------------------------------------------------
Author       : Creativepersonal
Template Name: DIDAR -Modern Personal Portfolio Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('load', function () {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });





        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });





        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  COUNTER UP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.counter-num').counterUp();


        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });






        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.work-inner').mixItUp();







        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();





        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".testimonial-list").owlCarousel({
            items: 2,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: false,
            autoHeight: true,
        });






        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });






        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();




        /*
         * ----------------------------------------------------------------------------------------
         *  GOOGLE MAP JS
         * ----------------------------------------------------------------------------------------
         */

        
             var center = [23.7519228,90.3498603];
    $('.marker')
      .gmap3({
        center: center,
        zoom: 12,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
      .infowindow({
                position: center,
                content:'<div style="color:#000000; border:1px solid #ddd;background-color: #A3CCFF; width:500px; line-height:46px; font-weight: 400; height: 50px; text-align:center">' +
          'Bocila, Mohammadpur, Dhaka)' +'</div>',
                pixelOffset: new google.maps.Size(0, -30)
            })
            .then(function (infowindow) {
                infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
            })



        /*
         * ----------------------------------------------------------------------------------------
         *  PROGRESS CIRCLE JS
         * ----------------------------------------------------------------------------------------
         */

        $("#progress-1").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 90, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });
        $("#progress-2").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 80, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });
        $("#progress-3").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 60, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });
        $("#progress-4").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 70, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });
        $("#progress-5").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 85, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });
        $("#progress-6").circliful({
            animation: 1, // if the circle should be animated initialy
            animationStep: 1, // how fast or slow the animation from 0 to 100
            foregroundBorderWidth: 15, // width of foreground circle border
            backgroundBorderWidth: 15, // width of background circle border
            percent: 95, // from 0 to 100
            textBelow: true,
            textStyle: 'font-size: 12px',
            textColor: '#000', // font color
            fontColor: '#000', // font color
            foregroundColor: '#FFC815', // width of foreground circle border
            backgroundColor: 'rgba(107, 109, 111, 0.5)',
            animateInView: true, // animate circle on scroll into view
        });








    });

})(jQuery);