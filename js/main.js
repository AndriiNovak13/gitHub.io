$(function(){
    //intro paralax
    $('.intro').scroll(function(){
        var x = $(this).scrollTop();
        console.log(parseInt(-x/10));
        $(this).css('background-position','0% '+parseInt(-x/10)+'px');
      });
    //menu
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
    });
    //scroll menu
        $(window).on("scroll", function() {
            if (screen.width > 767){

            var window_h = $(window).scrollTop();
            var main_h = $(".intro").innerHeight();
            var main__header = $(".intro__content").offset().top;
            if(window_h <= main_h - 10) {
                var op = (main__header - window_h - 20)/main__header
                $("header")
                    .removeClass("header__fixed")
                    .css("opacity",op);
            }
            if(window_h > main_h - 10) {
                $("header")
                    .addClass("header__fixed")
                    .css("opacity", 1);
            }
        }
        });
    
    //scroll in about
    $(".intro__btn-down").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
            "ease");
    });

    //wow
    new WOW().init();

});