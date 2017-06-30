//***********************************************
// Theme Name:Portfolio Template
// Author: K. M. Didarul
// Description: Portfolio Template.
// Version: 1.0
// Primary use: portfolio, agency, responsive, template, personal, photography, photographer, photo blog,                 model portfolio, creative, onepage, multipage, html template, etc.
// Support: rumon078102@gmail.com;
//***********************************************


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		-----------------------
		Main Menu
		-----------------------
		*/

		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 250) {
				$("#sticky-header").removeClass("sticky");
			} else {
				$("#sticky-header").addClass("sticky");
			}
		});


		/* 
		-----------------------
		Soooth Scroll
		-----------------------
		*/

	  $('a[href*=#]:not([href=#])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if ($(window).width() < 768) {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar-header').outerHeight(true) + 1
                      }, 800);
                      return false;
                  }
              } else {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar').outerHeight(true) + 1
                      }, 800);
                      return false;
                  }
              }

          }
      });

		/* 
		-----------------------
		Mix It Up
		-----------------------
		*/


		var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

		var mixer = mixitup(containerEl, {
			selectors: {
				target: '[data-ref~="mixitup-target"]'
			}
		});

		/* 
		-----------------------
		Feedback Carousel
		-----------------------
		*/

		$('.feedback-wrap').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true,
				},
				600: {
					items: 1,
					nav: true,
				},
				1000: {
					items: 1,
					nav: true,
					loop: true,
				}
			}
		})


		/* 
		-----------------------
		Client Carousel
		-----------------------
		*/

		$('.client-wrap').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true,
				},
				600: {
					items: 3,
					nav: true,
				},
				1000: {
					items: 5,
					nav: true,
					loop: true,
				}
			}
		})

		/* 
		-----------------------
		Counter UP
		-----------------------
		*/

		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});



		/* 
		-----------------------
		Skill Animation
		-----------------------
		*/

		jQuery('.skillbar').each(function () {
			jQuery(this).appear(function () {
				jQuery(this).find('.count-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});

		/* 
		-----------------------
		Scroll Up
		-----------------------
		*/

		$('.top-arrow').on('click', function () {
			$('body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$('.top-arrow').hide();

		$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.top-arrow').fadeIn();
		} else {
			$('.top-arrow').fadeOut();
		}
	});
		
	

		/* 
		-----------------------
		Wow Js
		-----------------------
		*/

		new WOW().init();


	}); // Ready


	//Preloader
	$(window).load(function () {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	});
	
	


}(jQuery));