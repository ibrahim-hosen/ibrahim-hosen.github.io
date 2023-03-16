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

     /*======== Menu Scroll ========*/
     $('#menu-mainmenu').onePageNav({
     	currentClass: 'current',
        changeHash: false,
        scrollSpeed: 0,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
     });
     
	/*======== WOW Activation ========*/
	new WOW().init();

}(jQuery));