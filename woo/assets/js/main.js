 (function($){
  'use strict';
  var postJs = {
    m: function(e){
      postJs.method();
    },
    method: function(e){
      postJs.filterMenu();
      postJs.zoomImage();
      postJs.SlickSlider();
      postJs.backToTopInit();
      postJs.matchHeightCol();
    },

    filterMenu: function(e){
      $(".top-production a button").on('click', function(){
        $(".shop-crtl").toggleClass('active');
      });

      $(".xs-menu-title .xs-menu-ti").on('click', function(){
        $(".xs-main-menu-crtl").addClass('active-sd');
        $(".xs-shop-menu-crtl").removeClass('active-sd-cat');
      });

      $(".xs-menu-title .xs-shop-ti").on('click', function(){
        $(".xs-shop-menu-crtl").addClass('active-sd-cat');
        $(".xs-main-menu-crtl").removeClass('active-sd');
      });

       $(".xs-menu-ti").on('click', function(){
        $(".xs-menu-ti").addClass('active-s');
        $(".xs-shop-ti").removeClass('active-sd-ca');
      });

      $(".xs-shop-ti").on('click', function(){
        $(".xs-shop-ti").addClass('active-sd-ca');
        $(".xs-menu-ti").removeClass('active-s');
      });

      $(".mobile-icon-toggle").on('click', function(){
        $(".xs-menu-wrap").toggleClass('opener');
        $(".mobile-icon-toggle").addClass('opener');
        $("body").addClass('body-overflow');
      });

      $(".xs-menu-cros").on('click', function(){
        $(".xs-menu-wrap").removeClass('opener');
        $(".mobile-icon-toggle").removeClass('opener');
        $("body").removeClass('body-overflow');
      });
    },

    zoomImage: function(e){
     $(function (){
      $(".xzoom, .xzoom-gallery").xzoom({
        zoomwidth:400,
        tint:"red",
        Xoffset:15,
      });
    });
   },

   SlickSlider: function(e){
     $('#products-slider').slick({
      speed: 250,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:'<button class="slick-custom-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow:'<button class="slick-custom-next"><i class="fas fa-arrow-right"></i></button>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
       {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 477,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    });

    if ($(window).width() < 1169) {
      $('#slick-port').slick({
       speed: 250,
       slidesToShow: 4,
       slidesToScroll: 1,
       prevArrow:'<button class="zoom-img-left"><i class="fas fa-arrow-left"></i></button>',
       nextArrow:'<button class="zoom-img-right"><i class="fas fa-arrow-right"></i></button>'
     });
    }

      $('#related').slick({
       speed: 250,
       slidesToShow: 2,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
        responsive: [
          {
             breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
     });
   },

    backToTopInit: function(e){
      var btn = $('#button');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
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