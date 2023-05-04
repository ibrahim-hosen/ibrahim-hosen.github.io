$(document).ready(function($){

	// WOW Js Active
	new WOW().init();
	
	//Main menu
	$(".humbergur").on('click', function(){
       $(".humbergur").toggleClass('opener');
       $(".nav-menu").toggleClass('opener');
	});

	//Counter
	$('.counter-number').each(function (){
	 	$(this).prop('Counter',0).animate({
	 		Counter: $(this).text()
	 	},{
	 		duration:1500,
	 		easing:'swing',
	 		step: function (now) {
	 			$(this).text(Math.ceil(now));
	 		}
	 	});
	});

	//Mixitop Active 
	var mixer = mixitup('.portfolio-content');

	//Tki menu
	var menu = $('#menu-show');
	$(window).scroll(function() {
		if ($(window).scrollTop() > 50) {
			menu.addClass('show');
		} else {
			menu.removeClass('show');
		}
	});

	//Tki menu
	var btn = $('#button');
	$(window).scroll(function() {
		if ($(window).scrollTop() > 150) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	//Portfolio Modal
	if($('.portfolio-slider')){
		$('.portfolio-slider').owlCarousel({
		    margin:10,
		    nav:true,
		    items:1,
		    loop: true,
		    autoHeight: true,
		    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		});	
	}


	//Testimonial
	if($('.owl-carousel-testimonial').length){
		$('.owl-carousel-testimonial').owlCarousel({
		    items:1,
		    nav:false,
		    loop: true,
		    autoHeight: true,
		    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		});
	}

	//Client
	if($('.client-slider')){
		$('.client-slider').owlCarousel({
			loop: true,
			responsiveClass: true,
			margin: 10,
			nav: false,
			dots: false,
			dotsEach: false,
			autoplay: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			responsive: {
				0: { items: 1	},
				480: { items: 3 },
				768: { items: 4 },
				1000: { items: 6 }
			}
		});
	}

	//Match-height
	if($('.mHc').length){
        $('.mHc').matchHeight();
     };
     if($('.mHc1').length){
        $('.mHc1').matchHeight();
     };

     //Preloader
     $(window).on('load', function() {
		 	if ($('#preloader').length) {
		 		$('#preloader').delay(100).fadeOut('slow', function() {
		 			$(this).remove();
		 		});
		 	}
	  });

     //Menu scrol
     $('#menu-mainmenu').onePageNav({
     	currentClass: 'current',
     	changeHash: false,
     	scrollSpeed: 500,
     	scrollThreshold: 0.1
     });
     
}(jQuery));