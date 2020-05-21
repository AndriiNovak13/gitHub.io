$(function(){

    //paralax
    $('.intro').scroll(function(){
        var x = $(this).scrollTop();
        console.log(parseInt(-x/10));
        $(this).css('background-position','0% '+parseInt(-x/10)+'px');
      });

    //header fixed
    let header = $(".header"),
        // introH = $(".intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= 20) {
            header.addClass("header-fixed");
        } else {
            header.removeClass("header-fixed");
        }
    }
    
    //menu

    $('.btn-nav').click(function(event){

        $('.btn-nav, .header__menu').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    // btn down
        $(".intro__down-btn").click(function() {
            $('html,body').animate({
                scrollTop: $(".bouncy").offset().top-50},
                "linear");
        });


    //filter

    let filter=$("[data-filter]");
    filter.on("click", function(){
    event.preventDefault();

    $('[data-filter]').each(function(){
        $(this).removeClass('filter-active');
    });
    $(this).addClass('filter-active');

    let portf= $(this).data('filter');
    

        if(portf=='all'){
            $('[data-portf]').removeClass('hide-port');
        }
        else{
                $('[data-portf]').each(function(){
                    let workPortf = $(this).data('portf');
        
                    if(workPortf !=portf){
                        $(this).addClass('hide-port');
                    }
                    else{
                        $(this).removeClass('hide-port');
                    }
                });
        }         
    });

   //slaider-1
   $('.team__slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    dotsClass:'team__slaider-dots',
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    speed: 700,
    
  });

  //slaider-2
  $('.testi__slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    speed: 700,
  });

  //slaider-3
  $('.news__slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    vertical:true,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    
  });

//circle svg

$(window).scroll(function () {
    var Persentag = {
        0: {
            title: "Branding",
            value: "80 20"
        },
        1: {
            title: "Web Design",
            value: "75 25"
        },
        2: {
            title: "UI/UX",
            value: "60 40"
        }
    }

    function come(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();
        
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    if (come('.donut-segment')) {
        setTimeout(function() {
            $('.donut-segment').each(function (index, element) {
                $(this).css("stroke-dasharray", Persentag[index].value);
            });
        }, 200);
    }
});

});