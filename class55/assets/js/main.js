(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".video-play-btn").magnificPopup({
		   type: 'video'
	   });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	