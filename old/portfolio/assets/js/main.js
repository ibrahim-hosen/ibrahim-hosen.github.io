 (function($){
 		'use strict';
 		var postJs = {
 			m: function(e){
 				postJs.method();
 			},
	 		method: function(e){
	 			postJs.mainMenu();
	 			postJs.portfolioFilter();
	 			postJs.allSlickSlider();
	 			postJs.topToContactInit();
	 			postJs.backToTopInit();
	 			postJs.preloaderInit();
	 			postJs.matchHeightCol();
			},

			mainMenu: function(e){
	      $(".humberger").on('click', function(){
	        $(".actc-nav-menu-area").toggleClass('opener');
	        $(".actc-humberger-area").hide('400');
	      });
	      $(".actc-cross-bar").on('click', function(){
	        $(".actc-nav-menu-area").toggleClass('opener');
	        $(".actc-humberger-area").show('400');
	      });
	 	    $(".menu-item-has-children").on('click', function(){ //More Menu
	        $(".actc-menu-icon-rot").toggleClass('opener');
	        $(".actc-sub-menu").toggleClass('opener');
	      });

	      $(".actc-acquaintance-search").on('click', function(){
	        $(".actc-acquaintance-menu").toggleClass('opener');
	      });

	      $(".actc-acquaintance-menu ul li").on('click', function(){
	        $(".actc-acquaintance-menu").removeClass('opener');
	      });
			},

			portfolioFilter: function(e){
				$('#image-flters li').click(function(){
					$('#image-flters li').removeClass("filter-active"); // reset active class
					$(this).addClass("filter-active"); // add active class to selected
					return false; // return needed to make function work
				});

				$(function() {
					var selectedClass = "";
					$("#image-flters li").click(function(){ // call function when item is clicked
						selectedClass = $(this).attr("data-filter"); // assigns class to selected item
						if( selectedClass == '*' ){
							$(".grid .grid-item").delay(200).fadeIn(200);
						}else{
							$(".grid .grid-item").fadeOut(200); // fades out all portfolio items
							$(".grid .grid-item" + selectedClass).delay(200).fadeIn(200); // fades in selected category
						}
					});
				});
			},

			allSlickSlider: function(e){
				$('.slick-items').slick({
					dots: true,
					arrows:true,
					prevArrow:'<button class="slick-custom-prev"><i class="bi bi-arrow-right"></i></button>',
			        nextArrow:'<button class="slick-custom-next"><i class="bi bi-arrow-left"></i></button>',
				});
			},

			topToContactInit: function(e){
				$("#send-massege").click(function() {
					$('html, body').animate({
						scrollTop: $("#contact-section").offset().top
					}, 500);
				});
			},

			backToTopInit: function(e){
				var btn = $('#button');
				$(window).scroll(function() {
					if ($(window).scrollTop() > 200) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});
				btn.on('click', function(e) {
					e.preventDefault();
					$('html, body').animate({scrollTop:0}, '200');
				});
			},

			preloaderInit: function(e){
			  $(window).on('load', function() {
				 	if ($('#preloader').length) {
				 		$('#preloader').delay(100).fadeOut('slow', function() {
				 			$(this).remove();
				 		});
				 	}
			  });
			},

			matchHeightCol: function(e){
				if($('.mHc').length){
				  $('.mHc').matchHeight();
				};
				if($('.mHc1').length){
				  $('.mHc1').matchHeight();
				};
			},

 		}
 		postJs.m();
})(jQuery);

