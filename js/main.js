(function ($) {
    'use strict';

    /*======== Navbar Sticky Header ========*/
	$(window).scroll(function(){
        var $window = $(window);
        var win_height = $window.height()/2;
        if($window.scrollTop() >= win_height ) {
            $('header').addClass('navbar-scroll-fixed');
        } else {
            $('header').removeClass('navbar-scroll-fixed');
        }
    });
    
    /*======== Match Height ========*/
	if($('.mHc').length){
        $('.mHc').matchHeight();
     };
     if($('.mHc1').length){
        $('.mHc1').matchHeight();
     };
	/*======== Portfolio Mixitop Activation ========*/
	var mixer = mixitup('.portfolio-wrap');
	
 //    /*======== Preloader ========*/
	// $(window).on('load', function() {
	//  	if ($('#preloader').length) {
	//  		$('#preloader').delay(100).fadeOut('slow', function() {
	//  			$(this).remove();
	//  		});
	//  	}
	// });

	// /*======== Mobile Menu Toggle Click Setup ========*/
	// $(".humbergur").on('click', function(){
 //       $(".humbergur").toggleClass('opener');
 //       $(".nav-menu").toggleClass('opener');
	// });

	// /*======== Countdown ========*/
	// $('.counter-number').each(function (){
	//  	$(this).prop('Counter',0).animate({
	//  		Counter: $(this).text()
	//  	},{
	//  		duration:1500,
	//  		easing:'swing',
	//  		step: function (now) {
	//  			$(this).text(Math.ceil(now));
	//  		}
	//  	});
	// });

	// /*======== Portfolio Mixitop Activation ========*/
	// var mixer = mixitup('.portfolio-content');

    


	// /*======== Back to Top Button ========*/
	// var btn = $('#button');
	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() > 150) {
	// 		btn.addClass('show');
	// 	} else {
	// 		btn.removeClass('show');
	// 	}
	// });

	// /*======== Portfolio Modal OwlCarousel Setup ========*/
	// if($('.portfolio-slider')){
	// 	$('.portfolio-slider').owlCarousel({
	// 	    margin:10,
	// 	    nav:true,
	// 	    items:1,
	// 	    loop: true,
	// 	    autoHeight: true,
	// 	    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	// 	});	
	// }


	// /*======== Testimonial OwlCarousel Setup ========*/
	// if($('.owl-carousel-testimonial').length){
	// 	$('.owl-carousel-testimonial').owlCarousel({
	// 	    items:1,
	// 	    nav:false,
	// 	    loop: true,
	// 	    autoHeight: true,
	// 	    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
	// 	});
	// }

	// /*======== Client OwlCarousel Setup ========*/
	// if($('.client-slider')){
	// 	$('.client-slider').owlCarousel({
	// 		loop: true,
	// 		responsiveClass: true,
	// 		margin: 10,
	// 		nav: false,
	// 		dots: false,
	// 		dotsEach: false,
	// 		autoplay: true,
	// 		autoplayTimeout: 1500,
	// 		autoplayHoverPause: true,
	// 		responsive: {
	// 			0: { items: 1	},
	// 			480: { items: 3 },
	// 			768: { items: 4 },
	// 			1000: { items: 6 }
	// 		}
	// 	});
	// }

	// /*======== Match Height ========*/
	// if($('.mHc').length){
 //        $('.mHc').matchHeight();
 //     };
 //     if($('.mHc1').length){
 //        $('.mHc1').matchHeight();
 //     };

 //     /*======== Menu Scroll ========*/
 //     $('#menu-mainmenu').onePageNav({
 //     	currentClass: 'current',
 //     	changeHash: false,
 //     	scrollSpeed: 500,
 //     	scrollThreshold: 0.1
 //     });
     
	/*======== WOW Activation ========*/
	new WOW().init();

}(jQuery));