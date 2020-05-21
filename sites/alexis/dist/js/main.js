$(function(){

//header menu fixed

    let header = $(".header"),
    introH = $(".intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
        header.addClass("header-fixed");
    } else {
        header.removeClass("header-fixed");
    }
}


//menu
$('.header__burger').click(function(event){

    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('no-scroll');

});

//slaider-1

$('.testimonials__slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'ease'
});


//animate
let wow = new WOW(
    {
      mobile: false,     
    }
  );
  wow.init();


});