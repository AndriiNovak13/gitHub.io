$(function(){

// Scroll Events
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
        $('.header').addClass('header__fixed');
    }
    else {
        $('.header').removeClass('header__fixed');
    };

});


$('.header__menu-link').on('click', function(a){
    a.preventDefault();
  //  $(this).addClass('open');
    $('.header__burger-content').toggleClass('active');

    if ($('.header__burger-content').hasClass('active')) {
        $('.header__burger-exit').on('click', function(a){
            a.preventDefault();
            $('.header__burger-content').removeClass('active');
        })
    }
});

$(document).ready(function() {
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
	});
});


$('.user__photo-slaider').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    appendArrows:'.user__photo-arrow',
    cssEase: 'ease',
    asNavFor: '.user__coment-slaider',
    autoplay: true,
    autoplaySpeed: 6500,
    responsive: [
        {
          breakpoint: 551,
          settings: {
            arrows:false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            arrows:true,

          }
        }
    ]
});
$('.user__coment-slaider').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    cssEase: 'ease',
    asNavFor: '.user__photo-slaider',

    responsive: [{

          breakpoint: 768,
          settings: {
           
          }
    }]

});


// Price Table
var individual_plan_table = $('.plan__tabs').find('.plan__tab-item-individual');
var company_plan_table = $('.plan__tabs').find('.plan__tab-item-company');


$('.plan__switch').find('.individual').addClass('active');
$('.tabs').find('.ii').addClass('active');

$('.plan__switch').find('.individual').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.plan__switch').removeClass('active');
    $(this).siblings().removeClass('active');
    individual_plan_table.addClass('active');
    company_plan_table.removeClass('active');
});

$('.plan__switch').find('.company').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.plan__switch').addClass('active');
    $(this).siblings().removeClass('active');
    company_plan_table.addClass('active');
    individual_plan_table.removeClass('active');			
});



});



