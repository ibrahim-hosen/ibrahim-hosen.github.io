(function ($) {
    'use strict';

    /*======== Preloader ========*/
	$(window).on('load', function() {
	 	if ($('#preloader').length) {
	 		$('#preloader').delay(100).fadeOut('slow', function() {
	 			$(this).remove();
	 		});
	 	}
	});

	/*======== Mobile Menu Toggle Click Setup ========*/
	$(".humbergur").on('click', function(){
       $(".humbergur").toggleClass('opener');
       $(".nav-menu").toggleClass('opener');
	});

	/*======== OwlCarousel Countdown Setup ========*/
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

	/*======== Portfolio Mixitop Activation ========*/
	var mixer = mixitup('.portfolio-content');

    /*======== Navbar Sticky Header ========*/
	$(window).scroll(function(){
        var $window = $(window);
        var win_height = $window.height()/2;
        if($window.scrollTop() >= win_height ) {
            $('.header-navbar').addClass('navbar-scroll-fixed');
        } else {
            $('.header-navbar').removeClass('navbar-scroll-fixed');
        }
    });


	/*======== Back to Top Button ========*/
	var toTop = $('#button'),
	scrollTrig = 300,
	backTop = function() {
		var windScroll = $(window).scrollTop();
		if(windScroll >= scrollTrig) {
			toTop.addClass('show');
		} else {
			toTop.removeClass('show');
		}
	};
	backTop();
	$(window).on('scroll', function() {
		backTop();
	});
	toTop.on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});


	/*======== Portfolio Modal OwlCarousel Setup ========*/
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


	/*======== Testimonial OwlCarousel Setup ========*/
	if($('.owl-carousel-testimonial').length){
		$('.owl-carousel-testimonial').owlCarousel({
		    items:1,
		    nav:false,
		    loop: true,
		    autoHeight: true,
		    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		});
	}

	/*======== Client OwlCarousel Setup ========*/
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

	/*======== Portfolio Modal with Ajax Setup ========*/
    $(document).on("click",'.portfolio-link', function(event){
		event.preventDefault();
		var portfolioID = $(this).data('ptid');
		// AJAX request
	    $.ajax({
			url: 'request url',
			type: 'post',
			data: {id: portfolioID},
			dataType: "json",
			success: function(res){ 
				// Add response in Modal body
			},
            error: function (res) {
            },
	  	});
    	$('#portfolioModal').modal('show');
    });

    /*======== Blog Modal with Ajax  ========*/
    $(document).on("click",'.blog_popup', function(event){
    	event.preventDefault();
    	var postID = $(this).data('id');
		// AJAX request
	    $.ajax({
			url: 'request url',
			type: 'post',
			data: {id: postID},
			dataType: "json",
			success: function(res){ 
				// Add response in Modal body
			},
            error: function (res) {
            },
	  	});
    	$('#blogModal').modal('show');
    });

	/*======== Ajax Contact form  ========*/

	$('#contact-form').validator();
	$(document).on("submit",'#contact-form', function(event){
		var scroll = false, msg = '';
		if(!event.isDefaultPrevented()) {
			var url = "mail.php";
			$.ajax({
				type: "POST",
				url: url,
				data: $(this).serialize(),
				dataType: "json",
				success: function(data) {
					console.log(data.message);
					if( data.status === 'success' ){
						$('#contact-form').find('.messages').html(data.message);
						$('#contact-form')[0].reset();
						msg = $('.success-msg');
						scroll = true;
					}else{
						$('#contact-form').find('.messages').html(data.message);
						$('#contact-form')[0].reset();
						msg = $('.error-msg');
						scroll = true;
					}
				},
	            error: function (data) {
	                $('#contact-form').find('.messages').html(data.message);
	                scroll = true;
	            },
			});
			if( scroll = true ){
				$('html, body').animate({
			        scrollTop: $("#contact").offset().top
			    }, 500);
				setTimeout(function () {
					msg.fadeOut('slow');
				}, 5000);
			}
			return false;
		}
	});

	/*======== Match Height ========*/
	if($('.mHc').length){
        $('.mHc').matchHeight();
     };
     if($('.mHc1').length){
        $('.mHc1').matchHeight();
     };

	/*======== mobileMenuActive ========*/
    $(document).on('click', '#menu-mainmenu li a', function (e) {
        $('#menu-mainmenu').removeClass('opener');
        $('.humbergur').removeClass('opener');
    }); 

     /*======== Menu Scroll ========*/
     $('#menu-mainmenu').onePageNav({
     	currentClass: 'current',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
     });
     
	/*======== WOW Activation ========*/
	new WOW().init();

}(jQuery));