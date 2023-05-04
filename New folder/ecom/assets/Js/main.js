(function($){
  ////Add New...
      $(".dropdown_menu").on('click', function(){
        $(".dropdown-menu-irem").toggleClass('opener');
      });
  ////Slick
      $('.single-item').slick({
        // dots: true,
        arrows:true,
        prevArrow:'<button class="slick-custom-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="slick-custom-next"><i class="fas fa-angle-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 3000
      });
  /////Menu
      $(".humberger").on('click', function(){
        $(".hiead-menu").toggleClass('header2');
        $(".humberger").toggleClass('change');
        $(".nav-menu, .menu-area").toggleClass('opener');
      });
})(jQuery);

