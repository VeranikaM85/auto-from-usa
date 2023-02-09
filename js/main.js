$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    //   $(document).ready(function() { 
    //     $(window).resize(function(){
    //       var windowWidth = $(window).width();
    //       if(windowWidth > 992)$(".services__item").addClass("wow animate__fadeInRight");
    //       else $(".services__item").removeClass("wow animate__fadeInRight");
    //     });
    //   });

      wow = new WOW(
        {
          boxClass: 'wow',      // default
          animateClass: 'animate__animated', // default
          offset: 0,          // default
          mobile: true,       // default
          live: true        // default
        }
      )
      wow.init();

});