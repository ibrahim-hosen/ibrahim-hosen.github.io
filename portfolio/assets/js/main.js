 (function($){
 /////Menu
      $(".humberger").on('click', function(){
        $(".actc-nav-menu-area").toggleClass('opener');
        $(".actc-humberger-area").hide('400');
      });
      $(".actc-cross-bar").on('click', function(){
        $(".actc-nav-menu-area").toggleClass('opener');
        $(".actc-humberger-area").show('400');
      });
 /////More Menu
       $(".menu-item-has-children").on('click', function(){
        $(".actc-menu-icon-rot").toggleClass('opener');
        $(".actc-sub-menu").toggleClass('opener');
      });
//// Porfolio isotope and filter
	// $(window).on('load', function() {
	// 	var portfolioIsotope = $('.grid').isotope({
	// 		itemSelector: '.grid-item'
	// 	});

	// 	$('#image-flters li').on('click', function() {
	// 		$("#image-flters li").removeClass('filter-active');
	// 		$(this).addClass('filter-active');

	// 		portfolioIsotope.isotope({
	// 			filter: $(this).data('filter')
	// 		});
	// 	});
	// });

////Slick
	$('.slick-items').slick({
		dots: true,
		arrows:true,
		prevArrow:'<button class="slick-custom-prev"><i class="bi bi-arrow-right"></i></button>',
        nextArrow:'<button class="slick-custom-next"><i class="bi bi-arrow-left"></i></button>',
	});
////ScrollTop send-massege
	$("#send-massege").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact-section").offset().top
		}, 500);
	});
////ScrollTop
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

///// Preloader
	 $(window).on('load', function() {
	 	if ($('#preloader').length) {
	 		$('#preloader').delay(100).fadeOut('slow', function() {
	 			$(this).remove();
	 		});
	 	}
	 });

/////matchHeightCol
		if($('.mHc').length){
		  $('.mHc').matchHeight();
		};
		if($('.mHc1').length){
		  $('.mHc1').matchHeight();
		};

 /////Menu
      $(".actc-acquaintance-search").on('click', function(){
        $(".actc-acquaintance-menu").toggleClass('opener');
      });

      $(".actc-acquaintance-menu ul li").on('click', function(){
        $(".actc-acquaintance-menu").removeClass('opener');
      });
})(jQuery);

