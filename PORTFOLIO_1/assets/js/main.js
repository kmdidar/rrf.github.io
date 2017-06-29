(function ($) {
    
        /*----------------------------
	       Preloder
        ------------------------------ */
            $(".seth-site-preloder").fadeOut(1000);
    
		/*---------------------
		Top Menu Stick
		--------------------- */
		var s = $("#sticker");
		var pos = s.position();					   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			} else {
			s.removeClass("stick");	
			}
		});	
    
        /*----------------------------
            Slicknav Js
        ------------------------------ */
            $("ul#navigation").slicknav({
                prependTo:".responsive-menu-wrap"
            });
    
        /*----------------------------
	       OnePageNav js
        ------------------------------ */
			 $("ul#navigation").onePageNav();	
			jQuery(function($) {
				$('ul#navigation a').bind('click', function(event) {
					var $anchor = $(this);
					$('html').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 60
					}, 1000);
					event.preventDefault();
				});
			});    
    
        /*----------------------------
	       Active Slider Carousel
        ------------------------------ */
        $('.active-slider-carousel').owlCarousel({
            items: 1,
            loop:true,
            nav:true,
            dots: true,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            mouseDrag:false,
            touchDrag:false,
        });
        
         $(".active-slider-carousel").on("translate.owl.carousel", function(){
            $(".single-slide-item h1, .single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item .boxed-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".active-slider-carousel").on("translated.owl.carousel", function(){
            $(".single-slide-item h1, .single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item .boxed-btn").addClass("animated fadeInUp").css("opacity", "1");
        });
    
       /*----------------------------
	       Testimonial Carousel
        ------------------------------ */
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: false,
        });
    
        /*----------------------------
	       Active Single Team Carousel
        ------------------------------ */
        $(".active-single-team-carousel").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            autoplay: false,
            margin: 30,
           navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
               
            }
        });
    
       /*----------------------------
            Isotop Js
        ------------------------------ */
        var $grid = $('.portfolio-items').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });   
        // filter items on button click
            $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ 
                filter: filterValue });
            });
             $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
            });
        /*----------------------------
	       Wow js
        ------------------------------ */
            new WOW().init();
    
        /*----------------------------
	       MagnificPopup Js
        ------------------------------ */
            $('.portfolio-lightbox').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
            }    

            });  
    
        /*----------------------------
	       Scroll Top Plugin
        ------------------------------ */
            $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').fadeIn().addClass('opacity');
            } else {
            $('.scroll-up-btn').fadeOut();
            }
            });
            $('.scroll-up-btn').on('click', function () {
            $("html, body").animate({
            scrollTop: 0
            }, 1000);
            return false;
            });
    
})(jQuery);	