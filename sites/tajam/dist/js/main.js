$(function(){

    $('.header__burger').click(function(event){

        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
    
    // Scroll Events
	$(window).scroll(function(){

		let wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('.header').addClass('header__active');
		}
		else {
			$('.header').removeClass('header__active');
		};
        //Scroll Effects
        
    });
    
   

    $('.intro').scroll(function(){
        var x = $(this).scrollTop();
        console.log(parseInt(-x/10));
        $(this).css('background-position','0% '+parseInt(-x/10)+'px');
      });

    $('.intro__slaider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        dotsClass:'intro__slaider-dots',
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed: 4000,

    });

    $('.team').scroll(function(){
        var x = $(this).scrollTop();
        console.log(parseInt(-x/10));
        $(this).css('background-position','0% '+parseInt(-x/10)+'px');
      });


      $('.coment__slaider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        infinite: true,
        speed: 900,
        asNavFor: '.person__slaider'
    });

    $('.person__slaider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows:true,
        asNavFor: '.coment__slaider',
        speed: 800,


        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },

            {
                breakpoint: 467,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });


});