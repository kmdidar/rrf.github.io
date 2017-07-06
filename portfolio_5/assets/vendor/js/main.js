/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Spiderweb - Responsive Personal Template
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/

/*================================================
            Table of contents  
==================================================
 
1. Scroll NavBar
2. Dynamic Colors
3. Background-image flickering solution for mobile
4. Parallax
5. Type js
6. Wow js
7. Smooth scroll
8. Counter
9. Magnific Popup
10. Mixitup
11. OWL Carousel
12. Contact form
13. Google Map
14. Preloader

====================================================
            End table content 
===================================================*/

$(function () {
    "use strict";

    var $window = $(window),
    $body = $('body');

    jQuery(document).ready(function($){

//Scroll NavBar
$window.on("scroll", function () {
    if ($window.scrollTop() > 160) {
        $('#nav').addClass("scroll");
    } else {
            //remove the background property
            $('#nav').removeClass("scroll");
        }
    });

//Dynamic Colors
$(".option").on("click",function(){
  $("#box").toggleClass("open")}),
$("body").on("click",function(o){
  $(o.target).closest("#box").length||$(".box").removeClass("open")
});

$('.green').on("click", function () {
    $('#pagestyle').attr("href", "../css/style.css");
});
$('.red').on("click", function () {
    $('#pagestyle').attr("href", "../css/red.css");
});
$('.purple').on("click", function () {
    $('#pagestyle').attr("href", "../css/purple.css");
});
$('.blue').on("click", function () {
    $('#pagestyle').attr("href", "../css/blue.css");
});
$('.orange').on("click", function () {
    $('#pagestyle').attr("href", "../css/orange.css");
});
$('.peach').on("click", function () {
    $('#pagestyle').attr("href", "../css/peach.css");
});

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
  $('body').stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
});
});

//Type js
var element = $(".element");
$(function() {
  element.typed({
    strings: ["I am K. M. Didarul", "I am from Bangladesh.", "I'm Designer.", "I'm Photographer."],
    typeSpeed: 100,
    loop: true,
});
});

//Wow js
new WOW().init(); 

//Smooth Scroll
$(".nav a,#home a,#quote a,[href='#body']").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){
        window.location.hash = hash;
    });
  }
});

//Counter
$('.counter').counterUp({
    delay: 1,
    time: 200
});

//Magnific Popup
$('#parent').magnificPopup({
  delegate: 'a',
  type: 'image',
  closeOnContentClick: true,
  gallery: {enabled: true}
});

$('.larg-image').magnificPopup({
  type: 'image',
  gallery: {enabled: true},
  closeOnContentClick: true,
});

//Mixitup
$('#parent').mixItUp();

//Owl Carousel
$("#us").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: false,
    singleItem: true,
    loop: false,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        900:{
            items:3
        }
    }
});
$("#owl-example").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: false,
    singleItem: true,
    loop: false,
    responsive:{
        0:{
            items:1
        },
        680:{
            items:2
        }
    }
});
$("#partners").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1300,
    smartSpeed: 500,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    responsive: {
        0:{
            items:1
        },
        320:{
            items:2
        },
        420:{
            items:3
        },
        860:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

//Contact form
var validator=$("#form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
  },
  phone: "required",
  comments: "required",
},

messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address",
    phone: "Please enter your phone number",
    comments: "Please enter your message"
}
});
$(".send-btn").on("click", function () {
    $("#form").css("color", "#ac4b49");
});

//Google Map
var myCenter = new google.maps.LatLng(23.7806286,90.2793697);
function initialize() {
    var mapProp = {
        center:myCenter,
        zoom:7,
        scrollwheel:false,
        draggable:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    var marker = new google.maps.Marker({
        position:myCenter,
        icon: 'assets/vendor/images/map.png',
    });
    marker.setMap(map);
    marker.setAnimation(google.maps.Animation.BOUNCE);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Preloader
$window.on('load', function(){               
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow'); 
    $body.delay(350).css({'overflow':'visible'});           
});

}(jQuery));

});